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
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* HERO */}
      <section className="w-full h-[500px] md:h-[600px] bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#60a5fa] flex flex-col justify-center items-center relative px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Hizmetlerimiz
        </h1>
        <p className="text-gray-200 text-center max-w-2xl">
          ORL İstanbul İşitme Cihazları olarak sizlere sunduğumuz hizmetler ile işitme kalitenizi artırmayı hedefliyoruz.
        </p>
      </section>

      {/* Hizmetler Kartları */}
      <section className="py-16 px-4 md:px-12 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-900 text-center mb-12">
          Neler Sunuyoruz?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div key={idx} className="p-2 bg-white rounded-2xl shadow-xl text-center hover:shadow-2xl transition transform hover:scale-105">
              <div className="w-48 h-48 mx-auto mb-4">
                <Image src={service.icon} alt={service.title} width={200} height={200} />
              </div>
              <h3 className="text-xl font-bold text-sky-900 mb-2">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Bölümü */}
      <section className="py-16 px-4 md:px-12 flex flex-col items-center bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] text-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Ücretsiz Danışmanlık Alın
        </h2>
        <p className="text-center max-w-2xl mb-6">
          Hizmetlerimiz hakkında detaylı bilgi almak ve cihazlarımızı deneyimlemek için bizimle iletişime geçin.
        </p>
        <Link href="/contact" className="bg-white text-sky-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Bize Ulaşın
        </Link>
      </section>
    </div>
  );
}