import { Artist } from "../components/artist/types"
import { api, slug } from "../functions"

export async function GET() {
  const artists = await api.get<Artist[]>('/artists')
  const actions = artists.map(artist => ({
    id: slug(artist.name),
    name: artist.name,
    keywords: artist.tags?.join(' ') ?? '',
    pathname: `artist/${slug(artist.name)}`
  }))

  return new Response(JSON.stringify(actions))
}