import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'; // Adds custom matchers like toBeInTheDocument

// Automatically unmount components and clear the DOM after each test
afterEach(() => {
  cleanup();
});
