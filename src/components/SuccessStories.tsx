import { CardCarousel } from "@/components/ui/card-carousel";

const testimonials = [
  {
    videoSrc: "/videos/testimonials/glaucio-coelho.mp4",
    name: "Glaucio Coelho",
    role: "Coordenador de Sistemas — Grupo Litoral / Fotus Distribuidora",
    caption:
      "Mais estabilidade, performance e segurança na operação diária, com monitoramento contínuo e atuação preventiva.",
    fullQuote:
      "A SIAC teve um papel essencial na sustentação da nossa operação, que depende de um ambiente altamente crítico. Com a administração do ERP e do banco de dados, somada à infraestrutura da SIAC Cloud, alcançamos mais estabilidade, desempenho e segurança nas rotinas diárias. Hoje operamos com monitoramento contínuo, respostas ágeis e uma atuação preventiva, o que nos traz total tranquilidade para suportar a evolução e expansão do negócio.",
  },
  {
    videoSrc: "/videos/testimonials/heitor-fernandes.mp4",
    name: "Heitor Fernandes",
    role: "Diretor de Operações — Apex Partners",
    caption:
      "Continuidade garantida em ambiente de missão crítica, com operação monitorada e resposta rápida.",
    fullQuote:
      "A SIAC foi fundamental para garantir a continuidade da nossa operação em um ambiente de missão crítica. Com a gestão do banco de dados e do ERP, aliada à estrutura da SIAC Cloud, passamos a ter mais estabilidade, performance e segurança no dia a dia. Hoje contamos com uma operação monitorada, com respostas rápidas e atuação proativa, o que nos dá total confiança para sustentar o crescimento do negócio.",
  },
  {
    videoSrc: "/videos/testimonials/bryan-bremenkamp.mp4",
    name: "Bryan Bremenkamp",
    role: "Diretor — Grupo Bremenkamp",
    caption:
      "Mais visibilidade sobre riscos e resposta rápida a incidentes, com redução significativa da exposição a problemas.",
    fullQuote:
      "A SIAC trouxe mais segurança e controle para o nosso ambiente de TI. Hoje temos muito mais visibilidade sobre riscos, respostas rápidas a incidentes e um suporte que realmente atua de forma preventiva. Isso aumentou a estabilidade do ambiente e reduziu significativamente a exposição a problemas. Com isso, ganhamos mais tranquilidade e confiança para focar no crescimento do negócio, sabendo que a nossa operação está protegida e bem assistida.",
  },
  {
    videoSrc: "/videos/testimonials/andre-cardoso.mp4",
    name: "André Cardoso",
    role: "Diretor de Tecnologia — Grupo Comprocard",
    caption:
      "Identificação e tratamento de problemas antes de impactarem a operação, com monitoramento contínuo do NOC.",
    fullQuote:
      "A SIAC trouxe mais visibilidade e controle para o nosso ambiente de TI. Com o monitoramento contínuo e a atuação do NOC, conseguimos identificar e tratar problemas com muito mais rapidez, muitas vezes antes mesmo de impactarem a operação. Isso aumentou a estabilidade do ambiente e nos deu mais segurança para manter nossos serviços funcionando de forma consistente.",
  },
  {
    videoSrc: "/videos/testimonials/mateus-angeli.mp4",
    name: "Mateus Angeli Morão",
    role: "Encarregado de TI — Grupo Alinutri",
    caption:
      "Suporte 24x7 e atuação preventiva que evitam problemas antes de impactarem a operação.",
    fullQuote:
      "A SIAC transformou nossa TI. O suporte 24x7 e a proatividade da equipe fazem toda a diferença no nosso dia a dia. Hoje temos muito mais estabilidade no ambiente, respostas rápidas quando necessário e uma atuação preventiva que evita problemas antes mesmo que impactem a operação. Isso nos trouxe mais tranquilidade para focar no crescimento do negócio.",
  },
];

export function SuccessStories() {
  return (
    <section
      id="casos-de-sucesso"
      className="relative scroll-mt-28 overflow-hidden py-lg"
    >
      <div className="relative mx-auto max-w-3xl px-sm pb-lg md:px-lg text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-brand-graphite/50 dark:text-brand-ice/50">
          CASOS DE SUCESSO
        </p>
        <h2 className="mt-sm text-2xl font-bold text-brand-graphite dark:text-brand-ice md:text-4xl">
          Quem já opera com a SIAC.
        </h2>
      </div>
      <CardCarousel
        testimonials={testimonials}
        autoplayDelay={2500}
        showPagination
        showNavigation
      />
    </section>
  );
}
