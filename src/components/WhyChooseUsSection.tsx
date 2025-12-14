'use client'

import { 
  Users, 
  Target, 
  Stethoscope, 
  Award, 
  Clock
} from 'lucide-react'

const benefits = [
  {
    icon: Users,
    title: 'Doświadczenie',
    description: 'Fizjoterapeuta z wieloletnim stażem indywidualnej pracy z pacjentem.'
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
    description: 'Ukończone szkolenia między innymi metody Maitlanda oraz Neurodynamic Solutions.'
  },
  {
    icon: Clock,
    title: 'Elastyczne godziny',
    description: 'Wygodne umawianie wizyt przez telefon i internetowo.'
  }
]

export default function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className="section-padding relative overflow-hidden bg-[#041826]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.2),transparent_70%)] mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(249,115,22,0.15),transparent_70%)] mix-blend-screen" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'linear-gradient(125deg, rgba(255,255,255,0.05) 0px, transparent 60px)',
            backgroundSize: '120px 120px',
          }}
        />
      </div>

      <div className="container relative z-10 text-slate-200">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Dlaczego warto wybrać <span className="text-gradient">Dobry Fizjo</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-400">
            Terapia oparta na doświadczeniu, wiedzy i certyfikowanych metodach.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-emerald-300/25 bg-[#052235]/85 p-8 text-center shadow-[0_32px_72px_-38px_rgba(20,184,166,0.65)] transition duration-300 hover:-translate-y-1 hover:border-emerald-200/50 hover:bg-[#062a41]/90 hover:shadow-[0_38px_82px_-36px_rgba(249,115,22,0.55)]"
            >
              <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center">
                <div className="absolute inset-0 -rotate-6 rounded-[1.75rem] border border-emerald-300/20 bg-emerald-400/10 blur-sm transition group-hover:border-amber-300/30 group-hover:bg-amber-400/15" />
                <div className="relative flex h-full w-full items-center justify-center rounded-[1.75rem] border border-emerald-300/40 bg-emerald-300/15 text-emerald-100 transition group-hover:border-amber-300/50 group-hover:bg-emerald-300/25 group-hover:text-amber-100">
                  <benefit.icon className="h-7 w-7" />
                </div>
              </div>

              <h3 className="mb-4 text-xl font-semibold text-slate-100">{benefit.title}</h3>
              <p className="text-slate-400">{benefit.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
