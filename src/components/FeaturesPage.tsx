import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import logoSrc from '../assets/ai-boost-logo.svg'

const PURPLE = '#7B4FFF'
const CHECKOUT_URL = '/pricing'
const SITE_URL = 'https://aiboostnow.com'

const css = `
* { box-sizing: border-box; }
body { margin: 0; }
.ab-wrap { font-family: 'Inter', system-ui, sans-serif; background: #fff; color: #0C0B1D; overflow-x: hidden; }
.ab-nav-bar { border-bottom:1px solid #E8E4F4; position:sticky; top:0; background:#fff; z-index:200; }
.ab-nav { max-width:1200px; margin:0 auto; padding:0 24px; height:80px; display:grid; grid-template-columns:1fr auto 1fr; align-items:center; }
.ab-nav-links { display:flex; align-items:center; justify-content:center; gap:32px; }
.ab-nav-cta { display:flex; align-items:center; justify-content:flex-end; gap:12px; }
.ab-nav-link { color:#5A5A7A; font-size:15px; font-weight:500; text-decoration:none; }
.ab-logo { height:75px; width:auto; display:block; }
.ab-btn-primary { background:#7B4FFF; color:#fff; font-size:14px; font-weight:600; padding:11px 22px; border-radius:8px; text-decoration:none; white-space:nowrap; }
.ab-hamburger { display:none; background:none; border:none; cursor:pointer; padding:8px; color:#0C0B1D; line-height:1; }
.ab-mobile-menu { display:none; position:fixed; top:80px; left:0; right:0; background:#fff; border-bottom:1px solid #E8E4F4; box-shadow:0 8px 32px rgba(0,0,0,.1); z-index:199; padding:16px 24px 24px; flex-direction:column; gap:4px; }
.ab-mobile-menu.open { display:flex; }
.ab-mobile-link { color:#0C0B1D; font-size:17px; font-weight:600; text-decoration:none; padding:14px 0; border-bottom:1px solid #F0ECF8; }
.ab-mobile-cta { display:block; background:#7B4FFF; color:#fff; font-size:16px; font-weight:700; padding:15px; border-radius:10px; text-decoration:none; text-align:center; margin-top:12px; }
.ab-footer { border-top:1px solid #E8E4F4; padding:40px 64px; display:flex; justify-content:space-between; align-items:center; background:#F8F7FF; flex-wrap:wrap; gap:16px; }
.ab-footer-link { font-size:13px; color:#9090B0; text-decoration:none; }
.ft-hero { background: linear-gradient(135deg, #F8F7FF 0%, #F0ECF8 100%); border-bottom:1px solid #E8E4F4; padding:80px 64px 72px; text-align:center; }
.ft-hero-inner { max-width:800px; margin:0 auto; }
.ft-h1 { font-size:52px; font-weight:900; line-height:1.08; letter-spacing:-2px; margin:0 0 24px; color:#0C0B1D; }
.ft-hero-p { font-size:19px; color:#5A5A7A; line-height:1.7; margin:0 0 40px; max-width:620px; margin-left:auto; margin-right:auto; }
.ft-stats { display:flex; justify-content:center; gap:56px; flex-wrap:wrap; margin-top:48px; padding-top:40px; border-top:1px solid #E0D8FF; }
.ft-stat-val { font-size:40px; font-weight:900; color:${PURPLE}; line-height:1; }
.ft-stat-lbl { font-size:13px; color:#9090B0; margin-top:6px; }
.ft-section { padding:88px 64px; }
.ft-section-alt { background:#F8F7FF; border-top:1px solid #E8E4F4; border-bottom:1px solid #E8E4F4; }
.ft-section-inner { max-width:1200px; margin:0 auto; }
.ft-section-header { text-align:center; margin-bottom:56px; }
.ft-h2 { font-size:40px; font-weight:900; letter-spacing:-1.2px; margin:0 0 16px; color:#0C0B1D; }
.ft-h2-sub { font-size:17px; color:#5A5A7A; max-width:560px; margin:0 auto; line-height:1.6; }
.ft-pill { display:inline-flex; align-items:center; gap:8px; background:#F3F0FF; border:1px solid #D4C9FF; border-radius:100px; padding:5px 14px; margin-bottom:20px; font-size:12px; font-weight:700; color:${PURPLE}; text-transform:uppercase; letter-spacing:.5px; }
.ft-pro-badge { display:inline-block; background:#FFB800; color:#7A5000; font-size:10px; font-weight:800; padding:2px 8px; border-radius:100px; text-transform:uppercase; letter-spacing:.5px; margin-left:8px; vertical-align:middle; }
.ft-feat-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
.ft-feat-card { background:#fff; border:1.5px solid #E8E4F4; border-radius:16px; padding:32px 28px; }
.ft-feat-icon { font-size:36px; margin-bottom:16px; }
.ft-feat-title { font-size:18px; font-weight:800; color:#0C0B1D; margin-bottom:12px; }
.ft-feat-desc { font-size:14px; color:#5A5A7A; line-height:1.65; margin-bottom:16px; }
.ft-feat-bullets { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:8px; }
.ft-feat-bullet { display:flex; gap:8px; align-items:flex-start; font-size:13px; color:#5A5A7A; }
.ft-feat-check { color:${PURPLE}; font-weight:900; flex-shrink:0; margin-top:1px; }
.ft-two-col { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; }
.ft-two-col-text h2 { font-size:36px; font-weight:900; letter-spacing:-1px; margin:0 0 16px; color:#0C0B1D; line-height:1.15; }
.ft-two-col-text p { font-size:16px; color:#5A5A7A; line-height:1.7; margin:0 0 24px; }
.ft-two-col-bullets { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:12px; }
.ft-two-col-bullet { display:flex; gap:10px; align-items:flex-start; font-size:14px; color:#5A5A7A; }
.ft-panel { background:#fff; border:1.5px solid #E8E4F4; border-radius:20px; padding:32px; box-shadow:0 8px 32px rgba(123,79,255,.08); }
.ft-type-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
.ft-type-card { background:#fff; border:1.5px solid #E8E4F4; border-radius:12px; padding:20px 16px; display:flex; flex-direction:column; align-items:flex-start; gap:8px; position:relative; }
.ft-type-card-pro { border-color:#FFB800; background:#FFFDF0; }
.ft-type-name { font-size:13px; font-weight:700; color:#0C0B1D; font-family:monospace; }
.ft-type-desc { font-size:12px; color:#5A5A7A; line-height:1.5; }
.ft-crawler-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:10px; }
.ft-crawler-tag { background:#F3F0FF; border:1px solid #E0D8FF; border-radius:8px; padding:8px 12px; font-size:12px; font-weight:600; color:#5A2FCC; text-align:center; }
.ft-analytics-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:20px; }
.ft-analytics-card { background:#F8F7FF; border:1.5px solid #E8E4F4; border-radius:14px; padding:24px; display:flex; gap:16px; align-items:flex-start; }
.ft-lang-grid { display:flex; flex-wrap:wrap; gap:12px; justify-content:center; }
.ft-lang-tag { background:#fff; border:1.5px solid #E8E4F4; border-radius:10px; padding:10px 18px; font-size:14px; font-weight:600; color:#0C0B1D; display:flex; align-items:center; gap:8px; }
.ft-bh-table { width:100%; border-collapse:collapse; }
.ft-bh-table th { font-size:10px; font-weight:700; color:#9090B0; text-transform:uppercase; letter-spacing:.5px; padding:0 8px 10px; text-align:left; }
.ft-bh-table th:last-child { text-align:center; }
.ft-bh-table td { padding:6px 8px; border-top:1px solid #EEE9FF; }
.ft-bh-day { font-size:13px; font-weight:600; color:#0C0B1D; min-width:36px; display:inline-block; }
.ft-bh-time { background:#F8F7FF; border:1.5px solid #E8E4F4; border-radius:6px; font-size:12px; color:#0C0B1D; padding:5px 8px; width:64px; text-align:center; font-family:monospace; display:inline-block; }
.ft-bh-sep { font-size:12px; color:#B0B0C8; padding:0 4px; }
.ft-bh-check { width:16px; height:16px; accent-color:${PURPLE}; display:block; margin:0 auto; }
.ft-bh-closed { font-size:11px; color:#FF6B6B; font-weight:600; text-align:center; display:block; }
.ft-cta { padding:96px 64px; text-align:center; background:linear-gradient(135deg,#F3F0FF 0%,#E8E4F4 100%); border-top:1px solid #D4C9FF; }
@media (max-width:960px) {
  .ab-nav { padding:0 20px; height:64px; }
  .ab-nav-links { display:none; }
  .ab-hamburger { display:flex; align-items:center; justify-content:center; }
  .ab-logo { height:52px; }
  .ft-hero { padding:56px 24px 48px; }
  .ft-h1 { font-size:34px; letter-spacing:-1px; }
  .ft-hero-p { font-size:16px; }
  .ft-stats { gap:32px; }
  .ft-section { padding:56px 24px; }
  .ft-h2 { font-size:28px; }
  .ft-feat-grid { grid-template-columns:1fr; }
  .ft-two-col { grid-template-columns:1fr; gap:40px; }
  .ft-type-grid { grid-template-columns:repeat(2,1fr); }
  .ft-crawler-grid { grid-template-columns:repeat(2,1fr); }
  .ft-analytics-grid { grid-template-columns:1fr; }
  .ab-footer { padding:32px 20px; flex-direction:column; align-items:flex-start; }
}
@media (max-width:480px) {
  .ft-type-grid { grid-template-columns:1fr; }
  .ft-lang-grid { gap:8px; }
}
`

