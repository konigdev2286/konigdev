"use client";

import React, { useState } from "react";

/* ── Icônes SVG officielles ───────────────────────────────────────── */
const IconGitHub = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const IconLinkedIn = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconTikTok = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
  </svg>
);

const IconEmail = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/konigdev2286",
    icon: IconGitHub,
    color: "hover:bg-[#24292e] hover:text-white hover:border-[#24292e]",
    description: "Voir mes repos",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/esdras-thychel-mbouloukoue-07168a400",
    icon: IconLinkedIn,
    color: "hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]",
    description: "Mon profil pro",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@konig.dev22",
    icon: IconTikTok,
    color: "hover:bg-[#010101] hover:text-white hover:border-[#010101]",
    description: "@konig.dev22",
  },
  {
    id: "email",
    label: "Email direct",
    href: "mailto:konigdev2286@gmail.com",
    icon: IconEmail,
    color: "hover:bg-ink hover:text-white hover:border-ink",
    description: "konigdev2286@gmail.com",
    isEmail: true,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Automatisations & IA",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Nouveau projet via KoniG.dev : ${formData.service}`
    );
    const body = encodeURIComponent(
      `Nom : ${formData.name}\nEmail : ${formData.email}\nService souhaité : ${formData.service}\n\nMessage :\n${formData.message}`
    );
    window.location.href = `mailto:konigdev2286@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const fieldClass =
    "w-full px-5 py-3.5 rounded-xl bg-surface-muted border border-black/10 font-sans text-sm text-ink placeholder:text-ink-light focus:outline-none focus:border-ink focus:ring-2 focus:ring-ink/5 transition-all duration-200";

  return (
    <section id="contact" className="w-full py-20 sm:py-28 relative overflow-hidden">
      {/* Halo d'ambiance */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/4 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* ── Entête ──────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/10">
          <div>
            <span className="section-label">[ 05 // CONTACT ]</span>
            <h2 className="section-title">
              Démarrons un projet <br />
              <span className="font-sans font-normal text-ink-light">
                Parlons de votre vision.
              </span>
            </h2>
          </div>
          <p className="font-sans text-ink-muted text-sm sm:text-base max-w-md">
            Une question ou une mission à me confier ? Décrivez votre besoin, je vous
            réponds sous 24h ouvrées avec une orientation claire.
          </p>
        </div>

        {/* ── Corps ───────────────────────────────────────────────── */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* ── Colonne gauche ──────────────────────────────────── */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Bloc infos */}
            <div className="bg-surface rounded-4xl p-8 sm:p-10 border border-black/5 shadow-soft">
              <h3 className="font-sans font-bold text-2xl text-ink">
                Accès direct &amp; Réactivité
              </h3>
              <p className="mt-3 font-sans text-sm text-ink-muted leading-relaxed">
                Pas d&apos;intermédiaire commercial. Vous dialoguez directement avec moi,
                de la conception à la mise en production.
              </p>

              {/* Infos de contact texte */}
              <div className="mt-8 space-y-3">
                {[
                  {
                    label: "Email direct",
                    href: "mailto:konigdev2286@gmail.com",
                    text: "konigdev2286@gmail.com",
                  },
                  {
                    label: "WhatsApp direct",
                    href: "https://wa.me/242053315733",
                    text: "+242 05 331 57 33",
                    external: true,
                  },
                  {
                    label: "Localisation",
                    href: null,
                    text: "Brazzaville, République du Congo (UTC+1)",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-4 rounded-2xl bg-surface-muted border border-black/5 flex items-start gap-3"
                  >
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="font-mono text-[11px] text-ink-light uppercase font-bold mb-0.5">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="font-bold text-sm text-ink hover:text-accent transition-colors truncate"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <strong className="text-sm text-ink font-medium">{item.text}</strong>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Réseaux sociaux ─────────────────────────────── */}
            <div className="bg-surface rounded-4xl p-8 border border-black/5 shadow-soft">
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink-light font-bold block mb-5">
                Retrouvez-moi sur
              </span>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      target={social.isEmail ? undefined : "_blank"}
                      rel={social.isEmail ? undefined : "noopener noreferrer"}
                      aria-label={social.label}
                      className={`group flex items-center gap-3 p-3.5 rounded-2xl bg-surface-muted border border-black/8 text-ink-muted transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${social.color}`}
                    >
                      <Icon className="w-4 h-4 shrink-0 transition-colors" />
                      <div className="flex flex-col min-w-0">
                        <span className="font-sans font-bold text-xs leading-none">
                          {social.label}
                        </span>
                        <span className="font-mono text-[10px] mt-0.5 truncate opacity-70">
                          {social.description}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Badge engagement */}
            <div className="bg-ink text-white rounded-3xl p-6 text-xs font-sans shadow-md">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-white/70">
                  Engagement
                </span>
              </div>
              <p className="font-medium text-white/90">
                Devis transparent et gratuit sous 48h après premier échange technique.
              </p>
            </div>
          </div>

          {/* ── Formulaire ──────────────────────────────────────── */}
          <div className="lg:col-span-7 bg-surface rounded-4xl p-8 sm:p-10 border border-black/5 shadow-soft">
            <h3 className="font-sans font-bold text-2xl text-ink">
              Envoyer un message
            </h3>

            {submitted && (
              <div className="mt-4 p-4 rounded-2xl bg-accent/10 border border-accent/30 text-xs font-medium text-ink flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                Votre client de messagerie s&apos;ouvre avec les informations pré-remplies.
                Vous pouvez également m&apos;écrire directement.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="block font-sans text-xs uppercase font-bold text-ink-muted mb-2">
                  Votre nom et entreprise *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex : Sarah N. / Société Alpha"
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-sans text-xs uppercase font-bold text-ink-muted mb-2">
                  Votre adresse email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contact@exemple.com"
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="service" className="block font-sans text-xs uppercase font-bold text-ink-muted mb-2">
                  Service requis
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className={fieldClass}
                >
                  <option value="Automatisations & IA">Automatisations &amp; Agents IA</option>
                  <option value="Sites Web">Site Web moderne (Next.js)</option>
                  <option value="Applications Web & Mobiles">Application Web / Mobile (Flutter)</option>
                  <option value="Invitations Web">Invitation Web événementielle (RSVP)</option>
                  <option value="Infographie">Infographie &amp; Visuels numériques</option>
                  <option value="Web Design UI/UX">Web Design &amp; Prototypage UI/UX</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-sans text-xs uppercase font-bold text-ink-muted mb-2">
                  Votre message / périmètre du besoin *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Expliquez brièvement votre objectif, votre calendrier et vos attentes..."
                  className={`${fieldClass} resize-y`}
                />
              </div>

              <button type="submit" className="w-full btn-dark py-4 text-sm group">
                <span>Transmettre ma demande</span>
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
