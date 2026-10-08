"use client";

import React, { useState } from "react";

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
    "w-full px-5 py-3.5 rounded-xl bg-surface-muted border border-black/10 font-sans text-sm text-ink placeholder:text-ink-light focus:outline-none focus:border-ink transition-colors";

  return (
    <section id="contact" className="w-full py-20 sm:py-28">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10">
        {/* Entête */}
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

        {/* Corps */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Coordonnées */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="bg-surface rounded-4xl p-8 sm:p-10 border border-black/5 shadow-soft">
              <h3 className="font-sans font-bold text-2xl text-ink">
                Accès direct &amp; Réactivité
              </h3>
              <p className="mt-3 font-sans text-sm text-ink-muted leading-relaxed">
                Pas d&apos;intermédiaire commercial. Vous dialoguez directement avec moi,
                de la conception à la mise en production.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    label: "Email direct",
                    href: "mailto:konigdev2286@gmail.com",
                    text: "konigdev2286@gmail.com",
                  },
                  {
                    label: "WhatsApp direct",
                    href: "https://wa.me/242061062936",
                    text: "+242 06 106 29 36",
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
                    className="p-5 rounded-2xl bg-surface-muted border border-black/5"
                  >
                    <span className="font-mono text-[11px] text-ink-light uppercase font-bold block mb-1">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="font-bold text-sm text-ink hover:underline block"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <strong className="text-sm text-ink block font-medium">
                        {item.text}
                      </strong>
                    )}
                  </div>
                ))}
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

          {/* Formulaire */}
          <div className="lg:col-span-7 bg-surface rounded-4xl p-8 sm:p-10 border border-black/5 shadow-soft">
            <h3 className="font-sans font-bold text-2xl text-ink">
              Envoyer un message
            </h3>

            {submitted && (
              <div className="mt-4 p-4 rounded-2xl bg-accent/10 border border-accent/30 text-xs font-medium text-ink">
                ✓ Votre client de messagerie s&apos;ouvre avec les informations pré-remplies.
                Vous pouvez également m&apos;écrire directement.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block font-sans text-xs uppercase font-bold text-ink-muted mb-2"
                >
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
                <label
                  htmlFor="email"
                  className="block font-sans text-xs uppercase font-bold text-ink-muted mb-2"
                >
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
                <label
                  htmlFor="service"
                  className="block font-sans text-xs uppercase font-bold text-ink-muted mb-2"
                >
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
                <label
                  htmlFor="message"
                  className="block font-sans text-xs uppercase font-bold text-ink-muted mb-2"
                >
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

              <button type="submit" className="w-full btn-dark py-4 text-sm">
                <span>Transmettre ma demande</span>
                <span>↗</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
