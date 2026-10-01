import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { camps } from "@/data/site";
import { plantDetails, plantsCopy } from "@/data/plants";
import "@/components/plant.css";
import "@/components/about-nav.css";
import "@/components/plant-page-tweaks.css";

/**
 * Plant detail page (/camps/<slug>), shared by the three static routes in
 * app/camps/<slug>/page.tsx. Card content comes from `camps` in data/site.ts
 * and the page sections from data/plants.ts.
 */
export function PlantPage({ slug }: { slug: string }) {
  const camp = camps.find((c) => c.slug === slug);
  const detail = plantDetails[slug];
  if (!camp || !detail) notFound();
  const { points, figure, gallery, chips, links, placeholder } = detail;

  return (
    <main className="page-main pl pl-page">
      <section className="bg-white pl-top">
        <div className="container-large">
          <div className="u-grid no-gap pl-top_layout">
            <div className="pl-top_text">
              <p className="layout-title">{plantsCopy.eyebrow}</p>
              <h1 className="pl-title">{camp.title}</h1>
              <p className="t-body pl-lead">{camp.excerpt}</p>
              <p className="horizontal-scroll_camp-coordinates pl-coords">{camp.coords}</p>
            </div>
            <div className="pl-top_image">
              <Image src={camp.image} alt={camp.title} fill priority unoptimized sizes="(max-width: 767px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="padding-large bg-white pl-points">
        <div className="container-large">
          <div className="u-grid no-gap pl-split">
            <div className="pl-split_head">
              <p className="layout-title">{points.label}</p>
              <h2 className="h3 pl-h">{points.title}</h2>
              {points.lead ? <p className="t-body pl-body">{points.lead}</p> : null}
            </div>
            <ul className="pl-list pl-split_body">
              {points.items.map((text) => (
                <li key={text} className="t-body">
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {figure ? (
        <section className="bg-white pl-figure">
          <div className="container-large">
            <figure className="pl-figure_inner">
              <Image src={figure.src} alt={figure.alt} width={figure.width} height={figure.height} unoptimized sizes="(max-width: 767px) 100vw, 60vw" />
              <figcaption className="t-body is-faded pl-caption">{figure.caption}</figcaption>
            </figure>
          </div>
        </section>
      ) : null}

      {gallery ? (
        <section className="bg-white pl-gallery">
          <div className="container-large">
            <ul className="pl-gallery_grid">
              {gallery.map((g) => (
                <li key={g.src}>
                  <figure className="pl-gallery_item">
                    <div className="pl-gallery_image">
                      <Image src={g.src} alt={g.alt} fill unoptimized sizes="(max-width: 767px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                    </div>
                    <figcaption className="layout-title_sm pl-gallery_caption">{g.caption}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {chips ? (
        <section className="padding-large bg-white pl-chips_section">
          <div className="container-large v-flex_center">
            <p className="layout-title">{chips.label}</p>
            <ul className="pl-chips">
              {chips.items.map((item) => (
                <li key={item} className="layout-title_sm pl-chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="padding-large bg-white pl-more">
        <div className="container-large">
          <div className="u-grid no-gap pl-split">
            <div className="pl-split_head">
              <p className="layout-title">{links.label}</p>
              <ul className="pl-links">
                {links.items.map((l) => (
                  <li key={l.href}>
                    <Link className="pl-link layout-title_sm" href={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* V68: dashed placeholder box removed entirely per Neel
            {placeholder.length > 0 && (
              <div className="pl-split_body pl-placeholder">
                {placeholder.map((text) => (
                  <p key={text} className="t-body pl-body">
                    {text}
                  </p>
                ))}
              </div>
            )} */}
          </div>
        </div>
      </section>
    </main>
  );
}
