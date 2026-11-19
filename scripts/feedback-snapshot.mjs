// Downloads a year's survey responses from the published Google Sheet CSV
// and writes data/feedback/<year>.json, which /feedback/<year>/results renders.
//
//   node scripts/feedback-snapshot.mjs 2026   # one year
//   node scripts/feedback-snapshot.mjs        # every year with a csvUrl
//
// Runs on plain Node 22; no dependencies.
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const dataDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "data",
  "feedback",
);

const years = JSON.parse(
  await readFile(path.join(dataDir, "years.json"), "utf8"),
);
const requested = process.argv.slice(2);
const targets = requested.length ? requested : Object.keys(years);

let failed = false;
for (const year of targets) {
  const config = years[year];
  if (!config) {
    console.error(`${year}: not in years.json`);
    failed = true;
    continue;
  }
  if (!config.csvUrl) {
    console.log(`${year}: no csvUrl yet, skipping`);
    continue;
  }
  try {
    const csv = await download(config.csvUrl);
    const snapshot = summarize(year, parseCsv(csv), config.overrides ?? {});
    const file = path.join(dataDir, `${year}.json`);
    await writeFile(file, JSON.stringify(snapshot, null, 2) + "\n");
    console.log(
      `${year}: ${snapshot.responses} responses -> ${path.relative(process.cwd(), file)}`,
    );
  } catch (error) {
    console.error(`${year}: ${error.message}`);
    failed = true;
  }
}
process.exitCode = failed ? 1 : 0;

async function download(url) {
  const response = await fetch(url, { redirect: "follow" });
  if (!response.ok) throw new Error(`download failed: HTTP ${response.status}`);
  const text = await response.text();
  if (text.trimStart().startsWith("<")) {
    throw new Error(
      "got HTML instead of CSV; is the sheet published to the web as CSV?",
    );
  }
  return text;
}

// RFC 4180 parser: handles quoted fields with commas, quotes and newlines.
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          quoted = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      quoted = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += c;
    }
  }
  if (field !== "" || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((v) => v.trim() !== ""));
}

function summarize(year, rows, overrides) {
  const [header = [], ...records] = rows;
  const questions = header
    .map((label, index) => ({ label: label.trim(), index }))
    .filter(({ label }) => label && !/^timestamp$/i.test(label))
    .map(({ label, index }) => {
      const answers = records
        .map((r) => (r[index] ?? "").trim())
        .filter((v) => v !== "");
      const type = overrides[label] ?? detectType(answers);
      return {
        id: slug(label),
        label,
        type,
        answered: answers.length,
        ...stats(type, answers),
      };
    });

  return {
    year,
    updatedAt: new Date().toISOString(),
    responses: records.length,
    questions,
  };
}

function detectType(answers) {
  if (!answers.length) return "text";
  if (answers.every((v) => /^(10|[1-9])$/.test(v))) return "rating";
  // Multiple choice: few distinct short options, and at least one repeats
  // (free text rarely repeats exactly). With one or two answers nothing can
  // repeat yet, so trust the shape alone.
  const distinct = new Set(answers);
  const short = answers.every((v) => v.length <= 40 && !v.includes("\n"));
  if (
    distinct.size <= 8 &&
    short &&
    (distinct.size < answers.length || answers.length <= 2)
  ) {
    return "choice";
  }
  return "text";
}

function stats(type, answers) {
  switch (type) {
    case "rating": {
      const nums = answers.map(Number).filter(Number.isInteger);
      const scale = Math.max(5, ...nums) > 5 ? 10 : 5;
      const counts = {};
      for (let n = 1; n <= scale; n++) counts[n] = 0;
      for (const n of nums) counts[n] = (counts[n] ?? 0) + 1;
      const average = nums.length
        ? Math.round((nums.reduce((a, b) => a + b, 0) / nums.length) * 100) /
          100
        : null;
      return { scale, average, counts };
    }
    case "choice":
      return { counts: countValues(answers) };
    case "multi":
      // Checkbox questions: Google joins the selected options with ", ".
      return {
        counts: countValues(
          answers.flatMap((v) => v.split(/,\s*/).filter(Boolean)),
        ),
      };
    default:
      return { answers };
  }
}

function countValues(values) {
  const counts = {};
  for (const v of values) counts[v] = (counts[v] ?? 0) + 1;
  return Object.fromEntries(Object.entries(counts).sort((a, b) => b[1] - a[1]));
}

function slug(label) {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}
