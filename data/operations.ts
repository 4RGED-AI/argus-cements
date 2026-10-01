/**
 * Operations pages (/antarctica/<slug>, the "Operations" menu): the sites and
 * logistics behind Argus Future Concrete. Rendered by
 * components/OperationsPage.tsx in the same layout as the plant pages.
 *
 * Photos (public/images/ops-*.jpg, cropped 1600x1200):
 * - ridge-quarry     Unsplash photo-1523848309072-c199db53f137 (excavators at a mine)
 * - coastal-berth    Unsplash photo-1764082261579-09d3f61561b3 (container ship and cranes, Hamburg)
 * - city-batch-plant Unsplash photo-1764685849160-e2bc5b07d15d (crew by a mixer truck)
 * - kiln-hall        Pexels 37512426 (inside an industrial kiln)
 * - quality-lab      Unsplash photo-1766297248071-dfa7a5bc9b87 (scientist checking a sample)
 * - fleet-rail       Unsplash photo-1761386257822-858970983a89 (freight wagons at a station)
 * - behind-the-works Unsplash photo-1654461339694-128902c5c075 (bucket-wheel excavator)
 *
 * V69 detail-block photos (public/images/ops-sub-*.jpg, cropped 1200x900):
 * - quarry-haul Unsplash photo-1751054631354-a42bd7609d75; berth-tetrapods Unsplash photo-1756955581562-efd3ef3b3e14
 * - batching-silos Pexels 12032964; curing-yard Pexels 35678263; lab-testing Pexels 3861442
 * - fleet-mixer Pexels 10068081; site-crews Pexels 38043248
 */
export type OperationLink = { href: string; label: string };

export type Operation = {
  slug: string;
  title: string;
  group: "Sites" | "Logistics";
  excerpt: string;
  location: string;
  image: { src: string; alt: string };
  points: { label: string; title: string; lead?: string; items: string[] };
  chips: { label: string; items: string[]; image?: { src: string; alt: string } };
};

export const operationsCopy = {
  eyebrow: "Operations",
  indexTitle: "Operations",
  indexLead:
    "From the raw material to your pour: the quarry, batching, curing, testing and logistics behind Argus Future Concrete made with Geopolycrete.",
  more: {
    label: "More about Argus",
    items: [
      { href: "/antarctica", label: "All operations" },
      { href: "/about/foundation", label: "Foundation" },
      { href: "/our-work", label: "Our work" },
    ] as OperationLink[],
  },
};

