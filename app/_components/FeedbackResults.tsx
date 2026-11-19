// Renders a snapshot written by scripts/feedback-snapshot.mjs
// (data/feedback/<year>.json). One hue, thin bars, values in text color;
// every chart doubles as its own table so nothing depends on color alone.

type Counts = Record<string, number>;

// Loose on purpose: the JSON import types `type` as a plain string.
type Question = {
  id: string;
  label: string;
  type: string;
  answered: number;
  scale?: number;
  average?: number | null;
  counts?: Counts;
  answers?: string[];
};

type FeedbackSnapshot = {
  year: string;
  updatedAt: string | null;
  responses: number;
  questions: Question[];
};

export function FeedbackResults({ data }: { data: FeedbackSnapshot }) {
  if (!data.responses) {
    return (
      <p className="t2e-feedback-pending">
        No responses for {data.year} yet. Results appear here once the survey
        closes and the snapshot is refreshed.
      </p>
    );
  }

  const ratings = data.questions.filter((q) => q.type === "rating");
  const choices = data.questions.filter(
    (q) => q.type === "choice" || q.type === "multi",
  );
  const texts = data.questions.filter((q) => q.type === "text");
  const updated = data.updatedAt
    ? new Date(data.updatedAt).toLocaleDateString("en-US", {
        dateStyle: "long",
      })
    : null;

  return (
    <div className="t2e-results">
      <div className="t2e-tiles">
        <Tile value={String(data.responses)} label="responses" />
        {ratings.map((q) => (
          <Tile
            key={q.id}
            value={q.average == null ? "–" : q.average.toFixed(1)}
            label={`${q.label} (out of ${q.scale})`}
          />
        ))}
      </div>
      {updated && <p className="t2e-form-note">Last updated {updated}.</p>}

      {ratings.map((q) => (
        <Bars
          key={q.id}
          title={q.label}
          answered={q.answered}
          rows={Object.entries(q.counts ?? {})}
          axis={`1 = low, ${q.scale} = high`}
        />
      ))}

      {choices.map((q) => (
        <Bars
          key={q.id}
          title={q.label}
          answered={q.answered}
          rows={Object.entries(q.counts ?? {})}
          axis={
            q.type === "multi" ? "students could pick more than one" : undefined
          }
        />
      ))}

      {texts.map((q) => (
        <section key={q.id} className="t2e-chart">
          <h3>{q.label}</h3>
          <p className="t2e-form-note">{q.answered} answers</p>
          <ul className="t2e-quotes">
            {(q.answers ?? []).map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function Tile({ value, label }: { value: string; label: string }) {
  return (
    <div className="t2e-tile">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function Bars({
  title,
  answered,
  rows,
  axis,
}: {
  title: string;
  answered: number;
  rows: ReadonlyArray<readonly [string, number]>;
  axis?: string;
}) {
  const max = Math.max(1, ...rows.map(([, n]) => n));
  return (
    <section className="t2e-chart">
      <h3>{title}</h3>
      <p className="t2e-form-note">
        {answered} answers{axis ? ` · ${axis}` : ""}
      </p>
      <table className="t2e-bars">
        <tbody>
          {rows.map(([label, n]) => (
            <tr key={label} title={`${label}: ${n} of ${answered}`}>
              <th scope="row">{label}</th>
              <td>
                <span
                  className="t2e-bar"
                  style={{ width: `${(n / max) * 100}%` }}
                  aria-hidden="true"
                />
              </td>
              <td className="t2e-bar-value">
                {n}
                <small>
                  {" "}
                  ({answered ? Math.round((n / answered) * 100) : 0}%)
                </small>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
