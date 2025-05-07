"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="p-4 flex justify-center items-center">

      {/* MENU desktop */}
      <nav className="hidden md:flex gap-8 items-center">
        <Link href="/" className="text-lg hover:text-blue-600">Accueil</Link>
        <Link href="/nathuropathy" className="text-lg hover:text-slate-500">La Naturopathie</Link>
        <Link href="/nathuropathe" className="text-lg hover:text-slate-500">Le Naturopathe</Link>
        <Link className="mx-2" href="/">
            <span className='nav-logo-container flex p-2 flex-col items-center '>
              <span className='nav-sublogo tracking-widest text-sm font-bold'>Caral-Villa</span>
                  <Image 
                    width={100}
                    height={100}
                    src="/images/logo.png"
                    alt="Logo"
                    className="w-18 h-18rounded-full object-cover"
                  />
                <span className='nav-sublogo tracking-widest text-sm font-bold'>Justine</span>
            </span>
        </Link>
        <Link href="/outils" className="text-lg hover:text-slate-500">Mes Outils</Link>
        <Link href="/techniques" className="text-lg hover:text-slate-500">Mes Techniques</Link>
        <Link href="/services" className="text-lg hover:text-slate-500">Articles</Link>
        <Link href="/contact" className="text-lg hover:text-slate-500">Contact</Link>
      </nav>

      {/* BURGER mobile */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Overlay mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" onClick={toggleMenu}></div>
      )}

      {/* Menu mobile */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform z-50 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 space-y-4">
          <Link href="/" className="text-lg font-semibold hover:text-blue-600" onClick={toggleMenu}>Accueil</Link>
          <Link href="/nathuropathy" className="text-lg font-semibold hover:text-blue-600" onClick={toggleMenu}>La Naturopathie</Link>
          <Link href="/nathuropathe" className="text-lg font-semibold hover:text-blue-600" onClick={toggleMenu}>Le Naturopathe</Link>
          <Link href="/outils" className="text-lg font-semibold hover:text-blue-600" onClick={toggleMenu}>Mes Outils</Link>
          <Link href="/techniques" className="text-lg font-semibold hover:text-blue-600" onClick={toggleMenu}>Mes Techniques</Link>
          <Link href="/services" className="text-lg font-semibold hover:text-blue-600" onClick={toggleMenu}>Articles</Link>
          <Link href="/contact" className="text-lg font-semibold hover:text-blue-600" onClick={toggleMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
