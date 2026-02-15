// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://glistening-caramel-cfa689.netlify.app',
  integrations: [sitemap()],
  adapter: netlify(),
});

// export default defineConfig({
//   site: "https://zhutianqi.github.io",
//   base: "/clay-astro-theme",
// });