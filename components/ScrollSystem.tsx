"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

function parseOffset(value: string | undefined) {
  if (!value) return { n: 0, unit: "%" as const };
  const m = value.trim().match(/^(-?[\d.]+)(px|%|svh|vh|em|rem)?$/);
  if (!m) return { n: 0, unit: "%" as const };
  return { n: Number(m[1]), unit: (m[2] || "%") as "%" | "px" | "svh" | "vh" | "em" | "rem" };
}

function toCss(n: number, unit: string) {
  return `${n}${unit}`;
}

function pinProgress(el: HTMLElement) {
  const pin =
    el.closest<HTMLElement>(".hero-banner") ||
    el.closest<HTMLElement>(".tall-parallax-banner") ||
    el.closest<HTMLElement>("[data-scroll-pin]");
  if (!pin) return 0;
  const total = pin.offsetHeight - window.innerHeight;
  if (total < 8) return 0;
  return Math.min(1, Math.max(0, -pin.getBoundingClientRect().top / total));
}

export function ScrollSystem() {
  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("lenis");

    const lenis = new Lenis({
      duration: 1.35,
      lerp: 0.075,
      wheelMultiplier: 0.72,
      touchMultiplier: 0.85,
      smoothWheel: true,
      autoRaf: false,
      wrapper: window,
      content: document.documentElement,
    });

    const nav = document.querySelector<HTMLElement>("nav");
    html.style.setProperty("--header-shift", "0px");
    html.style.setProperty("--hero-progress", "0");
    html.style.setProperty("--hero-blur", "0px");
    html.style.setProperty("--hero-frost", "0px");
    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);

      const scrolled = Math.max(0, lenis.scroll || 0);
      const menuOpen = document.body.dataset.menuOpen === "true";
      const limit = (nav?.offsetHeight || 80) + 24;
      const shift = menuOpen ? 0 : -Math.min(scrolled, limit);
      html.style.setProperty("--header-shift", `${shift}px`);
      if (nav) nav.style.pointerEvents = shift <= -limit + 1 ? "none" : "";

      const hero = document.querySelector<HTMLElement>(".hero-banner");
      if (hero) {
        const p = pinProgress(hero);
        const ease = p * p;
        html.style.setProperty("--hero-progress", p.toFixed(4));
        html.style.setProperty("--hero-blur", `${(ease * 42).toFixed(2)}px`);
        html.style.setProperty("--hero-frost", `${(ease * 20).toFixed(2)}px`);
      }

      document.querySelectorAll<HTMLElement>("[data-scroll-speed]").forEach((el) => {
        const speed = parseOffset(el.dataset.scrollSpeed);
        const from = parseOffset(el.dataset.scrollFrom || "0");
        const progress = pinProgress(el);
        el.style.transform = `translate3d(0, ${toCss(from.n + progress * speed.n, speed.unit || from.unit)}, 0)`;
      });
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      html.classList.remove("lenis");
      html.style.removeProperty("--header-shift");
      html.style.removeProperty("--hero-progress");
      html.style.removeProperty("--hero-blur");
      html.style.removeProperty("--hero-frost");
    };
  }, []);

  return null;
}
