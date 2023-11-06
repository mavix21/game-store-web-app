import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve('src');
const outDir = resolve('dist');

export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        game: resolve(root, 'pages', 'index.html')
      }
    }
  }
});
