/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.figma.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig




