import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// import { defineConfig } from 'vite';
// import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Adjust path as needed
    },
  },
});
