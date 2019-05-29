'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /pet/findByStatus', function() {
    describe('tests for get', function() {
        it('should respond 200 for "successful operation"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/pet/findByStatus', { 
                'qs': {"status":["pending","pending","sold","available"]},
                'headers': {"Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(200);
            expect(response).to.have.schema({"type":"array","items":{"type":"object","required":["name","photoUrls"],"properties":{"id":{"type":"integer","format":"int64"},"category":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"title":"Pet category","xml":{"name":"Category"},"description":"A category for a pet","example":{"name":"name","id":6}},"name":{"type":"string","example":"doggie"},"photoUrls":{"type":"array","xml":{"name":"photoUrl","wrapped":true},"items":{"type":"string"}},"tags":{"type":"array","xml":{"name":"tag","wrapped":true},"items":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"title":"Pet Tag","xml":{"name":"Tag"},"description":"A tag for a pet","example":{"name":"name","id":1}}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}},"title":"a Pet","xml":{"name":"Pet"},"description":"A pet for sale in the pet store","example":{"photoUrls":["photoUrls","photoUrls"],"name":"doggie","id":0,"category":{"name":"name","id":6},"tags":[{"name":"name","id":1},{"name":"name","id":1}],"status":"available"}}});
            return chakram.wait();
        });


        it('should respond 400 for "Invalid status value"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/pet/findByStatus', { 
                'qs': {"status":["sold"]},
                'headers': {"Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });
    
    });
});