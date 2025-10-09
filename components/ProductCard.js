"use client";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProductCard({ name, image, description, logo, showButton = false, externalLink }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow p-6 flex flex-col items-center text-center group">
      <div className="w-32 h-32 md:w-64 md:h-64 mb-4 relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain rounded-xl group-hover:scale-105 transition-transform"
        />
      </div>
      <h3 className="text-xl font-semibold text-sky-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {/* Logo ve Buton yan yana */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-48 h-24 relative">
          <Image src={logo} alt={`${name} logo`} fill className="object-contain" />
        </div>
        {externalLink && (
          <a
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-700 rounded-2xl flex flex-col items-center justify-center transition transform hover:scale-110 hover:shadow-lg px-3 py-3 border border-gray-200 w-14 h-14"
          >
            <FaExternalLinkAlt size={18} className="mb-1" />
            <span className="text-xs font-medium">İncele</span>
          </a>
        )}
      </div>

      {showButton && !externalLink && (
        <a href="/urunler">
          <button className="mt-4 bg-sky-900 text-white px-6 py-2 rounded-full hover:bg-sky-800 transition transform hover:scale-105 shadow-md">
            İncele
          </button>
        </a>
      )}
    </div>
  );
}