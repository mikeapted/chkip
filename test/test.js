'use strict';

const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-match'));

var chkip = require('../src/index');

describe('#chkip', function() {
    it('validate ip format', function(done) {
        chkip((result) => {
          console.log(result);
          expect(result).to.match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/);
          done();
        });        
    });
});