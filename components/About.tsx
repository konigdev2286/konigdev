"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ── Hook scroll-reveal avec seuil configurable ── */
function useInView(threshold = 0.12) {
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

/* ── Hook parallax au scroll ── */
function useParallax(speed = 0.04) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      setOffset(center * speed);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);
  return { ref, offset };
}

const commitments = [
  {
    id: "philosophy",
    label: "Philosophie",
    text: "Zéro dépendance inutile, typage strict et performances mesurables en production.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: "collab",
    label: "Collaboration",
    text: "100% à distance, communication fluide et réactive via WhatsApp, Meet et GitHub.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "100%", label: "Propriété du code" },
  { value: "24h", label: "Délai de réponse" },
  { value: "5+", label: "Années d'autodidaxie" },
  { value: "0", label: "Intermédiaires" },
];

export default function About() {
  /* Scroll scale effect */
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.9);
  const [borderRadius, setBorderRadius] = useState(48);
  const [glowOpacity, setGlowOpacity] = useState(0.15);

  /* Reveal hooks */
  const header  = useInView(0.08);
  const photoEl = useInView(0.15);
  const textEl  = useInView(0.15);
  const statsEl = useInView(0.2);

  /* Parallax sur halo */
  const parallax = useParallax(0.03);

  /* Stats counter */
  const [countedStats, setCountedStats] = useState(false);
  const statsCounterRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!statsCounterRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setCountedStats(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(statsCounterRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!containerRef.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const elementCenter = rect.top + rect.height / 2;
          const viewportCenter = windowHeight / 2;
          const maxDistance = windowHeight * 0.75;
          const dist = Math.abs(elementCenter - viewportCenter);
          const rawProgress = 1 - Math.min(dist / maxDistance, 1);
          const easedProgress = Math.pow(rawProgress, 1.4);
          setScale(Number((0.88 + easedProgress * 0.14).toFixed(3)));
          setBorderRadius(Math.round(48 - easedProgress * 16));
          setGlowOpacity(Number((0.12 + easedProgress * 0.68).toFixed(2)));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      id="a-propos"
      ref={containerRef}
      className="w-full py-20 sm:py-32 bg-surface-card border-t border-black/5 overflow-hidden relative"
    >
      {/* Halo parallaxe en arrière-plan */}
      <div
        ref={parallax.ref}
        className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-accent/6 rounded-full blur-3xl pointer-events-none -z-0"
        style={{ transform: `translateY(${parallax.offset}px) translate(-50%, -50%)` }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

        {/* ── Entête ─────────────────────────────────────────────────── */}
        <div
          ref={header.ref}
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-black/10 transition-all duration-700 ${
            header.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <span className="section-label">{"[ 04 // BIO & VISION ]"}</span>
            <h2 className="section-title">
              À propos d&apos;Esdras <br />
              <span className="font-sans font-normal text-ink-light">
                Autodidacte &amp; Développeur Full-Stack.
              </span>
            </h2>
          </div>
          <p
            className={`font-sans text-ink-muted text-sm sm:text-base max-w-md transition-all duration-700 delay-200 ${
              header.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Parcours autodidacte, rigueur d&apos;ingénierie et vision opérationnelle depuis Brazzaville.
          </p>
        </div>

        {/* ─── BLOC NOIR RÉACTIF AU SCROLL ─────────────────────────────── */}
        <div className="mt-12 flex justify-center">
          <div
            className="w-full transition-transform duration-150 ease-out will-change-transform relative"
            style={{ transform: `scale(${scale})`, transformOrigin: "center center" }}
          >
            {/* Lueur néon derrière le bloc */}
            <div
              className="absolute -inset-3 rounded-[52px] bg-gradient-to-br from-accent/25 via-accent/8 to-transparent blur-2xl pointer-events-none transition-opacity duration-300 -z-10"
              style={{ opacity: glowOpacity }}
            />

            {/* Conteneur Noir Profond */}
            <div
              className="w-full bg-[#0A0A10] text-white p-8 sm:p-12 lg:p-16 border border-white/8 shadow-2xl relative overflow-hidden"
              style={{
                borderRadius: `${borderRadius}px`,
                boxShadow: `0 30px 70px -15px rgba(0,0,0,0.8), 0 0 50px -10px rgba(57,255,20,${glowOpacity * 0.35})`,
              }}
            >
              {/* Orbes décoratifs animés */}
              <div
                className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-3xl pointer-events-none"
                style={{ transform: `translateY(${parallax.offset * -2}px)` }}
              />
              <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-white/4 rounded-full blur-2xl pointer-events-none" />
              {/* Grille fine de points */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Tag indicateur */}
              <div className="flex items-center justify-between pb-8 border-b border-white/10 mb-10">
                <div className="flex items-center gap-3">
                  <span className="relative flex">
                    <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                    Profil Développeur · Disponible
                  </span>
                </div>
                <span className="font-mono text-xs text-white/30 hidden sm:inline-block">
                  KoniG.dev // 2026
                </span>
              </div>

              {/* ── Grille Photo + Texte ─────────────────────────────── */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

                {/* Photo */}
                <div
                  ref={photoEl.ref}
                  className={`lg:col-span-4 flex justify-center transition-all duration-800 ease-out ${
                    photoEl.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDuration: "800ms" }}
                >
                  <div className="relative w-full max-w-[280px] group cursor-default">
                    {/* Halo photo */}
                    <div className="absolute -inset-3 bg-accent/10 rounded-[36px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative rounded-3xl bg-white/6 p-3 border border-white/10 backdrop-blur-sm shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-accent/30">
                      <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                        <Image
                          src="/photo.jpg"
                          alt="Esdras Thychel MBOULOUKOUE"
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 280px"
                          priority
                        />
                        {/* Overlay dégradé */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

                        {/* Infos en bas de la photo */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="font-sans font-bold text-sm text-white block">
                            Esdras T. MBOULOUKOUE
                          </span>
                          <span className="font-mono text-xs text-accent mt-0.5 block">
                            Fondateur KoniG.dev
                          </span>
                        </div>
                      </div>

                      <div className="mt-2.5 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
                        <span>Brazzaville, Congo</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-accent/15 text-accent font-semibold text-[11px]">
                          Freelance
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Texte + Engagements */}
                <div
                  ref={textEl.ref}
                  className={`lg:col-span-8 flex flex-col gap-6 transition-all ease-out ${
                    textEl.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDuration: "800ms", transitionDelay: "150ms" }}
                >
                  <h3 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                    Autodidacte, pragmatique et focalisé sur{" "}
                    <span className="text-accent underline decoration-accent/30 underline-offset-6">
                      l&apos;impact réel
                    </span>
                    .
                  </h3>

                  <div className="space-y-4 font-sans text-white/75 text-sm sm:text-base leading-relaxed">
                    {[
                      <>
                        Je m&apos;appelle{" "}
                        <strong className="text-white font-semibold">Esdras Thychel MBOULOUKOUE</strong>,
                        développeur full-stack et concepteur d&apos;automatisations intelligentes sous la bannière{" "}
                        <strong className="text-accent font-mono font-bold">KoniG.dev</strong>.
                      </>,
                      <>
                        Mon apprentissage en autodidacte m&apos;a appris une vérité cardinale : ce qui compte
                        sur le terrain n&apos;est pas la promesse théorique, mais la capacité concrète à
                        résoudre un problème métier avec du code robuste, bien architecturé et maintenable.
                      </>,
                      <>
                        Depuis{" "}
                        <strong className="text-white font-semibold">Brazzaville (République du Congo)</strong>,
                        je collabore à distance avec des entrepreneurs et des organisations qui recherchent
                        un partenaire technique fiable, transparent et directement impliqué dans leur succès.
                      </>,
                    ].map((para, i) => (
                      <p
                        key={i}
                        className={`transition-all duration-600 ${
                          textEl.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                        style={{ transitionDelay: `${300 + i * 120}ms`, transitionDuration: "600ms" }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Cartes d'engagements */}
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {commitments.map((c, i) => (
                      <div
                        key={c.id}
                        className={`group bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 cursor-default ${
                          textEl.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                        style={{ transitionDelay: `${600 + i * 120}ms`, transitionDuration: "500ms" }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-accent/80 group-hover:text-accent transition-colors">
                            {c.icon}
                          </span>
                          <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-bold">
                            {c.label}
                          </span>
                        </div>
                        <p className="font-sans text-xs sm:text-sm text-white/80 group-hover:text-white/95 font-medium leading-snug transition-colors">
                          {c.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Bande de stats en bas ─────────────────────────────── */}
              <div
                ref={statsCounterRef}
                className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6"
              >
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    ref={i === 0 ? statsEl.ref : undefined}
                    className={`text-center transition-all duration-500 ${
                      countedStats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <span className="block font-sans font-black text-2xl sm:text-3xl text-accent">
                      {s.value}
                    </span>
                    <span className="block font-mono text-[11px] text-white/40 uppercase tracking-wider mt-1">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Indicateur d'effet immersif */}
              <div className="mt-8 pt-4 border-t border-white/8 flex items-center justify-between text-xs font-mono text-white/30">
                <span>Effet immersif actif · scroll pour agrandir</span>
                <span className="text-accent/50">↓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
