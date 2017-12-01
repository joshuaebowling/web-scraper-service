const 
  cheerio = require('cheerio'),
  _ = require('lodash')
;

module.exports = function(html) {
  var $ = cheerio.load(html);
  return _.map($('img'),
    (v, i) => {
      let $v = $(v), src = '';
      src = $v.attr('src');
      return {
        name: $v.attr('alt') || _.last(src.split('/')),
        value: src
      };
    });
};