'use client'

import { useState, type FormEvent } from 'react'
import FadeUp from './FadeUp'

const LocationIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
)
const MailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)
const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)
const FormIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const INFO_CARDS = [
  { Icon: LocationIcon, title: 'Canada Office', line1: 'Toronto, Ontario, Canada', line2: 'Mon–Fri, 9am–5pm EST' },
  { Icon: MailIcon,     title: 'Email',         line1: 'info@primeinfotech.com',   line2: 'We reply within 24 hrs' },
  { Icon: PhoneIcon,    title: 'Phone',          line1: '+1 (647) 367-8348',        line2: 'Available weekdays' },
]

const SHEET_WEBHOOK_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '' })

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!SHEET_WEBHOOK_URL) {
      setError('Form is not configured yet. Please contact us by email or phone.')
      return
    }

    setSubmitting(true)
    setError('')
    try {
      await fetch(SHEET_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(form),
      })
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <FadeUp className="text-center mb-14">
          <div className="tag-pill mb-4">Get In Touch</div>
          <h2 className="text-4xl md:text-5xl font-black text-navy">Get In Touch</h2>
          <p className="text-muted mt-3 text-lg">Tell us what you need and we&apos;ll get back to you within 24 hours.</p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Form — white card, clean */}
          <FadeUp>
            <div className="bg-white rounded-4xl p-8 md:p-10 border border-green-light shadow-sm">
              <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-green-hero flex-shrink-0"
                     style={{ background: '#EDF5EC', border: '1px solid #A8C9A3' }}>
                  <FormIcon />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy">Ask for a Custom Quote</h3>
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
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="form-input w-full px-4 py-3.5 text-sm"
                    />
                  </div>
                  {error && <p className="text-red-600 text-sm">{error}</p>}
                  <button type="submit" disabled={submitting} className="btn-primary w-full py-4 text-base rounded-2xl mt-1 disabled:opacity-60">
                    {submitting ? 'Sending...' : 'Get Loan Leads'}
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
              {INFO_CARDS.map(({ Icon, title, line1, line2 }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-4 border border-green-light flex flex-col items-center text-center"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-green-hero mb-3"
                       style={{ background: '#EDF5EC', border: '1px solid #A8C9A3' }}>
                    <Icon />
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
