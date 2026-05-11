import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from './components/LandingPage'
import { BlogListPage } from './components/BlogListPage'
import { BlogPostPage } from './components/BlogPostPage'
import { FaqPage } from './components/FaqPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}
