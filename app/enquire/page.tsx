import Image from "next/image";
import EnquireForm from "@/components/EnquireForm";
import { enquire } from "@/data/enquire";
import "@/components/enquire.css";

/**
 * Enquire page. Placeholder copy and contact details live in data/enquire.ts;
 * the form is front-end only (components/EnquireForm.tsx). The page sits on
 * white, so enquire.css also turns the shared nav orange while it is shown.
 */
export default function Page() {
  const { image, form, contact } = enquire;

  return (
    <main className="page-main eq eq-page">
      <section className="bg-white eq-top">
        <div className="container-large">
          <div className="home-intro_layout u-grid no-gap eq-intro">
            <div className="eq-intro_head">
              <p className="layout-title">{enquire.eyebrow}</p>
              <h1 className="eq-title">{enquire.title}</h1>
            </div>
            <div className="eq-intro_text">
              {enquire.intro.map((text) => (
                <p key={text} className="t-body eq-body">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white eq-media">
        <div className="container-large">
          <div className="home-intro_layout u-grid no-gap">
            <div className="eq-image">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 767px) 100vw, 84vw"
                quality={85}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="padding-large bg-white eq-main">
        <div className="container-large">
          <div className="home-intro_layout u-grid no-gap eq-layout">
            <div className="eq-form_col">
              <p className="layout-title">{form.label}</p>
              <h2 className="h3 eq-h">{form.title}</h2>
              <EnquireForm />
            </div>
            <aside className="eq-aside">
              <p className="layout-title">{contact.label}</p>
              <h2 className="h3 eq-h eq-aside_title">{contact.title}</h2>
              <dl className="eq-details">
                {contact.items.map((item) => (
                  <div key={item.label} className="eq-detail">
                    <dt className="layout-title_sm is-faded">{item.label}</dt>
                    <dd className="t-body">{item.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="layout-title_sm is-faded eq-topics_label">{contact.topicsLabel}</p>
              <ul className="eq-topics">
                {contact.topics.map((t) => (
                  <li key={t} className="t-body">
                    {t}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
