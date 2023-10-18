'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'
import SearchBarProvider from './SearchBarProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark">
      <SearchBarProvider>
        {children}
      </SearchBarProvider>
    </ThemeProvider>
  )
}