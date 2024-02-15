Middleware
==========

You can use middleware classes to manipulate `Update`s before they are processed or to prevent their processing completely. For example, a middleware can be used to check if the user is allowed to execute a bot command. If the user is not allowed, the middleware can prohibit the execution of the bot command before it is even called.

To use middlewares, you must first create a middleware class and then assign it to one or more bot commands by using the `Middleware` attribute.

## Creating the middleware

A middleware is an arbitrary PHP class that extends `Telepath\Middleware\Middleware`. It needs to implement at least a `handle` method with the following signature:

```php
public function handle(Update $update, callable $next, array $config = [])
```

The first parameter is an instance of the incoming `Update`.

The second parameter is a callback function which must be called to pass the `Update` to the next middleware and finally to the corresponding `Update` handler. To prevent the `Update` from being processed any further, the middleware must return without calling this callback function. If the processing should continue, you need to call `return $next($update);`, pass the `Update` and return what comes back.

:::tip Pro Tip!
You can even modify the `Update` before passing it on. This way, you can manipulate the `Update` to your liking.
:::

The last parameter can be used to configure the middleware behavior furthermore. Configuration can be applied when the middleware is assigned to an `Update` handler.

An example of a middleware to execute bot commands only for a specific user would be

```php
class RestrictedToUserId extends \Telepath\Middleware\Middleware
{
    public function handle(Update $update, callable $next, array $config = [])
    {
        $fromId = $update->user()->id;
        $allowedUserId = $config['allowed_user_id'] ?? null;

        // Could not identify sender or missing configuration
        if (is_null($fromId) || is_null($allowedUserId)) {
            return null;
        }

        // User is not allowed
        if ($fromId !== $allowedUserId) {
            return null;
        }

        return $next($update);
    }
}
```

## Using the middleware
To use the middleware, it must be assigned as the attribute `Telepath\Middleware\Attributes\Middleware` to an `Update` handler as follows:

```php
#[\Telepath\Middleware\Attributes\Middleware(RestrictedToUserId::class)]
```

The attribute can be repeated to assign multiple middlewares to the same method.

:::tip Pro Tip
You can also assign middlewares to a class. This way every method inside the class will be affected by the middleware.
:::

Middlewares can optionally be configured using named parameters after the middleware class name. They will be passed as an associative array `$config` to the `handle` method.

```php
#[\Telepath\Middleware\Attributes\Middleware(RestrictedToUserId::class, allowed_user_id: 1234567890)]
```
