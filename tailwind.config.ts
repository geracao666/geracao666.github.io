import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],

  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          background: colors.zinc[950]
        }
      },
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          background: colors.neutral[100]
        }
      }
    ]
  }
}

export default config
