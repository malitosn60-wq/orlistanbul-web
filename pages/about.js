import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* HERO */}
      <section className="w-full h-[400px] md:h-[500px] mt-14 bg-gradient-to-t from-amber-200 to-[#d4af37] flex flex-col justify-center items-center relative px-8 overflow-hidden">
        {/* Dekoratif Altın Işıltı (Opsiyonel Arka Plan Efekti) */}
        <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-[#d4af37]/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-[#d4af37]/5 blur-[80px] rounded-full"></div>

        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 text-center tracking-tight">
          Hakkımızda
        </h1>
        <div className="w-24 h-1.5 bg-[#304151] mb-6"></div>
        <p className="text-white text-center max-w-2xl text-lg md:text-xl leading-relaxed">
          ORL İstanbul olarak sizlere işitmede kaliteyi ve son teknolojiyi sunuyoruz.
        </p>
        <Link href="/contact" className="bg-white text-blue-800 px-6 py-3 mt-10 rounded-lg font-semibold hover:bg-gray-100 transition">
          Bize Ulaşın
        </Link>
      </section>

      {/* Kurumsal Bilgi */}
      <section className="py-16 px-4 md:px-12 flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="md:w-1/2">
          <Image
            src="/ORL_pano.png"
            alt="Ekip Görseli"
            width={500}
            height={400}
            className="rounded-2xl p-6 shadow-2xl object-cover"
          />
        </div>
        <div className="md:w-1/2 flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-900">Biz Kimiz?</h2>
          <p className="text-gray-700">
            Köklü geçmişimizle işitme cihazları alanında lider konumdayız. Müşteri memnuniyeti odaklı çalışıyor, her bireye özel çözümler sunuyoruz.
          </p>
          <p className="text-gray-700">
            Merkezimizde modern cihazlar ve deneyimli personel ile sizlere hizmet veriyoruz. Hedefimiz, işitme kalitenizi artırmak ve hayatınızı kolaylaştırmak.
          </p>
        </div>
      </section>

      {/* Değerler / Ekip */}
      <section className="py-16 px-4 md:px-12 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold text-sky-900 text-center mb-12">Değerlerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow-lg text-center">
            <h3 className="font-bold text-xl mb-2">Kalite</h3>
            <p className="text-gray-700">En yüksek kalite standartlarında işitme cihazları sunuyoruz.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg text-center">
            <h3 className="font-bold text-xl mb-2">Güven</h3>
            <p className="text-gray-700">Müşteri memnuniyeti ve güven bizim için önceliklidir.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg text-center">
            <h3 className="font-bold text-xl mb-2">Teknoloji</h3>
            <p className="text-gray-700">En son teknoloji cihazlarla hizmet veriyoruz.</p>
          </div>
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