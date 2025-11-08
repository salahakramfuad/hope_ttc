const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos', pathname: '/**' }
    ],
    formats: ['image/avif', 'image/webp']
  }
}
export default nextConfig
// If using CommonJS: module.exports = nextConfig
