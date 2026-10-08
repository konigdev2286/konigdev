"use client";

import React, { useState, useEffect, useCallback } from "react";

const servicesList = [
  {
    id: "01",
    title: "Automatisations & Agents IA",
    tag: "IA & N8N",
    chapter: "Processus & Flux Autonomes",
    description:
      "J'automatise vos processus répétitifs en connectant vos outils du quotidien avec n8n, Mistral AI et des webhooks sécurisés.",
    deliverable:
      "Flux de travail autonomes 24h/24 sans intervention humaine, alertes instantanées et gain de temps immédiat.",
    useCases: [
      "Tri et réponses automatiques aux emails clients",
      "Synchronisation intelligente CRM, Google Sheets & Notion",
      "RAG & Agents IA formés sur vos données internes",
    ],
    stack: "n8n • Mistral AI • Webhooks • Python",
  },
  {
    id: "02",
    title: "Sites Web & Vitrines Modernes",
    tag: "NEXT.JS 14",
    chapter: "Présence Web Haute Performance",
    description:
      "Création de sites vitrines ultra-rapides, adaptés aux téléphones mobiles et optimisés pour le référencement naturel.",
    deliverable:
      "Présence en ligne soignée, temps de chargement immédiat, SEO optimisé et taux de conversion accru.",
    useCases: [
      "Sites institutionnels et portfolios de marque",
      "Landing pages de conversion haute vitesse",
      "Architecture Next.js 14 App Router sur mesure",
    ],
    stack: "Next.js 14 • TypeScript • Tailwind CSS • SEO",
  },
  {
    id: "03",
    title: "Applications Web & Mobiles",
    tag: "FLUTTER & REACT",
    chapter: "Logiciels Métier & Plateformes",
    description:
      "Développement d'applications complètes et robustes pour gérer votre activité ou offrir un service à vos utilisateurs.",
    deliverable:
      "Application fluide sur Android, iOS ou navigateur, synchronisée en temps réel avec votre base de données.",
    useCases: [
      "Applications mobiles multiplateformes Flutter",
      "Tableaux de bord SaaS et portails clients",
      "Bases de données SQL temps réel Supabase",
    ],
    stack: "Flutter • React • Supabase • PostgreSQL",
  },
  {
    id: "04",
    title: "Invitations Web Événementielles",
    tag: "RSVP EN DIRECT",
    chapter: "Expériences Événementielles",
    description:
      "Conception de faire-part et invitations d'événements interactifs avec recueil des présences en temps réel et plan d'accès.",
    deliverable:
      "Lien web élégant et unique pour vos invités avec tableau de bord en direct de qui confirme sa présence.",
    useCases: [
      "Mariages, réceptions privées et galas",
      "Conférences professionnelles et salons",
      "Formulaire RSVP interactif et compte à rebours",
    ],
    stack: "Next.js • Tailwind CSS • RSVP Dashboard",
  },
  {
    id: "05",
    title: "Infographie & Visuels Numériques",
    tag: "DESIGN GRAPHIQUE",
    chapter: "Supports Graphiques & Identité",
    description:
      "Création de visuels percutants pour vos communications : bannières, affiches publicitaires et éléments de marque cohérents.",
    deliverable:
      "Fichiers haute résolution prêts pour vos réseaux sociaux, vos supports digitaux et vos impressions professionnelles.",
    useCases: [
      "Bannières et visuels promotionnels réseaux sociaux",
      "Affiches, flyers et supports événementiels",
      "Chartes graphiques et kits d'identité visuelle",
    ],
    stack: "Figma • Photoshop • Vectoriel • Print & Web",
  },
  {
    id: "06",
    title: "Web Design & Prototypage UI/UX",
    tag: "ERGONOMIE",
    chapter: "Conception & Architecture Visuelle",
    description:
      "Conception de l'architecture et des maquettes de vos futures interfaces avant de démarrer le développement technique.",
    deliverable:
      "Maquettes interactives prêtes à tester par vos utilisateurs avant d'investir la moindre ressource dans le code.",
    useCases: [
      "Wireframes fonctionnels et parcours utilisateurs",
      "Prototypes cliquables haute fidélité",
      "Design systems réutilisables et composants UI",
    ],
    stack: "Figma • Wireframing • User Flow • Design System",
  },
];

