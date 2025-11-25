'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowRight, Clock, Eye, Play, Search, User } from 'lucide-react'

import { categories, getChannelVideos, type Video } from '@/lib/youtube'

type BlogSectionProps = {
  isFullPage?: boolean
  showBackLink?: boolean
}

export default function BlogSection({ isFullPage = false, showBackLink = false }: BlogSectionProps) {
  const [videos, setVideos] = useState<Video[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('wszystko')
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    const fetchVideos = async () => {
      const fetchedVideos = await getChannelVideos()
      if (!isMounted) return
      setVideos(fetchedVideos)
      setIsLoading(false)
    }

    fetchVideos()

    return () => {
      isMounted = false
    }
  }, [])

  const filteredVideos = videos.filter((video) => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'wszystko' || video.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const visibleVideos = isFullPage ? filteredVideos : filteredVideos.slice(0, 2)

  return (
    <section
      id='blog'
      className='section-padding relative overflow-hidden bg-[#041826]'
    >
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute left-1/2 top-0 h-72 w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(20,184,166,0.22),transparent_70%)] blur-3xl' />
        <div className='absolute -bottom-24 right-16 h-72 w-72 rounded-[45%] bg-[radial-gradient(circle,_rgba(249,115,22,0.2),transparent_70%)] blur-3xl' />
      </div>

      <div className='container relative z-10 text-slate-200'>
        {showBackLink && (
          <div className='mb-10 flex justify-start'>
            <Link
              href='/#hero'
              className='inline-flex items-center gap-3 rounded-full border border-emerald-300/40 bg-[#052235]/80 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-100 transition hover:border-emerald-300/70 hover:text-amber-200'
            >
              ← Wróć na stronę główną
            </Link>
          </div>
        )}

        <div className='mb-16 text-center'>
          <h2 className='mb-6 text-4xl font-bold md:text-5xl'>
            Porady zdrowotne i <span className='text-gradient'>materiały</span>
          </h2>
          <p className='mx-auto max-w-3xl text-xl text-slate-400'>
            Przenieś energię z gabinetu do codziennych nawyków. Wskazówki, treningi i wideo, które uruchomią Cię na
            nowo.
          </p>
        </div>

        {isFullPage && (
          <div className='mb-12'>
            <div className='relative mx-auto mb-8 max-w-2xl'>
              <Search className='absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500' />
              <input
                type='text'
                placeholder='Szukaj wideo...'
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className='w-full rounded-2xl border border-emerald-300/25 bg-[#052235]/80 py-4 pl-12 pr-4 text-slate-200 shadow-[0_28px_65px_-38px_rgba(20,184,166,0.6)] transition focus:border-emerald-300/50 focus:outline-none focus:ring-2 focus:ring-emerald-300/40'
              />
            </div>

            <div className='flex flex-wrap justify-center gap-4'>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full border px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] transition ${
                    selectedCategory === category
                      ? 'border-emerald-300/60 bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 text-slate-900 shadow-[0_22px_50px_-28px_rgba(20,184,166,0.75)]'
                      : 'border-emerald-300/25 bg-[#05263c]/80 text-slate-300 hover:border-emerald-300/40 hover:text-emerald-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {visibleVideos.map((video) => (
            <article
              key={video.id}
              className='group overflow-hidden rounded-[2.5rem] border border-emerald-300/25 bg-[#052235]/85 p-6 shadow-[0_35px_80px_-45px_rgba(20,184,166,0.65)] transition duration-300 hover:-translate-y-1 hover:border-emerald-300/50 hover:bg-[#062b42]/90'
            >
              <div className='relative mb-6 overflow-hidden rounded-[2rem]'>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className='h-48 w-full rounded-[inherit] object-cover transition duration-500 group-hover:scale-105'
                />

                <button
                  type='button'
                  onClick={() => setSelectedVideo(video.id)}
                  className='absolute inset-0 flex items-center justify-center bg-[#041826]/60 opacity-0 transition duration-300 group-hover:opacity-100'
                >
                  <div className='inline-flex h-16 w-16 items-center justify-center rounded-full border border-emerald-300/40 bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 text-slate-900 shadow-[0_24px_55px_-32px_rgba(20,184,166,0.8)]'>
                    <Play className='ml-1 h-8 w-8' />
                  </div>
                </button>

                <span className='absolute left-4 top-4 rounded-full border border-emerald-300/40 bg-emerald-300/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-100'>
                  {video.category}
                </span>
                {video.duration && (
                  <span className='absolute bottom-4 right-4 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-emerald-100 backdrop-blur'>
                    {video.duration}
                  </span>
                )}
              </div>

              <div className='space-y-4 text-slate-200'>
                <h3 className='text-xl font-semibold text-slate-100 transition-colors group-hover:text-emerald-200'>
                  {video.title}
                </h3>
                <p className='text-sm leading-relaxed text-slate-400'>
                  Materiał wideo z kanału Dobry Fizjo. Kliknij, aby odtworzyć lub otworzyć na YouTube.
                </p>

                <div className='flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.35em] text-slate-500'>
                  <span className='flex items-center gap-2'>
                    <User className='h-4 w-4 text-emerald-200' />
                    YouTube
                  </span>
                  {video.duration !== 'Unknown' && (
                    <span className='flex items-center gap-2'>
                      <Clock className='h-4 w-4 text-emerald-200' />
                      {video.duration}
                    </span>
                  )}
                  {video.views !== 'Unknown' && (
                    <span className='flex items-center gap-2'>
                      <Eye className='h-4 w-4 text-emerald-200' />
                      {video.views} wyświetleń
                    </span>
                  )}
                </div>

                <div className='flex items-center justify-between border-t border-emerald-300/15 pt-4 text-xs uppercase tracking-[0.35em] text-slate-500'>
                  <span>{video.date}</span>
                  <Link
                    href={video.url}
                    target='_blank'
                    className='flex items-center gap-2 text-emerald-200 transition group-hover:gap-3 group-hover:text-amber-200'
                  >
                    Otwórz na YouTube
                    <ArrowRight className='h-4 w-4' />
                  </Link>
                </div>
              </div>
            </article>
          ))}
          {!isLoading && visibleVideos.length === 0 && (
            <div className='col-span-1 rounded-3xl border border-emerald-300/20 bg-[#052235]/80 p-8 text-center text-slate-300 md:col-span-2'>
              Brak wyników dla wybranych filtrów. Spróbuj innej kategorii lub frazy.
            </div>
          )}
          {isLoading && visibleVideos.length === 0 && (
            <div className='col-span-1 rounded-3xl border border-emerald-300/20 bg-[#052235]/80 p-8 text-center text-slate-300 md:col-span-2'>
              Ładuję najnowsze wideo z kanału...
            </div>
          )}
        </div>

        {!isFullPage && (
          <div className='mt-12 text-center'>
            <Link
              href='/blog'
              className='inline-flex items-center gap-3 rounded-full border border-emerald-300/40 bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 px-10 py-4 text-sm font-semibold uppercase tracking-[0.35em] text-slate-900 shadow-[0_30px_70px_-40px_rgba(16,185,129,0.9)] transition hover:gap-4'
            >
              Zobacz więcej materiałów
              <ArrowRight className='h-4 w-4' />
            </Link>
          </div>
        )}

        {selectedVideo && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur'>
            <div className='relative w-full max-w-4xl overflow-hidden rounded-[2.5rem] border border-emerald-300/30 bg-[#031423]/95 p-6 shadow-[0_40px_120px_-45px_rgba(20,184,166,0.85)]'>
              <div className='relative h-0 w-full pb-[56.25%]'>
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title='Dobry Fizjo Video'
                  className='absolute left-0 top-0 h-full w-full rounded-[1.75rem]'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                />
              </div>
              <button
                type='button'
                onClick={() => setSelectedVideo(null)}
                className='absolute right-6 top-6 text-slate-200 transition hover:text-emerald-200'
              >
                <span className='text-3xl leading-none'>×</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
