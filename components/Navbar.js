"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaHome,
  FaInfoCircle,
  FaHandsHelping,
  FaBoxes,
  FaPhone,
} from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Ana Sayfa", href: "/", icon: <FaHome /> },
    { name: "Hakkımızda", href: "/hakkimizda", icon: <FaInfoCircle /> },
    { name: "Hizmetler", href: "/hizmetler", icon: <FaHandsHelping /> },
    { name: "Ürünlerimiz", href: "/urunler", icon: <FaBoxes /> },
    { name: "İletişim", href: "/iletisim", icon: <FaPhone /> },
  ];

  return (
    <nav className="w-full bg-white shadow-xl fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-4 lg:px-12 py-3 relative max-w-[1920px] mx-auto">
        
        {/* Logo */}
        <Link href="/" className="flex items-center transition-transform active:scale-95">
          <Image
            src="/ORL_pano.png"
            alt="ORL Istanbul"
            width={120}
            height={120}
            className="drop-shadow-sm"
          />
        </Link>

        {/* Masaüstü Menü */}
        <div className="hidden lg:flex space-x-3">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <button className="flex items-center gap-2 px-5 py-2.5 border-2 border-gray-100 rounded-lg font-bold text-sm uppercase tracking-wide text-[#d4af37] transition-all duration-200 ease-in-out hover:bg-[#304151] hover:text-[#d4af37] hover:border-[#1f2a35] active:scale-95">
                <span className="text-[#d4af37]">{item.icon}</span> 
                {item.name}
              </button>
            </Link>
          ))}
        </div>

        {/* Hamburger Menü (Mobil) */}
        <button
          onClick={() => setOpen(!open)}
          className="flex lg:hidden flex-col justify-center items-center w-10 h-10 relative z-[60]"
        >
          <span
            className={`block w-7 h-0.5 bg-[#d4af37] transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-7 h-0.5 bg-[#d4af37] my-1.5 transition-all duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-7 h-0.5 bg-[#d4af37] transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobil Menü */}
      <div
        className={`absolute top-full left-0 w-full bg-white flex flex-col items-center overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[600px] py-6 shadow-2xl border-t border-gray-100" : "max-h-0 py-0"
        } lg:hidden`}
      >
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href} className="w-[90%]">
            <button
              onClick={() => setOpen(false)}
              className="w-full flex items-center justify-center gap-3 px-4 py-4 border-2 border-gray-50 rounded-xl mb-3 font-bold text-[#d4af37] transition-all duration-200 hover:bg-[#2c3e50] active:scale-95"
            >
              {item.icon} {item.name}
            </button>
          </Link>
        ))}
      </div>
    </nav>
  );
}