import { productExtras, productExtrasLabels as labels } from "@/data/productExtras";
import "./product-extras.css";

/**
 * Extra content blocks under a product detail page (/itineraries/<slug>):
 * key specs, applications, a performance and sustainability note and an FAQ.
 * PLACEHOLDER COPY from data/productExtras.ts. Renders nothing for unknown slugs.
 */
export function ProductExtras({ slug }: { slug: string }) {
  const extra = productExtras[slug];
  if (!extra) return null;

  return (
    <section className="bg-white px" data-nav-theme="dark" aria-label="Product details">
      <div className="container-large">
        <div className="px-block">
          <h2 className="layout-title px-label">{labels.specs}</h2>
          <dl className="px-specs">
            {extra.specs.map((s) => (
              <div key={s.label} className="px-specs_row">
                <dt className="layout-title_sm px-specs_key">{s.label}</dt>
                <dd className="t-body">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="px-block">
          <h2 className="layout-title px-label">{labels.applications}</h2>
          <ul className="px-apps">
            {extra.applications.map((a) => (
              <li key={a} className="t-body px-apps_item">
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="px-block">
          <h2 className="layout-title px-label">{labels.note}</h2>
          <div>
            <p className="h3 px-note_title">{extra.note.title}</p>
            <p className="t-body px-note_body">{extra.note.body}</p>
          </div>
        </div>

        <div className="px-block">
          <h2 className="layout-title px-label">{labels.faq}</h2>
          <div className="px-faq">
            {extra.faq.map((f) => (
              <details key={f.q} className="px-faq_item">
                <summary className="t-body px-faq_q">{f.q}</summary>
                <p className="t-body px-faq_a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
