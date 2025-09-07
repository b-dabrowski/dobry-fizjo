'use client'

import { Mail, Phone, Award } from 'lucide-react'

const teamMembers = [
  {
    name: 'Przemysław Wielemborek',
    title: 'Fizjoterapeuta i Rehabilitant',
    specialties: ['Terapia Manualna Maitland', 'Trening Medyczny', 'IASTM', 'Kinesiotaping', 'Neuromobilizacja'],
    qualifications: 'Absolwent Uniwersytetu Medycznego w Białymstoku, Doktorant',
    // experience: 'Kilka lat doświadczenia',
    image: '/images/team/przemek.jpg',
    bio: 'Od lat pomagam pacjentom w odzyskaniu sprawności, redukcji bólu i powrocie do aktywności. Stale podnoszę swoje kwalifikacje, uczestnicząc w kursach i szkoleniach z zakresu terapii manualnej, rehabilitacji i treningu medycznego.',
    email: 'pt.wielemborek@gmail.com',
    phone: '506 439 462',
    courses: [
      'Terapia manualna według koncepcji Maitland (poziomy 1, 2a i 2b)',
      'Practical Program Design Mastery – programowanie treningu',
      'IASTM – terapia narzędziowa',
      'Kinesiotaping',
      'Postępowanie fizjoterapeutyczne w terapii blizn',
      'Flossing & Cupping',
      'Masaż tkanek głębokich'
    ]
  }
]

export default function AboutTeamSection() {
  return (
    <section id="about-team" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            O <span className="text-gradient">Mnie</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cześć! Nazywam się Przemysław Wielemborek i od lat pomagam pacjentom w odzyskaniu sprawności, 
            redukcji bólu i powrocie do aktywności. Moje podejście? Indywidualna diagnoza, skuteczna terapia i pełne wsparcie pacjenta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="card group hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
                  />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-2">
                    {member.title}
                  </p>
                  
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                    <Award className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{member.qualifications}</span>                    
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Specjalizacje:</h4>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {member.specialties.map((specialty, idx) => (
                        <span 
                          key={idx}
                          className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Ukończone kursy:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {member.courses?.map((course, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">•</span>
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
                    <a 
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                    <a 
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">7+</div>
              <div className="text-gray-600">Ukończonych Kursów</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">Maitland</div>
              <div className="text-gray-600">Terapia Manualna</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Indywidualne Podejście</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Gotowość do pomocy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
