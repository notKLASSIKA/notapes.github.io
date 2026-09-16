(function () {
  const I18N = {
    ru: {
      connect: "[ подключить кошелёк ]",
      t_boot: "старт", t_apes: "обезьяны", t_faq: "faq", t_term: "терминал", t_links: "связи",
      h1: "666 ОБЕЗЬЯН. НОЛЬ СГЕНЕРИРОВАННЫХ.",
      lead: "Пиксельные портреты 48×48, которые Klassika рисует вручную. Сейчас TON / Getgems. Следующая глава — Ethereum. Эта страница — публичный терминал коллекции.",
      c_market: "открыть getgems", c_tg: "канал telegram",
      h_apes: "// галерея", p_apes: "Превью. Живые токены на Getgems.",
      h_faq: "// faq",
      q1: "Что такое NOTAPES?",
      a1: "Коллекция из 666 пиксельных обезьян, нарисованных вручную. Не генератив. У каждой карточки свой кадр и строка лора.",
      q2: "Где купить?",
      a2: "Вторичка: getgems.io/notapes в сети TON. Дроп на Ethereum — отдельная глава, не копия всех 666.",
      q3: "Что даёт холд?",
      a3: "Чат, будущие уровни WL (4 обезьяны = 1 WL, 8+ = OG), карточка характера и механики на сайте.",
      q4: "Что такое notapes.ton?",
      a4: "Короткое имя кошелька коллекции. Туда можно слать GRAM. Позже на то же имя можно повесить TON Site. Для Google нужен обычный https-хостинг.",
      q5: "Промокоды?",
      a5: "Поле ниже — заглушка. Коды откроют WL / паки, когда появится бэкенд.",
      h_term: "// терминал-хелпер",
      p_term: "Сейчас оболочка. Живая обезьяна-помощник — следующий этап.",
      promo: "промо", apply: "ввод",
      h_links: "// экосистема"
    },
    en: {
      connect: "[ connect wallet ]",
      t_boot: "boot", t_apes: "apes", t_faq: "faq", t_term: "terminal", t_links: "links",
      h1: "666 APES. ZERO GENERATED.",
      lead: "Hand-drawn 48×48 pixel portraits by Klassika. Live on TON / Getgems. Next chapter: Ethereum. This page is the public terminal of the collection.",
      c_market: "open getgems", c_tg: "telegram channel",
      h_apes: "// gallery", p_apes: "Static preview. Real tokens live on Getgems.",
      h_faq: "// faq",
      q1: "What is NOTAPES?",
      a1: "A 666-piece hand-drawn pixel ape collection. Not generated. Each card is its own drawing with a lore line.",
      q2: "Where do I buy?",
      a2: "Secondary: getgems.io/notapes on TON. The Ethereum drop is a later chapter, not a copy of all 666.",
      q3: "What does a holder get?",
      a3: "Chat access, future WL tiers (4 apes = 1 WL, 8+ = OG), a character card, and upcoming site mechanics.",
      q4: "What is notapes.ton?",
      a4: "Collection wallet shortname. Send GRAM there. The same name can later open a TON Site. Google still needs a normal https host.",
      q5: "Promo codes?",
      a5: "The field below is a stub. Codes will unlock WL / packs after backend is live.",
      h_term: "// helper terminal",
      p_term: "UI shell now. Live ape-helper comes later.",
      promo: "promo", apply: "apply",
      h_links: "// ecosystem"
    }
  };

  function applyLang(lang) {
    const pack = I18N[lang] || I18N.ru;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i]").forEach(function (el) {
      const key = el.getAttribute("data-i");
      if (pack[key]) el.textContent = pack[key];
    });
    document.querySelectorAll(".lang").forEach(function (b) {
      b.classList.toggle("on", b.getAttribute("data-set") === lang);
    });
    localStorage.setItem("notapes-lang", lang);
  }

  document.querySelectorAll(".lang").forEach(function (b) {
    b.addEventListener("click", function () {
      applyLang(b.getAttribute("data-set"));
    });
  });
  applyLang(localStorage.getItem("notapes-lang") || "ru");

  const gallery = document.getElementById("gallery");
  ["#0001 genesis", "#0055 ronin", "#0209 wanderer", "#0333 rare", "#0555 sold", "#0666 last"].forEach(function (label) {
    const parts = label.split(" ");
    gallery.insertAdjacentHTML(
      "beforeend",
      '<article class="card"><div class="px">🐵</div><b>' + parts[0] + "</b><span> " + parts.slice(1).join(" ") + "</span></article>"
    );
  });

  const log = document.getElementById("log");
  function say(t) { log.textContent += (log.textContent ? "\n" : "") + t; }
  say("> boot ok. type help");

  document.getElementById("termform").addEventListener("submit", function (e) {
    e.preventDefault();
    const v = document.getElementById("cmd").value.trim().toLowerCase();
    document.getElementById("cmd").value = "";
    if (!v) return;
    say("ape> " + v);
    if (v === "help") say("commands: help, lore, promo, wallet, getgems");
    else if (v === "lore") say("HUMANS.. NOT APES. chapter_one is still loading.");
    else if (v === "wallet") say("treasury alias: notapes.ton — TON Connect comes in v2.");
    else if (v === "getgems") say("https://getgems.io/notapes");
    else if (v === "promo") say("use the promo field under the terminal.");
    else say("unknown. try help");
  });

  document.getElementById("promoform").addEventListener("submit", function (e) {
    e.preventDefault();
    const code = document.getElementById("promo").value.trim();
    say(code ? "> promo queued: " + code + " (backend offline)" : "> empty code");
  });

  document.getElementById("connect").addEventListener("click", function () {
    say("> wallet connect: stub. v2 = TON Connect.");
    alert("v2: TON Connect. Сейчас только заглушка.");
  });

  const tg = window.Telegram && window.Telegram.WebApp;
  if (tg) {
    tg.ready();
    tg.expand();
  }
})();
