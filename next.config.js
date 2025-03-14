/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "joshydavid.s3.us-east-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
