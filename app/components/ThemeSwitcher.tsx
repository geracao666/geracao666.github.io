'use client'

import colors from "tailwindcss/colors"
import { Button } from "react-daisyui"
import { IconContext } from "react-icons"
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { FaSun } from 'react-icons/fa'
import { useTheme } from "next-themes"
import { useMounted } from "@/app/hooks"

export default function ThemeSwitcher() {
  const mounted = useMounted()
  const { theme, setTheme } = useTheme()
  
  const isDarkMode = theme === 'dark'
  
  function toggleTheme() {
    setTheme(isDarkMode ? 'light' : 'dark')
  }

  if (!mounted) {
    return null
  }

  return (
    <Button shape="square" className="btn-ghost" onClick={toggleTheme}>
      <IconContext.Provider value={{
        color: colors.red[700],
        size: '2rem'
      }}>
        {isDarkMode ? <BsFillMoonStarsFill /> : <FaSun />}
      </IconContext.Provider>
    </Button>
  )
}