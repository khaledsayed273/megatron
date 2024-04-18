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
  poweredByHeader: false,

  
};

module.exports = nextConfig




