import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* HERO */}
      <section className="w-full pt-12 h-[600px] md:h-[750px] bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#60a5fa] flex flex-col md:flex-row items-center justify-center relative px-8 overflow-hidden">
        {/* Sol metin */}
        <div className="md:w-1/2 flex flex-col justify-center items-start z-10 md:pl-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-snug">
            Hakkımızda
          </h1>
          <p className="text-gray-200 text-lg md:text-xl w-full mb-6">
            ORL İstanbul olarak sizlere işitmede kaliteyi ve son teknolojiyi sunuyoruz.
          </p>
          <Link href="/contact" className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Bize Ulaşın
          </Link>
        </div>

        {/* Sağ görsel */}
        <div className="md:w-1/2 flex justify-center items-center relative mt-8 md:mt-0">
          <Image
            src="/hakkimizda1.jpg"
            width={600}
            height={400}
            className="w-full max-w-md md:max-w-lg h-auto object-contain rounded-2xl shadow-2xl"
            alt="Ekip Görseli"
          />
        </div>

        {/* Arka plan efektleri */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {/* Sol üst ışık */}
          <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-sky-500 rounded-full opacity-10 absolute -top-10 sm:-top-16 md:-top-20 -left-10 sm:-left-16 md:-left-20 animate-pulse"></div>

          {/* Sağ alt ışık */}
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-sky-500 rounded-full opacity-5 absolute -bottom-16 sm:-bottom-24 md:-bottom-32 -right-16 sm:-right-24 md:-right-32 animate-pulse"></div>
        </div>
      </section>

      {/* Kurumsal Bilgi */}
      <section className="py-16 px-4 md:px-12 flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="md:w-1/2">
          <Image
            src="/orl-istanbul-kartvizit.png"
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

      {/* CTA Bölümü */}
      <section className="py-16 px-4 md:px-12 flex flex-col items-center bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] text-gray-100">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">Ücretsiz Danışmanlık Alın</h2>
        <p className="text-center max-w-2xl mb-6">
          Merkezimizden randevu alabilir ve cihazlarımızı ücretsiz deneyebilirsiniz.
        </p>
        <Link href="/contact" className="bg-white text-sky-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Bize Ulaşın
        </Link>
      </section>
    </div>
  );
}