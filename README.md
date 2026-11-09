# Encanador HS · site

Site institucional com foco em SEO local (encanador 24h em São Paulo). Feito com [Astro](https://astro.build), gera páginas estáticas e é publicado na Vercel.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Telefone/WhatsApp, nome, tempo de chegada | `src/data/site.ts` |
| Serviços (textos, FAQ, SEO) | `src/data/servicos.ts` |
| Bairros atendidos | `src/data/bairros.ts` |
| Posts do blog | `src/content/blog/*.md` |

Cada serviço vira `/servicos/<slug>/`, cada bairro vira `/encanador-em-<slug>/` e cada post vira `/blog/<arquivo>/`. O sitemap é gerado automaticamente.

## Pendências (dados provisórios)

- `src/data/site.ts`: GTM está vazio. Colocar o ID do GTM do Encanador HS.
- `src/assets/fotos/`: fotos dos serviços ainda são provisórias (herdadas do site base). Subir fotos reais em `fotos/<slug>/` e apagar o `.jpg` correspondente em `src/assets/fotos/`.
- `astro.config.mjs` e `site.url`: domínio `encanadorhs.com.br` (confirmar).
