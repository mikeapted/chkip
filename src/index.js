'use strict';

const aws = require('./aws');

module.exports = function(callback) {
  aws((myIP) => {
    callback(myIP.trim());
  });
}