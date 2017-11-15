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
  });
});