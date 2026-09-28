"use client";

import { useEffect, useState } from "react";
import { howItWorks } from "@/data/site";
import { PlusIcon } from "@/components/Icons";

export function HowItWorksFlyout() {
  const [peek, setPeek] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const past = window.scrollY > 8;
      setPeek((prev) => (prev === past ? prev : past));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const className = [
    "flyout_container",
    "is-ready",
    peek ? "is-sticky" : "",
    open ? "is-active" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <div className="flyout-overlay" onClick={() => setOpen(false)} />
      <div className="flyout_component">
        <div className={`flyout-button-wrap${open ? " is-open" : ""}`}>
          <div className={`flyout-visible-wrap${peek || open ? " is-visible" : ""}`}>
            <button
              className={`btn ${open ? "btn-popup-close" : "btn-popup-open"}`}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
            >
              <div className="btn-inner">
                <span className="btn-text">
                  <span className="switch-labels">
                    <span className={`icon-span open-label${open ? "" : " active"}`}>
                      How it works
                      <div className="icon" style={{ width: 16, height: "auto", color: "currentcolor" }}>
                        <PlusIcon />
                      </div>
                    </span>
                    <span className={`icon-span close-label${open ? " active" : ""}`}>
                      Close
                      <div className="icon" style={{ width: 16, height: "auto", color: "currentcolor" }}>
                        <PlusIcon />
                      </div>
                    </span>
                  </span>
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="flyout_popup">
          <div className="flyout_layout" data-lenis-prevent="true">
            <div className="flyout_content">
              <div className="flyout_content-inner">
                <div className="flyout_header">
                  <h3 className="t-modal-header">{howItWorks.title}</h3>
                </div>
                <div className="global-flyout_flex">
                  {howItWorks.steps.map((step) => (
                    <div className="global-flyout_content-item" key={step.title}>
                      <div className="global-richtext">
                        <h3>{step.title}</h3>
                        <p>
                          {step.body}{" "}
                          {step.title.startsWith("1.") ? (
                            <a className="rich-btn" href={howItWorks.bookHref}>
                              Enquire
                            </a>
                          ) : null}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
