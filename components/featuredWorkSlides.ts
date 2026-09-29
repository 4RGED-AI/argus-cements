import {
  featuredWork,
  featuredWorkIntro,
  featuredWorkSection,
  type FeaturedWork,
  type FeaturedWorkImage,
} from "@/data/featuredWork";

/** One full-screen panel of the homepage Featured Work section. */
export type FeaturedPanel = {
  key: string;
  kind: "intro" | "work";
  title: string;
  href: string;
  image: FeaturedWorkImage;
};

export const workHref = (work: Pick<FeaturedWork, "slug">) => `${featuredWorkSection.listHref}/${work.slug}`;

export const projectCount = featuredWork.length;
export const projectCountLabel = `${projectCount} ${featuredWorkIntro.countSuffix}`;

/** "Some of our work" first, then one panel per project. */
export const featuredPanels: FeaturedPanel[] = [
  {
    key: featuredWorkIntro.slug,
    kind: "intro",
    title: featuredWorkIntro.title,
    href: featuredWorkSection.listHref,
    image: featuredWorkIntro.image,
  },
  ...featuredWork.map<FeaturedPanel>((work) => ({
    key: work.slug,
    kind: "work",
    title: work.title,
    href: workHref(work),
    image: work.background,
  })),
];
