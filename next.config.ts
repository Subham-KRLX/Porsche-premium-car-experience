import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
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
};

export default nextConfig;
