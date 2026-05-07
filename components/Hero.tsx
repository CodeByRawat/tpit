import ParticleBackground from './ParticleBackground'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #7EAB78 0%, #A8C9A3 30%, #D4E8D1 60%, #f0f7ef 100%)',
      }}
    >
      {/* Interactive particle canvas */}
      <ParticleBackground />

      {/* Dashed oval rings */}
      <div
        className="absolute rounded-full border-2 border-dashed border-white/20 pointer-events-none"
        style={{ width: 700, height: 580, top: '50%', right: -130, transform: 'translateY(-50%)', zIndex: 2 }}
      />
      <div
        className="absolute rounded-full border border-dashed border-white/15 pointer-events-none"
        style={{ width: 480, height: 400, top: '50%', right: -60, transform: 'translateY(-50%)', zIndex: 2 }}
      />

      {/* ── Mobile image — first on mobile ── */}
      <div className="lg:hidden w-full pt-24" style={{ zIndex: 2 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero.png"
          alt="Loan advisor with services"
          className="w-full object-contain select-none"
          draggable={false}
        />
      </div>

      {/* ── Hero image: anchored right, full height (desktop only) ── */}
      <div
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-[72%] pointer-events-none"
        style={{ zIndex: 2 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero.png"
          alt="Loan advisor with services"
          className="w-full h-full object-contain object-right-bottom select-none"
          draggable={false}
        />
      </div>

      {/* ── Text column ── */}
      <div
        className="relative flex flex-col items-center lg:items-start justify-center text-center lg:text-left px-8 lg:pl-20 xl:pl-28 lg:pr-0 lg:w-[44%] min-h-screen pt-10 pb-16 lg:py-0"
        style={{ zIndex: 3 }}
      >
        {/* Tag pill */}
        <div className="inline-block bg-white/90 text-navy border border-white rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-8">
          USA &amp; Canada Loan Lead Experts
        </div>

        <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-navy leading-[1.08] mb-7">
          Stop Chasing
          <br />
          Leads.
          <br />
          <span className="text-white drop-shadow-sm">Start Closing</span>
          <br />
          Them.
        </h1>

        <p className="text-navy/75 text-lg leading-relaxed mb-12 max-w-sm font-medium">
          We deliver verified, motivated loan seekers directly to your pipeline — home buyers, refinancers, and personal loan applicants across the USA and Canada.
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-16">
          <a href="#contact" className="btn-primary px-9 py-4 text-base">
            Get Started
          </a>
          <a
            href="#about"
            className="inline-block border-2 border-navy text-navy font-semibold px-9 py-4 rounded-full text-base hover:bg-navy hover:text-white transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div className="flex justify-center lg:justify-start gap-10">
          {[
            { value: '10K+', label: 'Verified Leads' },
            { value: '98%',  label: 'Satisfaction'   },
            { value: '2',    label: 'Countries'      },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl font-black text-navy">{value}</div>
              <div className="text-navy/60 text-xs font-medium mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
