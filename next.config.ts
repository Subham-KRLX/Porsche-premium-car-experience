import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
        {
          protocol: "https",
          hostname: "files.porsche.com",
        },
        {
          protocol: "https",
          hostname: "www.marshallgoldmanbh.com",
        },
        {
          protocol: "https",
          hostname: "images.drivespark.com",
        },
        {
          protocol: "https",
          hostname: "a.storyblok.com",
        },
        {
          protocol: "https",
          hostname: "content-hub.imgix.net",
        },
          {
            protocol: "https",
            hostname: "images.ctfassets.net",
          },
          {
            protocol: "https",
            hostname: "img.shopstyle-cdn.com",
          },
            {
              protocol: "https",
              hostname: "opinari-drivers.com",
            },
            {
              protocol: "https",
              hostname: "shop.porsche.com",
            },
          ],
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
// Orchids restart: 1768413746357
