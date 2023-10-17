'use client'

import { useQuery } from '@tanstack/react-query'
import http from '@/app/functions/http'
import type { Artist } from '@/app/components/artist/types'
import ArtistList from '@/app/components/artist/ArtistList'

export default function Home() {
  const { data = [] } = useQuery({
    queryKey: ['artists'],
    queryFn: () => http.get<Artist[]>('/artists')
  })

  return (
    <ArtistList artists={data} />
  )
}
