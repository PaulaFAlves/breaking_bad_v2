var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../src/services/server');
var should = chai.should();

var expect = chai.expect;

chai.use(chaiHttp);


describe('GET', function() {
it('should GET status 200', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
  it('should GET return json', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res){
        res.should.be.json;
        res.body.should.be.a('object');
        done();
      });
  });
  it('should GET return be an object', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res){
        res.body.should.be.a('object');
        done();
      });
  });
})
