'use strict';

var removeNonNumeric = require('./helpers/removeNonNumeric');

module.exports = function qrSms(number, message, options) {
  this.qr('SMSTO:' + removeNonNumeric(number) + ':' + message, options);
};
