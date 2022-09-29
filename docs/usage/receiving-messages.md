---
sidebar_position: 2
---

Receiving Messages
==================

There are two ways of receiving updates, like messages:

* **Long Polling**: Your bot polls repeatedly the Telegram server and asks if there are new 
  updates. If there is nothing new the request hangs until it timeouts. 
* **Webhook**: 

## Polling
```php
$bot->handlePolling();
```

## Webhook

```php
$bot->handleWebhook();
```