Receiving Updates
=================

There are two ways of receiving updates, like incoming messages and interactions:

## Polling

Your bot polls repeatedly the Telegram server and asks if there are new updates. If there is nothing new the request 
waits until it timeouts or a new Update becomes available.

```php
$bot->handlePolling();
```

:::caution Important
Beware that this method call will never return.
:::

## Webhook

Register a webhook with Telegram that should be called if there is a new Update available.

```php
$bot->handleWebhook();
```