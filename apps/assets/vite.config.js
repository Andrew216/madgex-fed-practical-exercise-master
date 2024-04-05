import Path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = Path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  server: {
    port: 8887,
  },
  build: {
    emptyOutDir: true,
    assetsDir: '',
    rollupOptions: {
      output: {
        dir: Path.resolve(__dirname, '../../lib/public/client'),
        entryFileNames: '[name].js',
        assetFileNames: '[name][extname]',
      },
      input: {
        main: 'src/index.js',
      },
    },
  },
});
