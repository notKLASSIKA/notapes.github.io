/* NOTAPES current site — 2026-09-16 */
const CONTRACT = "EQDwLDJcRXegHyvvRHXouGrUODuF0eagnWzLvUMUSTw8tv3Y";
const LINKS = {
  telegram: "https://t.me/notapes",
  chat: "https://t.me/notapeschat",
  bot: "https://t.me/notfunrobot",
  market: "https://getgems.io/notapes",
  x: "https://x.com/notapess",
  opensea: "https://opensea.io",
};
const CDN = "https://s.getgems.io/nft/c/6592e837ed4bc3657cd34ac4";

const COPY = {
  ru: {
    h1: "666 обезьян. Ноль сгенерированных.",
    lead: "Проекту больше трёх лет. Авторская коллекция классического пиксель-арта: 291 из 666 кадров уже отрисованы вручную художником @notKLASSIKA в сетке 48×48. Сеть TON, маркет Getgems. Ethereum Chapter — отдельный mint.",
    ctaMarket: "Открыть Getgems",
    ctaTg: "Канал Telegram",
    nav: ["старт", "галерея", "терминал", "рейтинг", "документы", "OpenSea", "магазин", "экосистема"],
    stats: { supply: "тираж", drawn: "отрисовано", size: "сетка", chain: "сеть" },
    loreTitle: "ВСЕЛЕННАЯ",
    loreBody: [
      "Раса разумных приматов разделилась на фракции. После космических путешествий и междоусобных войн воины, демоны, маги и исследователи вынуждены объединиться.",
      "Их цель — найти сакральный артефакт. NOTAPES — не генератив со слоями. Каждый кадр рисуется отдельно: композиция, фон, характер.",
    ],
    plot: "Воины, демоны, маги, исследователи космоса. Олдскульный крипто-арт для тех, кто читает пиксель как живопись.",
    holdTitle: "ХОЛДЕРАМ",
    holdLead: "Суперхолдеры TON-коллекции получают доступ к будущей ETH-главе. Не копия всех 666 — отборные легендарные карточки. RP фармятся в боте @notfunrobot.",
    holdTiers: [
      { name: "OG", rule: "8+ обезьян", perk: "2 WL, приоритет легендарок, закрытый лор" },
      { name: "WL", rule: "4–7 обезьян", perk: "1 бесплатный минт, раннее окно 24ч" },
      { name: "ALLOW", rule: "1–3 обезьяны", perk: "скидка на паблик, вход за 6ч" },
    ],
    shopTitle: "МАГАЗИН",
    merch: [
      { title: "The Sandbox LAND", body: "Официальная земля в The Sandbox. Первая картина уже выпущена как игровой ассет внутри метавселенной." },
      { title: "Холсты 144×144 см", body: "Ограниченные серии маслом мастихином. Сетка 48×48 масштабируется в 144 см. На обороте — номер NFT вручную." },
      { title: "RP в @notfunrobot", body: "Бот экосистемы: фарм rating points, снапшоты, доступ к механикам. RP влияет на позицию в рейтинге." },
    ],
    faqTitle: "ДОКУМЕНТЫ",
    faq: [
      { q: "Что такое NOTAPES?", a: "Лимитированная коллекция из 666 уникальных пиксельных артефактов. Авторский проект klassikAPES / NOTAPES. Не генератив. Оригинал — 48×48 пикселей. Проекту более трёх лет. Сейчас отрисовано 291 / 666 вручную @notKLASSIKA." },
      { q: "Где купить и как проверить?", a: "Официальный маркет на TON — Getgems. Контракт верифицирован: EQDwLDJcRXegHyvvRHXouGrUODuF0eagnWzLvUMUSTw8tv3Y. Не покупайте с других контрактов." },
      { q: "Что даёт холд?", a: "Чат холдеров, уровни whitelist на ETH-главу (4 обезьяны = 1 WL, 8+ = OG), карточка характера и механики на этом терминале. RP фармится в @notfunrobot." },
      { q: "Dynamic Soul — динамическая душа?", a: "NFT эволюционирует вместе с активностью холдера через бота @notfunrobot. Рейтинг, снапшоты и характер карточки связаны с тем, как живёт кошелёк — не статичный jpeg." },
      { q: "Что такое notapes.ton?", a: "Короткое имя казны коллекции. Позже на то же имя можно повесить TON Site. Этот сайт живёт на обычном https, чтобы его видели поисковики и Telegram Mini App." },
      { q: "Кто автор?", a: "Художник @notKLASSIKA. Вся приоритетная информация идёт через Telegram-канал @NOTAPES." },
      { q: "Mint Status: Ethereum Chapter?", a: "ETH / OpenSea — отдельная маленькая глава, не копия 666. Минт ещё не открыт. Доступ строится вокруг суперхолдеров TON-коллекции." },
    ],
    termTitle: "терминал-хелпер",
    termHint: "команды: help, lore, promo, wallet, getgems, contract, blood",
    promo: "промо",
    apply: "ввод",
    connect: "ПОДКЛЮЧИТЬ КОШЕЛЁК",
    connected: "КОШЕЛЁК ПОДКЛЮЧЁН",
    themeBlood: "КРОВЬ",
    themeDark: "ТЬМА",
    yourApes: "обезьяны на кошельке — демо-слой",
    linksTitle: "ЭКОСИСТЕМА",
    contract: "контракт",
    footer: "hand-drawn by notKLASSIKA · 291 / 666",
    helperBoot: "boot ok. type help",
    helperBlood: "infernal core online. type help",
    unknown: "unknown. try help",
    galleryTitle: "ГАЛЕРЕЯ",
    floor: "Floor",
    soulTitle: "Dynamic Soul",
    soulBody: "Каждая обезьяна несёт динамический характер. Активность холдера в боте @notfunrobot пишет историю карточки: RP, уровни доступа, снапшоты. NFT эволюционирует вместе с кошельком.",
    mintTitle: "Mint Status",
    mintBody: "Ethereum Chapter — не открыт. TON-коллекция живая на Getgems. 291 / 666 отрисовано.",
    openSeaBody: "ETH-глава выйдет на OpenSea отдельным маленьким сапплаем. Это не зеркало 666. Пока минтовый статус: WAIT.",
    helperNote: "Сейчас оболочка. Живая обезьянка-помощник с динамической душой — следующий этап.",
  },
  en: {
    h1: "666 apes. Zero generated.",
    lead: "The project is over three years old. Classic pixel art: 291 of 666 frames already drawn by hand by @notKLASSIKA on a 48×48 grid. Live on TON / Getgems. Ethereum Chapter is a separate mint.",
    ctaMarket: "Open Getgems",
    ctaTg: "Telegram channel",
    nav: ["start", "gallery", "terminal", "leaderboard", "docs", "OpenSea", "shop", "ecosystem"],
    stats: { supply: "supply", drawn: "drawn", size: "grid", chain: "chain" },
    loreTitle: "UNIVERSE",
    loreBody: [
      "A race of sentient primates split into factions. After cosmic voyages and civil wars, warriors, demons, mages and explorers must unite.",
      "Their goal is a sacred artifact. NOTAPES is not layered generative art. Each frame is drawn alone: composition, ground, character.",
    ],
    plot: "Warriors, demons, mages, space explorers. Old-school crypto art for people who read pixels like paint.",
    holdTitle: "HOLDERS",
    holdLead: "Super-holders of the TON set get the ETH chapter. Not a copy of all 666 — selected legendary cards. Farm RP in @notfunrobot.",
    holdTiers: [
      { name: "OG", rule: "8+ apes", perk: "2 WL, legendary priority, closed lore" },
      { name: "WL", rule: "4–7 apes", perk: "1 free mint, 24h early window" },
      { name: "ALLOW", rule: "1–3 apes", perk: "public discount, 6h gate" },
    ],
    shopTitle: "SHOP",
    merch: [
      { title: "The Sandbox LAND", body: "Official land in The Sandbox. The first painting is already an in-game asset inside the metaverse." },
      { title: "144×144 cm canvases", body: "Limited oil series, palette-knife. The 48×48 grid scales to 144 cm. NFT number is written by hand on the back." },
      { title: "RP in @notfunrobot", body: "Ecosystem bot: farm rating points, snapshots, mechanic access. RP feeds the leaderboard." },
    ],
    faqTitle: "DOCUMENTS",
    faq: [
      { q: "What is NOTAPES?", a: "A limited run of 666 unique pixel artifacts. The klassikAPES / NOTAPES artist project. Not generative. Original grid 48×48. Over three years in. 291 / 666 drawn by hand by @notKLASSIKA." },
      { q: "Where do I buy, how do I verify?", a: "Official TON market is Getgems. Verified contract: EQDwLDJcRXegHyvvRHXouGrUODuF0eagnWzLvUMUSTw8tv3Y. Do not buy from other contracts." },
      { q: "What does holding give?", a: "Holder chat, ETH whitelist tiers (4 apes = 1 WL, 8+ = OG), a character card, and mechanics on this terminal. RP is farmed in @notfunrobot." },
      { q: "What is Dynamic Soul?", a: "The NFT evolves with holder activity through the @notfunrobot bot. Rating, snapshots and the card's character follow how the wallet lives — not a static jpeg." },
      { q: "What is notapes.ton?", a: "Short name of the collection treasury. The same name can later host a TON Site. This page lives on normal https so search engines and Telegram Mini Apps can open it." },
      { q: "Who made this?", a: "Artist @notKLASSIKA. Priority news runs through the Telegram channel @NOTAPES." },
      { q: "Mint Status: Ethereum Chapter?", a: "ETH / OpenSea is a small separate chapter, not a clone of 666. Mint is not open. Access is built around TON super-holders." },
    ],
    termTitle: "terminal-helper",
    termHint: "commands: help, lore, promo, wallet, getgems, contract, blood",
    promo: "promo",
    apply: "apply",
    connect: "CONNECT WALLET",
    connected: "WALLET ON",
    themeBlood: "BLOOD",
    themeDark: "DARK",
    yourApes: "apes on wallet — demo layer",
    linksTitle: "ECOSYSTEM",
    contract: "contract",
    footer: "hand-drawn by notKLASSIKA · 291 / 666",
    helperBoot: "boot ok. type help",
    helperBlood: "infernal core online. type help",
    unknown: "unknown. try help",
    galleryTitle: "GALLERY",
    floor: "Floor",
    soulTitle: "Dynamic Soul",
    soulBody: "Each ape carries a dynamic character. Holder activity in @notfunrobot writes the card: RP, access levels, snapshots. The NFT evolves with the wallet.",
    mintTitle: "Mint Status",
    mintBody: "Ethereum Chapter — not open. TON collection is live on Getgems. 291 / 666 drawn.",
    openSeaBody: "The ETH chapter will land on OpenSea as a small separate supply. Not a mirror of 666. Mint status: WAIT.",
    helperNote: "This is the shell. A living helper ape with a dynamic soul is the next stage.",
  },
};

