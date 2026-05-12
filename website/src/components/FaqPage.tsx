import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import logoSrc from '../assets/ai-boost-logo.svg'
import { faqGroups } from '../data/faqData'

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
@media (max-width:900px) {
  .ab-nav { padding:0 16px; height:64px; grid-template-columns:1fr auto; }
  .ab-nav-links { display:none; }
  .ab-hamburger { display:flex; align-items:center; justify-content:center; }
  .ab-nav-cta .ab-btn-primary { display:none; }
  .ab-logo { height:54px; }
  .ab-footer { padding:32px 20px; flex-direction:column; align-items:flex-start; }
  .ab-mobile-menu { top:64px; }
}
`

export function FaqPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)
  const [open, setOpen] = useState<string | null>(null)

  const toggle = (key: string) => setOpen(o => o === key ? null : key)

  const canonicalUrl = `${SITE_URL}/faq`
  const pageTitle = 'FAQ — AI Boost for Joomla'
  const pageDescription = 'Frequently asked questions about AI Boost for Joomla — installation, features, pricing, licensing, and technical details. Everything you need before purchasing.'

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqGroups.flatMap(g =>
      g.items.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      }))
    ),
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
        <meta property="og:image" content={`${SITE_URL}/og/faq.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`${SITE_URL}/og/faq.png`} />
      </Helmet>

      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: 'AI Boost', url: SITE_URL, contactPoint: { '@type': 'ContactPoint', email: 'support@aiboostnow.com', contactType: 'customer support' }, sameAs: [] }) }} />

      <nav className="ab-nav-bar">
        <div className="ab-nav">
          <Link to="/"><img src={logoSrc} className="ab-logo" alt="AI Boost" /></Link>
          <div className="ab-nav-links">
            <Link to="/features" className="ab-nav-link">Features</Link>
            <Link to="/pricing" className="ab-nav-link">Pricing</Link>
            <Link to="/docs" className="ab-nav-link">Docs</Link>
            <Link to="/blog" className="ab-nav-link">Blog</Link>
            <Link to="/faq" className="ab-nav-link" style={{ color: PURPLE, fontWeight: 700 }}>FAQ</Link>
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
        <Link to="/docs"     className="ab-mobile-link" onClick={close}>Docs</Link>
        <Link to="/blog"     className="ab-mobile-link" onClick={close}>Blog</Link>
        <Link to="/faq"      className="ab-mobile-link" onClick={close} style={{ color: '#7B4FFF' }}>FAQ</Link>
        <Link to="/pricing"  className="ab-mobile-cta"  onClick={close}>Get AI Boost →</Link>
      </div>

      <main style={{ maxWidth: 800, margin: '0 auto', padding: '72px 32px 96px' }}>
        <div style={{ marginBottom: 64 }}>
          <h1 style={{ fontSize: 44, fontWeight: 900, letterSpacing: '-1.5px', margin: '0 0 16px', color: '#0C0B1D' }}>
            Frequently asked questions
          </h1>
          <p style={{ fontSize: 18, color: '#5A5A7A', margin: 0 }}>
            Everything you need to know about AI Boost for Joomla before purchasing.
          </p>
        </div>

        {faqGroups.map(group => (
          <section key={group.id} style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0C0B1D', margin: '0 0 24px', paddingBottom: 12, borderBottom: '2px solid #F3F0FF' }}>
              {group.title}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {group.items.map((item, idx) => {
                const key = `${group.id}-${idx}`
                const isOpen = open === key
                return (
                  <div key={key} style={{ borderBottom: '1px solid #E8E4F4', overflow: 'hidden' }}>
                    <button
                      onClick={() => toggle(key)}
                      style={{
                        width: '100%', textAlign: 'left', background: 'none', border: 'none',
                        padding: '20px 0', cursor: 'pointer',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
                      }}
                    >
                      <span style={{ fontSize: 16, fontWeight: 700, color: '#0C0B1D', lineHeight: 1.4 }}>{item.q}</span>
                      <span style={{
                        flexShrink: 0, width: 24, height: 24, borderRadius: '50%',
                        background: isOpen ? PURPLE : '#F3F0FF',
                        color: isOpen ? '#fff' : PURPLE,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 18, fontWeight: 700, lineHeight: 1,
                        transition: 'background .2s, color .2s',
                      }}>
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div style={{ padding: '0 0 20px', fontSize: 15, color: '#5A5A7A', lineHeight: 1.75, maxWidth: 680 }}>
                        {item.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        ))}

        <div style={{ background: '#F3F0FF', border: '1.5px solid #D4C9FF', borderRadius: 20, padding: '40px 36px', textAlign: 'center', marginTop: 48 }}>
          <h3 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 12px', color: '#0C0B1D' }}>Still have questions?</h3>
          <p style={{ fontSize: 16, color: '#5A5A7A', margin: '0 0 28px' }}>Send us a message and we will get back to you.</p>
          <a href="mailto:support@aiboostnow.com" style={{ background: PURPLE, color: '#fff', fontWeight: 700, fontSize: 15, padding: '13px 28px', borderRadius: 10, textDecoration: 'none', display: 'inline-block' }}>
            Contact support →
          </a>
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
