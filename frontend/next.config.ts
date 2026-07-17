import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output produces a minimal self-contained server bundle
  // (only the deps actually used) — needed for a lean Docker image.
  output: "standalone",
};

export default nextConfig;
