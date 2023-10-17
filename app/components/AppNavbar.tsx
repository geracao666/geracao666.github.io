'use client'

import { Navbar } from "react-daisyui"
import Image from 'next/image'
import ThemeSwitcher from "@/app/components/ThemeSwitcher"

export default function AppNavbar() {
  return (
    <Navbar className="xl:container mx-auto">
      <Navbar.Start>
        <Image
          src="/geracao666.png"
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