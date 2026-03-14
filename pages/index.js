import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";

const products = [
  { id: 1, name: "Resound Enzo", image: "/resound_enzo.jpg" },
  { id: 2, name: "Resound Quattro", image: "/recharge-subpage_1350x1000-case-design.jpg" },
  { id: 3, name: "Resound Key", image: "/resound-brown-nexia-7.webp" },
  { id: 4, name: "Resound Vivia", image: "/RS_Vi_ProductStill_NavyBlue_500px.png" },
  { id: 5, name: "Resound Savi", image: "/Resound Savi.png" },
  { id: 6, name: "Resound Omnia", image: "/RS_OMNIA_mini_RIE60_RHI_Sparkling_Silver.png" },
];

const faqs = [
  { question: "İşitme cihazı ömrü ne kadardır?", answer: "Ortalama 5-7 yıl arasında değişir. Düzenli bakım ile bu süre artabilir." },
  { question: "Cihazları deneme şansım var mı?", answer: "Evet, merkezimizde ücretsiz deneme imkanı sunuyoruz." },
  { question: "Ürünlerinizin garantisi var mı?", answer: "Evet, tüm ürünlerimiz üretici garantisi altındadır." },
  { question: "Cihazlar suya dayanıklı mı?", answer: "Bazı modeller suya dayanıklıdır, model detaylarını kontrol edin." },
  { question: "Pil ömrü ne kadar?", answer: "Pil ömrü modele göre değişir, ortalama 5-7 gündür." },
  { question: "Cihazlar Bluetooth destekli mi?", answer: "Evet, birçok model Bluetooth ile telefonunuza bağlanabilir." },
  { question: "Fiyat aralığı nedir?", answer: "Cihazların fiyatı modele göre değişir, detaylı bilgi için bizimle iletişime geçin." },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [status, setStatus] = useState("");

  const toggleFaq = (index) => setOpenIndex(openIndex === index ? null : index);
  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 4);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = { name: formData.get("name"), phone: formData.get("phone") };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("Talebiniz başarıyla gönderildi!");
        e.target.reset();
      } else {
        setStatus("Bir hata oluştu, lütfen tekrar deneyin.");
      }
    } catch {
      setStatus("Bir hata oluştu, lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#1a2b4b]">
      {/* HERO SECTION - Koyu Lacivert ve Altın Vurgusu */}
      <section className="relative w-full h-[500px] sm:h-[600px] md:h-[750px] flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover" src="/resounddd_mp4.mp4" />
        {/* Gradient: Logodaki lacivertten şeffafa geçiş */}
        <div className="absolute w-full h-full bg-gradient-to-r from-[#0d1b33]/90 via-[#0d1b33]/60 to-transparent top-0 left-0"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-start justify-center w-full px-6 md:px-12">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 leading-snug text-left">
              ORL İstanbul <br />
              <span className="text-[#d4af37]">İşitme Cihazları</span>
            </h1>
            <div className="text-gray-200 text-base sm:text-lg md:text-xl w-full mb-8 text-left max-w-xl leading-relaxed">
              <Typewriter
                words={["ORL-İstanbul olarak, işitme kaybınızın hayatınızı zorlaştırmasına izin vermemeyi hedef edindik. Köklü kurumsal geçmişimiz ve tecrübemizle yanınızdayız."]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={40}
              />
            </div>
            <Link href="/contact" className="bg-[#d4af37] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b8962e] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Ücretsiz Randevu Al
            </Link>
          </div>
        </div>
      </section>

      {/* Sizi Arayalım - Altın Sarısı Dokunuşlar */}
      <section className="w-full py-10 mt-10 relative z-20 flex justify-center">
        <div className="w-[90%] sm:w-[85%] md:w-[75%] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl text-center overflow-hidden border-b-4 border-[#d4af37]">
          <div className="p-8 sm:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-[#0d1b33]">Sizi Arayalım</h3>
            {status && <p className="text-green-600 font-semibold mb-4">{status}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <input type="text" name="name" placeholder="Adınız Soyadınız" className="flex-1 border-2 border-gray-100 rounded-xl p-4 focus:border-[#d4af37] outline-none transition" required />
              <input type="tel" name="phone" placeholder="Telefon Numaranız" className="flex-1 border-2 border-gray-100 rounded-xl p-4 focus:border-[#d4af37] outline-none transition" required />
              <button type="submit" className="bg-[#d4af37] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#162a4d] transition-colors border border-[#d4af37]">
                Hemen Gönder
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ÜRÜNLER - Temiz ve Modern Altın Vurgusu */}
      <section className="px-6 md:px-12 py-20">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-[#0d1b33] tracking-tighter font-black text-3xl sm:text-4xl text-center">
            ÖNE ÇIKAN MODELLER
          </h2>
          <div className="w-20 h-1 bg-[#d4af37] mt-4"></div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-square bg-white rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center p-6 mb-4 group-hover:shadow-xl group-hover:border-[#d4af37]/30 transition-all duration-500">
                <Image src={product.image} alt={product.name} width={150} height={150} className="object-contain group-hover:scale-110 transition-transform duration-500" />
              </div>
              <p className="text-center font-bold text-[#0d1b33] group-hover:text-[#d4af37] transition-colors uppercase text-sm tracking-widest">
                {product.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Biliyor muydunuz - Koyu Lacivert & Gold Kartlar */}
      <section className="py-16 px-6 bg-gradient-to-tr from-amber-200 to-[#d4af37] text-white">
        <h2 className="text-white font-bold text-3xl text-center mb-16">Biliyor muydunuz?</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: "%70 Daha Verimli", text: "Modern işitme cihazları, gelişmiş işlemcileri sayesinde gürültüyü %70 daha iyi baskılar." },
            { title: "Bilişsel Sağlık", text: "İşitme cihazı kullanımı, işitme kaybına bağlı unutkanlık riskini minimize eder." },
            { title: "Zarif Tasarım", text: "Yeni nesil cihazlar altın oranla tasarlanır ve kulak arkasında neredeyse hiç fark edilmez." },
          ].map((item, i) => (
            <div key={i} className="p-10 border border-[#d4af37]/20 rounded-2xl bg-[#162a4d]/50 hover:border-white transition duration-500 group">
              <h3 className="text-[#d4af37] text-xl font-bold mb-4 group-hover:translate-x-2 transition-transform">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SSS - Sade ve Kurumsal */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl text-[#0d1b33] font-black mb-12 text-center tracking-tight">SIKÇA SORULAN SORULAR</h2>
        <div className="space-y-4">
          {visibleFaqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-2xl bg-white overflow-hidden transition-all"
              onClick={() => toggleFaq(index)}
            >
              <div className="p-5 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition">
                <span className="font-bold text-[#0d1b33]">{faq.question}</span>
                <span className={`text-[#d4af37] text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>+</span>
              </div>
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 border-t border-gray-50 pt-4 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button 
            onClick={() => { setShowAllFaqs(!showAllFaqs); setOpenIndex(null); }} 
            className="border-2 bg-[#d4af37] text-white px-10 py-3 rounded-full font-bold hover:bg-[#304151] hover:text-white transition-all"
          >
            {showAllFaqs ? "Daha Az Gör" : "Tüm Soruları Gör"}
          </button>
        </div>
      </section>

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