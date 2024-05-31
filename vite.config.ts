// vite.config.js o vite.config.mjs
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Agrupa react y react-dom en un fragmento separado
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Ajusta el límite de tamaño a 1000 kB
  },
});
