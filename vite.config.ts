import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Valentine-s-Day/",
  plugins: [react()],
  resolve: {
    alias: { components: "/src/components", gifs: "/src/assets/gifs" },
  },
});
