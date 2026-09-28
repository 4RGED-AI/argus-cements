import Image from "next/image";
import Link from "next/link";
import { hero, intro, outro, trips } from "@/data/site";
import { HeroClouds } from "@/components/HeroClouds";
import { LiquidGlass, PlusIcon } from "@/components/Icons";

export function ItinerariesPage() {
  return (
    <main className="page-main">
      <div className="page-content">
        <div className="hero-banner">
          <div className="hero-banner_wrapper">
            <div className="hero-banner_bg">
              <Image src={hero.image} alt="Hero background" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
              <div className="hero-banner_overlay" />
            </div>
            <div className="hero-banner_content" data-reveal="true">
              <div className="hero-banner_contain mid container" data-scroll-speed="-60svh">
                <h2 className="hero-banner_subtitle">{hero.subtitle}</h2>
              </div>
              <div className="hero-banner_contain bot container" data-scroll-speed="-60svh">
                <h1 className="hero-banner_title-basic">{hero.title}</h1>
              </div>
              <HeroClouds />
            </div>
          </div>
        </div>

        <section className="padding-large bg-white" data-nav-theme="dark">
          <div className="container-large">
            <div className="home-intro_layout u-grid no-gap">
              <div className="home-intro_col col-4 offset-6">
                <div className="v-flex_left-small">
                  <div className="scribble-el itinerary-intro_svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="360" height="49" viewBox="0 0 360 49" fill="none">
                      <path
                        d="M118.975 6.40837C114.821 7.46901 110.667 8.52964 82.7161 15.8509C54.7653 23.1722 3.14362 36.7219 25.4172 39.7976C47.6908 42.8733 145.424 35.0643 202.091 28.8772C258.758 22.69 271.397 18.3613 231.052 20.3351C190.707 22.309 96.9936 30.7165 111.231 28.0693C125.467 25.4221 250.494 11.4655 313.048 4.87109C375.602 -1.72331 371.896 -0.532557 317.605 3.8998C263.314 8.33215 158.552 15.97 102.002 20.4806C45.4522 24.9912 40.2887 26.143 36.1125 27.26C23.9358 30.5167 17.22 36.395 12.153 42.1662C10.944 43.4142 9.5176 44.4543 7.49611 45.5126C5.47462 46.571 2.9013 47.6161 0.25 48.6928"
                        stroke="#1F2A44"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <p className="layout-title">{intro.title}</p>
                  <p className="t-body" style={{ whiteSpace: "pre-line" }}>
                    {intro.body}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="padding-large bg-transparent itineraries-section">
          <div className="container-large">
            <div className="itineraries-wrap">
              {trips.map((trip) => (
                <div className="itinerary-item u-grid no-gap" key={trip.slug}>
                  <div className="itineraries-left col-2">
                    {trip.season ? <p className="t-title-italic">{trip.season}</p> : null}
                  </div>
                  <div className="itineraries-right col-10">
                    <Link className="itinerary-item_link" href={`/itineraries/${trip.slug}`} data-cursor-text="Learn More">
                      <div className="itinerary-item_inner">
                        <div className="itinerary-item_image">
                          <Image src={trip.image} alt={trip.title} fill sizes="(max-width: 768px) 100vw, 80vw" style={{ objectFit: "cover" }} />
                        </div>
                        <div className="itinerary-item_content">
                          <div className="itinerary-item_content-inner">
                            <div className="itinerary-item_header">
                              <h3 className="itinerary-item_title t-title-italic">{trip.title}</h3>
                            </div>
                            <div className="itinerary-item_footer">
                              <div className="itinerary-item_meta">
                                {trip.tags.map((tag, i) => (
                                  <span key={tag}>
                                    {i > 0 ? <span className="itinerary-item_meta-divider" /> : null}
                                    <span className="itinerary-item_meta-item">{tag}</span>
                                  </span>
                                ))}
                              </div>
                              <p className="itinerary-item_excerpt t-body">{trip.excerpt}</p>
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

        <section className="basic-banner">
          <div className="basic-banner_bg">
            <Image src={outro.image} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
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
      </div>
    </main>
  );
}
