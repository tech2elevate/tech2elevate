import { useRouter } from "next/router";
import { useConfig, type DocsThemeConfig, useTheme } from "nextra-theme-docs";

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

const Logo = () => {
  const { theme } = useTheme();

  return (
    <>
      {theme === "dark" ? (
        <img
          alt="tech2elevate"
          style={{ height: "40px", padding: "5px" }}
          src="/images/tech2elevate-logo-dark-mode.png"
        />
      ) : (
        <img
          alt="tech2elevate"
          style={{ height: "40px", padding: "5px" }}
          src="/images/tech2elevate-logo.png"
        />
      )}
    </>
  );
};

const nextraDocsThemeConfig: DocsThemeConfig = {
  logo: <Logo />,
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
