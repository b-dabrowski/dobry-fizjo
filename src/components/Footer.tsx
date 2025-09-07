'use client'

import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Heart,
  ArrowUp
} from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container py-12 flex flex-col md:flex-row md:justify-between md:items-center gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-2">
            Dobry Fizjo
          </h3>
          <p className="text-gray-300 mb-4">
            Przywracamy sprawność i komfort życia dzięki profesjonalnej rehabilitacji.
          </p>
          <div className="flex items-center gap-4 mb-2">
            <Phone className="w-5 h-5 text-primary-400" />
            <a href="tel:506439462" className="text-gray-300 hover:text-primary-400 transition-colors">506 439 462</a>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <Mail className="w-5 h-5 text-primary-400" />
            <a href="mailto:pt.wielemborek@gmail.com" className="text-gray-300 hover:text-primary-400 transition-colors">pt.wielemborek@gmail.com</a>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-5 h-5 text-primary-400" />
            <span className="text-gray-300">ul. Wiadukt 5 lok.h2, 15-327 Białystok</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <a href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">Usługi</a>
          <a href="#about-team" className="text-gray-300 hover:text-primary-400 transition-colors">Zespół</a>
          <a href="#contact" className="text-gray-300 hover:text-primary-400 transition-colors">Kontakt</a>
          <a href="#pricing" className="text-gray-300 hover:text-primary-400 transition-colors">Cennik</a>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8">
        <div className="container py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-2">
          <span>&copy; 2024 Dobry Fizjo. Wszystkie prawa zastrzeżone.</span>
          <span className="flex items-center gap-1">Stworzone z <Heart className="w-4 h-4 text-red-500" /> w Białymstoku</span>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-600 transition-all hover:scale-110 z-40"
        aria-label="Powrót na górę"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  )
}
