import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import logoSrc from '../assets/ai-boost-logo.svg'

const PURPLE = '#7B4FFF'
const SITE_URL = 'https://aiboostnow.com'

const CHECKOUT_URL = '#'

const plans = [
  { name: 'Starter',   price: '€59',  sites: '1 site',         badge: null,           highlight: false, support: 'Email support',          url: CHECKOUT_URL },
  { name: 'Developer', price: '€119', sites: '5 sites',        badge: 'Most Popular', highlight: true,  support: 'Priority email support', url: CHECKOUT_URL },
  { name: 'Agency',    price: '€199', sites: 'Unlimited sites', badge: null,           highlight: false, support: 'Priority email support', url: CHECKOUT_URL },
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
  '1 year of updates & bug fixes',
]

const faqs = [
  { q: 'What does "one-time payment" mean?',         a: 'You pay once and own the plugin forever. Updates are included for 1 year. After that, the plugin keeps working — renewal is optional at 50% of the original price.' },
  { q: 'Is it compatible with Joomla 4, 5, and 6?', a: 'Yes. AI Boost for Joomla supports Joomla 4.0 through 6.x with PHP 8.1 through 8.5.' },
  { q: 'Is there a free trial?',                     a: 'No free trial, but every purchase has a 30-day money-back guarantee. If it does not work for your site, we refund you in full — no questions asked.' },
  { q: 'Can I upgrade my license later?',            a: 'Yes. Contact support@aiboostnow.com and we will arrange an upgrade at the price difference.' },
  { q: 'What happens after 1 year?',                 a: 'The plugin keeps working on your site forever. You only need to renew (at 50% of the original price) if you want to receive new features and updates released after your first year.' },
  { q: 'Is EU VAT included in the price?',           a: 'VAT is added at checkout where applicable. It is collected and remitted automatically — you do not need to worry about tax compliance.' },
]

const css = `
* { box-sizing: border-box; }
body { margin: 0; }
.ab-wrap { font-family: 'Inter', system-ui, sans-serif; background: #fff; color: #0C0B1D; overflow-x: hidden; }
.ab-nav-bar { border-bottom:1px solid #E8E4F4; position:sticky; top:0; background:#fff; z-index:200; }
.ab-nav { max-width:1200px; margin:0 auto; padding:0 24px; height:80px; display:grid; grid-template-columns:1fr auto 1fr; align-items:center; }
.ab-nav-links { display:flex; align-items:center; justify-content:center; gap:32px; }
.ab-nav-cta { display:flex; justify-content:flex-end; }
.ab-nav-link { color:#5A5A7A; font-size:15px; font-weight:500; text-decoration:none; }
.ab-logo { height:75px; width:auto; display:block; }
.ab-btn-primary { background:#7B4FFF; color:#fff; font-size:14px; font-weight:600; padding:11px 22px; border-radius:8px; text-decoration:none; white-space:nowrap; }
.ab-footer { border-top:1px solid #E8E4F4; padding:40px 64px; display:flex; justify-content:space-between; align-items:center; background:#F8F7FF; flex-wrap:wrap; gap:16px; }
.ab-plan-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; align-items:start; }
.ab-plan { border-radius:20px; padding:36px 28px; position:relative; }
.ab-plan-normal { background:#fff; border:1.5px solid #E8E4F4; box-shadow:0 2px 12px rgba(0,0,0,.05); }
.ab-plan-highlight { background:#7B4FFF; box-shadow:0 12px 48px rgba(123,79,255,.35); transform:scale(1.04); }
.ab-plan-btn { display:block; text-align:center; padding:13px 0; font-weight:700; font-size:14px; border-radius:10px; text-decoration:none; }
.ab-feat-list { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:10px; }
.ab-feat-item { display:flex; gap:10px; align-items:flex-start; }
@media (max-width:900px) {
  .ab-nav { padding:0 16px; height:64px; grid-template-columns:1fr auto; }
  .ab-nav-links { display:none; }
  .ab-logo { height:54px; }
  .ab-footer { padding:32px 20px; flex-direction:column; align-items:flex-start; }
  .ab-plan-grid { grid-template-columns:1fr !important; max-width:400px; margin:0 auto; }
  .ab-plan-highlight { transform:scale(1); }
}
`

