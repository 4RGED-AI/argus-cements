import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { featuredWork, featuredWorkSection } from "@/data/featuredWork";
import { FeaturedWorkVideo } from "@/components/FeaturedWorkVideo";
import "@/components/featured-work.css";

export function generateStaticParams() {
  return featuredWork.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const work = featuredWork.find((w) => w.slug === slug);
  return work ? { title: `${work.title} — Argus Cements`, description: work.excerpt } : {};
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = featuredWork.findIndex((w) => w.slug === slug);
  if (index < 0) notFound();
  const work = featuredWork[index];
  const gallery = [work.banner, ...(work.gallery ?? [])];
  const long = work.title.length > 30;
  const videos = work.videos ?? [];

  return (
    <main className="page-main">
      <div className="hero-banner" style={{ height: "100svh" }}>
        <div className="hero-banner_wrapper">
          <div className="hero-banner_bg">
            <Image
              src={work.background.src}
              alt={work.background.alt}
              fill
              unoptimized
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: work.background.position }}
            />
            <div className="hero-banner_overlay" />
          </div>
          <div className="hero-banner_content" data-reveal="true">
            <div className="hero-banner_contain mid container">
              <h2 className="hero-banner_subtitle">{work.category}</h2>
            </div>
            <div className="hero-banner_contain bot container">
              <h1
                className="hero-banner_title-basic"
                style={{ fontSize: long ? "clamp(2rem, 4.25vw, 3.75rem)" : "clamp(2.5rem, 6vw, 5rem)" }}
              >
                {work.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section className="padding-large bg-white fw-page-section" data-nav-theme="dark">
        <div className="container-large">
          <div className="home-intro_layout u-grid no-gap">
            {videos.length === 1 ? (
              <div className="fwv-col">
                <FeaturedWorkVideo video={videos[0]} />
              </div>
            ) : videos.length > 1 ? (
              <div className="fwv-col is-stack">
                {videos.map((v) => (
                  <div className="fwv-item" key={v.src}>
                    <FeaturedWorkVideo video={v} />
                  </div>
                ))}
              </div>
            ) : null}
            <div className="home-intro_col col-4 offset-6">
              <p className="layout-title">{work.tags.join(" · ")}</p>
              <p className="t-body" style={{ marginTop: "1.25em" }}>
                {work.excerpt}
              </p>
              {work.description.map((para) => (
                <p className="t-body" style={{ marginTop: "1.25em" }} key={para}>
                  {para}
                </p>
              ))}
              {work.note ? <p className="t-body fw-note">{work.note}</p> : null}
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

          {work.stats?.length ? (
            <div className="fw-block u-grid">
              <div className="fw-block_head">
                <p className="layout-title">{featuredWorkSection.statsLabel}</p>
              </div>
              <div className="fw-block_body">
                <div className="fw-stats">
                  {work.stats.map((s) => (
                    <div className="fw-stat" key={s.label}>
                      <p className="fw-stat_value">{s.value}</p>
                      <p className="fw-stat_label t-body is-faded">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          {work.timeline?.length ? (
            <div className="fw-block u-grid">
              <div className="fw-block_head">
                <p className="layout-title">{featuredWorkSection.timelineLabel}</p>
              </div>
              <div className="fw-block_body">
                <ol className="fw-timeline">
                  {work.timeline.map((m) => (
                    <li className="fw-timeline_item" key={`${m.date}-${m.label}`}>
                      {m.image ? (
                        <div className="fw-media is-square">
                          <Image src={m.image.src} alt={m.image.alt} fill unoptimized sizes="(max-width: 767px) 50vw, 15vw" style={{ objectFit: "cover" }} />
                        </div>
                      ) : null}
                      <p className="t-title-italic">{m.date}</p>
                      <p className="t-body is-faded">{m.label}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ) : null}

          <div className="fw-block u-grid">
            <div className="fw-block_head">
              <p className="layout-title">{featuredWorkSection.galleryLabel}</p>
            </div>
            <div className="fw-block_body">
              <div className="fw-gallery">
                {gallery.map((img) => (
                  <div className="fw-media is-wide" key={img.src}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      unoptimized
                      sizes="(max-width: 767px) 100vw, 30vw"
                      style={{ objectFit: "cover", objectPosition: img.position }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
