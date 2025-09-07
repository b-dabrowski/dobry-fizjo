'use client'

import { useState } from 'react'
import { Search, Play, Clock, User, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: '5 kluczowych ćwiczeń na ból dolnych pleców',
    excerpt: 'Poznaj proste i skuteczne ćwiczenia, które możesz wykonywać w domu, aby złagodzić ból pleców i zapobiegać nawrotom.',
    author: 'Przemysław Wielemborek',
    date: '2024-01-15',
    readTime: '5 min czytania',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Ćwiczenia',
    videoId: 'dQw4w9WgXcQ' // Przykładowy ID filmu YouTube
  },
  {
    id: 2,
    title: 'Rehabilitacja po operacji – czego się spodziewać?',
    excerpt: 'Kompleksowy przewodnik po procesie rehabilitacji po operacji ortopedycznej, wraz z harmonogramem i etapami powrotu do sprawności.',
    author: 'Przemysław Wielemborek',
    date: '2024-01-10',
    readTime: '8 min czytania',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Rehabilitacja',
    videoId: 'dQw4w9WgXcQ'
  },
  {
    id: 3,
    title: 'ABC – zdrowego kręgosłupa',
    excerpt: 'Dowiedz się, jak utrzymać zdrowy kręgosłup poprzez codzienne nawyki, ergonomię i odpowiednie ćwiczenia.',
    author: 'Przemysław Wielemborek',
    date: '2024-01-05',
    readTime: '10 min czytania',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Neurologia',
    videoId: 'dQw4w9WgXcQ'
  },
  {
    id: 4,
    title: 'Korzyści z masażu terapeutycznego',
    excerpt: 'Sprawdź, jak masaż terapeutyczny może wspierać Twój program rehabilitacji i przyspieszyć powrót do zdrowia.',
    author: 'Przemysław Wielemborek',
    date: '2024-01-01',
    readTime: '6 min czytania',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Masaż',
    videoId: 'dQw4w9WgXcQ'
  }
]

const categories = ['Wszystkie', 'Ćwiczenia', 'Rehabilitacja', 'Neurologia', 'Masaż', 'Profilaktyka']

export default function BlogSection() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Porady zdrowotne i <span className="text-gradient">materiały</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Porady ekspertów, instrukcje ćwiczeń i wskazówki rehabilitacyjne, które wspierają powrót do zdrowia i pomagają utrzymać dobrą kondycję.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Szukaj wideo i artykułów..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
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
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="card group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                {/* Video Play Button */}
                <button
                  onClick={() => openVideo(post.videoId)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </button>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <button className="text-primary-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Czytaj więcej
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="Rehabilitation Exercise Video"
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <button
                onClick={closeVideo}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>
          </div>
        )}        
      </div>
    </section>
  )
}
