---
sidebar_position: 3
---

Laravel Integration
===================

If you are planning to use Telepath together with a [Laravel](https://www.laravel.com) project you can use our Laravel Integration package.

## Benefits

By using the Laravel Integration package you will receive the following benefits:
* Pre-configured and for Telegram network access restricted routes for webhook support
* Variety of Artisan commands to manage your Telegram Bot, creating new Bot commands or using the getUpdates method to fetch incoming messages
* Support for configuration via environment variables

## Installation

This package can be installed via composer:

`composer require telepath/laravel`

The service provider for your Laravel project automatically gets installed and put in place.

## Configuration

If you wish to make modifications to the configuration you can publish the configuration file to your config folder with the following command:

`php artisan vendor:publish telepath-config`

If you want to modify or delete the pre registered route for webhook events, you can publish its configuration with the following command to your project and adjust it to your needs:

`php artisan vendor:publish telepath-routes`

## Usage

Supporting the autowiring mechanism of Laravel you can access the bot instance as easy as follows:

```php
public function __construct(
  protected TelegramBot $bot
) {}
```
