'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Check, Phone, Play, X } from 'lucide-react'

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
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)

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
              <button
                onClick={() => setIsFormOpen(true)}
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-slate-900 shadow-[0_22px_45px_-24px_rgba(15,118,110,0.95)] transition hover:-translate-y-[2px] hover:shadow-[0_30px_60px_-24px_rgba(15,118,110,0.95)]"
              >
                Rozpocznij diagnostykę online
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
              </button>

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
              <button
                onClick={() => setIsVideoOpen(true)}
                className="group absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-900 transition hover:scale-105"
                aria-label="Odtwórz wideo wprowadzające"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 via-cyan-300 to-orange-300 opacity-60 blur-xl transition group-hover:opacity-80" />
                <Play className="relative z-10 h-9 w-9 fill-slate-900" />
              </button>
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
                  className="group relative flex min-w-[220px] flex-col gap-3 rounded-3xl border border-white/12 bg-white/10 px-6 py-6 backdrop-blur-lg transition hover:border-white/30 hover:bg-white/16"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                    Krok {index + 1}
                  </span>
                  <span className="text-lg font-semibold text-white">{stage.title}</span>
                  <p className="text-sm leading-relaxed text-white/70">{stage.description}</p>
                  <span className="absolute -top-3 left-6 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs font-semibold text-white/70 shadow-[0_8px_20px_-10px_rgba(255,255,255,0.55)]">
                    {index + 1}
                  </span>
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

      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-2xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Zamknij wideo"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="aspect-video w-full bg-slate-900/60">
              <iframe
                src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
                title="Dobry Fizjo - wprowadzenie"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}

      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-6 backdrop-blur">
          <div className="relative w-full max-w-xl space-y-6 overflow-hidden rounded-3xl border border-white/10 bg-white/95 p-8 text-slate-900 shadow-2xl">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-600 transition hover:bg-slate-200"
              aria-label="Zamknij formularz"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-900">Rozpocznij diagnostykę online</h2>
              <p className="text-sm text-slate-600">
                Wypełnij formularz, a odezwiemy się, aby umówić Twoją 15-minutową konsultację diagnostyczną.
              </p>
            </div>
            <form className="space-y-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700">
                  Imię i nazwisko
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Podaj swoje imię"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">
                  Adres e-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="goal" className="text-sm font-medium text-slate-700">
                  Cel terapii
                </label>
                <textarea
                  id="goal"
                  name="goal"
                  rows={4}
                  placeholder="Opisz krótko, jaki ruch lub sport chcesz odzyskać."
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                />
              </div>
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-orange-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_20px_45px_-25px_rgba(6,182,212,0.85)] transition hover:shadow-[0_28px_55px_-20px_rgba(6,182,212,0.9)]"
              >
                Wyślij zgłoszenie
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
