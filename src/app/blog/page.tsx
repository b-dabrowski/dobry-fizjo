import BlogSection from '@/components/BlogSection'

export const metadata = {
  title: 'Porady i materiały | Dobry Fizjo',
  description:
    'Wideo, artykuły i wskazówki od Przemysława Wielemborka. Przeglądaj tematy według kategorii, korzystaj z wyszukiwarki i poznaj najnowsze materiały.',
}

export default function BlogPage() {
  return (
    <main className='min-h-screen bg-[#041826]'>
      <BlogSection
        isFullPage
        showBackLink
      />
    </main>
  )
}
