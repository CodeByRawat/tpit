'use client'

import { useState } from 'react'
import FadeUp from './FadeUp'

const FAQS = [
  { q: 'What is The Prime Infotech?',        a: 'We are a performance-driven lead generation company specializing in high-intent mortgage and real estate leads across Canada.' },
  { q: 'How do you collect leads?',          a: 'We generate leads through TCPA-compliant, intent-based campaigns on platforms like Google Ads and Meta, where consumers fill out forms expressing active interest.' },
  { q: 'Who can use your leads?',            a: 'Lenders, mortgage brokers, and real estate professionals looking for qualified prospects actively seeking home loans, refinancing, or property transactions.' },
  { q: 'Where are your leads from?',         a: 'All our leads come from across Canada. We do not supply leads from outside Canada.' },
  { q: 'Is the data verified and compliant?', a: 'Yes. Every lead is 100% TCPA & DNC compliant with timestamp and IP recorded. We also have a replacement policy for bad leads.' },
  { q: 'How can I get started?',             a: 'Contact us to request a test batch of 20 leads with no contracts required. Packages of 50–500 leads include 2 free trial leads.' },
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
