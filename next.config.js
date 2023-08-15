/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');
const nextConfig = nextTranslate({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
})

module.exports = nextConfig