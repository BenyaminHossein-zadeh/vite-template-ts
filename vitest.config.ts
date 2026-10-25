import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    pool: 'threads',
    projects: [
      {
        test: {
          environment:"jsdom",
          name: 'unit-test',
          include: ['**/*.test.ts'],
        },
      },
    
    ],
  },
})