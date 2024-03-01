import { type DocsThemeConfig } from "nextra-theme-docs";

const nextraDocsThemeConfig: DocsThemeConfig = {
  logo: "Docs",
  head: "Docs",
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  useNextSeoProps: () => ({
    titleTemplate: "%s - Docs",
  }),
};

export default nextraDocsThemeConfig;
