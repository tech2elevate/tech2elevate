import nextra from "nextra";

/**
 * @type {import('nextra').NextraConfig}
 */
const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
  codeHighlight: true,
});

/**
 * @type {import('next').NextConfig}
 */
export default withNextra();
