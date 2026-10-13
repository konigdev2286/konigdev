"use client";

import React, { useEffect, useRef, useState } from "react";

/* ── Hook générique pour détecter l'entrée dans le viewport ── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const specs = [
  "Next.js 14 (App Router) + TypeScript",
  "Tailwind CSS · palette monochrome & vert néon",
  "10 icônes vectorielles simple-icons en ticker continu",
  "Responsive mobile dès 375px · score de chargement instantané",
];

export default function PortfolioProject() {
  const header   = useInView(0.1);
  const mainCard = useInView(0.1);
  const sideCard = useInView(0.1);

  /* Counter animé sur les métriques */
  const [counted, setCounted] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!metricsRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setCounted(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    observer.observe(metricsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projets" className="w-full py-20 sm:py-28 relative overflow-hidden">

      {/* Halo d'ambiance discret */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/4 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 relative z-10">

        {/* ── Entête ─────────────────────────────────────────────────── */}
        <div
          ref={header.ref}
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/10 transition-all duration-700 ${
            header.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <span className="section-label">[ 03 // PROJETS ]</span>
            <h2 className="section-title">
              Réalisations concrètes <br />
              <span className="font-sans font-normal text-ink-light">
                Transparence totale.
              </span>
            </h2>
          </div>
          <p
            className={`font-sans text-ink-muted text-sm sm:text-base max-w-md transition-all duration-700 delay-200 ${
              header.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Aucun faux projet ni métrique inventée. Ce site représente la démonstration
            technique en direct de mon savoir-faire.
          </p>
        </div>

        {/* ── Grille ─────────────────────────────────────────────────── */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* ── Carte principale ───────────────────────────────────── */}
          <div
            ref={mainCard.ref}
            className={`lg:col-span-7 group bg-surface rounded-4xl p-8 sm:p-12 border border-black/5 shadow-soft flex flex-col justify-between transition-all duration-700 ease-out hover:shadow-float hover:-translate-y-1 ${
              mainCard.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div>
              {/* Header de carte */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-black/5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-black/5 text-ink">
                    EN LIGNE · 2026
                  </span>
                </div>
                <span className="font-mono text-xs text-ink-light">KoniG.dev</span>
              </div>

              <h3 className="mt-6 font-sans font-extrabold text-2xl sm:text-3xl text-ink leading-tight">
                Architecture personnelle{" "}
                <span className="inline-block group-hover:text-accent transition-colors duration-300">
                  &amp; vitrine freelance
                </span>
              </h3>

              <p className="mt-4 font-sans text-base text-ink-muted leading-relaxed">
                Développé de zéro selon un design system moderne et rigoureux. Next.js 14
                App Router, typographie soignée, performances optimales et défilement infini
                fluide. Zéro artifice superflu.
              </p>

              {/* Spécifications — apparition en cascade */}
              <div className="mt-8 p-6 rounded-2xl bg-surface-muted border border-black/5">
                <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider block mb-4">
                  Spécifications &amp; Choix d&apos;architecture
                </span>
                <ul className="space-y-3">
                  {specs.map((item, i) => (
                    <li
                      key={i}
                      className={`flex items-center gap-3 font-sans text-xs text-ink-muted transition-all duration-500 ${
                        mainCard.inView
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-4"
                      }`}
                      style={{ transitionDelay: `${300 + i * 100}ms` }}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-300 ${
                          i === specs.length - 1 ? "bg-accent" : "bg-ink"
                        }`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Métriques de performance animées */}
              <div
                ref={metricsRef}
                className="mt-6 grid grid-cols-3 gap-4"
              >
                {[
                  { value: "100", suffix: "%", label: "Score Lighthouse" },
                  { value: "< 1", suffix: "s", label: "Temps de chargement" },
                  { value: "A++", suffix: "", label: "Score SEO" },
                ].map((m, i) => (
                  <div
                    key={m.label}
                    className={`p-4 rounded-2xl bg-ink text-white text-center border border-white/10 transition-all duration-500 ${
                      counted ? "opacity-100 scale-100" : "opacity-0 scale-90"
                    }`}
                    style={{ transitionDelay: `${i * 120}ms` }}
                  >
                    <span className="block font-sans font-black text-xl text-accent">
                      {m.value}{m.suffix}
                    </span>
                    <span className="block font-mono text-[10px] text-white/60 mt-1 uppercase tracking-wider">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-10 pt-6 border-t border-black/5 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-dark group">
                <span>Commander un site similaire</span>
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </a>
              <a
                href="https://github.com/konigdev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light group"
              >
                <span>Code source sur GitHub</span>
                <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
              </a>
            </div>
          </div>

          {/* ── Carte secondaire "Votre projet ici" ─────────────────── */}
          <div
            ref={sideCard.ref}
            className={`lg:col-span-5 relative rounded-4xl p-8 sm:p-12 border-2 border-dashed border-black/15 flex flex-col justify-between overflow-hidden group transition-all duration-700 delay-200 ease-out hover:border-accent/40 hover:shadow-[0_0_40px_-10px_rgba(57,255,20,0.2)] ${
              sideCard.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Fond animé au hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/3 group-hover:to-accent/5 transition-all duration-700 rounded-4xl pointer-events-none" />

            {/* Particule décorative flottante */}
            <div className="absolute top-6 right-6 w-24 h-24 rounded-full border-2 border-dashed border-accent/20 group-hover:border-accent/50 group-hover:scale-110 transition-all duration-700" />
            <div className="absolute bottom-12 right-12 w-12 h-12 rounded-full border border-dashed border-accent/10 group-hover:border-accent/30 group-hover:rotate-45 transition-all duration-700" />

            <div className="relative z-10">
              <div className="pb-6 border-b border-dashed border-black/15 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-black/5 text-ink group-hover:bg-accent/10 group-hover:text-ink transition-all">
                  RÉSERVATION
                </span>
                <span className="font-mono text-xs text-ink-light flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Disponible
                </span>
              </div>

              <h3 className="mt-6 font-sans font-black text-2xl sm:text-3xl text-ink leading-tight group-hover:text-ink transition-colors">
                Votre projet{" "}
                <span className="group-hover:text-accent transition-colors duration-300">
                  ici.
                </span>
              </h3>

              <p className="mt-3 font-sans text-sm text-ink-muted leading-relaxed">
                Vous avez un projet de site web, d&apos;application mobile avec Flutter ou
                d&apos;automatisation avec n8n et Mistral AI ? Confiez-le-moi pour devenir
                la première référence client mise en lumière.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  { key: "Délai moyen", value: "Démarrage sous 7 jours ouvrés" },
                  { key: "Accompagnement", value: "Échange direct avec Esdras" },
                  { key: "Propriété", value: "100% de cession de code et données" },
                ].map((item, i) => (
                  <div
                    key={item.key}
                    className={`flex items-start gap-3 p-4 rounded-xl bg-surface/60 border border-black/5 group-hover:border-accent/15 transition-all duration-300`}
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                    <p className="font-sans text-xs text-ink-muted">
                      <strong className="text-ink font-semibold">{item.key} :</strong>{" "}
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-10 pt-6 border-t border-dashed border-black/15">
              <a
                href="#contact"
                className="w-full btn-dark justify-center group"
              >
                <span>Proposer un projet</span>
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
