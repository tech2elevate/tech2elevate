import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./contact-form.css";

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
  <Banner storageKey="t2e-partner-2026">
    <Link href="/partner">
      🤝 Want to bring tech2elevate to your company or school? Partner with us
    </Link>
  </Banner>
);

const navbar = (
  <Navbar
    logo={<Logo />}
    projectLink="https://github.com/tech2elevate/tech2elevate"
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
