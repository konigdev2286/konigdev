/**
 * Fichier centralisé d'imports simple-icons
 * Évite les conflits de chunking webpack entre composants client
 */
import {
  siNextdotjs,
  siTypescript,
  siTailwindcss,
  siFlutter,
  siSupabase,
  siN8n,
  siMistralai,
  siPostgresql,
  siGit,
  siGithub,
} from "simple-icons";

export type TechItem = {
  name: string;
  icon: { path: string; title: string };
  category?: string;
};

export const technologies: TechItem[] = [
  { name: "Next.js",      icon: siNextdotjs,   category: "Frontend & Full-Stack"       },
  { name: "TypeScript",   icon: siTypescript,  category: "Langage typé"                },
  { name: "Tailwind CSS", icon: siTailwindcss, category: "Design System & CSS"         },
  { name: "Flutter",      icon: siFlutter,     category: "Mobile iOS & Android"        },
  { name: "Supabase",     icon: siSupabase,    category: "Backend & Base SQL"          },
  { name: "n8n",          icon: siN8n,         category: "Workflows & Automatisations" },
  { name: "Mistral AI",   icon: siMistralai,   category: "Modèles & LLM IA"           },
  { name: "PostgreSQL",   icon: siPostgresql,  category: "Base relationnelle"          },
  { name: "Git",          icon: siGit,         category: "Gestion de versions"         },
  { name: "GitHub",       icon: siGithub,      category: "Collaboration & CI/CD"       },
];
