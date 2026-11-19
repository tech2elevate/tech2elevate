# Student feedback surveys

One survey per year. Students open `tech2elevate.com/feedback/<year>`, which
embeds that year's Google Form. Results are published at
`/feedback/<year>/results` from a snapshot committed to this folder.

## Files

- `years.json` — one entry per year: page title, the Google Form URL, the
  published CSV URL of the linked Sheet, and optional per-question overrides.
- `<year>.json` — the snapshot `scripts/feedback-snapshot.mjs` writes. Do not
  edit by hand; re-run the script instead.

## Opening a new year's survey

1. In Google Forms, make a copy of last year's form (or create one from the
   question list below). Under Settings, turn **off** "Collect email
   addresses" and "Limit to 1 response" so students answer anonymously
   without signing in.
2. Click **Send**, pick the link icon, and copy the URL. Paste it as
   `formUrl` in `years.json`.
3. In the form's **Responses** tab, click the Sheets icon to create the
   linked spreadsheet.
4. In that spreadsheet: **File → Share → Publish to web**. Choose the
   responses sheet, pick **Comma-separated values (.csv)**, publish, and
   paste the URL as `csvUrl`. Publishing makes the raw responses readable by
   anyone with that URL, so keep the form anonymous.
5. Add the year to `years.json`, create `content/feedback/<year>/` by copying
   the previous year's folder, update the year inside the two pages, and add
   the year to `content/feedback/_meta.ts`.
6. Commit and push. The deploy puts `/feedback/<year>` online.

## Refreshing results

```sh
node scripts/feedback-snapshot.mjs 2026      # one year
node scripts/feedback-snapshot.mjs           # every year with a csvUrl
```

Review the free-text answers in the generated `<year>.json`, then commit.
The `feedback-snapshot` GitHub Action does the same every Monday and on
demand from the Actions tab; it commits only when something changed.

## How the script reads the sheet

Each column is one question. The script skips the Timestamp column and
classifies the rest automatically:

- **rating** — every answer is a whole number from 1 to 10 (linear scale).
- **choice** — at most eight distinct short answers (multiple choice).
- **text** — anything else (paragraph answers).

Force a type with `overrides` in `years.json`, keyed by the exact question
title. Use `"multi"` for checkbox questions, where Google joins the picked
options with commas:

```json
"overrides": { "Which topics were most valuable?": "multi" }
```

## Suggested questions

1. Overall, how would you rate the tech2elevate semester? — Linear scale 1–5
2. How useful were the mentor sessions? — Linear scale 1–5
3. Before the program, how confident were you building a web page? — Linear scale 1–5
4. After the program, how confident are you building a web page? — Linear scale 1–5
5. Which topics were most valuable? — Checkboxes: HTML, CSS, JavaScript, Working in the editor, Presenting my project
6. How was the pace? — Multiple choice: Too slow, About right, Too fast
7. Would you recommend tech2elevate to a friend? — Multiple choice: Yes, No
8. What should we keep doing? — Paragraph
9. What should we change? — Paragraph
10. Anything else you want to tell us? — Paragraph
