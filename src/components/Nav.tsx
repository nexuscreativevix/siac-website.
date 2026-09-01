"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
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

        {/* Menu — pílula independente, centralizada */}
        <nav className="hidden md:flex">
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
            className="rounded-button bg-brand-primary px-md py-xs text-sm font-semibold text-white shadow-level-1 transition-colors ease-brand hover:bg-brand-primary-dark"
          >
            Falar Conosco
          </a>
        </div>
      </div>
    </motion.header>
  );
}
