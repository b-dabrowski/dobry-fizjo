'use client'

import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Car, 
  Bus,
  Navigation,
  Accessibility
} from 'lucide-react'

export default function LocationSection() {
  return (
    <section id="location" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Odwiedź naszą <span className="text-gradient">klinikę</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dogodna lokalizacja, łatwy dojazd, duży parking i pełna dostępność. Dbamy o Twój komfort podczas wizyty.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-96 lg:h-full min-h-[400px]">
              <iframe
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2395.6155498837757!2d23.129546676882466!3d53.09913919319123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffbe453edb73f%3A0x2e937a0cb0062bcc!2sDobryFizjo%20Przemys%C5%82aw%20Wielemborek!5e0!3m2!1sen!2spl!4v1757264068606!5m2!1sen!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RehabCare Clinic Location"
              />
            </div>
          </div>

          {/* Location Info */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Address */}
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Adres
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    ul. Wiadukt 5 lok.h2<br />
                    15-327 Dojlidy, Białystok<br />
                    Polska
                  </p>
                  <button className="mt-3 text-primary-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    <Navigation className="w-4 h-4" />
                    Pokaż trasę
                  </button>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Godziny otwarcia
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Poniedziałek - Piątek</span>
                      <span className="font-semibold text-gray-800">7:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sobota</span>
                      <span className="font-semibold text-gray-800">8:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Niedziela</span>
                      <span className="font-semibold text-gray-800">Nieczynne</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-primary-50 rounded-lg">
                    <p className="text-sm text-primary-700">
                      <strong>Godziny awaryjne:</strong> Całodobowe wsparcie telefoniczne 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Kontakt
                  </h3>
                  <div className="space-y-3">
                    <a 
                      href="tel:+1234567890"
                      className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>506 439 462</span>
                    </a>
                    <a 
                      href="mailto:info@rehabcare.com"
                      className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>pt.wielemborek@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Parking */}
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Car className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Bezpłatny parking
            </h3>
            <p className="text-gray-600">
              Bezpłatny parking na terenie obiektu (ponad 50 miejsc).
            </p>
          </div>

          {/* Public Transport */}
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bus className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Komunikacja miejska
            </h3>
            <p className="text-gray-600">
              Łatwy dojazd autobusami linii 15, 22, 34 oraz bliskość przystanków.
            </p>
          </div>

          {/* Accessibility */}
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Accessibility className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Pełna dostępność
            </h3>
            <p className="text-gray-600">
              Wejście i toalety przystosowane dla osób na wózkach.
            </p>
          </div>
        </div>

        {/* Nearby Landmarks */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            W pobliżu
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl mb-2">🏥</div>
              <h4 className="font-semibold text-gray-800">Szpital Miejski</h4>
              <p className="text-sm text-gray-600">0,5 km</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🏪</div>
              <h4 className="font-semibold text-gray-800">Apteka</h4>
              <p className="text-sm text-gray-600">0,2 km</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">☕</div>
              <h4 className="font-semibold text-gray-800">Kawiarnia</h4>
              <p className="text-sm text-gray-600">0,3 km</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🚇</div>
              <h4 className="font-semibold text-gray-800">Przystanek autobusowy</h4>
              <p className="text-sm text-gray-600">0,4 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
