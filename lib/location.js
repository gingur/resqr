'use strict';

module.exports = function qrLocation(lng, lat, options) {
  this.qrAddress(lng + ',' + lat, options);
};
