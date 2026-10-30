import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
  codeHighlight: true,
});

// Static export so GitHub Pages can serve the site.
export default withNextra({
  output: "export",
  images: { unoptimized: true },
});
