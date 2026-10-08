"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { href: "#hero", label: "Accueil" },
    { href: "#a-propos", label: "À propos" },
    { href: "#services", label: "Expertise" },
    { href: "#projets", label: "Projets" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-bg/85 backdrop-blur-md transition-all">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        {/* Logo / Identité style Sevora */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-4 rounded-lg"
          aria-label="Accueil KoniG.dev"
        >
          <div className="w-8 h-8 relative flex items-center justify-center rounded-lg bg-surface p-1 shadow-sm border border-black/10 group-hover:scale-105 transition-transform">
            <Image
              src="/logo.png"
              alt="Logo KoniG.dev"
              width={24}
              height={24}
              priority
              className="object-contain"
            />
          </div>
          <span className="font-sans font-bold text-ink text-lg tracking-tight">
            KoniG<span className="text-ink-light">.dev</span>
          </span>
        </Link>

        {/* Navigation centrale épurée */}
        <nav
          className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-ink-muted"
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Bouton d'action droit style Sevora */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ink text-white text-xs sm:text-sm font-medium hover:bg-accent hover:text-ink transition-all duration-200 shadow-sm"
          >
            <span>Démarrer un projet</span>
          </a>
        </div>

        {/* Bouton Menu Mobile */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-surface border border-black/10 text-ink shadow-sm"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? (
            <span className="text-base font-bold">✕</span>
          ) : (
            <span className="text-base font-bold">☰</span>
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="md:hidden mx-4 my-2 p-5 bg-surface rounded-2xl border border-black/10 shadow-lg"
        >
          <nav className="flex flex-col gap-3 font-medium text-sm text-ink">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-surface-muted transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center py-3 px-5 rounded-xl bg-ink text-white font-medium text-center shadow-md hover:bg-accent hover:text-ink transition-colors"
            >
              <span>Démarrer un projet</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
