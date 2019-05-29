'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /pet', function() {
    describe('tests for post', function() {
        it('should respond 405 for "Invalid input"', function() {
            var response = request('post', 'http://petstore.swagger.io/v2/pet', { 
                'body': {"name":"nulla","photoUrls":["voluptate cupidatat veniam eu dolor","pr"]},
                'headers': {"Content-Type":"application/json","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(405);
            return chakram.wait();
        });
    
    });
    
    describe('tests for put', function() {
        it('should respond 400 for "Invalid ID supplied"', function() {
            var response = request('put', 'http://petstore.swagger.io/v2/pet', { 
                'body': {"name":"aliqua","photoUrls":["nulla minim ea laboris sunt","aliqua deserunt in velit","in magna","eu amet tempor lab","anim commodo non"]},
                'headers': {"Content-Type":"application/json","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 404 for "Pet not found"', function() {
            var response = request('put', 'http://petstore.swagger.io/v2/pet', { 
                'body': {"name":"in commodo mo","photoUrls":["si","eu","in eiusmod dolor est","s","ea ex labore sit non"]},
                'headers': {"Content-Type":"application/json","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });


        it('should respond 405 for "Validation exception"', function() {
            var response = request('put', 'http://petstore.swagger.io/v2/pet', { 
                'body': {"name":"eu quis incididunt","photoUrls":["sunt in fugiat","consectetur et minim ullamco","te"]},
                'headers': {"Content-Type":"application/json","Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(405);
            return chakram.wait();
        });
    
    });
});