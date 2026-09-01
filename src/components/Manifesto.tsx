"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { DiamondMark } from "@/components/DiamondMark";
import { GlowLayer } from "@/components/GlowLayer";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import { GlassFrame } from "@/components/ui/glass-frame";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { VideoLightbox } from "@/components/ui/video-lightbox";

// Official manifesto copy — Manual de Marca 7.0, one short line per
// sentence (matches how the manual itself sets it, each line on its own
// row rather than one dense paragraph). Keywords are bold instead of the
// manual's red highlight: red on this card's graphite background measures
// ~1.9:1 contrast (the exact "vermelho sobre grafite" combination the
// brand documents rule out), so emphasis is carried by weight, not color.
// Line breaks below are deliberate, not the browser's — left to wrap on
// its own, this text produced ragged orphans ("sorte." alone on a line,
// "movimento." alone on another). Each <br> is hidden below md so mobile's
// narrower, smaller-type column still wraps naturally instead of forcing
// the same breakpoints into a cramped space.
const BREAK = <br className="hidden md:block" />;

const MANIFESTO_LINES: ReactNode[] = [
  <>
    A tecnologia <strong className="font-bold">sustenta</strong> operações.
  </>,
  <>
    A engenharia <strong className="font-bold">garante</strong> continuidade.
  </>,
  <>
    Na SIAC, disponibilidade
    {BREAK} <strong className="font-bold">não</strong> depende de{" "}
    <strong className="font-bold">sorte</strong>.
  </>,
  <>
    É <strong className="font-bold">resultado de planejamento</strong>,{BREAK}{" "}
    <strong className="font-bold">inteligência</strong> e{" "}
    <strong className="font-bold">responsabilidade</strong>.
  </>,
  <>
    Projetamos ambientes preparados para{" "}
    <strong className="font-bold">evoluir</strong>,{BREAK}{" "}
    <strong className="font-bold">proteger dados</strong> e manter{BREAK} empresas
    em <strong className="font-bold">movimento</strong>.
  </>,
];

export function Manifesto() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section
      id="manifesto"
      className="institutional-halftone relative scroll-mt-28 overflow-hidden py-lg"
    >
      {/* Watermark diamond centered behind the card — the card is opaque,
          so it only ever shows faintly at its edges, never behind the
          text. This is the only use of the outlined diamond outside the
          Ciclo SIAC nodes (it was also in the Hero, removed from there). */}
      <DiamondMark
        position={{ top: "50%", left: "50%" }}
        center
        size={520}
        opacity={0.03}
      />
      <GlowLayer position="center" />
      <div className="relative mx-auto max-w-[1200px] px-sm md:px-lg">
        <div className="relative overflow-hidden rounded-card-lg bg-brand-graphite p-lg shadow-level-3 dark:border dark:border-white/20 md:p-2xl">
          {/* Two columns echo the Hero's own text/video split — the same
              rhythm reused here so the manifesto reads as part of the same
              system, not a bolted-on block. */}
          <div className="grid gap-xl md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-2xl">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand-ice/40">
                MANIFESTO SIAC
              </p>
              <div className="mt-sm h-1 w-12 rounded-pill bg-brand-primary" />

              <div className="mt-lg flex flex-col gap-3 md:mt-xl md:gap-4">
                {MANIFESTO_LINES.map((line, i) => (
                  <p
                    key={i}
                    className="max-w-xl text-lg leading-snug text-brand-ice md:text-2xl"
                  >
                    {line}
                  </p>
                ))}
                <p className="mt-xs max-w-xl text-xl font-bold leading-snug text-brand-ice md:text-3xl">
                  Porque negócios não podem parar.
                  <br />E nós também não.
                </p>
              </div>
            </div>

            {/* Video column — same liquid-glass frame as the Hero's video,
                so the two institutional video moments read as one system. */}
            <GlassFrame>
              <div className="group relative aspect-video md:aspect-[4/5]">
                {/* TEMP placeholder — swap for the real manifesto video once SIAC delivers it */}
                <PlaceholderImage
                  src="/images/placeholders/hero-manifesto-datacenter.jpg"
                  alt=""
                />
                <CornerBrackets variant="light" />
                <button
                  type="button"
                  onClick={() => setVideoOpen(true)}
                  aria-label="Reproduzir vídeo do manifesto"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-pill border border-white/60 bg-white/10 backdrop-blur-glass transition-transform ease-brand hover:scale-110 md:h-20 md:w-20">
                    <svg
                      viewBox="0 0 24 24"
                      fill="white"
                      className="ml-1 h-6 w-6 md:h-7 md:w-7"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              </div>
            </GlassFrame>
          </div>
        </div>
      </div>

      <VideoLightbox
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        image="/images/placeholders/hero-manifesto-datacenter.jpg"
        title="Vídeo do manifesto"
      />
    </section>
  );
}
