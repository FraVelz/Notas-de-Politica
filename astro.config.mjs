import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Notas de Política',
      description: 'Notas personales sobre política - ideas, estudios comparativos y análisis',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Español',
          lang: 'es',
        },
      },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: 'Inicio', link: '/' },
        {
          label: 'General',
          items: [
            { slug: 'general' },
          ],
        },
        {
          label: 'Países',
          collapsed: false,
          items: [
            {
              label: 'Suramérica',
              items: [
                { slug: 'paises/suramerica/colombia' },
                { slug: 'paises/suramerica/ecuador' },
              ],
            },
            {
              label: 'Asia',
              items: [
                { slug: 'paises/asiaticos/china' },
                { slug: 'paises/asiaticos/corea-del-sur' },
              ],
            },
          ],
        },
        {
          label: 'Estadísticas',
          items: [
            { slug: 'estadistica/poblacion' },
          ],
        },
        {
          label: 'Proyectos',
          items: [
            { slug: 'proyectos/general' },
          ],
        },
      ],
    }),
  ],
});
