import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const products = [
  { id: 1, name: "Resound Enzo", image: "/resound_enzo.jpg", description: 'Yüksek ses kalitesi, uzun pil ömrü ve rahat kullanım.', logo: "/Starkey-Logo-Pngsource-DQS5Z0EF.png" },
  { id: 2, name: "Resound Quattro", image: "/recharge-subpage_1350x1000-case-design.jpg", description: 'Yüksek ses kalitesi, uzun pil ömrü ve rahat kullanım.', logo: "/Starkey-Logo-Pngsource-DQS5Z0EF.png" },
  { id: 3, name: "Resound Key", image: "/resound-brown-nexia-7.webp", description: 'Yüksek ses kalitesi, uzun pil ömrü ve rahat kullanım.', logo: "/Starkey-Logo-Pngsource-DQS5Z0EF.png" },
  { id: 4, name: "Resound Vivia", image: "/RS_Vi_ProductStill_NavyBlue_500px.png", description: 'Yüksek ses kalitesi, uzun pil ömrü ve rahat kullanım.', logo: "/Starkey-Logo-Pngsource-DQS5Z0EF.png" },
  { id: 5, name: "Resound Savi", image: "/Resound Savi.png", description: 'Yüksek ses kalitesi, uzun pil ömrü ve rahat kullanım.', logo: "/Starkey-Logo-Pngsource-DQS5Z0EF.png" },
  { id: 6, name: "Resound Omnia", image: "/RS_OMNIA_mini_RIE60_RHI_Sparkling_Silver.png", description: 'Yüksek ses kalitesi, uzun pil ömrü ve rahat kullanım.', logo: "/Starkey-Logo-Pngsource-DQS5Z0EF.png" },
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
    } catch (err) {
      console.error(err);
      setStatus("Bir hata oluştu, lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">

      {/* HERO */}
      <section className="relative w-full h-[650px] md:h-[750px] flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover" src="/Resoundd.mp4" />
        <div className="absolute w-full h-full bg-gradient-to-r from-[#0f172a]/70 via-[#1e3a8a]/60 to-[#60a5fa]/50 top-0 left-0"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start justify-center w-full px-8">
          <div className="md:w-1/2 flex flex-col justify-center items-start md:pl-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-snug text-left">
              ORL İstanbul İşitme Cihazları
            </h1>
            <p className="text-gray-200 text-lg md:text-xl w-full mb-6 text-left">
              <Typewriter
                words={["ORL-İstanbul olarak, işitme kaybınızın hayatınızı zorlaştırmasına izin vermemeyi hedef edindik. Köklü kurumsal geçmişimiz ve tecrübemizle, tüm süreçte yanınızdayız."]}
                loop={true} cursor cursorStyle="_" typeSpeed={20} deleteSpeed={10} delaySpeed={15000}
              />
            </p>
            <a href="/contact" className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Bize Ulaşın
            </a>
          </div>
        </div>
      </section>

      {/* Sizi Arayalım */}
      <section className="w-full py-16 flex justify-center bg-gradient-to-r from-[#cce2f2] to-white">
        <div className="w-[90%] md:w-[70%] bg-white shadow-2xl rounded-3xl text-center overflow-hidden transform hover:scale-105 transition-all duration-500">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-sky-900">Sizi Arayalım</h3>
            {status && <p className="text-green-600 font-semibold">{status}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <input type="text" name="name" placeholder="Adınız" className="flex-1 border rounded-lg p-3 focus:ring-2 focus:ring-sky-400" required />
              <input type="tel" name="phone" placeholder="Telefon Numaranız" className="flex-1 border rounded-lg p-3 focus:ring-2 focus:ring-sky-400" required />
              <button type="submit" className="bg-sky-900 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition">
                Gönder
              </button>
            </form>
          </div>
          <div className="p-6 bg-gray-50 border-t border-gray-200 text-gray-700">
            <p>
              Bizimle iletişime geçerek cihazlar hakkında detaylı bilgi alabilir,
              ücretsiz deneme randevusu oluşturabilirsiniz. Size en uygun çözümü
              bulmak için buradayız.
            </p>
          </div>
        </div>
      </section>

      {/* ÜRÜNLER */}
      <section className="rounded-4xl px-6 md:px-8 py-16 mx-3">
        <h2 className="text-sky-900 tracking-wide font-extrabold text-2xl md:text-2xl text-center mb-14">
          İŞİTME CİHAZLARIMIZ
        </h2>
        <div className="bg-white shadow-xl rounded-3xl p-10 md:p-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 place-items-center">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105">
                <div className="w-28 h-28 md:w-32 md:h-32 bg-white rounded-2xl shadow-md flex items-center justify-center overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300" />
                </div>
                <p className="mt-3 text-sm md:text-base font-medium text-gray-800 group-hover:text-sky-900 transition-colors duration-200 tracking-wide">
                  {product.name}
                </p>
                <div className="mt-1 h-1 w-6 bg-sky-900 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biliyor muydunuz */}
      <section className="relative py-16 my-6 rounded-4xl mx-3 px-4 md:px-8 text-gray-900 overflow-hidden bg-gradient-to-r from-sky-50 via-sky-100 to-sky-200">
        <h2 className="text-sky-900 tracking-wide font-bold text-3xl text-center mb-12">Biliyor muydunuz?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gradient-to-r from-sky-900 via-sky-700 to-sky-400 rounded-xl shadow-2xl text-white transform hover:scale-105 transition duration-500">
            <h3 className="text-xl font-semibold mb-3">%70 daha verimli</h3>
            <p>Modern işitme cihazları, eski modellere göre %70 daha verimli çalışır.</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-sky-900 via-sky-700 to-sky-400 rounded-xl shadow-2xl text-white transform hover:scale-105 transition duration-500">
            <h3 className="text-xl font-semibold mb-3">Beyin sağlığına katkı</h3>
            <p>İşitme kaybı tedavi edilmediğinde bilişsel gerilemeye yol açabilir.</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-sky-900 via-sky-700 to-sky-400 rounded-xl shadow-2xl text-white transform hover:scale-105 transition duration-500">
            <h3 className="text-xl font-semibold mb-3">Gizli tasarımlar</h3>
            <p>Günümüz cihazları neredeyse görünmez olacak şekilde tasarlanıyor.</p>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="mx-3 py-16 px-8 bg-gray-50 rounded-3xl">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl text-sky-900 font-bold mb-8 text-center">SIKÇA SORULAN SORULAR</h2>
          {visibleFaqs.map((faq, index) => (
            <div key={index} className="p-4 rounded-xl bg-white shadow cursor-pointer hover:shadow-lg transition-all" onClick={() => toggleFaq(index)}>
              <div className="font-semibold flex justify-between items-center text-lg">
                {faq.question} <span className="text-sky-900 font-bold">{openIndex === index ? "-" : "+"}</span>
              </div>
              {openIndex === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
            </div>
          ))}
          <div className="text-center mt-6">
            <button onClick={() => { setShowAllFaqs(!showAllFaqs); setOpenIndex(null); }} className="bg-sky-900 text-white px-8 py-3 rounded-lg hover:bg-sky-700 transition">
              {showAllFaqs ? "Kapat" : "Tümünü Gör"}
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-12 flex flex-col items-center bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] text-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Ücretsiz Danışmanlık Alın</h2>
        <p className="text-center max-w-2xl mb-6">
          Merkezimizden randevu alabilir ve cihazlarımızı ücretsiz deneyebilirsiniz.
        </p>
        <a href="/contact" className="bg-white text-sky-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Bize Ulaşın
        </a>
      </section>
    </div>
  );
}