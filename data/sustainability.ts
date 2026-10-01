/**
 * Sustainability page (/about/sustainability).
 *
 * Everything under a `fromDeck` comment is taken word for word from the Argus
 * Future Concrete pitch deck (slide numbers noted). Items under `placeholder`
 * are NOT from the deck and must be replaced with final copy. No figures here
 * are invented: each number is quoted from the slide it appears on.
 */
export const sustainability = {
  eyebrow: "About · Sustainability",

  // fromDeck: slide 1.
  hero: {
    title: "Making sustainable buildings",
    pillars: [
      "Award winning",
      "Rapid (10x faster)",
      "Green (<20% CO2 & water)",
      "Unyielding (strong lasting)",
      "Sustainable (waste to wealth)",
    ],
  },

  // fromDeck: slide 2 (figure, text and photo).
  emissions: {
    value: "7%",
    label: "Global CO2 emissions from Portland cement production",
    note: "(excluding supply chain, storage, transport, construction energy)",
    image: { src: "/images/sustainability/emissions.jpg", alt: "Smoke rising from an industrial plant at dawn" },
    credit: "Photo: TR STOK, Shutterstock licence (as used in the deck)",
  },

  // fromDeck: slide 3 (words and both photos).
  converts: {
    before: {
      label: "Future Concrete converts this",
      image: { src: "/images/sustainability/waste.jpg", width: 2000, height: 1333, alt: "Trucks tipping industrial waste onto a landfill" },
    },
    after: {
      label: "into this",
      image: { src: "/images/sustainability/green-city.jpg", width: 1024, height: 683, alt: "Illustration of a green city street with trees, a canal and planted balconies" },
    },
  },

  // fromDeck: slide 6, the points about the environment (verbatim).
  benefits: {
    label: "Green (<20% CO2 & water)",
    title: "Argus Geopolycrete (Future concrete)",
    points: [
      "Alkali activated inorganic binders",
      "No water, clinker, additives",
      "Lower CO2 emissions",
      "Utilizes and neutralizes toxic industrial waste",
      "Higher strength, highest green quotient",
    ],
  },

  // fromDeck: slide 9, India's first 100% Geopolycrete building (verbatim).
  building: {
    label: "Green building in a remote location",
    title: "India’s first 100% Geopolycrete building",
    href: "/our-work/geopolycrete-building",
    linkLabel: "See the project",
    figures: [
      { value: "95 Tons", label: "of Waste material renewed" },
      { value: "25,000 Liters", label: "of water saved" },
      { value: "67 Tons", label: "CO2 reduction" },
      { value: "52 Tons", label: "portland cement not used" },
      { value: "10%", label: "lesser steel used" },
      { value: "850 Sq M", label: "of plastering saved" },
    ],
  },

  // fromDeck: slide 7 (verbatim).
  waste: {
    label: "Utilizes and neutralizes toxic industrial waste",
    title: "Industrial waste streams",
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

  // Headings fromDeck (slides 8 and 1); titles and lines fromDeck (slides 11, 16 and 13). Photos and links come
  // from data/featuredWork.ts by slug, so they match the Featured Work pages.
  projects: {
    label: "Some of our work",
    title: "Sustainable (waste to wealth)",
    items: [
      { slug: "red-mud-road", title: "Road made with bauxite residue (red mud)", line: "" },
      { slug: "fly-ash-road", title: "India’s first fly ash Future Concrete road", line: "National Thermal Power Co" },
      { slug: "biorocks", title: "Biorocks with Future Concrete", line: "Alkaline - tested to accelerate marine life/ coral growth" },
    ],
  },

  // fromDeck: slide 5 award graphic text (same building as above); trophies cropped from that slide.
  award: {
    label: "Award winning",
    body: "Awarded The most Innovative and Useful project of the year 2022 by Indian Green Building council.",
    image: {
      src: "/images/foundation/award.jpg",
      width: 560,
      height: 640,
      alt: "The two CII awards won by Argus Concrete Solutions, Chennai",
    },
  },

  // fromDeck: slide 5, "Who we are." (verbatim).
  whoWeAre: {
    title: "Who we are.",
    points: [
      "Established in Chennai in 1975 by Dr RV Ramani as a manufacturer of custom built process equipment pilot research",
      "Dr Ramani became widely renowned for practical applications of R&D",
      "Dr Ramani helped India’s largest Silicate manufacturer as a technical director, and extensively refined their processes",
      "Argus future concrete was born out of research into inorganic polymers and has been recognized as the practical and implemented solution using polymers by the Geopolymer institute, France",
      "In 2020, during the pandemic, Argus constructed India’s first 5000 sq ft residential building with farm labor, no water, bricks, additives and cement, saving 65 tons of CO2 emissions in the process",
      "Argus won multiple Greenco awards in the subsequent year",
    ],
  },

  // PLACEHOLDER: not from the deck. Replace with final copy.
  placeholder: {
    label: "Placeholder",
    title: "Our sustainability commitments",
    body: [
    ],
  },

  cta: {
    label: "Work with us",
    title: "Argus Future Concrete",
    primary: { label: "Enquire now", href: "/enquire" },
    secondary: { label: "About Argus", href: "/about/foundation" },
  },
};
