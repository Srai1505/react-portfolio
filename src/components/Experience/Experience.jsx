import React from 'react'
import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'
import { experience } from '../../data/portfolioData.js'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <span className="eyebrow">{'//Worth a Mention'}</span>
        <h2 className="section-title">Where I've worked</h2>
        <p className="section-subtitle">Internship and project-based experience so far.</p>

        <div className="experience__timeline">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="glass-card experience__card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="experience__icon">
                <FiBriefcase />
              </div>
              <div>
                <div className="experience__head">
                  <h3>{exp.role}</h3>
                  <span className="tag">{exp.duration}</span>
                </div>
                <p className="experience__company">{exp.company}</p>
                <ul className="experience__list">
                  {exp.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
                <div className="experience__tech">
                  {exp.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
