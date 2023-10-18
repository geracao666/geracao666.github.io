'use client'

import { Button, Divider, Navbar } from "react-daisyui"
import Image from 'next/image'
import ThemeSwitcher from "@/app/components/ThemeSwitcher"
import Link from "next/link"
import { IconContext } from "react-icons"
import { BsGithub } from 'react-icons/bs'
import colors from "tailwindcss/colors"

export default function AppNavbar() {
  return (
    <Navbar className="container mx-auto px-32">
      <Navbar.Start>
        <Link href="/">
          <Image
            src="/geracao666.png"
            className="max-w-xs"
            alt="Logo"
            width={366}
            height={175}
            priority
          />
        </Link>
      </Navbar.Start>

      <Navbar.End className="pr-8">
        <Link href="/about" className="underline">
          Sobre
        </Link>

        <Divider horizontal />

        <a href="https://github.com/geracao666/geracao666.github.io" target="_blank">
          <Button shape="circle" className="btn-ghost">
            <IconContext.Provider value={{
              color: colors.red[700],
              size: '1.6rem'
            }}>
              <BsGithub />
            </IconContext.Provider>
          </Button>
        </a>

        <ThemeSwitcher />
      </Navbar.End>
    </Navbar>
  )
}