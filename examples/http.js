'use strict';

var http = require('../')(require('http'));

http.createServer(function (req, res) {
  res.qr('hello world');
}).listen(3000);
