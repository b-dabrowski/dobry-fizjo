'use client'

import { ArrowRight, Phone } from 'lucide-react'

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/df-hero-001.jpg"
          alt="Rehabilitation clinic interior"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-blue-50/80"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fade-in">
            <span className="text-gradient">Dobry Fizjo</span>
            <br />
            <span className="text-3xl md:text-4xl font-normal text-gray-600">
              Fizjoterapia i Rehabilitacja w Białymstoku
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up">
            Indywidualna diagnoza, skuteczna terapia i pełne wsparcie pacjenta w drodze do życia bez bólu
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <button 
              onClick={scrollToContact}
              className="btn-primary text-lg px-8 py-4 flex items-center gap-2 hover:gap-3 transition-all"
            >
              Umów wizytę
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <a 
              href="tel:506439462" 
              className="btn-secondary text-lg px-8 py-4 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Zadzwoń teraz
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-primary-600">15+</div>
              <div className="text-gray-600">Lat doświadczenia</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-primary-600">5000+</div>
              <div className="text-gray-600">Leczeń pacjentów</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-primary-600">98%</div>
              <div className="text-gray-600">Skuteczność terapii</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-primary-600">24/7</div>
              <div className="text-gray-600">Wsparcie awaryjne</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
