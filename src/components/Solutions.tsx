import { ElasticGallery } from "@/components/ui/elastic-gallery";

export function Solutions() {
  return (
    <div className="relative overflow-hidden">
      <section id="solucoes" className="relative z-10 scroll-mt-28">
        <div className="mx-auto max-w-[1200px] px-sm pt-lg md:px-lg">
          <p className="text-center text-xs font-semibold tracking-[0.2em] text-brand-graphite/50 dark:text-brand-ice/50">
            NOSSAS SOLUÇÕES
          </p>
        </div>
        <ElasticGallery />
      </section>
    </div>
  );
}
