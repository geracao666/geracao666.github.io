import ArtistDiscography from "@/app/components/artist/ArtistDiscography"
import ArtistInfo from "@/app/components/artist/ArtistInfo"
import { Artist } from "@/app/components/artist/types"
import { api, slug } from "@/app/functions"

export async function generateStaticParams() {
  const artists = await api.get<Artist[]>('/artists')
  return artists.map(artist => ({
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
  
  return (
    <div>
      <h3 className="text-2xl text-zinc-950 dark:text-zinc-200 font-bold p-3">
        Discografia
      </h3>

      <div className="flex">
        <div className="grow">
          <ArtistDiscography artist={artist} />
        </div>
        <div className="flex">
          <ArtistInfo artist={artist} />
        </div>
      </div>
    </div>
  )
}