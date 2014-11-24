resqr
========

Simple QR response (`res`) wrapper for [qr-image](https://github.com/alexeyten/qr-image) (`qr`)

Overview
--------

  * generate qr images in `png`, `svg`, `eps` and `pdf` formats;
  * create qr images for `sms`, `mms`, `mail`, `phone`, `location` and more;
  * works with [express](https://github.com/strongloop/express) and
  [http](http://www.nodejs.org/api/http.html)/[https](http://www.nodejs.org/api/https.html)

Example:
```javascript
var http = require('http');
var resQr = require('res-qr');

resQr(http).createServer(function (req, res) {
  res.qr('hello world');
}).listen(3000);
```

[More](./examples)

### Methods

  * `res.qr(text, [options])` - Base QR method
  * `res.qrSms(number, message, [options])` - QR format to send a text message
  * `res.qrMms(number, subject, [options])` - QR format to send a multi-media message
  * `res.qrMail(email, [options])` - QR format to send an email
  * `res.qrPhone(number, [options])` - QR format to send a phone number
  * `res.qrYouTube(videoId, [options])` - QR format to send a YouTube URL
  * `res.qrContact(details, [options])` - QR format to send a contact card
    * Optional `details`
      * `firstName`
      * `lastName`
      * `address` - String or Array of address lines
      * `city`
      * `state`
      * `zip`
      * `phone`
      * `email`
  * `res.address(address, [options])` - QR format to send an address
  * `res.location(longitude, latitude, [options])` - QR format to send an address by long/lat

### Options

  * `level` - `M` (default), `L`, `Q`, and `H`.
  * `type` - `png` (default), `svg`, `pdf` and `eps`.
  * `size` - `5` (default) of one module in pixels.
  * `margin` - `4` (default) of white space around QR image.
  * `customize` - `null` (default), function for type `png` to customize bitmap before encoding.
  * `enable` - Toggle attaching methods to response
    * `sms` - `true` (default),
    * `mms` - `true` (default),
    * `mail` - `true` (default),
    * `phone` - `true` (default),
    * `youtube` - `true` (default),
    * `contact` - `true` (default),
    * `address` - `true` (default),
    * `location` - `true` (default)

TODO
----

  * Tests;