const APES = [
  { id: 1, file: "0.png", name: "klassikAPES #0001", floor: "150 TON", owner: "bigrich.ton" },
  { id: 2, file: "1.png", name: "klassikAPES #0002", floor: "144 TON", owner: "EQCZ...G3SW" },
  { id: 3, file: "2.png", name: "klassikAPES #0003", floor: "96 TON", owner: "Zero Address" },
  { id: 4, file: "3.png", name: "klassikAPES #0004", floor: "210 TON", owner: "antipovcrypto.ton" },
  { id: 5, file: "4.png", name: "klassikAPES #0005", floor: "188 TON", owner: "alwaysproper.ton" },
  { id: 9, file: "8.png", name: "klassikAPES #0009", floor: "121 TON", owner: "UQBn...k2Ax" },
  { id: 15, file: "14.png", name: "NOTAPES #0005", floor: "72 TON", owner: "EQDw...tv3Y" },
  { id: 16, file: "15.png", name: "NOTAPES #0006", floor: "88 TON", owner: "EQd7...m9Lp" },
];
const BLOOD_APES = [
  { id: 4, file: "3.png", name: "Fire ape", floor: "666 TON", owner: "antipovcrypto.ton" },
  { id: 5, file: "4.png", name: "Oni", floor: "444 TON", owner: "alwaysproper.ton" },
  { id: 6, file: "5.png", name: "Zombie fire", floor: "320 TON", owner: "EQCZ...G3SW" },
  { id: 7, file: "6.png", name: "Fire breath", floor: "290 TON", owner: "UQBn...k2Ax" },
  { id: 9, file: "8.png", name: "Flame skull", floor: "777 TON", owner: "notapes.ton" },
  { id: 10, file: "9.png", name: "Laser horns", floor: "250 TON", owner: "klassika.ton" },
];
const BOARD = [
  { rank: "01", name: "klassika.ton", apes: 48, wl: "OG", rp: 2400 },
  { rank: "02", name: "EQCZ...G3SW", apes: 12, wl: "Tier 1", rp: 880 },
  { rank: "03", name: "notapes.hub", apes: 19, wl: "OG", rp: 1320 },
  { rank: "04", name: "UQBn...k2Ax", apes: 6, wl: "Tier 2", rp: 410 },
  { rank: "—", name: "[ BURN ADDRESS 01 ]", apes: 3, wl: "BURNED", rp: 0, burned: true },
  { rank: "—", name: "[ BURN ADDRESS 02 ]", apes: 1, wl: "BURNED", rp: 0, burned: true },
];

