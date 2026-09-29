import Image from "next/image";
import Link from "next/link";
import { featuredWork } from "@/data/featuredWork";
import { sustainability } from "@/data/sustainability";
import "@/components/sustainability.css";
import "@/components/about-nav.css";

/**
 * Sustainability page. Copy and figures come from the Argus Future Concrete
 * deck (see data/sustainability.ts); the "Placeholder" section is still to be
 * written. This static route takes precedence over app/about/[slug] for
 * /about/sustainability only; the shared about stub is untouched.
 */
export default function SustainabilityPage() {
  const { hero, emissions, converts, benefits, building, waste, projects, award, whoWeAre, placeholder, cta } =
    sustainability;
  const projectCards = projects.items.flatMap((item) => {
    const work = featuredWork.find((w) => w.slug === item.slug);
    return work ? [{ ...item, image: work.banner }] : [];
  });

  return (
    <main className="page-main sn sn-page">
      <section className="bg-white sn-top">
        <div className="container-large">
          <div className="u-grid no-gap sn-top_layout">
            <div className="sn-top_head">
              <p className="layout-title">{sustainability.eyebrow}</p>
              <h1 className="sn-title">{hero.title}</h1>
            </div>
            <ol className="sn-pillars">
              {hero.pillars.map((text, i) => (
                <li key={text} className="sn-pillar">
                  <span className="layout-title_sm sn-pillar_num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="sn-pillar_text">{text}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="sn-stat">
        <Image src={emissions.image.src} alt={emissions.image.alt} fill unoptimized sizes="100vw" className="sn-stat_bg" />
        <div className="sn-stat_shade" aria-hidden="true" />
        <div className="container-large v-flex_center sn-stat_inner">
          <p className="sn-stat_value">{emissions.value}</p>
          <p className="h3 sn-stat_label">{emissions.label}</p>
          <p className="t-body sn-stat_note">{emissions.note}</p>
        </div>
        <p className="sn-stat_credit">{emissions.credit}</p>
      </section>

      <section className="bg-white sn-convert">
        <div className="container-large">
          <div className="sn-convert_grid">
            {[converts.before, converts.after].map((side, i) => (
              <figure key={side.label} className={`sn-convert_item${i === 0 ? " is-before" : " is-after"}`}>
                <div className="sn-convert_image">
                  <Image
                    src={side.image.src}
                    alt={side.image.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 767px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <figcaption className="h3 sn-convert_label">{side.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="padding-large bg-white sn-benefits">
        <div className="container-large">
          <div className="u-grid no-gap sn-split">
            <div className="sn-split_head">
              <p className="layout-title">{benefits.label}</p>
              <h2 className="h3 sn-h">{benefits.title}</h2>
            </div>
            <ul className="sn-list sn-split_body">
              {benefits.points.map((text) => (
                <li key={text} className="t-body">
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="padding-large bg-white sn-building">
        <div className="container-large">
          <div className="v-flex_center">
            <p className="layout-title">{building.label}</p>
            <h2 className="h3 sn-h sn-center">{building.title}</h2>
          </div>
          <ul className="sn-figures">
            {building.figures.map((f) => (
              <li key={f.value} className="sn-figure">
                <span className="sn-figure_value">{f.value}</span>
                <span className="t-body is-faded">{f.label}</span>
              </li>
            ))}
          </ul>
          <div className="u-grid no-gap sn-award">
            <div className="sn-award_image">
              <Image
                src={award.image.src}
                alt={award.image.alt}
                width={award.image.width}
                height={award.image.height}
                unoptimized
                sizes="(max-width: 767px) 50vw, 15vw"
              />
            </div>
            <div className="sn-award_text">
              <p className="layout-title">{award.label}</p>
              <p className="t-body sn-body">{award.body}</p>
              <Link className="sn-link layout-title_sm" href={building.href}>
                {building.linkLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="padding-large bg-white sn-waste">
        <div className="container-large">
          <div className="v-flex_center">
            <p className="layout-title">{waste.label}</p>
            <h2 className="section-title-xxl sn-waste_title">{waste.title}</h2>
          </div>
          <ul className="sn-chips">
            {waste.items.map((item) => (
              <li key={item} className="layout-title_sm sn-chip">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="padding-large bg-white sn-projects">
        <div className="container-large">
          <div className="v-flex_center">
            <p className="layout-title">{projects.label}</p>
            <h2 className="h3 sn-h sn-center">{projects.title}</h2>
          </div>
          <ul className="sn-cards">
            {projectCards.map((card) => (
              <li key={card.slug}>
                <Link className="sn-card" href={`/our-work/${card.slug}`} data-cursor-text="Learn More">
                  <div className="sn-card_image">
                    <Image
                      src={card.image.src}
                      alt={card.image.alt}
                      fill
                      unoptimized
                      sizes="(max-width: 767px) 100vw, 30vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <p className="layout-title_md sn-card_title">{card.title}</p>
                  {card.line ? <p className="t-body is-faded sn-card_line">{card.line}</p> : null}
                  <span className="layout-title_sm sn-card_more">View project</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="padding-large bg-white sn-who">
        <div className="container-large">
          <div className="u-grid no-gap sn-split">
            <div className="sn-split_head">
              <p className="layout-title">{sustainability.eyebrow.split(" · ")[0]}</p>
              <h2 className="sn-who_title">{whoWeAre.title}</h2>
            </div>
            <ul className="sn-list sn-split_body">
              {whoWeAre.points.map((text) => (
                <li key={text} className="t-body">
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="padding-large bg-white sn-group">
        <div className="container-large">
          <div className="u-grid no-gap">
            <div className="sn-group_box">
              <p className="sn-note layout-title_sm">{placeholder.label}</p>
              <h2 className="h3 sn-h">{placeholder.title}</h2>
              {placeholder.body.map((text) => (
                <p key={text} className="t-body sn-body">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sn-cta">
        <div className="container-large v-flex_center">
          <p className="layout-title">{cta.label}</p>
          <h2 className="h3 sn-cta_title">{cta.title}</h2>
          <div className="sn-cta_btns">
            <Link className="btn btn-large hover-orange" href={cta.primary.href}>
              <span className="btn-inner">
                <span className="btn-text">{cta.primary.label}</span>
              </span>
            </Link>
            <Link className="sn-cta_link layout-title_sm" href={cta.secondary.href}>
              {cta.secondary.label}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
