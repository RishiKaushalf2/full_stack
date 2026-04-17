import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  preview: {
    host: true,
    port: process.env.PORT,
    allowedHosts: true
  }
})
