'use strict';

var expect = require('chai').expect;
var chkip = require('../index');

describe('#chkip', function() {
    it('placeholder', function() {
        //var result = chkip('abcd');
        var result = 'ABCD';
        expect(result).to.equal('ABCD');
    });
});