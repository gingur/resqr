'use strict';

var removeNonNumeric = require('./removeNonNumeric');

module.exports = function parsePhone(number) {
  number = removeNonNumeric(number);
  if (number.length === 10) {
    number = '+1' + number;
  } else if (number.length === 11 && number[0] === '1') {
    number = '+' + number;
  }
  return number;
};
