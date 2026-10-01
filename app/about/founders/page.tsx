import Image from "next/image";
import Link from "next/link";
import { founder } from "@/data/founder";
import "@/components/founder.css";
import "@/components/about-nav.css";

/**
 * Founder page. PLACEHOLDER CONTENT: copy and the founder photo live in
 * data/founder.ts and will be replaced with the final text and photo. This
 * static route takes precedence over app/about/[slug] for /about/founders only.
 */
export default function FounderPage() {
  const { intro, story, quote, cta, portrait } = founder;

  return (
    <main className="page-main fd fd-page">
      {/* No dark band: the nav is restyled orange on this page (about-nav.css). */}
      <section className="bg-white fd-top" data-nav-theme="dark">
        <div className="container-large">
          <div className="home-intro_layout u-grid no-gap fd-intro">
            <figure className="col-4 offset-1 fd-portrait">
              <Image
                src={portrait.src}
                alt={portrait.alt}
                fill
                priority
                unoptimized
                sizes="(max-width: 767px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              {portrait.isPlaceholder && (
                <figcaption className="layout-title_sm fd-portrait_label">{portrait.placeholderLabel}</figcaption>
              )}
            </figure>
            <div className="home-intro_col col-5 offset-6 fd-intro_text">
              <p className="layout-title">{founder.eyebrow}</p>
              <h1 className="fd-name">{founder.name}</h1>
              <p className="t-body is-faded fd-role">{founder.role}</p>
              <p className="layout-title fd-intro_label">{intro.label}</p>
              <h2 className="h3 fd-title">{intro.title}</h2>
              {intro.body.map((text) => (
                <p key={text} className="t-body fd-body">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="padding-large bg-white fd-story" data-nav-theme="dark">
        <div className="container-large">
          <div className="v-flex_center">
            <p className="layout-title">{story.label}</p>
            <h2 className="section-title-xxl fd-story_title">{story.title}</h2>
          </div>
          <ol className="fd-timeline">
            {story.items.map((item) => (
              <li key={item.year} className="fd-timeline_item">
                <span className="fd-timeline_year">{item.year}</span>
                <div>
                  <p className="layout-title_md">{item.title}</p>
                  <p className="t-body fd-timeline_body">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="padding-large bg-white fd-quote" data-nav-theme="dark">
        <div className="container-large">
          <div className="home-intro_layout u-grid no-gap">
            <div className="home-intro_col col-4 offset-4">
              <div className="home-intro_quote u-relative">
                <div className="v-flex_left-xs">
                  <div className="quote-mark">“</div>
                  <p className="t-body_italic text-indent-2col">{quote.text}</p>
                  <p className="t-body">-</p>
                  <div className="quote-credits_wrap">
                    <p className="t-body">{quote.name}</p>
                    <p className="t-body is-faded">{quote.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* V67: "Work with us" band removed per Neel
      <section className="fd-cta" data-nav-theme="light">
        <div className="container-large v-flex_center">
          <p className="layout-title">{cta.label}</p>
          <h2 className="h3 fd-cta_title">{cta.title}</h2>
          <div className="fd-cta_btns">
            <Link className="btn btn-large hover-orange" href={cta.primary.href}>
              <span className="btn-inner">
                <span className="btn-text">{cta.primary.label}</span>
              </span>
            </Link>
            <Link className="fd-cta_link layout-title_sm" href={cta.secondary.href}>
              {cta.secondary.label}
            </Link>
          </div>
        </div>
      </section>
      */}
    </main>
  );
}
