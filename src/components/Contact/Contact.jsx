import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiSend, FiCheckCircle } from 'react-icons/fi'
import { personal } from '../../data/portfolioData.js'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') 

  function validate(values) {
    const errs = {}
    if (!values.name.trim()) errs.name = 'Please enter your name'
    if (!values.email.trim()) {
      errs.email = 'Please enter your email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errs.email = 'Enter a valid email address'
    }
    if (!values.subject.trim()) errs.subject = 'Please enter a subject'
    if (!values.message.trim()) errs.message = 'Please write a message'
    return errs
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

 function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      personal.email
    )}&su=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`

    window.open(gmailUrl, '_blank')
    setStatus('sent')
    setForm(initialForm)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <span className="eyebrow">{'// get in touch'}</span>
        <h2 className="section-title">Let's work together</h2>
        <p className="section-subtitle">
          I'm always open to new opportunities and collaborations. Whether you have a project in mind, want to discuss ideas, or just want to say hello, feel free to reach out. You can fill out the form below.
        </p>

        <motion.form
          className="glass-card contact__form"
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact__row">
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={form.name} onChange={handleChange} />
              {errors.name && <span className="contact__error">{errors.name}</span>}
            </div>
            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
              {errors.email && <span className="contact__error">{errors.email}</span>}
            </div>
          </div>

          <div className="contact__field">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" value={form.subject} onChange={handleChange} />
            {errors.subject && <span className="contact__error">{errors.subject}</span>}
          </div>

          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} />
            {errors.message && <span className="contact__error">{errors.message}</span>}
          </div>

          <button type="submit" className="btn btn-primary contact__submit">
            <FiSend /> Send Message
          </button>

          {status === 'sent' && (
            <p className="contact__status contact__status--success">
              <FiCheckCircle /> Opening your email app with the message filled in...
            </p>
          )}
        </motion.form>

        <div className="contact__direct">
          <FiMail /> Prefer email? Reach out directly at {personal.email}
        </div>
      </div>
    </section>
  )
}