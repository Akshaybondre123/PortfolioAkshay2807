import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'upload.wikimedia.org',
      'maxm-imggenurl.web.val.run',
      'sjc.microlink.io', // Add this domain to fix the error
    ],
  },
};

export default nextConfig;
