"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Üst kısım */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Sol taraf - Logo ve açıklama */}
          <div>
            <Image
              src="/ORL_pano.png"
              alt="ORL İstanbul İşitme Cihazları Logo"
              width={128}
              height={128}
            />
            <p className="mt-3 text-gray-400 leading-relaxed">
             İşitmede doğru adres.
            </p>
          </div>

          {/* Orta kısım - Bağlantılar */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Bağlantılar</h2>
            <div className="border-t border-gray-600"></div>
            <ul className="space-y-2 mt-3">
              <li>
                <Link href="/hakkimizda" className="hover:text-blue-400 transition-colors duration-300">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="hover:text-blue-400 transition-colors duration-300">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="hover:text-blue-400 transition-colors duration-300">
                  Markalar & Ürünlerimiz
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-blue-400 transition-colors duration-300">
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="/gizlilik" className="hover:text-blue-400 transition-colors duration-300">
                  Gizlilik Politikası & KVKK
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-blue-400 transition-colors duration-300">
                  Çerez Politikası
                </Link>
              </li>
            </ul>
          </div>

          {/* Sağ taraf - Sosyal Medya */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Sosyal Medya</h2>
            <div className="border-t border-gray-600"></div>
            <div className="flex space-x-6 mt-4 text-gray-400">
              <a
                href="https://www.facebook.com/profile.php?id=61571583323763"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <FaFacebookF size={28} />
              </a>
              <a
                href="https://www.instagram.com/orlistanbulisitmecihazlari/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-400 transition-colors duration-300"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-red-500 transition-colors duration-300"
              >
                <FaYoutube size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Alt kısım */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          © 2025 ORL İstanbul. Tüm hakları saklıdır.
          <div className="mt-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              ↑ En üste dön
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}