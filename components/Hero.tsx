"use client";

import React from "react";
import Image from "next/image";
import { technologies } from "@/lib/icons";

// Double pour un défilement continu sans interruption visible
const marqueeList = [...technologies, ...technologies];

export default function Hero() {
  return (
    <section id="hero" className="w-full pt-2 pb-16 sm:pb-24">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10">
        {/* ── Grande carte héro arrondie ───────────────────────────────── */}
        <div className="relative rounded-4xl sm:rounded-5xl bg-surface-card border border-black/5 overflow-hidden p-8 sm:p-14 lg:p-16 shadow-hero">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

            {/* ── Colonne Gauche ────────────────────────────────────────── */}
            <div className="lg:col-span-7 flex flex-col justify-center z-10">
              <h1 className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-[70px] tracking-tight leading-[1.05] text-ink">
                Développer Mieux <br />
                <span className="text-ink-light font-normal">
                  Plus Vite. Plus Loin.
                </span>
              </h1>

              <p className="mt-6 font-sans text-ink-muted text-base sm:text-lg leading-relaxed max-w-lg">
                Je suis <strong className="text-ink">Esdras Thychel MBOULOUKOUE</strong> (KoniG.dev).
                Développeur full-stack &amp; IA freelance basé à Brazzaville. Je conçois des architectures
                robustes, des applications modernes et des automatisations intelligentes pour fondateurs
                et équipes ambitieuses.
              </p>

              {/* Boutons d'action */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#services" className="btn-dark">
                  Ce que je construis
                </a>
                <a href="#contact" className="btn-light">
                  Me contacter
                </a>
              </div>

              {/* Métriques authentiques */}
              <div className="mt-12 pt-8 border-t border-black/10 grid grid-cols-3 gap-4 max-w-md">
                <div>
                  <span className="block font-sans font-extrabold text-2xl sm:text-3xl text-ink">100%</span>
                  <span className="block font-sans text-xs text-ink-muted mt-1">Code &amp; données cédés</span>
                </div>
                <div>
                  <span className="block font-sans font-extrabold text-2xl sm:text-3xl text-ink">24h</span>
                  <span className="block font-sans text-xs text-ink-muted mt-1">Délai de réponse</span>
                </div>
                <div>
                  <span className="block font-sans font-extrabold text-2xl sm:text-3xl text-ink">UTC+1</span>
                  <span className="block font-sans text-xs text-ink-muted mt-1">Brazzaville &amp; Monde</span>
                </div>
              </div>
            </div>

            {/* ── Colonne Droite : Portrait ─────────────────────────────── */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px]">
                {/* Photo */}
                <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden aspect-[4/5] bg-surface-muted shadow-soft">
                  <Image
                    src="/photo.jpg"
                    alt="Esdras Thychel MBOULOUKOUE — Développeur Full-Stack & IA"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                </div>

                {/* Carte flottante statut */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 right-4 sm:right-6 bg-ink/90 backdrop-blur-md text-white p-5 sm:p-6 rounded-2xl border border-white/10 shadow-badge z-20 flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white/70">
                        Statut projet
                      </span>
                    </div>
                    <strong className="block text-sm sm:text-base font-semibold text-white">
                      Disponible pour nouveaux contrats
                    </strong>
                    <span className="block text-xs text-white/60 mt-0.5">
                      Partagez votre idée, cadrage sous 24h.
                    </span>
                  </div>
                  <a
                    href="#contact"
                    className="shrink-0 w-11 h-11 rounded-xl bg-white text-ink hover:bg-accent hover:text-ink transition-colors flex items-center justify-center font-bold text-lg shadow-sm"
                    aria-label="Contacter Esdras"
                  >
                    ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bandeau logos défilant (gauche → droite) ──────────────────── */}
        <div
          id="tech-strip"
          className="marquee-wrapper mt-10 w-full py-5 overflow-hidden border-b border-black/5"
          aria-label="Technologies maîtrisées"
        >
          <div className="marquee-track">
            {marqueeList.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex items-center gap-3 shrink-0 mr-12 sm:mr-16 opacity-60 hover:opacity-100 transition-opacity cursor-default"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-ink shrink-0"
                  aria-label={tech.name}
                >
                  <path d={tech.icon.path} />
                </svg>
                <span className="font-sans font-bold text-sm tracking-tight text-ink whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
