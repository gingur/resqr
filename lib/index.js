'use strict';

var _ = require('lodash'),
  optionsHelper = require('./helpers/options'),
  constants = require('./constants');

module.exports = function resQr(http, opts) {
  var options = _.defaults(opts || {}, {
    level: constants.levels.m,
    type: constants.types.png,
    margin: 4,
    size: 5,
    customize: null,
    enable: {
      sms: true,
      mms: true,
      mail: true,
      phone: true,
      youtube: true,
      contact: true,
      address: true,
      location: true
    }
  });
  var applyOptions = _.partial(optionsHelper, options),
    proto = http.ServerResponse && http.ServerResponse.prototype
      || http.response
      || http.prototype
      || http;
  proto.qr = _.wrap(require('./qr'), applyOptions);
  proto.qrSms = options.enable.sms ? _.wrap(require('./sms'), applyOptions) : _.noop;
  proto.qrMms = options.enable.mms ? _.wrap(require('./mms'), applyOptions) : _.noop;
  proto.qrMail = options.enable.mail ? _.wrap(require('./mail'), applyOptions) : _.noop;
  proto.qrPhone = options.enable.phone ? _.wrap(require('./phone'), applyOptions) : _.noop;
  proto.qrYouTube = options.enable.youtube ? _.wrap(require('./youtube'), applyOptions) : _.noop;
  proto.qrContact = options.enable.contact ? _.wrap(require('./contact'), applyOptions) : _.noop;
  proto.qrAddress = options.enable.address ? _.wrap(require('./address'), applyOptions) : _.noop;
  proto.qrLocation = options.enable.location ? _.wrap(require('./location'), applyOptions) : _.noop;
  return http;
};
