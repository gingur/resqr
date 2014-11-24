'use strict';

var validEmail = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}'); // jshint ignore:line

module.exports = function validEmail(email) {
  return validEmail.test(email);
};
