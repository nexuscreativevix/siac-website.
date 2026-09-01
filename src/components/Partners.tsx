"use client";

import { motion } from "framer-motion";

const PARTNERS = [
  { file: "acronis.svg", name: "Acronis" },
  { file: "aws.svg", name: "AWS" },
  { file: "bitdefender.svg", name: "Bitdefender" },
  { file: "canonical.svg", name: "Canonical" },
  { file: "cloudflare.svg", name: "Cloudflare" },
  { file: "fortinet.svg", name: "Fortinet" },
  { file: "ingram.svg", name: "Ingram Micro" },
  { file: "kaspersky.svg", name: "Kaspersky" },
  { file: "microsoft.svg", name: "Microsoft" },
  { file: "nexxtcloud.svg", name: "Nextcloud" },
  { file: "oracle.svg", name: "Oracle" },
  { file: "redhat.svg", name: "Red Hat" },
  { file: "sankhya.svg", name: "Sankhya" },
  { file: "shophos.svg", name: "Sophos" },
  { file: "veeam.svg", name: "Veeam" },
  { file: "vmware.svg", name: "VMware" },
];

// Duplicated once so the track can loop seamlessly at -50%.
const TRACK = [...PARTNERS, ...PARTNERS];

export function Partners() {
  return (
    <section
      id="parceiros"
      className="scroll-mt-28 mb-lg border-y border-brand-graphite/10 py-lg dark:border-brand-ice/10"
    >
      <div className="mx-auto max-w-[1200px] px-sm md:px-lg">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-brand-graphite/50 dark:text-brand-ice/50">
          PARCEIROS &amp; CERTIFICAÇÕES
        </p>
      </div>

      <div className="relative mt-md overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-ice to-transparent dark:from-brand-black md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-ice to-transparent dark:from-brand-black md:w-32" />

        <motion.div
          className="flex w-max items-center gap-x-xl"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {TRACK.map((partner, i) => (
            <div
              key={`${partner.file}-${i}`}
              className="flex h-[60px] w-[140px] shrink-0 items-center justify-center rounded-card px-4 py-3 transition-colors ease-brand dark:bg-brand-ice/90"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- container is fixed-size (140x60) in both themes, so every logo scales down to the same max box via object-contain regardless of its own aspect ratio; only the chip background (dark mode contrast aid) differs by theme. */}
              <img
                src={`/brand/partners/${partner.file}`}
                alt={partner.name}
                className="block h-auto max-h-7 w-auto max-w-[100px] object-contain opacity-60 grayscale transition-all duration-300 ease-brand hover:opacity-100 hover:grayscale-0 dark:opacity-100 dark:grayscale-0"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
