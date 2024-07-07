/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "megatron.ysk-movies.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  poweredByHeader: false,

  
};

module.exports = nextConfig




