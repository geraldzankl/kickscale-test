import type { NextConfig } from "next";

// Static export: `npm run build` writes a plain HTML/CSS/JS site to /out.
// That folder can be served by any Hostinger plan (shared hosting included).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
