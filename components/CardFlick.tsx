"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { trips } from "@/data/site";
import { PlusIcon } from "@/components/Icons";
import "@/components/card-flick-scroll.css";

const HEADING = "Other Products";

export function CardFlick() {
  const pinRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLElement>(null);
  const stickRef = useRef<HTMLDivElement>(null);
  const lastIdx = useRef(-1);
  const moveAnchor = useRef<{ x: number; y: number } | null>(null);
  const lastScroll = useRef(0);
  const [scrollActive, setScrollActive] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const active = hover ?? scrollActive;
  // Flex-grow weights instead of animated widths, so the strips always fill
  // the row (active 50%, the others share the rest) even mid-transition.
  const ACTIVE_GROW = trips.length - 1;

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const pin = pinRef.current;
      if (pin) {
        // Progress runs only while the cards are pinned: after the heading
        // has scrolled away and until the scroll track below them ends.
        const headH = headRef.current?.offsetHeight ?? 0;
        const stickH = stickRef.current?.offsetHeight ?? window.innerHeight;
        const total = pin.offsetHeight - headH - stickH;
        const p = total < 8 ? 0 : Math.min(1, Math.max(0, (-pin.getBoundingClientRect().top - headH) / total));
        const idx = Math.min(trips.length - 1, Math.floor(p * trips.length * 0.9999));
        if (idx !== lastIdx.current) {
          lastIdx.current = idx;
          setScrollActive(idx);
          // Scrolling always wins over a card the cursor happens to rest on.
          setHover(null);
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Any page scroll (wheel, trackpad, Lenis smoothing, keys) cancels the hover
  // preview, so the card under a resting or slightly drifting cursor can never
  // override the scroll position (that caused the snap-back at the end).
  useEffect(() => {
    const onScroll = () => {
      lastScroll.current = performance.now();
      moveAnchor.current = null;
      setHover((prev) => (prev === null ? prev : null));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hover preview only for a real mouse, and only once scrolling has been idle
  // for 400ms and the cursor then moved at least 6px: while the user scrolls,
  // the scroll position always decides the active card.
  const onPointerMove = (i: number) => (e: PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    if (performance.now() - lastScroll.current < 400) {
      moveAnchor.current = null;
      return;
    }
    const a = moveAnchor.current;
    if (!a) {
      moveAnchor.current = { x: e.clientX, y: e.clientY };
      return;
    }
    if (Math.hypot(e.clientX - a.x, e.clientY - a.y) < 6) return;
    setHover((prev) => (prev === i ? prev : i));
  };
  const onPointerLeave = (e: PointerEvent) => {
    if (e.pointerType === "mouse") setHover(null);
  };

  return (
    <section
      ref={pinRef}
      className="stack-trips cf-flow"
      style={{ "--flick-count": trips.length } as CSSProperties}
    >
      <header ref={headRef} className="cf-head" data-nav-theme="dark">
        <h2 className="section-title-xxl cf-head_title">{HEADING}</h2>
      </header>
      <div ref={stickRef} className="stack-trips_pin">
        <div className="card-flick">
          <div className="card-flick_grid">
            {trips.map((trip, i) => {
              const on = i === active;
              return (
                <Link
                  key={trip.slug}
                  className={`card-flick_item${on ? " is-active" : ""}`}
                  href={`/itineraries/${trip.slug}`}
                  data-cursor-text="Learn More"
                  onPointerMove={onPointerMove(i)}
                  onPointerLeave={onPointerLeave}
                  onFocus={() => setHover(i)}
                  onBlur={() => setHover(null)}
                  style={{ flexGrow: on ? ACTIVE_GROW : 1 }}
                >
                  <div className="card-flick_item-inner">
                    <div className="card-flick_image">
                      <Image src={trip.image} alt={trip.title} fill sizes="50vw" style={{ objectFit: "cover" }} />
                    </div>
                    <div className="card-flick_overlay" style={{ opacity: on ? 0 : 1 }} />
                    <div className="card-flick_content" style={{ opacity: on ? 1 : 0 }}>
                      <div className="card-flick_content-inner">
                        <div className="card-flick_header">
                          <h3 className="card-flick_title t-title-italic">{trip.title}</h3>
                        </div>
                        <div className="card-flick_footer">
                          <div className="card-flick_meta">
                            {trip.tags.map((tag, idx) => (
                              <span key={tag}>
                                {idx > 0 ? <span className="itinerary-item_meta-divider" /> : null}
                                <span className="card-flick_meta-item">{tag}</span>
                              </span>
                            ))}
                          </div>
                          <p className="card-flick_excerpt t-body">{trip.excerpt}</p>
                          <button className="btn btn-mobile" type="button">
                            <div className="btn-inner">
                              <span className="btn-text">Learn More</span>
                              <div className="btn-icon">
                                <div className="icon" style={{ width: "100%", height: "100%" }}>
                                  <PlusIcon />
                                </div>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="cf-track" aria-hidden="true" />
    </section>
  );
}
