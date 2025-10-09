/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: '/anasayfa', destination: '/' },          // index sayfası
      { source: '/hakkimizda', destination: '/about' },  // about sayfası
      { source: '/hizmetler', destination: '/services' },
      { source: '/urunler', destination: '/urunler' },
      { source: '/iletisim', destination: '/contact' },
    ]
  },
};

export default nextConfig;