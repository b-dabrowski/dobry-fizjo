'use client'

import Image from 'next/image'
import { ArrowRight, Check, Phone } from 'lucide-react'

const checklist = [
  'Spersonalizowany plan terapii oparty na Twoich celach ruchowych',
  'Zaawansowana diagnostyka funkcjonalna i analizatory ruchu',
  'Stałe wsparcie zespołu – od pierwszej konsultacji po ostatni trening',
]

const therapyStages = [
  { title: 'Diagnoza 360°', description: 'Analiza postawy, testy funkcjonalne, feedback video.' },
  { title: 'Projekt ruchu', description: 'Plan terapii i treningów korygujących dostosowany do kalendarza.' },
  { title: 'Terapia aktywna', description: 'Sesje manualne, trening medyczny i mobilizacje stawowe.' },
  { title: 'Regeneracja smart', description: 'Odnowa biologiczna, oddech, prehab i monitoring obciążeń.' },
  { title: 'Powrót bez strachu', description: 'Symulacje sport-specific, kontrola progresu, profilaktyka.' },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#041826] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.4),transparent_65%)] mix-blend-screen animate-gradient-shift" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.45),transparent_60%)] mix-blend-screen animate-gradient-shift-delayed" />
        <div
          className="absolute inset-0 opacity-30 animate-parallax-dots"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)',
            backgroundSize: '42px 42px',
          }}
        />
      </div>

      <div className="container relative z-10 flex min-h-screen flex-col justify-center gap-16 py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)] lg:items-center">
          <div className="space-y-10 text-left">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-white/80 backdrop-blur">
                Cześć, tu Przemek
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Razem uruchomimy Twoje ciało na nowo – z energią, bez bólu i z planem na każdy krok.
              </h1>
              <p className="max-w-xl text-base text-white/80 sm:text-lg">
                Łączę terapię manualną, trening medyczny i elementy coachingu ruchowego, abyś wrócił do ulubionej
                aktywności pewnie i świadomie.
              </p>
            </div>

            <ul className="space-y-4">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-4 text-base text-white/80">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <Check className="h-5 w-5 text-emerald-300" />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="tel:506439462"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-4 text-lg font-semibold text-white/80 transition hover:border-white/50 hover:text-white"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
                  <Phone className="h-5 w-5" />
                </span>
                Porozmawiaj z nami
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/5/20 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 opacity-70" />
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 border-dashed opacity-60 animate-[spin_26s_linear_infinite]">
              <span className="absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-300 shadow-[0_0_15px_rgba(110,231,183,0.8)]" />
              <span className="absolute -bottom-2 left-8 h-3 w-3 rounded-full bg-orange-300 shadow-[0_0_15px_rgba(253,186,116,0.8)]" />
              <span className="absolute top-12 -right-2 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.7)]" />
            </div>
            <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-[spin_18s_linear_infinite_reverse] opacity-40" />

            <div className="relative overflow-hidden rounded-[3rem] border border-white/15 bg-white/10 shadow-[0_45px_75px_-35px_rgba(14,116,144,0.65)] backdrop-blur-xl">
              <Image
                src="/images/team/przemek-hero-transparent.png"
                alt="Przemek – fizjoterapeuta prezentujący dynamiczny ruch"
                width={800}
                height={1000}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.38em] text-white/60">
            <span>Ścieżka terapii</span>
            <span>Przesuń →</span>
          </div>
          <div className="overflow-x-auto pb-6">
            <div className="flex min-w-max gap-6 pr-6">
              {therapyStages.map((stage, index) => (
                <div
                  key={stage.title}
                  className="group flex min-w-[220px] flex-col gap-3 rounded-3xl border border-white/12 bg-white/10 px-6 py-6 backdrop-blur-lg transition hover:border-white/30 hover:bg-white/16"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                    Krok {index + 1}
                  </span>
                  <span className="text-lg font-semibold text-white">{stage.title}</span>
                  <p className="text-sm leading-relaxed text-white/70">{stage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
        <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.45em] text-white/70 backdrop-blur">
          Przewiń po szczegóły
          <ArrowRight className="h-4 w-4 rotate-90 text-white/70" />
        </div>
      </div>
    </section>
  )
}
