"use client";

import React from "react";
import { technologies } from "@/lib/icons";

// Double pour un défilement continu sans interruption visible
const marqueeList = [...technologies, ...technologies];

export default function Stack() {
  return (
    <section
      id="stack"
      className="w-full py-20 sm:py-28 overflow-hidden bg-surface-warm border-y border-black/10"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10">
        {/* Entête */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div>
            <span className="section-label">[ 02 // TECHNOLOGIES ]</span>
            <h2 className="section-title">
              Outils &amp; technologies <br />
              <span className="font-serif italic font-normal text-ink-light underline decoration-accent decoration-4">
                éprouvés en production.
              </span>
            </h2>
          </div>
          <p className="font-sans text-ink-muted text-sm sm:text-base max-w-md">
            10 outils maîtrisés au quotidien. Logos officiels défilant en continu —
            survoler pour mettre en pause.
          </p>
        </div>
      </div>

      {/* ── Ticker pleine largeur ──────────────────────────────────────── */}
      <div
        className="marquee-wrapper w-full py-4 overflow-hidden"
        aria-label="Technologies utilisées"
      >
        <div className="marquee-track">
          {marqueeList.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="shrink-0 mx-3 bg-surface rounded-2xl p-5 border-2 border-black/10 shadow-soft flex items-center gap-4 min-w-[220px] select-none hover:shadow-hard-green hover:border-ink hover:-translate-y-0.5 transition-all duration-200 group cursor-default"
            >
              {/* Icône officielle */}
              <div className="w-11 h-11 rounded-xl flex items-center justify-center p-2 bg-bg border border-black/10 shrink-0 group-hover:bg-accent transition-colors duration-200">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-ink"
                  aria-label={`Logo officiel de ${tech.name}`}
                >
                  <path d={tech.icon.path} />
                </svg>
              </div>

              {/* Libellé */}
              <div className="flex flex-col">
                <span className="font-sans text-sm font-bold text-ink">{tech.name}</span>
                <span className="font-mono text-xs text-ink-muted mt-0.5">{tech.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Légende */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 mt-6 flex items-center justify-between font-mono text-xs text-ink-muted">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-accent border border-ink" />
          <span>Défilement continu • Gauche vers droite</span>
        </div>
        <span className="hidden sm:inline">Survoler pour mettre en pause</span>
      </div>
    </section>
  );
}
