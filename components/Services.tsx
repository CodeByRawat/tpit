import FadeUp from './FadeUp'
import PricingTiers from './PricingTiers'

const MORTGAGE_LEADS = [
  { title: 'Purchase Loan Leads',        desc: 'Consumers actively shopping for a home loan.' },
  { title: 'Refinance Leads',            desc: 'Homeowners seeking rate reduction, cash-out, or term change.' },
  { title: 'FHA / VA / USDA Leads',      desc: 'Buyers pre-screened for government-backed programs.' },
  { title: 'Jumbo Loan Leads',           desc: 'High-value properties above conforming limits.' },
  { title: 'Reverse Mortgage Leads',     desc: 'Homeowners 62+ looking to access equity.' },
  { title: 'First-Time Homebuyer Leads', desc: 'Education-focused, down payment assistance interest.' },
  { title: 'Credit-Challenged Leads',    desc: 'Sub-620 credit, matched with specialist lenders.' },
]

const REAL_ESTATE_LEADS = [
  { title: 'Buyer Leads',            desc: 'Actively searching for residential or commercial property.' },
  { title: 'Seller Leads',           desc: 'Homeowners ready to list. Highest ROI for agents.' },
  { title: 'Investor Leads',         desc: 'Rental, flip, or multi-family buyers. Repeat business.' },
  { title: 'FSBO Leads',             desc: 'Owners selling without an agent. Conversion opportunity.' },
  { title: 'Expired Listing Leads',  desc: 'Failed to sell previously, often motivated to relist.' },
  { title: 'Rental Leads',           desc: 'Future buyers, ideal for long-term nurture campaigns.' },
  { title: 'Luxury Property Leads',  desc: '$1M+ transactions, specialized sales cycle.' },
]

const FILTERS = [
  'ZIP / Postal Code', 'Loan Amount', 'Credit Score Range', 'LTV',
  'Property Type', 'Timeline to Buy/Sell', 'Military Status',
  'First-Time Buyer', 'Equity Amount',
]

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

function LeadCard({ title, desc, index, delay }: { title: string; desc: string; index: number; delay: number }) {
  return (
    <FadeUp delay={delay} className="h-full">
      <a href="#contact" className="h-full flex flex-col items-center text-center rounded-2xl p-6 border transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.09)] hover:bg-[rgba(255,255,255,0.10)] hover:border-[rgba(126,171,120,0.45)]">
        <span className="text-[10px] font-black tracking-[0.18em] text-white/25 mb-3 block">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="w-8 h-0.5 rounded-full mb-4 mx-auto" style={{ background: '#7EAB78' }} />
        <h4 className="text-white font-semibold text-sm mb-2 leading-snug">{title}</h4>
        <p className="text-white/65 text-xs leading-relaxed">{desc}</p>
      </a>
    </FadeUp>
  )
}

function CategoryDivider({ label }: { label: string }) {
  return (
    <div className="text-center mb-10">
      <h3 className="text-2xl md:text-3xl font-black text-white mb-3">{label}</h3>
      <div className="w-12 h-0.5 rounded-full mx-auto" style={{ background: '#7EAB78' }} />
    </div>
  )
}

