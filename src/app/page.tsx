import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import AboutTeamSection from '@/components/AboutTeamSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import GallerySection from '@/components/GallerySection'
import PricingSection from '@/components/PricingSection'
import BlogSection from '@/components/BlogSection'
import LocationSection from '@/components/LocationSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <AboutTeamSection />
      <TestimonialsSection />
      <GallerySection />
      <PricingSection />
      <BlogSection />
      <LocationSection />
      <Footer />
    </main>
  )
}
