const
  _ = require('lodash'),
  JsonSocket= require('json-socket'),
  request = require('request'),
  _scrape = {}
;

_scrape.parseUrl = function(url) {
  return url;
};

_scrape.parseResponse = function(response) {
  return new Promise((resolve, reject) => {
    resolve(response.html);
  });  
};

_scrape.scrape = function(_url = "", instructions = null) {
  var response, url;
  url = _scrape.parseUrl(_url);
  return new Promise((resolve, reject) => {
    if(_url === "" || instructions === null)
      reject("Please Provide a URL and a valid instruction set");
    request.get(url, (err, response, body) => {
      if(err) return reject(err);
      resolve(response);
    });
  });    
};

module.exports = {
  _parseUrl: _scrape.parseUrl,
  _parseResponse: _scrape.parseResponse,
  _scrape: _scrape.scrape,
  scrape: function(url = "") {
    return new Promise((resolve, reject) => {
      _scrape.scrape(url)
        .then(response => {
          _scrape.parseResponse(response)
            .then(result => resolve(response));
        });
    });
  }
};