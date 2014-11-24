'use strict';

var _ = require('lodash'),
  parsePhone = require('./helpers/parsePhone'),
  validEmail = require('./helpers/validEmail'),
  removeSpecial = require('./helpers/removeSpecial'),
  removeNonNumeric = require('./helpers/removeNonNumeric');

function parseName(details) {
  var name = 'Unknown',
    last = false,
    first = false;
  if (details.lastName) {
    last = removeSpecial(details.lastName) || false;
  }
  if (details.firstName) {
    first = removeSpecial(details.firstName) || false;
  }
  if (first || last) {
    if (last) {
      name = last;
      if (first) {
        name += ', ' + first;
      }
    } else {
      name = first;
    }
  }
  return name;
}

function parseAddress(details) {
  var address = [];
  if (_.isString(details.address)) {
    var addressText = removeSpecial(details.address) || false;
    if (addressText) {
      address.push(addressText);
    }
  } else if (_.isArray(details.address) && details.address.length) {
    _.forEach(details.address, function (addy) {
      addy = removeSpecial(addy) || false;
      if (addy) {
        address.push(addy);
      }
    });
  }
  if (details.city) {
    var city = removeSpecial(details.city) || false;
    if (city) {
      address.push(city);
    }
  }
  var stateAndZip = false;
  if (details.state) {
    var state = removeSpecial(details.state) || false;
    if (state) {
      stateAndZip = state;
    }
  }
  if (details.zip) {
    var zip = removeNonNumeric(details.zip) || false;
    if (zip) {
      if (stateAndZip) {
        stateAndZip += ' ' + zip;
      } else {
        stateAndZip = zip;
      }
    }
  }
  if (stateAndZip) {
    address.push(stateAndZip);
  }
  return address.length
    ? 'ADR:' + address.join(',')
    : false;
}

module.exports = function qrContact(details, options) {
  details = details || {};
  var sections = [parseName(details)],
    address = parseAddress(details);
  if (address) {
    sections.push(address);
  }
  if (details.phone) {
    var phone = parsePhone(details.phone);
    if (phone) {
      sections.push('TEL:' + phone);
    }
  }
  if (details.email) {
    var email = String(details.email).trim() || false;
    if (email) {
      if (validEmail(email)) {
        sections.push('EMAIL:' + email);
      }
    }
  }
  this.qr(sections.join(';') + ';', options);
};
