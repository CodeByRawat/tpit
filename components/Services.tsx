import FadeUp from './FadeUp'

const SERVICES = [
  {
    title: 'Loan Leads',
    desc: 'High-quality leads from customers actively seeking loans.',
    img: 'https://images.unsplash.com/photo-1647365363162-54f983245cf1?w=600',
    emoji: '💵',
    bg: '#1B2D5A',
    light: false,
  },
  {
    title: 'Home Buyers',
    desc: 'Verified prospects looking to purchase homes or properties.',
    img: 'https://images.unsplash.com/photo-1592599457566-c660153d9548?w=600',
    emoji: '🏠',
    bg: '#ffffff',
    light: true,
  },
  {
    title: 'Refinance Leads',
    desc: 'Leads interested in refinancing to better rates and terms.',
    img: 'https://images.unsplash.com/photo-1587697446083-e96d16f0be94?w=600',
    emoji: '📉',
    bg: '#EDF5EC',
    light: true,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp className="mb-14">
          <div className="tag-pill mb-4">What We Offer</div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight max-w-sm">
              Home Loan <br />Services
            </h2>
            <p className="text-muted text-base leading-relaxed max-w-xs">
              Connecting financial companies with ready-to-act loan seekers across Canada.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map(({ title, desc, img, emoji, bg, light }, i) => (
            <FadeUp key={title} delay={i * 0.1}>
              <div
                className="card-hover rounded-4xl overflow-hidden h-full flex flex-col"
                style={{ background: bg }}
              >
                {/* Image top half */}
                <div className="h-52 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img}
                    alt={title}
                    className={`w-full h-full object-cover hover:scale-105 transition-transform duration-500 ${light ? 'opacity-80' : 'opacity-60'}`}
                  />
                  {/* Emoji badge */}
                  <div className="absolute top-4 left-4 bg-white rounded-2xl w-12 h-12 flex items-center justify-center shadow-md text-2xl">
                    {emoji}
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className={`text-xl font-bold mb-2 ${light ? 'text-navy' : 'text-white'}`}>{title}</h3>
                  <p className={`text-sm leading-relaxed mb-6 flex-1 ${light ? 'text-muted' : 'text-white/70'}`}>{desc}</p>
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 text-sm font-bold group ${light ? 'text-navy' : 'text-white'}`}
                  >
                    Get Leads
                    <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs transition-transform group-hover:translate-x-1"
                          style={{ background: light ? '#7EAB78' : 'rgba(255,255,255,0.2)' }}>
                      →
                    </span>
                  </a>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
