// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      // 1. Content array (same as before)
      content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
      ],
      // 2. Theme configuration (where your 'xs' breakpoint goes)
      theme: {
        extend: {
          screens: {
            'xs': '475px', // Your custom 'xs' breakpoint
            // You can add more custom breakpoints here or extend existing ones
          },
        },
      },
      // 3. Plugins (if you have any Tailwind plugins)
      // plugins: [
      //   // e.g., require('@tailwindcss/typography'),
      // ],
    }),
  ],
})