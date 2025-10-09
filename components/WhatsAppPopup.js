"use client";
import { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

export default function WhatsAppPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-28 right-6 bg-green-600 text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-xs z-50 transform transition-transform duration-500 ease-out animate-slide-in">
      <FaWhatsapp size={28} />
      <div className="flex flex-col">
        <span className="font-semibold">Bize WhatsApp'tan ulaşın!</span>
        <a
          href="https://wa.me/905013535159"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 px-4 py-2 bg-gradient-to-r from-green-500 to-green-400 text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:from-green-400 hover:to-green-600 transition-transform text-sm text-center"
        >
          Mesaj Gönder
        </a>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="ml-auto text-white hover:text-gray-200"
      >
        <FaTimes size={18} />
      </button>
    </div>
  );
}