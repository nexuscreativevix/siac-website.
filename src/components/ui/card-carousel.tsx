"use client";

import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { X } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";

interface Testimonial {
  videoSrc: string;
  name: string;
  role: string;
  caption: string;
  fullQuote: string;
}

interface CarouselProps {
  testimonials: Testimonial[];
  autoplayDelay?: number;
  showPagination?: boolean;
  showNavigation?: boolean;
}

// Swiper's loop mode needs roughly 2x the visible slide count in real slides
// to compute its wraparound clones — with only 5 fixed-width (280px) cards
// and ~4 visible at once under slidesPerView="auto", it falls short and
// silently disables looping (stacking everything to one side). Rendering
// several repeated copies (same technique as the Partners logo marquee)
// gives it enough real slides to loop correctly, without duplicating any
// content shown to the user beyond the coverflow illusion itself.
const LOOP_MULTIPLIER = 4;

export const CardCarousel: React.FC<CarouselProps> = ({
  testimonials,
  autoplayDelay = 2000,
  showPagination = true,
  showNavigation = true,
}) => {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [modalTestimonial, setModalTestimonial] = useState<Testimonial | null>(
    null
  );
  // Which of the 5 REAL testimonials is centered right now — derived from the
  // active slide's own data-real-index, since Swiper has no notion that our
  // repeated slides are duplicates of each other. Drives the custom 5-dot
  // pagination below (Swiper's built-in pagination would render one bullet
  // per physical slide, i.e. 20, not 5).
  const [activeRealIndex, setActiveRealIndex] = useState(0);

  const loopedTestimonials = Array.from(
    { length: testimonials.length * LOOP_MULTIPLIER },
    (_, i) => testimonials[i % testimonials.length]
  );

  const syncActiveRealIndex = (swiper: SwiperInstance) => {
    const activeSlideEl = swiper.slides[swiper.activeIndex] as
      | HTMLElement
      | undefined;
    const real = Number(activeSlideEl?.dataset.realIndex ?? 0);
    setActiveRealIndex(real);
  };

  const goToTestimonial = (targetRealIndex: number) => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    let bestSlideIndex = -1;
    let bestDistance = Infinity;
    (swiper.slides as HTMLElement[]).forEach((slideEl, i) => {
      if (Number(slideEl.dataset.realIndex) === targetRealIndex) {
        const distance = Math.abs(i - swiper.activeIndex);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestSlideIndex = i;
        }
      }
    });
    if (bestSlideIndex !== -1) swiper.slideTo(bestSlideIndex);
  };

  const openModal = (testimonial: Testimonial) => {
    setModalTestimonial(testimonial);
    swiperRef.current?.autoplay?.pause();
  };

  const closeModal = () => {
    setModalTestimonial(null);
    swiperRef.current?.autoplay?.resume();
  };

  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 48px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 280px;
    filter: blur(5px) brightness(0.7) saturate(0.85);
    opacity: 0.4;
    transition: filter 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .swiper-slide-active {
    filter: blur(0px) brightness(1) saturate(1);
    opacity: 1;
  }

  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }

  /* Name/role/caption overlay: only readable on the centered, active slide */
  .slide-overlay {
    opacity: 0;
    transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .swiper-slide-active .slide-overlay {
    opacity: 1;
  }
  `;

  const activeTestimonial = modalTestimonial;

  return (
    <section className="w-full bg-brand-ice dark:bg-transparent">
      <style>{css}</style>
      <div className="relative flex w-full items-center justify-center">
        {/* Edge fades — the outermost cards recede into the section's own
            background instead of being cut off hard, reinforcing the
            coverflow's layered depth (center sharp, sides receding). */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-ice to-transparent dark:from-brand-graphite md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-ice to-transparent dark:from-brand-graphite md:w-40" />
        <div className="w-full">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              syncActiveRealIndex(swiper);
            }}
            onSlideChange={syncActiveRealIndex}
            spaceBetween={48}
            autoplay={{
              delay: autoplayDelay,
              disableOnInteraction: false,
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slideToClickedSlide={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 100,
              modifier: 1,
            }}
            navigation={
              showNavigation
                ? {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }
                : undefined
            }
            modules={[EffectCoverflow, Autoplay, Navigation]}
          >
            {loopedTestimonials.map((testimonial, index) => (
              <SwiperSlide
                key={index}
                data-real-index={index % testimonials.length}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    // Index comparisons are unreliable once Swiper inserts
                    // its own loop clones, so check the slide's own active
                    // state directly instead.
                    const slideEl = e.currentTarget.closest(".swiper-slide");
                    if (slideEl?.classList.contains("swiper-slide-active")) {
                      openModal(testimonial);
                    }
                  }}
                  className="block w-full overflow-hidden rounded-card-lg bg-white text-left shadow-level-1 dark:bg-brand-graphite"
                >
                  <div className="relative aspect-[9/16] w-full overflow-hidden rounded-card-lg bg-brand-graphite">
                    {/* Static poster frame — no `src` on purpose: these
                        testimonial videos don't exist yet (/videos/testimonials/*.mp4
                        404s), and pointing a <video> at a missing file makes
                        the browser fetch it anyway even though only the
                        poster is ever shown here. TEMP: poster is a
                        stock-photo placeholder — swap this whole element
                        for a real <video src=...> once SIAC delivers the
                        recordings. */}
                    <video
                      poster="/images/placeholders/it-operations-noc.jpg"
                      muted
                      playsInline
                      className="h-full w-full object-cover [filter:saturate(0.55)]"
                    />
                    <div className="absolute inset-0 bg-brand-graphite/50 dark:bg-black/55" />
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "radial-gradient(ellipse 70% 60% at 100% 100%, rgba(159,33,28,0.35), transparent 70%)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                    <div className="slide-overlay absolute inset-x-0 bottom-0 p-md text-white">
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-xs text-white/70">
                        {testimonial.role}
                      </p>
                      <p className="mt-sm text-sm text-white/90">
                        {testimonial.caption}
                      </p>
                    </div>
                  </div>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {showPagination && (
        <div className="mt-sm flex items-center justify-center gap-xs">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`Ir para o depoimento de ${testimonial.name}`}
              onClick={() => goToTestimonial(index)}
              className={`h-2 w-2 rounded-pill transition-colors ease-brand ${
                index === activeRealIndex
                  ? "bg-brand-primary"
                  : "bg-brand-graphite/20 dark:bg-brand-ice/20"
              }`}
            />
          ))}
        </div>
      )}

      {activeTestimonial &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{
              background: "rgba(20,20,20,0.55)",
              backdropFilter: "blur(8px)",
            }}
            onClick={closeModal}
          >
            <div
              className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-card-lg bg-brand-ice shadow-level-3 dark:bg-brand-graphite md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeModal}
                aria-label="Fechar"
                className="absolute right-sm top-sm z-10 flex h-9 w-9 items-center justify-center rounded-pill bg-black/50 text-white transition-colors ease-brand hover:bg-black/70"
              >
                <X size={18} />
              </button>

              <div className="relative flex h-[70vh] max-h-[640px] w-full flex-col items-center justify-end bg-black p-lg text-center md:h-[80vh] md:w-[62%]">
                {/* No real recording exists yet for this testimonial
                    (same reasoning as the card poster above) — an honest
                    "em produção" placeholder instead of a <video> with
                    controls that would silently do nothing. */}
                <img
                  src="/images/placeholders/it-operations-noc.jpg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-40 [filter:saturate(0.55)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <p className="relative text-sm font-semibold text-white">
                  Vídeo em produção
                </p>
                <p className="relative mt-xs text-xs text-white/60">
                  O depoimento em vídeo de {activeTestimonial.name} estará
                  disponível aqui em breve.
                </p>
              </div>

              <div className="flex w-full flex-col justify-center bg-brand-ice p-lg dark:bg-brand-graphite md:w-[38%]">
                <div className="mb-md h-1 w-12 rounded-pill bg-brand-primary" />
                <p className="text-lg font-bold text-brand-graphite dark:text-brand-ice">
                  {activeTestimonial.name}
                </p>
                <p className="text-sm text-brand-graphite/60 dark:text-brand-ice/60">
                  {activeTestimonial.role}
                </p>
                <p className="mt-md text-sm leading-relaxed text-brand-graphite/80 dark:text-brand-ice/80">
                  {activeTestimonial.fullQuote}
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};
