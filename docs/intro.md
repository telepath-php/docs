---
slug: /
sidebar_position: 1
---

Introduction
============

Telepath is a modern framework-agnostic library to create Telegram Bots in PHP.

It stands out by generating a lot of PHP Code automatically from the Telegram Bot API documentation and using modern PHP features like Attributes and Named Parameters.

:::danger Before You Start
We want to make use of modern PHP all the way but the development of PHP doesn't stop. This means if there will be a feature in a new PHP version that makes sense to use in this package, we will.

So beware of that and only use this library if you're running in a setup where you can easily upgrade to new PHP versions when they get released.
:::

## Other libraries

- [Nutgram](https://nutgram.dev/):
  Nutgram is quite similar to this library although some aspects like how you define a Handler is completely different.
- [PHP Telegram Bot](https://github.com/php-telegram-bot/core):
  PHP Telegram Bot was my goto library before I wrote my own. But a lot of things are not quite intuitive.
  _Disclaimer: I'm a maintainer there too._
- [Telegraph](https://github.com/defstudio/telegraph):
  Integration for Laravel that makes use of a highly fluent syntax.