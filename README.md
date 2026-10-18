# Bio oficial — Matheus Nocaute

Página única de links (substitui linksto.be/matheusnocaute). HTML/CSS/JS puros, sem build.

**No ar:** https://papag3w-pixel.github.io/matheusnocaute/ (GitHub Pages, repositório papag3w-pixel/matheusnocaute)

## Atualizar o site
Edite os arquivos e rode nesta pasta: `git add -A && git commit -m "atualiza bio" && git push` — o site atualiza em ~1 minuto.

## Visualizar
Abra `index.html` no navegador (duplo clique). Para testar no celular na mesma rede:
`npx serve .` e acesse o IP mostrado.

## Editar
Tudo em **`assets/js/config.js`**: textos, links, números de WhatsApp (só dígitos, com 55 + DDD), mensagens e imagens.
Cores e fontes: variáveis no topo de `assets/css/styles.css`.

## Links verificados (17/10/2026)
| Botão | Destino | Origem |
|---|---|---|
| Barbie Cavalona | youtube.com/watch?v=mDgejqQn3XA | Canal oficial @matheusnocaute |
| Contrate (WhatsApp 01) | wa.me/5581997719392 | "Contato Whatsapp 01" da bio antiga |
| Produção (WhatsApp 02) | wa.me/5581998515172 | "Contato Whatsapp 02" da bio antiga |
| Spotify | open.spotify.com/track/2Ik28nnMrX15PbSHO538dc | Link oficial do clipe (ada.lnk.to/BarbieCavalona) |

Perfil antigo do Spotify (catálogo anterior): open.spotify.com/artist/1q3o2gGbSg4B5xySXCVPGD
Perfil onde saiu Barbie Cavalona: open.spotify.com/artist/1iQjPgXL63lA66eK3XIM58

## Imagens
`assets/img/` — fotos de `fotos MN/` com fundo removido (localmente) e salvas em WebP transparente; o fundo de cada botão é desenhado no CSS.
1.png → barbie-cavalona.webp · 4.png → contrate.webp · 3.png → producao.webp · 2.png → spotify.webp
A pasta `fotos MN/` não vai para o site (está no .gitignore).

## Domínio próprio (futuro)
Em Settings → Pages do repositório, informe o domínio e troque as URLs de `og:image`, `og:url` e `canonical` em `index.html`.