export const operations: Operation[] = [
  {
    slug: "polar-plateau",
    title: "The Ridge Quarry",
    group: "Sites",
    excerpt:
      "Where our aggregates start: graded stone and fines, plus the industrial by-products that replace a large share of conventional cement in Geopolycrete.",
    location: "Aggregates and raw materials",
    image: { src: "/images/ops-ridge-quarry.jpg", alt: "Excavators and haul trucks working a quarry face" },
    points: {
      label: "Raw materials",
      title: "Waste to wealth, from the first load",
      lead: "Geopolycrete is built on materials other industries throw away, so the quarry is only part of the story.",
      items: [
        "Crushed and graded aggregates for precast and cast-in-place work",
        "Fly ash, slag and other industrial by-products sourced as binders",
        "Every stockpile sampled and logged before it reaches the batch plant",
        "Dust control and water recycling on site",
      ],
    },
    chips: { label: "Supplied to", items: ["Precast works", "City Batch Plant", "Coastal projects", "Road works"], image: { src: "/images/ops-sub-quarry-haul.jpg", alt: "Loaded dump truck hauling gravel across a quarry floor" } },
  },
  {
    slug: "fuel-depot",
    title: "Coastal Berth",
    group: "Sites",
    excerpt:
      "Our marine gateway for tetrapods, coastal armour units and bulk material, loaded straight from the yard to the vessel.",
    location: "Marine loading and dispatch",
    image: { src: "/images/ops-coastal-berth.jpg", alt: "Container ship moored under quay cranes" },
    points: {
      label: "Marine logistics",
      title: "Built for the coast",
      lead: "Heavy precast for breakwaters and shoreline protection moves best by sea.",
      items: [
        "Tetrapods, dolos and armour units staged by size and weight",
        "Quay-side lifting for large precast elements",
        "Bulk binders received and stored under cover",
        "Loads scheduled with the project's placement sequence",
      ],
    },
    chips: { label: "Handles", items: ["Tetrapods & dolos", "Coastal armor", "Ports & harbours", "Bulk binders"], image: { src: "/images/ops-sub-berth-tetrapods.jpg", alt: "Concrete tetrapods stacked along a harbour with a crane behind" } },
  },
  {
    slug: "atka-penguin-colony",
    title: "City Batch Plant",
    group: "Sites",
    excerpt:
      "Ready-mixed Geopolycrete for city sites, batched to the mix design and delivered on schedule for the pour.",
    location: "Ready-mix for urban projects",
    image: { src: "/images/ops-city-batch-plant.jpg", alt: "Site crew beside a concrete mixer truck in the city" },
    points: {
      label: "Batching",
      title: "The right mix, on time",
      lead: "Up to 10x faster construction depends on concrete that arrives ready and consistent.",
      items: [
        "Computer-controlled batching to each approved mix design",
        "Less than 20% of the CO2 and water of conventional concrete",
        "Delivery tickets carry the batch record for every load",
        "Night pours and staged deliveries for busy city sites",
      ],
    },
    chips: { label: "Mixes for", items: ["Buildings", "Bridges & causeways", "Road repair", "Shotcreting"], image: { src: "/images/ops-sub-batching-silos.jpg", alt: "Concrete batching plant with silos, stockpiles and mixer trucks from above" } },
  },
  {
    slug: "wolfs-fang-runway-mountains",
    title: "The Kiln Hall",
    group: "Sites",
    excerpt:
      "Where binders are prepared and precast elements are cured under controlled heat, so they reach strength quickly and reliably.",
    location: "Binder preparation and curing",
    image: { src: "/images/ops-kiln-hall.jpg", alt: "Glowing heat inside an industrial kiln" },
    points: {
      label: "Heat and curing",
      title: "Strength without the wait",
      lead: "Controlled curing lets precast leave the yard sooner, without compromising durability.",
      items: [
        "Low-temperature curing for Geopolycrete precast",
        "Temperature and humidity logged for each curing cycle",
        "Far lower energy use than a conventional cement kiln",
        "Elements released only after strength checks",
      ],
    },
    chips: { label: "Cures", items: ["Power poles & pipes", "Precast walls", "Perimeter fencing", "Tiles & panels"], image: { src: "/images/ops-sub-curing-yard.jpg", alt: "Rows of precast concrete pipes curing in a manufacturing yard, seen from above" } },
  },
  {
    slug: "schirmacher-oasis",
    title: "The Quality Lab",
    group: "Sites",
    excerpt:
      "Every mix and every batch is tested here, from raw materials to finished precast, against the agreed specification.",
    location: "Testing and certification",
    image: { src: "/images/ops-quality-lab.jpg", alt: "Lab technician examining a material sample" },
    points: {
      label: "Testing",
      title: "Proof in every batch",
      lead: "The same research culture that produced Geopolycrete checks every load that leaves our sites.",
      items: [
        "Compressive strength testing at agreed ages",
        "Raw material checks for binders and aggregates",
        "Durability tests for marine and chemically aggressive exposure",
        "Fire testing and test reports for project submittals",
      ],
    },
    chips: { label: "Reports for", items: ["Strength", "Durability", "Fire performance", "Mix approval"], image: { src: "/images/ops-sub-lab-testing.jpg", alt: "Technician testing a sample on laboratory equipment" } },
  },
  {
    slug: "direct-flights-to-antarctica",
    title: "Fleet & Rail",
    group: "Logistics",
    excerpt:
      "Mixer trucks, flatbeds and rail wagons that move binders, aggregates and precast between our sites and yours.",
    location: "Road and rail logistics",
    image: { src: "/images/ops-fleet-rail.jpg", alt: "Freight wagons lined up at a rail station" },
    points: {
      label: "Logistics",
      title: "One chain, one ticket",
      lead: "Road for the last mile, rail for the long haul.",
      items: [
        "Mixer trucks for ready-mix deliveries",
        "Flatbeds and cranes for precast elements",
        "Rail wagons for bulk binders and aggregates",
        "Live dispatch so the site knows when each load arrives",
      ],
    },
    chips: { label: "Moves", items: ["Ready-mix", "Precast", "Bulk binders", "Aggregates"], image: { src: "/images/ops-sub-fleet-mixer.jpg", alt: "Transit mixer truck on site with a crew member alongside" } },
  },
  {
    slug: "behind-the-scenes",
    title: "Behind the Works",
    group: "Logistics",
    excerpt:
      "The people, planning and machinery that keep Argus sites running, from the first survey to the final delivery.",
    location: "Planning and site operations",
    image: { src: "/images/ops-behind-the-works.jpg", alt: "Bucket-wheel excavator at an open works" },
    points: {
      label: "Our teams",
      title: "Engineering since 1975",
      lead: "Argus started in Chennai building process equipment; that hands-on engineering still runs every site.",
      items: [
        "Planning and scheduling across quarry, plant and yard",
        "Maintenance crews for plant and fleet",
        "Site safety and environmental monitoring",
        "Support for designers and contractors on mix selection",
      ],
    },
    chips: { label: "Teams", items: ["Planning", "Maintenance", "Safety", "Technical support"], image: { src: "/images/ops-sub-site-crews.jpg", alt: "Site crew in yellow hard hats at a briefing" } },
  },
];

