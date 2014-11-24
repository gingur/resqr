'use strict';

module.exports = function qrAddress(address, options) {
  this.qr('https://www.google.com/maps?q=' + address, options);
};
