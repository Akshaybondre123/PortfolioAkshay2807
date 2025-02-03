import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org', 'maxm-imggenurl.web.val.run'], // Add all required domains here
  },
};

export default nextConfig;
