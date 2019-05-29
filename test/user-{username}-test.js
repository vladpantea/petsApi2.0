'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /user/{username}', function() {
    describe('tests for get', function() {
        it('should respond 200 for "successful operation"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/user/animincididuntlaborumenimtempor', { 
                'headers': {"Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(200);
            expect(response).to.have.schema({"type":"object","properties":{"id":{"type":"integer","format":"int64"},"username":{"type":"string"},"firstName":{"type":"string"},"lastName":{"type":"string"},"email":{"type":"string"},"password":{"type":"string"},"phone":{"type":"string"},"userStatus":{"type":"integer","format":"int32","description":"User Status"}},"title":"a User","xml":{"name":"User"},"description":"A User who is purchasing from the pet store","example":{"firstName":"firstName","lastName":"lastName","password":"password","userStatus":6,"phone":"phone","id":0,"email":"email","username":"username"}});
            return chakram.wait();
        });


        it('should respond 400 for "Invalid username supplied"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/user/exvoluptatequisfugiateu', { 
                'headers': {"Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 404 for "User not found"', function() {
            var response = request('get', 'http://petstore.swagger.io/v2/user/iruredodolore', { 
                'headers': {"Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for put', function() {
        it('should respond 400 for "Invalid user supplied"', function() {
            var response = request('put', 'http://petstore.swagger.io/v2/user/suntmollitvoluptate', { 
                'headers': {"Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 404 for "User not found"', function() {
            var response = request('put', 'http://petstore.swagger.io/v2/user/suntiddolore', { 
                'headers': {"Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for delete', function() {
        it('should respond 400 for "Invalid username supplied"', function() {
            var response = request('delete', 'http://petstore.swagger.io/v2/user/UteiusmodLoremipsumid', { 
                'headers': {"Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 404 for "User not found"', function() {
            var response = request('delete', 'http://petstore.swagger.io/v2/user/Loremessecupidatatamet', { 
                'headers': {"Accept":"application/xml"},
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
});