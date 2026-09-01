"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Casos de Sucesso", href: "#casos-de-sucesso" },
  { label: "Quem Somos", href: "#manifesto" },
  { label: "Contato", href: "#contato" },
];

export function Nav() {
  const { resolvedTheme, setTheme } = useTheme();
  // Pre-mount, next-themes hasn't read localStorage yet — default to dark
  // (the site's default theme) so the toggle never flashes the wrong icon.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted ? resolvedTheme === "dark" : true;

  // These links only work as bare "#id" anchors while already on the
  // homepage — on any other route (e.g. /politica-de-privacidade) they'd
  // just append the hash to the current URL and go nowhere. Prefix with
  // "/" outside the homepage so they navigate back first.
  const pathname = usePathname();
  const isHome = pathname === "/";
  const toHref = (hash: string) => (isHome ? hash : `/${hash}`);

  // Nav links only render in the desktop pill (hidden md:flex below) — on
  // mobile there was previously no way to reach them at all. This sheet is
  // the mobile equivalent, opened from the hamburger button next to the
  // theme switch.
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-sm z-50 px-sm"
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-sm">
        {/* Logo — solto, sem contêiner */}
        <a href={isHome ? "#hero" : "/"} className="flex shrink-0 items-center">
          <Image
            src={isDark ? "/brand/logo/siac-logo-light.png" : "/brand/logo/siac-logo-dark.png"}
            alt="SIAC"
            width={148}
            height={45}
            priority
            className="h-8 w-auto"
          />
        </a>

        {/* Menu — pílula independente, centralizada. Only from `lg` up: at
            `md` (768px, the tablet breakpoint) there isn't room for the
            logo + 4 links + theme pill + CTA in one row — it overflowed the
            viewport and pushed the CTA button off-screen. Tablet gets the
            same hamburger sheet as mobile instead. */}
        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-lg rounded-pill border border-white/60 bg-white/70 px-lg py-xs backdrop-blur-glass dark:border-white/10 dark:bg-white/5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={toHref(link.href)}
                  className="whitespace-nowrap text-sm font-medium text-brand-graphite/80 transition-colors ease-brand hover:text-brand-primary dark:text-brand-ice/80"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Switch de tema + CTA — pílula independente */}
        <div className="flex shrink-0 items-center gap-xs rounded-pill border border-white/60 bg-white/70 p-xs backdrop-blur-glass dark:border-white/10 dark:bg-white/5">
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Alternar tema"
            aria-pressed={isDark}
            className={`relative flex h-7 w-12 items-center rounded-pill px-1 transition-colors ease-brand ${
              isDark ? "bg-brand-graphite" : "bg-brand-graphite/10"
            }`}
          >
            <span
              className={`flex h-5 w-5 items-center justify-center rounded-pill bg-white shadow-level-1 transition-transform ease-brand ${
                isDark ? "translate-x-5" : "translate-x-0"
              }`}
            >
              {isDark ? (
                <Moon size={12} className="text-brand-graphite" />
              ) : (
                <Sun size={12} className="text-brand-primary" />
              )}
            </span>
          </button>

          <a
            href={toHref("#contato")}
            className="hidden rounded-button bg-brand-primary px-md py-xs text-sm font-semibold text-white shadow-level-1 transition-colors ease-brand hover:bg-brand-primary-dark lg:inline-flex"
          >
            Falar Conosco
          </a>

          {/* Hamburger — mobile-only entry point to the nav links, which
              otherwise only exist in the desktop pill above (hidden md:flex). */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-pill text-brand-graphite transition-colors ease-brand dark:text-brand-ice lg:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="mx-sm mt-[76px] flex flex-col gap-xs rounded-card-lg border border-white/60 bg-white/95 p-md shadow-level-3 backdrop-blur-glass dark:border-white/10 dark:bg-brand-graphite/95"
            >
              <div className="flex items-center justify-between px-xs pb-xs">
                <span className="text-xs font-semibold tracking-[0.2em] text-brand-graphite/50 dark:text-brand-ice/50">
                  MENU
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Fechar menu"
                  className="flex h-9 w-9 items-center justify-center rounded-pill text-brand-graphite dark:text-brand-ice"
                >
                  <X size={18} />
                </button>
              </div>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={toHref(link.href)}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-button px-md py-sm text-base font-medium text-brand-graphite/90 transition-colors ease-brand hover:bg-brand-graphite/5 dark:text-brand-ice/90 dark:hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={toHref("#contato")}
                onClick={() => setMobileOpen(false)}
                className="mt-xs rounded-button bg-brand-primary px-md py-sm text-center text-base font-semibold text-white shadow-level-1"
              >
                Falar Conosco
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