/**
 * V70: one photo per detail-block item (the chips), keyed by the item label.
 * public/images/ops-item-*.jpg, 800x600. Repeated items share one image.
 * Sources: site photos (products/, plants/, featured-work/) for product items;
 * Pexels 12032964 (batch plant), 30062298 (binders), 15431625 (tiles & panels),
 * 3861949 (mix approval), 12032961 (ready-mix), 13824693 (aggregates),
 * 36574302 (planning), 11354898 (maintenance), 9258892 (safety),
 * 8482865 (technical support); Wikimedia Commons "Concrete Compression
 * Testing" (public domain) for strength.
 */
const item = (slug: string, alt: string) => ({ src: `/images/ops-item-${slug}.jpg`, alt });

export const operationItemImages: Record<string, { src: string; alt: string }> = {
  "Precast works": item("precast", "Precast concrete works"),
  Precast: item("precast", "Precast concrete works"),
  "City Batch Plant": item("batch-plant", "Concrete batching plant from above"),
  "Coastal projects": item("coastal-projects", "Coastal road along a protected shoreline"),
  "Road works": item("road-works", "Rollers compacting a new road"),
  "Tetrapods & dolos": item("tetrapods-dolos", "Concrete tetrapods lifted onto a barge"),
  "Coastal armor": item("coastal-armor", "Concrete armour units along a breakwater"),
  "Ports & harbours": item("ports-harbours", "Container port and quays from above"),
  "Bulk binders": item("bulk-binders", "Binder storage silos"),
  Buildings: item("buildings", "Building under construction with Geopolycrete"),
  "Bridges & causeways": item("bridges-causeways", "Causeway crossing the sea"),
  "Road repair": item("road-repair-v2", "Workers patching a road surface"), // V78: Pexels 6018652 (replaced the product-box render)
  Shotcreting: item("shotcreting", "Shotcrete being sprayed"),
  "Power poles & pipes": item("poles-pipes", "Large precast concrete pipes on site"),
  "Precast walls": item("precast-walls", "Precast wall panels being lifted"),
  "Perimeter fencing": item("perimeter-fencing", "Precast perimeter fence panel being installed"),
  "Tiles & panels": item("tiles-panels", "Stack of precast concrete panels"),
  Strength: item("strength", "Concrete cylinder under compression testing"),
  Durability: item("durability", "Sea wall standing up to waves"),
  "Fire performance": item("fire-performance", "Flames on a hillside, the fire exposure Geopolycrete is tested for"),
  "Mix approval": item("mix-approval", "Technician testing a mix sample"),
  "Ready-mix": item("ready-mix", "Transit mixer truck from above"),
  Aggregates: item("aggregates", "Gravel stockpile with a shovel"),
  Planning: item("planning", "Team in hard hats reviewing a plan on a tablet"),
  Maintenance: item("maintenance", "Worker maintaining heavy equipment"),
  Safety: item("safety", "Site worker in a hard hat and safety vest"),
  "Technical support": item("technical-support", "Engineers reviewing drawings on a laptop"),
};
