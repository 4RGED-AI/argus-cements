"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { trips } from "@/data/site";
import { PlusIcon } from "@/components/Icons";

export function CardFlick() {
  const pinRef = useRef<HTMLElement>(null);
  const [scrollActive, setScrollActive] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const active = hover ?? scrollActive;
  const rest = `${50 / (trips.length - 1)}%`;

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const pin = pinRef.current;
      if (pin) {
        const total = pin.offsetHeight - window.innerHeight;
        const p = total < 8 ? 0 : Math.min(1, Math.max(0, -pin.getBoundingClientRect().top / total));
        const idx = Math.min(trips.length - 1, Math.floor(p * trips.length * 0.9999));
        setScrollActive((prev) => (prev === idx ? prev : idx));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      ref={pinRef}
      className="stack-trips"
      style={{ height: `calc(100svh * ${trips.length})` }}
    >
      <div className="stack-trips_pin">
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
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(i)}
                  onBlur={() => setHover(null)}
                  style={{ width: on ? "50%" : rest }}
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
    </section>
  );
}
