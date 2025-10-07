import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import "@/styles/globals.css";
import Head from "next/head";
import WhatsAppPopup from "@/components/WhatsAppPopup"; // Yeni komponent

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Temel Meta Bilgileri */}
        <title>ORL İstanbul | İşitme Cihazları ve Çözümleri</title>
        <meta
          name="description"
          content="ORL İstanbul'da her yaşa uygun, son teknoloji işitme cihazları ve profesyonel işitme çözümleri. Deneyimli ekibimizle size en uygun çözümü sunuyoruz."
        />
        <meta
          name="keywords"
          content="işitme cihazı, ORL İstanbul, Resound, Widex, işitme merkezi, işitme testi, kulak sağlığı"
        />
        <meta name="author" content="ORL İstanbul" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph (Sosyal Medya Paylaşımı) */}
        <meta property="og:title" content="ORL İstanbul | İşitme Cihazları ve Çözümleri" />
        <meta
          property="og:description"
          content="Her renkten cihazlarımız mevcuttur! ORL İstanbul'da en yeni işitme teknolojilerini keşfedin."
        />
        <meta property="og:image" content="/og-preview.jpg" />
        <meta property="og:url" content="https://orlistanbul.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Kartları */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ORL İstanbul | İşitme Cihazları" />
        <meta
          name="twitter:description"
          content="Her yaşa uygun işitme çözümleriyle ORL İstanbul yanınızda!"
        />
        <meta name="twitter:image" content="/og-preview.jpg" />

        {/* Favicon ve Tema */}
        <link rel="icon" href="/favicon.ico" sizes="16x16"/>
        <meta name="theme-color" content="#0f172a" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>

      {/* Çerez popup */}
      <CookieConsent />

      {/* WhatsApp sağ alt köşe popup */}
      <WhatsAppPopup />
    </>
  );
}