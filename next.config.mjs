// eslint-disable-next-line import/default -- there is no named import
import nextra from "nextra";

/**
 * @type {import('nextra').NextraConfig}
 */
const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

/**
 * @type {import('next').NextConfig}
 */
export default withNextra({ output: "standalone" });
