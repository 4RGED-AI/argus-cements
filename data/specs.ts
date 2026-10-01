/**
 * Specs page (/prices, the nav "Specs" button). PLACEHOLDER COPY drawn from
 * the Argus Future Concrete deck ("Other products" and Geopolycrete slides);
 * values marked "To be confirmed" are to be replaced with final data sheets.
 * Product slugs and titles match `trips` in data/site.ts.
 */

export type SpecRow = { label: string; value: string };

export const specsPage = {
  eyebrow: "Specs",
  title: "Product Specifications",
  intro: [
    "Draft specifications for the Argus Future Concrete product range, made with Geopolycrete.",
    "Need a full data sheet or test reports for a project? Send us an enquiry and our team will share them.",
  ],
  common: {
    label: "Geopolycrete at a glance",
    rows: [
      { label: "Binder", value: "Alkali activated inorganic binder (Geopolycrete)" },
      { label: "Water, clinker, additives", value: "None" },
      { label: "CO₂ & water", value: "Under 20% of conventional concrete" },
      { label: "Construction speed", value: "Rapid setting, up to 10x faster" },
      { label: "Raw materials", value: "Industrial waste: fly ash, GGBS, slags, quarry dust, red mud and more" },
      { label: "Labour", value: "No special skilled labour needed" },
    ] as SpecRow[],
  },
  products: [
    {
      slug: "portland-cement",
      title: "Sea Walls & Revetments",
      rows: [
        { label: "Elements", value: "Revetments, bulkheads, jetties, groins and sea walls" },
        { label: "Purpose", value: "Slow down coastal erosion" },
        { label: "Supply", value: "Precast units or cast in place" },
        { label: "Compressive strength", value: "To be confirmed" },
        { label: "Standard", value: "To be confirmed" },
      ],
    },
    {
      slug: "rapid-hardening",
      title: "Tetrapods & Dolos",
      rows: [
        { label: "Elements", value: "Tetrapods and dolos armour units" },
        { label: "Purpose", value: "Coastal armour and breakwaters" },
        { label: "Supply", value: "Precast units" },
        { label: "Unit sizes", value: "To be confirmed" },
        { label: "Standard", value: "To be confirmed" },
      ],
    },
    {
      slug: "sulphate-resistant",
      title: "Ports & Harbours",
      rows: [
        { label: "Elements", value: "Port, harbour and marina structures, jetties" },
        { label: "Purpose", value: "Increased access and mooring sites" },
        { label: "Exposure", value: "Marine and saline environments" },
        { label: "Compressive strength", value: "To be confirmed" },
        { label: "Standard", value: "To be confirmed" },
      ],
    },
    {
      slug: "blended-ppc",
      title: "Bridges & Causeways",
      rows: [
        { label: "Elements", value: "Bridges, causeways and boat ramps" },
        { label: "Purpose", value: "Increased access across water" },
        { label: "Supply", value: "Precast or cast in place" },
        { label: "Compressive strength", value: "To be confirmed" },
        { label: "Standard", value: "To be confirmed" },
      ],
    },
    {
      slug: "white-cement",
      title: "Power Poles & Pipes",
      rows: [
        { label: "Elements", value: "Power poles and storm water pipes" },
        { label: "Purpose", value: "Support coastal divisions and drainage" },
        { label: "Supply", value: "Precast" },
        { label: "Sizes", value: "To be confirmed" },
        { label: "Standard", value: "To be confirmed" },
      ],
    },
    {
      slug: "ready-mix",
      title: "Shoreline Protection",
      rows: [
        { label: "Elements", value: "Dykes, levees, dolos and floating structures" },
        { label: "Purpose", value: "Shoreline protection" },
        { label: "Supply", value: "Precast units or cast in place" },
        { label: "Compressive strength", value: "To be confirmed" },
        { label: "Standard", value: "To be confirmed" },
      ],
    },
  ] as { slug: string; title: string; rows: SpecRow[] }[],
  cta: { label: "Request a data sheet", href: "/enquire" },
  note: "Final values, standards and test reports to be confirmed.",
};
