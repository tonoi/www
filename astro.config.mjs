import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://tonoi.co.jp',
  output: 'static',
  outDir: './docs',
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ],
  scopedStyleStrategy: 'where'
});
