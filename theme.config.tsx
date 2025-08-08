import Link from "next/link";
import { useRouter } from "next/router";
import {
  useConfig,
  type DocsThemeConfig,
  useThemeConfig,
} from "nextra-theme-docs";

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
  const { darkMode } = useThemeConfig();

  return (
    <img
      alt="tech2elevate"
      style={{ height: "40px", padding: "5px" }}
      src={
        darkMode
          ? "/images/tech2elevate-logo-dark-mode.png"
          : "/images/tech2elevate-logo.png"
      }
    />
  );
};

const nextraDocsThemeConfig = {
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
  banner: {
    content: (
      <Link href="/stem-day-speaking-points-2025">
        📢 Check out our STEM Day Speaking Points!
      </Link>
    ),
  },
} satisfies DocsThemeConfig;

export default nextraDocsThemeConfig;
