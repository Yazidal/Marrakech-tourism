// next.config.mjs (update your existing config)
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Add trailing slash for better SEO
  trailingSlash: false,
  // Enable static exports for better performance
  output: "standalone",
  // Compress images
  compress: true,
};

export default nextConfig;
