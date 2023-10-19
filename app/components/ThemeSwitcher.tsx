'use client'

import colors from "tailwindcss/colors"
import { Button } from "react-daisyui"
import { IconContext } from "react-icons"
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { FaSun } from 'react-icons/fa'
import { useTheme } from "next-themes"
import { useMounted } from "@/app/hooks"
import classNames from "classnames"

export default function ThemeSwitcher() {
  const mounted = useMounted()
  const { theme, setTheme } = useTheme()
  
  const isDarkMode = theme === 'dark'
  
  function toggleTheme() {
    setTheme(isDarkMode ? 'light' : 'dark')
  }

  return (
    <Button
      shape="circle"
      className={classNames(
        'btn-ghost',
        { '!bg-transparent': !mounted }
      )}
      onClick={toggleTheme}
      disabled={!mounted}
    >
      <IconContext.Provider value={{
        color: mounted ? colors.red[700] : colors.zinc[400],
        size: '1.6rem'
      }}>
        {!mounted || isDarkMode ? <BsFillMoonStarsFill /> : <FaSun />}
      </IconContext.Provider>
    </Button>
  )
}