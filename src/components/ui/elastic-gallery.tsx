"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Check, X } from "lucide-react";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

interface ElasticItemProps {
  id: string;
  title: string;
  description: string;
  // TEMP — approval placeholder image, swapped for real SIAC content later
  image: string;
  includes: string[];
  outcome: string;
}

const ITEMS: ElasticItemProps[] = [
  {
    id: "01",
    title: "ERP Crítico",
    description:
      "Quando o ERP para, a operação para. Cuidamos de banco de dados, infraestrutura e monitoramento para que ele nunca seja o motivo da parada.",
    image: "/images/placeholders/erp-dashboard.jpg",
    includes: [
      "Administração de banco de dados (DBA) e SysOps",
      "Infraestrutura e cloud dedicadas ao ERP",
      "Monitoramento contínuo do ambiente",
      "Continuidade operacional planejada",
    ],
    outcome:
      "Estabilidade e performance — o ERP deixa de ser o motivo da parada.",
  },
  {
    id: "02",
    title: "Resiliência Cibernética",
    description:
      "Reduzir exposição e tempo de recuperação é o que sustenta a confiança no sistema. Cuidamos do monitoramento, backup, proteção e melhoria contínua dos controles.",
    image: "/images/placeholders/cyber-resilience-server.jpg",
    includes: [
      "Monitoramento contínuo de ameaças",
      "Backup e recuperação de desastres (DR)",
      "Proteção e hardening de controles",
      "Melhoria contínua da postura de segurança",
    ],
    outcome:
      "Menos exposição e menos tempo de recuperação quando um incidente acontece.",
  },
  {
    id: "03",
    title: "Operação de TI",
    description:
      "Para quem precisa de alguém cuidando continuamente, não apenas quando algo quebra. Suporte, NOC e governança com responsabilidade contínua sobre o ambiente.",
    image: "/images/placeholders/it-operations-noc.jpg",
    includes: [
      "Suporte e NOC com responsabilidade contínua",
      "Um único responsável pelo ambiente (owner)",
      "Governança e backlog tratado de forma proativa",
      "Atuação preventiva, não só corretiva",
    ],
    outcome:
      "Previsibilidade e foco — alguém cuidando do ambiente todos os dias, não só quando quebra.",
  },
];

