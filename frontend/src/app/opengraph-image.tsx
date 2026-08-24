import { ImageResponse } from "next/og";
import { PORTFOLIO_CONFIG } from "@/data/portfolio";

export const alt = `${PORTFOLIO_CONFIG.name} — ${PORTFOLIO_CONFIG.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social share card, generated at build time so links unfurl with a branded
 * preview instead of a bare URL. Mirrors the site's dark accent palette.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#0b0b12",
        backgroundImage:
          "radial-gradient(circle at 22% 18%, rgba(99,102,241,0.45), transparent 55%), radial-gradient(circle at 82% 88%, rgba(168,85,247,0.4), transparent 55%)",
        padding: "80px 90px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 84,
            height: 84,
            borderRadius: 999,
            background: "linear-gradient(135deg, #6366f1, #a855f7)",
            color: "white",
            fontSize: 34,
            fontWeight: 800,
          }}
        >
          {PORTFOLIO_CONFIG.initials}
        </div>
        <div style={{ color: "#94a3b8", fontSize: 34, fontWeight: 600 }}>
          {`${PORTFOLIO_CONFIG.role} · ${PORTFOLIO_CONFIG.location}`}
        </div>
      </div>

      <div
        style={{
          marginTop: 48,
          color: "white",
          fontSize: 92,
          fontWeight: 800,
          letterSpacing: -2,
          lineHeight: 1.05,
        }}
      >
        {PORTFOLIO_CONFIG.name}
      </div>
      <div
        style={{
          marginTop: 20,
          color: "#c4b5fd",
          fontSize: 46,
          fontWeight: 600,
          letterSpacing: -1,
        }}
      >
        {PORTFOLIO_CONFIG.tagline}
      </div>
    </div>,
    size,
  );
}
