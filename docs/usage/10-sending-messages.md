Sending Messages
================

After you have your bot instance, you can use all the available methods 
documented in the [Telegram Bot API documentation](https://core.telegram.org/bots/api).

I. e. use the `sendMessage` method to send a message:
```php
$bot->sendMessage($chatId, $text);
```

The order of the arguments are the same as in the official documentation.
If you want to use a later argument, you don't have to pass all the default values in between.
You can use PHP 8's named arguments for this:

```php
$bot->sendMessage($chatId, $text, parse_mode: 'HTML', disable_notification: true);
```

:::note
This is recommended for every optional argument, since it can happen, that new arguments get
inserted in between with a new Telegram Bot API version.
:::