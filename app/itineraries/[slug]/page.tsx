import Image from "next/image";
import { notFound } from "next/navigation";
import { trips } from "@/data/site";

export function generateStaticParams() {
  return trips.map((t) => ({ slug: t.slug }));
}

export default async function TripPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trip = trips.find((t) => t.slug === slug);
  if (!trip) notFound();

  return (
    <main className="page-main">
      <div className="hero-banner" style={{ height: "100svh" }}>
        <div className="hero-banner_wrapper">
          <div className="hero-banner_bg">
            <Image src={trip.image} alt={trip.title} fill sizes="100vw" style={{ objectFit: "cover" }} />
            <div className="hero-banner_overlay" />
          </div>
          <div className="hero-banner_content" data-reveal="true">
            <div className="hero-banner_contain mid container">
              <h2 className="hero-banner_subtitle">{trip.season || trip.tags[1]}</h2>
            </div>
            <div className="hero-banner_contain bot container">
              <h1 className="hero-banner_title-basic" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
                {trip.title}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section className="padding-large bg-white" data-nav-theme="dark">
        <div className="container-large">
          <div className="home-intro_layout u-grid no-gap">
            <div className="home-intro_col col-4 offset-6 px-intro-left">
              <p className="layout-title">{trip.price}</p>
              <p className="t-body" style={{ marginTop: "1.25em" }}>
                {trip.excerpt}
              </p>
              <p className="t-body" style={{ marginTop: "1.25em" }}>
                Full mill certificates and pour notes would sit here on a live Argus Cements product page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
