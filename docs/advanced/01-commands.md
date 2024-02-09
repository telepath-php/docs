Commands
========

Telepath comes with its own CLI helper tool called `telepathy` to help you run simple Telegram API commands from the command line.

## Usage

If you call `telepathy` without any arguments, it will show you the available commands:

### Global options
There are global options that are available for all commands. They can be specified as command line arguments or in a `.env` file.

| cli option  | cli shortcut | .env variable        | description                                                                                               |
|-------------|:-------------|----------------------|-----------------------------------------------------------------------------------------------------------|
| `--token`   | `-t`         | `TELEGRAM_API_TOKEN` | Telegram Bot API Token for your bot to use.                                                               |
| `--api-url` |              | `TELEGRAM_API_URL`   | If you want to use a local bot api server, this is the URL. Defaults to the official Telegram API server. |
| `--proxy`   |              | `TELEPATH_PROXY`     | Sends requests through a specified proxy address. Defaults to no proxy.                                   |


### Commands

#### `./telepathy bot:info`

This corresponds to the [getMe](https://core.telegram.org/bots/api#getme) API function and will return information about the bot. You can test your API token with this command.

#### `./telepathy server:close`

This corresponds to the [close](https://core.telegram.org/bots/api#close) API function and will close the bot instance if you want to move from one local server to another.

#### `./telepathy server:logout`

This corresponds to the [logout](https://core.telegram.org/bots/api#logout) API function and will log out the bot from the cloud Bot API server before moving it to a local server.

#### `./telepathy webhook:delete`

This corresponds to the [deleteWebhook](https://core.telegram.org/bots/api#deletewebhook) API function and will delete the webhook if you want to switch back to long polling.

| Option                           | Description               |
|----------------------------------|---------------------------|
| `--drop-pending-updates` or `-d` | Drop all pending updates. |

#### `./telepathy webhook:info`

This corresponds to the [getWebhookInfo](https://core.telegram.org/bots/api#getwebhookinfo) API function and will return the current webhook status.

#### `./telepathy webhook:set`

This corresponds to the [setWebhook](https://core.telegram.org/bots/api#setwebhook) API function and will set the webhook to the specified URL.

| Argument | Optional | Description                                |
|----------|:---------|--------------------------------------------|
| url      | no       | The hostname the webhook should be set to. |

| Option                   | Shortcut | Description                                                                                                                                                                    |
|--------------------------|:---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--certificate`          | `-c`     | Path to your public key certificate                                                                                                                                            |
| `--ip-address`           | `-i`     | The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS                                                                |
| `--max-connections`      | `-m`     | The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery                                                                                |
| `--allowed-updates`      | `-a`     | A list of the update types you want your bot to receive. For example, specify --allowed-updates message --allowed-updates edited_channel_post --allowed-updates callback_query |
| `--drop-pending-updates` | `-d`     | Drop all pending updates                                                                                                                                                       |
| `--secret-token`         | `-s`     | A secret token to be sent in a header “X-Telegram-Bot-Api-Secret-Token” in every webhook request                                                                               |




## Laravel Commands
If you're using the `telepath/laravel` package you can use the following `php artisan` commands:

####`php artisan telepath:fetch`

Fetches Telegram updates periodically (using [long polling](https://en.wikipedia.org/wiki/Push_technology#Long_polling)) and dispatches them to the Laravel application.

| Option  | Shortcut | Description                                                           |
|---------|:---------|-----------------------------------------------------------------------|
| `--bot` | `-b`     | Identifier of the bot to use. Uses the default bot, if not specified. |

:::caution Important
Remember to restart this command after any code changes so they take effect.
:::

#### `php artisan telepath:install`

Installs the package. This command publishes the configuration file, ensures the existence of the `app/Telepath` folder and appends the possible environment variables to your .env file. 

| Option    | Shortcut | Description              |
|-----------|:---------|--------------------------|
| `--force` | `-f`     | Overwrite existing files |


#### `php artisan telepath:set-webhook`

| Argument | Optional? | Description                                |
|----------|:----------|--------------------------------------------|
| hostname | yes       | The hostname the webhook should be set to. |

| Option                   | Shortcut | Description                                                             |
|--------------------------|:---------|-------------------------------------------------------------------------|
| `--bot`                  | `-b`     | Identifier of the bot to use. If not specified the default bot is used. |
| `--drop-pending-updates` | `-d`     | Drop all pending updates.                                               |

