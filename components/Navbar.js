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
    { name: "Markalar & Ürünlerimiz", href: "/urunler", icon: <FaBoxes /> },
    { name: "İletişim", href: "/iletisim", icon: <FaPhone /> },
  ];

  return (
    <nav className="w-full bg-white text-sky-800 shadow-2xl fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-4 lg:px-8 py-3 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/orl-istanbul-kartvizit.png"
            alt="Logo"
            width={128}
            height={128}
          />
        </Link>

        {/* Masaüstü menü */}
        <div className="hidden lg:flex space-x-4">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-sky-50 transition">
                {item.icon} {item.name}
              </button>
            </Link>
          ))}
        </div>

        {/* Hamburger menü */}
        <button
          onClick={() => setOpen(!open)}
          className="flex lg:hidden flex-col justify-center items-center w-8 h-8 relative z-[60]"
        >
          <span
            className={`block w-6 h-0.5 bg-sky-800 transition-transform duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-sky-800 my-1 transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-sky-800 transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobil menü */}
      <div
        className={`absolute top-full left-0 w-full bg-white flex flex-col items-center overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] py-4 shadow-lg" : "max-h-0 py-0"
        } lg:hidden`}
      >
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href} className="w-full px-6">
            <button
              onClick={() => setOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg mb-2 hover:bg-sky-50 transition"
            >
              {item.icon} {item.name}
            </button>
          </Link>
        ))}
      </div>
    </nav>
  );
}