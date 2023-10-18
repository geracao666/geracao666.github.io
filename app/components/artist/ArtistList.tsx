import { Artist } from './types'
import ArtistCard from './ArtistCard'

export default function ArtistList({
  artists
}: {
  artists: Artist[]
}) {
  return (
    <div className="flex">
      {artists.map((artist) => <ArtistCard key={artist.name} artist={artist} />)}
    </div>
  )
}