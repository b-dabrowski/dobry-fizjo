'use client'

import { Mail, Phone, Award } from 'lucide-react'

const teamMembers = [
  {
    name: 'Przemysław Wielemborek',
    title: 'Fizjoterapeuta i Rehabilitant',
    specialties: ['Terapia Manualna Maitland', 'Trening Medyczny', 'IASTM', 'Kinesiotaping', 'Neuromobilizacja'],
    qualifications: 'Absolwent Uniwersytetu Medycznego w Białymstoku, Doktorant',    
    image: '/images/team/przemek.jpg',
    bio: 'Od lat pomagam pacjentom w odzyskaniu sprawności, redukcji bólu i powrocie do aktywności. Stale podnoszę swoje kwalifikacje, uczestnicząc w kursach i szkoleniach z zakresu terapii manualnej, rehabilitacji i treningu medycznego.',
    email: 'pt.wielemborek@gmail.com',
    phone: '506 439 462',
    courses: [
      'Terapia manualna według koncepcji Maitland (poziomy 1, 2a i 2b i 3)',
      'Practical Program Design Mastery – programowanie treningu',
      'Neurodynamika Kliniczna',
      'Kinesiotaping',
      'Kettlebells for health - tening kettlebell w fizjoterapii',
      'Flossing & Cupping',
      'Masaż tkanek głębokich'
    ]
  }
]

export default function AboutTeamSection() {
  return (
    <section
      id="about-team"
      className="section-padding relative overflow-hidden bg-[#041826]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-12 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(20,184,166,0.22),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-[40%] bg-[radial-gradient(circle,_rgba(249,115,22,0.22),transparent_70%)] blur-3xl" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="mb-16 text-center text-slate-200">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            O <span className="text-gradient">Mnie</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-400">
            Jestem fizjoterapeutą, który łączy analityczną diagnostykę z kinetycznym podejściem do ruchu.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.email}
              className="overflow-hidden rounded-[2.5rem] border border-emerald-300/25 bg-[#052235]/85 p-10 shadow-[0_38px_90px_-45px_rgba(20,184,166,0.7)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-200/50 hover:bg-[#062a41]/90"
            >
              <div className="flex flex-col gap-8 md:flex-row md:items-center">
                <div className="relative mx-auto flex h-40 w-40 items-center justify-center overflow-hidden rounded-[2.25rem] border border-emerald-300/30 bg-[#062338] shadow-[0_25px_65px_-35px_rgba(249,115,22,0.65)] md:mx-0">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.3),transparent_70%)]" />
                  <img src={member.image} alt={member.name} className="relative h-full w-full object-cover" />
                </div>

                <div className="flex-1 text-center text-slate-200 md:text-left">
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-slate-100">{member.name}</h3>
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-200">{member.title}</p>
                  </div>

                  <div className="mb-3 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-400 md:justify-start">
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-100">
                      <Award className="h-4 w-4" />
                      Certyfikowany ekspert
                    </span>
                    <span>{member.qualifications}</span>
                  </div>

                  <p className="mb-6 text-sm leading-relaxed text-slate-400">{member.bio}</p>

                  <div className="mb-5">
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
                      Specjalizacje
                    </h4>
                    <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                      {member.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-emerald-200"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
                      Ukończone kursy
                    </h4>
                    <ul className="grid gap-1 text-xs text-slate-400 md:grid-cols-2">
                      {member.courses?.map((course) => (
                        <li key={course} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-200" />
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-col justify-center gap-2 text-sm text-emerald-200 md:flex-row md:justify-start">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-transparent px-4 py-2 transition hover:border-amber-300/40 hover:text-amber-200"
                    >
                      <Mail className="h-4 w-4" />
                      Email
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-transparent px-4 py-2 transition hover:border-amber-300/40 hover:text-amber-200"
                    >
                      <Phone className="h-4 w-4" />
                      Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 rounded-[2.75rem] border border-emerald-300/25 bg-[#05263c]/85 p-10 text-center text-slate-200 shadow-[0_45px_95px_-48px_rgba(20,184,166,0.7)] backdrop-blur md:grid-cols-4">
          {[
            { label: 'Ukończonych Kursów', value: '7+' },
            { label: 'Manual Mastery', value: 'Maitland' },
            { label: 'Indywidualne Podejście', value: '100%' },
            // { label: 'Wsparcie', value: '24/7' },
          ].map((stat) => (
            <div key={stat.label} className="space-y-3">
              <div className="text-3xl font-semibold text-emerald-200">{stat.value}</div>
              <div className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
