import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.join(__dirname, 'src'),
      },
    ],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://libu.onrender.com',
        changeOrigin: true,
        cookieDomainRewrite: {
          '*': '',
        },
      },
    },
  },
});
