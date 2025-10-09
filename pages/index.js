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
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* HERO */}
      <section className="relative w-full h-[500px] sm:h-[600px] md:h-[750px] flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover" src="/resounddd_mp4.mp4" />
        <div className="absolute w-full h-full bg-gradient-to-r from-[#0f172a]/70 via-[#1e3a8a]/60 to-[#60a5fa]/50 top-0 left-0"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start justify-center w-full px-6 md:px-12">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 leading-snug text-left">
              ORL İstanbul İşitme Cihazları
            </h1>
            <p className="text-gray-200 text-base sm:text-lg md:text-xl w-full mb-6 text-left">
              <Typewriter
                words={["ORL-İstanbul olarak, işitme kaybınızın hayatınızı zorlaştırmasına izin vermemeyi hedef edindik. Köklü kurumsal geçmişimiz ve tecrübemizle, tüm süreçte yanınızdayız."]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={20}
                deleteSpeed={10}
                delaySpeed={15000}
              />
            </p>
            <Link href="/contact" className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </section>

      {/* Sizi Arayalım */}
      <section className="w-full py-12 sm:py-16 flex justify-center bg-gradient-to-r from-[#cce2f2] to-white">
        <div className="w-[95%] sm:w-[85%] md:w-[70%] bg-white shadow-2xl rounded-3xl text-center overflow-hidden">
          <div className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-sky-900">Sizi Arayalım</h3>
            {status && <p className="text-green-600 font-semibold mb-3">{status}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 sm:gap-4">
              <input type="text" name="name" placeholder="Adınız" className="flex-1 border rounded-lg p-3 focus:ring-2 focus:ring-sky-400" required />
              <input type="tel" name="phone" placeholder="Telefon Numaranız" className="flex-1 border rounded-lg p-3 focus:ring-2 focus:ring-sky-400" required />
              <button type="submit" className="bg-sky-900 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition">
                Gönder
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ÜRÜNLER */}
      <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 mx-2 sm:mx-3">
        <h2 className="text-sky-900 tracking-wide font-extrabold text-xl sm:text-2xl text-center mb-10 sm:mb-14">
          İŞİTME CİHAZLARIMIZ
        </h2>
        <div className="bg-white shadow-xl rounded-3xl p-6 sm:p-10 md:p-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-10 place-items-center">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white rounded-2xl shadow-md flex items-center justify-center overflow-hidden">
                  <Image src={product.image} alt={product.name} width={128} height={128} className="object-contain p-2 group-hover:scale-105 transition-transform duration-300" />
                </div>
                <p className="mt-3 text-sm sm:text-base font-medium text-gray-800 group-hover:text-sky-900 transition">
                  {product.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biliyor muydunuz */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-r from-sky-50 via-sky-100 to-sky-200">
        <h2 className="text-sky-900 font-bold text-2xl sm:text-3xl text-center mb-10 sm:mb-12">Biliyor muydunuz?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {[
            { title: "%70 daha verimli", text: "Modern işitme cihazları, eski modellere göre %70 daha verimli çalışır." },
            { title: "Beyin sağlığına katkı", text: "İşitme kaybı tedavi edilmediğinde bilişsel gerilemeye yol açabilir." },
            { title: "Gizli tasarımlar", text: "Günümüz cihazları neredeyse görünmez olacak şekilde tasarlanıyor." },
          ].map((item, i) => (
            <div key={i} className="p-5 sm:p-6 bg-gradient-to-r from-sky-900 via-sky-700 to-sky-400 rounded-xl shadow-2xl text-white transform hover:scale-105 transition duration-500">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm sm:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SSS */}
      <section className="mx-3 py-12 sm:py-16 px-4 sm:px-8 bg-gray-50 rounded-3xl">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl text-sky-900 font-bold mb-6 sm:mb-8 text-center">SIKÇA SORULAN SORULAR</h2>
          {visibleFaqs.map((faq, index) => (
            <div key={index} className="p-4 rounded-xl bg-white shadow hover:shadow-lg transition-all cursor-pointer" onClick={() => toggleFaq(index)}>
              <div className="font-semibold flex justify-between items-center text-base sm:text-lg">
                {faq.question} <span className="text-sky-900 font-bold">{openIndex === index ? "-" : "+"}</span>
              </div>
              {openIndex === index && <p className="mt-2 text-gray-700 text-sm sm:text-base">{faq.answer}</p>}
            </div>
          ))}
          <div className="text-center mt-6">
            <button onClick={() => { setShowAllFaqs(!showAllFaqs); setOpenIndex(null); }} className="bg-sky-900 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-sky-700 transition">
              {showAllFaqs ? "Kapat" : "Tümünü Gör"}
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 px-4 md:px-12 flex flex-col items-center bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] text-gray-100 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ücretsiz Danışmanlık Alın</h2>
        <p className="max-w-2xl mb-6 sm:mb-8 text-sm sm:text-base">
          Merkezimizden randevu alabilir ve cihazlarımızı ücretsiz deneyebilirsiniz.
        </p>
        <Link href="/contact" className="bg-white text-sky-900 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Bize Ulaşın
        </Link>
      </section>
    </div>
  );
}