import FadeUp from './FadeUp'

const PROPERTIES = [
  { title: 'Cozy Family Home',   desc: 'Perfect for first-time buyers',      price: '$250K', img: 'https://images.unsplash.com/photo-1647579350413-a6ada4e480ed?w=400' },
  { title: 'Urban Apartment',    desc: 'Ideal for city living',               price: '$320K', img: 'https://images.unsplash.com/photo-1691425648793-8412963f3909?w=400' },
  { title: 'Luxury Condo',       desc: 'High-end finishes included',          price: '$450K', img: 'https://images.unsplash.com/photo-1604170665198-4f7185bc3c01?w=400' },
  { title: 'Country Ranch',      desc: 'Peaceful setting, lots of space',     price: '$380K', img: 'https://images.unsplash.com/photo-1606130887452-7d0cb055e30b?w=400' },
  { title: 'Starter Home',       desc: 'Affordable and move-in ready',        price: '$200K', img: 'https://images.unsplash.com/photo-1683472698811-f0f52f50434c?w=400' },
  { title: 'Modern Townhouse',   desc: 'Close to schools and shops',          price: '$310K', img: 'https://images.unsplash.com/photo-1696846911635-83b97e53fb65?w=400' },
]

export default function Properties() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp className="text-center mb-14">
          <div className="tag-pill mb-4">Property Examples</div>
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-3">Sample Lead Properties</h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Examples of property types our leads are seeking financing for.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTIES.map(({ title, desc, price, img }, i) => (
            <FadeUp key={title} delay={(i % 3) * 0.08}>
              <div className="card-hover rounded-3xl overflow-hidden border border-green-light bg-white h-full flex flex-col shadow-sm">
                <div className="relative h-44 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  {/* Price badge */}
                  <div className="absolute bottom-3 left-3 bg-navy text-white text-xs font-black px-3 py-1.5 rounded-full">
                    {price}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-navy mb-1">{title}</h3>
                  <p className="text-muted text-sm mb-4 flex-1">{desc}</p>
                  <a href="#contact" className="btn-outline-green text-sm px-5 py-2.5 text-center">
                    Get Leads
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
