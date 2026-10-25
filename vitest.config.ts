import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    pool: 'threads',
    projects: [
      {
        test: {
          environment: 'jsdom',
          name: 'unit-test',
          include: ['**/*.test.ts'],
        },
      },
    ],
  },
});
