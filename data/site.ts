const img = (id: string, w = 2000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export type Trip = {
  slug: string;
  title: string;
  season: string;
  price: string;
  excerpt: string;
  image: string;
  tags: string[];
};

export const trips: Trip[] = [
  {
    slug: "portland-cement",
    title: "Sea Walls & Revetments",
    season: "General Works",
    price: "OPC 43 / 53",
    excerpt:
      "Revetments, bulkheads, groins and sea walls in Geopolycrete, to slow down coastal erosion. No clinker, no cement, made from industrial waste.",
    image: "/images/products/sea-walls.jpg",
    tags: ["Bulkheads", "Coastal Erosion"],
  },
  {
    slug: "rapid-hardening",
    title: "Tetrapods & Dolos",
    season: "Fast Track",
    price: "RHC Grade",
    excerpt:
      "Tetrapods and dolos for coastal protection, precast in Argus Future Concrete. Unyielding armor units with higher strength and lower CO2.",
    image: "/images/products/tetrapods-dolos.jpg",
    tags: ["Coastal Armor", "Breakwaters"],
  },
  {
    slug: "sulphate-resistant",
    title: "Ports & Harbours",
    season: "Marine & Soil",
    price: "SRC Grade",
    excerpt:
      "Ports, harbours, marinas and jetties in Geopolycrete, for increased access or mooring sites. Rapid to build, strong and lasting.",
    image: "/images/products/ports-harbours.jpg",
    tags: ["Marinas", "Jetties"],
  },
  {
    slug: "blended-ppc",
    title: "Bridges & Causeways",
    season: "Low Heat",
    price: "PPC Grade",
    excerpt:
      "Bridges, causeways and boat ramps in Argus Future Concrete. Faster setting and lower construction time, with no water, clinker or additives.",
    image: "/images/products/bridges-causeways.jpg",
    tags: ["Boat Ramps", "Causeways"],
  },
  {
    slug: "white-cement",
    title: "Power Poles & Pipes",
    season: "Architectural",
    price: "White OPC",
    excerpt:
      "Power poles and storm water pipes precast in Geopolycrete. Green (<20% CO2 & water), made with waste streams such as fly ash and slag.",
    image: "/images/products/poles-pipes.jpg",
    tags: ["Power Poles", "Storm Water Pipes"],
  },
  {
    slug: "ready-mix",
    title: "Shoreline Protection",
    season: "Batch Plant",
    price: "M20–M60",
    excerpt:
      "Dykes, levees and floating structures to support coastal divisions. Sustainable Geopolycrete that turns industrial waste to wealth.",
    image: "/images/products/shoreline.jpg",
    tags: ["Dykes & Levees", "Floating Structures"],
  },
];

export const hero = {
  image: img("1504307651254-35680f356dfd"),
  subtitle: "Our Core Grades",
  title: "OUR CEMENTS",
};

export const intro = {
  title: "Specify Your Grade",
  body: `Argus Cements supplies structural, marine, architectural, and ready-mix lines from three plants. Choose Portland for everyday frames, Rapid Hardening when the programme is tight, Sulphate Resistant for aggressive ground, or White Cement when the finish is the brief.

Every bag and every truck is batch-tested. Our technical desk helps you match grade, pour window, and site access before the first load leaves the gate.`,
};

export const home = {
  video: "/videos/hero.mp4",
  heroImage: img("1503387762-592deb58ef4e"),
  watchImage: img("1503387762-592deb58ef4e"),
  /** Home hero "Watch Film" card preview: portrait composition of the film's title frame (8s). */
  watchCardImage: "/videos/argus-film-thumb.jpg",
  tagline: "Kiln-fired cement for the jobs that have to stand",
  title: "Argus",
  /** Home section 2: deck slide 1 ("Argus Future Concrete"). */
  introEyebrow: "Making Sustainable Buildings",
  intro:
    "Award winning. Rapid (10x faster). Green (<20% CO₂ & water). Unyielding (strong, lasting). Sustainable (waste to wealth).",
  introImage: img("1517581177682-a085bb7ffb15"),
  /** Home section 3 banner: IGBC award trophies on a card over a natural concrete architecture photo (Unsplash photo-1625390711106). */
  seasonImage: "/images/igbc-award-v3.jpg",
  quoteImage: img("1503387762-592deb58ef4e"),
  globeImage: img("1486406146926-c627a92ad1ab", 2400),
  seasonTitle: "India’s First 100% Geopolycrete",
  seasonBody:
    "Building awarded the Most Innovative and Useful project of the year 2022 by the Indian Green Building Council.",
  founderQuote:
    "Cement is not a mystery brand. It is heat, chemistry, and the promise that the slab you signed last Tuesday still holds. That is the only reputation Argus is interested in.",
  founderName: "Helena Argus",
  founderRole: "Founder & Managing Director",
  ctaImage: img("1504307651254-35680f356dfd"),
  plantsTitle: "Our Roots",
  plantsEyebrow: "Future Concrete",
  plantsBody:
    "Making sustainable buildings. Argus Future Concrete uses alkali activated inorganic binders, with no water, clinker or additives, for lower CO2 emissions, and utilizes and neutralizes toxic industrial waste.",
  globeFromCoords: "23º 02' 12\" N 72º 34' 11\" E",
  globeFrom: "Quarry Gate",
  globeToCoords: "22º 48' 09\" N 69º 40' 21\" E",
  globeTo: "Harbor Kiln",
  globeTitle: "From Face to Frame",
  globeBody:
    "Stone leaves the ridge, clinker leaves the kiln, and certified loads reach your pour. Rail, road, and coastal berth — one chain, one ticket.",
  globeFromLabel: "",
  globeFromPlace: "",
  globeToLabel: "",
  globeToPlace: "",
  watchLabel: "Watch Film",
  /** Film played by the hero "Watch Film" button (components/HeroFilmPlayer.tsx). */
  film: {
    src: "/videos/argus-film.mp4",
    poster: "/videos/argus-film-poster.jpg",
    width: 1920,
    height: 1080,
    title: "Argus film: use of Geopolycrete in decarbonisation",
  },
};

export const camps = [
  {
    slug: "harbor-kiln",
    title: "Chennai",
    excerpt:
      "Established in Chennai in 1975 by Dr RV Ramani as a manufacturer of custom built process equipment pilot research.",
    coords: "[ Chennai · Est. 1975 ]",
    image: img("1558618666-fcd25c85cd64"),
  },
  {
    slug: "ridge-works",
    title: "Geopolycrete R&D",
    excerpt:
      "Argus future concrete was born out of research into inorganic polymers, recognized by the Geopolymer institute, France.",
    coords: "[ Location to come ]",
    image: img("1581092160562-40aa08e78837"),
  },
  {
    slug: "quarry-gate",
    title: "Precast Works",
    excerpt:
      "Precast perimeter fencing, precast tiled walls, tetrapods and coastal armor. Plant details to come.",
    coords: "[ Location to come ]",
    image: "/images/plants/precast.jpg",
  },
];

export const outro = {
  title: "Start specifying your next pour",
  button: " Get in touch",
  href: "/enquire",
  image: img("1541888946425-d81bb19240f5"),
};

export const howItWorks = {
  title: "How it works",
  bookHref: "/enquire",
  steps: [
    {
      title: "1. Consultation",
      body: "Tell us the grade, volume, and pour window. Our desk will match plant, mix, and access — or book a call with a technical manager, no obligation.",
    },
    {
      title: "2. Confirmation",
      body: "Once you lock volumes and dates, we issue a batch plan and hold silo stock. Credit terms and site tickets are confirmed before the first truck is booked.",
    },
    {
      title: "3. Planning",
      body: "We schedule kiln output, bagging, and fleet against your programme. Night pours, staged slabs, and remote sites get a written dispatch window, not a shrug.",
    },
    {
      title: "4. On-Boarding",
      body: "Method statements, mill certificates, and SDS land in your inbox. If you need a site trial or cube schedule, the lab sets it before we roll.",
    },
    {
      title: "5. Safety Briefing",
      body: "Drivers and plant crews run a gate briefing: PPE, washout, and access. Your site lead gets a named dispatcher for the life of the job.",
    },
    {
      title: "6. Dispatch",
      body: "Loads leave with a ticket you can file. We track the truck, confirm slump on arrival, and stay on the line until the last pour is signed.",
    },
  ],
};

export type NavLink = {
  href: string;
  label: string;
  image?: string;
  external?: boolean;
  excerpt?: string;
};

export type NavGroup = {
  title: string;
  links: NavLink[];
};

export type NavItem = {
  label: string;
  groups: NavGroup[];
};

export const nav: { left: NavItem[]; homeImage: string } = {
  homeImage: img("1504307651254-35680f356dfd"),
  left: [
    {
      label: "Products",
      groups: [
        {
          title: "Grades",
          links: [
            ...trips.map((t) => ({
              href: `/itineraries/${t.slug}`,
              label: t.title,
              image: t.image,
            })),
            { href: "/itineraries", label: "View All" },
          ],
        },
        {
          title: "Plants",
          links: [
            { href: "/camps/harbor-kiln", label: "Harbor Kiln", image: camps[0].image },
            { href: "/camps/ridge-works", label: "Ridge Works", image: camps[1].image },
            { href: "/camps/quarry-gate", label: "Quarry Gate", image: camps[2].image },
            { href: "/camps", label: "View All" },
          ],
        },
      ],
    },
    {
      label: "Operations",
      groups: [
        {
          title: "Logistics",
          links: [
            { href: "/antarctica/behind-the-scenes", label: "Behind the Works" },
            { href: "/antarctica/direct-flights-to-antarctica", label: "Fleet & Rail" },
          ],
        },
        {
          title: "Sites",
          links: [
            { href: "/antarctica/polar-plateau", label: "The Ridge Quarry" },
            { href: "/antarctica/fuel-depot", label: "Coastal Berth" },
            { href: "/antarctica/atka-penguin-colony", label: "City Batch Plant" },
            { href: "/antarctica/wolfs-fang-runway-mountains", label: "The Kiln Hall" },
            { href: "/antarctica/schirmacher-oasis", label: "The Quality Lab" },
            { href: "/antarctica", label: "View All" },
          ],
        },
      ],
    },
    {
      label: "About",
      groups: [
        {
          title: "Our Story",
          links: [
            { href: "/about/founders", label: "Founders" },
            { href: "/about/foundation", label: "Foundation" },
            { href: "/about/sustainability", label: "Sustainability" },
          ],
        },
        {
          title: "Group",
          links: [
            {
              href: "/about/foundation",
              label: "Argus Aggregates",
              excerpt: "Sister company for stone, sand, and quarry feed.",
            },
          ],
        },
      ],
    },
  ],
};

export const footer = {
  guests: [
    { href: "mailto:projects@arguscements.demo", label: "projects@arguscements.demo" },
    { href: "tel:+910000000000", label: "+91 00 0000 0000" },
    { href: "/enquire", label: "Schedule a call" },
  ],
  trade: [
    { href: "mailto:trade@arguscements.demo", label: "trade@arguscements.demo" },
    { href: "tel:+910000000001", label: "+91 00 0000 0001" },
  ],
  other: [
    { href: "mailto:press@arguscements.demo", label: "press@arguscements.demo" },
    { href: "mailto:careers@arguscements.demo", label: "careers@arguscements.demo" },
    { href: "mailto:info@arguscements.demo", label: "info@arguscements.demo" },
  ],
  camps: [
    { href: "/camps/harbor-kiln", label: "Harbor Kiln" },
    { href: "/camps/ridge-works", label: "Ridge Works" },
    { href: "/camps/quarry-gate", label: "Quarry Gate" },
    { href: "/camps", label: "View All" },
  ],
  antarctica: [
    { href: "/antarctica/polar-plateau", label: "The Ridge Quarry" },
    { href: "/antarctica/fuel-depot", label: "Coastal Berth" },
    { href: "/antarctica/atka-penguin-colony", label: "City Batch Plant" },
    { href: "/antarctica/wolfs-fang-runway-mountains", label: "The Kiln Hall" },
    { href: "/antarctica/schirmacher-oasis", label: "The Quality Lab" },
    { href: "/antarctica/direct-flights-to-antarctica", label: "Fleet & Rail" },
    { href: "/antarctica", label: "View All" },
  ],
  about: [
    { href: "/about/founders", label: "Founders" },
    { href: "/about/foundation", label: "Argus Aggregates" },
  ],
  social: [
    { href: "#", label: "Instagram" },
    { href: "#", label: "LinkedIn" },
    { href: "#", label: "Facebook" },
    { href: "#", label: "Youtube" },
  ],
  legal: [
    { href: "/legal/website-terms", label: "Website Terms of Use" },
    { href: "/legal/booking-terms", label: "Supply Terms" },
    { href: "/legal/privacy-policy", label: "Privacy Policy" },
    { href: "/legal/cookies", label: "Cookies Policy" },
  ],
};
