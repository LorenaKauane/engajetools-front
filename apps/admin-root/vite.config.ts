import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
// "@ui/*": ["../../packages/ui/*"]
console.log(path.resolve(__dirname, '../../packages/ui/*'));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // {
      //   find: '@ui/components/*',
      //   replacement: path.resolve(
      //     __dirname,
      //     '../../packages/ui/components/ui/*'
      //   ),
      // },
      // {
      //   find: '@ui',
      //   replacement: path.resolve(__dirname, '../../packages/ui/'),
      // },
      // {
      //   find: '@ui/components',
      //   replacement: path.resolve(__dirname, '../../packages/ui/components/ui'),
      // },
      {
        find: '@ui',
        replacement: path.resolve(__dirname, '../../packages/ui/'),
      },
      // {
      //   find: '@ui/components/ui',
      //   replacement: path.resolve(
      //     __dirname,
      //     '../../packages/ui/components/ui/'
      //   ),
      // },
    ],
  },
  // server: {
  //   host: '0.0.0.0',
  //   port: 10086,
  //   open: false,
  //   cors: true,
  // },
});
