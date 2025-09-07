'use client'

import { 
  Users, 
  Target, 
  Stethoscope, 
  Award, 
  Shield,
  Clock
} from 'lucide-react'

const benefits = [
  {
    icon: Users,
    title: 'Doświadczony zespół',
    description: 'Certyfikowani terapeuci z ponad 15-letnim doświadczeniem w rehabilitacji.'
  },
  {
    icon: Target,
    title: 'Indywidualne podejście',
    description: 'Indywidualne plany leczenia dopasowane do Twoich potrzeb, celów i stylu życia.'
  },
  {
    icon: Stethoscope,
    title: 'Nowoczesny sprzęt',
    description: 'Nowoczesna technologia i sprzęt rehabilitacyjny dla najlepszych efektów leczenia.'
  },
  {
    icon: Award,
    title: 'Certyfikowana jakość',
    description: 'Certyfikowany gabinet i sprawdzone metody terapii.'
  },
  {
    icon: Shield,
    title: 'Akceptujemy ubezpieczenia',
    description: 'Współpracujemy z większością ubezpieczycieli, by zapewnić dostępność usług.'
  },
  {
    icon: Clock,
    title: 'Elastyczne godziny',
    description: 'Dogodne terminy wizyt, także wieczorami i w weekendy.'
  }
]

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Dlaczego warto wybrać <span className="text-gradient">Dobry Fizjo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zapewniam wyjątkową opiekę rehabilitacyjną, która pomaga szybciej i skuteczniej osiągnąć cele powrotu do zdrowia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Satysfakcja pacjentów</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">Lat doświadczenia</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">5000+</div>
              <div className="text-gray-600">Skutecznych terapii</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Wsparcie awaryjne</div>
            </div>
          </div>
        </div>        
      </div>
    </section>
  )
}
