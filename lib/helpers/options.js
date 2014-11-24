'use strict';

var _ = require('lodash');

module.exports = function optionsHelper(options, fn) {
  var args = _.toArray(arguments).slice(2),
    length = args.length;
  if (length === fn.length) {
    args[length - 1] = _.defaults(args[length - 1], options);
  } else {
    args.push(options);
  }
  fn.apply(this, args);
};