export default function Services() {
  return (
    <>
      {/* ── What We Offer — dark premium section ── */}
      <section
        id="services"
        className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0d1b36 0%, #1B2D5A 55%, #0f2040 100%)' }}
      >
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: 'radial-gradient(circle at 70% 20%, rgba(126,171,120,0.12) 0%, transparent 65%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(circle at 20% 80%, rgba(126,171,120,0.08) 0%, transparent 60%)' }}
        />

        <div className="max-w-7xl mx-auto px-6 relative">

          {/* Centred header */}
          <FadeUp className="text-center mb-16">
            <span
              className="inline-block text-[10px] font-black uppercase tracking-[0.22em] px-4 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(126,171,120,0.18)', color: '#7EAB78', border: '1px solid rgba(126,171,120,0.35)' }}
            >
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-black text-white leading-[1.08] mb-5">
              High-Intent Mortgage &amp;<br />Real Estate Leads
            </h2>
            <p className="text-white/45 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Exclusive · TCPA Compliant · Real-Time Delivery across Canada
            </p>
          </FadeUp>

          {/* Mortgage Leads */}
          <FadeUp className="mb-12">
            <CategoryDivider label="Mortgage Lead Types" />
            <div className="flex flex-wrap justify-center gap-4 items-stretch">
              {MORTGAGE_LEADS.map(({ title, desc }, i) => (
                <div key={title} className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] flex flex-col">
                  <LeadCard title={title} desc={desc} index={i} delay={i * 0.06} />
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Real Estate Leads */}
          <FadeUp>
            <CategoryDivider label="Real Estate Lead Types" />
            <div className="flex flex-wrap justify-center gap-4 items-stretch">
              {REAL_ESTATE_LEADS.map(({ title, desc }, i) => (
                <div key={title} className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] flex flex-col">
                  <LeadCard title={title} desc={desc} index={i} delay={i * 0.06} />
                </div>
              ))}
            </div>
          </FadeUp>

        </div>
      </section>

      {/* ── Pricing + Compliance — light section ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <FadeUp className="mb-6 text-center">
            <div className="tag-pill mb-4 inline-block">Pricing</div>
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-3">Lead Quality &amp; Pricing</h2>
            <p className="text-muted text-base max-w-md mx-auto">
              Pricing varies by geo, filters, and loan amount.{' '}
              <a href="#contact" className="text-green-hero font-semibold underline-offset-2 hover:underline">
                Ask for a custom quote.
              </a>
            </p>
          </FadeUp>

          <PricingTiers />

          {/* Bottom row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Filters */}
            <FadeUp>
              <div className="bg-white rounded-3xl p-6 border border-green-light h-full flex flex-col items-center text-center">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 text-green-hero" style={{ background: '#EDF5EC', border: '1px solid #A8C9A3' }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="14" y2="12" /><line x1="4" y1="18" x2="10" y2="18" />
                    <circle cx="18" cy="6" r="2" fill="currentColor" stroke="none" /><circle cx="16" cy="12" r="2" fill="currentColor" stroke="none" /><circle cx="12" cy="18" r="2" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <h4 className="text-navy font-bold text-base mb-3">Standard Filters</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {FILTERS.map((f) => (
                    <span key={f} className="bg-green-pale border border-green-light text-navy text-xs font-semibold px-3 py-1.5 rounded-full">{f}</span>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Compliance */}
            <FadeUp delay={0.08}>
              <div className="bg-white rounded-3xl p-6 border border-green-light h-full flex flex-col items-center text-center">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 text-green-hero" style={{ background: '#EDF5EC', border: '1px solid #A8C9A3' }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h4 className="text-navy font-bold text-base mb-3">Compliance &amp; Delivery</h4>
                <ul className="space-y-2.5 text-left w-full">
                  {[
                    '100% TCPA & DNC compliant opt-ins with timestamp + IP',
                    'Real-time delivery via CRM, email, SMS, or API',
                    'Recording available for live transfer leads',
                    'Replacement policy on bad leads',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-green-hero">
                      <CheckIcon />
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            {/* Get Started */}
            <FadeUp delay={0.16}>
              <div className="bg-white rounded-3xl p-6 border border-green-light h-full flex flex-col items-center text-center">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 text-green-hero" style={{ background: '#EDF5EC', border: '1px solid #A8C9A3' }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <line x1="7" y1="17" x2="17" y2="7" strokeLinecap="round" />
                    <polyline points="7 7 17 7 17 17" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h4 className="text-navy font-bold text-base mb-3">Get Started Today</h4>
                <ul className="space-y-2.5 flex-1 w-full text-left">
                  {[
                    'Start with a test batch of 20 leads',
                    'No contracts on most packages',
                    '2 free trial leads with 50–500 lead packages',
                    'No trail leads required',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted leading-relaxed">
                      <svg className="w-3 h-3 mt-0.5 flex-shrink-0 text-green-hero" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-6 btn-primary text-center py-3 text-sm rounded-2xl w-full">
                  Request a Test Batch
                </a>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>
    </>
  )
}
