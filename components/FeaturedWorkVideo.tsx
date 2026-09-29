"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import type { FeaturedWorkVideo as Video } from "@/data/featuredWork";
import "./featured-work-video.css";

const CLOSE_MS = 450;

/**
 * Project video: a poster card (fills its container, poster cropped with
 * object-fit: cover) that lifts on hover; click or tap opens a
 * centred player over a dim backdrop (with controls, and sound if the file has
 * any). Esc, the close button or the backdrop closes it; closing pauses the
 * video. While open, page scrolling (the site's Lenis smooth scroll and native
 * scroll) is paused.
 */
export function FeaturedWorkVideo({ video }: { video: Video }) {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    videoRef.current?.pause();
    setShown(false);
  }, []);

  // Unmount the player after the closing transition, then return focus to the card.
  useEffect(() => {
    if (!open || shown) return;
    const t = window.setTimeout(() => {
      setOpen(false);
      triggerRef.current?.focus({ preventScroll: true });
    }, CLOSE_MS);
    return () => window.clearTimeout(t);
  }, [open, shown]);

  // While open: animate in, play, lock scroll, handle Esc.
  useEffect(() => {
    if (!open) return;
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
  }, [open, close]);

  const ratio = `${video.width} / ${video.height}`;
  const playerStyle = { aspectRatio: ratio, "--fwv-r": video.height / video.width } as CSSProperties;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="fwv-card"
        onClick={() => setOpen(true)}
        aria-label={`Play video: ${video.title}`}
        aria-haspopup="dialog"
      >
        <Image
          src={video.poster}
          alt=""
          fill
          unoptimized
          sizes="(max-width: 767px) 100vw, 40vw"
          style={{ objectFit: "cover", objectPosition: "50% 40%" }}
        />
        <span className="fwv-card_shade" aria-hidden="true" />
        <span className="fwv-card_play" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="14" height="14">
            <path d="M8 5.5v13l10.5-6.5z" fill="currentColor" />
          </svg>
        </span>
      </button>

      {open
        ? createPortal(
            <div
              className={`fwv-modal${shown ? " is-open" : ""}`}
              role="dialog"
              aria-modal="true"
              aria-label={video.title}
              data-lenis-prevent
            >
              <div className="fwv-backdrop" onClick={close} aria-hidden="true" />
              <div className="fwv-player" style={playerStyle}>
                <video
                  ref={videoRef}
                  src={video.src}
                  poster={video.poster}
                  width={video.width}
                  height={video.height}
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
          )
        : null}
    </>
  );
}
