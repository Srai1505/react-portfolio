import React from 'react'
import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import { achievements } from '../../data/portfolioData.js'

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <span className="eyebrow">{'// beyond code'}</span>
        <h2 className="section-title">Achievements &amp; Activities</h2>
        <p className="section-subtitle">
          Workshops, hackathons, leadership roles, and contributions outside coursework.
        </p>

        <div className="achievements__list">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title + i}
              className="glass-card achievements__item"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <FiStar className="achievements__icon" />
              <div>
                <p className="achievements__title">{item.title}</p>
                <span className="tag">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
