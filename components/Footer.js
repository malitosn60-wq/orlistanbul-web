import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Sol taraf - Logo ve kısa açıklama */}
          <div>
            <img src="/orl-istanbul-kartvizit.png" className="w-32" alt="Logo" />
            <p className="mt-2 text-gray-400">
              İşitme cihazları ve aksesuarlarında kaliteli çözümler sunuyoruz. Sesinizi yeniden keşfedin!
            </p>
          </div>
          
          {/* Orta kısım - Linkler */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Bağlantılar</h2>
            <div className="border-t border-gray-600"></div>

            <ul className="space-y-2 mt-3">
              <li><a href="/about" className="hover:text-blue-400">Hakkımızda</a></li>
              <li><a href="/services" className="hover:text-blue-400">Hizmetler</a></li>
              <li><a href="/urunler" className="hover:text-blue-400">Markalar & Ürünlerimiz</a></li>
              <li><a href="/contact" className="hover:text-blue-400">İletişim</a></li>
              <li><a href="/gizlilik" className="hover:text-blue-400">Gizlilik Politikası & KVKK</a></li>
              <li><a href="/cookies" className="hover:text-blue-400">Çerez Politikası</a></li>
            </ul>
          </div>
          
          {/* Sağ taraf - Sosyal Medya */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Sosyal Medya</h2>
            <div className="border-t border-gray-600"></div>
            <div className="flex space-x-6 mt-3 text-gray-400">
              <a
                href="https://www.facebook.com/profile.php?id=61571583323763"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaFacebookF size={30} />
              </a>
              <a
                href="https://www.instagram.com/orlistanbulisitmecihazlari/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                <FaYoutube size={30} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Alt kısım - Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          © 2025 Tüm Hakları Saklıdır.
        </div>
      </div>
    </footer>
  );
}