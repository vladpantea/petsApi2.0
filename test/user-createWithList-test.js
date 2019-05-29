'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /user/createWithList', function() {
    describe('tests for post', function() {
        it('should respond default for "successful operation"', function() {
            var response = request('post', 'http://petstore.swagger.io/v2/user/createWithList', { 
                'body': [{},{}],
                'headers': {"Accept":"application/xml"},
                'time': true
            });

            return chakram.wait();
        });
    
    });
});