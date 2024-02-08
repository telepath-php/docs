Receiving Updates
=================

There are two ways of receiving updates, like incoming messages and interactions:

## Polling

Your bot polls repeatedly the Bot API server and asks if there are new updates. If there is nothing new the request 
waits until it timeouts or a new `Update` becomes available. 

Telepath provides an implementation of this polling feature in the `handlePolling` method of the `Bot` class.

```php
$bot->handlePolling();
```
With optional parameters you can also define if you only want to received `Update` of a certain type and define a timeout.

:::caution Important
Beware that this method call will never return.
:::

Keep in mind, that the delayed polling of updates will also cause your bot reacting less responsive. If you need fast and real-time answers from your bot we recommend using webhooks.

## Webhook

A webhook is a HTTPS POST request from the Bot API server to your bot with the data of a new `Update`. Each `Update` will result in an request the webserver of your bot must work on. 

### Register webhook
Webhooks must be registered at the Bot API server and require a webserver which can receive HTTPS requests.

To register the webhook Telepath offers the `webhook:set` command. You can specify the URL of your endpoint using the `url` parameter.

For more information of supported options please also have a look into the [Telegram documentation](https://core.telegram.org/bots/api#setwebhook).

You may also want to have a look into the [recommendations from Telegram for the secure usage of webhooks](https://core.telegram.org/bots/webhooks).

### Handle incoming requests
To answer incoming `Update` webhook calls you can simply call the `handleWebhook` method of the `Bot` class.

```php
$bot->handleWebhook();
```
This method will transform the data from the webhook into a `Update` and process it automatically.

### Get information about current webhook
Telepath offers the command `webhook:info` to retrieve several information about the currently registered webhooked at the Bot API server.

### Delete webhook
If you want to change the endpoint of your webhook or use the polling method instead of webhooks you must delete the webhook at the Bot API server. To do this you can use the `webhook:delete` command.