import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../../data/portfolioData.js'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <span className="eyebrow">{'//My props'}</span>
        <h2 className="section-title">Skills &amp; Tools</h2>
        <p className="section-subtitle">
          Technologies I use regularly, roughly ranked by day-to-day fluency.
        </p>

        <div className="skills__grid">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="glass-card skills__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="skills__card-top">
                <span>{skill.name}</span>
                <span className="skills__percent">{skill.level}%</span>
              </div>
              <div className="skills__bar-track">
                <motion.div
                  className="skills__bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.05, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
