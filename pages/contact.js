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
    <div className="min-h-screen bg-gray-100 text-gray-900 pt-24">
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
      <section className="w-full bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#60a5fa] flex flex-col justify-center items-center text-white py-16">
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

        {/* Sağ Bilgiler */}
        <div className="md:w-1/2 bg-gradient-to-r from-sky-50 via-sky-100 to-sky-200 rounded-3xl shadow-2xl p-8 flex flex-col gap-6 justify-center">
          <h2 className="text-3xl font-bold text-sky-900 mb-6 flex items-center gap-3">
            <FaPhone className="text-sky-900 text-3xl" /> Bize Ulaşın
          </h2>
          <div className="flex items-center gap-4">
            <FaPhone className="text-sky-900 text-2xl" />
            <span className="text-gray-700 text-lg">+90 216 353 51 59</span>
            <span className="text-gray-700 text-lg">+90 501 353 51 59</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-sky-900 text-2xl" />
            <span className="text-gray-700 text-lg">info@orlistanbul.com</span>
          </div>
          <p className="text-gray-600 mt-4">
            Bizimle iletişime geçerek cihazlarımız hakkında detaylı bilgi alabilir,
            ücretsiz deneme randevusu oluşturabilirsiniz.
          </p>
        </div>
      </section>
    </div>
  );
}