import React from 'react'
import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { certifications } from '../../data/portfolioData.js'

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <span className="eyebrow">{'// certifications'}</span>
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">Swap these placeholders for your actual certificates.</p>

        <div className="certifications__grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title + i}
              className="glass-card certifications__card"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <FiAward className="certifications__icon" />
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <span className="tag">{cert.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
