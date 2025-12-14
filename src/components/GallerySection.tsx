'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const galleryImages = [
  { src: '/images/gallery/df-placowka-001.jpg', alt: 'Fasada kliniki', category: 'Placówka' },
  { src: '/images/gallery/df-gabinet-001.jpg', alt: 'Recepcja i strefa relaksu', category: 'Gabinet' },
  { src: '/images/gallery/df-gabinet-002.jpg', alt: 'Gabinet terapeutyczny', category: 'Gabinet' },
  { src: '/images/gallery/df-sprzet-001.jpg', alt: 'Strefa treningu medycznego', category: 'Sprzęt' },
  { src: '/images/gallery/df-sc-001.jpg', alt: 'Strefa ćwiczeń funkcjonalnych', category: 'Strefa ćwiczeń' },
  { src: '/images/gallery/df-gabinet-003.jpg', alt: 'Gabinet terapii manualnej', category: 'Gabinet' },
  { src: '/images/gallery/df-konsultacje-001.jpg', alt: 'Sala konsultacyjna', category: 'Konsultacje' },
  { src: '/images/gallery/df-sprzet-002.jpg', alt: 'Nowoczesna aparatura', category: 'Sprzęt' },
]

const categories = ['Wszystkie', 'Placówka', 'Gabinet', 'Sprzęt', 'Strefa ćwiczeń', 'Konsultacje']

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('Wszystkie')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === 'Wszystkie'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)

  const nextImage = () => {
    if (selectedImage === null) return
    setSelectedImage((selectedImage + 1) % filteredImages.length)
  }

  const prevImage = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
  }

  return (
    <section
      id="gallery"
      className="section-padding relative overflow-hidden bg-[#041826]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-72 w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(20,184,166,0.22),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-[42%] bg-[radial-gradient(circle,_rgba(249,115,22,0.2),transparent_70%)] blur-3xl" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0px, transparent 70px)',
            backgroundSize: '140px 140px',
          }}
        />
      </div>

      <div className="container relative z-10 text-slate-200">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Nasza <span className="text-gradient">placówka</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-400">
            Przestrzeń zaprojektowana pod dynamiczny ruch i nowoczesną diagnostykę. Zajrzyj do stref terapii, treningu i
            regeneracji.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-6 py-3 text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'border-emerald-300/60 bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 text-slate-900 shadow-[0_22px_50px_-28px_rgba(20,184,166,0.8)]'
                  : 'border-emerald-300/20 bg-[#05263c]/80 text-slate-300 hover:-translate-y-0.5 hover:border-emerald-300/40 hover:text-emerald-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-3xl border border-emerald-300/25 bg-[#052235]/85 shadow-[0_32px_75px_-40px_rgba(20,184,166,0.6)] transition duration-300 hover:-translate-y-1 hover:border-emerald-200/60 hover:bg-[#062a41]/90"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-64 w-full rounded-[inherit] object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-[#041826]/95 via-[#041826]/20 to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="max-w-[80%] text-left text-slate-100">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">{image.category}</p>
                  <p className="mt-2 text-sm text-slate-200">{image.alt}</p>
                </div>
                <span className="rounded-full border border-emerald-300/40 bg-emerald-300/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-100">
                  Zobacz
                </span>
              </div>
            </button>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur">
            <div className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[2.5rem] border border-emerald-300/25 bg-[#031423]/95 p-6 shadow-[0_40px_120px_-45px_rgba(20,184,166,0.8)]">
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="max-h-[70vh] w-full rounded-[1.75rem] object-contain"
              />

              <button
                onClick={closeLightbox}
                className="absolute right-6 top-6 text-slate-200 transition hover:text-emerald-200"
                aria-label="Zamknij podgląd"
              >
                <X className="h-8 w-8" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-200 transition hover:text-emerald-200"
                aria-label="Poprzednie zdjęcie"
              >
                <ChevronLeft className="h-9 w-9" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-200 transition hover:text-emerald-200"
                aria-label="Następne zdjęcie"
              >
                <ChevronRight className="h-9 w-9" />
              </button>

              <div className="absolute bottom-6 left-6 rounded-full border border-emerald-300/30 bg-[#04192b]/80 px-6 py-3 text-sm text-slate-200 shadow-[0_25px_45px_-30px_rgba(20,184,166,0.7)] backdrop-blur">
                <p className="font-semibold">{filteredImages[selectedImage].alt}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-emerald-200">
                  {filteredImages[selectedImage].category}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16 grid grid-cols-1 gap-6 rounded-[2.75rem] border border-emerald-300/25 bg-[#05263c]/85 p-10 text-slate-200 shadow-[0_45px_95px_-45px_rgba(20,184,166,0.6)] backdrop-blur md:grid-cols-4">
          {[
            { icon: '🏥', title: 'Nowoczesny sprzęt', description: 'Zaawansowane systemy diagnostyki i rehabilitacji.' },
            { icon: '🧬', title: 'Biomechanika', description: 'Analiza biegu.' },
            { icon: '🧘', title: 'Strefa treningu', description: 'Dedykowane miejsce do pracy nad mobilnością i siłą.' },           
          ].map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-emerald-300/25 bg-[#041f31]/85 p-6 text-center shadow-[0_28px_70px_-42px_rgba(249,115,22,0.55)]">
              <div className="text-3xl">{feature.icon}</div>
              <h4 className="mt-4 text-lg font-semibold text-slate-100">{feature.title}</h4>
              <p className="mt-2 text-sm text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
