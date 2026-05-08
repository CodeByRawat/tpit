import FadeUp from './FadeUp'

const PILLS = ['✓ Verified Leads', '✓ Across Canada', '✓ Real-time Data', '✓ Multiple Loan Types']

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <FadeUp className="relative">
            <div
              className="rounded-4xl overflow-hidden h-[480px]"
              style={{ background: 'linear-gradient(135deg, #D4E8D1 0%, #A8C9A3 100%)' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?w=600"
                alt="Financial professionals"
                className="w-full h-full object-cover mix-blend-multiply opacity-90"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl p-5 shadow-xl border border-green-light">
              <div className="text-3xl font-black text-navy">5+</div>
              <div className="text-muted text-sm font-medium">Years Experience</div>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-1.5 rounded-full" style={{ background: i < 4 ? '#7EAB78' : '#D4E8D1' }} />
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Text */}
          <FadeUp delay={0.15}>
            <div className="tag-pill mb-4">About Us</div>
            <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight mb-6">
              Who We Are
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-4">
              Connecting financial companies with serious loan seekers across Canada. We source verified,
              motivated borrowers actively seeking home loans and refinancing solutions.
            </p>
            <p className="text-muted text-base leading-relaxed mb-8">
              Our data-driven approach ensures every lead is qualified and genuinely interested — so your team spends
              time closing deals, not chasing cold contacts.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {PILLS.map((p) => (
                <span key={p} className="bg-green-pale border border-green-light text-navy text-sm font-semibold px-4 py-2 rounded-full">
                  {p}
                </span>
              ))}
            </div>
            <a href="#contact" className="btn-primary px-8 py-4 text-base">
              Get Leads
            </a>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
