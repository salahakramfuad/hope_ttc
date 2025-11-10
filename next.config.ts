const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ],
    formats: ['image/avif', 'image/webp']
  },
  transpilePackages: ['@vis.gl/react-maplibre', 'maplibre-gl']
}
export default nextConfig
