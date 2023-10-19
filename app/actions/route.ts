import { Artist } from "../components/artist/types"
import { api, slug } from "../functions"
import { Action } from "./types"

export async function GET() {
  const artists = await api.get<Artist[]>('/artists')
  const actions: Action[] = artists.map(artist => ({
    id: slug(artist.name),
    name: artist.name,
    tags: artist.tags,
    route: `/artist/${slug(artist.name)}`
  }))

  return new Response(JSON.stringify(actions))
}