function ElasticGallery() {
  const [activeId, setActiveId] = useState<string | null>("01");
  const [detailItem, setDetailItem] = useState<ElasticItemProps | null>(null);

  return (
    <div className="w-full py-lg">
      {/* Container: Fixed height on mobile/desktop to ensure animation stability */}
      <div className="mx-auto flex h-[375px] w-full max-w-[1200px] flex-col gap-2 px-sm md:h-[450px] md:flex-row md:gap-4 md:px-lg">
        {ITEMS.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setActiveId(item.id)}
            onClick={() => setActiveId(item.id)} // Touch support
            className={cn(
              "group relative cursor-pointer overflow-hidden rounded-card-lg border border-white/10 bg-black/40 shadow-elevated backdrop-blur-glass dark:border-white/[0.08] dark:bg-white/[0.06]",
              // Layout & Flex Transition
              "transition-[flex,filter] duration-700 ease-brand",
              // Flex Logic:
              // If active, take up 4 parts of space. If inactive, take 1 part.
              // This creates the "accordion" effect relative to siblings.
              activeId === item.id ? "flex-[4]" : "flex-[1]",
              // Brightness logic for focus
              activeId === item.id
                ? "brightness-100"
                : "brightness-50 hover:brightness-75"
            )}
          >
            <PlaceholderImage src={item.image} alt="" />

            <CornerBrackets variant="light" />

            {/* Gradient overlay for text readability — a faint base scrim
                stays on even when inactive (photos alone don't guarantee
                contrast for the vertical label), strengthening on focus. */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-500",
                activeId === item.id ? "opacity-100" : "opacity-60"
              )}
            />

            {/* --- Content Container --- */}
            <div className="absolute bottom-0 left-0 right-0 flex h-full flex-col justify-end p-4 md:p-8">
              {/* Active Content: Title & Description */}
              <div
                className={cn(
                  "flex flex-col items-start gap-2 transition-all duration-500 ease-brand",
                  // Hide/Show based on active state with translation for smooth entry
                  activeId === item.id
                    ? "translate-y-0 opacity-100 delay-200"
                    : "translate-y-12 opacity-0"
                )}
              >
                {/* Title */}
                <h3 className="text-2xl font-black uppercase leading-none text-white md:text-5xl">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 max-w-md text-sm text-white/80 md:mt-4 md:text-base">
                  {item.description}
                </p>

                {/* "More info" affordance — the whole card only teases the
                    service; this is the explicit, visible cue that there's
                    more to see, and the one reliable way to open it (a card
                    click alone just expands the accordion on mobile). */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDetailItem(item);
                  }}
                  className="group/cta mt-2 inline-flex items-center gap-xs rounded-pill border border-white/30 bg-white/10 px-md py-xs text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-glass transition-all ease-brand hover:border-white/60 hover:bg-white/20 md:mt-4"
                >
                  Saiba mais
                  <ArrowRight
                    size={14}
                    className="transition-transform ease-brand group-hover/cta:translate-x-0.5"
                  />
                </button>
              </div>

              {/* Inactive Content: Vertical Text (Desktop) / Short Label (Mobile) */}
              <div
                className={cn(
                  "absolute transition-all duration-500 ease-brand",
                  // Position logic
                  "bottom-4 left-1/2 -translate-x-1/2 md:bottom-8",
                  // Hide when active
                  activeId === item.id
                    ? "opacity-0 scale-50"
                    : "opacity-100 delay-500"
                )}
              >
                {/* Desktop: Vertical Text */}
                <span className="hidden whitespace-nowrap text-xl font-bold uppercase tracking-widest text-white [writing-mode:vertical-rl] md:block">
                  {item.title}
                </span>

                {/* Mobile: Horizontal ID/Label */}
                <span className="block text-xs font-bold text-white md:hidden">
                  {item.id}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {detailItem &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: "rgba(20,20,20,0.55)", backdropFilter: "blur(8px)" }}
            onClick={() => setDetailItem(null)}
          >
            <div
              className="relative w-full max-w-2xl overflow-hidden rounded-card-lg bg-brand-graphite shadow-level-3"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setDetailItem(null)}
                aria-label="Fechar"
                className="absolute right-sm top-sm z-10 flex h-9 w-9 items-center justify-center rounded-pill bg-black/50 text-white transition-colors ease-brand hover:bg-black/70"
              >
                <X size={18} />
              </button>

              <div className="relative aspect-[21/9] w-full">
                <PlaceholderImage src={detailItem.image} alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-graphite via-brand-graphite/10 to-transparent" />
                <h3 className="absolute bottom-4 left-lg text-2xl font-black uppercase leading-none text-white md:bottom-6 md:text-4xl">
                  {detailItem.title}
                </h3>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-lg md:p-2xl">
                <p className="text-base leading-relaxed text-brand-ice/80 md:text-lg">
                  {detailItem.description}
                </p>

                <p className="mt-lg text-xs font-semibold tracking-[0.2em] text-brand-ice/40">
                  O QUE INCLUI
                </p>
                <ul className="mt-sm flex flex-col gap-sm">
                  {detailItem.includes.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-xs text-sm text-brand-ice/90 md:text-base"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-brand-primary"
                      />
                      {line}
                    </li>
                  ))}
                </ul>

                <div className="mt-lg rounded-card border border-white/10 bg-white/5 p-md">
                  <p className="text-xs font-semibold tracking-[0.2em] text-brand-primary">
                    RESULTADO
                  </p>
                  <p className="mt-xs text-sm text-brand-ice md:text-base">
                    {detailItem.outcome}
                  </p>
                </div>

                <a
                  href="#contato"
                  onClick={() => setDetailItem(null)}
                  className="mt-lg inline-flex items-center gap-xs rounded-button bg-brand-primary px-lg py-sm text-sm font-semibold text-white shadow-level-1 transition-colors ease-brand hover:bg-brand-primary-dark"
                >
                  Falar sobre {detailItem.title}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

export { ElasticGallery };
