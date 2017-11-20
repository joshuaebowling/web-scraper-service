require('jasmine-expect');
require('node-jasmine-async');
const 
  net = require('net'),
  _ = require('lodash');


describe("service Spec", function() {
  beforeAll(function(done) {
    this.config = require('config');
    this.client = new net.Socket();
  });

  afterAll(function() {
  });

  xit("expect client to connect to service", function() {
    // this.client.on('data', (data) => {
    //   console.log(data);
    // });
    this.client.connect(this.config.port, this.config.address, function(socket) {
      console.log(arguments);
    });  
    this.client.on('connect', (socket) => { 
      console.log('connected client');
      socket.end();
    });
  });

  xit("expect client to connect to disconnect service", function(done) {
    expect(this.client.destroy).toBeFunction();
//    this.client.destroy();
    done();
  });

  
});