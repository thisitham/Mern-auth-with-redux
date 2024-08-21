import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api':{            //kiynne api '/api' ekata ynna nn hama wenawema 'http://localhost:3000' kiyna target url eke ynna oni kiyna eka
        target:'http://localhost:3000',  
        secure: false,    //'https' newei nisa thamai api 'secure: false' denne     
      }
    }
  }
})