const siteTypes = [
  { icon: '🏪', name: 'LocalBusiness',             desc: 'General local service with address & hours', pro: false },
  { icon: '🍽️', name: 'Restaurant',                desc: 'Menu, cuisine, reservations, food schema', pro: false },
  { icon: '🏨', name: 'Hotel',                     desc: 'Amenities, check-in, room types, star rating', pro: false },
  { icon: '🏢', name: 'Organization',               desc: 'Generic organization: company, non-profit, brand', pro: false },
  { icon: '🏥', name: 'MedicalClinic',             desc: 'Specialty, accepting patients, opening hours', pro: true },
  { icon: '⚖️', name: 'LegalService',              desc: 'Practice areas, attorney, jurisdiction', pro: true },
  { icon: '🎓', name: 'EducationalOrganization',   desc: 'Courses, accreditation, campus info', pro: true },
  { icon: '💪', name: 'HealthClub',                desc: 'Fitness amenities, membership, class schedules', pro: true },
  { icon: '🦷', name: 'Dentist',                   desc: 'Dental specialty, insurance accepted, booking', pro: true },
  { icon: '🏠', name: 'RealEstateAgent',           desc: 'Property listings, service area, contact', pro: true },
  { icon: '👤', name: 'Person',                    desc: 'Portfolio, author, speaker, professional profile', pro: true },
  { icon: '📰', name: 'NewsMediaOrganization',     desc: 'Publisher schema, editorial team, topics', pro: true },
  { icon: '🎫', name: 'Event',                     desc: 'Date, venue, ticket link, performer schema', pro: true },
]

