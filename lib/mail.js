'use strict';

module.exports = function qrMail(email, options) {
  this.qr('mailto:' + email, options);
};
