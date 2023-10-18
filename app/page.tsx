import { api } from '@/app/functions'
import type { Artist } from '@/app/components/artist/types'
import ArtistList from '@/app/components/artist/ArtistList'

export default async function HomePage() {
  const artists = await api.get<Artist[]>('/artists')

  return (
    <ArtistList artists={artists} />
  )
}
