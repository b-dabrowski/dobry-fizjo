export type BlogPost = {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  image: string
  category: string
  videoId: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '5 kluczowych ćwiczeń na ból dolnych pleców',
    excerpt:
      'Zestaw dynamicznych ćwiczeń stabilizujących, które wykonasz w domu, aby odciążyć kręgosłup i uruchomić biodra.',
    author: 'Przemysław Wielemborek',
    date: '2024-01-15',
    readTime: '5 min',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Ćwiczenia',
    videoId: 'dQw4w9WgXcQ',
  },
  {
    id: 2,
    title: 'Rehabilitacja po operacji – czego się spodziewać?',
    excerpt:
      'Jak wygląda protokół powrotu do ruchu po operacji ortopedycznej? Zobacz kamienie milowe i wskazówki regeneracyjne.',
    author: 'Przemysław Wielemborek',
    date: '2024-01-10',
    readTime: '8 min',
    image:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Rehabilitacja',
    videoId: 'dQw4w9WgXcQ',
  },
  {
    id: 3,
    title: 'ABC zdrowego kręgosłupa',
    excerpt:
      'Codzienne nawyki, ergonomia i mobilizacje, które odciążą kręgosłup i zbudują nawyk świadomego ruchu.',
    author: 'Przemysław Wielemborek',
    date: '2024-01-05',
    readTime: '10 min',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Neurologia',
    videoId: 'dQw4w9WgXcQ',
  },
  {
    id: 4,
    title: 'Korzyści z masażu terapeutycznego',
    excerpt:
      'Jak dobrać masaż wspierający rehabilitację? Poznaj techniki, które warto wpleść w plan regeneracji.',
    author: 'Przemysław Wielemborek',
    date: '2024-01-01',
    readTime: '6 min',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Masaż',
    videoId: 'dQw4w9WgXcQ',
  },
]

export const blogCategories = ['Wszystkie', 'Ćwiczenia', 'Rehabilitacja', 'Neurologia', 'Masaż', 'Profilaktyka']
