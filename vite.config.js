// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/TodoList-React-App/', // MUST match your repo name
  plugins: [react()],
})
