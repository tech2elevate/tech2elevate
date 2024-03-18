import { type DocsThemeConfig } from "nextra-theme-docs";

const nextraDocsThemeConfig: DocsThemeConfig = {
  logo: "Docs",
  head: "Docs",
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  useNextSeoProps: () => ({
    titleTemplate: "%s - Docs",
  }),
  project: {
    link: "https://git.target.com/tech2elevate/mentoring-docs",
  },
  docsRepositoryBase:
    "https://git.target.com/tech2elevate/mentoring-docs/blob/main",
};

export default nextraDocsThemeConfig;
