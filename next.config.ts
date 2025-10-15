// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Optional: Add if you're using environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  // Optional: Enable if you need to redirect routes
  async redirects() {
    return []
  }
}

export default nextConfig