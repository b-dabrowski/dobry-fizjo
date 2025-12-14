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
          className={`h-5 w-5 ${
            i < rating ? 'text-amber-300 fill-amber-300' : 'text-slate-600'
          }`}
        />
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden bg-[#041826]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.2),transparent_70%)] mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(249,115,22,0.18),transparent_70%)] mix-blend-screen" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container relative z-10 text-slate-200">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Opinie <span className="text-gradient">Pacjentów</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-400">
            Energia, którą wkładamy w terapię, wraca do nas w postaci historii pełnych ruchu, bez bólu i z nową mocą.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-emerald-300/30 bg-[#052235]/85 p-8 shadow-[0_34px_80px_-42px_rgba(20,184,166,0.65)] transition duration-300 hover:-translate-y-1 hover:border-emerald-200/60 hover:bg-[#062a41]/90 hover:shadow-[0_40px_85px_-40px_rgba(249,115,22,0.55)]"
            >
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              <blockquote className="mb-6 text-sm leading-relaxed text-slate-300 italic">"{testimonial.text}"</blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full border border-emerald-300/25 object-cover"
                />
                <div className="space-y-1 text-sm">
                  <h4 className="font-semibold text-slate-100">{testimonial.name}</h4>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{testimonial.condition}</p>
                  <p className="text-xs text-slate-600">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-[2.75rem] border border-emerald-300/30 bg-[#05263c]/80 p-10 text-center shadow-[0_40px_95px_-45px_rgba(20,184,166,0.6)] backdrop-blur">
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="flex justify-center">
              <StarRating rating={5} />
            </div>
            <h3 className="text-2xl font-semibold text-slate-100">5/5 Średnia Ocena</h3>
            <p className="text-sm text-slate-400">
              Na podstawie opinii z Google i mediów społecznościowych. Ruch, zaangażowanie i konsekwencja przynoszą
              wyniki.
            </p>

            <div className="grid grid-cols-1 gap-6 text-xs uppercase tracking-[0.4em] text-slate-500 sm:grid-cols-2 md:grid-cols-3">
              {['Poleciłoby znajomym', 'Profesjonalna obsługa', 'Higiena i komfort'].map((item) => (
                <div key={item}>
                  <div className="text-lg font-semibold text-emerald-200">100%</div>
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">          
          <a
            href="https://www.znanylekarz.pl/przemyslaw-wielemborek/fizjoterapeuta/bialystok"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Umów konsultację już dziś
          </a>          
        </div>
      </div>
    </section>
  )
}
