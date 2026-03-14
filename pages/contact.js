import { FaPhone, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("Mesajınız başarıyla gönderildi!");
        e.target.reset();
      } else {
        setStatus("Hata oluştu, lütfen tekrar deneyin.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Hata oluştu, lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 pt-16">
      {/* Harita */}
      <section className="w-full h-[400px] md:h-[500px] overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.2233478624876!2d29.178744076140408!3d40.88891532676595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac38c63c467fb%3A0x20a34d3b9fc10014!2zT1JMLcSwc3RhbmJ1bCDEsMWfaXRtZSBDaWhhemxhcsSxIFNhdMSxxZ8gdmUgVXlndWxhbWEgTWVya2V6aQ!5e0!3m2!1str!2str!4v1756839252019!5m2!1str!2str"
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Hero */}
      <section className="w-full bg-gradient-to-r from-amber-200 via-[#e0b939] to-[#d4af37] flex flex-col justify-center items-center text-white py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">İletişim</h1>
        <p className="text-center max-w-2xl text-gray-200 text-lg md:text-xl">
          Bizimle iletişime geçin, sorularınızı yanıtlayalım ve cihazlarımızı deneyimleyin.
        </p>
      </section>

      {/* Form ve Bilgiler */}
      <section className="py-16 px-4 md:px-12 max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Sol Form */}
        <div className="md:w-1/2 bg-white rounded-3xl shadow-2xl p-8 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-sky-900 mb-6 flex items-center gap-3">
            <FaEnvelope className="text-sky-900 text-3xl" /> Mesaj Gönder
          </h2>
          {status && <p className="text-green-600 font-semibold">{status}</p>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="text" name="name" placeholder="Adınız" className="border rounded-lg p-3 focus:ring-2 focus:ring-sky-400" required />
            <input type="email" name="email" placeholder="Email" className="border rounded-lg p-3 focus:ring-2 focus:ring-sky-400" />
            <input type="tel" name="phone" placeholder="Telefon Numaranız" className="border rounded-lg p-3 focus:ring-2 focus:ring-sky-400" />
            <textarea name="message" placeholder="Mesajınız" className="border rounded-lg p-3 h-32 focus:ring-2 focus:ring-sky-400" />
            <button type="submit" className="bg-sky-900 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition transform hover:scale-105 mt-2">
              Gönder
            </button>
          </form>
        </div>

        {/* Sağ Bilgiler - Responsive ve Ana Sayfa Ambiyansına Uygun */}
        <div className="w-full lg:w-1/2 bg-gradient-to-tl from-amber-200 to-[#d4af37] rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col gap-6 justify-center transition-all duration-300">

          {/* Başlık */}
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3 tracking-tight uppercase">
            <FaPhone className="text-white text-2xl sm:text-3xl" /> Bize Ulaşın
          </h2>

          {/* Ayraç */}
          <div className="w-20 h-1.5 bg-white/40 rounded-full"></div>

          {/* Telefonlar - Mobilde alt alta, tablette yan yana */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center bg-[#0d1b33]/90 backdrop-blur-sm rounded-2xl p-4 gap-4 border border-white/10 hover:bg-[#0d1b33] transition-colors">
              <FaPhone className="text-[#d4af37] text-xl shrink-0" />
              <p className="text-white text-sm sm:text-base font-bold tracking-tight">+90 216 353 51 59</p>
            </div>
            <div className="flex items-center bg-[#0d1b33]/90 backdrop-blur-sm rounded-2xl p-4 gap-4 border border-white/10 hover:bg-[#0d1b33] transition-colors">
              <FaPhone className="text-[#d4af37] text-xl shrink-0" />
              <p className="text-white text-sm sm:text-base font-bold tracking-tight">+90 501 353 51 59</p>
            </div>
          </div>

          {/* E-Posta */}
          <div className="flex items-center bg-[#0d1b33]/90 backdrop-blur-sm rounded-2xl p-4 gap-4 border border-white/10 hover:bg-[#0d1b33] transition-colors">
            <FaEnvelope className="text-[#d4af37] text-xl shrink-0" />
            <span className="text-white text-xs sm:text-sm md:text-base font-bold break-all">
              orlistanbulisitmecihazlari@gmail.com
            </span>
          </div>

          {/* Açıklama Metni */}
          <p className="text-white/90 mt-2 text-sm sm:text-base leading-relaxed font-medium italic border-l-4 border-white/30 pl-4">
            Bizimle iletişime geçerek cihazlarımız hakkında detaylı bilgi alabilir,
            ücretsiz deneme randevusu oluşturabilirsiniz.
          </p>
        </div>
      </section>
    </div>
  );
}