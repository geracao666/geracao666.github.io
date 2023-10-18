import { Artist } from './types'
import ArtistCard from './ArtistCard'

export default function ArtistList({
  artists
}: {
  artists: Artist[]
}) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {artists.map((artist) => <ArtistCard key={artist.name} artist={artist} />)}
    </div>
  )
}