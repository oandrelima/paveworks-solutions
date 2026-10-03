/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  poweredByHeader: false,
  compress: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
