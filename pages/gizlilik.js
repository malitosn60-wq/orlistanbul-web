import Head from "next/head";
import Link from "next/link";

export default function GizlilikVeKVKK() {
  return (
    <>
      <Head>
        <title>Gizlilik Politikası & KVKK - ORL İstanbul</title>
        <meta
          name="description"
          content="ORL İstanbul İşitme Cihazları'nın gizlilik politikası ve KVKK metni. Kullanıcı verilerinin korunması, işlenmesi ve çerez kullanımı hakkında detaylı bilgi."
        />
      </Head>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-32 md:py-32 text-gray-800">
        {/* Başlık */}
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-sky-900 text-center leading-tight">
          Gizlilik Politikası & Kişisel Verilerin Korunması Kanunu (KVKK)
        </h1>

        {/* 1. Genel Bilgilendirme */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-800">
            1. Genel Bilgilendirme
          </h2>
          <p className="text-gray-700 mb-3 leading-relaxed">
            ORL İstanbul olarak, ziyaretçilerimizin kişisel verilerini korumak ve
            gizliliğine saygı göstermek en öncelikli sorumluluğumuzdur. Bu
            kapsamda 6698 sayılı <strong>Kişisel Verilerin Korunması Kanunu (KVKK)</strong> ve
            ilgili mevzuata uygun hareket etmekteyiz.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Web sitemizi kullanarak bu gizlilik politikasını kabul etmiş
            sayılırsınız. Toplanan veriler yalnızca belirtilen amaçlar doğrultusunda
            kullanılacaktır.
          </p>
        </section>

        {/* 2. Toplanan Veriler */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-800">
            2. Toplanan Veriler
          </h2>
          <p className="text-gray-700 mb-3 leading-relaxed">
            Sitemizden iletişim formu, e-posta veya WhatsApp aracılığıyla
            sağladığınız bilgiler kişisel veri kapsamındadır. Bu bilgiler
            aşağıdakileri içerebilir:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
            <li>Ad, soyad ve iletişim bilgileri</li>
            <li>E-posta adresi</li>
            <li>Telefon numarası</li>
            <li>Site kullanım verileri (çerezler ve analitik veriler)</li>
          </ul>
        </section>

        {/* 3. Çerez Politikası */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-800">
            3. Çerez Politikası
          </h2>
          <p className="text-gray-700 mb-3 leading-relaxed">
            Sitemiz, kullanıcı deneyimini geliştirmek ve site performansını
            artırmak amacıyla çerezler kullanmaktadır:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 mb-3">
            <li>
              <strong>Zorunlu çerezler:</strong> Site işlevselliği için gereklidir
              ve devre dışı bırakılamaz.
            </li>
            <li>
              <strong>Analitik çerezler:</strong> Site trafiğini analiz ederek
              kullanıcı deneyimini iyileştirmemize yardımcı olur.
            </li>
          </ul>
          <p className="text-gray-700">
            Çerez kullanımı hakkında detaylı bilgi için{" "}
            <Link href="/cookies" className="text-blue-700 underline hover:text-blue-900">
              Çerez Politikası
            </Link>{" "}
            sayfamızı ziyaret edebilirsiniz.
          </p>
        </section>

        {/* 4. Veri İşleme ve Saklama */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-800">
            4. Veri İşleme ve Saklama
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Toplanan kişisel veriler, yalnızca iletişim sağlamak, hizmet sunmak
            ve yasal yükümlülükleri yerine getirmek amacıyla işlenmektedir.
            Verileriniz, KVKK’da öngörülen süre boyunca güvenli bir şekilde
            saklanır ve üçüncü kişilerle paylaşılmaz.
          </p>
        </section>

        {/* 5. Haklarınız */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-800">
            5. KVKK Kapsamındaki Haklarınız
          </h2>
          <p className="text-gray-700 mb-3 leading-relaxed">
            KVKK uyarınca kişisel verilerinizle ilgili olarak aşağıdaki haklara
            sahipsiniz:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>İşlendi ise buna ilişkin bilgi talep etme</li>
            <li>Yanlış veya eksik verilerin düzeltilmesini isteme</li>
            <li>Verilerin silinmesini veya anonim hale getirilmesini talep etme</li>
            <li>İşlemeye itiraz etme hakkı</li>
          </ul>
        </section>

        {/* Geri Dön Butonu */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-block bg-sky-900 text-white px-8 py-3 rounded-full font-medium hover:bg-sky-800 transition"
          >
            Anasayfaya Dön
          </Link>
        </div>
      </div>
    </>
  );
}