"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { footer, home, nav, trips } from "@/data/site";
import { CloseIcon, LiquidGlass, PlayIcon, PlusIcon, Wordmark } from "./Icons";
import { HowItWorksFlyout } from "./HowItWorksFlyout";
import { ScrollSystem } from "./ScrollSystem";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookies, setCookies] = useState(true);
  const [newsletter, setNewsletter] = useState(false);
  const [cursor, setCursor] = useState({ x: -100, y: -100, label: "" });
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [hoverImage, setHoverImage] = useState<string | null>(null);
  const [shownImage, setShownImage] = useState<string | null>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenGroup(null);
    setHoverImage(null);
  };

  const previewImage = (src: string | null | undefined) => {
    setHoverImage(src || null);
  };

  const activeNav = nav.left.find((item) => item.label === openGroup);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-cursor-text]");
      setCursor({
        x: e.clientX,
        y: e.clientY,
        label: target?.getAttribute("data-cursor-text") ?? "",
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    document.body.dataset.menuOpen = String(menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    if (hoverImage) {
      setShownImage(hoverImage);
      return;
    }
    const t = window.setTimeout(() => setShownImage(null), 560);
    return () => window.clearTimeout(t);
  }, [hoverImage]);

  return (
    <div>
      <ScrollSystem />
      <div className={`custom-cursor${cursor.label ? " is-label" : ""}`} style={{ left: cursor.x, top: cursor.y }}>
        <div className="custom-cursor_dot" />
        <div className="custom-cursor_label">
          <span className="custom-cursor_label-text">{cursor.label}</span>
        </div>
      </div>

      <div className="grid-overlay" aria-hidden="true">
        <div className="grid-line grid-line-1" />
        <div className="grid-line grid-line-5" />
        <div className="grid-line grid-line-9" />
        <div className="grid-overlay_container container-small">
          <div className="grid-overlay_small-wrap">
            <div className="grid-line_inner grid-line-2" />
            <div className="grid-line_inner grid-line-8" />
          </div>
        </div>
        <div className="grid-overlay_container container-large">
          <div className="grid-overlay_grid u-grid">
            <div className="grid-line_col col-2">
              <div className="grid-line_inner grid-line-3" />
            </div>
            <div className="grid-line_col col-2" />
            <div className="grid-line_col col-2">
              <div className="grid-line_inner grid-line-4" />
            </div>
            <div className="grid-line_col col-2">
              <div className="grid-line_inner grid-line-6" />
            </div>
            <div className="grid-line_col col-2" />
            <div className="grid-line_col col-2">
              <div className="grid-line_inner grid-line-7" />
            </div>
          </div>
        </div>
      </div>

      <nav>
        <div className="nav-contain container">
          <div className="nav-layout u-grid">
            <div className="nav-col col-4">
              <ul className="nav-ul nav-left">
                {nav.left.map((item) => (
                  <li key={item.label}>
                    <LiquidGlass />
                    <button
                      className={`btn ${menuOpen && openGroup === item.label ? "btn-tab-active" : "btn-tab"}`}
                      type="button"
                      onClick={() => {
                        if (menuOpen && openGroup === item.label) {
                          setMenuOpen(false);
                          setOpenGroup(null);
                          return;
                        }
                        setOpenGroup(item.label);
                        setMenuOpen(true);
                      }}
                    >
                      <div className="btn-inner">
                        <span className="btn-text">{item.label}</span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav-col col-4">
              <Link href="/">
                <Wordmark />
              </Link>
            </div>
            <div className="nav-col col-4">
              <ul className="nav-ul nav-right">
                <li>
                  <LiquidGlass />
                  <Link className="btn btn-cta" href="/prices">
                    <div className="btn-inner">
                      <span className="btn-text">Specs</span>
                      <div className="btn-icon">
                        <div className="icon" style={{ width: "100%", height: "100%" }}>
                          <PlusIcon />
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <LiquidGlass />
                  <Link className="btn btn-cta" href="/enquire">
                    <div className="btn-inner">
                      <span className="btn-text">Enquire</span>
                      <div className="btn-icon">
                        <div className="icon" style={{ width: "100%", height: "100%" }}>
                          <PlusIcon />
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="nav-layout_mobile">
            <LiquidGlass />
            <div className="nav-col">
              <button className="btn nav-btn menu-toggle" type="button" onClick={() => {
                setMenuOpen(true);
                setOpenGroup(null);
              }}>
                <div className="btn-inner">
                  <span className="btn-text">Menu</span>
                </div>
              </button>
            </div>
            <div className="nav-col">
              <div className="nav-logo">
                <Link href="/">
                  <Wordmark compact />
                </Link>
              </div>
            </div>
            <div className="nav-col">
              <Link className="btn nav-btn menu-enquire" href="/enquire">
                <div className="btn-inner">
                  <span className="btn-text">Enquire</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className={`menu-component${menuOpen ? " open" : ""}`}>
          <div className="menu-bg" onClick={closeMenu} />
          <div className="menu-wrap">
            <div className="menu-contain container">
              <div className="menu-layout u-grid">
                <div className="menu-col col-4">
                  <div className="menu-el" role="menu" aria-label="Main navigation menu">
                    <div className="menu-inner is-desktop">
                      <div className="menu-dropdown_wrap">
                        <Link
                          className="nav-link"
                          href="/"
                          onClick={closeMenu}
                          onMouseEnter={() => previewImage(nav.homeImage)}
                        >
                          Home
                        </Link>
                      </div>
                      <div className="menu-line" />
                      {activeNav ? (
                        <div className="menu-group">
                          {activeNav.groups.map((group, gi) => (
                            <div key={group.title}>
                              {gi > 0 ? <div className="menu-line" /> : null}
                              <div className="menu-group_links">
                                <div className="menu-dropdown_title">{group.title}</div>
                                {group.links.map((link) =>
                                  link.external ? (
                                    <a
                                      key={link.href}
                                      className="nav-link is-external"
                                      href={link.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onMouseEnter={() => previewImage(link.image)}
                                    >
                                      <div className="menu-arrow_link">
                                        {link.label}
                                        <div className="menu-arrow">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none" className="menu-arrow_svg is-alt">
                                            <path d="M0.353516 0.5H6.35352M6.35352 0.5L0.353516 6.5M6.35352 0.5V6.5" stroke="black" />
                                          </svg>
                                        </div>
                                      </div>
                                      {link.excerpt ? (
                                        <div className="menu-link_info">
                                          <div className="menu-link_info_text">
                                            <p>{link.excerpt}</p>
                                          </div>
                                        </div>
                                      ) : null}
                                    </a>
                                  ) : (
                                    <Link
                                      key={link.href}
                                      className="nav-link"
                                      href={link.href}
                                      onClick={closeMenu}
                                      onMouseEnter={() => previewImage(link.image)}
                                    >
                                      {link.label}
                                    </Link>
                                  ),
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                    <div className="menu-footer is-desktop">
                      <div className="menu-footer_layout">
                        <Link className="btn btn-large hover-orange" href="/enquire" onClick={closeMenu}>
                          <div className="btn-inner">
                            <span className="btn-text">Enquire now</span>
                            <div className="btn-icon">
                              <div className="icon" style={{ width: "100%", height: "100%" }}>
                                <PlusIcon />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="mobile-menu">
                      <div className="mobile-menu_top">
                        <button className="btn btn-large menu-close" type="button" onClick={closeMenu}>
                          <div className="btn-inner">
                            <span className="btn-text">Close</span>
                            <div className="btn-icon">
                              <div className="icon" style={{ width: "100%", height: "100%" }}>
                                <PlusIcon />
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                      <div className="mobile-menu_title-bar">
                        {openGroup ? (
                          <button className="mobile-menu_header-close" type="button" onClick={() => setOpenGroup(null)}>
                            {openGroup}
                          </button>
                        ) : (
                          <Link className="mobile-menu_home-link" href="/" onClick={closeMenu}>
                            Home
                          </Link>
                        )}
                      </div>
                      {!openGroup ? (
                        <div className="mobile-menu_nav">
                          {nav.left.map((item) => (
                            <button
                              key={item.label}
                              className="mobile-menu_accordion-trigger"
                              type="button"
                              onClick={() => setOpenGroup(item.label)}
                            >
                              <span>{item.label}</span>
                              <span style={{ width: 20, height: 20 }}>
                                <PlusIcon />
                              </span>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="mobile-menu_content">
                          {activeNav?.groups.map((group, gi) => (
                            <div className="menu-group" key={group.title}>
                              {gi > 0 ? <div className="menu-line" /> : null}
                              <div className="menu-group_links">
                                <div className="menu-dropdown_title">{group.title}</div>
                                {group.links.map((link) =>
                                  link.external ? (
                                    <a key={link.href} className="nav-link is-external" href={link.href} target="_blank" rel="noopener noreferrer">
                                      {link.label}
                                    </a>
                                  ) : (
                                    <Link key={link.href} className="nav-link" href={link.href} onClick={closeMenu}>
                                      {link.label}
                                    </Link>
                                  ),
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="mobile-menu_footer">
                        <Link className="btn btn-large" href="/prices" onClick={closeMenu}>
                          <div className="btn-inner">
                            <span className="btn-text">Price List</span>
                            <div className="btn-icon">
                              <div className="icon" style={{ width: "100%", height: "100%" }}>
                                <PlusIcon />
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link className="btn btn-large hover-orange" href="/enquire" onClick={closeMenu}>
                          <div className="btn-inner">
                            <span className="btn-text">Enquire now</span>
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
                <div className="menu-col col-4 is-desktop">
                  <div className={`menu-img_wrap${menuOpen && hoverImage ? " is-open" : ""}`}>
                    {shownImage ? (
                      <div className="menu-img_item">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={shownImage} alt="" />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {children}

      <HowItWorksFlyout />

      <footer className="footer-component">
        <div className="footer">
          <div className="footer-container container-large">
            <div className="footer-layout u-grid">
              <div className="footer-col col-8">
                <div className="footer-col_inner u-grid">
                  <div className="footer-col_inner_col col-3">
                    <div className="footer-brand-mark">
                      <Wordmark />
                    </div>
                  </div>
                  <FooterCol
                    groups={[
                      { title: "Project Enquiries", links: footer.guests },
                      { title: "Trade Enquiries", links: footer.trade },
                      { title: "Other Enquiries", links: footer.other },
                    ]}
                  />
                  <FooterCol
                    groups={[
                      {
                        title: "Grades",
                        links: [
                          ...trips.map((t) => ({ href: `/itineraries/${t.slug}`, label: t.title })),
                          { href: "/itineraries", label: "View All" },
                        ],
                      },
                      { title: "Plants", links: footer.camps },
                    ]}
                  />
                  <FooterCol
                    groups={[
                      { title: "Operations", links: footer.antarctica },
                      { title: "About", links: footer.about },
                      { title: "Social", links: footer.social },
                    ]}
                  />
                </div>
              </div>
              <div className="footer-col col-4 offset-8">
                <div className="footer-cta_layout">
                  <button className="btn btn-image" type="button">
                    <div className="image-with-overlay" style={{ ["--overlay-opacity" as string]: 0.2 }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="image-with-overlay_img"
                        alt="Video preview"
                        src={home.watchImage}
                      />
                      <div className="image-overlay" />
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
                  <div className="footer-cta_grid">
                    <Link className="btn btn-large" href="/prices">
                      <div className="btn-inner">
                        <span className="btn-text">Price List</span>
                        <div className="btn-icon">
                          <div className="icon" style={{ width: "100%", height: "100%" }}>
                            <PlusIcon />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link className="btn btn-large hover-orange" href="/enquire">
                      <div className="btn-inner">
                        <span className="btn-text">Enquire now</span>
                        <div className="btn-icon">
                          <div className="icon" style={{ width: "100%", height: "100%" }}>
                            <PlusIcon />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <button className="btn btn-large hover-blue" type="button" onClick={() => setNewsletter(true)}>
                    <div className="btn-inner">
                      <span className="btn-text">Newsletter Signup</span>
                      <div className="btn-icon">
                        <div className="icon" style={{ width: "100%", height: "100%" }}>
                          <PlusIcon />
                        </div>
                      </div>
                    </div>
                  </button>
                  <div className={`newsletter-popup${newsletter ? " open" : ""}`}>
                    <div className="newsletter-top">
                      <div className="newsletter-title_wrap">
                        <p className="t-body">Newsletter Signup</p>
                        <button type="button" onClick={() => setNewsletter(false)} aria-label="Close newsletter" style={{ background: "none", border: 0, width: 20, height: 20, color: "inherit", cursor: "pointer" }}>
                          <CloseIcon />
                        </button>
                      </div>
                      <p className="newsletter-body t-body is-faded">
                        Be the first to know about new grades, plant capacity, and other updates from Argus Cements.
                      </p>
                    </div>
                    <form
                      className="newsletter-form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        setNewsletter(false);
                      }}
                    >
                      <div className="newsletter-input_wrap">
                        <input type="text" placeholder="Name & Surname" name="name" />
                      </div>
                      <div className="newsletter-input_wrap">
                        <input type="email" placeholder="Email Address" name="email" />
                      </div>
                      <div className="newsletter-input_wrap">
                        <button type="submit" className="submit-button">
                          Submit Form
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom_layout">
              <div className="footer-logo_contain container">
                <div className="footer-bottom_logo">
                  <p className="footer-giant">ARGUS CEMENTS</p>
                </div>
              </div>
              <div className="footer-info_layout">
                <div className="footer-bot_border is-left" />
                <div className="footer-bot_border is-right" />
                <div className="footer-info_contain container u-grid">
                  <div className="footer-info_left col-4">
                    <div className="icon" style={{ width: 17, height: 17 }}>
                      <PlusIcon />
                    </div>
                    <div className="footer-badges">
                      {["ISO", "BIS", "LEED", "ESG", "QC", "40Y"].map((b) => (
                        <div key={b} className="footer-badge">
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="footer-info_middle-desktop col-4">
                    <p className="footer-quote">“Specify it once. Pour it once.”</p>
                    <p className="footer-author">– Helena Argus</p>
                  </div>
                  <div className="footer-info_right col-4">
                    <div className="footer-right_wrap">
                      <div className="footer-info_right-top">
                        {footer.legal.map((l) => (
                          <Link key={l.href} href={l.href} className="t-body_sm footer-bottom_link">
                            {l.label}
                          </Link>
                        ))}
                      </div>
                      <div className="footer-info_right-bottom">
                        <p className="t-body_sm">Argus Cements© 2026. All rights reserved. Demo only.</p>
                      </div>
                    </div>
                    <div className="icon" style={{ width: 17, height: 17 }}>
                      <PlusIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {cookies && (
        <div className="cookie-banner visible">
          <LiquidGlass />
          <p>
            We use cookies to track website interactions and improve your experience.{" "}
            <Link href="/legal/privacy-policy">Cookie Policy.</Link>
          </p>
          <div className="actions">
            <button className="consent-btn" type="button" onClick={() => setCookies(false)}>
              <span>Accept</span>
            </button>
            <button className="consent-btn" type="button" onClick={() => setCookies(false)}>
              <span>Reject</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function FooterCol({
  title,
  links,
  groups,
}: {
  title?: string;
  links?: { href: string; label: string; external?: boolean }[];
  groups?: { title: string; links: { href: string; label: string; external?: boolean }[] }[];
}) {
  const blocks = groups ?? (title && links ? [{ title, links }] : []);
  return (
    <div className="footer-col_inner_col col-3">
      <div className="footer-menu_layout">
        {blocks.map((block) => (
          <div className="footer-menu_item" key={block.title}>
            <p className="t-title-italic">{block.title}</p>
            <ul>
              {block.links.map((link) => (
                <li key={link.href + link.label}>
                  {link.href.startsWith("http") || link.href.startsWith("mailto") || link.href.startsWith("tel") ? (
                    <a href={link.href} target="_blank" rel="noreferrer" className="t-body is-faded footer-link">
                      {link.label}
                    </a>
                  ) : (
                    <Link className="t-body is-faded footer-link" href={link.href}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
