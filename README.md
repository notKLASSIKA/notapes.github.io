# NOTAPES site

Один и тот же сайт работает:

1. Как обычная страница в Google / Яндекс.
2. Как Telegram Mini App внутри бота.

## Что уже внутри

- лендинг коллекции
- SEO-теги, sitemap, robots
- адаптация под Telegram WebApp
- ссылки на Getgems, канал, чат, бота и X

## Как выложить в интернет

Нужен любой HTTPS-хостинг:

- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel

После деплоя замени `https://notapes.art` в `index.html`, `robots.txt` и `sitemap.xml` на свой домен.

## Как открыть в Telegram

1. Создай бота в @BotFather (или используй @notfunrobot).
2. `/newapp` → укажи HTTPS URL этого сайта.
3. В описании бота поставь кнопку Menu Button на Mini App.

Без HTTPS Telegram Mini App не откроется.

## Что я не могу сделать сам

- купить домен
- привязать BotFather
- залить живые картинки обезьян без ваших файлов

Пришли 6–12 PNG обезьян — вставлю реальные превью вместо заглушек.
