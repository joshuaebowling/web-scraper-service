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

  it("scrape function should return a promise", function() {
    expect(this.scraper.scrape('http://test.com').then).toBeFunction();
  });

  it("expect scrape function promise to return html data", function(done) {
    this.scraper.scrape('http://test.com').then((html) => {
      expect(html).toBeString();
      done();
    });
  });
  
});