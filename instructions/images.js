const 
  cheerio = require('cheerio'),
  _ = require('lodash')
;

module.exports = function(html) {
  var $ = cheerio.load(html), result = {};
  _.each($('img'),
    (v, i) => {
      let $v = $(v), src = '';
      src = $v.attr('src');
      result[$v.attr('alt') || _.last(src.split('/'))] = src;    
  });
  return result;
};