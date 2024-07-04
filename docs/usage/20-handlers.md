Using Handlers
==============

Handlers are your entrypoint for every interaction starting through a user on Telegram.

In Telepath every Handler is defined with at least one PHP Attribute.

## Setup

First tell Telepath which directory to scan for the use of handlers.

```php
$bot->discoverPsr4(__DIR__ . '/../Telegram');
```

:::caution Important
Telepath expects the files in this directory to be PSR-4 compliant.

This means that every file represents a single class and the namespace hierarchy matches the directory structure.
The base namespace will be discovered automatically.
:::

## Define Handlers

All basic types in Telegram have its own Handler and there are a few additional handlers for convenience.

The most common one is a Command. We will use this as an example.
It doesn't matter how your class and your methods are organized. The only important thing is, that those methods that
have a handler attached are public.

Parameters will get resolved by Telepath's Service Container via Dependency Injection. So your method can have everything you need (and can be resolved) as parameters. Especially `Telepath\Telegram\Update` and `Telepath\Bot` instances to get the data from the Update or to call additional API methods on the Bot instance.

```php
namespace App\Telegram\Commands;

use Telepath\Handlers\Message\Command;
use Telepath\Telegram\Update;

class Start
{

    #[Command('start')]
    public function start(Update $update)
    {
        //
    }

}
```

As long as the class shown above can be found inside the path you specified in the `discoverPsr4` call this will work.

## List of available Handlers

| Handler             | Gets called if the Update contains...                             |
|:--------------------|:------------------------------------------------------------------|
| Message             | message                                                           |
| _MessageType_       | message of a specified type i. e. a photo or a dice                |
| _Text_              | message of type text that matches the specified criteria           |
| _Command_           | message of type text containing a command                         |
| EditedMessage       | edited_message                                                    |
| ChannelPost         | channel_post                                                      |
| EditedChannelPost   | edited_channel_post                                               |
| BusinessConnection  | business_connection                                               |
| BusinessMessage     | business_message |
| EditedBusinessMessage | edited_business_message |
| DeletedBusinessMessages | deleted_business_messages |
| MessageReaction | message_reaction |
| MessageReactionCount | message_reaction_count |
| InlineQuery         | inline_query                                                      |
| ChosenInlineResult  | chosen_inline_result                                              |
| CallbackQuery       | callback_query                                                    |
| _CallbackQueryData_ | callback_query including data that matches the specified criteria  |
| ShippingQuery       | shipping_query                                                    |
| PreCheckoutQuery    | pre_checkout_query                                                |
| Poll                | poll                                                              |
| PollAnswer          | poll_answer                                                       |
| MyChatMember        | my_chat_member                                                    |
| ChatMember          | chat_member                                                       |
| ChatJoinRequest     | chat_join_request                                                 |
| ChatBoost | chat_boost |
| RemovedChatBoost | removed_chat_boost |

## Defining your own handler

It's easily possible to create your own Handlers that are responsible for specific types of Updates or specific content.

Create a class that extends `Telepath\Handlers\Handler` and implements the `responsible` method. This method gets the
bot instance and the incoming Update and returns true, if it feels responsible for this Update.

To define your own handler as Attribute, you need to add the `\Attribute` attribute to your new class. Give it the
corresponding constants to make it target methods and make it repeatable.

In this example we create a handler that reacts only to text messages that contain a greeting like hey, hi or hello.

```php
namespace App\Telegram\Handlers;

use Telepath\Handlers\Handler;
use Telepath\Telegram\Update;
use Telepath\Bot;

#[\Attribute(\Attribute::TARGET_METHOD | \Attribute::IS_REPEATABLE)]
class Greeting extends Handler
{
    public function responsible(Bot $bot, Update $update): bool
    {
        if ($update->message?->text === null)
        {
            return false;
        }

        return preg_match('/hey|hi|hello/i', $update->message->text) === 1;
    }

}
```