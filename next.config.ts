import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.squarespace-cdn.com" },
      { protocol: "https", hostname: "pratigroup.org" },
      { protocol: "https", hostname: "moxieschool.com" },
    ],
  },
};

export default nextConfig;
