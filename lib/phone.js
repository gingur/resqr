'use strict';

var parsePhone = require('./helpers/parsePhone');

module.exports = function qrPhone(number, options) {
  this.qr(parsePhone(number), options);
};
