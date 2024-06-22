/// <reference types="vitest" />
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

// biome-ignore lint/style/noDefaultExport: <a lib exige que seja assim>
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    alias: {
      '@/*': 'src/*'
    },
    environment: 'node',
    name: 'Vitin Tools',
    clearMocks: false,
    cache: false,
    chaiConfig: {
      includeStack: true,
      showDiff: true,
      truncateThreshold: 0
    },
    coverage: {
      enabled: false,
      provider: 'v8',
      include: ['src/**/*.ts'],
      exclude: ['tests/**'],
      reporter: ['html']
    },
    dir: 'tests',
    include: ['**/*_{integration,unity,e2e}_test.ts'],
    isolate: true,
    pool: 'threads',
    poolOptions: {
      threads: {
        singleThread: true
      }
    },
    disableConsoleIntercept: false,
    logHeapUsage: true,
    ui: false
  }
});
