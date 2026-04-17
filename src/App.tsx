import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Works from './pages/Works'
import CaseStudy from './pages/CaseStudy'
import Services from './pages/Services'
import About from './pages/About'
import Journal from './pages/Journal'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<Works />} />
      <Route path="/works/:slug" element={<CaseStudy />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
