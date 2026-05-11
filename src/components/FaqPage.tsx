import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import logoSrc from '../assets/logo.png'
import { faqGroups } from '../data/faqData'

const PURPLE = '#7B4FFF'
const GUMROAD_DEV = 'https://aiboostnow.gumroad.com/l/joomlaboost'
const SITE_URL = 'https://aiboostnow.com'

const css = `
* { box-sizing: border-box; }
body { margin: 0; }
.ab-wrap { font-family: 'Inter', system-ui, sans-serif; background: #fff; color: #0C0B1D; overflow-x: hidden; }
.ab-nav { display:flex; align-items:center; justify-content:space-between; padding:0 64px; height:88px; border-bottom:1px solid #E8E4F4; position:sticky; top:0; background:#fff; z-index:200; }
.ab-nav-links { display:flex; align-items:center; gap:32px; }
.ab-nav-link { color:#5A5A7A; font-size:15px; font-weight:500; text-decoration:none; }
.ab-logo { height:68px; width:auto; display:block; }
.ab-btn-primary { background:#7B4FFF; color:#fff; font-size:14px; font-weight:600; padding:11px 22px; border-radius:8px; text-decoration:none; white-space:nowrap; }
.ab-footer { border-top:1px solid #E8E4F4; padding:40px 64px; display:flex; justify-content:space-between; align-items:center; background:#F8F7FF; flex-wrap:wrap; gap:16px; }
@media (max-width:900px) {
  .ab-nav { padding:0 20px; height:64px; }
  .ab-nav-links { gap:16px; }
  .ab-logo { height:48px; }
  .ab-footer { padding:32px 20px; flex-direction:column; align-items:flex-start; }
}
`

export function FaqPage() {
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>

      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <nav className="ab-nav">
        <Link to="/"><img src={logoSrc} className="ab-logo" alt="AI Boost" /></Link>
        <div className="ab-nav-links">
          <Link to="/#features" className="ab-nav-link">Features</Link>
          <Link to="/#pricing" className="ab-nav-link">Pricing</Link>
          <Link to="/blog" className="ab-nav-link">Blog</Link>
          <Link to="/faq" className="ab-nav-link" style={{ color: PURPLE, fontWeight: 700 }}>FAQ</Link>
          <a href={GUMROAD_DEV} target="_blank" rel="noopener noreferrer" className="ab-btn-primary">Get AI Boost →</a>
        </div>
      </nav>

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
          <p style={{ fontSize: 16, color: '#5A5A7A', margin: '0 0 28px' }}>Send us a message and we will get back to you within 24 hours.</p>
          <a href="mailto:support@aiboostnow.com" style={{ background: PURPLE, color: '#fff', fontWeight: 700, fontSize: 15, padding: '13px 28px', borderRadius: 10, textDecoration: 'none', display: 'inline-block' }}>
            Contact support →
          </a>
        </div>
      </main>

      <footer className="ab-footer">
        <Link to="/"><img src={logoSrc} style={{ height: 48, width: 'auto' }} alt="AI Boost" /></Link>
        <div style={{ fontSize: 13, color: '#9090B0' }}>© 2026 AI Boost · support@aiboostnow.com</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <Link to="/blog" style={{ fontSize: 13, color: '#9090B0', textDecoration: 'none' }}>Blog</Link>
          <Link to="/faq" style={{ fontSize: 13, color: '#9090B0', textDecoration: 'none' }}>FAQ</Link>
        </div>
      </footer>
    </div>
  )
}
