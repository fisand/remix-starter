import { resolve } from 'node:path'

import { reactRouter } from '@react-router/dev/vite'
import unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    unocss(),
    reactRouter(),
    tsconfigPaths(),
    Icons({
      compiler: 'jsx',
      jsx: 'react',
      customCollections: {
        'fisand-icons': FileSystemIconLoader(`${resolve(import.meta.dirname, 'src/assets/icons')}/`, svg =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')),
      },
    }),
    AutoImport({
      imports: ['react'],
      dts: './auto-imports.d.ts',
      resolvers: [
        IconsResolver({
          componentPrefix: 'Icon',
        }),
      ],
      dirs: ['./app/components/ui'],
    }),
  ],
})
