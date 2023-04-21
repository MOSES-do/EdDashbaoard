import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { common } from '@mui/material/colors'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  commonjsOptions: {
    esmExternals: true
  }


})


