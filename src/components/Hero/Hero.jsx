import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import { personal } from '../../data/portfolioData.js'
import profileImg from '../../assets/profile.jpg' // TODO: apni photo isi naam se assets folder mein daalo

// The signature moment for this design: a "compiling code" hero card.
// Instead of a static headline, the role types out inside a fake
// terminal — reinforcing "developer" as the core identity of the page.
const ROLES = ['Software Developer', 'Frontend Engineer', 'Civic-Tech Builder']

function useTypewriter(words, speed = 70, pause = 1400) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section id="home" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="eyebrow">{'>while (!success) { learn(); }'}</span>
          <img src={profileImg} alt={personal.name} className="hero__avatar" />
          <h1 className="hero__name">Hi, I'm {personal.name}</h1>
          <h2 className="hero__role">
            {typed}
            <span className="hero__cursor">|</span>
          </h2>
          <p className="hero__tagline">{personal.tagline}</p>

          <div className="hero__cta">
            <a href="#contact" className="btn btn-primary">
              <FiMail /> Contact Me
            </a>
            <a href={personal.resumeLink} download className="btn btn-outline">
              <FiDownload /> Resume
            </a>
          </div>

          <div className="hero__socials">
            <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__terminal glass-card"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="hero__terminal-bar">
            <span /><span /><span />
            <p>developer.js</p>
          </div>
          <pre className="hero__terminal-code">
{`const developer = {
  name: "${personal.name}",
  role: "${personal.role}",
  based_in: "${personal.location}",
  stack: ["React", "Node", "MongoDB"],
  focus: "civic-tech & clean UI",
  open_to: "internships"
};`}
          </pre>
        </motion.div>
      </div>
    </section>
  )
}