const crawlers = [
  'GPTBot (ChatGPT)', 'ClaudeBot', 'Google-Extended', 'PerplexityBot',
  'CCBot (Common Crawl)', 'Amazonbot', 'FacebookBot', 'Bytespider',
  'SemrushBot', 'AhrefsBot', 'DotBot', 'DataForSeoBot',
  'Diffbot', 'YandexBot', 'BingBot / Copilot', 'Applebot',
  'anthropic-ai', 'cohere-ai', 'omgili', 'Timpibot',
  'YouBot', 'Kangaroo Bot', 'Scrapy', 'Ia_archiver',
  'MJ12bot', '+ more',
]

const analyticsItems = [
  {
    icon: '📊',
    title: 'Google Analytics 4',
    desc: 'Paste your G-XXXXXXX measurement ID — tracking script is injected site-wide automatically.',
  },
  {
    icon: '🏷️',
    title: 'Google Tag Manager',
    desc: 'GTM container script injected in <head> and <body>. Works alongside GA4 or standalone.',
  },
  {
    icon: '🔍',
    title: 'Search Console Verification',
    desc: 'Add the meta tag token from Google Search Console — no manual HTML edits needed.',
  },
  {
    icon: '📱',
    title: 'Meta Pixel',
    desc: 'Full Meta Pixel integration (previously Facebook Pixel) — pixel ID is all you need.',
  },
]

const languages = [
  { flag: '🇬🇧', code: 'EN', name: 'English' },
  { flag: '🇩🇪', code: 'DE', name: 'Deutsch' },
  { flag: '🇫🇷', code: 'FR', name: 'Français' },
  { flag: '🇪🇸', code: 'ES', name: 'Español' },
  { flag: '🇮🇹', code: 'IT', name: 'Italiano' },
  { flag: '🇷🇺', code: 'RU', name: 'Русский' },
  { flag: '🇧🇷', code: 'PT', name: 'Português' },
  { flag: '🇨🇳', code: 'ZH', name: '中文' },
  { flag: '🇸🇦', code: 'AR', name: 'العربية' },
  { flag: '🇯🇵', code: 'JA', name: '日本語' },
  { flag: '🇷🇸', code: 'SR', name: 'Srpski' },
]

const bhRows = [
  { day: 'Mon', open: '09:00', close: '17:00', isOpen: true },
  { day: 'Tue', open: '09:00', close: '17:00', isOpen: true },
  { day: 'Wed', open: '09:00', close: '17:00', isOpen: true },
  { day: 'Thu', open: '09:00', close: '18:00', isOpen: true },
  { day: 'Fri', open: '09:00', close: '16:00', isOpen: true },
  { day: 'Sat', open: '10:00', close: '14:00', isOpen: true },
  { day: 'Sun', open: '',      close: '',      isOpen: false },
]

