Installation
============

:::info
If you want to use this bot with Laravel, skip to the [Laravel Integration](./02-laravel.md) page.
:::

This package can be installed via composer:

`composer require telepath/telepath`

## Configuration

To be able to interact with Telegram servers you need to create an instance and pass your Telegram Bot API Token:
```php
$bot = new \Telepath\TelegramBot('your api token');
```

That's already enough to send messages and other media.

### Custom Telegram Bot API Server

If you're using a custom Telegram Bot API Server, you need to pass the URL as an additional parameter to the constructor
of TelegramBot.

```php
$bot = new \Telepath\TelegramBot('your api token', baseUri: 'http://127.0.0.1:8081');
```

:::caution Important
Please read carefully how to move a bot to a local server in the [documentation](https://github.com/tdlib/telegram-bot-api/#moving-a-bot-to-a-local-server).
:::