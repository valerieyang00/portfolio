/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // suppy array of trusted image domains(no http or https)
    domains: ['placekitten.com']
  }
}

module.exports = nextConfig
