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

- `src/data/site.ts`: WhatsApp/telefone está como `(11) 90000-0000` e o GTM está vazio. Trocar pelos dados reais.
- `src/assets/fotos/`: fotos provisórias herdadas do site base. Subir fotos reais do Encanador HS em `fotos/<slug>/` e apagar o `.jpg` correspondente em `src/assets/fotos/` para regerar.
- `src/assets/logo.png` / `public/logo.png` / `public/og.jpg`: logo provisório.
- `astro.config.mjs` e `site.url`: domínio `encanadorhs.com.br` (confirmar).
