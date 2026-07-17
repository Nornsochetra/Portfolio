import type { Metadata } from "next";
import "./globals.css";
import { PORTFOLIO_CONFIG } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${PORTFOLIO_CONFIG.name} — Portfolio`,
  description: `${PORTFOLIO_CONFIG.role} based in ${PORTFOLIO_CONFIG.location}. ${PORTFOLIO_CONFIG.tagline}.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0b0b12] text-slate-200 antialiased">{children}</body>
    </html>
  );
}
