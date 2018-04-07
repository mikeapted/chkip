'use strict';

const aws = require('./aws');

aws((myIP) => {
  console.log(myIP);
});
