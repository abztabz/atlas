import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { BenefitStrip } from './components/BenefitStrip'
import { BookingForm } from './components/BookingForm'
import { FeaturedFleet } from './components/FeaturedFleet'
import { WhyChoose } from './components/WhyChoose'
import { HowItWorks } from './components/HowItWorks'
import { Testimonial } from './components/Testimonial'
import { TrustStrip } from './components/TrustStrip'
import { WhatsAppCard } from './components/WhatsAppCard'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BenefitStrip />
        <BookingForm />
        <FeaturedFleet />
        <WhyChoose />
        <HowItWorks />
        <Testimonial />
        <TrustStrip />
        <WhatsAppCard />
      </main>
      <Footer />
    </>
  )
}
