import React from 'react'
import { motion } from 'framer-motion'
import { FiTarget, FiBookOpen } from 'react-icons/fi'
import { about } from '../../data/portfolioData.js'
import aboutImg from '../../assets/about-photo.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.span
          className="eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {'//Curious enough? '}
        </motion.span>
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Here's the human behind the code....
        </motion.h2>

        <div className="about__grid">
          <motion.div
            className="about__text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
          >
            <img src={aboutImg} alt="About Shambhavi" className="about__photo" />
            <p>{about.intro}</p>
            <p>{about.objective}</p>

            <div className="about__interests">
              {about.interests.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about__cards"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card about__card">
              <FiBookOpen className="about__card-icon" />
              <h3>Education</h3>
              {about.education.map((edu) => (
                <div key={edu.degree} className="about__edu">
                  <p className="about__edu-degree">{edu.degree}</p>
                  <p className="about__edu-institute">{edu.institute}</p>
                  <p className="about__edu-duration">{edu.duration}</p>
                </div>
              ))}
            </div>

            <div className="glass-card about__card">
              <FiTarget className="about__card-icon" />
              <h3>Strengths</h3>
              <ul className="about__strengths">
                {about.strengths.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
