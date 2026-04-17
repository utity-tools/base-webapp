import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import Nav from './components/Nav'
import Home from './pages/Home'
import Works from './pages/Works'
import CaseStudy from './pages/CaseStudy'
import Services from './pages/Services'
import About from './pages/About'
import Journal from './pages/Journal'
import Contact from './pages/Contact'

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <Nav />
      <AnimatePresence mode="wait" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/works" element={<PageWrapper><Works /></PageWrapper>} />
          <Route path="/works/:slug" element={<PageWrapper><CaseStudy /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/journal" element={<PageWrapper><Journal /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </>
  )
}
