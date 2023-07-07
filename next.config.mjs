import { withContentlayer } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "images.unsplash.com",
      "djvy46h6795ez.cloudfront.net",
      "github.com",
    ],
  },
  experimental: {
    appDir: true,
  },
}

export default nextConfig
