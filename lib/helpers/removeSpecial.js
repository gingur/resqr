'use strict';

var special = new RegExp('[^ \u00c0-\u01ffa-zA-Z\'\\-]', 'g');

module.exports = function removeSpecial(text) {
  return String(text).replace(special, '').trim() || '';
};