export function PricingPage() {
  const canonicalUrl = `${SITE_URL}/pricing`
  const pageTitle = 'Pricing — AI Boost for Joomla'
  const pageDescription = 'Simple one-time pricing for AI Boost for Joomla. Starter €59 · Developer €119 · Agency €199. Pay once, use forever. 30-day money-back guarantee.'

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'AI Boost',
        url: SITE_URL,
        contactPoint: { '@type': 'ContactPoint', email: 'support@aiboostnow.com', contactType: 'customer support' },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'AI Boost for Joomla',
        description: 'All-in-one SEO and AEO system plugin for Joomla 4, 5, and 6.',
        offers: [
          { '@type': 'Offer', name: 'Starter',   price: '59.00',  priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
          { '@type': 'Offer', name: 'Developer', price: '119.00', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
          { '@type': 'Offer', name: 'Agency',    price: '199.00', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
        ],
      }) }} />

      <style>{css}</style>

      <nav className="ab-nav-bar">
        <div className="ab-nav">
          <Link to="/"><img src={logoSrc} className="ab-logo" alt="AI Boost" /></Link>
          <div className="ab-nav-links">
            <Link to="/features" className="ab-nav-link">Features</Link>
            <Link to="/pricing" className="ab-nav-link" style={{ color: PURPLE, fontWeight: 700 }}>Pricing</Link>
            <Link to="/docs" className="ab-nav-link">Docs</Link>
            <Link to="/blog" className="ab-nav-link">Blog</Link>
            <Link to="/faq" className="ab-nav-link">FAQ</Link>
          </div>
          <div className="ab-nav-cta">
            <Link to="/pricing" className="ab-btn-primary">Get AI Boost →</Link>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 32px 96px' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h1 style={{ fontSize: 48, fontWeight: 900, letterSpacing: '-2px', margin: '0 0 16px', color: '#0C0B1D' }}>
            Simple pricing. Every feature,<br />every license.
          </h1>
          <p style={{ fontSize: 18, color: '#5A5A7A', margin: 0 }}>Pay once, use forever. 30-day money-back guarantee.</p>
        </div>

        <div className="ab-plan-grid">
          {plans.map(plan => (
            <div key={plan.name} className={`ab-plan ${plan.highlight ? 'ab-plan-highlight' : 'ab-plan-normal'}`}>
              {plan.badge && (
                <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: '#0C0B1D', color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 16px', borderRadius: 100, whiteSpace: 'nowrap' }}>{plan.badge}</div>
              )}
              <div style={{ fontSize: 13, fontWeight: 700, color: plan.highlight ? 'rgba(255,255,255,.65)' : '#9090B0', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>{plan.name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
                <span style={{ fontSize: 48, fontWeight: 900, letterSpacing: '-2px', color: plan.highlight ? '#fff' : '#0C0B1D' }}>{plan.price}</span>
                <span style={{ fontSize: 13, color: plan.highlight ? 'rgba(255,255,255,.5)' : '#B0B0C8' }}>one-time</span>
              </div>
              <div style={{ fontSize: 12, color: plan.highlight ? 'rgba(255,255,255,.4)' : '#B0B0C8', marginBottom: 16 }}>+VAT where applicable</div>
              <div style={{ fontSize: 14, color: plan.highlight ? 'rgba(255,255,255,.75)' : '#5A5A7A', marginBottom: 28 }}>{plan.sites} · {plan.support}</div>
              <a href={plan.url} target="_blank" rel="noopener noreferrer" className="ab-plan-btn" style={{ background: plan.highlight ? '#fff' : PURPLE, color: plan.highlight ? PURPLE : '#fff' }}>
                Buy {plan.name} — {plan.price}
              </a>
              <div style={{ borderTop: `1px solid ${plan.highlight ? 'rgba(255,255,255,.2)' : '#F0ECF8'}`, marginTop: 24, paddingTop: 24 }}>
                <ul className="ab-feat-list">
                  {featureList.map(f => (
                    <li key={f} className="ab-feat-item">
                      <span style={{ color: plan.highlight ? 'rgba(255,255,255,.85)' : PURPLE, fontWeight: 900, fontSize: 14, marginTop: 1, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: 13, color: plan.highlight ? 'rgba(255,255,255,.8)' : '#5A5A7A' }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40, fontSize: 14, color: '#9090B0' }}>
          🛡️ 30-day money-back guarantee &nbsp;·&nbsp; EU VAT handled automatically
        </div>

        <div style={{ borderTop: '1px solid #E8E4F4', marginTop: 80, paddingTop: 72 }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, letterSpacing: '-1px', margin: '0 0 48px', textAlign: 'center', color: '#0C0B1D' }}>Pricing FAQ</h2>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ padding: '28px 0', borderBottom: '1px solid #E8E4F4' }}>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: '#0C0B1D' }}>{faq.q}</div>
                <div style={{ fontSize: 14, color: '#5A5A7A', lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#F3F0FF', border: '1.5px solid #D4C9FF', borderRadius: 20, padding: '40px 36px', textAlign: 'center', marginTop: 72 }}>
          <h3 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 12px', color: '#0C0B1D' }}>Questions before you buy?</h3>
          <p style={{ fontSize: 16, color: '#5A5A7A', margin: '0 0 28px' }}>We respond within 24 hours. Or browse the full FAQ first.</p>
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
          <Link to="/pricing" style={{ fontSize: 13, color: '#9090B0', textDecoration: 'none' }}>Pricing</Link>
          <Link to="/docs" style={{ fontSize: 13, color: '#9090B0', textDecoration: 'none' }}>Docs</Link>
          <Link to="/blog" style={{ fontSize: 13, color: '#9090B0', textDecoration: 'none' }}>Blog</Link>
          <Link to="/faq" style={{ fontSize: 13, color: '#9090B0', textDecoration: 'none' }}>FAQ</Link>
        </div>
      </footer>
    </div>
  )
}
