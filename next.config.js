/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    AUTH_SERVICE_URL:
      process.env.AUTH_SERVICE_URL ?? 'http://localhost:8080/api/v1',
  },
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
