/**@type {import('next').NextConfig} */

const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '127.0.0.1',
          },
          {
            protocol: 'https',
            hostname: '**',
          },
        ],
      },
      experimental: {
        serverActions: true,
      },
}

module.exports = nextConfig
