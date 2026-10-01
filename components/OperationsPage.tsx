import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { operations, operationsCopy, operationItemImages } from "@/data/operations";
import "@/components/plant.css";
import "@/components/about-nav.css";
import "@/components/plant-page-tweaks.css";
import "@/components/operations-page.css";

/**
 * Operations detail page (/antarctica/<slug>), V67. Same layout and classes
 * as the plant pages (components/PlantPage.tsx); content from data/operations.ts.
 */
export function OperationsPage({ slug }: { slug: string }) {
  const op = operations.find((o) => o.slug === slug);
  if (!op) notFound();
  const { points, chips } = op;

  return (
    <main className="page-main pl pl-page ops-page">
      <section className="bg-white pl-top">
        <div className="container-large">
          <div className="u-grid no-gap pl-top_layout">
            <div className="pl-top_text">
              <p className="layout-title">{operationsCopy.eyebrow}</p>
              <h1 className="pl-title">{op.title}</h1>
              <p className="t-body pl-lead">{op.excerpt}</p>
              <p className="horizontal-scroll_camp-coordinates pl-coords">[ {op.location} ]</p>
            </div>
            <div className="pl-top_image">
              <Image src={op.image.src} alt={op.image.alt} fill priority unoptimized sizes="(max-width: 767px) 100vw, 50vw" style={{ objectFit: "cover" }} />
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

      {/* V70: each item gets its own image card. The V69 block photo
          (chips.image) is no longer shown, to keep the grid clean; its data stays. */}
      <section className="padding-large bg-white pl-chips_section ops-detail">
        <div className="container-large v-flex_center">
          <p className="layout-title">{chips.label}</p>
          <ul className="ops-items">
            {chips.items.map((label) => {
              const img = operationItemImages[label];
              return (
                <li key={label} className="ops-item">
                  {img ? (
                    <div className="ops-item_image">
                      <Image src={img.src} alt={img.alt} fill unoptimized sizes="(max-width: 767px) 50vw, 25vw" style={{ objectFit: "cover" }} />
                    </div>
                  ) : null}
                  <span className="layout-title_sm ops-item_label">{label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="padding-large bg-white pl-more">
        <div className="container-large">
          <div className="u-grid no-gap pl-split">
            <div className="pl-split_head">
              <p className="layout-title">{operationsCopy.more.label}</p>
              <ul className="pl-links">
                {operationsCopy.more.items.map((l) => (
                  <li key={l.href}>
                    <Link className="pl-link layout-title_sm" href={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/** Operations listing (/antarctica, the menu "View All"), V67: plant-style cards. */
export function OperationsIndex() {
  return (
    <main className="page-main pl pl-page ops-page">
      <section className="padding-large bg-white camps-preview">
        <div className="container-large">
          <p className="layout-title">{operationsCopy.eyebrow}</p>
          <h1 className="pl-title">{operationsCopy.indexTitle}</h1>
          <p className="t-body pl-lead">{operationsCopy.indexLead}</p>
          <div className="camps-preview_grid ops-grid">
            {operations.map((op) => (
              <Link key={op.slug} href={`/antarctica/${op.slug}`} className="camps-preview_card ops-card">
                <div className="camps-preview_image">
                  <Image src={op.image.src} alt={op.image.alt} fill unoptimized sizes="(max-width: 767px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                </div>
                <div className="camps-preview_content">
                  <h2 className="layout-title">{op.title}</h2>
                  <p className="t-body">{op.excerpt}</p>
                  <div className="horizontal-scroll_camp-coordinates">[ {op.location} ]</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