const V4 = {
  ru: {
    bootDate: "архив открыт: ноябрь 2023 // первый публичный запуск: 01.01.2024",
    bootBody: "NOTAPES — исследуемый терминал доступа к экосистеме. Здесь хранятся записи коллекции, процессы автора, сигналы сообщества и следы NOT Artifact.",
    collectionTitle: "КОЛЛЕКЦИЯ → ЭКОСИСТЕМА",
    collectionBody: "NFT — только первый слой. Вокруг него собираются Telegram-сервисы, RP, рейтинги, OpenSea Chapter, Dynamic Soul, игра, анимация и физические артефакты.",
    systemTitle: "СИСТЕМА",
    systemBody: "Статус холдера формируется не одной цифрой: учитываются время владения, количество обезьян, активность и вклад в экосистему — участие, помощь, комьюнити, инфраструктура, идеи и развитие.",
    universeTitle: "ВСЕЛЕННАЯ",
    universeBody: "Угроза галактического масштаба заставляет воинов, демонов, магов и исследователей объединиться. Они ищут древний NOT Artifact. Запись повреждена. Остальное — загадка.",
    soulTitle: "DYNAMIC SOUL",
    soulBody: "IN DEVELOPMENT // личность зависит от редкости, атрибутов и истории. Будущие взаимодействия: Telegram, сайт, игра. Состояния: Sleeping / Awakened / Evolving.",
    soulMemory: "MEMORY RESET PROTOCOL: при продаже личные воспоминания архивируются; репутация, достижения, уровень и история характера сохраняются.",
    mediaTitle: "MEDIA LAB",
    creatorTitle: "CREATOR LOG",
    physicalTitle: "PHYSICAL ARTIFACTS",
    physicalBody: "10 масляных работ, 144×144 см. Публичный аукцион.",
    archiveTitle: "ARCHIVE",
    archiveBody: "Проверенные рынки: GetGems / Harbor / Hotcraft / LAFFKA. Объём коллекции: 6.4k+ GRAM.",
    communityTitle: "BUILDING CENTER",
    communityBody: "Ищем людей, которые строят, исследуют, рисуют и помогают экосистеме.",
    networkTitle: "NETWORK",
    broadcastTitle: "SYSTEM BROADCAST / NETWORK FEED",
    recruitment: "NOTAPES BUILDING CENTER // Vibe Coders, Developers, Telegram Developers, Web App, Fullstack, Smart Contract, TON, Pixel Artists, Designers, Community Managers, AI Enthusiasts.",
    commands: { collection: "КОЛЛЕКЦИЯ", gallery: "ГАЛЕРЕЯ", system: "СИСТЕМА", universe: "ВСЕЛЕННАЯ", soul: "DYNAMIC SOUL", media: "MEDIA LAB", creator: "CREATOR LOG", archive: "АРХИВ", network: "NETWORK" },
    terms: {
      OG: { description: "Статус суперхолдера: 8+ обезьян, приоритет легендарных карточек и закрытый лор.", requirements: "8+ apes // holder activity", clearance: "OG" },
      WL: { description: "Whitelist-доступ к будущей отдельной главе. Уровень зависит от холдинга и вклада.", requirements: "4–7 apes // contribution", clearance: "WL" },
      RP: { description: "Rating Points — след активности в экосистеме, ботах, комьюнити и проектах.", requirements: "activity // help // ideas", clearance: "RP" },
      "DYNAMIC SOUL": { description: "Развивающийся характер NFT: Sleeping, Awakened, Evolving.", requirements: "rarity // attributes // history", clearance: "IN DEVELOPMENT" },
      "NOT ARTIFACT": { description: "Древний объект, который ищут объединённые группы вселенной. Данные неполные.", requirements: "archive fragment required", clearance: "UNKNOWN" },
      "OPENSEA CHAPTER": { description: "Отдельная hand-drawn серия. Это не Ethereum Chapter и не копия коллекции 666.", requirements: "separate supply // hand-drawn", clearance: "WAIT" },
      "MEMORY RESET": { description: "При продаже personal memories архивируются. Reputation, achievements, level и character history остаются.", requirements: "transfer event", clearance: "PROTOCOL" },
      "BUILDING CENTER": { description: "Пространство для людей, которые помогают строить NOTAPES: код, дизайн, TON, комьюнити и идеи.", requirements: "participation // contribution", clearance: "OPEN" },
    }
  },
  en: {
    bootDate: "archive opened: November 2023 // first public launch: 01.01.2024",
    bootBody: "NOTAPES is an exploratory access terminal to an ecosystem. It stores collection records, creator processes, community signals and traces of the NOT Artifact.",
    collectionTitle: "COLLECTION → ECOSYSTEM",
    collectionBody: "NFT is only the first layer. Around it: Telegram services, RP, ratings, OpenSea Chapter, Dynamic Soul, game, animation and physical artifacts.",
    systemTitle: "SYSTEM",
    systemBody: "Holder status is not one number: holding time, ape count, activity and ecosystem contribution all matter — participation, help, community, infrastructure, ideas and development.",
    universeTitle: "UNIVERSE",
    universeBody: "A galaxy-scale threat forces warriors, demons, mages and explorers to unite. They search for an ancient NOT Artifact. The record is damaged. The rest is a mystery.",
    soulTitle: "DYNAMIC SOUL",
    soulBody: "IN DEVELOPMENT // personality is based on rarity, attributes and history. Future interaction: Telegram, site, game. States: Sleeping / Awakened / Evolving.",
    soulMemory: "MEMORY RESET PROTOCOL: when sold, personal memories are archived; reputation, achievements, level and character history remain.",
    mediaTitle: "MEDIA LAB",
    creatorTitle: "CREATOR LOG",
    physicalTitle: "PHYSICAL ARTIFACTS",
    physicalBody: "10 oil works, 144×144 cm. Public auction.",
    archiveTitle: "ARCHIVE",
    archiveBody: "Verified markets: GetGems / Harbor / Hotcraft / LAFFKA. Collection volume: 6.4k+ GRAM.",
    communityTitle: "BUILDING CENTER",
    communityBody: "People who build, research, draw and help the ecosystem are invited.",
    networkTitle: "NETWORK",
    broadcastTitle: "SYSTEM BROADCAST / NETWORK FEED",
    recruitment: "NOTAPES BUILDING CENTER // Vibe Coders, Developers, Telegram Developers, Web App, Fullstack, Smart Contract, TON, Pixel Artists, Designers, Community Managers, AI Enthusiasts.",
    commands: { collection: "COLLECTION", gallery: "GALLERY", system: "SYSTEM", universe: "UNIVERSE", soul: "DYNAMIC SOUL", media: "MEDIA LAB", creator: "CREATOR LOG", archive: "ARCHIVE", network: "NETWORK" },
    terms: {
      OG: { description: "Super-holder clearance: 8+ apes, legendary priority and closed lore.", requirements: "8+ apes // holder activity", clearance: "OG" },
      WL: { description: "Whitelist access to a future separate chapter. Level follows holding and contribution.", requirements: "4–7 apes // contribution", clearance: "WL" },
      RP: { description: "Rating Points — an activity trace across bots, community and ecosystem projects.", requirements: "activity // help // ideas", clearance: "RP" },
      "DYNAMIC SOUL": { description: "An evolving NFT character: Sleeping, Awakened, Evolving.", requirements: "rarity // attributes // history", clearance: "IN DEVELOPMENT" },
      "NOT ARTIFACT": { description: "The ancient object sought by the united groups of the universe. Data is incomplete.", requirements: "archive fragment required", clearance: "UNKNOWN" },
      "OPENSEA CHAPTER": { description: "A separate hand-drawn series. Not Ethereum Chapter and not a clone of the 666 collection.", requirements: "separate supply // hand-drawn", clearance: "WAIT" },
      "MEMORY RESET": { description: "On sale, personal memories are archived. Reputation, achievements, level and character history remain.", requirements: "transfer event", clearance: "PROTOCOL" },
      "BUILDING CENTER": { description: "A place for people building NOTAPES: code, design, TON, community and ideas.", requirements: "participation // contribution", clearance: "OPEN" },
    }
  }
};

