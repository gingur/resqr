'use strict';

var express = require('../')(require('express'));

express().get('/', function (req, res) {
  res.qr('hello world');
}).listen(3000);
