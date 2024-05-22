/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "megatron.vintage-artgallery.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  poweredByHeader: false,

  
};

module.exports = nextConfig




