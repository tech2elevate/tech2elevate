import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: {
    default: "tech2elevate",
    template: "%s - Docs",
  },
  icons: { icon: "/images/favicon.ico" },
} satisfies Metadata;

function Logo() {
  return (
    <picture>
      <source
        srcSet="/images/tech2elevate-logo-dark-mode.png"
        media="(prefers-color-scheme: dark)"
      />
      <img
        alt="tech2elevate"
        src="/images/tech2elevate-logo.png"
        style={{ height: 40, padding: 5 }}
      />
    </picture>
  );
}

const banner = (
  <Banner storageKey="t2e-stem-2025">
    <Link href="/stem-day-speaking-points-2025">
      📢 Check out our STEM Day Speaking Points!
    </Link>
  </Banner>
);

const navbar = (
  <Navbar
    logo={<Logo />}
    projectLink="https://github.com/jimmy-guzman/tech2elevate"
  />
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          footer={null}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/tech2elevate/tech2elevate/blob/main"
          sidebar={{
            defaultMenuCollapseLevel: 1,
            toggleButton: true,
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
