'use strict';

const aws = require('./aws');

module.exports = function(number, locale) {
  aws((myIP) => {
    return myIP;
  });
}