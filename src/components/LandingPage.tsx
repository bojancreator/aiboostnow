import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import logoSrc from '../assets/ai-boost-logo.svg'
import videoSrc from '../assets/hero-video.mp4'

const PURPLE = '#7B4FFF'
const SITE_URL = 'https://aiboostnow.com'
const CHECKOUT_URL = '/pricing'

const plans = [
  { name: 'Free',         price: '€0',   period: null,    sites: '1 site',    badge: null,           highlight: false, url: '/docs/getting-started' },
  { name: 'Basic',        price: '€45',  period: '/year', sites: '1 license', badge: null,           highlight: false, url: CHECKOUT_URL },
  { name: 'Professional', price: '€200', period: '/year', sites: '10 licenses', badge: 'Most Popular', highlight: true,  url: CHECKOUT_URL },
]

const feats = [
  { icon: '🧠', title: 'Schema.org JSON-LD',    desc: 'All 20+ types: LocalBusiness, Hotel, Event, FAQPage, Article, Person, Product, BreadcrumbList and more.' },
  { icon: '🗺️', title: 'XML Sitemap + Hreflang', desc: 'Dynamic sitemap auto-generated. Multilingual hreflang tags for all installed Joomla languages.' },
  { icon: '🤖', title: 'robots.txt + llms.txt',  desc: 'Block or allow 25+ AI crawlers. Generate llms.txt so ChatGPT and Perplexity can index your content.' },
  { icon: '⚡', title: 'IndexNow',               desc: 'Instant URL submission to Bing, Yandex, and Seznam the moment you publish new content.' },
  { icon: '📊', title: 'Analytics Suite',        desc: 'GA4, Google Tag Manager, Google Search Console verification, Meta Pixel — all from one panel.' },
  { icon: '🌍', title: '11 Language Packs',      desc: 'Full admin UI in EN, DE, FR, ES, IT, RU, PT, ZH, AR, JA, SR. Multilingual custom fields too.' },
  { icon: '🕐', title: 'Business Hours Widget',  desc: 'Set opening hours in seconds — compact 7-row table with "All same" or "Individual days" toggle generates proper Schema.org automatically.' },
  { icon: '🏪', title: '13 Site Type Presets',   desc: 'Restaurant, Hotel, Medical, Law firm, Gym, Real estate and more — one click fills the right schema fields.' },
]

const featureList = [
  'All plugin features included',
  'Schema.org JSON-LD (all types)',
  'Business Hours widget (compact table)',
  'XML Sitemap + hreflang',
  'OpenGraph + Twitter Cards',
  'robots.txt with AI crawler rules',
  'llms.txt generator',
  'IndexNow integration',
  'GA4, GTM, Meta Pixel',
  '13 Site Type Presets',
  '11 language packs',
  'Updates & support included',
]

const freeList = [
  'Schema.org (Organization, LocalBusiness)',
  'XML Sitemap (basic)',
  'robots.txt (basic rules)',
  'OpenGraph + Twitter Cards',
  'Google Analytics 4',
  'Community support (forum)',
]

const faqs = [
  { q: 'What does the annual subscription include?', a: 'Your subscription covers the plugin, all updates and new features released during the year, and access to our support. When your year ends, the plugin keeps working — renewal is optional.' },
  { q: 'Is it compatible with Joomla 4, 5, and 6?', a: 'Yes. AI Boost for Joomla supports Joomla 4.0 through 6.x with PHP 8.1 through 8.5.' },
  { q: 'Is there a free version?',                   a: 'Yes. The Free plan includes core SEO features: Schema.org for Organization and LocalBusiness, an XML sitemap, basic robots.txt, and OpenGraph tags. Basic and Professional plans unlock all 20+ schema types, llms.txt, IndexNow, and the full analytics suite.' },
  { q: 'Can I upgrade from Basic to Professional?',  a: 'Yes. Contact support@aiboostnow.com and we will arrange an upgrade at the price difference.' },
]

