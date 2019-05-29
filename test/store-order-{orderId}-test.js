'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /store/order/{orderId}', function() {
    describe('tests for get', function() {
        it('should respond 200 for "successful operation"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/store/order/1', { 
                'headers': {"Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(200);
            expect(response).to.have.schema({"type":"object","properties":{"id":{"type":"integer","format":"int64"},"petId":{"type":"integer","format":"int64"},"quantity":{"type":"integer","format":"int32"},"shipDate":{"type":"string","format":"date-time"},"status":{"type":"string","description":"Order Status","enum":["placed","approved","delivered"]},"complete":{"type":"boolean","default":false}},"title":"Pet Order","xml":{"name":"Order"},"description":"An order for a pets from the pet store","example":{"petId":6,"quantity":1,"id":0,"shipDate":"2000-01-23T04:56:07.000+00:00","complete":false,"status":"placed"}});
            return chakram.wait();
        });


        it('should respond 400 for "Invalid ID supplied"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/store/order/2', { 
                'headers': {"Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 404 for "Order not found"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/store/order/2', { 
                'headers': {"Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for delete', function() {
        it('should respond 400 for "Invalid ID supplied"', function() {
            var response = request('delete', 'http://petstore.swagger.io/v2/store/order/dolordeserunt', { 
                'headers': {"Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 404 for "Order not found"', function() {
            var response = request('delete', 'http://petstore.swagger.io/v2/store/order/eiusmodminim', { 
                'headers': {"Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
});