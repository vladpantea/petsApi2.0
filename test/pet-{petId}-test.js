'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /pet/{petId}', function() {
    describe('tests for get', function() {
        it('should respond 200 for "successful operation"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/pet/73017854', { 
                'headers': {"Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(200);
            expect(response).to.have.schema({"type":"object","required":["name","photoUrls"],"properties":{"id":{"type":"integer","format":"int64"},"category":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"title":"Pet category","xml":{"name":"Category"},"description":"A category for a pet","example":{"name":"name","id":6}},"name":{"type":"string","example":"doggie"},"photoUrls":{"type":"array","xml":{"name":"photoUrl","wrapped":true},"items":{"type":"string"}},"tags":{"type":"array","xml":{"name":"tag","wrapped":true},"items":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"title":"Pet Tag","xml":{"name":"Tag"},"description":"A tag for a pet","example":{"name":"name","id":1}}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}},"title":"a Pet","xml":{"name":"Pet"},"description":"A pet for sale in the pet store","example":{"photoUrls":["photoUrls","photoUrls"],"name":"doggie","id":0,"category":{"name":"name","id":6},"tags":[{"name":"name","id":1},{"name":"name","id":1}],"status":"available"}});
            return chakram.wait();
        });


        it('should respond 400 for "Invalid ID supplied"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/pet/553843', { 
                'headers': {"Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 404 for "Pet not found"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/pet/45331296', { 
                'headers': {"Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for post', function() {
        it('should respond 405 for "Invalid input"', function() {
            var response = request('post', 'http://petstore.swagger.io/v2/pet/79223703', { 
                'formData': {"name":"Lorem dolore s","status":"sed officia irure consequat dolor"},
                'headers': {"Content-Type":"application/x-www-form-urlencoded","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(405);
            return chakram.wait();
        });
    
    });
    
    describe('tests for delete', function() {
        it('should respond 400 for "Invalid pet value"', function() {
            var response = request('delete', 'http://petstore.swagger.io/v2/pet/3086679', { 
                'headers': {"Accept":"application/xml","api_key":"ullamco"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });
    
    });
});