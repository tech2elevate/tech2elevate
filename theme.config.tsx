import { useRouter } from "next/router";
import { useConfig, type DocsThemeConfig } from "nextra-theme-docs";

const Head = () => {
  const config = useConfig();
  const { route } = useRouter();

  const title = config.title + (route === "/" ? "" : ` - Docs`);

  return (
    <>
      <title>{title}</title>
      <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
    </>
  );
};

const nextraDocsThemeConfig: DocsThemeConfig = {
  logo: "Docs",
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  head: Head,
  project: {
    link: "https://github.com/jimmy-guzman/tech2elevate",
  },
  docsRepositoryBase: "https://github.com/jimmy-guzman/tech2elevate/blob/main",
};

export default nextraDocsThemeConfig;
