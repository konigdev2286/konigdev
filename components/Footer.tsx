import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-black/5 py-16 sm:py-20">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-black/5">
          {/* Identité */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-3 w-fit"
              aria-label="Accueil KoniG.dev"
            >
              <div className="w-8 h-8 relative flex items-center justify-center rounded-lg bg-surface-muted p-1 border border-black/5 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Logo KoniG.dev"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="font-sans font-bold text-ink text-xl tracking-tight">
                KoniG<span className="text-ink-light">.dev</span>
              </span>
            </Link>

            <p className="font-sans text-ink-muted text-sm max-w-md leading-relaxed">
              Esdras Thychel MBOULOUKOUE — Développeur full-stack &amp; IA freelance.
              Architectures pérennes et solutions concrètes pour l&apos;Afrique francophone
              et l&apos;international.
            </p>

            <div className="inline-flex self-start px-3 py-1 rounded-full bg-surface-muted text-ink-muted text-xs font-mono font-medium">
              Brazzaville, Congo (UTC+1)
            </div>
          </div>

          {/* Navigation */}
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
                className="text-ink-muted hover:text-ink transition-colors py-0.5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Canaux */}
          <div className="md:col-span-3 flex flex-col gap-2.5 text-xs font-sans">
            <span className="font-mono text-ink-light uppercase font-bold text-[11px] mb-2 block">
              Canaux directs
            </span>
            <a
              href="mailto:konigdev2286@gmail.com"
              className="text-ink font-medium hover:underline transition-colors py-0.5"
            >
              konigdev2286@gmail.com
            </a>
            <a
              href="https://wa.me/242061062936"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink font-medium hover:underline transition-colors py-0.5"
            >
              WhatsApp : +242 06 106 29 36
            </a>
            <a
              href="https://github.com/konigdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink font-medium hover:underline transition-colors py-0.5"
            >
              GitHub / konigdev
            </a>
          </div>
        </div>

        {/* Ligne inférieure */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-ink-light">
          <p>© 2026 KoniG.dev — Tous droits réservés.</p>
          <p>Conçu et développé à Brazzaville.</p>
        </div>
      </div>
    </footer>
  );
}
