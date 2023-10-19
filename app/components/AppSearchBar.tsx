import { useQuery } from "@tanstack/react-query";
import { Command } from "cmdk";
import React, { useEffect, useRef, useState } from "react";
import { Card, Form, Kbd } from "react-daisyui";
import { Action } from "../actions/types";
import Link from "next/link";
import classNames from "classnames";
import { useOnClickOutside } from 'usehooks-ts'
import { IconContext } from "react-icons";
import { LuSearchX } from 'react-icons/lu'

export default function AppSearchBar() {
  const [closed, setClosed] = useState(true)
  const [search, setSearch] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const { data, isError } = useQuery<Action[]>({
    queryKey: ['actions'],
    async queryFn() {
      const res = await fetch('/actions')
      return res.json()
    }
  })

  function resetSearch() {
    setSearch('')
    setClosed(true)
    inputRef.current?.blur()
  }

  function openSelectedItem(event: React.KeyboardEvent<HTMLFormElement>) {
    if (event.key !== 'Enter') {
      return 
    }

    event.preventDefault()
    const selectedItem = document.querySelector<HTMLAnchorElement>(
      '[cmdk-item][data-selected="true"] > a'
    )

    if (selectedItem) {
      resetSearch()
      selectedItem.click()
    }
  }

  useOnClickOutside(formRef, () => setClosed(true))
  useEffect(() => {
    function openCommandPalette(event: KeyboardEvent) {
      setClosed(false)

      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        inputRef.current?.focus()
        setClosed(false)
      }

      if (event.key === 'Escape') {
        event.preventDefault()
        resetSearch()
      }
    }

    document.addEventListener('keydown', openCommandPalette)
    return () => document.removeEventListener('keydown', openCommandPalette)
  }, [])
  
  return (
    <Form ref={formRef} className="relative" onKeyDown={openSelectedItem}>
      <Command>
        <Command.Input
          ref={inputRef}
          value={search}
          onValueChange={setSearch}
          disabled={isError || !data}
          placeholder="Pesquise um artista ou banda..."
          className="input px-3 w-96 rounded-none"
        />

        {search && !closed && <Command.List
          className={classNames(
            'absolute w-full z-10',
            'bg-zinc-200 dark:bg-slate-800'
          )}
        >
          <Command.Empty>
            <div className="flex p-2 text-sm items-center">
              <span className="flex-grow">Nenhum resultado encontrado.</span>
              <IconContext.Provider value={{ size: '1rem' }}>
                <LuSearchX className="justify-end" />
              </IconContext.Provider>
            </div>
          </Command.Empty>

          {data && data.map(action => (
            <Command.Item key={action.name} value={`${action.name} ${action.tags.join(' ')}`}>
              <Link href={action.route} onClick={resetSearch}>
                <Card
                  side
                  bordered={false}
                  className="rounded-none m-1"
                >
                  <Card.Body className="p-2">
                    <Card.Title className="text-sm">
                      {action.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Command.Item>
          ))}
        </Command.List>}
      </Command>

      <div className="absolute right-3 inset-y-0">
        <div className="flex h-full items-center">
          <Kbd size="sm">Ctrl + k</Kbd>
        </div>
      </div>
    </Form>
  )
}