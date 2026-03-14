import ProductCard from "../components/ProductCard";
import Link from "next/link";

const products = [
  { slug: "ReSound Key", name: "ReSound Key", image: "/MR9fWZrs.webp", logo: "/ReSound+Logo+NO+BG-640w.webp", externalLink: "https://www.resound.com/tr-tr/hearing-aids/resound-hearing-aids/resound-key" },
  { slug: "ReSound Quattro", name: "ReSound Quattro", image: "/recharge-subpage_1350x1000-case-design.jpg", logo: "/ReSound+Logo+NO+BG-640w.webp", externalLink: "https://www.resound.com/tr-tr/hearing-aids/resound-hearing-aids/quattro" },
  { slug: "ReSound Enzo", name: "ReSound Enzo", image: "/resound_enzo.jpg", logo: "/ReSound+Logo+NO+BG-640w.webp", externalLink: "https://www.resound.com/tr-tr/hearing-aids/resound-hearing-aids/enzo-q" },
  { slug: "ReSound Vivia", name: "ReSound Vivia", image: "/RS_Vi_ProductStill_NavyBlue_500px.png", logo: "/ReSound+Logo+NO+BG-640w.webp", externalLink: "https://www.resound.com/tr-tr/hearing-aids/resound-hearing-aids/resound-vivia" },
  { slug: "Resound Savi", name: "Resound Savi", image: "/Resound Savi.png", logo: "/ReSound+Logo+NO+BG-640w.webp", externalLink: "https://www.resound.com/en/hearing-aids/resound-hearing-aids/resound-savi" },
  { slug: "Respound Omnia", name: "Resound Omnia", image: "/RS_OMNIA_mini_RIE60_RHI_Sparkling_Silver.png", logo: "/ReSound+Logo+NO+BG-640w.webp", externalLink: "https://pro.resound.com/en-us/products/hearing-aids/omnia" },

];

export default function Urunler() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* HERO */}
      <div className="pt-28 px-6 md:px-12">
        <section className="w-full h-[400px] md:h-[500px] bg-gradient-to-t from-amber-200 to-[#d4af37] flex flex-col justify-center items-center rounded-3xl mb-12 shadow-xl text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Markalar & Ürünlerimiz</h1>
          <p className="max-w-2xl text-lg md:text-xl">
            ORL İstanbul olarak sizlere en kaliteli işitme cihazları ve markalarını sunuyoruz.
          </p>
        </section>

        {/* Bilgilendirme Container */}
<section className="bg-white py-6 md:py-10 px-6 md:px-12 rounded-3xl mb-12 shadow-lg border border-gray-200 text-center">
  <p className="text-gray-800 text-lg md:text-xl font-semibold mb-6">
    Mağazamızda her renkten cihazlarımız mevcuttur
  </p>

  {/* Renk tablosu */}
  <div className="flex justify-center gap-4 flex-wrap">
    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-400 border border-gray-300 shadow-sm"></div>
    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-600 border border-gray-300 shadow-sm"></div>
    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-950 border border-gray-300 shadow-sm"></div>
    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-100 border border-gray-300 shadow-sm"></div>
    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-stone-500 border border-gray-300 shadow-sm"></div>
    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-stone-800 border border-gray-300 shadow-sm"></div>
  </div>

  <p className="text-gray-500 text-sm mt-4">
    Yukarıdaki renkler stokta mevcut cihaz renklerini temsil etmektedir.
  </p>
</section>

        {/* Ürünler */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <ProductCard key={product.slug} {...product} showButton={true} />
          ))}
        </section>
      </div>

      {/* CTA - Final Vurgusu */}
      <section className="py-10 px-6 bg-gradient-to-t from-amber-200 to-[#d4af37] flex flex-col items-center border-t border-gray-200 text-center">
        <div className="bg-gray-100 p-4 rounded-full mb-6">
           <svg className="w-12 h-12 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Ücretsiz Danışmanlık Alın</h2>
        <p className="text-white max-w-xl mb-10 text-lg">
          İşitme uzmanlarımızla görüşerek size en uygun çözümü birlikte belirleyelim.
        </p>
        <Link href="/contact" className="bg-[#d4af37] text-white px-12 py-4 rounded-full font-bold shadow-xl hover:shadow-[#d4af37]/20 hover:scale-105 transition-all">
          Bize Ulaşın
        </Link>
      </section>
    </div>
  );
}