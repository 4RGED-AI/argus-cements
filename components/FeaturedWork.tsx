"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { featuredWorkMotion, featuredWorkSection } from "@/data/featuredWork";
import { featuredPanels } from "@/components/featuredWorkSlides";
import "./featured-work.css";

/**
 * Homepage "Featured work" section: one full-screen panel per work, starting
 * with "Some of our work". Each image stays pinned while its panel scrolls up
 * into view (native position: sticky, so it follows the site's Lenis scroll
 * frame-for-frame); the previous panel scrolls away with the page. The caption
 * is pinned bottom-left and swaps to the next title as each panel takes over.
 * The intro card is not a link; each project panel links to /our-work/<slug>.
 */
export function FeaturedWork() {
  const panelRefs = useRef<(HTMLElement | null)[]>([]);
  const zoomRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rowRef = useRef<HTMLDivElement>(null);
  const cellRef = useRef<HTMLDivElement>(null);
  const titleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [caption, setCaption] = useState({ lift: 0, line: 0 });

  // Scroll: which panel owns the caption, plus the optional enter zoom.
  useEffect(() => {
    const { enterScale, lerp, captionSwitchAt } = featuredWorkMotion;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const scales = featuredPanels.map(() => enterScale);
    let raf = 0;
    let last = -1;

    const frame = () => {
      raf = 0;
      const vh = window.innerHeight;
      const zoom = enterScale > 1 && !reduce.matches;
      // Read every position first, then write, so nothing forces a re-layout.
      const tops = panelRefs.current.map((el) => (el ? el.getBoundingClientRect().top : Infinity));
      let idx = 0;
      tops.forEach((top, i) => {
        if (i > 0 && top <= vh * (1 - captionSwitchAt)) idx = i;
      });
      if (idx !== last) {
        last = idx;
        setActive(idx);
      }
      let settling = false;
      zoomRefs.current.forEach((el, i) => {
        if (!el) return;
        if (!zoom) {
          if (el.style.transform) el.style.transform = "";
          return;
        }
        const p = Math.min(1, Math.max(0, (vh - tops[i]) / vh));
        const target = enterScale - (enterScale - 1) * p;
        scales[i] += (target - scales[i]) * lerp;
        if (Math.abs(target - scales[i]) > 0.0004) settling = true;
        else scales[i] = target;
        el.style.transform = `scale(${scales[i].toFixed(4)})`;
      });
      if (settling) raf = requestAnimationFrame(frame);
    };

    const request = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };
    request();
    // Lenis moves the real window scroll every frame, so native scroll events
    // arrive in step with the site's smooth scroll.
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    reduce.addEventListener("change", request);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      reduce.removeEventListener("change", request);
    };
  }, []);

  // Caption geometry: line starts right after the active title; the eyebrow sits on top of it.
  useEffect(() => {
    const measure = () => {
      const row = rowRef.current;
      const cell = cellRef.current;
      const title = titleRefs.current[active];
      if (!row || !cell || !title) return;
      const rowWidth = row.clientWidth || 1;
      const gap = parseFloat(getComputedStyle(row).columnGap) || 0;
      setCaption({
        lift: cell.clientHeight - title.offsetHeight,
        line: Math.max(0, (rowWidth - title.offsetWidth - gap) / rowWidth),
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (rowRef.current) ro.observe(rowRef.current);
    document.fonts?.ready.then(measure).catch(() => {});
    return () => ro.disconnect();
  }, [active]);

  return (
    <section className="fw" aria-labelledby="fw-heading">
      {/* Heading band: white space that separates the section above from the panels. */}
      <header className="fw-head" data-nav-theme="dark">
        <div className="container-large">
          <p className="layout-title fw-head_eyebrow">{featuredWorkSection.headingEyebrow}</p>
          <div className="v-flex_center">
            <h2 id="fw-heading" className="section-title-xxl">
              {featuredWorkSection.heading}
            </h2>
          </div>
        </div>
      </header>
      <div className="fw-stack">
        {featuredPanels.map((panel, i) => {
          const setPanelRef = (el: HTMLElement | null) => {
            panelRefs.current[i] = el;
          };
          const media = (
            <div className="fw-panel_track">
              <div className="fw-panel_media">
                <div
                  className="fw-panel_zoom"
                  ref={(el) => {
                    zoomRefs.current[i] = el;
                  }}
                >
                  <Image
                    src={panel.image.src}
                    alt={panel.image.alt}
                    fill
                    sizes="100vw"
                    unoptimized
                    style={{ objectFit: "cover", objectPosition: panel.image.position }}
                  />
                </div>
                <div className="fw-panel_shade" />
              </div>
            </div>
          );
          // The intro card is display only (no link, no "Learn More" cursor).
          if (panel.kind === "intro") {
            return (
              <div key={panel.key} ref={setPanelRef} className="fw-panel is-intro">
                {media}
              </div>
            );
          }
          return (
            <Link
              key={panel.key}
              ref={setPanelRef}
              className="fw-panel"
              href={panel.href}
              data-cursor-text={featuredWorkSection.cursorText}
              aria-label={`${featuredWorkSection.eyebrow}: ${panel.title}`}
            >
              {media}
            </Link>
          );
        })}

        <div className="fw-cap_track" aria-hidden="true">
          <div className="fw-cap">
            <div className="fw-cap_grid">
              <div className="fw-cap_inner">
                <div className="fw-cap_eyebrow-row" style={{ transform: `translate3d(0, ${caption.lift}px, 0)` }}>
                  <p className="fw-cap_eyebrow">{featuredWorkSection.eyebrow}</p>
                  <span className="fw-cap_line is-eyebrow">
                    <span className="fw-tick" />
                  </span>
                </div>
                <div className="fw-cap_row" ref={rowRef}>
                  <div className="fw-cap_titles" ref={cellRef}>
                    {featuredPanels.map((panel, i) => (
                      <span
                        key={panel.key}
                        ref={(el) => {
                          titleRefs.current[i] = el;
                        }}
                        className={`fw-cap_title${i === active ? " is-active" : i < active ? " is-past" : ""}`}
                      >
                        {panel.title}
                      </span>
                    ))}
                  </div>
                  <span className="fw-cap_line is-title" style={{ transform: `scaleX(${caption.line.toFixed(4)})` }} />
                  <span className="fw-tick is-title" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
