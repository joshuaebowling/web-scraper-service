require('jasmine-expect');

const 
  _ = require('lodash'),
  URL = 'http://this-page-intentionally-left-blank.org/'
;

describe("scraper Spec", function() {
  beforeAll(function(done) {
    this.scraper = require('../scraper');
    done();
  });

  afterAll(function(done) {
    done();
  });

  beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  it("repository should have expected functions", function() {
    expect(this.scraper).toBeObject();
    expect(this.scraper._parseUrl).toBeFunction();
    expect(this.scraper._parseResponse).toBeFunction();
    expect(this.scraper._scrape).toBeFunction();
    expect(this.scraper.scrape).toBeFunction();
  });

  it("scrape function should return a promise", function(done) {
    var promise = this.scraper.scrape(URL, 'meta');
    expect(promise.then).toBeFunction();
    expect(promise.catch).toBeFunction();
    promise
      .then(() => done())
      .catch(() => done());
  });

  it("expect _scrape function promise to return html data", function(done) {
    this.scraper._scrape(URL)
      .then((response) => {
        expect(response.body).toBeString();
        done();
      })
      .catch(e => done.fail(e));
  });

  it("expect scrape function promise to return html data", function(done) {
    var promise = this.scraper.scrape(URL, 'meta');
    expect(promise.then).toBeFunction();
    expect(promise.catch).toBeFunction();
    promise
      .then((response) => {
        expect(response).toBeObject();
        done();
      })
      .catch(() => done());
  });


});