/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'i.pravatar.cc' },
      { protocol: 'https', hostname: '**.googleusercontent.com' },
      { protocol: 'https', hostname: 'example.com' },
    ],
  },
  // experimental.cacheLife এখন মূল অবজেক্টে চলে এসেছে
  cacheLife: {
    page: {
      stale: 3600,
      revalidate: 60,
      expire: 86400,
    },
  },
  experimental: {
    // dynamicIO কী-টি বর্তমানে আপনার ভার্সনে নেই অথবা নাম ভিন্ন হতে পারে
    serverActions: {
      bodySizeLimit: '5mb',
    },
  },
  async rewrites() {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || process.env.BACKEND_URL;

    if (!backendUrl) {
      console.warn("⚠️ Warning: NEXT_PUBLIC_BACKEND_URL or BACKEND_URL is not defined!");
      return [];
    }

    return [
      {
        source: "/api/auth/:path*",
        destination: `${backendUrl}/api/auth/:path*`,
      },
    ];
  },
};

export default nextConfig;