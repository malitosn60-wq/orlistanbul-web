import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showPopup, setShowPopup] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
  });

  useEffect(() => {
    const consent = sessionStorage.getItem("cookieConsent");
    if (!consent) {
      setShowPopup(true); // Popup sadece yeni oturumda gösterilir
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true };
    sessionStorage.setItem("cookieConsent", JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setShowPopup(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = { necessary: true, analytics: false };
    sessionStorage.setItem("cookieConsent", JSON.stringify(onlyNecessary));
    setPreferences(onlyNecessary);
    setShowPopup(false);
  };

  const handleSaveSettings = () => {
    sessionStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setShowPopup(false);
    setShowSettings(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-6 right-6 max-w-xs bg-white shadow-2xl rounded-xl p-5 border border-gray-200 text-gray-900 z-50 animate-fadeIn transition-all duration-500">
      {!showSettings ? (
        <>
          <h3 className="text-lg font-semibold text-gray-800">Çerez Politikası</h3>
          <p className="text-sm text-gray-700 mt-2">
            Web sitemiz kullanıcı deneyimini iyileştirmek için çerezler kullanır. 
            <a href="/gizlilik-ve-kvkk" className="text-blue-500 underline ml-1" target="_blank">Gizlilik Politikası</a> ve 
            <a href="/cookies" className="text-blue-500 underline ml-1" target="_blank">Çerez Politikası</a> sayfalarını inceleyebilirsiniz.
          </p>
          <div className="flex justify-end gap-2 mt-3">
            <button
              onClick={() => setShowSettings(true)}
              className="px-3 py-1 text-gray-700 hover:underline text-sm"
            >
              Ayarlar
            </button>
            <button
              onClick={handleRejectAll}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
            >
              Reddet
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Kabul Et
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-lg font-semibold text-gray-800">Çerez Ayarları</h3>
          <p className="text-sm text-gray-700 mt-2">Hangi çerezleri kabul etmek istediğinizi seçin:</p>
          <div className="flex flex-col gap-2 mt-3">
            <label className="flex justify-between items-center">
              <span>Zorunlu Çerezler</span>
              <input type="checkbox" checked disabled className="accent-blue-600" />
            </label>
            <label className="flex justify-between items-center">
              <span>Analitik Çerezler</span>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) =>
                  setPreferences({ ...preferences, analytics: e.target.checked })
                }
                className="accent-blue-600"
              />
            </label>
          </div>
          <div className="flex justify-end gap-2 mt-3">
            <button
              onClick={() => setShowSettings(false)}
              className="px-3 py-1 text-gray-700 hover:underline text-sm"
            >
              Geri
            </button>
            <button
              onClick={handleSaveSettings}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Kaydet
            </button>
          </div>
        </>
      )}
    </div>
  );
}