const state = {
  lang: localStorage.getItem("na-lang") || "ru",
  blood: localStorage.getItem("na-theme") === "blood",
  size: localStorage.getItem("na-size") || "normal",
  connected: false,
  logs: [],
  card: null,
};

function t() { return COPY[state.lang]; }
function v4() { return V4[state.lang]; }
function term(label) { return `<button type="button" class="term-link" data-term="${esc(label)}">${esc(label)}</button>`; }
function set() { return state.blood ? BLOOD_APES : APES; }
function pad(n) { return String(n).padStart(4, "0"); }
function img(file) {
  const n = parseInt(file, 10);
  return `apes/${file}`;
}
function fallback(el, file) {
  el.onerror = () => {
    el.onerror = null;
    el.src = `${CDN}/${parseInt(file, 10)}/image.png`;
  };
}

function render() {
  const appEl = document.getElementById("app");
  if (!appEl) return;
  document.documentElement.lang = state.lang;
  document.documentElement.classList.toggle("blood", state.blood);
  document.documentElement.dataset.theme = state.blood ? "blood" : "dark";
  document.documentElement.classList.remove("size-compact", "size-large");
  if (state.size !== "normal") document.documentElement.classList.add(`size-${state.size}`);
  const c = t();
  const apes = set();
  const doubled = apes.concat(apes);
  const navIds = ["#boot", "#apes", "#term", "#leaderboard", "#faq", "#opensea", "#shop", "#eco"];
  const app = document.getElementById("app");
  app.innerHTML = `
    <aside class="database-panel panel" aria-live="polite" aria-label="NOTAPES database">
      <div class="database-head"><span>┌─ NOTAPES DATABASE ─┐</span><button class="database-close" data-act="clear-term" type="button" aria-label="Close record">×</button></div>
      <div class="database-body" id="database-record">
        <p class="db-status accent">ENTRY: WAITING</p>
        <p class="xs muted">Hover over an object to display records.</p>
        <p class="db-status">Status: ONLINE</p>
      </div>
    </aside>
    <header>
      <a href="${LINKS.market}" target="_blank" rel="noreferrer" class="btn-fx crt accent">
        <pre class="ascii">┏┅ NOTAPES ⋐[ ◍ _◍ ]っ</pre>
      </a>
      <pre class="ascii dim">┗┅ HUMANS NOT APES</pre>
      <div class="row">
        <button class="ctrl ${state.lang === "ru" ? "on" : ""}" data-act="lang-ru">RU</button>
        <button class="ctrl ${state.lang === "en" ? "on" : ""}" data-act="lang-en">EN</button>
        <button class="ctrl pixel ${state.blood ? "on" : ""}" data-act="theme" aria-label="COLOR">${state.blood ? "COLOR: BLOOD" : "COLOR: DARK"}</button>
        <button class="ctrl pixel" data-act="size" aria-label="SIZE">SIZE: ${state.size.toUpperCase()}</button>
        <button class="ctrl pixel ${state.connected ? "on" : ""}" data-act="wallet">${state.connected ? c.connected : c.connect}</button>
      </div>
    </header>
    <nav class="nav">${c.nav.map((label, i) => `${i ? '<span class="sep">|</span>' : ""}<a href="${navIds[i]}">${label}</a>`).join("")}</nav>

    <section id="boot" class="sec is-visible" style="margin-top:1.5rem">
      <pre class="ascii">┏┅ / BOOT /</pre>
      <p class="v4-boot-mark">666 HAND-DRAWN APES // ${state.lang === "ru" ? "666 ОБЕЗЬЯН, НАРИСОВАННЫХ ВРУЧНУЮ // 291 / 666 ЗАГРУЖЕНО" : "291 / 666 LOADED"}</p>
      <h1 class="glow">${c.h1}</h1>
      <p class="lead">${c.lead}</p>
      <p class="xs muted">${v4().bootDate}</p>
      <p class="xs muted boot-record">${v4().bootBody}</p>
      <div class="row" style="margin-top:1rem">
        <a class="ctrl on preview-link" data-preview="GETGEMS // TON MARKET" href="${LINKS.market}" target="_blank" rel="noreferrer">${c.ctaMarket}</a>
        <a class="ctrl" href="${LINKS.telegram}" target="_blank" rel="noreferrer">${c.ctaTg}</a>
      </div>
      <dl class="stats">
        <div class="panel pad"><dt class="xs muted">${c.stats.supply}</dt><dd class="num" style="font-size:1.15rem;margin:.25rem 0 0">666</dd><div class="bar"><i style="width:100%"></i></div></div>
        <div class="panel pad"><dt class="xs muted">${c.stats.drawn}</dt><dd class="num" style="font-size:1.15rem;margin:.25rem 0 0">291</dd><div class="bar"><i style="width:44%"></i></div></div>
        <div class="panel pad"><dt class="xs muted">${c.stats.size}</dt><dd class="num" style="font-size:1.15rem;margin:.25rem 0 0">48×48</dd></div>
        <div class="panel pad"><dt class="xs muted">${c.stats.chain}</dt><dd class="num" style="font-size:1.15rem;margin:.25rem 0 0">TON</dd></div>
      </dl>
      <pre class="ascii dim load-label">┗┅ [▓▓▓▓░░░░] 43% // 291 / 666 // LOADING...</pre>
    </section>

    <section id="apes" class="sec">
      <pre class="ascii">┏┅ / ${c.galleryTitle} /</pre>
      <div class="panel marquee"><div class="track">${doubled.map((a, i) => `
        <button class="tile panel btn-fx" data-card="${a.id}" type="button">
          <img src="${img(a.file)}" data-file="${a.file}" alt="${a.name}" />
          <p class="xs accent" style="margin:.5rem 0 0">#${pad(a.id)}</p>
          <p class="xs" style="margin:0">${a.name}</p>
          <p class="xs muted" style="margin:0">${c.floor}: <span class="num">${a.floor}</span></p>
          <p class="xs muted" style="margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.owner}</p>
        </button>`).join("")}</div></div>
      <pre class="ascii dim" style="margin-top:4px">┗┅┅┅/ #NOTAPES /</pre>
    </section>

    ${state.connected ? `<section class="panel pad sec" style="margin-top:1.5rem">
      <p class="xs accent">${c.yourApes}</p>
      <div class="wallet-grid">${apes.slice(0, 3).map((a) => `
        <button class="btn-fx" data-card="${a.id}" type="button" style="background:none;border:0;padding:0;text-align:left">
          <img class="ape-img" src="${img(a.file)}" data-file="${a.file}" alt="${a.name}" />
          <p class="xs muted">#${pad(a.id)}</p>
        </button>`).join("")}</div>
    </section>` : ""}

    <section id="lore" class="sec">
      <pre class="ascii">┏┅ / ${c.loreTitle} /</pre>
      ${c.loreBody.map((p) => `<p class="lead">${p}</p>`).join("")}
      <p class="plot">${c.plot}</p>
      <div class="panel pad" style="margin-top:1rem">
        <h3 class="crt accent" style="margin:0;font-size:14px">${c.soulTitle}</h3>
        <p class="xs muted" style="margin:.5rem 0 0;line-height:1.6">${c.soulBody}</p>
      </div>
      <pre class="ascii dim" style="margin-top:.5rem">┗┅┅┅/ #NOTAPES /</pre>
    </section>

    <section id="faq" class="sec">
      <pre class="ascii">┏┅ / ${c.faqTitle} /</pre>
      <div class="panel faq">${c.faq.map((item) => `<details><summary><span class="muted">▸ </span>${item.q}</summary><p class="xs muted" style="margin:.5rem 0 0;line-height:1.6">${item.a}</p></details>`).join("")}</div>
      <pre class="ascii dim" style="margin-top:4px">┗┅┅┅/ #NOTAPES /</pre>
    </section>

    <section id="term" class="sec">
      <pre class="ascii">┏┅⋐[ ◍ _◍ ]っ ${c.termTitle}</pre>
      <p class="xs muted">${c.helperNote}</p>
      <p class="xs muted">${c.termHint}</p>
      <div class="panel pad" style="margin-top:12px">
        <div class="command-strip" aria-label="Terminal navigation">
          ${Object.entries(v4().commands).map(([key, label]) => `<button class="ctrl command-btn" type="button" data-command="${key}" data-target="#${key === "gallery" ? "apes" : `v4-${key === "soul" ? "soul" : key}`}">[ ${label} ]</button>`).join("")}
        </div>
        <div class="term" id="logs">${(state.logs.length ? state.logs : ["> " + (state.blood ? c.helperBlood : c.helperBoot)]).map((l) => `<p style="margin:0;white-space:pre-wrap">${esc(l)}</p>`).join("")}</div>
        <form class="term-form" id="cmd-form">
          <label class="prompt" for="cmd">${state.blood ? "demon>" : "ape>"}</label>
          <input id="cmd" autocomplete="off" spellcheck="false" />
        </form>
      </div>
      <form class="promo" id="promo-form">
        <label class="xs muted" for="promo">${c.promo}</label>
        <input id="promo" name="promo" maxlength="24" placeholder="HUMANS" />
        <button class="ctrl" type="submit">${c.apply}</button>
      </form>
    </section>

    <section id="leaderboard" class="sec">
      <pre class="ascii">┏┅ / LEADERBOARD /</pre>
      <div class="panel table-wrap"><table>
        <thead><tr><th>RANK</th><th>WALLET / NAME</th><th>APES OWNED</th><th>WL STATUS</th><th>RP</th></tr></thead>
        <tbody>${BOARD.map((r) => `<tr class="${r.burned ? "burn" : ""}"><td class="num">${r.rank}</td><td>${r.name}</td><td class="num">${r.apes}</td><td>${r.wl}</td><td class="num">${r.rp}</td></tr>`).join("")}</tbody>
      </table></div>
      <pre class="ascii dim" style="margin-top:4px">┗┅┅┅/ #NOTAPES /</pre>
    </section>

    <section id="opensea" class="sec">
      <pre class="ascii">┏┅ / OPENSEA /</pre>
      <div class="panel pad">
        <p class="lead" style="margin:0">${c.openSeaBody}</p>
        <p class="xs accent" style="margin:.75rem 0 0">${c.mintTitle}: <span class="num">WAIT</span></p>
        <p class="xs muted">${c.mintBody}</p>
        <a class="ctrl preview-link" data-preview="OPENSEA // ETH CHAPTER" style="margin-top:1rem" href="${LINKS.opensea}" target="_blank" rel="noreferrer">OpenSea</a>
      </div>
      <pre class="ascii dim" style="margin-top:4px">┗┅┅┅/ #NOTAPES /</pre>
    </section>

    <section id="hold" class="sec">
      <pre class="ascii">┏┅ / ${c.holdTitle} /</pre>
      <p class="lead">${c.holdLead}</p>
      <div class="grid2">${c.holdTiers.map((tier) => `<div class="panel tier"><span class="xs accent">${tier.name}</span><span class="xs">${tier.rule}</span><span class="xs muted">${tier.perk}</span></div>`).join("")}</div>
      <pre class="ascii dim" style="margin-top:4px">┗┅┅┅/ #NOTAPES /</pre>
    </section>

    <section id="shop" class="sec">
      <pre class="ascii">┏┅ / ${c.shopTitle} /</pre>
      <div class="grid2">${c.merch.map((m) => `<article class="panel pad"><h3 style="margin:0;font-size:14px">${m.title}</h3><p class="xs muted" style="margin:.5rem 0 0;line-height:1.6">${m.body}</p></article>`).join("")}</div>
      <pre class="ascii dim" style="margin-top:4px">┗┅┅┅/ #NOTAPES /</pre>
    </section>

    <section id="eco" class="sec">
      <pre class="ascii">┏┅ / ${c.linksTitle} /</pre>
      <ul class="eco">
        <li><span class="muted">MARKET</span><a class="preview-link" data-preview="GETGEMS // TON MARKET" href="${LINKS.market}" target="_blank" rel="noreferrer">getgems.io/notapes</a></li>
        <li><span class="muted">CHANNEL</span><a href="${LINKS.telegram}" target="_blank" rel="noreferrer">t.me/notapes</a></li>
        <li><span class="muted">CHAT</span><a href="${LINKS.chat}" target="_blank" rel="noreferrer">t.me/notapeschat</a></li>
        <li><span class="muted">BOT</span><a href="${LINKS.bot}" target="_blank" rel="noreferrer">t.me/notfunrobot</a></li>
        <li><span class="muted">X</span><a href="${LINKS.x}" target="_blank" rel="noreferrer">x.com/notapess</a></li>
        <li><span class="muted">DNS</span><a class="preview-link" data-preview="TONVIEWER // DNS" href="https://tonviewer.com/notapes.ton" target="_blank" rel="noreferrer">notapes.ton</a></li>
      </ul>
      <a class="contract-link preview-link" data-preview="TONVIEWER // VERIFIED CONTRACT" href="https://tonviewer.com/${CONTRACT}" target="_blank" rel="noreferrer">${c.contract}: ${CONTRACT}</a>
      <pre class="ascii" style="margin-top:.75rem">┗┅┅┅/ ${c.footer}</pre>
    </section>
    <section id="v4-collection" class="sec v4-section">
      <pre class="ascii">┏┅ / COLLECTION /</pre>
      <h2 class="v4-title">${v4().collectionTitle}</h2><p class="lead">${v4().collectionBody}</p>
      <div class="v4-record-grid"><article class="panel pad"><span class="v4-kicker">LAYERS</span><p class="xs muted">NFT · Telegram services · ${term("RP")} · ratings · ${term("OPENSEA CHAPTER")} · ${term("DYNAMIC SOUL")}</p></article><article class="panel pad"><span class="v4-kicker">EXTENSIONS</span><p class="xs muted">game · animation · physical artifacts · archive records</p></article></div>
    </section>
    <section id="v4-system" class="sec v4-section">
      <pre class="ascii">┏┅ / SYSTEM /</pre>
      <h2 class="v4-title">${v4().systemTitle}</h2><p class="lead">${v4().systemBody}</p>
      <div class="v4-record-grid"><article class="panel pad"><span class="v4-kicker">CLEARANCE</span><p class="xs muted">${term("OG")} · ${term("WL")} · OTC · ${term("RP")}</p></article><article class="panel pad"><span class="v4-kicker">LEADERBOARDS</span><p class="xs muted">RP LEADERBOARD · HOLDER LEADERBOARD</p></article></div>
    </section>
    <section id="v4-universe" class="sec v4-section">
      <pre class="ascii">┏┅ / UNIVERSE /</pre><h2 class="v4-title">${v4().universeTitle}</h2><p class="lead">${v4().universeBody}</p>
      <p class="plot">${term("NOT ARTIFACT")} // record fragment: [REDACTED] // clearance unknown</p>
    </section>
    <section id="v4-soul" class="sec v4-section">
      <pre class="ascii">┏┅ / DYNAMIC SOUL /</pre><h2 class="v4-title">${term("DYNAMIC SOUL")}</h2><p class="lead">${v4().soulBody}</p>
      <div class="panel pad"><p class="xs accent">SLEEPING → AWAKENED → EVOLVING</p><p class="xs muted">${v4().soulMemory}</p><p class="xs muted">${term("MEMORY RESET")}</p></div>
    </section>
    <section id="v4-media" class="sec v4-section">
      <pre class="ascii">┏┅ / MEDIA LAB /</pre><h2 class="v4-title">${v4().mediaTitle}</h2>
      <div class="v4-chip-grid">${["Animated Stickers","Pixel Animation","Animated Universe","Experimental Animations"].map((x) => `<div class="panel pad xs">${x}</div>`).join("")}</div>
    </section>
    <section id="v4-creator" class="sec v4-section">
      <pre class="ascii">┏┅ / CREATOR LOG /</pre><h2 class="v4-title">${v4().creatorTitle}</h2>
      <div class="v4-chip-grid">${["Pixel Art Process","Animation Process","VR Experiments","The Sandbox","Physical Art","Behind The Scenes","Development Notes"].map((x) => `<div class="panel pad xs">${x}</div>`).join("")}</div>
      <p class="xs muted">process / drawing / animation / editing / development / experiments</p>
    </section>
    <section id="v4-archive" class="sec v4-section">
      <pre class="ascii">┏┅ / ARCHIVE /</pre><h2 class="v4-title">${v4().archiveTitle}</h2><p class="lead">${v4().archiveBody}</p>
      <div class="panel pad"><p class="xs accent">ACHIEVEMENTS</p><p class="xs muted">verified markets · collection volume · holder records · creator records</p></div>
    </section>
    <section id="v4-network" class="sec v4-section">
      <pre class="ascii">┏┅ / NETWORK /</pre><h2 class="v4-title">${v4().networkTitle}</h2>
      <ul class="network-list">${["GetGems","Telegram Channel / Chat","NOTFUNROBOT","Holder Chat","Tribe","OpenSea","Discord","X","Sticker Pack","DNS"].map((x) => `<li><span>${x}</span><span class="muted">${x === "Discord" ? "RECONSTRUCTION IN PROGRESS" : "ONLINE"}</span></li>`).join("")}</ul>
    </section>
    <section id="v4-physical" class="sec v4-section"><pre class="ascii">┏┅ / PHYSICAL ARTIFACTS /</pre><h2 class="v4-title">${v4().physicalTitle}</h2><p class="lead">${v4().physicalBody}</p></section>
    <section id="v4-community" class="sec v4-section"><pre class="ascii">┏┅ / COMMUNITY /</pre><h2 class="v4-title">${v4().communityTitle}</h2><p class="lead">${v4().communityBody}</p><div class="panel pad"><p class="xs accent">${v4().recruitment}</p></div></section>
    <section id="v4-feed" class="sec v4-section"><pre class="ascii">┏┅ / ${v4().broadcastTitle} /</pre><div class="feed panel pad"><p class="xs"><span class="accent">[ONLINE]</span> archive records available</p><p class="xs"><span class="accent">[SIGNAL]</span> building center listening</p><p class="xs"><span class="accent">[STATUS]</span> OpenSea Chapter: WAIT</p></div></section>
    ${state.card != null ? cardModal(state.card) : ""}
  `;

  app.querySelectorAll("img[data-file]").forEach((el) => fallback(el, el.dataset.file));
  bind();
}

