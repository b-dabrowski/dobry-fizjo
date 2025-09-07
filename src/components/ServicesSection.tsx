'use client'

import { 
  Activity, 
  Heart, 
  Zap, 
  Brain, 
  Hand,
  ArrowRight 
} from 'lucide-react'

const services = [
  {
    icon: Hand,
    title: 'Terapia manualna',
    description: 'Pracuję w oparciu o koncepcję Maitland – jedną z najbardziej uznanych metod terapii manualnej na świecie. Pomagam w przypadku bólu kręgosłupa, stawów i kończyn, ograniczeń ruchomości, urazów sportowych, bólów głowy i napięć mięśniowych.'
  },
  {
    icon: Brain,
    title: 'Neuromobilizacja',
    description: 'Specjalistyczne techniki mobilizacji układu nerwowego, które pomagają w redukcji bólu neuropatycznego i poprawie funkcji nerwowej.'
  },
  {
    icon: Activity,
    title: 'Trening medyczny',
    description: 'Indywidualnie dobrany plan ćwiczeń, który zmniejsza ból, wzmacnia mięśnie i stawy, pomaga zapobiegać kontuzjom oraz poprawia kondycję i samopoczucie.'
  },
  {
    icon: Heart,
    title: 'Terapia ruchem',
    description: 'Ruch to najlepsze lekarstwo – zastąpi wiele tabletek i pozwala cieszyć się zdrowym ciałem w każdym wieku. Profesjonalne programy ćwiczeń dostosowane do Twoich potrzeb.'
  },
  {
    icon: Zap,
    title: 'Rehabilitacja pooperacyjna',
    description: 'Profesjonalnie prowadzona rehabilitacja pozwala szybciej wrócić do zdrowia i uniknąć powikłań. Wspieram pacjentów po zabiegach ortopedycznych, kontuzjach sportowych i urazach przeciążeniowych.'
  },
  {
    icon: Brain,
    title: 'Łagodzenie bólu',
    description: 'Skuteczne metody leczenia bólu ostrego i przewlekłego, w tym bólu kręgosłupa, kończyn, głowy oraz bólu neuropatycznego. Kompleksowe podejście do zarządzania bólem.'
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Co <span className="text-gradient">Oferujemy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferuję kompleksowe usługi fizjoterapeutyczne dostosowane do Twoich indywidualnych potrzeb, 
            wykorzystując nowoczesne techniki i sprzęt, aby zapewnić optymalne efekty leczenia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card group hover:border-primary-200 border border-transparent transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                  <service.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 ml-4">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <button className="text-primary-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Dowiedz się więcej
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Nie wiesz, która usługa jest dla Ciebie odpowiednia?
            </h3>
            <p className="text-gray-600 mb-6">
              Podczas konsultacji ocenię Twój stan zdrowia i zaproponuję najlepszy, indywidualny plan terapii.
            </p>
            <button className="btn-primary">
              Umów konsultację
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
