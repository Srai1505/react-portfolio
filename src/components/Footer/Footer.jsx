import React, { useEffect, useState } from 'react'
import { FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi'
import { personal } from '../../data/portfolioData.js'

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__logo">{'<SR/>'}</p>
          <p className="footer__tagline">{personal.tagline}</p>
        </div>

        <nav className="footer__links" aria-label="Footer">
          {QUICK_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__socials">
          <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© {new Date().getFullYear()} {personal.name}. Built with React.</p>
      </div>

      {showTop && (
        <button className="footer__to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
          <FiArrowUp />
        </button>
      )}
    </footer>
  )
}