const siteTypes = [
  { icon: '🏪', name: 'LocalBusiness',             desc: 'General local service with address & hours' },
  { icon: '🍽️', name: 'Restaurant',                desc: 'Menu, cuisine, reservations, food schema' },
  { icon: '🏨', name: 'Hotel',                     desc: 'Amenities, check-in, room types, star rating' },
  { icon: '🏥', name: 'MedicalClinic',             desc: 'Specialty, accepting patients, opening hours' },
  { icon: '⚖️', name: 'LegalService',              desc: 'Practice areas, attorney, jurisdiction' },
  { icon: '🎓', name: 'EducationalOrganization',   desc: 'Courses, accreditation, campus info' },
  { icon: '💪', name: 'HealthClub',                desc: 'Fitness amenities, membership, class schedules' },
  { icon: '🦷', name: 'Dentist',                   desc: 'Dental specialty, insurance accepted, booking' },
  { icon: '🏠', name: 'RealEstateAgent',           desc: 'Property listings, service area, contact' },
  { icon: '👤', name: 'Person',                    desc: 'Portfolio, author, speaker, professional profile' },
  { icon: '📰', name: 'NewsMediaOrganization',     desc: 'Publisher schema, editorial team, topics' },
  { icon: '🎫', name: 'Event',                     desc: 'Date, venue, ticket link, performer schema' },
  { icon: '❓', name: 'FAQPage',                   desc: 'Auto-detected questions & answers on every page' },
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
  .ab-mobile-menu { display:none; position:fixed; top:72px; left:0; right:0; background:#fff; border-bottom:1px solid #E8E4F4; box-shadow:0 8px 32px rgba(0,0,0,.1); z-index:199; padding:16px 24px 24px; flex-direction:column; gap:4px; }
  .ab-mobile-menu.open { display:flex; }
  .ab-mobile-link { color:#0C0B1D; font-size:17px; font-weight:600; text-decoration:none; padding:14px 0; border-bottom:1px solid #F0ECF8; }
  .ab-mobile-cta { display:block; background:#7B4FFF; color:#fff; font-size:16px; font-weight:700; padding:15px; border-radius:10px; text-decoration:none; text-align:center; margin-top:12px; }
  .ab-hero { max-width:1200px; margin:0 auto; padding:90px 64px 72px; display:flex; align-items:center; gap:64px; }
  .ab-hero-text { flex:0 0 48%; }
  .ab-hero-video { flex:1; }
  .ab-badge { display:inline-flex; align-items:center; gap:8px; background:#F3F0FF; border:1px solid #D4C9FF; border-radius:100px; padding:6px 16px; margin-bottom:32px; }
  .ab-h1 { font-size:58px; font-weight:900; line-height:1.06; letter-spacing:-2px; margin:0 0 24px; color:#0C0B1D; }
  .ab-hero-p { font-size:18px; color:#5A5A7A; line-height:1.7; margin:0 0 40px; }
  .ab-hero-btns { display:flex; gap:14px; margin-bottom:44px; flex-wrap:wrap; }
  .ab-btn-hero { background:#7B4FFF; color:#fff; font-size:16px; font-weight:700; padding:15px 28px; border-radius:10px; text-decoration:none; box-shadow:0 4px 20px rgba(123,79,255,.3); }
  .ab-btn-outline { background:transparent; border:1.5px solid #D4C9FF; color:#5A5A7A; font-size:16px; font-weight:600; padding:15px 24px; border-radius:10px; text-decoration:none; }
  .ab-browser { background:#F8F7FF; border-radius:16px; border:1.5px solid #E8E4F4; overflow:hidden; box-shadow:0 24px 64px rgba(123,79,255,.15),0 4px 16px rgba(0,0,0,.08); }
  .ab-browser-bar { background:#F0ECF8; padding:10px 16px; display:flex; align-items:center; gap:8px; border-bottom:1px solid #E8E4F4; }
  .ab-url-bar { flex:1; background:#fff; border-radius:6px; padding:4px 12px; font-size:11px; color:#9090B0; margin-left:8px; border:1px solid #E8E4F4; }
  .ab-stats-wrap { max-width:1200px; margin:0 auto; padding:0 64px 80px; }
  .ab-stats { background:#F3F0FF; border:1px solid #E0D8FF; border-radius:16px; padding:32px 48px; display:grid; grid-template-columns:repeat(4,1fr); gap:32px; text-align:center; }
  .ab-features { background:#F8F7FF; padding:96px 64px; border-top:1px solid #E8E4F4; border-bottom:1px solid #E8E4F4; }
  .ab-h2 { font-size:44px; font-weight:900; letter-spacing:-1.5px; margin:0 0 16px; color:#0C0B1D; }
  .ab-feat-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
  .ab-feat-card { background:#fff; border:1.5px solid #E8E4F4; border-radius:16px; padding:32px 28px; }
  .ab-site-types { background:#fff; padding:96px 64px; border-top:1px solid #E8E4F4; border-bottom:1px solid #E8E4F4; }
  .ab-type-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
  .ab-type-card { background:#F8F7FF; border:1.5px solid #E8E4F4; border-radius:12px; padding:20px 16px; display:flex; flex-direction:column; align-items:flex-start; gap:8px; }
  .ab-type-name { font-size:14px; font-weight:700; color:#0C0B1D; font-family:monospace; }
  .ab-type-desc { font-size:12px; color:#5A5A7A; line-height:1.5; }
  .ab-bh { background:#F8F7FF; padding:96px 64px; border-bottom:1px solid #E8E4F4; }
  .ab-bh-inner { max-width:1200px; margin:0 auto; display:flex; align-items:center; gap:72px; }
  .ab-bh-text { flex:0 0 44%; }
  .ab-bh-pill { display:inline-flex; align-items:center; gap:8px; background:#F3F0FF; border:1px solid #D4C9FF; border-radius:100px; padding:5px 14px; margin-bottom:20px; font-size:12px; font-weight:700; color:#7B4FFF; text-transform:uppercase; letter-spacing:.5px; }
  .ab-bh-h3 { font-size:34px; font-weight:900; letter-spacing:-1.2px; margin:0 0 16px; color:#0C0B1D; line-height:1.1; }
  .ab-bh-p { font-size:16px; color:#5A5A7A; line-height:1.7; margin:0 0 28px; }
  .ab-bh-bullets { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:10px; }
  .ab-bh-bullet { display:flex; gap:10px; align-items:flex-start; font-size:14px; color:#5A5A7A; }
  .ab-bh-widget { flex:1; background:#fff; border-radius:20px; border:1.5px solid #E8E4F4; padding:28px; box-shadow:0 16px 48px rgba(123,79,255,.12),0 2px 8px rgba(0,0,0,.06); }
  .ab-bh-widget-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:20px; }
  .ab-bh-widget-title { font-size:13px; font-weight:700; color:#0C0B1D; }
  .ab-bh-toggle { display:flex; background:#E8E4F4; border-radius:8px; padding:3px; gap:2px; }
  .ab-bh-toggle-btn { font-size:11px; font-weight:600; padding:5px 10px; border-radius:6px; border:none; cursor:default; }
  .ab-bh-toggle-active { background:#7B4FFF; color:#fff; }
  .ab-bh-toggle-inactive { background:transparent; color:#9090B0; }
  .ab-bh-table { width:100%; border-collapse:collapse; }
  .ab-bh-table th { font-size:10px; font-weight:700; color:#9090B0; text-transform:uppercase; letter-spacing:.5px; padding:0 8px 10px; text-align:left; }
  .ab-bh-table th:last-child { text-align:center; }
  .ab-bh-table td { padding:6px 8px; border-top:1px solid #EEE9FF; }
  .ab-bh-day { font-size:13px; font-weight:600; color:#0C0B1D; min-width:36px; display:inline-block; }
  .ab-bh-time { background:#F8F7FF; border:1.5px solid #E8E4F4; border-radius:6px; font-size:12px; color:#0C0B1D; padding:5px 8px; width:64px; text-align:center; font-family:monospace; display:inline-block; }
  .ab-bh-sep { font-size:12px; color:#B0B0C8; padding:0 4px; }
  .ab-bh-check { width:16px; height:16px; accent-color:#7B4FFF; display:block; margin:0 auto; }
  .ab-bh-closed { font-size:11px; color:#FF6B6B; font-weight:600; text-align:center; display:block; }
  .ab-bh-schema { margin-top:16px; background:#F0ECF8; border-radius:10px; padding:12px 14px; font-size:11px; font-family:monospace; color:#5A5A7A; line-height:1.6; overflow:hidden; }
  .ab-bh-schema-key { color:#7B4FFF; }
  .ab-bh-schema-val { color:#1A9C50; }
  .ab-pricing { padding:96px 64px; background:#fff; }
  .ab-plan-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; align-items:start; max-width:960px; margin:0 auto; }
  .ab-plan { border-radius:20px; padding:32px 28px; position:relative; }
  .ab-plan-free { background:#F8F7FF; border:1.5px solid #E8E4F4; }
  .ab-plan-normal { background:#fff; border:1.5px solid #E8E4F4; box-shadow:0 2px 12px rgba(0,0,0,.05); }
  .ab-plan-highlight { background:#7B4FFF; box-shadow:0 12px 48px rgba(123,79,255,.35); transform:scale(1.04); }
  .ab-plan-btn { display:block; text-align:center; padding:13px 0; font-weight:700; font-size:14px; border-radius:10px; text-decoration:none; }
  .ab-feat-list { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:10px; }
  .ab-feat-item { display:flex; gap:10px; align-items:flex-start; }
  .ab-faq { background:#F8F7FF; padding:96px 64px; border-top:1px solid #E8E4F4; }
  .ab-cta { padding:96px 64px; text-align:center; background:#fff; }
  .ab-footer { border-top:1px solid #E8E4F4; padding:40px 64px; display:flex; justify-content:space-between; align-items:center; background:#F8F7FF; flex-wrap:wrap; gap:16px; }
  @media (max-width:900px) {
    .ab-nav { padding:0 16px; height:64px; grid-template-columns:1fr auto; }
    .ab-nav-links { display:none; }
    .ab-nav-cta a.ab-btn-primary { display:none; }
    .ab-hamburger { display:flex; align-items:center; justify-content:center; }
    .ab-logo { height:54px; }
    .ab-hero { flex-direction:column; padding:48px 20px 40px; gap:32px; }
    .ab-hero-text { flex:none; width:100%; }
    .ab-h1 { font-size:36px; letter-spacing:-1px; }
    .ab-hero-p { font-size:16px; }
    .ab-stats-wrap { padding:0 20px 48px; }
    .ab-stats { grid-template-columns:repeat(2,1fr); padding:24px; gap:20px; }
    .ab-features { padding:64px 20px; }
    .ab-feat-grid { grid-template-columns:1fr; }
    .ab-h2 { font-size:30px; }
    .ab-site-types { padding:64px 20px; }
    .ab-type-grid { grid-template-columns:repeat(2,1fr); }
    .ab-bh { padding:64px 20px; }
    .ab-bh-inner { flex-direction:column; gap:40px; }
    .ab-bh-text { flex:none; width:100%; }
    .ab-bh-h3 { font-size:26px; }
    .ab-pricing { padding:64px 20px; }
    .ab-plan-grid { grid-template-columns:1fr !important; max-width:400px; }
    .ab-plan-highlight { transform:scale(1); }
    .ab-faq { padding:64px 20px; }
    .ab-cta { padding:64px 20px; }
    .ab-footer { padding:32px 20px; flex-direction:column; align-items:flex-start; }
  }
  @media (max-width:480px) {
    .ab-h1 { font-size:30px; }
    .ab-hero-btns { flex-direction:column; }
    .ab-btn-hero, .ab-btn-outline { width:100%; text-align:center; }
    .ab-type-grid { grid-template-columns:1fr; }
  }
`

export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <div className="ab-wrap">
      <Helmet>
        <title>AI Boost for Joomla — Visible to AI Search</title>
        <meta name="description" content="AI Boost for Joomla — Make your Joomla site visible to ChatGPT, Perplexity, and Google AI Overview. Schema.org, XML sitemap, llms.txt, IndexNow. Install in 5 minutes." />
        <link rel="canonical" href="https://aiboostnow.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI Boost for Joomla — Visible to AI Search" />
        <meta property="og:description" content="Make your Joomla site visible to ChatGPT, Perplexity, and Google AI Overview. Schema.org, XML sitemap, llms.txt, IndexNow. Install in 5 minutes." />
        <meta property="og:url" content="https://aiboostnow.com/" />
        <meta property="og:site_name" content="AI Boost" />
        <meta property="og:image" content={`${SITE_URL}/og/home.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Boost for Joomla — Visible to AI Search" />
        <meta name="twitter:description" content="Make your Joomla site visible to ChatGPT, Perplexity, and Google AI Overview. Schema.org, XML sitemap, llms.txt, IndexNow. Install in 5 minutes." />
        <meta name="twitter:image" content={`${SITE_URL}/og/home.png`} />
      </Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'AI Boost',
        url: SITE_URL,
        contactPoint: { '@type': 'ContactPoint', email: 'support@aiboostnow.com', contactType: 'customer support' },
        sameAs: [],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'AI Boost',
        url: SITE_URL,
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/blog?q={search_term_string}` },
          'query-input': 'required name=search_term_string',
        },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'AI Boost for Joomla',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Joomla 4, Joomla 5, Joomla 6',
        offers: [
          { '@type': 'Offer', name: 'Basic',        price: '59.00',  priceCurrency: 'EUR', priceSpecification: { '@type': 'UnitPriceSpecification', price: '59.00',  priceCurrency: 'EUR', unitCode: 'ANN' }, availability: 'https://schema.org/InStock' },
          { '@type': 'Offer', name: 'Professional', price: '119.00', priceCurrency: 'EUR', priceSpecification: { '@type': 'UnitPriceSpecification', price: '119.00', priceCurrency: 'EUR', unitCode: 'ANN' }, availability: 'https://schema.org/InStock' },
          { '@type': 'Offer', name: 'Agency',       price: '199.00', priceCurrency: 'EUR', priceSpecification: { '@type': 'UnitPriceSpecification', price: '199.00', priceCurrency: 'EUR', unitCode: 'ANN' }, availability: 'https://schema.org/InStock' },
        ],
      }) }} />

      <style>{css}</style>

      <nav className="ab-nav-bar">
        <div className="ab-nav">
          <img src={logoSrc} className="ab-logo" alt="AI Boost" />
          <div className="ab-nav-links">
            <Link to="/features" className="ab-nav-link">Features</Link>
            <Link to="/pricing" className="ab-nav-link">Pricing</Link>
            <Link to="/docs"    className="ab-nav-link">Docs</Link>
            <Link to="/blog"    className="ab-nav-link">Blog</Link>
            <Link to="/faq"     className="ab-nav-link">FAQ</Link>
          </div>
          <div className="ab-nav-cta">
            <Link to="/pricing" className="ab-btn-primary">Get AI Boost →</Link>
            <button className="ab-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
              {menuOpen
                ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              }
            </button>
          </div>
        </div>
      </nav>

      <div className={`ab-mobile-menu${menuOpen ? ' open' : ''}`}>
        <Link to="/features" className="ab-mobile-link" onClick={close}>Features</Link>
        <Link to="/pricing" className="ab-mobile-link" onClick={close}>Pricing</Link>
        <Link to="/docs"    className="ab-mobile-link" onClick={close}>Docs</Link>
        <Link to="/blog"    className="ab-mobile-link" onClick={close}>Blog</Link>
        <Link to="/faq"     className="ab-mobile-link" onClick={close}>FAQ</Link>
        <Link to="/pricing" className="ab-mobile-cta" onClick={close}>Get AI Boost →</Link>
      </div>

      <section className="ab-hero">
        <div className="ab-hero-text">
          <div className="ab-badge">
            <span style={{ width:7, height:7, borderRadius:'50%', background:PURPLE, display:'inline-block' }} />
            <span style={{ fontSize:13, color:PURPLE, fontWeight:600 }}>Joomla 4 · 5 · 6 — PHP 8.1 – 8.5</span>
          </div>
          <h1 className="ab-h1">
            Make your Joomla site{' '}
            <span style={{ color:PURPLE }}>visible to AI search</span>
          </h1>
          <p className="ab-hero-p">
            AI Boost for Joomla generates Schema.org, XML sitemap, llms.txt, and AI crawler signals — so ChatGPT, Perplexity, and Google AI Overview recommend your site. Install in 5 minutes. No coding.
          </p>
          <div className="ab-hero-btns">
            <Link to="/pricing" className="ab-btn-hero">Get Professional — €119/year</Link>
            <Link to="/features" className="ab-btn-outline">View all features ↓</Link>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'12px 28px' }}>
            {[['Schema.org','JSON-LD'],['llms.txt','AI crawlers'],['IndexNow','Instant submit'],['11 languages','Multilingual']].map(([n,d]) => (
              <div key={n} style={{ display:'flex', alignItems:'center', gap:8 }}>
                <span style={{ color:PURPLE, fontWeight:900 }}>✓</span>
                <span style={{ fontSize:14, fontWeight:700 }}>{n}</span>
                <span style={{ fontSize:13, color:'#9090B0' }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="ab-hero-video">
          <div className="ab-browser">
            <div className="ab-browser-bar">
              <span style={{ width:10, height:10, borderRadius:'50%', background:'#FF6B6B', display:'inline-block' }} />
              <span style={{ width:10, height:10, borderRadius:'50%', background:'#FFD93D', display:'inline-block' }} />
              <span style={{ width:10, height:10, borderRadius:'50%', background:'#6BCB77', display:'inline-block' }} />
              <div className="ab-url-bar">aiboostnow.com</div>
            </div>
            <video src={videoSrc} autoPlay muted loop playsInline style={{ width:'100%', display:'block' }} />
          </div>
        </div>
      </section>

      <div className="ab-stats-wrap">
        <div className="ab-stats">
          {[['20+','Schema.org types'],['25+','AI crawler rules'],['11','Language packs'],['5 min','Setup time']].map(([v,l]) => (
            <div key={l}>
              <div style={{ fontSize:38, fontWeight:900, color:PURPLE }}>{v}</div>
              <div style={{ fontSize:13, color:'#9090B0', marginTop:4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <section id="features" className="ab-features">
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:64 }}>
            <h2 className="ab-h2">Everything AI search engines need</h2>
            <p style={{ fontSize:17, color:'#5A5A7A', maxWidth:520, margin:'0 auto' }}>One plugin covers all the signals that get your Joomla site recommended by AI engines in 2026.</p>
          </div>
          <div className="ab-feat-grid">
            {feats.map(f => (
              <div key={f.title} className="ab-feat-card">
                <div style={{ fontSize:32, marginBottom:16 }}>{f.icon}</div>
                <div style={{ fontSize:17, fontWeight:700, marginBottom:10, color:'#0C0B1D' }}>{f.title}</div>
                <div style={{ fontSize:14, color:'#5A5A7A', lineHeight:1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ab-site-types">
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <h2 className="ab-h2">13 Schema types — built in</h2>
            <p style={{ fontSize:17, color:'#5A5A7A', maxWidth:580, margin:'0 auto' }}>Every site type gets the exact structured data Google and AI engines expect. Pick your type in the plugin settings — all fields appear automatically.</p>
          </div>
          <div className="ab-type-grid">
            {siteTypes.map(t => (
              <div key={t.name} className="ab-type-card">
                <div style={{ fontSize:28 }}>{t.icon}</div>
                <div className="ab-type-name">{t.name}</div>
                <div className="ab-type-desc">{t.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:40 }}>
            <span style={{ fontSize:13, color:'#9090B0' }}>All 13 types available from Day 1 — no add-ons, no extra cost.</span>
          </div>
        </div>
      </section>

      {/* BUSINESS HOURS SPOTLIGHT */}
      <section className="ab-bh">
        <div className="ab-bh-inner">
          <div className="ab-bh-text">
            <div className="ab-bh-pill">🕐 New in v0.26</div>
            <h3 className="ab-bh-h3">
              Set your opening hours{' '}
              <span style={{ color:PURPLE }}>in seconds</span>
            </h3>
            <p className="ab-bh-p">
              Our compact weekly table replaces 46 individual fields. Pick open/close times for each day — AI Boost generates proper <code style={{ background:'#F3F0FF', padding:'2px 6px', borderRadius:4, fontSize:14, color:PURPLE }}>openingHoursSpecification</code> Schema.org JSON-LD automatically.
            </p>
            <ul className="ab-bh-bullets">
              {[
                ['✓', 'One compact 7-row table instead of 46 separate fields'],
                ['✓', 'All same hours or individual per day — one click toggle'],
                ['✓', 'Mark any day as closed with a single checkbox'],
                ['✓', 'Instant Schema.org output — no JSON editing needed'],
              ].map(([mark, text]) => (
                <li key={text} className="ab-bh-bullet">
                  <span style={{ color:PURPLE, fontWeight:900, flexShrink:0 }}>{mark}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="ab-bh-widget">
            <div className="ab-bh-widget-header">
              <span className="ab-bh-widget-title">Business Hours</span>
              <div className="ab-bh-toggle">
                <button className="ab-bh-toggle-btn ab-bh-toggle-inactive">All same</button>
                <button className="ab-bh-toggle-btn ab-bh-toggle-active">Individual</button>
              </div>
            </div>
            <table className="ab-bh-table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th colSpan={3}>Hours</th>
                  <th>Open</th>
                </tr>
              </thead>
              <tbody>
                {bhRows.map(row => (
                  <tr key={row.day}>
                    <td><span className="ab-bh-day">{row.day}</span></td>
                    {row.isOpen ? (
                      <>
                        <td><span className="ab-bh-time">{row.open}</span></td>
                        <td><span className="ab-bh-sep">–</span></td>
                        <td><span className="ab-bh-time">{row.close}</span></td>
                        <td><input type="checkbox" className="ab-bh-check" defaultChecked readOnly /></td>
                      </>
                    ) : (
                      <>
                        <td colSpan={3}><span className="ab-bh-closed">Closed</span></td>
                        <td><input type="checkbox" className="ab-bh-check" readOnly /></td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="ab-bh-schema">
              <span className="ab-bh-schema-key">"openingHoursSpecification"</span>: [{'{'}<br />
              &nbsp;&nbsp;<span className="ab-bh-schema-key">"@type"</span>: <span className="ab-bh-schema-val">"OpeningHoursSpecification"</span>,<br />
              &nbsp;&nbsp;<span className="ab-bh-schema-key">"dayOfWeek"</span>: <span className="ab-bh-schema-val">"Monday"</span>,<br />
              &nbsp;&nbsp;<span className="ab-bh-schema-key">"opens"</span>: <span className="ab-bh-schema-val">"09:00"</span>, <span className="ab-bh-schema-key">"closes"</span>: <span className="ab-bh-schema-val">"17:00"</span><br />
              {'}'}, <span style={{ color:'#B0B0C8' }}>…6 more days</span> ]
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="ab-pricing">
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:64 }}>
            <h2 className="ab-h2">Simple pricing. Every feature, every license.</h2>
            <p style={{ fontSize:17, color:'#5A5A7A' }}>Annual subscription includes the plugin, all updates, and support.</p>
          </div>
          <div className="ab-plan-grid">
            {plans.map(plan => (
              <div key={plan.name} className={`ab-plan ${plan.highlight ? 'ab-plan-highlight' : plan.name === 'Free' ? 'ab-plan-free' : 'ab-plan-normal'}`}>
                {plan.badge && (
                  <div style={{ position:'absolute', top:-14, left:'50%', transform:'translateX(-50%)', background:'#0C0B1D', color:'#fff', fontSize:11, fontWeight:700, padding:'4px 16px', borderRadius:100, whiteSpace:'nowrap' }}>{plan.badge}</div>
                )}
                <div style={{ fontSize:13, fontWeight:700, color:plan.highlight ? 'rgba(255,255,255,.65)' : '#9090B0', textTransform:'uppercase', letterSpacing:1, marginBottom:8 }}>{plan.name}</div>
                <div style={{ display:'flex', alignItems:'baseline', gap:4, marginBottom:4 }}>
                  <span style={{ fontSize:42, fontWeight:900, letterSpacing:'-2px', color:plan.highlight ? '#fff' : '#0C0B1D' }}>{plan.price}</span>
                  {plan.period && (
                    <span style={{ fontSize:13, color:plan.highlight ? 'rgba(255,255,255,.5)' : '#B0B0C8' }}>{plan.period}</span>
                  )}
                </div>
                <div style={{ fontSize:12, color:plan.highlight ? 'rgba(255,255,255,.4)' : '#B0B0C8', marginBottom:16 }}>
                  {plan.name === 'Free' ? 'always free' : '+VAT where applicable'}
                </div>
                <div style={{ fontSize:13, color:plan.highlight ? 'rgba(255,255,255,.75)' : '#5A5A7A', marginBottom:20 }}>{plan.sites}</div>
                {plan.name === 'Free' ? (
                  <Link to={plan.url} className="ab-plan-btn" style={{ background:'#E8E4F4', color:'#5A5A7A' }}>
                    Download Free →
                  </Link>
                ) : (
                  <Link to={plan.url} className="ab-plan-btn" style={{ background:plan.highlight ? '#fff' : PURPLE, color:plan.highlight ? PURPLE : '#fff' }}>
                    Get {plan.name} →
                  </Link>
                )}
                <div style={{ borderTop:`1px solid ${plan.highlight ? 'rgba(255,255,255,.2)' : '#F0ECF8'}`, marginTop:24, paddingTop:24 }}>
                  <ul className="ab-feat-list">
                    {(plan.name === 'Free' ? freeList : featureList).map(f => (
                      <li key={f} className="ab-feat-item">
                        <span style={{ color:plan.highlight ? 'rgba(255,255,255,.85)' : plan.name === 'Free' ? '#9090B0' : PURPLE, fontWeight:900, fontSize:14, marginTop:1, flexShrink:0 }}>✓</span>
                        <span style={{ fontSize:13, color:plan.highlight ? 'rgba(255,255,255,.8)' : '#5A5A7A' }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:40, fontSize:14, color:'#9090B0' }}>
            EU VAT handled automatically at checkout
          </div>
        </div>
      </section>

      <section id="docs" className="ab-faq">
        <div style={{ maxWidth:720, margin:'0 auto' }}>
          <h2 className="ab-h2" style={{ textAlign:'center', marginBottom:56 }}>Frequently asked questions</h2>
          {faqs.map((faq, i) => (
            <div key={i} style={{ padding:'28px 0', borderBottom:'1px solid #E8E4F4' }}>
              <div style={{ fontSize:16, fontWeight:700, marginBottom:12, color:'#0C0B1D' }}>{faq.q}</div>
              <div style={{ fontSize:14, color:'#5A5A7A', lineHeight:1.7 }}>{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="ab-cta">
        <h2 style={{ fontSize:52, fontWeight:900, letterSpacing:'-2px', margin:'0 0 20px', color:'#0C0B1D' }}>
          Ready to make your Joomla site<br />
          <span style={{ color:PURPLE }}>visible to AI?</span>
        </h2>
        <p style={{ fontSize:18, color:'#5A5A7A', marginBottom:48 }}>Install in 5 minutes. No coding. No JSON editing.</p>
        <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
          <Link to="/pricing" style={{ background:PURPLE, color:'#fff', fontSize:17, fontWeight:700, padding:'18px 36px', borderRadius:12, textDecoration:'none', boxShadow:'0 4px 24px rgba(123,79,255,.35)' }}>Get Professional — €200/year</Link>
          <Link to="/pricing" style={{ color:'#9090B0', fontSize:17, fontWeight:500, padding:'18px 0', textDecoration:'underline' }}>Or start with Basic for €45/year</Link>
        </div>
      </section>

      <footer className="ab-footer">
        <img src={logoSrc} style={{ height:54, width:'auto' }} alt="AI Boost" />
        <div style={{ fontSize:13, color:'#9090B0' }}>© 2026 AI Boost · support@aiboostnow.com</div>
        <div style={{ display:'flex', gap:24 }}>
          <Link to="/pricing" style={{ fontSize:13, color:'#9090B0', textDecoration:'none' }}>Pricing</Link>
          <Link to="/docs"    style={{ fontSize:13, color:'#9090B0', textDecoration:'none' }}>Docs</Link>
          <Link to="/blog"    style={{ fontSize:13, color:'#9090B0', textDecoration:'none' }}>Blog</Link>
          <Link to="/faq"     style={{ fontSize:13, color:'#9090B0', textDecoration:'none' }}>FAQ</Link>
          <a href="#privacy" style={{ fontSize:13, color:'#9090B0', textDecoration:'none' }}>Privacy</a>
        </div>
      </footer>
    </div>
  )
}
