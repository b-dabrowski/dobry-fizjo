export interface Video {
  id: string
  title: string
  thumbnail: string
  category: string
  url: string
  duration: string
  views: string
  date: string
}

interface YouTubePlaylistItem {
  snippet: {
    resourceId: {
      videoId: string
    }
    title: string
    thumbnails: {
      maxres?: { url: string }
      high?: { url: string }
      medium?: { url: string }
    }
    publishedAt: string
  }
}

interface YouTubeVideoItem {
  id: string
  contentDetails: {
    duration: string
  }
  statistics: {
    viewCount: string
  }
}

const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
const UPLOADS_PLAYLIST_ID = process.env.NEXT_PUBLIC_YOUTUBE_UPLOADS_PLAYLIST_ID // Derived from Channel ID (UC -> UU)

export async function getChannelVideos(): Promise<Video[]> {
  if (!API_KEY || !UPLOADS_PLAYLIST_ID) {
    console.warn('YouTube API Key or playlist ID is missing. Set NEXT_PUBLIC_YOUTUBE_API_KEY and NEXT_PUBLIC_YOUTUBE_UPLOADS_PLAYLIST_ID.')
    return []
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${UPLOADS_PLAYLIST_ID}&maxResults=50&key=${API_KEY}`,
      { next: { revalidate: 3600 } }
    )

    if (!response.ok) {
      console.error('Failed to fetch videos:', await response.text())
      return []
    }

    const data = await response.json()

    // We need a second call to get video duration and views
    const videoIds = data.items.map((item: YouTubePlaylistItem) => item.snippet.resourceId.videoId).join(',')
    const statsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${API_KEY}`,
      { next: { revalidate: 3600 } }
    )

    const statsData = statsResponse.ok ? await statsResponse.json() : { items: [] }
    const statsMap = new Map<string, YouTubeVideoItem>(statsData.items.map((item: YouTubeVideoItem) => [item.id, item]))

    return data.items.map((item: YouTubePlaylistItem) => {
      const videoId = item.snippet.resourceId.videoId
      const stats = statsMap.get(videoId)

      return {
        id: videoId,
        title: item.snippet.title,
        thumbnail:
          item.snippet.thumbnails.maxres?.url ||
          item.snippet.thumbnails.high?.url ||
          item.snippet.thumbnails.medium?.url ||
          '',
        category: 'General', // Default category as API doesn't provide it easily in this view
        url: `https://www.youtube.com/watch?v=${videoId}`,
        date: new Date(item.snippet.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
        duration: stats ? parseDuration(stats.contentDetails.duration) : 'Unknown',
        views: stats ? formatViews(stats.statistics.viewCount) : 'Unknown',
      }
    })
  } catch (error) {
    console.error('YouTube API Error:', error)
    return []
  }
}

function parseDuration(duration: string): string {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)
  if (!match) return '0:00'

  const hours = (match[1] || '').replace('H', '')
  const minutes = (match[2] || '').replace('M', '')
  const seconds = (match[3] || '').replace('S', '')

  if (hours) {
    return `${hours}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`
  }
  return `${minutes || '0'}:${seconds.padStart(2, '0')}`
}

function formatViews(views: string): string {
  const num = parseInt(views, 10)
  if (isNaN(num)) return '0'

  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return views
}

export const categories = ['All', 'Exercises', 'Education', 'Nutrition', 'General']
