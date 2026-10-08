"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.9);
  const [borderRadius, setBorderRadius] = useState(48);
  const [glowOpacity, setGlowOpacity] = useState(0.2);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!containerRef.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Centre de l'élément et du viewport
          const elementCenter = rect.top + rect.height / 2;
          const viewportCenter = windowHeight / 2;

          // Distance relative du centre (-1.0 à 1.0)
          const maxDistance = windowHeight * 0.75;
          const dist = Math.abs(elementCenter - viewportCenter);
          const rawProgress = 1 - Math.min(dist / maxDistance, 1);
          
          // Fonction d'assouplissement cubique pour un effet smooth
          const easedProgress = Math.pow(rawProgress, 1.4);

          // Le bloc démarre à scale 0.88 et monte à 1.02 au centre de l'écran, puis redescend
          const computedScale = 0.88 + easedProgress * 0.14;
          // Le border-radius s'arrondit quand il rétrécit et s'étend quand il s'agrandit
          const computedRadius = 48 - easedProgress * 16;
          // La lueur verte néon s'intensifie quand le bloc est au centre
          const computedGlow = 0.15 + easedProgress * 0.65;

          setScale(Number(computedScale.toFixed(3)));
          setBorderRadius(Math.round(computedRadius));
          setGlowOpacity(Number(computedGlow.toFixed(2)));

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
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Entête externe */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-black/10">
          <div>
            <span className="section-label">{"[ 04 // BIO & VISION ]"}</span>
            <h2 className="section-title">
              À propos d&apos;Esdras <br />
              <span className="font-sans font-normal text-ink-light">
                Autodidacte &amp; Développeur Full-Stack.
              </span>
            </h2>
          </div>
          <p className="font-sans text-ink-muted text-sm sm:text-base max-w-md">
            Parcours autodidacte, rigueur d&apos;ingénierie et vision opérationnelle depuis Brazzaville.
          </p>
        </div>

        {/* ─── BLOC NOIR RÉACTIF AU SCROLL (S'AGRANDIT & RÉTRÉCIT) ─── */}
        <div className="mt-12 flex justify-center">
          <div
            className="w-full transition-transform duration-150 ease-out will-change-transform relative"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "center center",
            }}
          >
            {/* Lueur d'ambiance néon derrière le bloc noir */}
            <div
              className="absolute -inset-2 rounded-[52px] bg-gradient-to-r from-accent/30 via-accent/10 to-transparent blur-2xl pointer-events-none transition-opacity duration-300 -z-10"
              style={{ opacity: glowOpacity }}
            />

            {/* Conteneur Noir Profond */}
            <div
              className="w-full bg-[#0B0B0F] text-white p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden"
              style={{
                borderRadius: `${borderRadius}px`,
                boxShadow: `0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px -10px rgba(57, 255, 20, ${glowOpacity * 0.4})`,
              }}
            >
              {/* Effet visuel d'arrière-plan discret dans le bloc */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />

              {/* Tag indicateur interactif */}
              <div className="flex items-center justify-between pb-8 border-b border-white/10 mb-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
                  <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                    Profil Développeur • Disponible
                  </span>
                </div>
                <span className="font-mono text-xs text-white/40 hidden sm:inline-block">
                  KoniG.dev // 2026
                </span>
              </div>

              {/* Grille interne Photo + Présentation */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Photo d'Esdras */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-full max-w-[360px] group">
                    <div className="relative rounded-3xl bg-white/5 p-3.5 border border-white/10 backdrop-blur-md shadow-2xl transition-transform duration-500 group-hover:scale-102">
                      <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                        <Image
                          src="/photo.jpg"
                          alt="Esdras Thychel MBOULOUKOUE"
                          fill
                          className="object-cover object-top filter contrast-105"
                          sizes="(max-width: 768px) 100vw, 360px"
                          priority
                        />
                        {/* Dégradé bas d'image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="font-sans font-bold text-base text-white block">
                            Esdras T. MBOULOUKOUE
                          </span>
                          <span className="font-mono text-xs text-accent">
                            Fondateur KoniG.dev
                          </span>
                        </div>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                        <span>Brazzaville, Congo</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-accent/20 text-accent font-semibold text-[11px]">
                          Freelance
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Texte de présentation & vision */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <div>
                    <h3 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                      Autodidacte, pragmatique et focalisé sur{" "}
                      <span className="text-accent underline decoration-accent/40 underline-offset-6">
                        l&apos;impact réel
                      </span>
                      .
                    </h3>

                    <div className="mt-6 space-y-4 font-sans text-white/80 text-sm sm:text-base leading-relaxed">
                      <p>
                        Je m&apos;appelle <strong className="text-white font-semibold">Esdras Thychel MBOULOUKOUE</strong>,
                        développeur full-stack et concepteur d&apos;automatisations intelligentes sous la bannière{" "}
                        <strong className="text-accent font-mono font-bold">KoniG.dev</strong>.
                      </p>
                      <p>
                        Mon apprentissage en autodidacte m&apos;a appris une vérité cardinale : ce qui compte
                        sur le terrain n&apos;est pas la promesse théorique, mais la capacité concrète à
                        résoudre un problème métier avec du code robuste, bien architecturé et maintenable.
                      </p>
                      <p>
                        Depuis <strong className="text-white font-semibold">Brazzaville (République du Congo)</strong>, je
                        collabore à distance avec des entrepreneurs et des organisations qui recherchent un partenaire technique
                        fiable, transparent et directement impliqué dans leur succès.
                      </p>
                    </div>
                  </div>

                  {/* Cartes d'engagements clés */}
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-accent/40 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-bold">
                          Philosophie
                        </span>
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-white/90 font-medium leading-snug">
                        Zéro dépendance inutile, typage strict et performances mesurables en production.
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-accent/40 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-bold">
                          Collaboration
                        </span>
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-white/90 font-medium leading-snug">
                        100% à distance, communication fluide et réactive via WhatsApp, Meet et GitHub.
                      </p>
                    </div>
                  </div>

                  {/* Indicateur de défilement immersif */}
                  <div className="mt-2 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/40">
                    <span>Effet immersif actif</span>
                    <span className="text-accent/80">Scroll pour faire respirer le bloc ↓</span>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
