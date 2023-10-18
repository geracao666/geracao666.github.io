'use client'

import { Navbar } from "react-daisyui"
import Image from 'next/image'
import ThemeSwitcher from "@/app/components/ThemeSwitcher"
import Link from "next/link"

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
        <ThemeSwitcher />
      </Navbar.End>
    </Navbar>
  )
}