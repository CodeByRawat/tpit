'use client'

import { useState } from 'react'
import FadeUp from './FadeUp'

const TIERS = [
  {
    name: 'Aged',
    badge: null,
    desc: 'Perfect for bulk nurture campaigns on a budget.',
    price: '$10',
    priceRange: '– $25',
    features: [
      '30–90 days old leads',
      'Bulk packages available',
      'Budget-friendly entry point',
      'Email & SMS delivery',
      'Great for nurture campaigns',
    ],
    inherit: null,
    dark: false,
    cta: 'Get Started',
  },
  {
    name: 'Shared',
    badge: null,
    desc: 'Real-time leads shared with up to 4 clients.',
    price: '$30',
    priceRange: '– $40',
    features: [
      'Real-time delivery',
      'Sold to max 2–4 clients',
      'TCPA & DNC compliant',
      'CRM / email / SMS delivery',
      'Replacement policy on bad leads',
    ],
    inherit: null,
    dark: false,
    cta: 'Get Started',
  },
  {
    name: 'Standard',
    badge: 'Most Popular',
    desc: 'Exclusive real-time leads for serious closers.',
    price: '$50',
    priceRange: '– $70',
    features: [
      'Exclusive lead (1 buyer only)',
      'Real-time delivery',
      'Basic form fill verified',
      'CRM / API / email / SMS delivery',
      'Replacement policy included',
    ],
    inherit: 'Everything in Shared, plus:',
    dark: false,
    cta: 'Get Started',
  },
  {
    name: 'Premium',
    badge: 'Best Quality',
    desc: 'Fully screened, phone-verified exclusive leads.',
    price: '$70',
    priceRange: '– $100',
    features: [
      'Phone-verified contact',
      'Income & timeline screened',
      'Priority real-time delivery',
      'Dedicated account support',
      'Highest intent leads',
    ],
    inherit: 'Everything in Standard, plus:',
    dark: false,
    cta: 'Get Premium Leads',
  },
]

const PREMIUM_INDEX = 3

export default function PricingTiers() {
  const [activeIndex, setActiveIndex] = useState(PREMIUM_INDEX)

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
      onMouseLeave={() => setActiveIndex(PREMIUM_INDEX)}
    >
      {TIERS.map(({ name, badge, desc, price, priceRange, features, inherit, dark, cta }, i) => {
        const isActive = activeIndex === i

        return (
          <FadeUp key={name} delay={i * 0.08}>
            <div
              className="cursor-pointer rounded-3xl p-7 h-full flex flex-col border transition-all duration-300"
              style={{
                background: isActive ? '#1B2D5A' : dark ? '#111827' : '#ffffff',
                borderColor: isActive ? '#1B2D5A' : dark ? '#1f2937' : '#D4E8D1',
                boxShadow: isActive
                  ? '0 8px 32px rgba(0,0,0,0.22)'
                  : dark
                  ? '0 8px 32px rgba(0,0,0,0.25)'
                  : '0 2px 16px rgba(0,0,0,0.06)',
              }}
              onMouseEnter={() => setActiveIndex(i)}
            >
              {/* Top row: name + badge */}
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3
                  className="text-xl font-black transition-colors duration-300"
                  style={{ color: isActive || dark ? '#ffffff' : '#1B2D5A' }}
                >
                  {name}
                </h3>
                {badge && (
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap border transition-all duration-300"
                    style={
                      isActive
                        ? { background: 'rgba(255,255,255,0.18)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)' }
                        : dark
                        ? { background: 'rgba(255,255,255,0.15)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.2)' }
                        : { background: '#EDF5EC', color: '#4a7c59', borderColor: '#A8C9A3' }
                    }
                  >
                    {badge}
                  </span>
                )}
              </div>

              {/* Description */}
              <p
                className="text-xs leading-relaxed mb-5 transition-colors duration-300"
                style={{ color: isActive || dark ? 'rgba(255,255,255,0.55)' : '#6b7280' }}
              >
                {desc}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span
                    className="text-5xl font-black leading-none transition-colors duration-300"
                    style={{ color: isActive || dark ? '#ffffff' : '#1B2D5A' }}
                  >
                    {price}
                  </span>
                  <span
                    className="text-xl font-bold mb-1 transition-colors duration-300"
                    style={{ color: isActive || dark ? 'rgba(255,255,255,0.55)' : 'rgba(27,45,90,0.45)' }}
                  >
                    {priceRange}
                  </span>
                </div>
                <span
                  className="text-xs font-medium transition-colors duration-300"
                  style={{ color: isActive || dark ? 'rgba(255,255,255,0.38)' : '#9ca3af' }}
                >
                  per lead
                </span>
              </div>

              {/* Divider */}
              <div
                className="mb-5 h-px transition-colors duration-300"
                style={{ background: isActive || dark ? 'rgba(255,255,255,0.12)' : '#D4E8D1' }}
              />

              {/* Inherit label */}
              {inherit && (
                <p
                  className="text-xs font-semibold mb-3 transition-colors duration-300"
                  style={{ color: isActive || dark ? 'rgba(255,255,255,0.38)' : '#9ca3af' }}
                >
                  {inherit}
                </p>
              )}

              {/* Features */}
              <ul className="space-y-2.5 flex-1 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <svg
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="#7EAB78"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span
                      className="text-sm font-semibold leading-snug transition-colors duration-300"
                      style={{ color: isActive || dark ? 'rgba(255,255,255,0.82)' : '#1B2D5A' }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="block text-center text-sm font-bold py-3.5 rounded-2xl transition-all duration-300"
                style={
                  isActive
                    ? { background: '#7EAB78', color: '#ffffff' }
                    : dark
                    ? { background: '#ffffff', color: '#111827' }
                    : { background: '#111827', color: '#ffffff' }
                }
              >
                {cta}
              </a>
            </div>
          </FadeUp>
        )
      })}
    </div>
  )
}