function safeRender() {
  try {
    render();
  } catch (err) {
    console.error("NOTAPES render failed", err);
    const appEl = document.getElementById("app");
    if (appEl) {
      appEl.innerHTML = `
        <div class="panel pad" style="margin-top:1.5rem;max-width:32rem;">
          <pre class="ascii">┏┅ / SYSTEM /</pre>
          <p class="lead">BOOT ERROR. RETRY TERMINAL.</p>
          <button class="ctrl" type="button" onclick="location.reload()">RELOAD</button>
        </div>
      `;
    }
  }
}

function cardModal(id) {
  const ape = BLOOD_APES.concat(APES).find((a) => a.id === id) || APES[0];
  const back = state.lang === "ru" ? "терминал" : "terminal";
  return `<div class="modal" data-act="close-card"><div class="panel card" onclick="event.stopPropagation()">
    <button class="ctrl" data-act="close-card" type="button">← ${back}</button>
    <img class="ape-img" style="margin-top:1rem" src="${img(ape.file)}" data-file="${ape.file}" alt="${ape.name}" />
    <p class="xs accent">#${pad(ape.id)}</p>
    <h2 class="crt" style="margin:.25rem 0 0">${ape.name}</h2>
    <p class="xs muted">${ape.floor} · ${ape.owner}</p>
    <pre class="ascii dim" style="margin-top:1rem">┗┅┅┅/ ${t().footer}</pre>
  </div></div>`;
}

