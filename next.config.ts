import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgproxy.gamma.app'
      }
    ]
  }
};

export default nextConfig;
