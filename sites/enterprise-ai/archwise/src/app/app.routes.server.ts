import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'manifesto',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'articulos',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'articulos/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return [
        { slug: 'architecture-md-vale-mas-que-prompts' },
        { slug: 'deuda-tecnica-ia-revela' },
        { slug: 'documentacion-necesita-llm' },
        { slug: 'arquitectura-vuelve-ser-estrategica' }
      ];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Client
  }
];
