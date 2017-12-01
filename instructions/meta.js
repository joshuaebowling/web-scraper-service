const 
  cheerio = require('cheerio'),
  _ = require('lodash')
;

module.exports = function(html) {
  var $ = cheerio.load(html);
  return _.map($('meta'),
    (v, i) => {
      let $v = $(v);
      return {
        name: $v.attr('property') || $v.attr('name') || $v.attr('http-equiv'),
        value: $v.attr('content')
      };
    });
};