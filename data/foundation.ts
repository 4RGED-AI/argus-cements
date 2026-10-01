/**
 * Argus Aggregates page (/about/foundation; the nav and footer link it as
 * "Argus Aggregates", the group's sister company for stone, sand and quarry
 * feed).
 *
 * V75: this page used to repeat the Future Concrete deck copy (Who we are,
 * key figures, Geopolycrete mission, industrial waste streams and the IGBC
 * award) that already appears on the Sustainability and plant pages. It now
 * carries aggregates-specific copy. No figures or certifications are claimed.
 * Photos: Pexels 32129141 (conveyors and stockpiles), Pexels 9891089 (graded
 * stone), saved as public/images/foundation/aggregates-*.jpg.
 */
export const foundation = {
  eyebrow: "About · Argus Aggregates",

  whoWeAre: {
    title: "Argus Aggregates",
    points: [
      "Argus Aggregates is the Argus group’s sister company for stone, sand and quarry feed",
      "It supplies graded aggregates to the group’s precast works and batch plants, and to outside contractors",
      "Crushed stone, manufactured sand and fines are produced and graded for concrete, precast and road work",
      "Every stockpile is sampled and logged before it is dispatched",
      "Quarry dust and fines are put to use, including as raw material for Argus Geopolycrete",
      "Dust control and water recycling are part of day-to-day work on site",
    ],
  },

  // Product range at a glance (rendered in the large figures row).
  facts: [
    { value: "Stone", label: "Crushed and graded coarse aggregates" },
    { value: "Sand", label: "Manufactured sand for concrete and plaster" },
    { value: "Fines", label: "Quarry dust and fines, reused wherever possible" },
    { value: "1975", label: "Part of the Argus group, founded in Chennai" },
  ],

  geopolycrete: {
    label: "What we supply",
    title: "Aggregates for every pour",
    points: [
      "Coarse aggregates in standard sizes for concrete and precast",
      "Manufactured sand",
      "Quarry dust and fines",
      "Graded material for road bases and sub-bases",
      "Feed for the Argus precast works and batch plants",
      "Bulk supply to contractors and project sites",
    ],
    image: {
      src: "/images/foundation/aggregates-conveyors.jpg",
      width: 2128,
      height: 1197,
      alt: "Conveyors feeding sand and stone stockpiles, seen from above",
      caption: "Conveyors feeding graded stockpiles",
    },
  },

  waste: {
    label: "Where it goes",
    title: "Who we supply",
    items: [
      "Precast works",
      "Batch plants",
      "Ready-mix",
      "Road works",
      "Coastal projects",
      "Building sites",
      "Geopolycrete production",
    ],
  },

  award: {
    label: "Quality",
    title: "Sampled, graded, logged",
    body: "Each stockpile is sampled and graded before dispatch, so every load matches what the mix design calls for. Grading records travel with the order.",
    image: {
      src: "/images/foundation/aggregates-graded-stone.jpg",
      width: 560,
      height: 640,
      alt: "Close-up of graded stone aggregate",
    },
  },

  // Not rendered (section commented out in V68).
  placeholder: {
    label: "Placeholder",
    title: "The Argus group",
    body: [
    ],
  },

  cta: {
    label: "Work with us",
    title: "Order aggregates from Argus",
    primary: { label: "Enquire now", href: "/enquire" },
    secondary: { label: "Meet our founder", href: "/about/founders" },
  },
};
