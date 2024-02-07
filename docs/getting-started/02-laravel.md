Laravel Integration
===================

If you are planning to use Telepath together with a [Laravel](https://www.laravel.com) project you can use our Laravel Integration package.

## Benefits

By using the Laravel Integration package you will receive the following benefits:
* Pre-configured and for Telegram network access restricted routes for webhook support
* Variety of Artisan commands to manage your Telegram Bot, creating new Bot commands or using the getUpdates method to 
fetch incoming messages
* Support for configuration via environment variables

## Installation

This package can be installed via composer:

`composer require telepath/laravel`

The service provider for your Laravel project automatically gets installed and put in place.

## Usage

Wherever you need to call a Telegram Bot API method, you can get the `Bot` instance via Telegrams Service Container. 

```php
$bot = resolve(\Telepath\Bot::class);
```

This means you can make use of autowiring and request the instance via the `__construct` method in most places like in 
this example with constructor properties:

```php
public function __construct(
    protected Bot $bot
) {}
```

### Long-polling for development

While working on your bot you might want to poll the Telegram servers for new Updates. You can do that by executing the 
fetch command.

```php artisan telepath:fetch```

### Webhooks for production

You can register a webhook to the Telegram servers by calling the following command and either pass it interactively or 
via argument:

`php artisan telepath:set-webhook`

This is recommended to do while deploying your bot.

:::tip Pro Tip
You can use webhooks in your development environment either by tunneling HTTPS to your local machine.

If you are running a custom [Telegram Bot API Server](https://github.com/tdlib/telegram-bot-api/) you can even use 
HTTP URLs for the webhook. This way you don't need a valid SSL certificate.
:::

## Overwrite the defaults

If you wish to make modifications to the bundled config or routes file you can publish those into your own application with

`php artisan vendor:publish`

Select the corresponding `telepath-config` or `telepath-routes` tag or alternatively the TelepathServiceProvider for both files.
