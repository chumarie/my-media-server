import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@application': path.resolve(__dirname, 'src/application'),
      '@domain': path.resolve(__dirname, 'src/domain'),
      '@infrastructure': path.resolve(__dirname, 'src/infrastructure'),
      '@presentation': path.resolve(__dirname, 'src/presentation'),
      '@mocks': path.resolve(__dirname, 'src/mocks'),
      '@tests': path.resolve(__dirname, 'src/tests'),
      '@organisms': path.resolve(__dirname, 'src/presentation/atomic-design/organisms'),
      '@templates': path.resolve(__dirname, 'src/presentation/atomic-design/templates')
    },
  },
})
