---
sidebar_position: 2
---

Installation
============

This package can be installed via composer:

`composer require telepath/telepath`

## Configuration

To be able to interact with Telegram servers you need to create an instance and pass your Telegram Bot API Token:
```php
$bot = new \Telepath\TelegramBot('your api token');
```

That's already enough to send messages and other media.