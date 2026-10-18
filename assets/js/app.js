(function () {
  "use strict";

  var cfg = window.BIO_CONFIG;
  var root = document.getElementById("links");
  if (!cfg || !root) return;

  var ICONS = {
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.4-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z"/></svg>',
    whatsapp:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.69.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.41Z"/></svg>',
    spotify:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0Zm5.52 17.34c-.24.36-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.56-1.14-.42.12-.78-.18-.9-.54-.12-.42.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.42.18.48.66.3 1.02Zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.38-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14C9.6 9.9 15 10.56 18.72 12.84c.36.18.54.78.24 1.2Zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.3c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.56.3Z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    crown: '<svg viewBox="0 0 32 24" aria-hidden="true"><path d="M2 6.5 9 12l7-10 7 10 7-5.5-2.6 13.5H4.6Z"/><rect x="4.6" y="21" width="22.8" height="2.4" rx="1.2"/></svg>',
  };

  function hrefFor(btn) {
    if (btn.whatsapp) {
      var phone = String(btn.whatsapp.phone).replace(/\D/g, "");
      return "https://wa.me/" + phone + "?text=" + encodeURIComponent(btn.whatsapp.message || "");
    }
    return btn.href;
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // *palavra* -> <em>palavra</em>
  function rich(s) {
    return esc(s).replace(/\*([^*]+)\*/g, "<em>$1</em>");
  }
  function plain(s) {
    return String(s).replace(/\*/g, "");
  }

  function releaseCard(btn) {
    return (
      '<a class="card card--release" href="' + esc(hrefFor(btn)) + '" ' +
      'aria-label="' + esc(plain(btn.title) + ' — ' + btn.subtitle) + '">' +
      '<span class="card__bg" aria-hidden="true"><span class="release__word">' + esc(plain(btn.title).split(' ')[0]) + '</span></span>' +
      '<img class="release__figure" src="' + esc(btn.image) + '" alt="" width="714" height="800" fetchpriority="high" decoding="async">' +
      '<span class="card__shade" aria-hidden="true"></span>' +
      '<span class="release__tag"><span class="release__dot"></span>' + esc(btn.eyebrow) + '</span>' +
      '<span class="release__body">' +
      '<span class="release__crown">' + ICONS.crown + '</span>' +
      '<span class="release__title">' + rich(btn.title) + '</span>' +
      '<span class="release__cta"><span class="release__play">' + ICONS.play + '</span>' +
      '<span class="release__cta-text">' + rich(btn.subtitle) + '</span></span>' +
      '</span></a>'
    );
  }

  function linkCard(btn) {
    return (
      '<a class="card card--link card--' + esc(btn.variant) + '" href="' + esc(hrefFor(btn)) + '" ' +
      'aria-label="' + esc(plain(btn.title) + ' — ' + btn.eyebrow) + '">' +
      '<span class="card__bg" aria-hidden="true"></span>' +
      '<span class="link__figure" aria-hidden="true"><img src="' + esc(btn.image) + '" alt="" decoding="async"></span>' +
      '<span class="link__text">' +
      '<span class="link__eyebrow"><span class="link__icon">' + (ICONS[btn.icon] || '') + '</span>' + esc(btn.eyebrow) + '</span>' +
      '<span class="link__title">' + rich(btn.title) + '</span>' +
      '</span>' +
      '</a>'
    );
  }

  root.innerHTML = cfg.buttons
    .slice(0, 4)
    .map(function (btn, i) {
      var html = btn.variant === "release" ? releaseCard(btn) : linkCard(btn);
      return '<li style="--i:' + i + '">' + html + "</li>";
    })
    .join("");

  var name = document.querySelector("[data-artist-name]");
  var tagline = document.querySelector("[data-artist-tagline]");
  var footer = document.querySelector("[data-footer]");
  if (name) name.textContent = cfg.artist.name;
  if (tagline) tagline.textContent = cfg.artist.tagline;
  if (footer) footer.textContent = cfg.footer;
  document.querySelectorAll("[data-crown]").forEach(function (el) {
    el.innerHTML = ICONS.crown;
  });

  document.documentElement.classList.add("is-ready");
})();
