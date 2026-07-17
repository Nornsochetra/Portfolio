import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output produces a minimal self-contained server bundle
  // (only the deps actually used) — smaller/faster to run even without Docker.
  output: "standalone",
};

export default nextConfig;
