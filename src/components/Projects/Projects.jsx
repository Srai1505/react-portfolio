import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../../data/portfolioData.js'

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <span className="eyebrow">{'//Things that escaped my laptop✨'}</span>
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A mix of civic-tech, full-stack, and systems projects — most from GitHub.
        </p>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              className="glass-card projects__card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
            >
              <div className="projects__thumb">
                <span>{project.name.slice(0, 2).toUpperCase()}</span>
              </div>
              <div className="projects__body">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="projects__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="projects__links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FiGithub /> Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
