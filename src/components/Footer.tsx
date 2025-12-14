'use client'

import {
  ArrowUp,
  Clock,
  Facebook,
  Heart,  
  Mail,
  MapPin,
  Phone,  
  Youtube,
} from 'lucide-react'

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/primo.wi', icon: Facebook },    
  { label: 'YouTube', href: 'https://www.youtube.com/@DobryFizjoPrzemyslaw', icon: Youtube },  
]

const quickLinks = [
  { label: 'Usługi', href: '#services' },
  { label: 'Proces terapii', href: '#why-choose-us' },
  { label: 'O mnie', href: '#about-team' },
  { label: 'Cennik', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Kontakt', href: '#location' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const currentYear = new Date().getFullYear()

  return (
    <footer className='relative overflow-hidden bg-[#02111e] text-slate-200'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute -top-10 left-12 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(20,184,166,0.25),transparent_70%)] blur-3xl' />
        <div className='absolute bottom-0 right-0 h-[420px] w-[420px] rounded-[45%] bg-[radial-gradient(circle,_rgba(249,115,22,0.2),transparent_70%)] blur-3xl' />
      </div>

      <div className='container relative z-10 grid gap-12 py-16 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)_minmax(0,1fr)]'>
        <div className='space-y-6 py-8'>
          <h3 className='text-3xl font-semibold text-slate-100'>Dobry Fizjo</h3>
          <p className='max-w-md text-slate-400'>
            Energetyczne podejście do terapii, które łączy diagnostykę funkcjonalną, manualną precyzję i trening
            kinetyczny. Wspólnie wprowadzimy Cię z powrotem w rytm bez bólu.
          </p>
          <div className='space-y-3 text-sm text-slate-300'>
            <a href='tel:506439462' className='flex items-center gap-3 transition hover:text-emerald-200'>
              <Phone className='h-4 w-4 text-emerald-200' />
              506 439 462
            </a>
            <a href='mailto:pt.wielemborek@gmail.com' className='flex items-center gap-3 transition hover:text-emerald-200'>
              <Mail className='h-4 w-4 text-emerald-200' />
              pt.wielemborek@gmail.com
            </a>
            <span className='flex items-center gap-3 text-slate-400'>
              <MapPin className='h-4 w-4 text-emerald-200' />
              ul. Wiadukt 5 lok.h2, 15-327 Białystok
            </span>
            <span className='flex items-start gap-3 text-slate-400'>
              <Clock className='h-4 w-4 text-emerald-200' />
              <span className='flex flex-col leading-tight'>
                <span>Poniedziałek, Piątek 8:45 - 16:15</span>
                <span>Wtorek, Środa, Czwartek 10:30 - 18:00</span>
              </span>
            </span>
          </div>
        </div>

        <div className='py-8'>
          <h4 className='text-xs font-semibold uppercase tracking-[0.4em] text-slate-500'>Nawigacja</h4>
          <nav className='mt-6 grid gap-3 text-sm text-slate-300'>
            {quickLinks.map((link) => (
              <a key={link.label} href={link.href} className='transition hover:text-emerald-200'>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className='py-8'>
          <h4 className='text-xs font-semibold uppercase tracking-[0.4em] text-slate-500'>Bądźmy w kontakcie</h4>
          <p className='mt-6 text-sm text-slate-400'>
            Dołącz do społeczności skupionej wokół świadomego ruchu. Najnowsze treści, warsztaty i wskazówki – prosto do
            Ciebie.
          </p>
          <div className='mt-6 flex flex-wrap gap-3'>
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                aria-label={label}
                href={href}
                className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-300/30 bg-[#052235]/80 text-emerald-200 transition hover:-translate-y-1 hover:border-emerald-200/60 hover:text-emerald-100'
              >
                <Icon className='h-5 w-5' />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className='relative border-t border-slate-800/60 bg-[#010b16]/70 py-6 text-xs uppercase tracking-[0.35em] text-slate-500'>
        <div className='container flex flex-col items-center justify-between gap-3 text-center md:flex-row'>
          <span>&copy; {currentYear} Dobry Fizjo. Wszystkie prawa zastrzeżone.</span>
          <span className='flex items-center gap-2'>
            Stworzone z <Heart className='h-4 w-4 text-amber-400' /> w Białymstoku
          </span>
        </div>
      </div>

      <button
        type='button'
        onClick={scrollToTop}
        className='fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-300/40 bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 text-slate-900 shadow-[0_28px_70px_-34px_rgba(20,184,166,0.85)] transition hover:scale-110 hover:shadow-[0_32px_80px_-36px_rgba(249,115,22,0.7)]'
        aria-label='Powrót na górę'
      >
        <ArrowUp className='h-5 w-5' />
      </button>
    </footer>
  )
}
