/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Cloudflare Pages / GitHub Pages / Netlify.
  output: "export",
  // Static export can't use the Next.js Image Optimization server.
  images: { unoptimized: true },
  // Emit trailing-slash directories so static hosts resolve routes cleanly.
  trailingSlash: true,
};

export default nextConfig;
