import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com", "files.porsche.com", "www.marshallgoldmanbh.com", "images.drivespark.com"],
  },
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [
          path.resolve(__dirname, "src/visual-edits/component-tagger-loader.js"),
        ],
      },
    },
  },
};

export default nextConfig;
