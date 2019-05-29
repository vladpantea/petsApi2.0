'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /pet/{petId}/uploadImage', function() {
    describe('tests for post', function() {
        it('should respond 200 for "successful operation"', function() {
            var response = request('post', 'http://petstore.swagger.io/v2/pet/63400343/uploadImage', { 
                'formData': {"additionalMetadata":"sunt ea ullamco","file":"This is sample content for the \"file\" type."},
                'headers': {"Content-Type":"multipart/form-data","Accept":"application/json"},
                'time': true
            });

            expect(response).to.have.status(200);
            expect(response).to.have.schema({"type":"object","properties":{"code":{"type":"integer","format":"int32"},"type":{"type":"string"},"message":{"type":"string"}},"title":"An uploaded response","description":"Describes the result of uploading an image resource","example":{"code":0,"type":"type","message":"message"}});
            return chakram.wait();
        });
    
    });
});