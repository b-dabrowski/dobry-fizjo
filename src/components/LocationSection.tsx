'use client'

import {
  Accessibility,
  Bus,
  Car,
  Clock,
  Mail,
  MapPin,
  Navigation,
  Phone,
} from 'lucide-react'

const highlights = [
  {
    icon: <Car className='h-8 w-8' />,
    title: 'Bezpłatny parking',
    description: 'Ponad 50 miejsc parkingowych na terenie obiektu, również dla osób z niepełnosprawnościami.',
  },
  {
    icon: <Bus className='h-8 w-8' />,
    title: 'Komunikacja miejska',
    description: 'Linie 15, 22 i 34 zatrzymują się przy klinice. Dojazd z centrum zajmuje 12 minut.',
  },
  {
    icon: <Accessibility className='h-8 w-8' />,
    title: 'Pełna dostępność',
    description: 'Podjazdy, windy i gabinety przystosowane do wózków oraz funkcjonalna toaleta.',
  },
]

const nearbyPoints = [
  { icon: '🏥', title: 'Szpital Miejski', distance: '0,5 km' },
  { icon: '🏪', title: 'Apteka całodobowa', distance: '0,2 km' },
  { icon: '☕', title: 'Kawiarnia', distance: '0,3 km' },
  { icon: '🚇', title: 'Przystanek autobusowy', distance: '150 m' },
]

