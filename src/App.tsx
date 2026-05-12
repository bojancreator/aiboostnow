import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from './components/LandingPage'
import { BlogListPage } from './components/BlogListPage'
import { BlogPostPage } from './components/BlogPostPage'
import { FaqPage } from './components/FaqPage'
import { DocsPage } from './components/DocsPage'
import { DocDetailPage } from './components/DocDetailPage'
import { PricingPage } from './components/PricingPage'
import { FeaturesPage } from './components/FeaturesPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/docs/:section" element={<DocDetailPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}
