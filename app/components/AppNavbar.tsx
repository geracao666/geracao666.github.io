'use client'

import { Navbar } from "react-daisyui"
import Image from 'next/image'
import ThemeSwitcher from "@/app/components/ThemeSwitcher"

export default function AppNavbar() {
  return (
    <Navbar className="container mx-auto px-32">
      <Navbar.Start>
        <Image
          src="/geracao666.png"
          className="max-w-xs"
          alt="Logo"
          width={366}
          height={175}
          priority
        />
      </Navbar.Start>

      <Navbar.End className="pr-8">
        <ThemeSwitcher />
      </Navbar.End>
    </Navbar>
  )
}