function esc(s) {
  const map = { "&": "&" + "amp;", "<": "&" + "lt;", ">": "&" + "gt;" };
  return String(s).replace(/[&<>]/g, (ch) => map[ch]);
}

function pushLog(line) {
  if (!state.logs.length) state.logs.push("> " + (state.blood ? t().helperBlood : t().helperBoot));
  state.logs.push(line);
}

function run(raw) {
  const v = raw.trim().toLowerCase();
  if (!v) return;
  const prompt = state.blood ? "demon>" : "ape>";
  pushLog(prompt + " " + v);
  if (v === "help") pushLog(t().termHint);
  else if (v === "lore") pushLog(t().loreBody[0]);
  else if (v === "wallet") { state.connected = true; pushLog("demo wallet linked. treasury: notapes.ton"); }
  else if (v === "getgems") pushLog(LINKS.market);
  else if (v === "contract") pushLog(CONTRACT);
  else if (v === "blood") {
    state.blood = !state.blood;
    localStorage.setItem("na-theme", state.blood ? "blood" : "dark");
    pushLog(state.blood ? "blood mode" : "dark mode");
  } else if (v === "promo" || v === "humans") pushLog("code HUMANS accepted — WL stub queued");
  else pushLog(t().unknown);
}

function bind() {
  document.querySelectorAll("[data-act]").forEach((el) => {
    el.addEventListener("click", (e) => {
      const act = el.getAttribute("data-act");
      if (act === "lang-ru") { state.lang = "ru"; localStorage.setItem("na-lang", "ru"); }
      else if (act === "lang-en") { state.lang = "en"; localStorage.setItem("na-lang", "en"); }
      else if (act === "theme") {
        state.blood = !state.blood;
        localStorage.setItem("na-theme", state.blood ? "blood" : "dark");
      } else if (act === "size") {
        state.size = state.size === "normal" ? "large" : state.size === "large" ? "compact" : "normal";
        localStorage.setItem("na-size", state.size);
      } else if (act === "wallet") state.connected = !state.connected;
      else if (act === "close-card") state.card = null;
      else return;
      e.preventDefault();
      render();
    });
  });
  document.querySelectorAll("[data-card]").forEach((el) => {
    el.addEventListener("click", () => { state.card = Number(el.dataset.card); render(); });
  });
  const cmd = document.getElementById("cmd-form");
  if (cmd) cmd.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("cmd");
    run(input.value);
    render();
    const next = document.getElementById("cmd");
    if (next) next.focus();
  });
  const promo = document.getElementById("promo-form");
  if (promo) promo.addEventListener("submit", (e) => {
    e.preventDefault();
    const v = new FormData(promo).get("promo") || "promo";
    run(String(v));
    render();
  });
  const preview = document.querySelector(".cursor-preview") || document.body.appendChild(Object.assign(document.createElement("div"), { className: "cursor-preview" }));
  const database = document.getElementById("database-record");
  let recordTimer;
  const showRecord = (label) => {
    const record = v4().terms[label];
    if (!record || !database) return;
    window.clearTimeout(recordTimer);
    database.innerHTML = `<p class="db-status accent">ENTRY: ${esc(label)}</p><p class="xs muted record-loading">loading data...</p>`;
    recordTimer = window.setTimeout(() => {
      database.innerHTML = `<p class="db-status accent">ENTRY: ${esc(label)}</p><p class="xs muted">STATUS: ${esc(record.clearance)}</p><p class="xs">${esc(record.description)}</p><p class="xs muted">REQUIREMENTS: ${esc(record.requirements)}</p><button class="ctrl database-reset" data-act="clear-term" type="button">RETURN TO WAITING</button>`;
      database.querySelector("[data-act='clear-term']").addEventListener("click", clearRecord);
    }, 500);
  };
  function clearRecord() {
    window.clearTimeout(recordTimer);
    if (database) database.innerHTML = `<p class="db-status accent">ENTRY: WAITING</p><p class="xs muted">Hover over an object to display records.</p><p class="db-status">Status: ONLINE</p>`;
  }
  document.querySelectorAll("[data-term]").forEach((el) => {
    el.addEventListener("pointerenter", () => showRecord(el.dataset.term));
    el.addEventListener("focus", () => showRecord(el.dataset.term));
    el.addEventListener("click", (event) => {
      event.preventDefault();
      showRecord(el.dataset.term);
    });
  });
  document.querySelectorAll("[data-act='clear-term']").forEach((el) => el.addEventListener("click", clearRecord));
  document.querySelectorAll("[data-command]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector(button.dataset.target);
      const label = button.textContent.replace(/[\[\]]/g, "").trim();
      pushLog(`> ${label}`);
      pushLog("loading data... opening archive... displaying records...");
      const logs = document.getElementById("logs");
      if (logs) logs.innerHTML += `<p style="margin:0;white-space:pre-wrap">${esc("> " + label)}</p><p style="margin:0;white-space:pre-wrap">${esc("loading data... opening archive... displaying records...")}</p>`;
      window.setTimeout(() => {
        if (target) {
          target.classList.add("command-focus");
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          window.setTimeout(() => target.classList.remove("command-focus"), 1400);
        }
      }, 500);
    });
  });
  const positionPreview = (event) => {
    const gap = 14;
    const rect = preview.getBoundingClientRect();
    const left = Math.min(event.clientX + gap, window.innerWidth - rect.width - 10);
    const top = Math.min(event.clientY + gap, window.innerHeight - rect.height - 10);
    preview.style.left = `${Math.max(10, left)}px`;
    preview.style.top = `${Math.max(10, top)}px`;
  };
  document.querySelectorAll(".preview-link").forEach((el) => {
    el.addEventListener("pointerenter", (event) => {
      preview.textContent = el.dataset.preview;
      preview.classList.add("show");
      positionPreview(event);
    });
    el.addEventListener("pointerleave", () => preview.classList.remove("show"));
  });
  if (!document.documentElement.dataset.interactions) {
    document.documentElement.dataset.interactions = "1";
    document.addEventListener("pointermove", (event) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
      if (preview.classList.contains("show")) positionPreview(event);
    });
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const shift = Math.max(-5, Math.min(5, (window.scrollY % 240) / 48 - 2.5));
        document.documentElement.style.setProperty("--section-shift", shift.toFixed(2));
        document.documentElement.style.setProperty("--scroll-skew", (shift / 3).toFixed(2));
        ticking = false;
      });
    }, { passive: true });
  }
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    document.querySelectorAll(".sec:not(.is-visible)").forEach((section) => observer.observe(section));
  } else {
    document.querySelectorAll(".sec").forEach((section) => section.classList.add("is-visible"));
  }
}

safeRender();
window.addEventListener("error", () => {
  const appEl = document.getElementById("app");
  if (appEl && !appEl.innerHTML.trim()) {
    appEl.innerHTML = '<div class="panel pad"><pre class="ascii">┏┅ / SYSTEM /</pre><p class="lead">BOOT ERROR. RETRY TERMINAL.</p></div>';
  }
});
