"use client";

import { useEffect, useRef, useState } from "react";
import { companiesMarquee } from "@/data/companies";
import "./companies-marquee.css";

/**
 * "Companies run/invested in" band over the bottom of the home globe image.
 * Absolutely positioned inside .travel-globe_inner, so it adds no layout.
 * Seamless loop: the track holds two identical halves and moves 0 -> -50%.
 * Each half repeats the list enough times to be at least as wide as the band,
 * and the duration is half the track width / speed, so the speed stays
 * constant (~62 px/s) at any screen width.
 * Logo chips: the <img> width/height attributes reserve the right width before
 * the file loads, and the first set is re-measured when a logo loads or a chip
 * resizes, so the loop never jumps.
 */
export function CompaniesMarquee() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [reps, setReps] = useState(1);
  const { heading, items, speed } = companiesMarquee;

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;
    const update = () => {
      const lis = Array.from(track.children).slice(0, items.length) as HTMLElement[];
      const setWidth = lis.reduce((w, li) => w + li.offsetWidth, 0);
      if (setWidth <= 0) return;
      const next = Math.max(1, Math.ceil(viewport.clientWidth / setWidth));
      setReps((r) => (r === next ? r : next));
      track.style.setProperty("--cm-duration", `${((next * setWidth) / speed).toFixed(2)}s`);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(viewport);
    Array.from(track.children)
      .slice(0, items.length)
      .forEach((li) => ro.observe(li));
    const imgs = Array.from(track.querySelectorAll("img"));
    imgs.forEach((img) => img.addEventListener("load", update));
    document.fonts?.ready.then(update).catch(() => {});
    return () => {
      ro.disconnect();
      imgs.forEach((img) => img.removeEventListener("load", update));
    };
  }, [items.length, speed]);

  const sets = Array.from({ length: reps * 2 }, (_, copy) =>
    items.map(({ name, logo, showName }) => (
      <li key={`${copy}-${name}`} className="cm-item" aria-hidden={copy > 0 ? true : undefined}>
        <span className={`cm-chip${logo ? " has-logo" : ""}${logo && showName ? " has-name" : ""}`}>
          {logo ? (
            // Plain <img>: small static logos, sized by CSS height; no optimizer.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="cm-logo"
              src={logo.src}
              // With the name shown next to it, the logo is decorative.
              alt={showName ? "" : logo.alt}
              width={logo.width}
              height={logo.height}
              decoding="async"
              draggable={false}
            />
          ) : null}
          {!logo || showName ? <span className="cm-name">{name}</span> : null}
        </span>
      </li>
    )),
  );

  return (
    <div className="cm-frame">
      <div className="cm-band">
        {/* No visible heading; the list keeps it as its accessible name. */}
        <div ref={viewportRef} className="cm-viewport">
          <ul ref={trackRef} className="cm-track" aria-label={heading}>
            {sets}
          </ul>
        </div>
      </div>
    </div>
  );
}
