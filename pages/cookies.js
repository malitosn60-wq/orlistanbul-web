import Head from "next/head";
import Link from "next/link";

export default function CookiesPolicy() {
  return (
    <>
      <Head>
        <title>Çerez Politikası - ORL İstanbul</title>
        <meta
          name="description"
          content="ORL İstanbul İşitme Cihazları Çerez Politikası. Sitemizde kullanılan çerezlerin türleri, amaçları ve kullanıcıların çerez tercihlerini nasıl yönetebileceklerine dair bilgiler."
        />
      </Head>

      <div className="max-w-4xl mx-auto px-6 py-32 md:py-32 text-gray-800 leading-relaxed">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-sky-900 text-center">
          Çerez Politikası
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">1. Çerez Nedir?</h2>
          <p>
            Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınıza kaydedilen küçük metin dosyalarıdır.
            Bu dosyalar, sitenin düzgün çalışmasını sağlamak, kullanıcı deneyimini geliştirmek ve
            ziyaretçi trafiğini analiz etmek için kullanılır.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">2. Kullanılan Çerez Türleri</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Zorunlu Çerezler:</strong> Sitenin temel işlevlerinin yerine getirilmesi için
              gereklidir. Bu çerezler olmadan site düzgün çalışmayabilir.
            </li>
            <li>
              <strong>Analitik Çerezler:</strong> Sitemizin performansını anlamak, ziyaretçi sayısını
              ölçmek ve kullanıcı deneyimini geliştirmek amacıyla anonim veriler toplar.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">3. Çerezlerin Kullanım Amaçları</h2>
          <p>Çerezler aşağıdaki amaçlarla kullanılmaktadır:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Site güvenliğini ve kararlılığını sağlamak</li>
            <li>Kullanıcı deneyimini kişiselleştirmek</li>
            <li>Sitenin performansını ve işlevselliğini geliştirmek</li>
            <li>Ziyaretçi istatistikleri oluşturmak</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">4. Çerez Yönetimi</h2>
          <p className="mb-3">
            Tarayıcı ayarlarınızı değiştirerek çerezleri devre dışı bırakabilir, silebilir veya yeni
            çerezlerin yüklenmesini engelleyebilirsiniz. Ancak bazı çerezlerin devre dışı bırakılması
            site işlevlerinde aksamalara neden olabilir.
          </p>
          <p>
            Çerezler ve kişisel verileriniz hakkında daha fazla bilgi almak için{" "}
            <Link
              href="/gizlilik"
              className="text-sky-700 underline hover:text-sky-900 transition"
            >
              Gizlilik Politikası & KVKK
            </Link>{" "}
            sayfamızı ziyaret edebilirsiniz.
          </p>
        </section>

        <div className="text-center mt-14">
          <Link
            href="/"
            className="inline-block bg-sky-900 text-white px-6 py-3 rounded-lg hover:bg-sky-800 transition"
          >
            Anasayfaya Dön
          </Link>
        </div>
      </div>
    </>
  );
}