/**
 * Founder page (/about/founders).
 *
 * PLACEHOLDER CONTENT: everything below is draft copy based on the public
 * outline of the company (Argus group, Chennai, founded in 1975 by
 * Dr R V Ramani, makers of Geopolycrete). Neel will supply the real text,
 * dates and photos; replace the values here and the page updates.
 *
 * FOUNDER PHOTO: there is no real photo of Dr R V Ramani yet, so `portrait`
 * points at a neutral placeholder (/public/images/founder/founder.jpg, a plain
 * generic silhouette, not a photo of anyone) with a "Founder photo to come"
 * label. When the real photo arrives, save it over founder.jpg (portrait
 * orientation, 4:5, about 1200x1500) or point `src` at the new file, and set
 * `isPlaceholder` to false to hide the label.
 */

export const founder = {
  portrait: {
    src: "/images/founder/founder.jpg",
    alt: "Photo of Dr R V Ramani",
    isPlaceholder: true,
    placeholderLabel: "Founder photo to come",
  },
  eyebrow: "About · Our founder",
  name: "Dr R V Ramani",
  role: "Founder, Argus group",
  intro: {
    label: "The founder",
    title: "Building in Chennai since 1975",
    body: [
      "Dr R V Ramani founded the Argus group in Chennai in 1975, with a simple idea: build well, and build to last.",
      "Over five decades the group grew from a local construction practice into a materials business, and led the development of Geopolycrete, a cement-free geopolymer concrete made from industrial by-products.",
    ],
  },
  story: {
    label: "The story",
    title: "Five decades, one idea",
    items: [
      { year: "1975", title: "Argus is founded", body: "Dr R V Ramani starts the Argus group in Chennai." },
      { year: "1980s", title: "Growing on site", body: "The group takes on larger civil and building work across Tamil Nadu." },
      { year: "2000s", title: "Research into new binders", body: "Work begins on geopolymer concretes that replace cement with fly ash and slag." },
      { year: "2010s", title: "Geopolycrete", body: "Geopolycrete moves from the lab to real projects: buildings, roads and marine structures." },
      { year: "Today", title: "Future Concrete", body: "Argus supplies lower-carbon concrete for roads, coastal protection and precast." },
    ],
  },
  quote: {
    text: "Concrete should outlast the people who pour it. Our job is to make it stronger, cleaner and better for the places we build.",
    name: "Dr R V Ramani",
    role: "Founder, Argus group",
  },
  cta: {
    label: "Work with us",
    title: "Talk to the team behind Geopolycrete",
    primary: { label: "Enquire now", href: "/enquire" },
    secondary: { label: "See our work", href: "/our-work" },
  },
};
