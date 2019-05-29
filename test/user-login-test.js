'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /user/login', function() {
    describe('tests for get', function() {
        it('should respond 200 for "successful operation"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/user/login', { 
                'qs': {"username":"mollit eu ipsum","password":"pariatur ut"},
                'headers': {"Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(200);
            expect(response).to.have.schema({"type":"string"});
            return chakram.wait();
        });


        it('should respond 400 for "Invalid username/password supplied"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/user/login', { 
                'qs': {"username":"culpa velit magna eiusmod ut","password":"veniam eiusmod"},
                'headers': {"Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });
    
    });
});