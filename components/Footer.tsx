import React from "react";
import Image from "next/image";
import Link from "next/link";

/* ── Icônes SVG officielles ───────────────────────────────────────── */
const IconGitHub = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const IconLinkedIn = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconTikTok = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
  </svg>
);

const IconEmail = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    handle: "konigdev2286",
    href: "https://github.com/konigdev2286",
    icon: IconGitHub,
    hoverClass: "hover:bg-[#24292e] hover:text-white hover:border-[#24292e]/30",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "Esdras Thychel",
    href: "https://www.linkedin.com/in/esdras-thychel-mbouloukoue-07168a400",
    icon: IconLinkedIn,
    hoverClass: "hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]/30",
  },
  {
    id: "tiktok",
    label: "TikTok",
    handle: "@konig.dev22",
    href: "https://www.tiktok.com/@konig.dev22",
    icon: IconTikTok,
    hoverClass: "hover:bg-[#010101] hover:text-white hover:border-black/20",
  },
  {
    id: "email",
    label: "Email",
    handle: "konigdev2286@gmail.com",
    href: "mailto:konigdev2286@gmail.com",
    icon: IconEmail,
    hoverClass: "hover:bg-ink hover:text-white hover:border-ink/30",
    isEmail: true,
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-black/5 py-16 sm:py-20 relative overflow-hidden">
      {/* Halo subtil en bas à gauche */}
      <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-black/5">

          {/* ── Identité ──────────────────────────────────────────── */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <Link
              href="/"
              className="flex items-center gap-3 w-fit group"
              aria-label="Accueil KoniG.dev"
            >
              <div className="w-9 h-9 relative flex items-center justify-center rounded-xl bg-ink p-1.5 shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Image
                  src="/logo.png"
                  alt="Logo KoniG.dev"
                  width={24}
                  height={24}
                  className="object-contain invert"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-sans font-black text-ink text-xl tracking-tight">
                  KoniG<span className="text-ink-light font-normal">.dev</span>
                </span>
                <span className="font-mono text-[9px] text-ink-light uppercase tracking-widest mt-0.5">
                  Full-Stack & IA Freelance
                </span>
              </div>
            </Link>

            <p className="font-sans text-ink-muted text-sm max-w-sm leading-relaxed">
              Esdras Thychel MBOULOUKOUE — Développeur full-stack &amp; IA freelance.
              Architectures pérennes et solutions concrètes pour l&apos;Afrique francophone
              et l&apos;international.
            </p>

            <div className="inline-flex self-start px-3 py-1.5 rounded-full bg-surface-muted text-ink-muted text-xs font-mono font-medium border border-black/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse mr-2 mt-0.5 shrink-0" />
              Brazzaville, Congo (UTC+1)
            </div>

            {/* ── Icônes réseaux sociaux ──────────────────────── */}
            <div className="flex items-center gap-2.5 flex-wrap">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target={social.isEmail ? undefined : "_blank"}
                    rel={social.isEmail ? undefined : "noopener noreferrer"}
                    aria-label={`${social.label} de KoniG.dev`}
                    title={social.handle}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center bg-surface-muted border border-black/8 text-ink-muted transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${social.hoverClass}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ── Navigation ──────────────────────────────────────── */}
          <div className="md:col-span-3 flex flex-col gap-2.5 text-xs font-sans">
            <span className="font-mono text-ink-light uppercase font-bold text-[11px] mb-2 block">
              Navigation
            </span>
            {[
              { href: "#hero", label: "Accueil" },
              { href: "#a-propos", label: "Bio" },
              { href: "#services", label: "Expertise" },
              { href: "#projets", label: "Réalisations" },
              { href: "#methode", label: "Méthode" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-ink-muted hover:text-ink hover:translate-x-0.5 transition-all duration-150 py-0.5 w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* ── Canaux directs ──────────────────────────────────── */}
          <div className="md:col-span-4 flex flex-col gap-4 text-xs font-sans">
            <span className="font-mono text-ink-light uppercase font-bold text-[11px] mb-2 block">
              Canaux directs
            </span>

            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.href}
                  target={social.isEmail ? undefined : "_blank"}
                  rel={social.isEmail ? undefined : "noopener noreferrer"}
                  className={`group flex items-center gap-3 p-3 rounded-xl bg-surface-muted border border-black/5 text-ink-muted transition-all duration-200 hover:-translate-y-0.5 ${social.hoverClass}`}
                >
                  <span className="w-7 h-7 rounded-lg bg-surface flex items-center justify-center shrink-0 border border-black/5 group-hover:bg-white/20 transition-colors">
                    <Icon className="w-3.5 h-3.5" />
                  </span>
                  <div className="min-w-0">
                    <span className="font-bold text-[11px] uppercase tracking-wider block leading-none mb-0.5">
                      {social.label}
                    </span>
                    <span className="font-mono text-[10px] opacity-70 truncate block">
                      {social.handle}
                    </span>
                  </div>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold">
                    ↗
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* ── Ligne inférieure ──────────────────────────────────── */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-ink-light">
          <p>© 2026 KoniG.dev — Tous droits réservés.</p>
          <p className="flex items-center gap-1.5">
            <span>Conçu &amp; développé à Brazzaville</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
          </p>
        </div>
      </div>
    </footer>
  );
}
