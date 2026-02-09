import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sporton-be-production-b9fb.up.railway.app",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
