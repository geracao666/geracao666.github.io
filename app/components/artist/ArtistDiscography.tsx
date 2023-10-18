import ReleaseCard from "./ReleaseCard"
import { Artist } from "./types"

export default function ArtistDiscography({
  artist
}: {
  artist: Artist
}) {
  return (
    <div className="text-zinc-950 dark:text-zinc-200">      
      {artist.discography.map(release => (
        <ReleaseCard key={release.name} release={release} />
      ))}
    </div>
  )
}