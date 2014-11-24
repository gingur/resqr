'use strict';

module.exports = function qrYouTube(id, options) {
  this.qr('https://www.youtube.com/watch?v=' + id, options);
};
