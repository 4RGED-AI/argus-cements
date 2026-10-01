import Link from "next/link";
import { specsPage } from "@/data/specs";
import "@/components/enquire.css";
import "@/components/product-extras.css";
import "@/components/specs.css";

/**
 * Specs page (nav "Specs" button). Placeholder product specifications from
 * data/specs.ts, in the enquire page header style with key-specs rows.
 */
export default function Page() {
  const { common, products, cta } = specsPage;

  return (
    <main className="page-main eq-page sp-page">
      <section className="bg-white eq-top">
        <div className="container-large">
          <div className="home-intro_layout u-grid no-gap eq-intro">
            <div className="eq-intro_head">
              <p className="layout-title">{specsPage.eyebrow}</p>
              <h1 className="eq-title">{specsPage.title}</h1>
            </div>
            <div className="eq-intro_text">
              {specsPage.intro.map((text) => (
                <p key={text} className="t-body eq-body">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white sp-list" data-nav-theme="dark" aria-label="Product specifications">
        <div className="container-large">
          <div className="px-block">
            <h2 className="layout-title px-label">{common.label}</h2>
            <dl className="px-specs">
              {common.rows.map((s) => (
                <div key={s.label} className="px-specs_row">
                  <dt className="layout-title_sm px-specs_key">{s.label}</dt>
                  <dd className="t-body">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {products.map((p) => (
            <div key={p.slug} className="px-block">
              <div>
                <h2 className="layout-title px-label">{p.title}</h2>
                <div className="sp-links">
                  <Link className="t-body sp-link" href={`/itineraries/${p.slug}`}>
                    View product
                  </Link>
                  <Link className="t-body sp-link" href="/enquire">
                    Enquire
                  </Link>
                </div>
              </div>
              <dl className="px-specs">
                {p.rows.map((s) => (
                  <div key={s.label} className="px-specs_row">
                    <dt className="layout-title_sm px-specs_key">{s.label}</dt>
                    <dd className="t-body">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}

          <div className="sp-cta">
            <Link className="btn btn-large hover-orange" href={cta.href}>
              <span className="btn-inner">
                <span className="btn-text">{cta.label}</span>
              </span>
            </Link>
            <p className="t-body sp-note">{specsPage.note}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
