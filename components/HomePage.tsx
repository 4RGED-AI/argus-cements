"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { camps, home, outro } from "@/data/site";
import { CardFlick } from "@/components/CardFlick";
import { FeaturedWork } from "@/components/FeaturedWork";
import { HeroClouds } from "@/components/HeroClouds";
import { LiquidGlass, PlayIcon, PlusIcon } from "@/components/Icons";

export function HomePage() {
  const [filmOpen, setFilmOpen] = useState(false);

  return (
    <main className="page-main">
      <div className="page-content">
        <div className="hero-banner">
          <div className="hero-banner_wrapper wd-home">
            <div className="hero-banner_bg">
              <Image
                src={home.heroImage}
                alt=""
                fill
                priority
                sizes="100vw"
                className="hero-banner_still"
                quality={90}
              />
              <video
                className="hero-banner_video"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster={home.heroImage}
              >
                <source src={home.video} type="video/mp4" />
              </video>
              <div className="hero-banner_overlay" />
            </div>
            <div className="hero-banner_content" data-reveal="true">
              <div className="hero-banner_contain container-large">
                <div className="hero-banner_layout u-grid" data-scroll-speed="-60svh">
                  <div className="hero-banner_col col-3 left-col">
                    <p className="t-title-italic t-balance">{home.tagline}</p>
                  </div>
                  <div className="hero-banner_col col-3 offset-10">
                    <button className="btn btn-image-hover" type="button" onClick={() => setFilmOpen(true)}>
                      <div className="btn-preview-image">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={home.watchImage} alt="Video preview" />
                      </div>
                      <div className="btn-content-wrapper">
                        <span className="btn-text">{home.watchLabel}</span>
                        <div className="btn-icon">
                          <div className="icon" style={{ width: "100%", height: "100%" }}>
                            <PlayIcon />
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hero-banner_title-contain container">
                <div className="hero-banner_title-wrapper u-grid" data-scroll-speed="-60svh">
                  <div className="hero-banner_title-inner col-10 offset-1">
                    <h1 className="hero-banner_title">{home.title}</h1>
                  </div>
                </div>
              </div>
              <HeroClouds />
            </div>
          </div>
        </div>

        <div className="home-section cover-panel home-intro-split">
          <div className="home-intro_photo">
            <Image src={home.introImage} alt="" fill sizes="50vw" className="img-fill" quality={90} />
          </div>
          <section className="padding-top-large-bottom-medium m-pb-625 bg-white" data-nav-theme="dark">
            <div className="container-large">
              <div className="home-intro_layout u-grid no-gap">
                <div className="home-intro_col col-6 offset-4">
                  <div className="v-flex_left-med">
                    <div className="home-intro_quote u-relative">
                      <p className="t-title-italic">{home.introEyebrow}</p>
                      <div className="scribble-el home-intro_svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="191" height="62" viewBox="0 0 191 62" fill="none">
                          <path
                            d="M118.724 58.7528C118.294 58.6791 117.864 58.6055 100.366 49.0644C82.8682 39.5233 48.315 20.517 30.4718 10.0644C12.6285 -0.388222 12.5421 -1.71124 36.0859 2.44741C59.6297 6.60606 106.806 16.2865 133.762 22.9765C160.717 29.6666 166.022 33.0729 169.147 35.3181C172.273 37.5633 173.058 38.5442 173.1 39.5016C173.35 45.3222 163.85 46.2865 149.288 49.0828C138.092 51.2326 118.988 52.1583 97.2931 48.3677C75.5984 44.5772 51.8457 35.3501 39.7294 29.4302C27.613 23.5104 27.8526 21.1774 28.4154 19.295C28.9781 17.4126 29.8566 16.0515 31.4371 14.7652C33.0175 13.4788 35.2731 12.3084 43.4827 11.3262C51.6922 10.344 65.7874 9.58545 82.6551 10.7279C99.5227 11.8703 118.736 14.9367 135.943 19.125C153.149 23.3133 167.767 28.5306 176.506 31.9721C185.244 35.4136 187.659 36.9213 189.084 38.436C190.509 39.9507 190.87 41.4267 188.779 43.548C186.688 45.6693 182.134 48.391 173.577 51.3311C165.02 54.2713 152.599 57.3473 123.174 59.0529C93.7497 60.7585 47.6976 61.0006 0.25 61.25"
                            stroke="#BABABA"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            fill="none"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-scroll-fade">
                      <h3 className="h3 text-indent-4col">{home.intro}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="wd-mnt">
          <section className="tall-parallax-banner">
            <div className="tall-parallax-banner_inner">
              <div className="tall-parallax-banner_media">
                <Image src={home.seasonImage} alt="" fill sizes="100vw" className="img-fill" quality={90} />
              </div>
              <div className="container-large">
                <div className="u-grid no-gap">
                  <div className="layout-col col-2 offset-2" data-scroll-speed="-20em" data-scroll-from="20em">
                    <div className="v-flex_left-small">
                      <p className="layout-title">{home.seasonTitle}</p>
                      <p className="t-body">{home.seasonBody}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <CardFlick />

        <section className="padding-large bg-white cover-panel stack-quote quote-split" data-nav-theme="dark">
          <div className="quote-split_photo">
            <Image src={home.quoteImage} alt="" fill sizes="50vw" className="img-fill" quality={90} />
          </div>
          <div className="container-large">
            <div className="home-intro_layout u-grid no-gap">
              <div className="home-intro_col col-4 offset-4">
                <div className="home-intro_quote u-relative">
                  <div className="v-flex_left-xs">
                    <div className="quote-mark">“</div>
                    <p className="t-body_italic text-indent-2col">{home.founderQuote}</p>
                    <p className="t-body">-</p>
                    <div className="quote-credits_wrap">
                      <p className="t-body">{home.founderName}</p>
                      <p className="t-body is-faded">{home.founderRole}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="padding-large bg-white camps-preview cover-panel stack-camps" data-nav-theme="dark">
          <div className="container-large">
            <div className="v-flex_center" style={{ marginBottom: "var(--size-375)" }}>
              <h2 className="section-title-xxl">{home.plantsTitle}</h2>
            </div>
            <p className="layout-title" style={{ marginBottom: "var(--size-15)" }}>
              {home.plantsEyebrow}
            </p>
            <p className="t-body camps-preview_copy">
              {home.plantsBody}
            </p>
            <div className="camps-preview_grid">
              {camps.map((camp) => (
                <Link
                  key={camp.slug}
                  href={`/camps/${camp.slug}`}
                  className="camps-preview_card"
                  data-cursor-text="Learn More"
                >
                  <div className="camps-preview_image">
                    <Image src={camp.image} alt={camp.title} fill sizes="33vw" style={{ objectFit: "cover" }} />
                  </div>
                  <div className="camps-preview_content">
                    <h3 className="h3">{camp.title}</h3>
                    <p className="t-body">{camp.excerpt}</p>
                    <button className="btn btn-mobile" type="button">
                      <div className="btn-inner">
                        <span className="btn-text">Learn More</span>
                        <div className="btn-icon">
                          <div className="icon" style={{ width: "100%", height: "100%" }}>
                            <PlusIcon />
                          </div>
                        </div>
                      </div>
                    </button>
                    <div className="horizontal-scroll_camp-coordinates">{camp.coords}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="padding-none bg-dark cover-panel stack-globe">
          <div className="travel-globe">
            <div className="travel-globe_head">
              <div className="container-large">
                <div className="h-line_el" />
                <div className="travel-globe_head-layout u-grid">
                  <div className="travel-globe_head-col_left col-4">
                    <p className="layout-title_sm is-std_case is-faded">
                      {home.globeFromCoords}
                      <br />
                      {home.globeFrom}
                    </p>
                  </div>
                  <div className="travel-globe_head-col_center col-4">
                    <h3 className="h3">{home.globeTitle}</h3>
                    <p className="t-body is-faded">{home.globeBody}</p>
                  </div>
                  <div className="travel-globe_head-col_right col-4">
                    <p className="layout-title_sm is-std_case is-faded">
                      {home.globeToCoords}
                      <br />
                      {home.globeTo}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="travel-globe_outer">
              <div className="travel-globe_inner">
                <Image
                  src={home.globeImage}
                  alt=""
                  width={1920}
                  height={1080}
                  className="travel-globe_component-img"
                  sizes="100vw"
                  quality={90}
                />
                <div className="map-location_item is-ct">
                  <p className="t-title-italic is-faded">{home.globeFromLabel}</p>
                  <p className="layout-title_md is-white">{home.globeFromPlace}</p>
                </div>
                <div className="map-location_item is-ant text-brand">
                  <p className="t-title-italic">{home.globeToLabel}</p>
                  <p className="layout-title_md">{home.globeToPlace}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="basic-banner cover-panel stack-cta">
          <div className="basic-banner_bg">
            <Image src={home.ctaImage} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
            <div className="basic-banner_overlay" />
          </div>
          <div className="basic-banner_content">
            <div className="basic-banner_layout u-grid">
              <div className="basic-banner_inner col-6 offset-3">
                <div className="v-flex_center">
                  <h3 className="h3">{outro.title}</h3>
                  <div className="liquid-glass_wrap large-btn_hover">
                    <LiquidGlass />
                    <Link className="btn btn-standard" href={outro.href}>
                      <div className="btn-inner">
                        <span className="btn-text">{outro.button}</span>
                        <div className="btn-icon">
                          <div className="icon" style={{ width: "100%", height: "100%" }}>
                            <PlusIcon />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeaturedWork />
      </div>

      {filmOpen ? (
        <div className="film-modal" onClick={() => setFilmOpen(false)} role="dialog">
          <button className="film-modal_close" type="button" onClick={() => setFilmOpen(false)}>
            Close
          </button>
          <video className="film-modal_video" controls autoPlay playsInline>
            <source src={home.video} type="video/mp4" />
          </video>
        </div>
      ) : null}
    </main>
  );
}
