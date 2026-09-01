"use client";

import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

interface VideoLightboxProps {
  open: boolean;
  onClose: () => void;
  image: string;
  title: string;
}

/**
 * Institutional video placeholder lightbox — Hero and Manifesto don't have
 * a real video file yet (only the stand-in photo), so clicking play opens
 * this instead of silently doing nothing. Swap the body for a real
 * <video> element once SIAC delivers the footage; the open/close plumbing
 * stays the same.
 */
export function VideoLightbox({ open, onClose, image, title }: VideoLightboxProps) {
  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(20,20,20,0.55)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-card-lg bg-brand-graphite shadow-level-3"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-sm top-sm z-10 flex h-9 w-9 items-center justify-center rounded-pill bg-black/50 text-white transition-colors ease-brand hover:bg-black/70"
        >
          <X size={18} />
        </button>

        <div className="relative aspect-video w-full">
          <PlaceholderImage src={image} alt="" />
        </div>

        <div className="p-lg text-center md:p-xl">
          <p className="text-sm font-semibold text-brand-ice md:text-base">
            {title}
          </p>
          <p className="mt-xs text-xs text-brand-ice/50 md:text-sm">
            Vídeo institucional em produção — em breve disponível aqui.
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}
