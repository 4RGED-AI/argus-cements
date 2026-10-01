/**
 * Featured Work ("Some of our work"): homepage section + /our-work pages.
 *
 * PLACEHOLDER COPY: every title, excerpt, paragraph, stat and tag below was
 * drafted from the "Argus Future Concrete" deck (slides 8-21) and is meant to
 * be replaced with final copy. Swap text freely; the components and pages
 * read everything from this file.
 *
 * Images live in /public/images/featured-work/<slug>/. Each project's `photo.jpg`
 * (used for the homepage panel, the /our-work card and the detail page) is a
 * PLACEHOLDER: a free Unsplash photo (Unsplash License, free to use, no
 * attribution required) picked to match the project's theme, saved at 2560px
 * wide. Replace them with the real project photos using the same path, or
 * point `src` at new files. The gallery-* / timeline-* images are still the
 * ones extracted from the deck.
 *
 * Placeholder photo credits (source: https://images.unsplash.com/photo-<id>):
 * - geopolycrete-building     1764118811041-712974fea74c  high-rise under construction, Mumbai
 * - sewerage-plant            1674578745937-c73f81bdda07  aerial of sewage treatment tanks
 * - red-mud-road              1772852340517-b11ec88979fc  asphalt paver (Brian J. Tromp)
 * - bmc-road-repair           1757030689705-1eecc41d221a  night road paving (Nihar Reddy Jangam)
 * - biorocks                  1715899735604-10c58aabd39f  coral reef (Ricky Beron)
 * - precast-perimeter-fencing 1531834685032-c34bf0d84c77  workers on reinforcement and scaffolding
 * - precast-walls-homes       1743130940742-c0d1fff97f1c  pouring a concrete foundation (Nihar Reddy Jangam)
 * - fly-ash-road              1611795495232-a79c42303014  road construction site with rollers
 * - shotcreting               1673978484091-6a743a9058cf  concrete placed from a hose
 * - flame-tested              1473260079709-83c808703435  flames on a hillside
 * - instant-road-repair-kits  1597484661643-2f5fef640dd1  tools laid out flat
 * - tetrapods                 1756955581562-efd3ef3b3e14  tetrapods and crane, breakwater
 * - coastal-armor             1484291470158-b8f8d608850d  waves breaking (aerial)
 *
 * These images are served as-is (next/image `unoptimized`), not through the
 * Next image optimizer, so export them ready for the web: JPEG, about 2400-2560px
 * wide for full-screen images, quality ~78, progressive. (On the dev server the
 * optimizer could stall on these large full-screen images and hold the browser's
 * connections, which stopped clicks on the panels from navigating.)
 *
 * The "Some of our work" intro image is a placeholder of the right quality:
 * "Construction workers pouring and leveling concrete" by Nihar Reddy Jangam
 * on Unsplash (https://unsplash.com/photos/VHPFxU6eqto, Unsplash License),
 * saved at 2560x1707. Swap it for the real photo when it is ready.
 *
 * - `background` : full-screen panel on the homepage and the detail page hero.
 * - `banner`     : card image on /our-work and first image of the detail gallery.
 * - `position`   : optional CSS object-position to control the crop (e.g. "30% 50%").
 *
 * Homepage order: `featuredWorkIntro` ("Some of our work", deck slide 8) first,
 * then one full-screen panel per project in `featuredWork`, in array order.
 * The intro panel is display only (not a link); each project links to /our-work/<slug>.
 */

export type FeaturedWorkImage = {
  src: string;
  alt: string;
  /** Optional CSS object-position, e.g. "30% 50%", to control the crop. */
  position?: string;
};

export type FeaturedWorkStat = {
  value: string;
  label: string;
};

export type FeaturedWorkMilestone = {
  date: string;
  label: string;
  image?: FeaturedWorkImage;
};

/**
 * Project video (served as-is from /public). Export as H.264 mp4 with
 * "faststart" (ffmpeg -movflags +faststart) so it starts playing before it has
 * fully downloaded, plus a poster frame jpg. width/height are the video's
 * display size (after any rotation), used for the player's aspect ratio.
 */
export type FeaturedWorkVideo = {
  src: string;
  poster: string;
  width: number;
  height: number;
  /** Accessible name for the thumbnail button and the player. */
  title: string;
};

