require('jasmine-expect');

describe("Config Spec", function() {
  beforeAll(function(done) {
    this.config = require('config');
    done();
  });

  afterAll(function(done) {
    done();
  });

  it("repository should have expected functions", function() {
    expect(this.config).toBeObject();
    expect(this.config.port).toBeNumber();
    expect(this.config.address).toBeString();
    expect(this.config.instructionsDir).toBeString();
  });
});