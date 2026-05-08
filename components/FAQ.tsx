'use client'

import { useState } from 'react'
import FadeUp from './FadeUp'

const FAQS = [
  { q: 'What is Theprimeinfotech?',    a: 'We provide loan leads to financial companies across Canada.' },
  { q: 'How do you collect leads?',   a: 'We gather data from platforms like Google Ads, Meta, and others where interested customers fill out forms.' },
  { q: 'Who can use your leads?',     a: 'Financial companies looking for customers interested in loans, home buying, refinancing, or property purchases.' },
  { q: 'Where are your leads from?',  a: 'Our leads come from across Canada.' },
  { q: 'Is the data verified?',       a: 'Yes, we ensure the leads are genuine and interested in financial services.' },
  { q: 'How can I get started?',      a: 'Simply contact us through our website or loaneg.com to discuss your requirements and start receiving leads.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number>(0)

  return (
    <section id="faq" className="py-24" style={{ background: '#EDF5EC' }}>
      <div className="max-w-3xl mx-auto px-6">
        <FadeUp className="text-center mb-14">
          <div className="tag-pill mb-4">Got Questions?</div>
          <h2 className="text-4xl md:text-5xl font-black text-navy">Frequently Asked Questions</h2>
        </FadeUp>

        <FadeUp delay={0.15} className="space-y-3">
          {FAQS.map(({ q, a }, i) => {
            const isOpen = open === i
            return (
              <div
                key={q}
                className="rounded-2xl overflow-hidden border border-green-light"
                style={{ background: '#ffffff' }}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200 ${isOpen ? 'bg-green-pale' : 'hover:bg-green-pale/50'}`}
                >
                  <span className="font-bold text-navy text-sm md:text-base pr-4">{q}</span>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ background: isOpen ? '#7EAB78' : '#EDF5EC', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    <svg className={`w-3.5 h-3.5 ${isOpen ? 'text-white' : 'text-green-hero'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? '180px' : '0' }}
                >
                  <p className="px-6 py-4 text-muted text-sm leading-relaxed border-t border-green-light">{a}</p>
                </div>
              </div>
            )
          })}
        </FadeUp>
      </div>
    </section>
  )
}
