'use strict';

const https = require('https');
const CHECK_URL = 'https://checkip.amazonaws.com/';

/**
 * Return current IP address using https://checkip.amazonaws.com/
 * @return {string}
 */
module.exports = function() {
  https.get(CHECK_URL, (resp) => {
    let data = '';
   
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
   
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      return data;
    });
   
  }).on('error', (err) => {
    console.log('Error: ' + err.message);
    return data;
  });
};