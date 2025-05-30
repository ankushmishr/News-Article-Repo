// import path from "path"
// // import tailwindcss from "@tailwindcss/vite"
// import react from "@vitejs/plugin-react"
// import { defineConfig } from "vite"

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import { Target } from 'lucide-react'
// import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  server:{
    proxy:{
      "/api":{
        target:"http://localhost:3000",
        secure:false
      },
    },
    },
  
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
