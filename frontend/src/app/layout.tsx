import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { PORTFOLIO_CONFIG, SKILLS } from "@/data/portfolio";
import { buildJsonLd, SITE_DESCRIPTION, SITE_URL } from "@/lib/seo";

const TITLE = `${PORTFOLIO_CONFIG.name} — ${PORTFOLIO_CONFIG.role}`;

export const metadata: Metadata = {
  // Resolves every relative URL below (canonical, OG image) to an absolute one.
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s — ${PORTFOLIO_CONFIG.name}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: `${PORTFOLIO_CONFIG.name} — Portfolio`,
  authors: [{ name: PORTFOLIO_CONFIG.name, url: SITE_URL }],
  creator: PORTFOLIO_CONFIG.name,
  publisher: PORTFOLIO_CONFIG.name,
  keywords: [
    PORTFOLIO_CONFIG.name,
    PORTFOLIO_CONFIG.role,
    "Full-stack Developer",
    `Software Engineer ${PORTFOLIO_CONFIG.location}`,
    "Portfolio",
    ...SKILLS.map((s) => s.name),
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: `${PORTFOLIO_CONFIG.name} — Portfolio`,
    title: TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b12" },
  ],
};

const THEME_INIT_SCRIPT = `(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (err) {}
})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-slate-700 antialiased dark:bg-[#0b0b12] dark:text-slate-200">
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        <script
          type="application/ld+json"
          // Server-rendered constant built from local data — no user input involved.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
        />
        {children}
      </body>
    </html>
  );
}
