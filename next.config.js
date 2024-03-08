/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dashboard.megatron-soft.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  
};

module.exports = nextConfig




