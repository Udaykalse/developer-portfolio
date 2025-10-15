// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  output: 'export',       // static HTML export
  trailingSlash: true,    // optional, makes URLs end with /
  images: {
    unoptimized: true,    // disables Next.js image optimization
  },
  eslint: {
  ignoreDuringBuilds: true,
}
};

export default nextConfig;
