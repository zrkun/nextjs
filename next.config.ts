import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.plugins = config.plugins || [];
    return config;
  },
};

export default nextConfig;
