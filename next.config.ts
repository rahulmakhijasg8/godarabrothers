import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true, // disables optimization and serves images as-is
  },
  trailingSlash: true, 
};

export default nextConfig;