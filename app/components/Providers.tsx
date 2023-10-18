'use client'

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import SearchBarProvider from './SearchBarProvider'
import React, { useState } from 'react'

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
      <SearchBarProvider>
        {children}
      </SearchBarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}