'use strict';

var nonNumeric = new RegExp('[^0-9]', 'g');

module.exports = function removeNonNumeric(number) {
  return String(number).replace(nonNumeric, '') || '';
};
