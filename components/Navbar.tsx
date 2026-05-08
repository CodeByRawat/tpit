'use client'

import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Home',     href: '#home',     section: 'home' },
  { label: 'About',    href: '#about',    section: 'about' },
  { label: 'Services', href: '#services', section: 'services' },
  { label: 'Contact',  href: '#contact',  section: 'contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen]       = useState(false)
  const [scrolled, setScrolled]       = useState(false)
  const [active, setActive]           = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.4 }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9">
            <div className="w-9 h-9 rounded-full bg-navy opacity-90" />
            <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-yellow border-2 border-white" />
          </div>
          <span className={`font-black text-xl tracking-tight ${scrolled ? 'text-navy' : 'text-white'}`}>
            Theprime<span className={scrolled ? 'text-green-hero' : 'text-white'}>info</span>tech
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href, section }) => (
            <a
              key={section}
              href={href}
              className={`nav-link text-sm ${active === section ? 'active' : ''}`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#contact" className="btn-primary px-5 py-2 text-sm">
            Get Leads
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden bg-white border-t border-green-light overflow-hidden transition-all duration-300"
        style={{ maxHeight: menuOpen ? '400px' : '0', opacity: menuOpen ? 1 : 0 }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-navy font-semibold py-2 border-b border-green-light text-sm"
            >
              {label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary text-center py-3 rounded-full mt-2 text-sm">
            Get Leads
          </a>
        </div>
      </div>
    </nav>
  )
}
