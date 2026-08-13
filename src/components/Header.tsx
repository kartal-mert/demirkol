"use client";

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/demirkol-boks-kulubu-atasehir.webp";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 md:px-10">
      <div className="mx-auto max-w-7xl rounded-2xl border border-border/45 bg-background/70 px-4 py-3 md:px-6 backdrop-blur-xl flex items-center justify-between shadow-2xl transition-all duration-300">
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <img
            src={logo}
            alt="Ataşehir boks özel ders - Demirkol Boks Kulübü Ataşehir Logo"
            className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-primary/50 object-cover"
          />
          <span className="font-display text-lg md:text-xl tracking-wider font-bold">
            DEMİRKOL<span className="text-primary"> BOKS</span>
          </span>
        </Link>
        
        <nav className="hidden gap-8 text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground md:flex">
          <Link
            to="/"
            activeProps={{ className: "text-foreground" }}
            className="transition-colors hover:text-foreground"
          >
            Anasayfa
          </Link>
          <Link
            to="/antrenorler"
            activeProps={{ className: "text-foreground" }}
            className="transition-colors hover:text-foreground"
          >
            Antrenörler
          </Link>
          <Link
            to="/galeri"
            activeProps={{ className: "text-foreground" }}
            className="transition-colors hover:text-foreground"
          >
            Galeri
          </Link>
          <Link
            to="/iletisim"
            activeProps={{ className: "text-foreground" }}
            className="transition-colors hover:text-foreground"
          >
            İletişim
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/iletisim"
            className="hidden sm:inline-block bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-105"
          >
            Deneme Dersi
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Menü"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-x-4 top-24 z-40 rounded-2xl border border-border/40 bg-background/95 p-6 shadow-2xl backdrop-blur-lg transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 text-sm font-bold uppercase tracking-[0.25em]">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            activeProps={{ className: "text-foreground" }}
            className="transition-colors text-muted-foreground hover:text-foreground py-2"
          >
            Anasayfa
          </Link>
          <Link
            to="/antrenorler"
            onClick={() => setIsOpen(false)}
            activeProps={{ className: "text-foreground" }}
            className="transition-colors text-muted-foreground hover:text-foreground py-2"
          >
            Antrenörler
          </Link>
          <Link
            to="/galeri"
            onClick={() => setIsOpen(false)}
            activeProps={{ className: "text-foreground" }}
            className="transition-colors text-muted-foreground hover:text-foreground py-2"
          >
            Galeri
          </Link>
          <Link
            to="/iletisim"
            onClick={() => setIsOpen(false)}
            activeProps={{ className: "text-foreground" }}
            className="transition-colors text-muted-foreground hover:text-foreground py-2"
          >
            İletişim
          </Link>
          <Link
            to="/iletisim"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-105"
          >
            Deneme Dersi
          </Link>
        </nav>
      </div>
    </header>
  );
}