export default function Services() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDir, setFlipDir] = useState<"next" | "prev">("next");
  const totalPages = servicesList.length;

  const goToPage = useCallback(
    (index: number, direction: "next" | "prev" = "next") => {
      if (index === currentPage || isFlipping) return;
      const clamped = ((index % totalPages) + totalPages) % totalPages;
      setFlipDir(direction);
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(clamped);
        setIsFlipping(false);
      }, 280);
    },
    [currentPage, isFlipping, totalPages]
  );

  const handleNext = useCallback(
    () => goToPage((currentPage + 1) % totalPages, "next"),
    [currentPage, goToPage, totalPages]
  );

  const handlePrev = useCallback(
    () => goToPage((currentPage - 1 + totalPages) % totalPages, "prev"),
    [currentPage, goToPage, totalPages]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleNext, handlePrev]);

  const svc = servicesList[currentPage];

  return (
    <section id="services" className="w-full py-20 sm:py-28 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10">
        {/* ── Entête ──────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/10">
          <div>
            <span className="section-label">[ 01 // LE LIVRE DES EXPERTISES ]</span>
            <h2 className="section-title">
              Tournez les pages <br />
              <span className="font-sans font-normal text-ink-light">
                de mon savoir-faire.
              </span>
            </h2>
          </div>
          <div className="flex flex-col sm:items-end gap-2">
            <p className="font-sans text-ink-muted text-sm max-w-sm">
              Naviguez à travers mes 6 prestations comme dans un livre interactif.
              Utilisez les boutons ou les flèches du clavier.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-ink-light">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Chapitre {currentPage + 1} sur {totalPages}</span>
            </div>
          </div>
        </div>

        {/* ── Onglets rapides ─────────────────────────────────────── */}
        <div className="mt-8 flex flex-wrap gap-2">
          {servicesList.map((service, index) => (
            <button
              key={service.id}
              onClick={() => goToPage(index, index > currentPage ? "next" : "prev")}
              aria-label={`Aller à l'expertise ${service.id}`}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
                currentPage === index
                  ? "bg-ink text-white shadow-sm font-bold scale-105"
                  : "bg-surface text-ink-muted border border-black/10 hover:border-black/30 hover:text-ink"
              }`}
            >
              <span>{service.id}</span>
              <span className="hidden sm:inline">{service.title.split(" &")[0]}</span>
            </button>
          ))}
        </div>

        {/* ── LIVRE OUVERT ────────────────────────────────────────── */}
        <div className="mt-8 relative max-w-5xl mx-auto perspective-book">
          {/* Ombre portée du livre */}
          <div className="absolute inset-4 sm:inset-6 bg-black/10 blur-2xl rounded-3xl -z-10" />

          {/* Corps du livre avec animation flip */}
          <div
            className="relative rounded-3xl sm:rounded-4xl bg-surface border border-black/10 shadow-2xl overflow-hidden"
            style={{
              transition: "transform 280ms ease, opacity 280ms ease",
              transform: isFlipping
                ? flipDir === "next"
                  ? "scale(0.985) rotateY(-2deg)"
                  : "scale(0.985) rotateY(2deg)"
                : "scale(1) rotateY(0deg)",
              opacity: isFlipping ? 0.88 : 1,
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
              {/* ── PAGE GAUCHE : Index ─────────────────────────────── */}
              <div className="lg:col-span-5 bg-[#FBFBFA] p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-black/10 flex flex-col justify-between relative">
                {/* Texture de pliure */}
                <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-black/[0.04] to-transparent pointer-events-none hidden lg:block" />

                <div>
                  {/* En-tête page gauche */}
                  <div className="flex items-center justify-between pb-4 border-b border-black/10">
                    <span className="font-mono text-xs text-ink-light uppercase tracking-wider">
                      LIVRE DES SERVICES // KoniG.dev
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-accent text-ink">
                      {svc.tag}
                    </span>
                  </div>

                  {/* Numéro de chapitre */}
                  <div className="mt-8 flex items-baseline gap-4">
                    <span className="font-sans font-black text-7xl text-ink tracking-tighter leading-none">
                      {svc.id}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-mono text-xs uppercase tracking-wider text-ink-light">
                        Chapitre {currentPage + 1}
                      </span>
                      <span className="font-sans font-bold text-sm text-ink mt-0.5">
                        {svc.chapter}
                      </span>
                    </div>
                  </div>

                  {/* Index */}
                  <div className="mt-8 pt-6 border-t border-black/10">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ink-light block mb-3 font-semibold">
                      Index des expertises
                    </span>
                    <ul className="space-y-1.5 font-sans text-xs">
                      {servicesList.map((item, idx) => (
                        <li
                          key={item.id}
                          onClick={() => goToPage(idx, idx > currentPage ? "next" : "prev")}
                          className={`flex items-center justify-between py-1 px-2 rounded-lg cursor-pointer transition-colors ${
                            idx === currentPage
                              ? "bg-black/5 font-bold text-ink"
                              : "text-ink-muted hover:text-ink"
                          }`}
                        >
                          <span className="truncate">{item.id}. {item.title}</span>
                          {idx === currentPage && (
                            <span className="w-1.5 h-1.5 rounded-full bg-accent ml-2 shrink-0" />
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pied page gauche */}
                <div className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between font-mono text-xs text-ink-light">
                  <span>PAGE {currentPage * 2 + 1}</span>
                  <span className="text-[10px]">BRAZZAVILLE • UTC+1</span>
                </div>
              </div>

              {/* ── PAGE DROITE : Contenu ──────────────────────────── */}
              <div className="lg:col-span-7 bg-surface p-8 sm:p-12 flex flex-col justify-between relative">
                {/* Texture de pliure */}
                <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-black/[0.04] to-transparent pointer-events-none hidden lg:block" />

                <div>
                  {/* En-tête page droite */}
                  <div className="flex items-center justify-between pb-4 border-b border-black/10">
                    <span className="font-mono text-xs text-ink-muted">PRESTATION CLIENT VALIDÉE</span>
                    <span className="font-mono text-xs font-semibold text-ink">KoniG.dev — Freelance</span>
                  </div>

                  {/* Titre & Description */}
                  <div className="mt-6">
                    <h3 className="font-sans font-black text-2xl sm:text-3xl text-ink leading-tight">
                      {svc.title}
                    </h3>
                    <p className="mt-4 font-sans text-sm sm:text-base text-ink-muted leading-relaxed">
                      {svc.description}
                    </p>
                  </div>

                  {/* Livrable */}
                  <div className="mt-6 p-5 rounded-2xl bg-surface-card border border-black/5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      <span className="font-mono text-xs uppercase font-bold text-ink tracking-wider">
                        Ce que vous obtenez concrètement
                      </span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-ink-muted font-medium leading-relaxed">
                      {svc.deliverable}
                    </p>
                  </div>

                  {/* Cas d'usage */}
                  <div className="mt-6">
                    <span className="font-mono text-xs uppercase tracking-wider text-ink-light font-bold block mb-3">
                      Exemples d&apos;applications réelles
                    </span>
                    <ul className="space-y-2 font-sans text-xs text-ink-muted">
                      {svc.useCases.map((uc, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-ink shrink-0 mt-1.5" />
                          <span>{uc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack */}
                  <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-mono">
                    <span className="text-ink-light">Stack technique :</span>
                    <span className="font-bold text-ink">{svc.stack}</span>
                  </div>
                </div>

                {/* Pied page droite */}
                <div className="mt-8 pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
                  <a
                    href="#contact"
                    className="btn-dark text-xs sm:text-sm"
                  >
                    <span>Commander ce service</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
                  </a>
                  <div className="font-mono text-xs text-ink-light">PAGE {currentPage * 2 + 2}</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Contrôles de navigation ─────────────────────────── */}
          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={isFlipping}
              aria-label="Page précédente"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-surface border border-black/10 hover:border-black/30 text-ink font-medium text-xs sm:text-sm shadow-sm transition-all active:scale-95 cursor-pointer disabled:opacity-50"
            >
              <span className="font-bold">←</span>
              <span>Page précédente</span>
            </button>

            {/* Points de pagination */}
            <div className="hidden sm:flex items-center gap-2" role="tablist">
              {servicesList.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i, i > currentPage ? "next" : "prev")}
                  role="tab"
                  aria-selected={i === currentPage}
                  aria-label={`Chapitre ${i + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    i === currentPage
                      ? "w-8 bg-ink"
                      : "w-2 bg-black/20 hover:bg-black/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={isFlipping}
              aria-label="Page suivante"
              className="btn-dark text-xs sm:text-sm"
            >
              <span>Page suivante</span>
              <span className="font-bold">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
