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
.ab-doc-card { border:1.5px solid #E8E4F4; border-radius:16px; padding:28px 24px; text-decoration:none; color:inherit; display:flex; flex-direction:column; gap:10px; transition:border-color .2s, box-shadow .2s; }
.ab-doc-card:hover { border-color:#7B4FFF; box-shadow:0 4px 20px rgba(123,79,255,.12); }
@media (max-width:900px) {
  .ab-nav { padding:0 16px; height:64px; grid-template-columns:1fr auto; }
  .ab-nav-links { display:none; }
  .ab-hamburger { display:flex; align-items:center; justify-content:center; }
  .ab-nav-cta .ab-btn-primary { display:none; }
  .ab-logo { height:54px; }
  .ab-footer { padding:32px 20px; flex-direction:column; align-items:flex-start; }
  .ab-doc-grid { grid-template-columns:1fr !important; }
  .ab-mobile-menu { top:64px; }
}
`

const sections = [
  {
    icon: '🚀',
    title: 'Getting Started',
    desc: 'Install AI Boost for Joomla and get structured data working in under 5 minutes.',
    href: '/docs/getting-started',
    items: ['System requirements', 'Downloading the plugin', 'Installing via Extension Manager', 'Enabling the plugin', 'Quick Setup wizard'],
  },
  {
    icon: '🏢',
    title: 'Organization & Identity',
    desc: 'Set up your business identity, contact information, social profiles, and location.',
    href: '/docs/organization',
    items: ['Business name & logo', 'Contact details', 'Social media links', 'Address & map', 'Multilingual fields'],
  },
  {
    icon: '🧠',
    title: 'Schema.org Structured Data',
    desc: 'Configure structured data types for your site — from LocalBusiness to Hotel to FAQPage.',
    href: '/docs/schema',
    items: ['Choosing a site type', '13 preset site types', 'FAQ auto-detection', 'Manual FAQ entries', 'Event schema'],
  },
  {
    icon: '🗺️',
    title: 'XML Sitemap & Hreflang',
    desc: 'Auto-generate a dynamic XML sitemap and hreflang tags for multilingual Joomla sites.',
    href: '/docs/sitemap',
    items: ['Enabling the sitemap', 'Including articles & categories', 'Hreflang for multilingual', 'Sitemap ping on publish', 'Custom URL priorities'],
  },
  {
    icon: '📱',
    title: 'OpenGraph & Social Meta',
    desc: 'Control how your pages appear when shared on Facebook, LinkedIn, Twitter/X, and Slack.',
    href: '/docs/social',
    items: ['OpenGraph title & description', 'og:image setup', 'Twitter Card settings', 'Per-article overrides', 'Meta Pixel integration'],
  },
  {
    icon: '📊',
    title: 'Analytics & Tracking',
    desc: 'Connect GA4, Google Tag Manager, Google Search Console verification, and IndexNow.',
    href: '/docs/analytics',
    items: ['Google Analytics 4', 'Google Tag Manager', 'GSC verification tag', 'IndexNow (Bing/Yandex)', 'llms.txt generator'],
  },
  {
    icon: '🤖',
    title: 'robots.txt & AI Crawlers',
    desc: 'Manage crawler access rules for AI engines, search bots, and your own staging environment.',
    href: '/docs/robots',
    items: ['robots.txt editor', '25+ AI crawler rules', 'Allowing/blocking bots', 'llms.txt for ChatGPT', 'Staging mode'],
  },
  {
    icon: '🕐',
    title: 'Business Hours Widget',
    desc: 'Set your opening hours using a compact 7-row table — generates proper Schema.org automatically.',
    href: '/docs/business-hours',
    items: ['7-row weekly table', 'All same / Individual toggle', 'Marking days as closed', 'Schema.org output', 'Professional plan'],
  },
  {
    icon: '🏪',
    title: '13 Site Type Presets',
    desc: 'One-click presets that fill the right schema fields for your industry automatically.',
    href: '/docs/site-types',
    items: ['LocalBusiness & Restaurant', 'Hotel & MedicalClinic', 'LegalService & Dentist', 'HealthClub & RealEstateAgent', 'Person, News, Event, FAQ'],
  },
]

const resources = [
  { icon: '📄', title: 'User Guide (Full)', desc: 'Complete reference covering all 7 plugin tabs and every option.', href: 'https://aiboostnow.com/docs/user-guide' },
  { icon: '⚡', title: 'Getting Started PDF', desc: 'Printable quick-start guide — 5 minutes from install to first Schema.org output.', href: 'https://aiboostnow.com/docs/getting-started-pdf' },
  { icon: '✅', title: 'Joomla AI Search Checklist 2026', desc: '20-point checklist to make your Joomla site visible to ChatGPT and Google AI Overview.', href: 'https://aiboostnow.com/docs/checklist' },
  { icon: '🔬', title: 'Schema.org Validator', desc: 'Test your structured data output with Google\'s Rich Results Test.', href: 'https://search.google.com/test/rich-results', external: true },
]

export function DocsPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)
  const canonicalUrl = `${SITE_URL}/docs`
  const pageTitle = 'Documentation — AI Boost for Joomla'
  const pageDescription = 'Full documentation for AI Boost for Joomla — installation, Schema.org setup, XML sitemap, llms.txt, analytics, site types, and more. Get your Joomla site visible to AI search.'

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
        <meta property="og:image" content={`${SITE_URL}/og/docs.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`${SITE_URL}/og/docs.png`} />
      </Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'AI Boost',
        url: SITE_URL,
        contactPoint: { '@type': 'ContactPoint', email: 'support@aiboostnow.com', contactType: 'customer support' },
        sameAs: [],
      }) }} />

      <style>{css}</style>

      <nav className="ab-nav-bar">
        <div className="ab-nav">
          <Link to="/"><img src={logoSrc} className="ab-logo" alt="AI Boost" /></Link>
          <div className="ab-nav-links">
            <Link to="/features" className="ab-nav-link">Features</Link>
            <Link to="/pricing" className="ab-nav-link">Pricing</Link>
            <Link to="/docs" className="ab-nav-link" style={{ color: PURPLE, fontWeight: 700 }}>Docs</Link>
            <Link to="/blog" className="ab-nav-link">Blog</Link>
            <Link to="/faq" className="ab-nav-link">FAQ</Link>
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
        <Link to="/pricing"  className="ab-mobile-link" onClick={close}>Pricing</Link>
        <Link to="/docs"     className="ab-mobile-link" onClick={close} style={{ color: '#7B4FFF' }}>Docs</Link>
        <Link to="/blog"     className="ab-mobile-link" onClick={close}>Blog</Link>
        <Link to="/faq"      className="ab-mobile-link" onClick={close}>FAQ</Link>
        <Link to="/pricing"  className="ab-mobile-cta"  onClick={close}>Get AI Boost →</Link>
      </div>

      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 32px 96px' }}>
        <div style={{ marginBottom: 64 }}>
          <h1 style={{ fontSize: 44, fontWeight: 900, letterSpacing: '-1.5px', margin: '0 0 16px', color: '#0C0B1D' }}>
            Documentation
          </h1>
          <p style={{ fontSize: 18, color: '#5A5A7A', margin: 0, maxWidth: 620 }}>
            Everything you need to install, configure, and get the most out of AI Boost for Joomla.
          </p>
        </div>

        <div
          className="ab-doc-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24, marginBottom: 72 }}
        >
          {sections.map(s => (
            <Link key={s.title} to={s.href} className="ab-doc-card">
              <div style={{ fontSize: 32 }}>{s.icon}</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: '#0C0B1D' }}>{s.title}</div>
              <div style={{ fontSize: 14, color: '#5A5A7A', lineHeight: 1.6 }}>{s.desc}</div>
              <ul style={{ margin: '4px 0 0', padding: '0 0 0 18px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                {s.items.map(item => (
                  <li key={item} style={{ fontSize: 13, color: '#9090B0', lineHeight: 1.5 }}>{item}</li>
                ))}
              </ul>
              <div style={{ marginTop: 4, fontSize: 13, color: PURPLE, fontWeight: 600 }}>Read more →</div>
            </Link>
          ))}
        </div>

        <div style={{ borderTop: '1px solid #E8E4F4', paddingTop: 56, marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.8px', margin: '0 0 8px', color: '#0C0B1D' }}>
            Guides & Resources
          </h2>
          <p style={{ fontSize: 16, color: '#5A5A7A', margin: '0 0 32px' }}>Downloads, checklists, and external tools to help you succeed.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
            {resources.map(r => (
              <a
                key={r.title}
                href={r.href}
                target={r.external ? '_blank' : undefined}
                rel={r.external ? 'noopener noreferrer' : undefined}
                style={{ background: '#F8F7FF', border: '1.5px solid #E8E4F4', borderRadius: 12, padding: '20px', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}
              >
                <div style={{ fontSize: 28 }}>{r.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#0C0B1D' }}>{r.title}</div>
                <div style={{ fontSize: 13, color: '#5A5A7A', lineHeight: 1.5 }}>{r.desc}</div>
              </a>
            ))}
          </div>
        </div>

        <div style={{ background: '#F3F0FF', border: '1.5px solid #D4C9FF', borderRadius: 20, padding: '40px 36px', textAlign: 'center' }}>
          <h3 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 12px', color: '#0C0B1D' }}>Can't find what you need?</h3>
          <p style={{ fontSize: 16, color: '#5A5A7A', margin: '0 0 28px' }}>Send us a message and we will get back to you.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:support@aiboostnow.com" style={{ background: PURPLE, color: '#fff', fontWeight: 700, fontSize: 15, padding: '13px 28px', borderRadius: 10, textDecoration: 'none', display: 'inline-block' }}>
              Contact support →
            </a>
            <Link to="/faq" style={{ background: '#fff', border: '1.5px solid #D4C9FF', color: PURPLE, fontWeight: 700, fontSize: 15, padding: '13px 28px', borderRadius: 10, textDecoration: 'none', display: 'inline-block' }}>
              Browse FAQ
            </Link>
          </div>
        </div>
      </main>

      <footer className="ab-footer">
        <Link to="/"><img src={logoSrc} style={{ height: 54, width: 'auto' }} alt="AI Boost" /></Link>
        <div style={{ fontSize: 13, color: '#9090B0' }}>© 2026 AI Boost · support@aiboostnow.com</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <Link to="/features" style={{ fontSize: 13, color: '#9090B0', textDecoration: 'none' }}>Features</Link>
          <Link to="/pricing" style={{ fontSize: 13, color: '#9090B0', textDecoration: 'none' }}>Pricing</Link>
          <Link to="/docs" style={{ fontSize: 13, color: '#9090B0', textDecoration: 'none' }}>Docs</Link>
          <Link to="/blog" style={{ fontSize: 13, color: '#9090B0', textDecoration: 'none' }}>Blog</Link>
          <Link to="/faq" style={{ fontSize: 13, color: '#9090B0', textDecoration: 'none' }}>FAQ</Link>
        </div>
      </footer>
    </div>
  )
}
