"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { home } from "@/data/site";
import "./featured-work-video.css";

const CLOSE_MS = 450;

/**
 * Player for the home hero "Watch Film" button: the same centred player as
 * the Featured Work project videos (featured-work-video.css, fwv- classes):
 * dim backdrop, video with controls and sound, Esc / close button / backdrop
 * to close (closing pauses it). While open, page scrolling (Lenis and native)
 * is paused. The hero button itself is unchanged in HomePage.tsx.
 */
export function HeroFilmPlayer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const film = home.film;
  const [mounted, setMounted] = useState(false);
  const [shown, setShown] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  // Opening mounts the player; closing animates out, then unmounts.
  useEffect(() => {
    if (open) {
      returnFocus.current = document.activeElement as HTMLElement | null;
      setMounted(true);
      return;
    }
    videoRef.current?.pause();
    setShown(false);
    const t = window.setTimeout(() => {
      setMounted(false);
      returnFocus.current?.focus({ preventScroll: true });
    }, CLOSE_MS);
    return () => window.clearTimeout(t);
  }, [open]);

  const close = useCallback(() => onClose(), [onClose]);

  // While mounted and open: animate in, play, lock scroll, handle Esc.
  useEffect(() => {
    if (!mounted || !open) return;
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    html.style.overflow = "hidden";
    const raf = requestAnimationFrame(() => setShown(true));
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
    closeRef.current?.focus({ preventScroll: true });

    const inVideo = (e: Event) => e.target instanceof Node && !!v?.contains(e.target);
    // Stop the wheel before Lenis (it listens on window) so the page does not scroll.
    const onWheel = (e: WheelEvent) => {
      e.stopImmediatePropagation();
      e.preventDefault();
    };
    const onTouchMove = (e: TouchEvent) => {
      if (inVideo(e)) return;
      e.stopImmediatePropagation();
      e.preventDefault();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("wheel", onWheel, { capture: true, passive: false });
    window.addEventListener("touchmove", onTouchMove, { capture: true, passive: false });
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(raf);
      html.style.overflow = prevOverflow;
      window.removeEventListener("wheel", onWheel, { capture: true });
      window.removeEventListener("touchmove", onTouchMove, { capture: true });
      window.removeEventListener("keydown", onKey);
    };
  }, [mounted, open, close]);

  if (!mounted) return null;

  const playerStyle = {
    aspectRatio: `${film.width} / ${film.height}`,
    "--fwv-r": film.height / film.width,
  } as CSSProperties;

  return createPortal(
    <div
      className={`fwv-modal${shown ? " is-open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={film.title}
      data-lenis-prevent
    >
      <div className="fwv-backdrop" onClick={close} aria-hidden="true" />
      <div className="fwv-player" style={playerStyle}>
        <video
          ref={videoRef}
          src={film.src}
          poster={film.poster}
          width={film.width}
          height={film.height}
          controls
          playsInline
          preload="auto"
        />
      </div>
      <button ref={closeRef} type="button" className="fwv-close" onClick={close} aria-label="Close video">
        <span className="fwv-close_text">Close</span>
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </button>
    </div>,
    document.body,
  );
}
