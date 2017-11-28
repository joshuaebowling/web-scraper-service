require('jasmine-expect');
const 
  net = require('net'),
  _ = require('lodash'),
  JsonSocket = require('json-socket')
;


describe("service Spec", function() {
  beforeAll(function(done) {
    this.config = require('config');
    this.client = new JsonSocket(new net.Socket());
  });

  beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  xit("expect client to connect to service", function(done) {
    this.client.connect(this.config.port, this.config.address, () => {
      this.client.end();
      done();
    });  
  });

  xit("expect client to connect to disconnect service", function(done) {
    expect(this.client.destroy).toBeFunction();
//    this.client.destroy();
    done();
  });


  xit("expect client to receive response", function() {    
    this.client.on('message', (response) => {
      expect(response).toBeObject();
      expect(response.body).toBeString();
      done();
    });

    this.client.on('connect', () => {
      this.client.sendMessage({url: 'http://this-page-intentionally-left-blank.org/'});
    });

    this.client.connect(this.config.port, this.config.address, _.noop);
  });

  
});