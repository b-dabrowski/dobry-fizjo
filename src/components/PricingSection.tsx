'use client'

import { Check, Phone, Mail, Calendar } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Pierwsza wizyta',
    price: '220 zł',
    duration: '60 minut',
    description: 'Kompleksowa diagnostyka i opracowanie planu terapii',
    features: [
      'Szczegółowy wywiad medyczny',
      'Badanie fizykalne i ocena stanu',
      'Indywidualny plan leczenia',
      'Ustalenie celów i harmonogramu',
      'Edukacja pacjenta',
      'Program ćwiczeń domowych'
    ],
    popular: true
  },
  {
    name: 'Kolejna wizyta',
    price: '220 zł',
    duration: '45-60 minut',
    description: 'Sesja terapeutyczna z licencjonowanym fizjoterapą',
    features: [
      'Indywidualne podejście do leczenia',
      'Monitorowanie postępów',
      'Instrukcja ćwiczeń',
      'Techniki terapii manualnej',
      'Trening z wykorzystaniem sprzętu',
      'Aktualizacja programu domowego'
    ],
    popular: false
  }
]


export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Przejrzysty <span className="text-gradient">Cennik</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jakościowa opieka fizjoterapeutyczna nie musi być droga. Oferuję konkurencyjne ceny 
            i elastyczne podejście, aby leczenie było dostępne dla każdego.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`card relative ${
                plan.popular 
                  ? 'border-2 border-primary-500 shadow-xl scale-105' 
                  : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {plan.price}
                </div>
                <p className="text-gray-500">{plan.duration}</p>
                <p className="text-gray-600 mt-4">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-primary-500 text-white hover:bg-primary-600'
                    : 'bg-gray-100 text-gray-800 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                Umów wizytę
              </button>
            </div>
          ))}
        </div>

        {/* Payment Information */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Opcje Płatności
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferuję elastyczne opcje płatności, aby leczenie było dostępne 
              i wygodne dla każdego pacjenta.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Payment Options */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                Akceptowane Formy Płatności
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <Check className="w-5 h-5 text-primary-500" />
                  <span className="text-gray-700">Płatność gotówką</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <Check className="w-5 h-5 text-primary-500" />
                  <span className="text-gray-700">Karty płatnicze (Visa, Mastercard)</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <Check className="w-5 h-5 text-primary-500" />
                  <span className="text-gray-700">Przelewy bankowe</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <Check className="w-5 h-5 text-primary-500" />
                  <span className="text-gray-700">Blik</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact for Pricing */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Masz pytania dotyczące leczenia?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Potrzeby każdego pacjenta są unikalne. Skontaktuj się ze mną, aby omówić 
            Twój stan zdrowia i dostosować plan leczenia do Twoich potrzeb.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:506439462"
              className="btn-primary flex items-center gap-2 justify-center"
            >
              <Phone className="w-5 h-5" />
              Zadzwoń
            </a>
            <a 
              href="mailto:pt.wielemborek@gmail.com"
              className="btn-secondary flex items-center gap-2 justify-center"
            >
              <Mail className="w-5 h-5" />
              Napisz e-mail
            </a>
            <button className="btn-secondary flex items-center gap-2 justify-center">
              <Calendar className="w-5 h-5" />
              Umów konsultację
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            * Ceny mogą się różnić w zależności od indywidualnych potrzeb leczenia. 
            Skontaktuj się ze mną, aby uzyskać dokładne informacje o kosztach terapii.
          </p>
        </div>
      </div>
    </section>
  )
}
