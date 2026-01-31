/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  test: {
    globals: true, // Allows using describe, it, expect without imports
    environment: 'jsdom', // Simulates browser environment for React components
    setupFiles: './src/setupTests.ts', // Runs before every test file
  },
});
