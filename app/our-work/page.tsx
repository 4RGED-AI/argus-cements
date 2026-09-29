import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { featuredWork, featuredWorkIntro, featuredWorkSection } from "@/data/featuredWork";
import { projectCountLabel, workHref } from "@/components/featuredWorkSlides";
import { PlusIcon } from "@/components/Icons";
import "@/components/featured-work.css";

export const metadata: Metadata = {
  title: `${featuredWorkIntro.title} — Argus Cements`,
  description: featuredWorkIntro.excerpt,
};

export default function OurWorkPage() {
  const intro = featuredWorkIntro;
  return (
    <main className="page-main">
      <div className="hero-banner" style={{ height: "100svh" }}>
        <div className="hero-banner_wrapper">
          <div className="hero-banner_bg">
            <Image
              src={intro.image.src}
              alt={intro.image.alt}
              fill
              unoptimized
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: intro.image.position }}
            />
            <div className="hero-banner_overlay" />
          </div>
          <div className="hero-banner_content" data-reveal="true">
            <div className="hero-banner_contain mid container">
              <h2 className="hero-banner_subtitle">{intro.subtitle}</h2>
            </div>
            <div className="hero-banner_contain bot container">
              <h1 className="hero-banner_title-basic" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
                {intro.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section className="padding-large bg-white" data-nav-theme="dark">
        <div className="container-large">
          <div className="home-intro_layout u-grid no-gap">
            <div className="home-intro_col col-4 offset-6">
              <p className="layout-title">{projectCountLabel}</p>
              <p className="t-body" style={{ marginTop: "1.25em" }}>
                {intro.excerpt}
              </p>
              {intro.description.map((para) => (
                <p className="t-body" style={{ marginTop: "1.25em" }} key={para}>
                  {para}
                </p>
              ))}
              <Link
                className="btn btn-large hover-orange"
                href={featuredWorkSection.ctaHref}
                style={{ marginTop: "2em", maxWidth: "20em" }}
              >
                <span className="btn-inner">
                  <span className="btn-text">{featuredWorkSection.ctaLabel}</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="padding-large bg-transparent itineraries-section" aria-label={featuredWorkSection.listLabel}>
        <div className="container-large">
          <div className="itineraries-wrap">
            {featuredWork.map((work) => (
              <div className="itinerary-item u-grid no-gap" key={work.slug}>
                <div className="itineraries-left col-2">
                  <p className="t-title-italic">{work.category}</p>
                </div>
                <div className="itineraries-right col-10">
                  <Link className="itinerary-item_link" href={workHref(work)} data-cursor-text={featuredWorkSection.cursorText}>
                    <div className="itinerary-item_inner">
                      <div className="itinerary-item_image">
                        <Image
                          src={work.banner.src}
                          alt={work.banner.alt}
                          fill
                          unoptimized
                          sizes="(max-width: 768px) 100vw, 80vw"
                          style={{ objectFit: "cover", objectPosition: work.banner.position }}
                        />
                      </div>
                      <div className="itinerary-item_content">
                        <div className="itinerary-item_content-inner">
                          <div className="itinerary-item_header">
                            <h3 className="itinerary-item_title t-title-italic">{work.title}</h3>
                          </div>
                          <div className="itinerary-item_footer">
                            <div className="itinerary-item_meta">
                              {work.tags.map((tag, i) => (
                                <span key={tag}>
                                  {i > 0 ? <span className="itinerary-item_meta-divider" /> : null}
                                  <span className="itinerary-item_meta-item">{tag}</span>
                                </span>
                              ))}
                            </div>
                            <p className="itinerary-item_excerpt t-body">{work.excerpt}</p>
                            <button className="btn btn-mobile" type="button">
                              <div className="btn-inner">
                                <span className="btn-text">{featuredWorkSection.learnMore}</span>
                                <div className="btn-icon">
                                  <div className="icon" style={{ width: "100%", height: "100%" }}>
                                    <PlusIcon />
                                  </div>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
