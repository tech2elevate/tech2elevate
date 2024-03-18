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
};

export default nextraDocsThemeConfig;
