import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/resume",
        destination: "https://resume-old-ephraims-projects.vercel.app",
      },
    ];
  },
};

export default nextConfig;
