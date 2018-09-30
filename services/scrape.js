const rp = require('request-promise');
const cheerio = require('cheerio');
const options = {
  uri: 'https://sports.yahoo.com/nfl/stats/weekly/?sortStatId=PASSING_YARDS&selectedTable=0',
  transform: function (body) {
    return cheerio.load(body);
  }
};

rp(options)
  .then(($) => {
    console.log($);
  })
  .catch((err) => {
    console.log(err);
  });
