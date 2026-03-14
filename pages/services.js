import Image from "next/image";
import Link from "next/link";

export default function Hizmetler() {
  const services = [
    { title: "Slim Tüp Montaj", icon: "/slimtüp.png" },
    { title: "Kulak İçi Montaj", icon: "/kulakicimontaj.jpeg" },
    { title: "Reciver Montaj", icon: "/Recivermontaj.jpeg" },
    { title: "Bipolar Kalıp", icon: "/Bipolarkalıp.jpeg" },
    { title: "Sert Kalıp", icon: "/Sertkalıp.jpeg" },
    { title: "Genel Bakım", icon: "/Genelbakım.jpeg" },
    { title: "Boynuz Değişimi", icon: "/Boynuz.jpeg" },
    { title: "Hortum Değişimi", icon: "/Hortum3.png" },
    { title: "Filtre", icon: "/Filtre.jpeg" },
    { title: "Pil Kapağı", icon: "/PilKapağı.jpeg" },
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#0d1b33]">
      {/* HERO - Kurumsal Koyu Lacivert */}
      <section className="w-full h-[400px] mt-14 md:h-[500px] bg-gradient-to-t from-amber-200 to-[#d4af37] flex flex-col justify-center items-center relative px-8 overflow-hidden">
        {/* Dekoratif Altın Işıltı (Opsiyonel Arka Plan Efekti) */}
        <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-[#d4af37]/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-[#d4af37]/5 blur-[80px] rounded-full"></div>

        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 text-center tracking-tight">
          Hizmetlerimiz
        </h1>
        <div className="w-24 h-1.5 bg-[#304151] mb-6"></div>
        <p className="text-white text-center max-w-2xl text-lg md:text-xl leading-relaxed">
          ORL İstanbul İşitme Cihazları olarak, uzman teknik desteğimizle işitme kalitenizi en üst seviyeye taşıyoruz.
        </p>
        <Link href="/contact" className="bg-white text-blue-800 px-6 py-3 mt-10 rounded-lg font-semibold hover:bg-gray-100 transition">
          Bize Ulaşın
        </Link>
      </section>

      {/* Hizmetler Kartları - Gold Detaylar */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <h2 className="text-3xl md:text-4xl font-black text-[#0d1b33] text-center mb-16 tracking-tighter uppercase">
          TEKNİK VE SERVİS ÇÖZÜMLERİMİZ
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] p-4 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-b-4 hover:border-b-[#d4af37]"
            >
              <div className="w-full aspect-square relative mb-6 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center p-2">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={200}
                  height={200}
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-bold text-[#0d1b33] group-hover:text-[#d4af37] transition-colors duration-300">
                {service.title}
              </h3>
            </div>
          ))}
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