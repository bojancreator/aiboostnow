import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import logoSrc from '../assets/ai-boost-logo.svg'
import { docSections, getDocSection, getAdjacentSections } from '../data/docsContent'

const PURPLE = '#7B4FFF'
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
.doc-sidebar { position:sticky; top:96px; }
.doc-sidebar-link { display:flex; align-items:center; gap:10px; padding:10px 14px; border-radius:8px; text-decoration:none; font-size:14px; font-weight:500; color:#5A5A7A; margin-bottom:2px; transition:background .15s; }
.doc-sidebar-link:hover { background:#F3F0FF; color:${PURPLE}; }
.doc-sidebar-link.active { background:#F3F0FF; color:${PURPLE}; font-weight:700; }
.doc-body h2 { font-size:22px; font-weight:800; margin:44px 0 14px; letter-spacing:-.4px; color:#0C0B1D; border-top:1px solid #F0ECF8; padding-top:32px; }
.doc-body h2:first-child { border-top:none; padding-top:0; margin-top:0; }
.doc-body h3 { font-size:17px; font-weight:700; margin:28px 0 10px; color:#0C0B1D; }
.doc-body p { font-size:15px; line-height:1.8; color:#3A3A5A; margin:0 0 18px; }
.doc-body ul,.doc-body ol { padding-left:22px; margin:0 0 18px; }
.doc-body li { font-size:15px; line-height:1.75; color:#3A3A5A; margin-bottom:6px; }
.doc-body pre { background:#F3F0FF; border:1.5px solid #E0D8FF; border-radius:10px; padding:18px 22px; overflow-x:auto; margin:20px 0; }
.doc-body code { font-family:monospace; font-size:13px; color:#5A2FCC; background:#F3F0FF; padding:2px 5px; border-radius:4px; }
.doc-body pre code { background:none; padding:0; color:#1A1A3A; font-size:13px; line-height:1.6; }
.doc-body table { width:100%; border-collapse:collapse; margin:20px 0; font-size:14px; }
.doc-body th { background:#F3F0FF; font-weight:700; padding:9px 13px; text-align:left; border:1px solid #E0D8FF; }
.doc-body td { padding:9px 13px; border:1px solid #E8E4F4; color:#3A3A5A; }
.doc-body strong { color:#0C0B1D; font-weight:700; }
.doc-body a { color:${PURPLE}; }
.doc-body blockquote { border-left:3px solid ${PURPLE}; margin:20px 0; padding:12px 20px; background:#F8F7FF; border-radius:0 8px 8px 0; }
.doc-body blockquote p { margin:0; color:#5A5A7A; font-style:italic; }
@media (max-width:960px) {
  .ab-nav { padding:0 16px; height:64px; grid-template-columns:1fr auto; }
  .ab-nav-links { display:none; }
  .ab-hamburger { display:flex; align-items:center; justify-content:center; }
  .ab-nav-cta .ab-btn-primary { display:none; }
  .ab-logo { height:54px; }
  .ab-footer { padding:32px 20px; flex-direction:column; align-items:flex-start; }
  .doc-layout { flex-direction:column !important; }
  .doc-sidebar-wrap { display:none; }
  .ab-mobile-menu { top:64px; }
}
`

function renderMarkdown(md: string): string {
  return md
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/```(\w*)\n([\s\S]*?)```/g, (_m, _lang, code) =>
      `<pre><code>${code.trim()}</code></pre>`)
    .replace(/^> (.+)$/gm, '<blockquote><p>$1</p></blockquote>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^\| (.+) \|$/gm, (_m, row) => {
      const cells: string[] = row.split(' | ')
      const isHeader = cells.some((c: string) => /^[-:]+$/.test(c.trim()))
      if (isHeader) return ''
      const tag = 'td'
      return `<tr>${cells.map((c: string) => `<${tag}>${c.trim()}</${tag}>`).join('')}</tr>`
    })
    .replace(/(<tr>.*<\/tr>\n?)+/g, m => `<table>${m}</table>`)
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, m => `<ul>${m}</ul>`)
    .split('\n\n')
    .map(block => {
      if (block.startsWith('<h') || block.startsWith('<ul') || block.startsWith('<pre') ||
          block.startsWith('<table') || block.startsWith('<blockquote')) return block
      const trimmed = block.trim()
      return trimmed ? `<p>${trimmed.replace(/\n/g, ' ')}</p>` : ''
    })
    .join('\n')
}

export function DocDetailPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)
  const { section } = useParams<{ section: string }>()
  const doc = section ? getDocSection(section) : undefined
  if (!doc) return <Navigate to="/docs" replace />

  const { prev, next } = getAdjacentSections(doc.slug)
  const canonicalUrl = `${SITE_URL}/docs/${doc.slug}`
  const pageTitle = `${doc.title} — AI Boost Docs`

  return (
    <div className="ab-wrap">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={doc.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={doc.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="AI Boost" />
        <meta property="og:image" content={`${SITE_URL}/og/docs.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={doc.description} />
        <meta name="twitter:image" content={`${SITE_URL}/og/docs.png`} />
      </Helmet>

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

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px 96px', display: 'flex', gap: 48, alignItems: 'flex-start' }} className="doc-layout">

        {/* Sidebar */}
        <aside className="doc-sidebar-wrap" style={{ flex: '0 0 220px' }}>
          <div className="doc-sidebar">
            <Link to="/docs" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#9090B0', textDecoration: 'none', marginBottom: 20, fontWeight: 600 }}>
              ← All docs
            </Link>
            {docSections.map(s => (
              <Link
                key={s.slug}
                to={`/docs/${s.slug}`}
                className={`doc-sidebar-link${s.slug === doc.slug ? ' active' : ''}`}
              >
                <span style={{ fontSize: 16 }}>{s.icon}</span>
                <span>{s.title}</span>
              </Link>
            ))}
          </div>
        </aside>

        {/* Main content */}
        <main style={{ flex: 1, minWidth: 0 }}>
          <div style={{ marginBottom: 8 }}>
            <Link to="/docs" style={{ fontSize: 13, color: '#9090B0', textDecoration: 'none' }}>← Docs</Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
            <span style={{ fontSize: 40 }}>{doc.icon}</span>
            <h1 style={{ fontSize: 36, fontWeight: 900, letterSpacing: '-1px', margin: 0, color: '#0C0B1D' }}>{doc.title}</h1>
          </div>
          <p style={{ fontSize: 17, color: '#5A5A7A', margin: '0 0 40px', lineHeight: 1.6 }}>{doc.description}</p>

          <div
            className="doc-body"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(doc.content) }}
          />

          {/* Prev / Next */}
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, marginTop: 56, paddingTop: 32, borderTop: '1px solid #E8E4F4', flexWrap: 'wrap' }}>
            {prev ? (
              <Link to={`/docs/${prev.slug}`} style={{ display: 'flex', flexDirection: 'column', gap: 4, textDecoration: 'none', padding: '16px 20px', border: '1.5px solid #E8E4F4', borderRadius: 12, flex: 1, minWidth: 200, maxWidth: 300 }}>
                <span style={{ fontSize: 12, color: '#9090B0', fontWeight: 600 }}>← Previous</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: PURPLE }}>{prev.icon} {prev.title}</span>
              </Link>
            ) : <div />}
            {next ? (
              <Link to={`/docs/${next.slug}`} style={{ display: 'flex', flexDirection: 'column', gap: 4, textDecoration: 'none', padding: '16px 20px', border: '1.5px solid #E8E4F4', borderRadius: 12, flex: 1, minWidth: 200, maxWidth: 300, textAlign: 'right' }}>
                <span style={{ fontSize: 12, color: '#9090B0', fontWeight: 600 }}>Next →</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: PURPLE }}>{next.icon} {next.title}</span>
              </Link>
            ) : <div />}
          </div>

          {/* CTA */}
          <div style={{ background: '#F3F0FF', border: '1.5px solid #D4C9FF', borderRadius: 20, padding: '36px', textAlign: 'center', marginTop: 48 }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 10px', color: '#0C0B1D' }}>Ready to set this up?</h3>
            <p style={{ fontSize: 15, color: '#5A5A7A', margin: '0 0 24px' }}>Get AI Boost for Joomla and have structured data, sitemaps, and AI signals running in minutes.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/pricing" style={{ background: PURPLE, color: '#fff', fontWeight: 700, fontSize: 15, padding: '12px 26px', borderRadius: 10, textDecoration: 'none' }}>
                Get AI Boost →
              </Link>
              <a href="mailto:support@aiboostnow.com" style={{ background: '#fff', border: '1.5px solid #D4C9FF', color: PURPLE, fontWeight: 700, fontSize: 15, padding: '12px 26px', borderRadius: 10, textDecoration: 'none' }}>
                Contact support
              </a>
            </div>
          </div>
        </main>
      </div>

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
