import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { PORTFOLIO_CONFIG } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${PORTFOLIO_CONFIG.name} — Portfolio`,
  description: `${PORTFOLIO_CONFIG.role} based in ${PORTFOLIO_CONFIG.location}. ${PORTFOLIO_CONFIG.tagline}.`,
};

const THEME_INIT_SCRIPT = `(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (err) {}
})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-slate-700 antialiased dark:bg-[#0b0b12] dark:text-slate-200">
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        {children}
      </body>
    </html>
  );
}
