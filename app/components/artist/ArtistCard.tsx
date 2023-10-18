'use client'

import classNames from "classnames";
import { Artist } from "./types";
import { Card } from "react-daisyui";
import { plural, slug } from "@/app/functions";
import Link from "next/link";

export default function ArtistCard({
  artist
}: {
  artist: Artist
}) {
  return (
    <Link href={`/artist/${slug(artist.name)}`}>
      <Card
        bordered={false}
        className={classNames(
          'bg-stone-900 hover:bg-rose-700',
          'ease-linear duration-100',
          'cursor-pointer',
          'rounded-none',
          'text-zinc-200',
          'pt-3 px-3'
        )}
      >
        <Card.Image
          src={`${process.env.NEXT_PUBLIC_API_URL}${artist.cover}`}
          alt={artist.name}
          className="max-w-xs"
        />

        <Card.Body className="px-0 py-6">
          <Card.Title className="text-xl">{artist.name}</Card.Title>
          <p>{artist.discography.length} {plural('lançamento', artist.discography.length)}.</p>
        </Card.Body>
      </Card>
    </Link>
  )
}