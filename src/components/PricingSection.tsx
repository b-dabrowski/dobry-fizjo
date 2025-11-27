'use client'

import { Calendar, Check, Mail, Phone } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Diagnoza startowa',
    price: '220 zł',
    duration: '60 minut',
    description: 'Kompleksowa ocena funkcjonalna i mapa priorytetów terapeutycznych.',
    features: [
      'Analiza ruchu i testy funkcjonalne',
      'Plan kinetycznej terapii krok po kroku',
      'Program ćwiczeń do domu',
      'Rekomendacje sprzętowe i regeneracyjne',
    ],
    popular: true,
  },
  {
    name: 'Sesja terapeutyczna',
    price: '220 zł',
    duration: '45-60 minut',
    description: 'Połączenie terapii manualnej, neuromobilizacji i treningu medycznego.',
    features: [
      'Indywidualny protokół zabiegowy',
      'Aktywny trening w oparciu o cele ruchowe',
      'Monitorowanie progresu',
      'Aktualizacja planu domowego',
    ],
    popular: false,
  },
]

const paymentOptions = ['Płatność gotówką', 'Karty płatnicze', 'Przelewy online', 'BLIK']

export default function PricingSection() {
  return (
    <section
      id='pricing'
      className='section-padding relative overflow-hidden bg-[#041826]'
    >
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute inset-x-0 top-0 mx-auto h-72 w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(20,184,166,0.25),transparent_70%)] blur-3xl' />
        <div className='absolute -bottom-28 right-10 h-72 w-72 rounded-[45%] bg-[radial-gradient(circle,_rgba(249,115,22,0.18),transparent_70%)] blur-3xl' />
        <div
          className='absolute inset-0 opacity-15'
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '46px 46px',
          }}
        />
      </div>

      <div className='container relative z-10 text-slate-200'>
        <div className='mb-16 text-center'>
          <h2 className='mb-6 text-4xl font-bold md:text-5xl'>
            Przejrzysty <span className='text-gradient'>Cennik</span>
          </h2>
          <p className='mx-auto max-w-3xl text-xl text-slate-400'>
            Wysoka intensywność pracy, nowoczesna diagnostyka i indywidualny plan kinezyterapii w uczciwych, prostych
            pakietach cenowych.
          </p>
        </div>

        <div className='mx-auto mb-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2'>
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative overflow-hidden rounded-[2.5rem] border border-emerald-300/30 bg-[#052235]/85 p-10 shadow-[0_38px_90px_-45px_rgba(20,184,166,0.7)] transition duration-300 hover:-translate-y-1 hover:border-emerald-200/60 hover:bg-[#062b42]/90 ${
                plan.popular ? 'md:scale-105' : ''
              }`}
            >
              <div className='mb-6 text-center'>
                <h3 className='text-xl font-semibold text-slate-100'>{plan.name}</h3>
                <div className='mt-2 text-4xl font-bold text-emerald-200'>{plan.price}</div>
                <p className='text-xs uppercase tracking-[0.4em] text-slate-500'>{plan.duration}</p>
                <p className='mt-4 text-sm text-slate-400'>{plan.description}</p>
              </div>

              <ul className='mb-8 space-y-3 text-sm text-slate-300'>
                {plan.features.map((feature) => (
                  <li key={feature} className='flex items-start gap-3'>
                    <Check className='mt-1 h-4 w-4 text-emerald-300' />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://www.znanylekarz.pl/przemyslaw-wielemborek/fizjoterapeuta/bialystok"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full rounded-full px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.4em] transition ${
                  plan.popular
                    ? 'bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 text-slate-900 shadow-[0_24px_60px_-30px_rgba(20,184,166,0.85)] hover:shadow-[0_28px_70px_-32px_rgba(249,115,22,0.6)]'
                    : 'border border-emerald-300/40 bg-[#041e30]/80 text-emerald-200 hover:border-emerald-300/60 hover:text-emerald-100'
                }`}
              >
                Umów wizytę
              </a>
            </div>
          ))}
        </div>

        <div className='mb-16 grid grid-cols-1 gap-8 rounded-[2.75rem] border border-emerald-300/25 bg-[#05263c]/80 p-10 shadow-[0_42px_95px_-48px_rgba(20,184,166,0.6)] backdrop-blur md:grid-cols-2'>
          <div>
            <h3 className='text-lg font-semibold text-slate-100'>Elastyczne modele płatności</h3>
            <p className='mt-4 text-sm text-slate-400'>
              Dopasuj formę rozliczeń do swoich potrzeb. Możesz łączyć metody lub rozliczać pakiety terapii.
            </p>
          </div>
          <div className='grid gap-3 text-sm text-slate-300'>
            {paymentOptions.map((option) => (
              <div
                key={option}
                className='flex items-center gap-3 rounded-2xl border border-emerald-300/25 bg-[#041f31]/80 p-3 shadow-[0_22px_55px_-38px_rgba(249,115,22,0.55)]'
              >
                <Check className='h-4 w-4 text-emerald-300' />
                <span>{option}</span>
              </div>
            ))}
          </div>
        </div>

        <div className='rounded-[2.75rem] border border-emerald-300/25 bg-[#05263c]/80 p-10 text-center text-slate-200 shadow-[0_45px_95px_-48px_rgba(20,184,166,0.65)] backdrop-blur'>
          <h3 className='text-2xl font-semibold text-slate-100'>Masz pytania dotyczące terapii?</h3>
          <p className='mx-auto mt-4 max-w-2xl text-sm text-slate-400'>
            Skontaktuj się z nami, opowiedz o swoich celach ruchowych, a my dobierzemy plan terapii i ustalimy
            dostępność terminów.
          </p>

          <div className='mt-8 flex flex-col justify-center gap-4 text-sm font-semibold uppercase tracking-[0.35em] sm:flex-row'>
            <a href='tel:506439462' className='btn-primary flex items-center justify-center gap-2'>
              <Phone className='h-4 w-4' />
              Zadzwoń
            </a>
            <a
              href="https://www.znanylekarz.pl/przemyslaw-wielemborek/fizjoterapeuta/bialystok"
              target="_blank"
              rel="noopener noreferrer"
              className='btn-secondary flex items-center justify-center gap-2'
            >
              <Calendar className='h-4 w-4' />
              Zarezerwuj
            </a>
          </div>

          <p className='mt-6 text-xs text-slate-600'>
            * Ostateczny plan i kosztorys terapii potwierdzimy po diagnostyce.
          </p>
        </div>
      </div>
    </section>
  )
}
