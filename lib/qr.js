'use strict';

var qrImg = require('qr-image'),
  constants = require('./constants'),
  contentTypes = constants.contentTypes;
var httpRegex = new RegExp('^https?://', 'i');
module.exports = function qr(text, options) {
  text = String(text).trim();
  if (httpRegex.exec(text)) {
    var index = text.indexOf('?');
    if (index >= 0) {
      text = text.substr(0, index) + encodeURI(text.substr(index));
    }
  }
  var code = qrImg.image(text, {
    'ec_level': options.level,
    'type': options.type,
    'size': options.size,
    'margin': options.margin,
    'customize': options.customize
  });
  this.setHeader('Content-Type', contentTypes[options.type]);
  code.pipe(this);
};
