import Image from "next/image";
import Link from "next/link";
import { foundation } from "@/data/foundation";
import "@/components/foundation.css";
import "@/components/about-nav.css";

/**
 * Foundation page. Copy comes from the Argus Future Concrete deck (see
 * data/foundation.ts); the "Placeholder" section is still to be written.
 * This static route takes precedence over app/about/[slug] for
 * /about/foundation only; the shared about stub is untouched.
 */
export default function FoundationPage() {
  const { whoWeAre, facts, geopolycrete, waste, award, placeholder, cta } = foundation;

  return (
    <main className="page-main fn fn-page">
      <section className="bg-white fn-top">
        <div className="container-large">
          <div className="home-intro_layout u-grid no-gap fn-intro">
            <div className="fn-intro_head">
              <p className="layout-title">{foundation.eyebrow}</p>
              <h1 className="fn-title">{whoWeAre.title}</h1>
            </div>
            <div className="fn-intro_text">
              <ul className="fn-list">
                {whoWeAre.points.map((text) => (
                  <li key={text} className="t-body">
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white fn-facts">
        <div className="container-large">
          <ul className="fn-facts_grid">
            {facts.map((f) => (
              <li key={f.value} className="fn-fact">
                <span className="fn-fact_value">{f.value}</span>
                <span className="t-body is-faded fn-fact_label">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="padding-large bg-white fn-geo">
        <div className="container-large">
          <div className="home-intro_layout u-grid no-gap fn-geo_layout">
            <figure className="fn-geo_figure">
              <div className="fn-geo_image">
                <Image
                  src={geopolycrete.image.src}
                  alt={geopolycrete.image.alt}
                  width={geopolycrete.image.width}
                  height={geopolycrete.image.height}
                  unoptimized
                  sizes="(max-width: 767px) 100vw, 42vw"
                />
              </div>
              <figcaption className="t-body is-faded fn-caption">{geopolycrete.image.caption}</figcaption>
            </figure>
            <div className="fn-geo_text">
              <p className="layout-title">{geopolycrete.label}</p>
              <h2 className="h3 fn-h">{geopolycrete.title}</h2>
              <ul className="fn-list fn-list_compact">
                {geopolycrete.points.map((text) => (
                  <li key={text} className="t-body">
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="padding-large bg-white fn-waste">
        <div className="container-large">
          <div className="v-flex_center">
            <p className="layout-title">{waste.label}</p>
            <h2 className="section-title-xxl fn-waste_title">{waste.title}</h2>
          </div>
          <ul className="fn-chips">
            {waste.items.map((item) => (
              <li key={item} className="layout-title_sm fn-chip">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="padding-large bg-white fn-award">
        <div className="container-large">
          <div className="home-intro_layout u-grid no-gap fn-award_layout">
            <div className="fn-award_image">
              <Image
                src={award.image.src}
                alt={award.image.alt}
                width={award.image.width}
                height={award.image.height}
                unoptimized
                sizes="(max-width: 767px) 70vw, 20vw"
              />
            </div>
            <div className="fn-award_text">
              <p className="layout-title">{award.label}</p>
              <h2 className="h3 fn-h">{award.title}</h2>
              <p className="t-body fn-body">{award.body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="padding-large bg-white fn-group">
        <div className="container-large">
          <div className="home-intro_layout u-grid no-gap">
            <div className="fn-group_box">
              <p className="fn-note layout-title_sm">{placeholder.label}</p>
              <h2 className="h3 fn-h">{placeholder.title}</h2>
              {placeholder.body.map((text) => (
                <p key={text} className="t-body fn-body">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="fn-cta">
        <div className="container-large v-flex_center">
          <p className="layout-title">{cta.label}</p>
          <h2 className="h3 fn-cta_title">{cta.title}</h2>
          <div className="fn-cta_btns">
            <Link className="btn btn-large hover-orange" href={cta.primary.href}>
              <span className="btn-inner">
                <span className="btn-text">{cta.primary.label}</span>
              </span>
            </Link>
            <Link className="fn-cta_link layout-title_sm" href={cta.secondary.href}>
              {cta.secondary.label}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
