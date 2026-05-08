'use client'

import { useState, type FormEvent } from 'react'
import FadeUp from './FadeUp'

const INFO_CARDS = [
  {
    icon: '🇨🇦',
    title: 'Canada Office',
    line1: '456 Maple St, Toronto',
    line2: 'Mon–Fri, 9am–5pm',
  },
  {
    icon: '✉️',
    title: 'Email',
    line1: 'support@loaneg.com',
    line2: 'info@primeinfotech.com',
  },
  {
    icon: '📞',
    title: 'Phone',
    line1: '+1-555-789-1234',
    line2: 'Available weekdays',
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-green-pale">
      <div className="max-w-7xl mx-auto px-6">

        <FadeUp className="text-center mb-14">
          <div className="tag-pill mb-4">Reach Out</div>
          <h2 className="text-4xl md:text-5xl font-black text-navy">Contact Us</h2>
          <p className="text-muted mt-3 text-lg">We&apos;ll get back to you within 24 hours.</p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Form — white card, clean */}
          <FadeUp>
            <div className="bg-white rounded-4xl p-8 md:p-10 border border-green-light shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                     style={{ background: '#EDF5EC', border: '1px solid #A8C9A3' }}>
                  📋
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy">Start Getting Leads</h3>
                  <p className="text-muted text-xs">Fill in the form and our team will reach out shortly.</p>
                </div>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      className="form-input w-full px-4 py-3.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">
                      Email Address <span className="text-green-hero">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      required
                      className="form-input w-full px-4 py-3.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">
                      Phone Number <span className="text-green-hero">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      required
                      className="form-input w-full px-4 py-3.5 text-sm"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full py-4 text-base rounded-2xl mt-1">
                    Get Loan Leads
                  </button>
                </form>
              ) : (
                <div className="py-10 text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: '#EDF5EC', border: '1.5px solid #A8C9A3' }}
                  >
                    <svg className="w-8 h-8 text-green-hero" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-navy font-bold text-lg">Thanks! We&apos;ll be in touch shortly.</p>
                  <p className="text-muted text-sm mt-1">Our team will contact you within 24 hours.</p>
                </div>
              )}
            </div>
          </FadeUp>

          {/* Info side — all cards identical treatment */}
          <FadeUp delay={0.15}>
            {/* Banner image */}
            <div className="rounded-3xl overflow-hidden h-44 mb-5 border border-green-light">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1703072662739-70940f1fe9d6?w=800"
                alt="Office"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 2×2 info cards — all white, same border, same layout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {INFO_CARDS.map(({ icon, title, line1, line2 }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-4 border border-green-light"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg mb-3"
                       style={{ background: '#EDF5EC', border: '1px solid #A8C9A3' }}>
                    {icon}
                  </div>
                  <p className="text-navy font-bold text-xs mb-1">{title}</p>
                  <p className="text-muted text-xs leading-relaxed">{line1}</p>
                  <p className="text-muted/60 text-xs">{line2}</p>
                </div>
              ))}
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
