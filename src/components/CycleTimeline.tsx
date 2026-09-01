"use client";

import { MethodCycle } from "@/components/ui/method-cycle";

export function CycleTimeline() {
  return (
    <section
      id="ciclo-siac"
      className="relative scroll-mt-28 overflow-hidden py-lg"
    >
      <div className="relative mx-auto max-w-3xl px-sm pb-lg md:px-lg text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-brand-graphite/50 dark:text-brand-ice/50">
          CICLO SIAC
        </p>
        <h2 className="mt-sm text-2xl font-bold text-brand-graphite dark:text-brand-ice md:text-4xl">
          Ciclo SIAC: o método por trás de cada operação estável.
        </h2>
        <p className="mt-sm text-base text-brand-graphite/70 dark:text-brand-ice/70 md:text-lg">
          Continuidade não acontece por acaso — é resultado de um processo
          estruturado, repetido em cada cliente.
        </p>
      </div>
      <MethodCycle />
    </section>
  );
}
