'use strict';

var removeNonNumeric = require('./helpers/removeNonNumeric');

module.exports = function qrMms(number, subject, options) {
  this.qr('MMS:' + removeNonNumeric(number) + ':' + subject, options);
};
