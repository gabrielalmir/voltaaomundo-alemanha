/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'www.oktoberfesttours.travel'
      },
      {
        hostname: 'd3dqioy2sca31t.cloudfront.net'
      }
    ]
  }
}

module.exports = nextConfig
