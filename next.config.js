/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "megatron.mixtesting.online",
        port: "",
        pathname: "/**",
      },
    ],
  },
  
};

module.exports = nextConfig




