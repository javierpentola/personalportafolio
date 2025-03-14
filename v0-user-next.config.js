/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["placeholder.com", "hebbkx1anhila5yf.public.blob.vercel-storage.com"], // Added Vercel Blob Storage domain
  },
}

module.exports = nextConfig

