Files 
=====

## Receiving files

To work with received files like [Photos](https://core.telegram.org/bots/api#photosize), you need to request the file 
from the Bot API server. This is done by calling the `getFile` method of the `Bot` class. This method returns a 
[`File`](https://core.telegram.org/bots/api#file) object which contains the file_id and the file_path.

```php
$photo = $update->message->photo[0]; // Use the PhotoSize instance that fits your needs regarding file dimensions/size
$file = $bot->getFile($photo->file_id); // Request file from Bot API server

$file->saveTo('path/to/save/file.jpg'); // Save file to disk
// or
$data = $file->getContents(); // Get file contents
```

## Sending files
To send files you can use the `InputFile` class. This class is a wrapper for files that should be uploaded to the Bot API server.

If the file is already on Telegram servers and you have the file_id or if the file is already accessible via an HTTP(S) 
URI, simply pass the file_id or the URI directly to the corresponding parameter as seen in the commented-out line.

```php
$this->bot->sendPhoto(
    chat_id: $chat->id,
    photo: InputFile::fromFile(__DIR__.'/photos/vacation.jpeg'),
    // photo: 'https://example.com/path/to/photo.jpg',
    // photo: 'vPPYSJTxFxwCY3xLsH4-7MdzDprf7quRR7Tcg2doPTdQTH3ih2EdHebXCn3Ja8YzgkMZGMoXzwMW8WrJhK',
    caption: 'Awesome vacation photo!'
);
```

Additionally to the `fromFile` method, you can also use the `fromResource()` or `fromStream()` methods if you already 
have a file resource or a `Psr\Http\Message\StreamInterface`.
