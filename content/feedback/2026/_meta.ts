import { Meta } from "nextra";

export default {
  index: "Survey",
  // Hidden until the team decides to publish; the page still builds at
  // /feedback/2026/results and is excluded from the search index.
  results: {
    title: "Results",
    display: "hidden",
  },
} satisfies Meta;
