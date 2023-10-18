import ArtistCard from "@/app/components/artist/ArtistCard"
import { Artist } from "@/app/components/artist/types"
import { api, slug } from "@/app/functions"

export async function generateStaticParams() {
  const artists = await api.get<Artist[]>('/artists')
  return artists.map(artist => ({
    artist,
    slug: slug(artist.name)
  }))
}

export default async function ArtistPage({
  params
}: {
  params: { slug: string }
}) {
  const artists = await api.get<Artist[]>('/artists')
  const artist = artists.find(artist => slug(artist.name) === params.slug)

  if (!artist) {
    return null
  }
  
  return <ArtistCard artist={artist} />
}