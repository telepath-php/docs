Laravel User
============

The Laravel User package provides a `User` model and a `UserProvider` class that you can use to authenticate users in your Laravel application.

:::danger Beware!
This package is still in development and should not be used in production.
:::

## Installation

Install the Laravel User package via composer:

```bash
composer require telepath/laravel-user
```

_Laravel User_ comes with a `telegram_users` migration that you should install:

```bash
php artisan migrate
```

## Configuration

Open up your `config/auth.php` file and add the following provider:

```php
'providers' => [
    'users' => [
        'driver' => 'eloquent',
        'model' => App\Models\User::class,
    ],

    // highlight-start
    'telegram' => [
        'driver' => 'telegram',
        // 'model' => Telepath\Laravel\TelegramUser\Models\User::class,
        // 'bot' => 'main',
        // 'expire' => 24 * 60 * 60,
    ],
    // highlight-end
],
```

:::info 
The `model` key is optional and can be used to specify the model that should be used to authenticate users. If you don't specify a model, the package will use the `User` model that comes with the package.

The `bot` key is optional and can be used to specify the bot that should be used to authenticate users. If you don't specify a bot, the package will use the `main` bot. This corresponds to your bot configuration inside the `telepath/laravel` package.

The `expire` key is optional and can be used to specify the number of seconds that a Telegram login link should be valid for. If you don't specify a value, the package will use 24 hours.
:::

After that change your Authentication Guard to use the newly added provider:

```php
'guards' => [
    'web' => [
        'driver' => 'session',
        // highlight-next-line
        'provider' => 'telegram',
    ],
],
```