export default function LocationSection() {
  return (
    <section
      id='location'
      className='section-padding relative overflow-hidden bg-[#041826]'
    >
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute inset-x-0 top-10 mx-auto h-72 w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(20,184,166,0.25),transparent_70%)] blur-3xl' />
        <div className='absolute -bottom-24 left-12 h-72 w-72 rounded-[45%] bg-[radial-gradient(circle,_rgba(249,115,22,0.2),transparent_70%)] blur-3xl' />
      </div>

      <div className='container relative z-10 text-slate-200'>
        <div className='mb-16 text-center'>
          <h2 className='mb-6 text-4xl font-bold md:text-5xl'>
            Odwiedź naszą <span className='text-gradient'>klinikę</span>
          </h2>
          <p className='mx-auto max-w-3xl text-xl text-slate-400'>
            Pracujemy w przestrzeni zaprojektowanej pod dynamiczny ruch. Znajdziesz tu diagnostykę, terapię i strefę
            regeneracji w jednym miejscu.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
          <div className='order-2 lg:order-1'>
            <div className='h-96 min-h-[400px] overflow-hidden rounded-[2.75rem] border border-emerald-300/25 bg-[#052235]/85 shadow-[0_40px_95px_-45px_rgba(20,184,166,0.7)] lg:h-full'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2395.6155498837757!2d23.129546676882466!3d53.09913919319123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffbe453edb73f%3A0x2e937a0cb0062bcc!2sDobryFizjo%20Przemys%C5%82aw%20Wielemborek!5e0!3m2!1sen!2spl!4v1757264068606!5m2!1sen!2spl'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='DobryFizjo Lokalizacja'
                className='rounded-[inherit]'
              />
            </div>
          </div>

          <div className='order-1 space-y-8 lg:order-2'>
            <div className='rounded-[2.5rem] border border-emerald-300/25 bg-[#052235]/85 p-6 shadow-[0_30px_80px_-45px_rgba(20,184,166,0.65)] transition hover:-translate-y-1 hover:border-emerald-200/50'>
              <div className='flex items-start gap-4'>
                <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-emerald-300/40 bg-emerald-300/15 text-emerald-200'>
                  <MapPin className='h-6 w-6' />
                </div>
                <div className='space-y-3 text-sm text-slate-300'>
                  <h3 className='text-lg font-semibold text-slate-100'>Adres</h3>
                  <p className='leading-relaxed text-slate-400'>
                    ul. Wiadukt 5 lok.h2, 15-327 Białystok
                    <br />
                    dzielnica Dojlidy
                  </p>
                  <button className='inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200 transition hover:gap-3 hover:text-amber-200'>
                    <Navigation className='h-4 w-4' />
                    Wyznacz trasę
                  </button>
                </div>
              </div>
            </div>

            <div className='rounded-[2.5rem] border border-emerald-300/25 bg-[#052235]/85 p-6 shadow-[0_30px_80px_-45px_rgba(20,184,166,0.65)] transition hover:-translate-y-1 hover:border-emerald-200/50'>
              <div className='flex items-start gap-4'>
                <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-emerald-300/40 bg-emerald-300/15 text-emerald-200'>
                  <Clock className='h-6 w-6' />
                </div>
                <div className='flex-1 text-sm text-slate-300'>
                  <h3 className='text-lg font-semibold text-slate-100'>Godziny pracy</h3>
                  <div className='mt-4 space-y-2 text-slate-400'>
                    <div className='flex justify-between'>
                      <span>Poniedziałek, Piątek</span>
                      <span className='font-semibold text-slate-100'>8:45 - 16:15</span>
                    </div>
                    <div className='flex justify-between'>
                      <span>Wtorek, Środa, Czwartek</span>
                      <span className='font-semibold text-slate-100'>8:45 - 16:15</span>
                    </div>
                    <div className='flex justify-between'>
                      <span>Weekend</span>
                      <span className='font-semibold text-slate-100'>Nieczynne</span>
                    </div>
                  </div>
                  <div className='mt-4 rounded-2xl border border-emerald-300/30 bg-emerald-400/10 p-3 text-xs uppercase tracking-[0.35em] text-emerald-100'>
                    Wsparcie telefoniczne 24/7 w nagłych przypadkach.
                  </div>
                </div>
              </div>
            </div>

            <div className='rounded-[2.5rem] border border-emerald-300/25 bg-[#052235]/85 p-6 shadow-[0_30px_80px_-45px_rgba(20,184,166,0.65)] transition hover:-translate-y-1 hover:border-emerald-200/50'>
              <div className='flex items-start gap-4'>
                <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-emerald-300/40 bg-emerald-300/15 text-emerald-200'>
                  <Phone className='h-6 w-6' />
                </div>
                <div className='space-y-3 text-sm text-slate-300'>
                  <h3 className='text-lg font-semibold text-slate-100'>Kontakt</h3>
                  <a
                    href='tel:+48506439462'
                    className='flex items-center gap-3 text-sm text-slate-300 transition hover:text-emerald-200'
                  >
                    <Phone className='h-4 w-4 text-emerald-300' />
                    506 439 462
                  </a>
                  <a
                    href='mailto:pt.wielemborek@gmail.com'
                    className='flex items-center gap-3 text-sm text-slate-300 transition hover:text-emerald-200'
                  >
                    <Mail className='h-4 w-4 text-emerald-300' />
                    pt.wielemborek@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16 grid grid-cols-1 gap-8 md:grid-cols-3'>
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className='rounded-[2.5rem] border border-emerald-300/25 bg-[#052235]/80 p-8 text-center text-slate-200 shadow-[0_34px_90px_-45px_rgba(20,184,166,0.6)] transition hover:-translate-y-1 hover:border-emerald-200/50'
            >
              <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-300/15 text-emerald-200'>
                {highlight.icon}
              </div>
              <h3 className='text-lg font-semibold text-slate-100'>{highlight.title}</h3>
              <p className='mt-2 text-sm text-slate-400'>{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className='mt-16 rounded-[2.75rem] border border-emerald-300/25 bg-[#05263c]/80 p-10 text-slate-200 shadow-[0_45px_95px_-48px_rgba(20,184,166,0.6)] backdrop-blur'>
          <h3 className='mb-6 text-center text-2xl font-semibold text-slate-100'>W pobliżu</h3>
          <div className='grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-4'>
            {nearbyPoints.map((point) => (
              <div
                key={point.title}
                className='rounded-[2rem] border border-emerald-300/25 bg-[#041f31]/85 p-6 shadow-[0_30px_80px_-48px_rgba(249,115,22,0.55)]'
              >
                <div className='text-3xl'>{point.icon}</div>
                <h4 className='mt-4 font-semibold text-slate-100'>{point.title}</h4>
                <p className='text-sm text-slate-400'>{point.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
