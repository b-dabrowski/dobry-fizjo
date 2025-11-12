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
    <section
      id="services"
      className="section-padding relative overflow-hidden bg-[#041826]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.22),transparent_68%)] mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(249,115,22,0.18),transparent_70%)] mix-blend-screen" />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
            backgroundSize: '38px 38px',
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="mb-16 text-center text-slate-200">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Co <span className="text-gradient">Oferujemy</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-400">
            Szyta na miarę terapia ruchowa łącząca manualne techniki pracy z ciałem, trening medyczny i nowoczesną
            diagnostykę funkcjonalną.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-emerald-300/30 bg-[#052235]/80 p-8 shadow-[0_32px_65px_-38px_rgba(20,184,166,0.65)] transition duration-300 hover:-translate-y-1 hover:border-emerald-300/60 hover:bg-[#062b42]/90 hover:shadow-[0_40px_80px_-35px_rgba(249,115,22,0.55)]"
            >
              <div className="mb-5 flex items-center">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl border border-emerald-300/30 bg-emerald-300/15 text-emerald-200 transition group-hover:border-emerald-200 group-hover:bg-emerald-300/20 group-hover:text-emerald-100">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-slate-100">{service.title}</h3>
              </div>

              <p className="mb-6 leading-relaxed text-slate-400">{service.description}</p>

              <button className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.32em] text-emerald-200 transition-all group-hover:gap-3 group-hover:text-amber-200">
                Dowiedz się więcej
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="mx-auto max-w-2xl overflow-hidden rounded-[2.5rem] border border-emerald-300/30 bg-[#06263c]/85 p-10 shadow-[0_40px_90px_-45px_rgba(20,184,166,0.7)] backdrop-blur">
            <div className="mx-auto mb-5 h-[1px] w-24 bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />
            <h3 className="mb-4 text-2xl font-semibold text-slate-100">Nie wiesz, która usługa jest dla Ciebie?</h3>
            <p className="mb-6 text-slate-400">
              Podczas pierwszej konsultacji wykonamy pełną diagnostykę funkcjonalną i zaprojektujemy kinetyczny plan
              powrotu do ruchu bez bólu.
            </p>
            <button className="btn-primary">Umów konsultację</button>
          </div>
        </div>
      </div>
    </section>
  )
}