export type FeaturedWork = {
  slug: string;
  /** Title on the homepage panel and the detail page. */
  title: string;
  /** Short label, used for the "next project" link on detail pages. */
  shortTitle: string;
  category: string;
  tags: string[];
  excerpt: string;
  description: string[];
  stats?: FeaturedWorkStat[];
  timeline?: FeaturedWorkMilestone[];
  banner: FeaturedWorkImage;
  background: FeaturedWorkImage;
  gallery?: FeaturedWorkImage[];
  /** Optional note, e.g. that a video exists in the deck. */
  note?: string;
  /**
   * Optional project videos, shown in the left column of the detail page intro.
   * One video fills the column (as tall as the text); several are stacked as
   * equal 16:9 cards. Each card opens a centred player.
   */
  videos?: FeaturedWorkVideo[];
};

export type FeaturedWorkIntro = {
  slug: string;
  /** Title on the first homepage panel and the /our-work hero. */
  title: string;
  /** Small line above the title on the /our-work hero. */
  subtitle: string;
  /** Word after the project count, e.g. "13 projects". */
  countSuffix: string;
  excerpt: string;
  description: string[];
  /** Full-screen image for the first panel and the /our-work hero. */
  image: FeaturedWorkImage;
};

const dir = (slug: string) => `/images/featured-work/${slug}`;

/** First panel of the section: the deck's "SOME OF OUR WORK" title slide. */
export const featuredWorkIntro: FeaturedWorkIntro = {
  slug: "some-of-our-work",
  title: "Some of our work",
  subtitle: "Argus Future Concrete",
  countSuffix: "projects",
  excerpt:
    "A showcase of projects built with Argus Future Concrete, from green buildings and roads made from industrial waste to marine habitats and coastal protection.",
  description: [
  ],
  image: {
    src: `${dir("some-of-our-work")}/intro.jpg`,
    alt: "Construction crew levelling freshly poured concrete on site",
    position: "50% 45%",
  },
};

/** Labels used by the homepage section and the /our-work pages. */
export const featuredWorkSection = {
  /** Visible heading above the panels on the homepage. */
  heading: "Some of our work",
  /** Small line above the heading. */
  headingEyebrow: "Selected projects",
  /** Small uppercase line above every panel title. */
  eyebrow: "Featured work",
  /** Custom cursor label on the panels (same as the carousel's "Learn More"). */
  cursorText: "Learn More",
  /** Base path of the project pages (/our-work/<slug>). The /our-work list page still exists but is no longer linked from the homepage. */
  listHref: "/our-work",
  listLabel: "The projects",
  statsLabel: "At a glance",
  timelineLabel: "Build timeline",
  galleryLabel: "From site",
  ctaLabel: "Enquire now",
  ctaHref: "/enquire",
  learnMore: "Learn More",
};

/**
 * Scroll motion of the homepage section. Values match the reference video:
 * each image is pinned while its panel scrolls in over it and the caption stays
 * fixed at the bottom-left, with no zoom. Set `enterScale` to e.g. 1.15 to add a
 * zoom that settles to 1 as each panel fills the screen (smoothed by `lerp`).
 */
export const featuredWorkMotion = {
  enterScale: 1,
  lerp: 0.08,
  /** Caption switches to the next title when that panel reaches this share of the screen. */
  captionSwitchAt: 0.5,
};

