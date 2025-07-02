import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}