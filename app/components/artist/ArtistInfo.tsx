'use client'

import { Card } from "react-daisyui";
import { Artist } from "./types";
import classNames from "classnames";
import { plural } from "@/app/functions";

export default function ArtistInfo({
  artist
}: {
  artist: Artist
}) {
  return (
    <Card
      bordered={false}
      className={classNames(
        'w-52',
        'rounded-none',
        'text-zinc-950 dark:text-zinc-200',
        'pt-3 px-3'
      )}
    >
      <Card.Image
        src={`${process.env.NEXT_PUBLIC_API_URL}${artist.cover}`}
        alt={artist.name}
      />

      <Card.Body className="px-0 py-6">
        <Card.Title tag="h2" className="text-xl">{artist.name}</Card.Title>
        <p>{artist.discography.length} {plural('lançamento', artist.discography.length)}.</p>
      </Card.Body>
    </Card>
  )
}