/*
 * Configuração central da bio — edite aqui textos, links e imagens.
 * Links verificados em 17/10/2026 (veja README.md).
 */
window.BIO_CONFIG = {
  artist: {
    name: "Matheus Nocaute",
    tagline: "O príncipe do forró",
  },

  /* Exatamente 4 botões, nesta ordem.
     Nos títulos, *palavra* vira destaque em itálico. */
  buttons: [
    {
      id: "lancamento",
      variant: "release",
      eyebrow: "Lançamento · Clipe oficial",
      title: "BARBIE CAVALONA",
      subtitle: "Assista ao clipe oficial no YouTube",
      href: "https://www.youtube.com/watch?v=mDgejqQn3XA",
      image: "assets/img/barbie-cavalona.webp",
      icon: "play",
    },
    {
      id: "contrate",
      variant: "booking",
      eyebrow: "WhatsApp 01",
      title: "Contrate *o* Matheus Nocaute",
      // "Contato Whatsapp 01" da bio antiga (linksto.be/matheusnocaute)
      whatsapp: {
        phone: "5581997719392",
        message:
          "Olá! Vim pelo site do Matheus Nocaute e gostaria de informações sobre contratação para um evento.",
      },
      image: "assets/img/contrate.webp",
      icon: "whatsapp",
    },
    {
      id: "producao",
      variant: "production",
      eyebrow: "WhatsApp 02",
      title: "Fale com *nossa* produção",
      // "Contato Whatsapp 02" da bio antiga (linksto.be/matheusnocaute)
      whatsapp: {
        phone: "5581998515172",
        message:
          "Olá! Vim pelo site do Matheus Nocaute e gostaria de falar com a produção sobre a contratação de um show.",
      },
      image: "assets/img/producao.webp",
      icon: "whatsapp",
    },
    {
      id: "spotify",
      variant: "spotify",
      eyebrow: "Barbie Cavalona",
      title: "Ouça *no* Spotify",
      // Faixa oficial (link do próprio clipe via ada.lnk.to/BarbieCavalona)
      href: "https://open.spotify.com/track/2Ik28nnMrX15PbSHO538dc",
      image: "assets/img/spotify.webp",
      icon: "spotify",
    },
  ],

  footer: "© 2026 Matheus Nocaute",
};
