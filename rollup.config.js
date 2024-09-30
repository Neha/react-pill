import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.tsx',
  output: {
    file: 'dist/bundle.js',
    format: 'es',
  },
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    typescript(),
    postcss({
      inject: true, // Injects CSS into the JS output
      minimize: true,
    }),
  ],
  external: ['react', 'react-dom', 'react/jsx-runtime'],
};
