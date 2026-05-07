import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Properties from '@/components/Properties'
import FAQ from '@/components/FAQ'
import Testimonial from '@/components/Testimonial'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Properties />
        <FAQ />
        <Testimonial />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
