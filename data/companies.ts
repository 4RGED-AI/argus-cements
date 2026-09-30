/**
 * Home page globe banner: "Companies run/invested in" marquee.
 * Names in display order, exactly as supplied by Neel. An item with a `logo`
 * shows the logo in its chip; `showName` also shows the name next to it.
 * Logos live in public/images/companies/ (width/height = intrinsic size).
 * The chips are dark glass, so light versions are used (*-light.png: dark
 * text turned white, brand colours kept; originals kept alongside).
 */
export type CompanyLogo = { src: string; alt: string; width: number; height: number };
export type Company = { name: string; logo?: CompanyLogo; showName?: boolean };

export const companiesMarquee: { heading: string; items: Company[]; speed: number } = {
  heading: "Companies run/invested in",
  items: [
    {
      name: "Cardinality",
      logo: { src: "/images/companies/cardinality-light.png", alt: "Cardinality.ai", width: 2308, height: 440 },
    },
    {
      name: "Particle Black",
      logo: { src: "/images/companies/particle-black-light.png", alt: "Particle Black", width: 202, height: 30 },
    },
    {
      name: "4RGED",
      logo: { src: "/images/companies/4rged.png", alt: "4RGED", width: 127, height: 22 },
    },
    {
      name: "First Principles",
      logo: { src: "/images/companies/first-principles.svg", alt: "First Principles logo", width: 846, height: 800 },
      showName: true,
    },
  ],
  /** Marquee speed in px per second (kept constant at any width). */
  speed: 62,
};
