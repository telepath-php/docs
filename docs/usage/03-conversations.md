Conversations
=============

We integrated Conversations directly into the library.

But for this to work, we need a CachingInterface.

## Setup

The `TelegramBot` class has an `enableCaching` method that takes every PSR-6 or PSR-16 compatible CacheInterface.

:::tip Pro Tip
We recommend using the [Symfony Cache Component](https://symfony.com/doc/current/components/cache.html) since it has a 
variety of implemented adapters like a `FilesystemAdapter`, a `RedisAdapter` or even `PDOAdapter` and `DoctrineDbalAdapter`.
:::

```php
$bot->enableCaching(
    new \Symfony\Component\Cache\Adapter\FilesystemAdapter(
        directory: __DIR__ . '/../../cache/telepath'
    )
);
```

## Start a Conversation

To start a conversation create a class that extends the Conversation class and contains a method with an attached
handler. In this example we are using the [previously](./handlers#defining-your-own-handler) created Greeting handler, 
that reacts to text messages containing _hey_, _hi_ or _hello_.

```php
class PersonalInfo extends \Telepath\Conversations\Conversation
{

    #[Greeting]
    public function greeting(Update $update)
    {
        //
    }
```

## Keep a conversation going

To keep a conversation going call `$this->next()` and pass the name of the next method to call.
```php
    #[Greeting]
    public function greeting(Update $update)
    {
        $this->bot->sendMessage(
            $update->message->chat->id,
            'Hey, what's your name?'
        );
    
        $this->next('name');
    }
    
    public function name(Update $update)
    {
        //
    }
```

:::tip Pro Tip
By default the next method assumes you want to stay in the current class. But it is also possible to pass a class name
as a second argument.
:::"

## End a Conversation

To end a conversation call `$this->end()`. This removes the conversation data from the cache and therefore forgets 
everything attached to the conversation state.

```php
    public function name(Update $update)
    {
        $name = $update->message->text;
    
        $this->bot->sendMessage(
            $update->message->chat->id,
            "Nice to meet you {$name}!"
        );
    
        $this->end();
    }
```

## Remember information

Everytime you call the `$this->next()` method Telepath will serialize and save everything attached to your class into
the CacheAdapter. This means you can easily save arbitrary information as properties inside your Conversation class.
As long as they're not private they get saved and restored as soon as the conversation continues.

:::caution Important
It is important that you call `$this->next()` after setting the state you want to remember. If you change a class
property afterwards this change gets not reflected in the cached state.
:::