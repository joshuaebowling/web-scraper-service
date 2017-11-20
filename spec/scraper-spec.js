require('jasmine-expect');

const _ = require('lodash');

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
    expect(this.scraper._parseUrl).toBeFunction();
    expect(this.scraper._parseResponse).toBeFunction();
    expect(this.scraper._scrape).toBeFunction();
    expect(this.scraper.scrape).toBeFunction();
  });

  xit("scrape function should return a promise", function() {
    expect(this.scraper.scrape('http://test.com').then).toBeFunction();
  });

  it("expect _scrape function promise to return html data", function(done) {
    this.scraper._scrape('http://this-page-intentionally-left-blank.org/').then((response) => {
      expect(response.body).toBeString();
      done();
    });
  });

  it("expect scrape function promise to return html data", function(done) {
    this.scraper._scrape('http://this-page-intentionally-left-blank.org/').then((html) => {
      expect(html.body).toBeString();
      done();
    });
  });
  
});