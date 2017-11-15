require('jasmine-expect');

describe("scraper Spec", function() {
  beforeAll(function(done) {
    this.scraper = require('../scraper');
    done();
  });

  afterAll(function(done) {
    done();
  });

  it("repository should have expected functions", function() {
    expect(this.scraper).toBeObject();
    expect(this.scraper.scrape).toBeFunction();
  });
  
});