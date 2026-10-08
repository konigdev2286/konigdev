import React from "react";

export default function PortfolioProject() {
  return (
    <section id="projets" className="w-full py-20 sm:py-28">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10">
        {/* Entête */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/10">
          <div>
            <span className="section-label">[ 03 // PROJETS ]</span>
            <h2 className="section-title">
              Réalisations concrètes <br />
              <span className="font-sans font-normal text-ink-light">
                Transparence totale.
              </span>
            </h2>
          </div>
          <p className="font-sans text-ink-muted text-sm sm:text-base max-w-md">
            Aucun faux projet ni métrique inventée. Ce site représente la démonstration
            technique en direct de mon savoir-faire.
          </p>
        </div>

        {/* Grille */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Carte principale */}
          <div className="lg:col-span-7 bg-surface rounded-4xl p-8 sm:p-12 border border-black/5 shadow-soft flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-black/5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-black/5 text-ink">
                    EN LIGNE • 2026
                  </span>
                </div>
                <span className="font-mono text-xs text-ink-light">KoniG.dev</span>
              </div>

              <h3 className="mt-6 font-sans font-extrabold text-2xl sm:text-3xl text-ink">
                Architecture personnelle &amp; vitrine freelance
              </h3>

              <p className="mt-4 font-sans text-base text-ink-muted leading-relaxed">
                Développé de zéro selon un design system moderne et rigoureux. Next.js 14
                App Router, typographie soignée, performances optimales et défilement infini
                fluide. Zéro artifice superflu.
              </p>

              {/* Spécifications */}
              <div className="mt-8 p-6 rounded-2xl bg-surface-muted border border-black/5">
                <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider block mb-3">
                  Spécifications &amp; Choix d&apos;architecture
                </span>
                <ul className="space-y-2.5 font-sans text-xs text-ink-muted">
                  {[
                    "Next.js 14 (App Router) + TypeScript",
                    "Tailwind CSS avec palette épurée monochrome & vert néon",
                    "10 icônes vectorielles officielles simple-icons en ticker continu",
                    "Responsive mobile dès 375px et score de chargement instantané",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${i === 3 ? "bg-accent" : "bg-ink"}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-10 pt-6 border-t border-black/5 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-dark">
                Commander un site similaire <span>↗</span>
              </a>
              <a
                href="https://github.com/konigdev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                Code source sur GitHub <span>↗</span>
              </a>
            </div>
          </div>

          {/* Emplacement futur projet */}
          <div className="lg:col-span-5 bg-surface/50 rounded-4xl p-8 sm:p-12 border-2 border-dashed border-black/15 flex flex-col justify-between">
            <div>
              <div className="pb-6 border-b border-dashed border-black/15 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-black/5 text-ink">
                  RÉSERVATION
                </span>
                <span className="font-mono text-xs text-ink-light">Disponible</span>
              </div>

              <h3 className="mt-6 font-sans font-bold text-2xl text-ink">
                Votre projet ici.
              </h3>

              <p className="mt-3 font-sans text-sm text-ink-muted leading-relaxed">
                Vous avez un projet de site web, d&apos;application mobile avec Flutter ou
                d&apos;automatisation avec n8n et Mistral AI ? Confiez-le-moi pour devenir
                la première référence client mise en lumière.
              </p>

              <div className="mt-8 p-6 rounded-2xl bg-surface-muted border border-black/5 font-sans text-xs space-y-3 text-ink-muted">
                <p><strong className="text-ink">Délai moyen :</strong> Démarrage sous 7 jours ouvrés</p>
                <p><strong className="text-ink">Accompagnement :</strong> Échange direct avec Esdras</p>
                <p><strong className="text-ink">Propriété :</strong> 100% de cession de code et données</p>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-dashed border-black/15">
              <a href="#contact" className="w-full btn-dark justify-center">
                Proposer un projet <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
