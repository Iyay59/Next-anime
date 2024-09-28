/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "ucarecdn.com"
      }
    ]
  }
}

module.exports = nextConfig