export function FeaturesPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  const canonicalUrl = `${SITE_URL}/features`
  const pageTitle = 'Features — AI Boost for Joomla'
  const pageDescription = 'All features of AI Boost for Joomla: Schema.org JSON-LD, XML sitemap, hreflang, robots.txt, llms.txt, IndexNow, OpenGraph, GA4, Meta Pixel, 13 site type presets, 11 language packs, and business hours widget.'

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Features', item: canonicalUrl },
    ],
  }

  return (
    <div className="ab-wrap">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="AI Boost" />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
      </Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'AI Boost',
        url: SITE_URL,
        contactPoint: { '@type': 'ContactPoint', email: 'support@aiboostnow.com', contactType: 'customer support' },
      }) }} />

      <style>{css}</style>

      <div className="ab-nav-bar">
        <nav className="ab-nav">
          <div>
            <Link to="/"><img src={logoSrc} className="ab-logo" alt="AI Boost" /></Link>
          </div>
          <div className="ab-nav-links">
            <Link to="/features" className="ab-nav-link" style={{ color: PURPLE, fontWeight: 700 }}>Features</Link>
            <Link to="/pricing"  className="ab-nav-link">Pricing</Link>
            <Link to="/docs"     className="ab-nav-link">Docs</Link>
            <Link to="/blog"     className="ab-nav-link">Blog</Link>
            <Link to="/faq"      className="ab-nav-link">FAQ</Link>
          </div>
          <div className="ab-nav-cta">
            <Link to={CHECKOUT_URL} className="ab-btn-primary">Get AI Boost →</Link>
            <button className="ab-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
              {menuOpen
                ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              }
            </button>
          </div>
        </nav>
      </div>

      <div className={`ab-mobile-menu${menuOpen ? ' open' : ''}`}>
        <Link to="/features" className="ab-mobile-link" onClick={close} style={{ color: PURPLE }}>Features</Link>
        <Link to="/pricing"  className="ab-mobile-link" onClick={close}>Pricing</Link>
        <Link to="/docs"     className="ab-mobile-link" onClick={close}>Docs</Link>
        <Link to="/blog"     className="ab-mobile-link" onClick={close}>Blog</Link>
        <Link to="/faq"      className="ab-mobile-link" onClick={close}>FAQ</Link>
        <Link to={CHECKOUT_URL} className="ab-mobile-cta" onClick={close}>Get AI Boost →</Link>
      </div>

      {/* HERO */}
      <section className="ft-hero">
        <div className="ft-hero-inner">
          <div className="ft-pill">Complete feature overview</div>
          <h1 className="ft-h1">
            Every SEO &amp; AEO feature.<br />
            <span style={{ color: PURPLE }}>One plugin.</span>
          </h1>
          <p className="ft-hero-p">
            AI Boost for Joomla covers every signal that Google, ChatGPT, Perplexity, and Bing Copilot use to understand and recommend your site — Schema.org, sitemaps, llms.txt, IndexNow, analytics, and more.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to={CHECKOUT_URL} className="ab-btn-primary" style={{ fontSize: 15, padding: '13px 28px', borderRadius: 10 }}>
              Get AI Boost for Joomla →
            </Link>
            <Link to="/docs" style={{ background: 'transparent', border: '1.5px solid #D4C9FF', color: '#5A5A7A', fontSize: 15, fontWeight: 600, padding: '13px 24px', borderRadius: 10, textDecoration: 'none' }}>
              View documentation
            </Link>
          </div>
          <div className="ft-stats">
            {[['20+', 'Schema.org types'], ['13', 'Site type presets'], ['25+', 'AI crawler rules'], ['11', 'Admin languages'], ['5 min', 'Install time']].map(([v, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div className="ft-stat-val">{v}</div>
                <div className="ft-stat-lbl">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEMA.ORG */}
      <section className="ft-section">
        <div className="ft-section-inner">
          <div className="ft-section-header">
            <div className="ft-pill">🧠 Schema.org JSON-LD</div>
            <h2 className="ft-h2">Structured data for every page type</h2>
            <p className="ft-h2-sub">AI Boost injects valid JSON-LD schema into every page — automatically, with no manual coding. Google, Bing, and AI engines use this to understand what your pages are about.</p>
          </div>
          <div className="ft-feat-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
            <div className="ft-feat-card">
              <div className="ft-feat-icon">🏢</div>
              <div className="ft-feat-title">Organisation Identity</div>
              <div className="ft-feat-desc">Site name, logo, description, contact info, social links, address, and geo-coordinates — all in one place. Used as the base for every schema type.</div>
              <ul className="ft-feat-bullets">
                {['Name, logo, description', 'Address + geo-coordinates', 'Phone, email, contact type', 'Social profile links'].map(b => (
                  <li key={b} className="ft-feat-bullet"><span className="ft-feat-check">✓</span><span>{b}</span></li>
                ))}
              </ul>
            </div>
            <div className="ft-feat-card">
              <div className="ft-feat-icon">❓</div>
              <div className="ft-feat-title">FAQ Schema</div>
              <div className="ft-feat-desc">FAQPage schema generated two ways — auto-detect finds FAQ sections in your Joomla content, or enter questions manually in the plugin settings.</div>
              <ul className="ft-feat-bullets">
                {['Auto-detection from page content', 'Applies to all pages or specific types', 'Google rich result eligible'].map(b => (
                  <li key={b} className="ft-feat-bullet"><span className="ft-feat-check">✓</span><span>{b}</span></li>
                ))}
                <li className="ft-feat-bullet"><span className="ft-feat-check">✓</span><span>Manual FAQ entry <span className="ft-pro-badge">Developer+</span></span></li>
              </ul>
            </div>
            <div className="ft-feat-card">
              <div className="ft-feat-icon">🎫</div>
              <div className="ft-feat-title">Event Schema <span className="ft-pro-badge">Developer+</span></div>
              <div className="ft-feat-desc">Full Event schema with date, location, ticket URL, performer, organiser, and event status. Makes your events appear in Google's event carousel.</div>
              <ul className="ft-feat-bullets">
                {['Start/end date & time', 'Event location (virtual or physical)', 'Ticket URL & offer price', 'Organiser & performer schema'].map(b => (
                  <li key={b} className="ft-feat-bullet"><span className="ft-feat-check">✓</span><span>{b}</span></li>
                ))}
              </ul>
            </div>
            <div className="ft-feat-card">
              <div className="ft-feat-icon">📄</div>
              <div className="ft-feat-title">Article &amp; Breadcrumb</div>
              <div className="ft-feat-desc">Article schema on every Joomla article page with headline, author, date, and image. BreadcrumbList generated from category hierarchy automatically.</div>
              <ul className="ft-feat-bullets">
                {['Headline, author, datePublished', 'Article image auto-detected', 'BreadcrumbList on every page', 'Supports NewsArticle & BlogPosting'].map(b => (
                  <li key={b} className="ft-feat-bullet"><span className="ft-feat-check">✓</span><span>{b}</span></li>
                ))}
              </ul>
            </div>
            <div className="ft-feat-card">
              <div className="ft-feat-icon">🕐</div>
              <div className="ft-feat-title">Business Hours Widget</div>
              <div className="ft-feat-desc">Compact 7-row table replaces 46 individual fields. Set open/close times per day and generate <code style={{ background: '#F3F0FF', padding: '1px 5px', borderRadius: 4, fontSize: 13, color: PURPLE }}>openingHoursSpecification</code> JSON-LD instantly.</div>
              <ul className="ft-feat-bullets">
                {['"All same hours" or individual per day', 'Mark any day as closed', 'Schema.org output auto-generated'].map(b => (
                  <li key={b} className="ft-feat-bullet"><span className="ft-feat-check">✓</span><span>{b}</span></li>
                ))}
                <li className="ft-feat-bullet"><span className="ft-feat-check">✓</span><span>Advanced Hours (multiple slots/day) <span className="ft-pro-badge">Developer+</span></span></li>
              </ul>
            </div>
            <div className="ft-feat-card">
              <div className="ft-feat-icon">🛒</div>
              <div className="ft-feat-title">Product &amp; Offer</div>
              <div className="ft-feat-desc">Product, Offer, and AggregateRating schema for e-commerce and catalogue pages. Compatible with HikaShop and VirtueMart article types.</div>
              <ul className="ft-feat-bullets">
                {['Product name, description, image', 'Offer with price & currency', 'AggregateRating from reviews', 'Compatible with Joomla e-commerce'].map(b => (
                  <li key={b} className="ft-feat-bullet"><span className="ft-feat-check">✓</span><span>{b}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 13 SITE TYPES */}
      <section className="ft-section ft-section-alt">
        <div className="ft-section-inner">
          <div className="ft-section-header">
            <div className="ft-pill">🏪 Site Type Presets</div>
            <h2 className="ft-h2">13 built-in schema types</h2>
            <p className="ft-h2-sub">Select your business type and AI Boost pre-fills every schema field correctly — no manual JSON, no guessing which fields to use.</p>
          </div>
          <div className="ft-type-grid">
            {siteTypes.map(t => (
              <div key={t.name} className={`ft-type-card${t.pro ? ' ft-type-card-pro' : ''}`}>
                <div style={{ fontSize: 26 }}>{t.icon}</div>
                <div className="ft-type-name">
                  {t.name}
                  {t.pro && <span className="ft-pro-badge">Pro</span>}
                </div>
                <div className="ft-type-desc">{t.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <span style={{ fontSize: 13, color: '#9090B0' }}>
              Basic types (LocalBusiness, Restaurant, Hotel, FAQPage) available on all plans. 
              Specialised types require Developer or Agency license.
            </span>
          </div>
        </div>
      </section>

      {/* BUSINESS HOURS DETAIL */}
      <section className="ft-section">
        <div className="ft-section-inner">
          <div className="ft-two-col">
            <div className="ft-two-col-text">
              <div className="ft-pill">🕐 Business Hours</div>
              <h2>Set your opening hours <span style={{ color: PURPLE }}>in seconds</span></h2>
              <p>Our compact weekly table replaces 46 individual fields from old implementations. One click to set all days the same, or configure each day individually — including advanced time slots for Developer and Agency license holders.</p>
              <ul className="ft-two-col-bullets">
                {[
                  ['One compact 7-row table instead of 46 separate fields', false],
                  ['"All same hours" or individual per day — one click toggle', false],
                  ['Mark any day as closed with a single checkbox', false],
                  ['Advanced Hours: multiple time slots per day', true],
                  ['Instant openingHoursSpecification JSON-LD output', false],
                ].map(([text, pro]) => (
                  <li key={text as string} className="ft-two-col-bullet">
                    <span style={{ color: PURPLE, fontWeight: 900, flexShrink: 0 }}>✓</span>
                    <span>{text as string}{pro && <span className="ft-pro-badge">Developer+</span>}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="ft-panel">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#0C0B1D' }}>Business Hours</span>
                <div style={{ display: 'flex', background: '#E8E4F4', borderRadius: 8, padding: 3, gap: 2 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, padding: '5px 10px', borderRadius: 6, background: PURPLE, color: '#fff' }}>Individual days</span>
                  <span style={{ fontSize: 11, fontWeight: 600, padding: '5px 10px', borderRadius: 6, color: '#9090B0' }}>All same</span>
                </div>
              </div>
              <table className="ft-bh-table">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Open</th>
                    <th>Close</th>
                    <th>Open?</th>
                  </tr>
                </thead>
                <tbody>
                  {bhRows.map(row => (
                    <tr key={row.day}>
                      <td><span className="ft-bh-day">{row.day}</span></td>
                      {row.isOpen ? (
                        <>
                          <td><span className="ft-bh-time">{row.open}</span></td>
                          <td><span className="ft-bh-time">{row.close}</span></td>
                          <td><input type="checkbox" checked readOnly className="ft-bh-check" /></td>
                        </>
                      ) : (
                        <>
                          <td colSpan={2}><span className="ft-bh-closed">Closed</span></td>
                          <td><input type="checkbox" readOnly className="ft-bh-check" /></td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ marginTop: 16, background: '#F0ECF8', borderRadius: 10, padding: '12px 14px', fontSize: 11, fontFamily: 'monospace', color: '#5A5A7A', lineHeight: 1.6 }}>
                <span style={{ color: PURPLE }}>"openingHoursSpecification"</span>: [{' '}
                <span style={{ color: '#1A9C50' }}>"Mo-Fr 09:00-17:00"</span>, <span style={{ color: '#1A9C50' }}>"Sa 10:00-14:00"</span> ]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* XML SITEMAP + HREFLANG */}
      <section className="ft-section ft-section-alt">
        <div className="ft-section-inner">
          <div className="ft-two-col">
            <div className="ft-panel">
              <div style={{ background: '#F8F7FF', borderRadius: 12, padding: '20px 20px', fontFamily: 'monospace', fontSize: 12, color: '#5A5A7A', lineHeight: 1.8 }}>
                <div style={{ color: '#9090B0', marginBottom: 8 }}>&lt;?xml version="1.0" encoding="UTF-8"?&gt;</div>
                <div style={{ color: PURPLE }}>&lt;urlset xmlns="…"&gt;</div>
                <div style={{ paddingLeft: 16 }}>
                  <div style={{ color: PURPLE }}>&lt;url&gt;</div>
                  <div style={{ paddingLeft: 16 }}>
                    <div><span style={{ color: '#1A9C50' }}>&lt;loc&gt;</span>https://example.com/about<span style={{ color: '#1A9C50' }}>&lt;/loc&gt;</span></div>
                    <div><span style={{ color: '#1A9C50' }}>&lt;lastmod&gt;</span>2026-05-01<span style={{ color: '#1A9C50' }}>&lt;/lastmod&gt;</span></div>
                    <div><span style={{ color: '#1A9C50' }}>&lt;priority&gt;</span>0.8<span style={{ color: '#1A9C50' }}>&lt;/priority&gt;</span></div>
                    <div><span style={{ color: '#1A9C50' }}>&lt;xhtml:link</span> rel="alternate" hreflang="en" href="…"/&gt;</div>
                    <div><span style={{ color: '#1A9C50' }}>&lt;xhtml:link</span> rel="alternate" hreflang="de" href="…"/&gt;</div>
                  </div>
                  <div style={{ color: PURPLE }}>&lt;/url&gt;</div>
                </div>
                <div style={{ color: PURPLE }}>&lt;/urlset&gt;</div>
              </div>
            </div>
            <div className="ft-two-col-text">
              <div className="ft-pill">🗺️ XML Sitemap + Hreflang</div>
              <h2>Dynamic sitemap with <span style={{ color: PURPLE }}>multilingual support</span></h2>
              <p>Auto-generated XML sitemap submitted to Google, Bing, and all major search engines. Includes proper hreflang tags for every Joomla language — critical for multilingual sites.</p>
              <ul className="ft-two-col-bullets">
                {[
                  'Dynamic sitemap at /sitemap.xml',
                  'Articles, categories, and menu items',
                  'Hreflang for all installed Joomla languages',
                  'Exclude specific articles or categories',
                  'Configurable priority and change frequency',
                  'Auto-pinged on content publish',
                ].map(b => (
                  <li key={b} className="ft-two-col-bullet">
                    <span style={{ color: PURPLE, fontWeight: 900, flexShrink: 0 }}>✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROBOTS.TXT + LLMS.TXT */}
      <section className="ft-section">
        <div className="ft-section-inner">
          <div className="ft-section-header">
            <div className="ft-pill">🤖 AI Crawler Control</div>
            <h2 className="ft-h2">robots.txt + llms.txt — full AI control</h2>
            <p className="ft-h2-sub">Decide which AI crawlers can access your content. Generate llms.txt so ChatGPT, Perplexity, and Claude discover your content correctly.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <div className="ft-feat-card">
              <div className="ft-feat-icon">🚫</div>
              <div className="ft-feat-title">robots.txt — 25+ AI crawlers</div>
              <div className="ft-feat-desc">Choose to allow or block any combination of 25+ AI and SEO crawlers. Rules are written to robots.txt automatically — no server access needed.</div>
              <div className="ft-crawler-grid" style={{ marginTop: 16 }}>
                {crawlers.slice(0, 12).map(c => (
                  <div key={c} className="ft-crawler-tag">{c}</div>
                ))}
                <div className="ft-crawler-tag" style={{ gridColumn: 'span 4', textAlign: 'center', color: '#9090B0' }}>+ 13 more crawlers configured</div>
              </div>
            </div>
            <div className="ft-feat-card">
              <div className="ft-feat-icon">📝</div>
              <div className="ft-feat-title">llms.txt generator <span className="ft-pro-badge">Developer+</span></div>
              <div className="ft-feat-desc">llms.txt is the emerging standard that tells AI assistants what your site is about, what pages matter, and how to cite your content correctly.</div>
              <ul className="ft-feat-bullets" style={{ marginTop: 16 }}>
                {[
                  'Auto-generated at /llms.txt',
                  'Includes site description, key pages, and links',
                  'ChatGPT, Perplexity, and Claude read it',
                  'Helps AI engines recommend your content',
                  'Customisable content and page selection',
                  'Regenerated on every content update',
                ].map(b => (
                  <li key={b} className="ft-feat-bullet"><span className="ft-feat-check">✓</span><span>{b}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INDEXNOW */}
      <section className="ft-section ft-section-alt">
        <div className="ft-section-inner">
          <div className="ft-two-col">
            <div className="ft-two-col-text">
              <div className="ft-pill">⚡ IndexNow <span className="ft-pro-badge" style={{ marginLeft: 0 }}>Developer+</span></div>
              <h2>Instant indexing <span style={{ color: PURPLE }}>the moment you publish</span></h2>
              <p>IndexNow is a protocol supported by Bing, Yandex, and Seznam that lets you push new URLs directly to search engines — instead of waiting for them to crawl your site.</p>
              <ul className="ft-two-col-bullets">
                {[
                  'Auto-submit on article publish or update',
                  'Supported by Bing / Copilot, Yandex, Seznam',
                  'API key auto-generated and stored',
                  'Key file served at /indexnow-key.txt',
                  'Submission log in plugin settings',
                  'No quota limits — submit as often as needed',
                ].map(b => (
                  <li key={b} className="ft-two-col-bullet">
                    <span style={{ color: PURPLE, fontWeight: 900, flexShrink: 0 }}>✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="ft-panel">
              <div style={{ fontSize: 13, fontWeight: 700, color: '#9090B0', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16 }}>IndexNow — instant URL submission</div>
              {[
                { label: 'Article published', status: 'Submitted', color: '#1A9C50', bg: '#F0FFF4' },
                { label: 'Article updated', status: 'Submitted', color: '#1A9C50', bg: '#F0FFF4' },
                { label: 'Category created', status: 'Submitted', color: '#1A9C50', bg: '#F0FFF4' },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #F0ECF8' }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <span style={{ fontSize: 14 }}>⚡</span>
                    <span style={{ fontSize: 13, color: '#0C0B1D', fontWeight: 600 }}>{row.label}</span>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: row.bg, color: row.color }}>{row.status}</span>
                </div>
              ))}
              <div style={{ marginTop: 20, background: '#F8F7FF', borderRadius: 10, padding: '14px 16px' }}>
                <div style={{ fontSize: 12, color: '#9090B0', marginBottom: 6 }}>Engines receiving submissions</div>
                <div style={{ display: 'flex', gap: 10 }}>
                  {['Bing / Copilot', 'Yandex', 'Seznam'].map(e => (
                    <span key={e} style={{ fontSize: 12, fontWeight: 700, background: '#F3F0FF', color: PURPLE, padding: '4px 10px', borderRadius: 6 }}>{e}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANALYTICS */}
      <section className="ft-section">
        <div className="ft-section-inner">
          <div className="ft-section-header">
            <div className="ft-pill">📊 Analytics Suite</div>
            <h2 className="ft-h2">All tracking. One plugin.</h2>
            <p className="ft-h2-sub">Paste your tracking IDs and AI Boost injects the scripts automatically on every page — no theme edits, no code changes, no separate plugins.</p>
          </div>
          <div className="ft-analytics-grid">
            {analyticsItems.map(item => (
              <div key={item.title} className="ft-analytics-card">
                <div style={{ fontSize: 32, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: '#0C0B1D', marginBottom: 8 }}>{item.title}</div>
                  <div style={{ fontSize: 14, color: '#5A5A7A', lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPENGRAPH + TWITTER */}
      <section className="ft-section ft-section-alt">
        <div className="ft-section-inner">
          <div className="ft-two-col">
            <div className="ft-two-col-text">
              <div className="ft-pill">📣 Social &amp; Meta Tags</div>
              <h2>OpenGraph + Twitter Cards on <span style={{ color: PURPLE }}>every page</span></h2>
              <p>AI Boost generates correct og:title, og:description, og:image, and Twitter Card meta tags on every Joomla page. Per-article overrides available from the article editor — no extra fields to find.</p>
              <ul className="ft-two-col-bullets">
                {[
                  'og:title, og:description, og:image on every page',
                  'Twitter Cards (summary_large_image)',
                  'Per-article image & description overrides',
                  'Default fallback image configurable',
                  'og:type set correctly (article, website)',
                  'og:locale for multilingual Joomla sites',
                ].map(b => (
                  <li key={b} className="ft-two-col-bullet">
                    <span style={{ color: PURPLE, fontWeight: 900, flexShrink: 0 }}>✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="ft-panel">
              <div style={{ fontSize: 12, color: '#9090B0', fontFamily: 'monospace', lineHeight: 1.8 }}>
                {[
                  ['og:title', 'Your Page Title — Site Name'],
                  ['og:description', 'Meta description text…'],
                  ['og:image', 'https://example.com/image.jpg'],
                  ['og:type', 'article'],
                  ['og:locale', 'en_GB'],
                  ['twitter:card', 'summary_large_image'],
                  ['twitter:title', 'Your Page Title'],
                ].map(([prop, val]) => (
                  <div key={prop} style={{ display: 'flex', gap: 8, borderBottom: '1px solid #F0ECF8', paddingBottom: 8, marginBottom: 8 }}>
                    <span style={{ color: PURPLE, flexShrink: 0 }}>&lt;meta</span>
                    <span style={{ color: '#1A9C50', flexShrink: 0 }}>property="{prop}"</span>
                    <span style={{ color: '#9090B0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>content="{val}" /&gt;</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11 LANGUAGES */}
      <section className="ft-section">
        <div className="ft-section-inner">
          <div className="ft-section-header">
            <div className="ft-pill">🌍 Multilingual</div>
            <h2 className="ft-h2">11 admin language packs</h2>
            <p className="ft-h2-sub">The entire plugin admin interface is translated into 11 languages. Multilingual custom fields let you enter Organisation data in each language separately.</p>
          </div>
          <div className="ft-lang-grid">
            {languages.map(l => (
              <div key={l.code} className="ft-lang-tag">
                <span style={{ fontSize: 20 }}>{l.flag}</span>
                <span style={{ fontWeight: 700 }}>{l.code}</span>
                <span style={{ color: '#9090B0', fontWeight: 400, fontSize: 13 }}>{l.name}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {[
              ['🌐', 'Multilingual Organisation fields', 'Enter your site name, description, and address in each language — AI Boost outputs the correct language for each visitor.'],
              ['🗺️', 'Hreflang for every language', 'Sitemap and page headers include hreflang tags for all installed Joomla languages, telling Google which language to serve per visitor.'],
              ['🔤', 'Plugin UI fully translated', 'Every setting label, tab name, tooltip, and validation message is translated — no need to switch your Joomla admin language to use the plugin.'],
            ].map(([icon, title, desc]) => (
              <div key={title as string} style={{ background: '#F8F7FF', border: '1.5px solid #E8E4F4', borderRadius: 14, padding: '24px 20px' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: '#0C0B1D', marginBottom: 8 }}>{title}</div>
                <div style={{ fontSize: 14, color: '#5A5A7A', lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK SETUP + DEBUG */}
      <section className="ft-section ft-section-alt">
        <div className="ft-section-inner">
          <div className="ft-section-header">
            <div className="ft-pill">⚙️ Setup &amp; Management</div>
            <h2 className="ft-h2">Up in 5 minutes. No coding.</h2>
            <p className="ft-h2-sub">Quick Setup wizard walks you through everything in order. Debug tab lets you verify output before going live.</p>
          </div>
          <div className="ft-feat-grid">
            <div className="ft-feat-card">
              <div className="ft-feat-icon">🚀</div>
              <div className="ft-feat-title">Quick Setup Wizard</div>
              <div className="ft-feat-desc">Step-by-step guided setup: pick your site type, enter your organisation details, configure analytics — all in one flow. New sites are production-ready in under 5 minutes.</div>
              <ul className="ft-feat-bullets">
                {['Site type selection', 'Organisation identity form', 'Analytics IDs entry', 'Validation of required fields'].map(b => (
                  <li key={b} className="ft-feat-bullet"><span className="ft-feat-check">✓</span><span>{b}</span></li>
                ))}
              </ul>
            </div>
            <div className="ft-feat-card">
              <div className="ft-feat-icon">🔄</div>
              <div className="ft-feat-title">Vertical Presets</div>
              <div className="ft-feat-desc">13 pre-built configuration profiles. Select Restaurant, Hotel, Medical Clinic, or any other type and AI Boost auto-fills every relevant schema field with the correct structure.</div>
              <ul className="ft-feat-bullets">
                {['13 preset configurations', 'Auto-fills schema fields', 'Switch type at any time', 'Overrides manual entries'].map(b => (
                  <li key={b} className="ft-feat-bullet"><span className="ft-feat-check">✓</span><span>{b}</span></li>
                ))}
              </ul>
            </div>
            <div className="ft-feat-card">
              <div className="ft-feat-icon">🐛</div>
              <div className="ft-feat-title">Debug &amp; Staging Mode</div>
              <div className="ft-feat-desc">Flash messages show which schema types are active on each page. HTML markers make it easy to find injected output. Staging mode disables all output on non-live sites.</div>
              <ul className="ft-feat-bullets">
                {['Per-page schema flash messages', 'HTML comment markers', 'Staging mode for dev environments', 'Schema.org validation link'].map(b => (
                  <li key={b} className="ft-feat-bullet"><span className="ft-feat-check">✓</span><span>{b}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ft-cta">
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: '-1.2px', margin: '0 0 20px', color: '#0C0B1D' }}>
            One plugin. <span style={{ color: PURPLE }}>Pay once.</span>
          </h2>
          <p style={{ fontSize: 18, color: '#5A5A7A', margin: '0 0 36px', lineHeight: 1.65 }}>
            Core SEO &amp; schema features are available on all plans. Advanced features — IndexNow, llms.txt, Events, specialised site types, and Advanced Hours — are included in Developer and Agency licenses.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
            <Link to={CHECKOUT_URL} className="ab-btn-primary" style={{ fontSize: 16, padding: '14px 32px', borderRadius: 10 }}>
              View pricing →
            </Link>
            <Link to="/docs" style={{ background: '#fff', border: '1.5px solid #D4C9FF', color: '#5A5A7A', fontSize: 15, fontWeight: 600, padding: '14px 24px', borderRadius: 10, textDecoration: 'none' }}>
              Read documentation
            </Link>
          </div>
          <div style={{ fontSize: 13, color: '#9090B0' }}>Joomla 4 · 5 · 6 · PHP 8.1 – 8.5 · 30-day money-back guarantee</div>
        </div>
      </section>

      <footer className="ab-footer">
        <Link to="/"><img src={logoSrc} style={{ height: 52, width: 'auto' }} alt="AI Boost" /></Link>
        <div style={{ fontSize: 13, color: '#9090B0' }}>© 2026 AI Boost · aiboostnow.com</div>
        <div style={{ display: 'flex', gap: 20 }}>
          <Link to="/features" className="ab-footer-link">Features</Link>
          <Link to="/pricing"  className="ab-footer-link">Pricing</Link>
          <Link to="/docs"     className="ab-footer-link">Docs</Link>
          <Link to="/blog"     className="ab-footer-link">Blog</Link>
          <Link to="/faq"      className="ab-footer-link">FAQ</Link>
          <a href="mailto:support@aiboostnow.com" className="ab-footer-link">Contact</a>
        </div>
      </footer>
    </div>
  )
}
