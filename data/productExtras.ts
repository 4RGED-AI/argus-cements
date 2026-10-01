/**
 * Extra content for each product detail page (/itineraries/<slug>, the pages
 * the homepage card carousel opens). Rendered below the existing page content
 * by components/ProductExtras.tsx; the existing product copy in data/site.ts
 * is untouched.
 *
 * PLACEHOLDER COPY: every spec, application, note and FAQ below is draft text
 * to be replaced with the final product information. Keys are the product
 * slugs from data/site.ts (`trips`). A slug without an entry shows nothing.
 */

export type ProductExtra = {
  specs: { label: string; value: string }[];
  applications: string[];
  note: { title: string; body: string };
  faq: { q: string; a: string }[];
  /** V74: closing photo above the footer (public/images/product-end-*.jpg, 1600x900). */
  endImage?: { src: string; alt: string };
  /** V79: second closing photo, shown beside the first (stacked on phones). */
  endImage2?: { src: string; alt: string };
};

export const productExtrasLabels = {
  specs: "Key specs",
  applications: "Applications",
  note: "Performance & sustainability",
  faq: "FAQ",
};

export const productExtras: Record<string, ProductExtra> = {
  "portland-cement": {
    endImage: { src: "/images/product-end-sea-walls.jpg", alt: "Storm waves breaking against a sea wall" }, // Pexels 31448720
    endImage2: { src: "/images/product-end-portland-cement-2.jpg", alt: "A wave breaking over a curved sea wall" }, // Pexels 10744600
    specs: [
      { label: "Grades", value: "OPC 43 and OPC 53" },
      { label: "Standard", value: "IS 269" },
      { label: "28-day strength", value: "43 / 53 MPa minimum" },
      { label: "Pack sizes", value: "50 kg bags, bulk tanker" },
    ],
    applications: ["Residential and commercial buildings", "Beams, columns and slabs", "Precast blocks and pavers", "General plastering and masonry"],
    note: {
      title: "Consistent strength, batch after batch",
      body: "Each batch is tested at the plant for fineness, setting time and strength before dispatch. Mill certificates are available on request.",
    },
    faq: [
      { q: "Which grade should I choose?", a: "OPC 43 suits most general works; OPC 53 is for higher-strength structural concrete and precast." },
      { q: "How long can bags be stored?", a: "Use within three months of the packing date, stored dry and off the floor." },
      { q: "Do you deliver in bulk?", a: "Yes. Bulk tanker deliveries are available for batch plants and large sites." },
    ],
  },
  "rapid-hardening": {
    endImage: { src: "/images/product-end-tetrapods.jpg", alt: "Concrete tetrapods protecting a coastline, seen from above" }, // Pexels 13001855
    endImage2: { src: "/images/product-end-rapid-hardening-2.jpg", alt: "Concrete tetrapods along a harbour breakwater with a lighthouse" }, // Unsplash photo-1777018711852-2e53a39a5279
    specs: [
      { label: "Type", value: "Rapid hardening cement (RHC)" },
      { label: "Standard", value: "IS 8041" },
      { label: "3-day strength", value: "Close to OPC 7-day strength" },
      { label: "Pack sizes", value: "50 kg bags" },
    ],
    applications: ["Fast-track construction", "Road and pavement repairs", "Precast with quick demoulding", "Cold-weather concreting"],
    note: {
      title: "Earlier formwork striking",
      body: "Higher early strength lets formwork come off sooner and sites move to the next pour faster, without changing the mix design approach.",
    },
    faq: [
      { q: "Is final strength lower than OPC?", a: "No. RHC gains strength faster early on and reaches comparable long-term strength." },
      { q: "Can it be used for mass concrete?", a: "It is not recommended for mass pours because of its higher heat of hydration." },
      { q: "Does it need special curing?", a: "Standard curing practice applies; start curing as soon as the surface allows." },
    ],
  },
  "sulphate-resistant": {
    endImage: { src: "/images/product-end-ports.jpg", alt: "Quay cranes lining a container port" }, // Pexels 31382902
    endImage2: { src: "/images/product-end-sulphate-resistant-2.jpg", alt: "Container terminal with quay cranes and a ship at berth" }, // Pexels 36652836
    specs: [
      { label: "Type", value: "Sulphate resisting cement (SRC)" },
      { label: "Standard", value: "IS 12330" },
      { label: "C3A content", value: "Low, below 5%" },
      { label: "Pack sizes", value: "50 kg bags, bulk tanker" },
    ],
    applications: ["Marine and coastal structures", "Foundations in sulphate-rich soil", "Sewage and effluent works", "Basements and retaining walls"],
    note: {
      title: "Built for aggressive ground",
      body: "Low tricalcium aluminate content limits sulphate attack, helping concrete keep its strength and surface in soil and water with high sulphate levels.",
    },
    faq: [
      { q: "When is SRC needed?", a: "When soil or groundwater tests show high sulphate levels, or for structures in contact with sea water." },
      { q: "Is it the same as marine-grade cement?", a: "It is one of the options for marine works; the right choice depends on the exposure class." },
      { q: "Can it be blended with fly ash?", a: "Yes, under an approved mix design." },
    ],
  },
  "blended-ppc": {
    endImage: { src: "/images/product-end-bridges.jpg", alt: "Long sea bridge on concrete piers" }, // Pexels 29141937
    endImage2: { src: "/images/product-end-blended-ppc-2.jpg", alt: "Long bridge crossing open water at dusk" }, // Pexels 29141941
    specs: [
      { label: "Type", value: "Portland pozzolana cement (PPC)" },
      { label: "Standard", value: "IS 1489" },
      { label: "Fly ash content", value: "15 to 35%" },
      { label: "Pack sizes", value: "50 kg bags" },
    ],
    applications: ["Mass concrete and rafts", "Dams, bridges and piers", "Plastering and masonry", "Residential construction"],
    note: {
      title: "Lower heat, lower carbon",
      body: "Replacing part of the clinker with fly ash reduces the heat of hydration and the embodied carbon of the concrete, while improving long-term durability.",
    },
    faq: [
      { q: "Does PPC gain strength more slowly?", a: "Early strength is a little lower than OPC, but long-term strength is comparable or higher." },
      { q: "Is PPC good for plastering?", a: "Yes. Its finer particles give a smooth, workable finish with fewer cracks." },
      { q: "How much carbon does it save?", a: "Figures depend on the blend; final numbers will be published with the product data sheet." },
    ],
  },
  "white-cement": {
    endImage: { src: "/images/product-end-white-cement-v2.jpg", alt: "Stacked precast concrete pipes in a storage yard" }, // Pexels 17375718 (V76: replaced wooden power poles)
    endImage2: { src: "/images/product-end-white-cement-2.jpg", alt: "Large precast concrete pipes laid out on site" }, // Pexels 12387207
    specs: [
      { label: "Type", value: "White Portland cement" },
      { label: "Whiteness", value: "High reflectance" },
      { label: "Standard", value: "IS 8042" },
      { label: "Pack sizes", value: "5 kg, 25 kg and 50 kg bags" },
    ],
    applications: ["Architectural and exposed concrete", "Terrazzo and tiles", "Decorative plasters and putty", "Coloured concrete with pigments"],
    note: {
      title: "A clean base for colour",
      body: "Low iron and manganese content gives a bright, even base that takes pigments predictably for architectural finishes.",
    },
    faq: [
      { q: "Is white cement as strong as grey?", a: "Yes. It meets structural strength requirements; it is chosen mainly for appearance." },
      { q: "Can it be coloured?", a: "Yes. Mineral pigments give consistent colours on a white base." },
      { q: "What sizes are available?", a: "Small packs for finishing work and 50 kg bags for larger pours." },
    ],
  },
  "ready-mix": {
    endImage: { src: "/images/product-end-shoreline.jpg", alt: "Rock breakwater stretching out to sea, seen from above" }, // Pexels 6921926
    endImage2: { src: "/images/product-end-ready-mix-2.jpg", alt: "Waves breaking on concrete armour units along the shore" }, // Pexels 9751592
    specs: [
      { label: "Grades", value: "M20 to M60" },
      { label: "Standard", value: "IS 4926" },
      { label: "Delivery", value: "Transit mixers from our batch plants" },
      { label: "Testing", value: "Cube tests for every batch" },
    ],
    applications: ["Slabs, columns and foundations", "High-rise and infrastructure", "Pumped and self-compacting mixes", "Industrial floors"],
    note: {
      title: "Designed mixes, delivered on time",
      body: "Mixes are designed for each project and batched under controlled conditions, with delivery scheduled around the pour.",
    },
    faq: [
      { q: "What is the minimum order?", a: "Minimum quantities vary by plant; contact the team for your site." },
      { q: "Can you pump the concrete?", a: "Yes. Pumping can be arranged with the delivery." },
      { q: "Do you supply special mixes?", a: "Yes, including high-strength, fibre-reinforced and lower-carbon mixes." },
    ],
  },
};
