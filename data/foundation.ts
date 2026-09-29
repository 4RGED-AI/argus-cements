/**
 * Foundation page (/about/foundation).
 *
 * Text marked `fromDeck` is taken word for word from the Argus Future Concrete
 * pitch deck (slide 5 "Who we are.", slide 6 "Argus Geopolycrete (Future
 * concrete)" and slide 7 "Industrial waste streams"). Anything under
 * `placeholder` is NOT from the deck and must be replaced with final copy.
 */
export const foundation = {
  eyebrow: "About · Foundation",

  // Deck slide 5, verbatim.
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

  // Key figures, drawn from deck slide 5.
  facts: [
    { value: "1975", label: "Established in Chennai by Dr RV Ramani" },
    { value: "5000 sq ft", label: "India’s first residential building of its kind, built in 2020 during the pandemic" },
    { value: "65 tons", label: "CO2 emissions saved on that building" },
    { value: "2022", label: "Most Innovative and Useful project of the year, Indian Green Building council" },
  ],

  // Deck slide 6, verbatim, with the slide's photo and caption.
  geopolycrete: {
    label: "Our mission",
    title: "Argus Geopolycrete (Future concrete)",
    points: [
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
    image: {
      src: "/images/foundation/ramani-davidovits.jpg",
      width: 2128,
      height: 1197,
      alt: "Dr Ramani in conversation with Prof Davidovits at the Geopolymer Institute, France",
      caption: "Dr Ramani with Prof Davidovits, at Geopolymer Institute, France",
    },
  },

  // Deck slide 7, verbatim.
  waste: {
    label: "What goes into Future Concrete",
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

  // Deck slide 5 (award graphic and its text). The image is the trophies cropped from the slide.
  award: {
    label: "Recognition",
    title: "India’s first 100% Geopolycrete building",
    body: "Awarded The most Innovative and Useful project of the year 2022 by Indian Green Building council.",
    image: {
      src: "/images/foundation/award.jpg",
      width: 560,
      height: 640,
      alt: "The two CII awards won by Argus Concrete Solutions, Chennai",
    },
  },

  // PLACEHOLDER: not from the deck. Replace with final copy.
  placeholder: {
    label: "Placeholder",
    title: "The Argus group",
    body: [
      "Placeholder: a short history of the Argus group in Chennai, from process equipment in 1975 to Geopolycrete today.",
      "Placeholder: group companies, facilities and the team, to be supplied.",
    ],
  },

  cta: {
    label: "Work with us",
    title: "Build with Argus Future Concrete",
    primary: { label: "Enquire now", href: "/enquire" },
    secondary: { label: "Meet our founder", href: "/about/founders" },
  },
};
