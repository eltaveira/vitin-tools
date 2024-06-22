import { defineConfig } from 'tsup';
// biome-ignore lint/style/noDefaultExport: <O tsup exige que a exportação seja default>
export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  platform: 'node',
  target: 'es2022',
  minify: true,
  minifySyntax: true,
  minifyIdentifiers: true,
  minifyWhitespace: true
});
