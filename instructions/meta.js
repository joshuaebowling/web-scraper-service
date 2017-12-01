const 
  cheerio = require('cheerio'),
  _ = require('lodash')
;

module.exports = function(html) {
  var $ = cheerio.load(html), result = {};
  _.each($('meta'),
    (v, i) => {
      let $v = $(v);
      result[$v.attr('property') || $v.attr('name') || $v.attr('http-equiv')] = $v.attr('content');
  });
  return result;
};