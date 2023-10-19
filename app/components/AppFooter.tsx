'use client'

import { Divider, Footer, Link } from "react-daisyui"
import { IconContext } from "react-icons"
import { LuCopyleft } from 'react-icons/lu'

export default function AppFooter() {
  return (
    <Footer className="container mx-auto mt-auto py-3 px-32 text-zinc-950 dark:text-zinc-200">
      <div className="flex text-xs items-center mx-auto">
        Geração 666
        <IconContext.Provider value={{ size: '1rem' }}>
          <LuCopyleft />
        </IconContext.Provider>
        {new Date().getFullYear()}
        
        <Divider horizontal className="mx-0" />

        <Link href="/about" className="underline">
          Sobre
        </Link>
      </div>
    </Footer>
  )
}