'use client'

import { Release } from "./types";

import { Button, Card, Table, Tooltip } from "react-daisyui"
import { plural } from "@/app/functions"
import { IconContext } from "react-icons"
import { AiOutlineDownload, AiOutlineOrderedList } from 'react-icons/ai'
import { BsArrowsCollapse } from 'react-icons/bs'
import classNames from "classnames"
import { useState } from "react"

export default function ReleaseCard({
  release
}: {
  release: Release
}) {
  const [seeTracks, setSeeTracks] = useState(false)

  function toggleSeeTracks() {
    setSeeTracks(!seeTracks)
  }

  function getReleaseTypeText(type: string) {
    const releaseTypes: { [key: string]: string } = {
      ep: 'EP',
      album: 'Álbum',
      single: 'Single'
    }

    return releaseTypes[type] ?? ''
  }

  return (
    <div className="mb-3">
      <Card
        bordered={false}
        side={true}
        className="bg-stone-900 text-zinc-200 rounded-none"
      >
        <Card.Image
          src={`${process.env.NEXT_PUBLIC_API_URL}${release.artwork}`}
          alt={release.name}
          className="w-52 p-3"
        />

        <Card.Body className="p-3">
          <Card.Title>{release.name}</Card.Title>
          <p className="text-sm">
            {getReleaseTypeText(release.type)} | {release.tracks.length} {plural('música', release.tracks.length)}.
          </p>

          <Card.Actions>
            <a href={release.url} target="_blank">
              <Button
                variant="outline"
                className={classNames(
                  'normal-case rounded-none',
                  'text-zinc-200 hover:text-zinc-200',
                  'hover:bg-rose-700 hover:border-rose-700'
                )}
              >
                <IconContext.Provider value={{
                  size: '1.6rem'
                }}>
                  <AiOutlineDownload />
                </IconContext.Provider>
                Download
              </Button>
            </a>

            <Tooltip
              message={`${seeTracks ? 'Esconder' : 'Ver'} faixas`}
              position="right"
            >
              <Button
                variant="outline"
                className={classNames(
                  'normal-case rounded-none',
                  'text-zinc-200 hover:text-zinc-200',
                  'hover:bg-rose-700 hover:border-rose-700'
                )}
                onClick={toggleSeeTracks}
              >
                <IconContext.Provider value={{
                  size: '1.6rem'
                }}>
                  {seeTracks ? <BsArrowsCollapse /> : <AiOutlineOrderedList />}
                </IconContext.Provider>
              </Button>
            </Tooltip>
          </Card.Actions>
        </Card.Body>
      </Card>

      {seeTracks && <div className="flex bg-stone-900 text-zinc-200">
        <Table className="m-3" size="sm">
          <Table.Head className="first-row-border-none first-col-w-4 text-zinc-200/50">
            <span>#</span>
            <span>Título</span>
          </Table.Head>

          <Table.Body>
            {release.tracks.map((track, index) => (
              <Table.Row key={track} className="first-col-w-8 hover:bg-rose-700/50 border-none">
                <span>{index + 1}</span>
                <span>{track}</span>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>}
    </div>
  )
}