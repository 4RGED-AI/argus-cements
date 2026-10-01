/**
 * Plant detail pages (/camps/<slug>). The card title, excerpt, coords and image
 * come from `camps` in data/site.ts (the home "Our Plants" cards); this file
 * adds the detail-page sections, keyed by the same slugs.
 *
 * Text under a `fromDeck` comment is word for word from the Argus Future
 * Concrete deck (slide numbers noted). Anything starting "Placeholder" is not
 * from the deck; Neel will send the real plant content.
 */
export type PlantLink = { href: string; label: string };
export type PlantImage = { src: string; width: number; height: number; caption: string; alt: string };

export type PlantDetail = {
  points: { label: string; title: string; lead?: string; items: string[] };
  figure?: PlantImage;
  gallery?: PlantImage[];
  chips?: { label: string; items: string[] };
  links: { label: string; items: PlantLink[] };
  placeholder: string[];
};

export const plantsCopy = {
  eyebrow: "Our Plants",
  cta: {
    label: "Work with us",
    title: "Argus Future Concrete",
    primary: { label: "Enquire now", href: "/enquire" },
    secondary: { label: "Our work", href: "/our-work" },
  },
};

export const plantDetails: Record<string, PlantDetail> = {
  "harbor-kiln": {
    // fromDeck: slide 5 "Who we are."
    points: {
      label: "Who we are.",
      title: "Chennai, 1975",
      items: [
        "Established in Chennai in 1975 by Dr RV Ramani as a manufacturer of custom built process equipment pilot research",
        "Dr Ramani became widely renowned for practical applications of R&D",
        "Dr Ramani helped India’s largest Silicate manufacturer as a technical director, and extensively refined their processes",
        "Argus won multiple Greenco awards in the subsequent year",
      ],
    },
    links: {
      label: "More about Argus",
      items: [
        { href: "/about/founders", label: "Our founder" },
        { href: "/about/foundation", label: "Foundation" },
      ],
    },
    placeholder: [
    ],
  },

  "ridge-works": {
    // fromDeck: slide 5 (lead), slide 6 (points, photo and caption), slide 7 (chips).
    points: {
      label: "Argus Geopolycrete (Future concrete)",
      title: "Research and development",
      lead: "Argus future concrete was born out of research into inorganic polymers and has been recognized as the practical and implemented solution using polymers by the Geopolymer institute, France",
      items: [
        "Alkali activated inorganic binders",
        "No water, clinker, additives",
        "No special skilled labor",
        "Lower construction time, faster setting",
        "Lower CO2 emissions",
        "Utilizes and neutralizes toxic industrial waste",
        "Higher strength, highest green quotient",
        "Saving in construction time",
        "Relatively very less capital investment",
      ],
    },
    figure: {
      src: "/images/foundation/ramani-davidovits.jpg",
      width: 2128,
      height: 1197,
      caption: "Dr Ramani with Prof Davidovits, at Geopolymer Institute, France",
      alt: "Dr Ramani in conversation with Prof Davidovits at the Geopolymer Institute, France",
    },
    chips: {
      label: "Industrial waste streams",
      items: [
        "Ferro slag",
        "Blast furnace slag",
        "Ferro nickel slag",
        "Ferrochrome slag",
        "Slag sand",
        "Copper slag",
        "Red mud lumps",
        "Fly ash",
        "Dried pond ash",
        "Boiler wood-ash",
        "Quarry dust",
        "Rice husk ash",
        "Lime sludge",
        "GGBS",
        "Demolition waste",
      ],
    },
    links: {
      label: "More about Argus",
      items: [
        { href: "/about/sustainability", label: "Sustainability" },
        { href: "/about/foundation", label: "Foundation" },
      ],
    },
    placeholder: [
    ],
  },

  "quarry-gate": {
    // fromDeck: product slide titles (slides 14, 15, 19, 20, 21) and slide 22 "Other products".
    points: {
      label: "Products",
      title: "Precast and marine products",
      items: [
        "Precast perimeter fencing",
        "Precast tiled walls",
        "Casted in place homes",
        "Instant road repair kits",
        "Tetrapods for coastal protection",
        "Coastal armor",
        "Rivetment, bulkhead, jetties, groins & sea walls (to slow down coastal erosion)",
        "Floating structures, dolos, dykes, leeves",
        "Ports, harbor, marinas, bridges, causeways & boat ramps (increased access or mooring sites)",
        "Power poles & storm water pipes (support coastal divisions)",
        "Shoreline protection",
      ],
    },
    // fromDeck: photos and slide titles (slides 14, 20, 21).
    gallery: [
      { src: "/images/plants/fencing.jpg", width: 810, height: 606, caption: "Precast perimeter fencing", alt: "A precast concrete fence panel being lifted into place" },
      { src: "/images/plants/tetrapods.jpg", width: 668, height: 512, caption: "Tetrapods for coastal protection", alt: "Rows of precast concrete tetrapods in a casting yard" },
      { src: "/images/plants/coastal-armor.jpg", width: 681, height: 450, caption: "Coastal armor", alt: "A crane placing precast coastal armor units from a barge" },
    ],
    links: {
      label: "See the projects",
      items: [
        { href: "/our-work/precast-perimeter-fencing", label: "Precast perimeter fencing" },
        { href: "/our-work/precast-walls-homes", label: "Precast tiled walls" },
        { href: "/our-work/tetrapods", label: "Tetrapods" },
        { href: "/our-work/coastal-armor", label: "Coastal armor" },
        { href: "/our-work/instant-road-repair-kits", label: "Instant road repair kits" },
      ],
    },
    placeholder: [
    ],
  },
};
