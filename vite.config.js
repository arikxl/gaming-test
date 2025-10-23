import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      // כל בקשה שמתחילה ב-/api תישלח לשרת היעד
      '/api': {
        target: 'https://www.freetogame.com/api', // השרת האמיתי שאליו אנחנו רוצים להגיע
        changeOrigin: true, // חיוני כדי שהשרת המרוחק "יאמין" שהבקשה מגיעה ממקור תקין
        rewrite: (path) => path.replace(/^\/api/, ''), // מסיר את '/api' מהנתיב לפני שליחת הבקשה
      },
    },
  },

})
