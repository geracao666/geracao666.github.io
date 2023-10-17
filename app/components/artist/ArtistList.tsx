import classNames from 'classnames'
import { Artist } from './types'
import { Card } from 'react-daisyui'

export default function ArtistList({
  artists
}: {
  artists: Artist[]
}) {
  return (
    <div className="flex">
      {artists.map((artist) => (
        <Card
          key={artist.name}
          bordered={false}
          className={classNames(
            'bg-zinc-950 hover:bg-rose-700/75',
            'hover:shadow-2xl',
            'ease-linear duration-150',
            'cursor-pointer',
            'text-zinc-200',
            'pt-4 px-4'
          )}
        >
          <Card.Image src={`${process.env.NEXT_PUBLIC_API_URL}${artist.cover}`} alt={artist.name} />
          <Card.Body className="px-0 py-6">
            <Card.Title className="text-2xl">{artist.name}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}