export const featuredWork: FeaturedWork[] = [
  {
    slug: "geopolycrete-building",
    title: "India's First 100% Geopolycrete Building",
    shortTitle: "Geopolycrete Building",
    category: "Green Building",
    tags: ["100% Geopolycrete", "Feb – Jul 2021"],
    excerpt:
      "A green building in a remote location, built entirely in Geopolycrete in six months during the pandemic, with no masons and 20% lower labour.",
    description: [
      "India's first building made with 100% Geopolycrete was delivered in a remote location in just six months, in the middle of the pandemic.",
      "The system needed no masons, cut labour by a fifth and renewed 95 tons of waste material, while saving water, steel and plastering across the build.",
    ],
    stats: [
      { value: "6 months", label: "Built during the pandemic" },
      { value: "0", label: "Masons needed" },
      { value: "20%", label: "Lower labour" },
      { value: "95 t", label: "Waste material renewed" },
      { value: "25,000 L", label: "Water saved" },
      { value: "67 t", label: "CO₂ reduction" },
      { value: "52 t", label: "Portland cement not used" },
      { value: "10%", label: "Less steel used" },
      { value: "850 m²", label: "Plastering saved" },
    ],
    timeline: [
      { date: "Feb 2021", label: "Earth levelling", image: { src: `${dir("geopolycrete-building")}/timeline-1.jpg`, alt: "Earth levelling on site" } },
      { date: "Mar 2021", label: "Plinth beam", image: { src: `${dir("geopolycrete-building")}/timeline-2.jpg`, alt: "Plinth beam in place" } },
      { date: "Mar 2021", label: "Level 1", image: { src: `${dir("geopolycrete-building")}/timeline-3.jpg`, alt: "Level 1 walls rising" } },
      { date: "Apr 2021", label: "Form work", image: { src: `${dir("geopolycrete-building")}/timeline-4.jpg`, alt: "Column reinforcement and form work" } },
      { date: "Jul 2021", label: "Roof form and slab", image: { src: `${dir("geopolycrete-building")}/timeline-5.jpg`, alt: "Roof reinforcement ready for the slab" } },
    ],
    banner: { src: `${dir("geopolycrete-building")}/photo.jpg`, alt: "Multi-storey concrete building under construction" },
    background: { src: `${dir("geopolycrete-building")}/photo.jpg`, alt: "Multi-storey concrete building under construction" },
  },
  {
    slug: "sewerage-plant",
    title: "Cast Sewerage Plant, 125,000 Litres",
    shortTitle: "Sewerage Plant",
    category: "Water Infrastructure",
    tags: ["125,000 L", "Cast in place"],
    excerpt:
      "A 125,000 litre sewerage treatment plant cast in Future Concrete, built to hold up in wet, chemically aggressive conditions.",
    description: [
      "Tanks, channels and walls for a 125,000 litre sewerage plant were cast in place with Future Concrete.",
    ],
    stats: [{ value: "125,000 L", label: "Treatment capacity" }],
    banner: { src: `${dir("sewerage-plant")}/photo.jpg`, alt: "Aerial view of circular sewage treatment tanks" },
    background: { src: `${dir("sewerage-plant")}/photo.jpg`, alt: "Aerial view of circular sewage treatment tanks" },
    note: "A walkthrough video of this project is available in the deck.",
    // Site video supplied by Neel (portrait 480x848, 37 s, no audio track), remuxed with faststart.
    videos: [
      {
        src: `${dir("sewerage-plant")}/video.mp4`,
        poster: `${dir("sewerage-plant")}/video-poster.jpg`,
        width: 480,
        height: 848,
        title: "Sewerage plant site video: formwork and reinforcement",
      },
    ],
  },
  {
    slug: "red-mud-road",
    title: "Road Made with Bauxite Residue (Red Mud)",
    shortTitle: "Red Mud Road",
    category: "Roads",
    tags: ["Bauxite residue", "Waste to road"],
    excerpt:
      "A road built with bauxite residue, turning a difficult industrial by-product into a durable driving surface.",
    description: [
      "Red mud, the residue left over from alumina refining, was used to build a working road with Future Concrete.",
    ],
    banner: { src: `${dir("red-mud-road")}/photo.jpg`, alt: "Asphalt paver laying a new road surface" },
    background: { src: `${dir("red-mud-road")}/photo.jpg`, alt: "Asphalt paver laying a new road surface" },
    // Site videos supplied by Neel (in his order), remuxed with faststart, no re-encode.
    // 1 and 4 are landscape 640x352 with sound; 2 and 3 are portrait 352x640 (rotated), no audio track.
    videos: [
      { src: `${dir("red-mud-road")}/video-1.mp4`, poster: `${dir("red-mud-road")}/video-1-poster.jpg`, width: 640, height: 352, title: "Red mud road site video 1: placing on site at night" },
      { src: `${dir("red-mud-road")}/video-2.mp4`, poster: `${dir("red-mud-road")}/video-2-poster.jpg`, width: 352, height: 640, title: "Red mud road site video 2: concrete discharging from the mixer" },
      { src: `${dir("red-mud-road")}/video-3.mp4`, poster: `${dir("red-mud-road")}/video-3-poster.jpg`, width: 352, height: 640, title: "Red mud road site video 3: pouring down the chute" },
      { src: `${dir("red-mud-road")}/video-4.mp4`, poster: `${dir("red-mud-road")}/video-4-poster.jpg`, width: 640, height: 352, title: "Red mud road site video 4: the finished road after rain" },
    ],
    gallery: [{ src: `${dir("red-mud-road")}/gallery-1.jpg`, alt: "Finished stretch of the red mud road" }],
    note: "Four videos of this project are available in the deck.",
  },
  {
    slug: "bmc-road-repair",
    title: "Road Repair Trials for Brihanmumbai Municipal Corporation",
    shortTitle: "BMC Road Repair",
    category: "Road Repair",
    tags: ["BMC", "Mumbai"],
    excerpt:
      "Road repair trials carried out for the Brihanmumbai Municipal Corporation (BMC) on live city streets.",
    description: [
      "Future Concrete was trialled for road repairs with the Brihanmumbai Municipal Corporation (BMC).",
    ],
    banner: { src: `${dir("bmc-road-repair")}/photo.jpg`, alt: "Night-time road works under floodlights" },
    background: { src: `${dir("bmc-road-repair")}/photo.jpg`, alt: "Night-time road works under floodlights" },
    note: "A video of the trials is available in the deck.",
  },
  {
    slug: "biorocks",
    title: "Biorocks with Future Concrete",
    shortTitle: "Biorocks",
    category: "Marine",
    tags: ["Alkaline", "Coral growth"],
    excerpt:
      "Alkaline biorocks tested to accelerate marine life and coral growth.",
    description: [
      "Biorocks cast with alkaline Future Concrete were tested to help accelerate marine life and coral growth.",
    ],
    banner: { src: `${dir("biorocks")}/photo.jpg`, alt: "Coral reef growing on the sea floor" },
    background: { src: `${dir("biorocks")}/photo.jpg`, alt: "Coral reef growing on the sea floor" },
    // Site video supplied by Neel (square 640x640, 55 s, stereo AAC). Re-encoded to H.264 High CRF 20 with faststart, audio copied.
    videos: [
      {
        src: `${dir("biorocks")}/video.mp4`,
        poster: `${dir("biorocks")}/video-poster.jpg`,
        width: 640,
        height: 640,
        title: "Biorocks site video: a Future Concrete biorock covered in marine growth",
      },
    ],
    note: "A video of this project is available in the deck.",
  },
  {
    slug: "precast-perimeter-fencing",
    title: "Precast Perimeter Fencing",
    shortTitle: "Perimeter Fencing",
    category: "Precast",
    tags: ["Precast", "Fencing"],
    excerpt:
      "Textured precast perimeter wall panels, cast off site and craned into place for fast, tidy boundaries.",
    description: [
      "Perimeter fencing panels were precast in Future Concrete with a textured stone finish, then lifted straight into position on site.",
    ],
    banner: { src: `${dir("precast-perimeter-fencing")}/photo.jpg`, alt: "Workers on steel reinforcement and scaffolding" },
    background: { src: `${dir("precast-perimeter-fencing")}/photo.jpg`, alt: "Workers on steel reinforcement and scaffolding" },
    gallery: [{ src: `${dir("precast-perimeter-fencing")}/gallery-1.jpg`, alt: "Installed precast perimeter wall" }],
  },
  {
    slug: "precast-walls-homes",
    title: "Precast Tiled Walls & Cast-in-Place Homes",
    shortTitle: "Walls & Homes",
    category: "Housing",
    tags: ["Precast walls", "Cast in place"],
    excerpt:
      "Precast tiled wall panels and homes cast in place, two fast routes to finished housing with Future Concrete.",
    description: [
      "Precast tiled walls arrive finished and ready to fix, while cast-in-place homes are poured as a single shell on site.",
    ],
    banner: { src: `${dir("precast-walls-homes")}/photo.jpg`, alt: "Workers pouring a concrete foundation" },
    background: { src: `${dir("precast-walls-homes")}/photo.jpg`, alt: "Workers pouring a concrete foundation" },
    gallery: [{ src: `${dir("precast-walls-homes")}/gallery-1.jpg`, alt: "Precast tiled wall panel" }],
  },
  {
    slug: "fly-ash-road",
    title: "India's First Fly Ash Future Concrete Road",
    shortTitle: "Fly Ash Road",
    category: "Roads",
    tags: ["Fly ash", "NTPC"],
    excerpt:
      "India's first road made with fly ash Future Concrete, built for the National Thermal Power Corporation (NTPC).",
    description: [
      "For the National Thermal Power Corporation, fly ash from power generation became the basis of India's first Future Concrete road.",
    ],
    banner: { src: `${dir("fly-ash-road")}/photo.jpg`, alt: "Road rollers and pipes on a road construction site" },
    background: { src: `${dir("fly-ash-road")}/photo.jpg`, alt: "Road rollers and pipes on a road construction site" },
  },
  {
    slug: "shotcreting",
    title: "Shotcreting",
    shortTitle: "Shotcreting",
    category: "Sprayed Concrete",
    tags: ["Shotcrete", "Slope protection"],
    excerpt:
      "Future Concrete sprayed onto slopes, walls and coastal edges with rig-mounted and handheld shotcrete equipment.",
    description: [
      "Future Concrete can be sprayed as shotcrete for slope stabilisation, retaining faces and coastal protection.",
    ],
    banner: { src: `${dir("shotcreting")}/photo.jpg`, alt: "Wet concrete being placed from a hose" },
    background: { src: `${dir("shotcreting")}/photo.jpg`, alt: "Wet concrete being placed from a hose" },
    gallery: [
      { src: `${dir("shotcreting")}/gallery-1.jpg`, alt: "Crew shotcreting a coastal slope" },
      { src: `${dir("shotcreting")}/gallery-2.jpg`, alt: "Amphibious rig working at the water's edge" },
    ],
  },
  {
    slug: "flame-tested",
    title: "Flame Tested",
    shortTitle: "Flame Tested",
    category: "Fire Performance",
    tags: ["Fire test", "Live demo"],
    excerpt:
      "Future Concrete put under a direct flame in live demonstrations, in front of engineers and clients.",
    description: [
      "Samples of Future Concrete were exposed to direct flame in live demonstrations to show how the material holds up to fire.",
    ],
    banner: { src: `${dir("flame-tested")}/photo.jpg`, alt: "Flames burning on a hillside" },
    background: { src: `${dir("flame-tested")}/photo.jpg`, alt: "Flames burning on a hillside" },
    gallery: [
      { src: `${dir("flame-tested")}/gallery-1.jpg`, alt: "Engineers observing the flame test" },
      { src: `${dir("flame-tested")}/gallery-2.jpg`, alt: "Inspecting samples after the flame test" },
    ],
  },
  {
    slug: "instant-road-repair-kits",
    title: "Instant Road Repair Kits",
    shortTitle: "Road Repair Kits",
    category: "Road Repair",
    tags: ["Spot Crete-XT", "Ready to use"],
    excerpt:
      "Ready-to-use instant green concrete kits that patch potholes and reopen roads quickly.",
    description: [
      "Instant road repair kits package Future Concrete for fast, on-the-spot pothole and patch repairs.",
    ],
    banner: { src: `${dir("instant-road-repair-kits")}/photo.jpg`, alt: "Repair tools laid out on a dark surface" },
    background: { src: `${dir("instant-road-repair-kits")}/photo.jpg`, alt: "Repair tools laid out on a dark surface" },
    gallery: [
      { src: `${dir("instant-road-repair-kits")}/gallery-1.jpg`, alt: "Spot Crete-XT instant repair kit" },
      { src: `${dir("instant-road-repair-kits")}/gallery-2.jpg`, alt: "Road repair demonstration area" },
      { src: `${dir("instant-road-repair-kits")}/gallery-3.jpg`, alt: "Repaired road section" },
      { src: `${dir("instant-road-repair-kits")}/gallery-4.jpg`, alt: "Close-up of a patched road surface" },
    ],
  },
  {
    slug: "tetrapods",
    title: "Tetrapods for Coastal Protection",
    shortTitle: "Tetrapods",
    category: "Coastal",
    tags: ["Tetrapods", "Coastal protection"],
    excerpt:
      "Interlocking concrete tetrapods cast to break wave energy and protect the shoreline.",
    description: [
      "Tetrapods were cast in Future Concrete to armor the coast, interlocking to absorb and break incoming waves.",
    ],
    banner: { src: `${dir("tetrapods")}/photo.jpg`, alt: "Concrete tetrapods on a breakwater with a crane behind" },
    background: { src: `${dir("tetrapods")}/photo.jpg`, alt: "Concrete tetrapods on a breakwater with a crane behind" },
    gallery: [{ src: `${dir("tetrapods")}/gallery-1.jpg`, alt: "Single tetrapod unit after casting" }],
  },
  {
    slug: "coastal-armor",
    title: "Coastal Armor",
    shortTitle: "Coastal Armor",
    category: "Coastal",
    tags: ["Armor units", "Shoreline"],
    excerpt:
      "Perforated precast armor units placed by crane and barge to hold the shoreline.",
    description: [
      "Perforated armor blocks were precast in Future Concrete and placed along the shore to dissipate wave energy.",
    ],
    banner: { src: `${dir("coastal-armor")}/photo.jpg`, alt: "Waves breaking against the coast" },
    background: { src: `${dir("coastal-armor")}/photo.jpg`, alt: "Waves breaking against the coast" },
    gallery: [
      { src: `${dir("coastal-armor")}/gallery-1.jpg`, alt: "Armor unit mould on site" },
      { src: `${dir("coastal-armor")}/gallery-2.jpg`, alt: "Armor units placed on the beach" },
      { src: `${dir("coastal-armor")}/gallery-3.jpg`, alt: "Armor units along the waterline" },
    ],
  },
];
