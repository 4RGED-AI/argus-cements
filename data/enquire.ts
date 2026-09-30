/**
 * Copy for the Enquire page (/enquire). Placeholder text for now: swap the
 * wording and the contact details below when the real ones are confirmed.
 * Product wording follows the "Other products" slide of the Argus deck.
 */
export const enquireTypes = ["Products", "Projects", "Partnerships", "Other"] as const;

export type EnquireType = (typeof enquireTypes)[number];

export const enquire = {
  eyebrow: "Enquire",
  title: "Build with Geopolycrete",
  intro: [
    "Tell us about your project. Whether it is a sea wall, a jetty, a causeway or a run of storm water pipes, our team will come back to you on how Argus Future Concrete can deliver it.",
    "Geopolycrete uses no clinker and no cement. It is rapid, green and unyielding, made from industrial waste such as fly ash and slag.",
  ],
  image: {
    src: "/images/enquire/breakwater.jpg",
    alt: "Aerial view of a rock-armoured breakwater reaching into clear blue sea",
    width: 2560,
    height: 1707,
  },
  form: {
    label: "Send an enquiry",
    title: "How can we help?",
    submit: "Send enquiry",
    note: "We only use these details to reply to your enquiry.",
    thanks: {
      title: "Thank you",
      body: "Thanks, we have your enquiry and will be in touch shortly.",
      again: "Send another enquiry",
    },
  },
  contact: {
    label: "Contact",
    title: "Argus Future Concrete",
    items: [
      { label: "Email", value: "To be confirmed" },
      { label: "Phone", value: "To be confirmed" },
      { label: "Office", value: "Address to be confirmed" },
      { label: "Hours", value: "To be confirmed" },
    ],
    topicsLabel: "We can help with",
    topics: [
      "Sea walls & revetments",
      "Tetrapods & dolos",
      "Ports, harbours & jetties",
      "Bridges & causeways",
      "Power poles & storm water pipes",
      "Shoreline protection",
    ],
  },
};
