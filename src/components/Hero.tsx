"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Dot } from "lucide-react";
import { GlowLayer } from "@/components/GlowLayer";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import { GlassFrame } from "@/components/ui/glass-frame";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { VideoLightbox } from "@/components/ui/video-lightbox";

// Three stats, not four — matching the three pillars below so both rows
// share the same 3-column grid and line up edge to edge instead of a
// loose 4-item row sitting above a 3-column grid.
const STATS = [
  { value: "Único no ES", label: "com Arquiteto Linux certificado Red Hat." },
  { value: "48 entre", label: "as 200 maiores do ES" },
  { value: "5.000+", label: "Ativos protegidos" },
];

const PILLARS = [
  {
    label: "ESPECÍFICA",
    text: "Atuamos só onde a operação não pode falhar: ERP, banco de dados e cloud.",
  },
  {
    label: "RESPONSÁVEL",
    text: "Um único parceiro assume a jornada inteira — não um serviço fragmentado entre fornecedores.",
  },
  {
    label: "COMPROVÁVEL",
    text: "Resultados mensuráveis, não promessas. Veja quem já opera com a SIAC.",
    href: "#casos-de-sucesso",
  },
];

const EASE_BRAND = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 * i, ease: EASE_BRAND },
  }),
};

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section
      id="hero"
      className="institutional-halftone relative scroll-mt-28 overflow-hidden px-sm pb-lg pt-2xl md:px-lg"
    >
      {/* A soft signal behind the primary CTA — the Hero's one decision
          point — not decoration spread across the section. */}
      <GlowLayer position="15% 30%" />
      <div className="relative mx-auto mt-2xl grid max-w-[1200px] items-center gap-2xl md:grid-cols-2">
        {/* Text column */}
        <div>
          <motion.h1
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="text-[40px] font-bold leading-[0.95] tracking-[-0.01em] text-brand-graphite dark:text-brand-ice md:text-[56px]"
          >
            Quanto custa a{" "}
            <span className="text-brand-primary">instabilidade</span> que
            ainda não aconteceu?
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="mt-md max-w-[520px] text-lg text-brand-graphite/70 dark:text-brand-ice/70"
          >
            Falhas de disponibilidade custam tempo, receita e confiança,
            muitas vezes antes de serem percebidas.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mt-lg flex flex-wrap items-center gap-sm"
          >
            <a
              href="#contato"
              className="rounded-button bg-brand-primary px-lg py-sm text-sm font-semibold text-brand-ice shadow-glow-primary transition-transform ease-brand hover:scale-[1.02]"
            >
              Iniciar Projeto
            </a>
            <a
              href="#solucoes"
              className="rounded-button border border-brand-graphite/30 bg-white/40 px-lg py-sm text-sm font-semibold text-brand-graphite backdrop-blur-glass transition-colors ease-brand hover:border-brand-primary hover:text-brand-primary dark:border-brand-ice/20 dark:bg-white/5 dark:text-brand-ice"
            >
              Ver Soluções
            </a>
          </motion.div>
        </div>

        {/* Video column — framed in the same liquid glass as the pillars
            below, and sized to actually hold its own in the column instead
            of floating as a small rectangle in open space. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE_BRAND }}
          className="relative mx-auto w-full max-w-[480px] md:mx-0 md:ml-auto"
        >
          <GlassFrame>
            <div className="group relative aspect-video w-full bg-brand-black">
              {/* TEMP placeholder — swap for the real institutional video once SIAC delivers it */}
              <PlaceholderImage
                src="/images/placeholders/hero-manifesto-datacenter.jpg"
                alt=""
              />
              <CornerBrackets variant="light" />
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                aria-label="Reproduzir vídeo institucional"
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-pill bg-white/15 backdrop-blur-glass transition-transform ease-brand hover:scale-110 md:h-16 md:w-16">
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    className="ml-1 h-5 w-5 md:h-6 md:w-6"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            </div>
          </GlassFrame>
        </motion.div>
      </div>

      <VideoLightbox
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        image="/images/placeholders/hero-manifesto-datacenter.jpg"
        title="Vídeo institucional"
      />

      {/* Stats strip — discreet credibility footnote, not a visual highlight */}
      <motion.div
        initial="hidden"
        animate="show"
        custom={3}
        variants={fadeUp}
        className="mx-auto mt-2xl grid max-w-[1200px] gap-sm md:grid-cols-3 md:gap-md"
      >
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-xs">
            <span className="flex items-center text-xl font-medium text-brand-graphite dark:text-brand-ice">
              <Dot className="h-3.5 w-3.5 text-brand-primary/70" strokeWidth={3} />
              {stat.value}
            </span>
            <span className="text-xs text-brand-graphite/70 dark:text-brand-gray">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Positioning pillars — a direct continuation of the Hero. Each one
          is its own liquid-glass pane (frosted, translucent, soft-bordered)
          so they read as light objects floating over the Hero's halftone
          and glow, rather than a plain divided text row. */}
      <div className="relative z-10 mx-auto mt-2xl grid max-w-[1200px] gap-sm md:grid-cols-3 md:gap-md">
        {PILLARS.map((pillar, i) => {
          const content = (
            <>
              <span className="text-xs font-semibold tracking-[0.15em] text-brand-primary">
                {pillar.label}
              </span>
              <span className="mt-xs block text-sm text-brand-graphite/70 dark:text-brand-ice/70">
                {pillar.text}
                {pillar.href && (
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform ease-brand group-hover:translate-x-0.5"
                  >
                    {" "}
                    →
                  </span>
                )}
              </span>
            </>
          );

          // Liquid glass: saturated blur, a diagonal sheen, a low brand-red
          // glow tucked in the far corner (so the glass reads as tinted by
          // the brand, not a generic frosted card), and an inset top
          // highlight where light would catch a real glass edge.
          const glass =
            "relative flex h-full flex-col overflow-hidden rounded-card-lg p-lg " +
            "border border-white/80 bg-white/40 backdrop-blur-glass backdrop-saturate-150 " +
            "shadow-[0_1px_1px_rgba(40,41,40,0.05),0_16px_40px_rgba(40,41,40,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] " +
            "dark:border-white/[0.18] dark:bg-white/[0.08] " +
            "dark:shadow-[0_1px_1px_rgba(0,0,0,0.3),0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.16)] " +
            "transition-all duration-300 ease-brand";

          const sheen = (
            <>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/80 via-white/10 to-transparent dark:from-white/[0.22] dark:via-white/0 dark:to-transparent"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse 80% 70% at 100% 100%, rgba(159,33,28,0.16), transparent 70%)",
                }}
              />
            </>
          );

          return (
            <motion.div
              key={pillar.label}
              initial="hidden"
              animate="show"
              custom={4 + i}
              variants={fadeUp}
              className="h-full"
            >
              {pillar.href ? (
                <a
                  href={pillar.href}
                  className={`group hover:-translate-y-1 hover:bg-white/55 hover:shadow-[0_1px_1px_rgba(40,41,40,0.05),0_20px_48px_rgba(40,41,40,0.16),inset_0_1px_0_rgba(255,255,255,1)] dark:hover:bg-white/[0.12] dark:hover:shadow-[0_1px_1px_rgba(0,0,0,0.3),0_20px_48px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.2)] ${glass}`}
                >
                  {sheen}
                  <div className="relative flex flex-1 flex-col justify-center">
                    {content}
                  </div>
                </a>
              ) : (
                <div className={glass}>
                  {sheen}
                  <div className="relative flex flex-1 flex-col justify-center">
                    {content}
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
