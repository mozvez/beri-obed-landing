# Лендинг «Бери Обед»

Адаптивный лендинг доставки обедов для организаций во Владимире.

## Запуск

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm run start
```

## Заявки на почту

Заявки отправляются на адрес из переменной `LEAD_EMAIL_TO`. По умолчанию используется:

```env
LEAD_EMAIL_TO=beriobed2025@gmail.com
```

Чтобы письма реально уходили, создайте `.env.local` в корне проекта и заполните SMTP-доступы:

```env
SMTP_HOST=smtp.mail.ru
SMTP_PORT=465
SMTP_USER=your-login@example.com
SMTP_PASSWORD=your-app-password
LEAD_EMAIL_TO=beriobed2025@gmail.com
```

Важно: для большинства почтовых сервисов нужен пароль приложения, а не обычный пароль от почты.

Форма отправляет данные в `POST /api/lead`. Обработка находится в `src/app/api/lead/route.ts`, отправка письма - в `src/lib/email.ts`.

Если SMTP не заполнен, в development заявка выводится в лог сервера и приложение не падает.

## Дополнительные интеграции

Можно дополнительно указать webhook CRM, Make, n8n, Albato или другого сервиса:

```env
LEAD_WEBHOOK_URL=https://your-webhook-url
```

Яндекс Метрика подключается через:

```env
NEXT_PUBLIC_YANDEX_METRIKA_ID=
```

События: `lead_form_submit`, `menu_request`, `calculate_click`, `phone_click`, `messenger_click`, `catalog_click`, `delivery_address_request`.

## Контент и настройки

Телефон, минимальный заказ, зона доставки, часы работы, ссылки на мессенджеры и реквизиты меняются в `src/config/site.ts`.

Тексты карточек, форматов питания и FAQ меняются в `src/config/content.ts`.

## Изображения

В `public/images` лежат временные SVG-заглушки. Замените их на реальные лицензированные фотографии блюд с теми же именами или обновите пути в `src/app/page.tsx`.

Логотип подключен из `public/logo/beri-obed-logo.jpg` и используется в шапке, первом экране и подвале.

## Что нужно заполнить перед публикацией

- реальные фотографии блюд;
- ссылки WhatsApp и Telegram в `src/config/site.ts`;
- юридические реквизиты компании;
- production URL в `NEXT_PUBLIC_SITE_URL`;
- SMTP-доступы для отправки заявок на `beriobed2025@gmail.com`;
- при необходимости webhook/Telegram/CRM-интеграцию.
