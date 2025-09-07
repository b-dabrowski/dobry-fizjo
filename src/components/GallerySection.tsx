'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  {
    src: "/images/gallery/df-placowka-001.jpg",
    alt: 'Widok zewnętrzny kliniki rehabilitacyjnej',
    category: 'Placówka'
  },
  {
    src: "/images/gallery/df-gabinet-001.jpg",
    alt: 'Nowoczesna recepcja kliniki rehabilitacyjnej',
    category: 'Gabinet'
  },
  {
    src: "/images/gallery/df-gabinet-002.jpg",
    alt: 'Gabinet fizjoterapii',
    category: 'Gabinet'
  },
  {
    src: "/images/gallery/df-sprzet-001.jpg",
    alt: 'Zaawansowany sprzęt rehabilitacyjny',
    category: 'Sprzęt'
  },
  {
    src: "/images/gallery/df-sc-001.jpg",
    alt: 'Strefa ćwiczeń terapeutycznych',
    category: 'Strefa ćwiczeń'
  },  
  {
    src: "/images/gallery/df-gabinet-003.jpg",
    alt: 'Gabinet masażu',
    category: 'Gabinet'
  },
  {
    src: "/images/gallery/df-konsultacje-001.jpg",
    alt: 'Gabinet konsultacyjny',
    category: 'Konsultacje'
  },
  {
    src: "/images/gallery/df-sprzet-002.jpg",
    alt: 'Sala rehabilitacyjna ze sprzętem',
    category: 'Sprzęt'
  }
]

const categories = ['Wszystkie', 'Placówka', 'Gabinet', 'Sprzęt', 'Strefa ćwiczeń', 'Konsultacje']

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('Wszystkie')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = selectedCategory === 'Wszystkie' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  return (
  <section id="gallery" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nasza <span className="text-gradient">placówka</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zobacz wirtualnie nasz nowoczesny, w pełni wyposażony gabinet rehabilitacji – miejsce stworzone z myślą o Twoim komforcie i skutecznej terapii.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                  <p className="font-semibold">{image.alt}</p>
                  <p className="text-sm mt-1 text-gray-200">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
              
              {/* Image Info */}
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">{filteredImages[selectedImage].alt}</p>
                <p className="text-sm text-gray-300">{filteredImages[selectedImage].category}</p>
              </div>
            </div>
          </div>
        )}

        {/* Facility Features */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Nowoczesne udogodnienia placówki
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Nowoczesny sprzęt</h4>
              <p className="text-sm text-gray-600">Najnowocześniejsza technologia rehabilitacyjna</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🩻</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Aparatura USG</h4>
              <p className="text-sm text-gray-600">Nowoczesne urządzenia ultrasonograficzne</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧘</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Prywatny gabinety</h4>
              <p className="text-sm text-gray-600">Indywidualna sala zabiegowa</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♿</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Dostępność dla każdego</h4>
              <p className="text-sm text-gray-600">Pełna dostępność dla osób na wózkach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
