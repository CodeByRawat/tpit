import FadeUp from './FadeUp'

const PROJECTS = [
  { icon: '🏠', title: 'Home Loans',     desc: 'Qualified buyers seeking new homes.',      color: '#7EAB78' },
  { icon: '📉', title: 'Refinance',      desc: 'Clients looking to lower their rates.',    color: '#7EAB78' },
  { icon: '🏢', title: 'Property Loans', desc: 'Investors ready to buy properties.',       color: '#7EAB78' },
  { icon: '📊', title: 'Lead Sourcing',  desc: 'Data collected from top platforms.',       color: '#7EAB78' },
]

export default function Projects() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <FadeUp className="text-center mb-14">
          <div className="tag-pill mb-4">What We Do</div>
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-3">Our Projects</h2>
          <p className="text-muted text-lg max-w-md mx-auto">Connecting lenders with eager borrowers across USA &amp; Canada.</p>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {PROJECTS.map(({ icon, title, desc }, i) => (
            <FadeUp key={title} delay={i * 0.08}>
              <div className="card-hover bg-white rounded-3xl p-6 text-center h-full flex flex-col items-center border border-green-light hover:border-green-mid transition-colors duration-200">
                {/* Icon circle — consistent green ring */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5 border border-green-light"
                  style={{ background: '#EDF5EC' }}
                >
                  {icon}
                </div>
                {/* Green top accent line */}
                <div className="w-8 h-1 rounded-full mb-4" style={{ background: '#7EAB78' }} />
                <h3 className="text-navy font-bold text-sm mb-2">{title}</h3>
                <p className="text-muted text-xs leading-relaxed">{desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
