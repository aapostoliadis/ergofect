/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    // Serve the approved standalone designs before the legacy React pages.
    // API endpoints, the assessment campaign, and existing assets remain intact.
    const routes = require("./site/routes.json");
    return {
      beforeFiles: routes.map((route) => ({
        source: route,
        destination: `/site-v2${route === "/" ? "" : route}/index.html`,
      })),
      afterFiles: [],
      fallback: [],
    };
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },
    ],
  },
};

module.exports = nextConfig;
