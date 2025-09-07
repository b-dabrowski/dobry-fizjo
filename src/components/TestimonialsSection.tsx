'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rafał',
    condition: 'Pacjent',
    rating: 5,
    text: 'Profesjonalne podejście, szybka diagnoza i skuteczna terapia – polecam każdemu!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    date: '2 miesiące temu'
  },
  {
    name: 'Piotr B',
    condition: 'Pacjent',
    rating: 5,
    text: 'Pan Przemysław prowadzi pacjenta od diagnozy aż po pełen powrót do zdrowia – pełen profesjonalizm.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    date: '1 miesiąc temu'
  },
  {
    name: 'Dawid',
    condition: 'Problemy z barkiem',
    rating: 5,
    text: 'Po serii zabiegów bark wrócił do sprawności, a operacja okazała się niepotrzebna. Polecam!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    date: '3 tygodnie temu'
  }
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Opinie <span className="text-gradient">Pacjentów</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nie musisz wierzyć tylko na słowo. Zobacz, co mówią moi pacjenci 
            o doświadczeniach z fizjoterapii i rehabilitacji.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card relative group hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>

              {/* Patient Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.condition}
                  </p>
                  <p className="text-xs text-gray-400">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <StarRating rating={5} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              5/5 Średnia Ocena
            </h3>
            <p className="text-gray-600 mb-6">
              Na podstawie opinii zadowolonych pacjentów z Google i platform społecznościowych
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-600">100%</div>
                <div className="text-sm text-gray-600">Poleciłoby znajomym</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600">100%</div>
                <div className="text-sm text-gray-600">Doskonale leczenie</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600">100%</div>
                <div className="text-sm text-gray-600">Profesjonalna obsługa</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600">100%</div>
                <div className="text-sm text-gray-600">Czyste pomieszczenia</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Gotowy, aby rozpocząć drogę do zdrowia?
          </h3>
          <p className="text-gray-600 mb-6">
            Dołącz do grona zadowolonych pacjentów i przekonaj się, że zdrowie zaczyna się od dobrego fizjoterapeuty.
          </p>
          <button className="btn-primary">
            Umów konsultację już dziś
          </button>
        </div>
      </div>
    </section>
  )
}
