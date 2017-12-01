const
  _ = require('lodash'),
  JsonSocket= require('json-socket'),
  async = require('async'),
  config = require('config'),
  request = require('request'),
  _scrape = {}
;

const instructionsDir = `${__dirname}/${config.instructionsDir}`;

_scrape.parseUrl = function(url) {
  return url;
};

_scrape.singleInstruction = function(response, instruction) {
  return new Promise((resolve, reject) => {
    var parser = require(`${instructionsDir}/${instruction}`);
    if(!parser) return reject('Instructions Not Found');    
    resolve(parser(response));
  });  
};

_scrape.parseResponse = function(response, instructions) {
  return new Promise((resolve, reject) => {
    let result = {};
    async.each(_.isArray(instructions) ? instructions : [instructions], (instruction, callback) => {
      _scrape.singleInstruction(response, instruction)
        .then(parsedResponse => { result[instruction] = parsedResponse; callback(); })
        .catch(err => { result[instruction] = `ERROR:${err}`; callback(err) })
      ;
    }, (err) => {
      if(err) return reject(`An Error Occurred Outside of A Single Parsing: ${err}`);
      resolve(result);
    });

  });
};

_scrape.scrape = function(_url = "") {
  var response, url;
  url = _scrape.parseUrl(_url);
  return new Promise((resolve, reject) => {
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
  scrape: function(url = "", instructions = null) {
    return new Promise((resolve, reject) => {
      if(url === "" || instructions === null)
        return reject("Please Provide a URL and a valid instruction set");      
      _scrape.scrape(url)
        .then(response => {
          _scrape.parseResponse(response.body, instructions)
            .then(result => resolve(result))
            .catch(e => reject(e));
        })
        .catch(e => reject(e));
    });
  }
};