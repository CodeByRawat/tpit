import FadeUp from './FadeUp'

export default function Testimonial() {
  return (
    <section className="py-24" style={{ background: 'linear-gradient(160deg, #0d1b36 0%, #1B2D5A 100%)' }}>
      <div className="max-w-5xl mx-auto px-6">

        <FadeUp className="text-center mb-12">
          <span
            className="inline-block text-[10px] font-black uppercase tracking-[0.22em] px-4 py-1.5 rounded-full mb-6"
            style={{ background: 'rgba(126,171,120,0.18)', color: '#7EAB78', border: '1px solid rgba(126,171,120,0.35)' }}
          >
            Client Success
          </span>
          <h2 className="text-4xl font-black text-white">What Our Clients Say</h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="rounded-4xl p-8 md:p-12 relative overflow-hidden border" style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.1)' }}>

            {/* Decorative large quote */}
            <div
              className="absolute -top-2 -left-2 font-serif leading-none select-none pointer-events-none"
              style={{ fontSize: '200px', color: 'rgba(255,255,255,0.04)' }}
            >
              &ldquo;
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center">

              {/* Avatar column */}
              <div className="flex flex-col items-center md:items-start gap-4 md:border-r md:pr-10" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1552345387-6ba8e88460a7?w=80"
                  alt="J. Lee"
                  className="w-20 h-20 rounded-2xl object-cover"
                  style={{ border: '2px solid rgba(255,255,255,0.15)' }}
                />
                <div>
                  <div className="font-black text-white text-lg">J. Lee</div>
                  <div className="text-white/50 text-sm">Financial Services Director</div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="#F5D535" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Quote column */}
              <div className="text-center md:text-left">
                <blockquote className="text-xl md:text-2xl font-semibold text-white leading-relaxed mb-6">
                  &ldquo;Thanks to The Prime Infotech, we connected with serious homebuyers quickly and boosted our loan approvals significantly.&rdquo;
                </blockquote>
                <span
                  className="inline-block text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1 rounded-full"
                  style={{ background: 'rgba(126,171,120,0.2)', color: '#7EAB78', border: '1px solid rgba(126,171,120,0.35)' }}
                >
                  Verified Client
                </span>
              </div>

            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
