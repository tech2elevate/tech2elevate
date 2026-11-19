import years from "../../data/feedback/years.json";

type Year = keyof typeof years;

// Embeds the year's Google Form (see data/feedback/README.md). GitHub Pages
// is static, so Google collects the answers; a script snapshots them later.
export function FeedbackForm({ year }: { year: Year }) {
  const { formUrl } = years[year];

  if (!formUrl) {
    return (
      <p className="t2e-feedback-pending">
        The {year} survey is not open yet. Check back after the final session.
      </p>
    );
  }

  const embedUrl = formUrl.includes("embedded=true")
    ? formUrl
    : `${formUrl}${formUrl.includes("?") ? "&" : "?"}embedded=true`;

  return (
    <div className="t2e-feedback-embed">
      <iframe
        src={embedUrl}
        title={`tech2elevate ${year} student feedback form`}
        loading="lazy"
      >
        Loading…
      </iframe>
      <p className="t2e-form-note">
        Form not loading?{" "}
        <a href={formUrl} target="_blank" rel="noreferrer">
          Open it in a new tab
        </a>
        .
      </p>
    </div>
  );
}
