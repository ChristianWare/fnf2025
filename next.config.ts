import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ───────────────── LINT ───────────────── */
  // Let ESLint run, but don’t fail the production build if it finds errors.
  eslint: {
    ignoreDuringBuilds: true,
  },
  // If TypeScript errors ever block you as well, uncomment below:
  // typescript: {
  //   ignoreBuildErrors: true,
  // },

  /* ───────────────── IMAGES ─────────────── */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
    ],
  },

  /* ───────────────── WEBPACK (SVGR) ─────── */
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  /* ───────────────── TURBOPACK EXPERIMENT ─ */
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
};

export default nextConfig;
