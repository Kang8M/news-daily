var express = require('express');
var router = express.Router();
const puppeteer = require('puppeteer');
const rss_parse = require('rss-parser');
const parser = new rss_parse();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  (async () => {

    let feed = await parser.parseURL('https://tinhte.vn/rss');
    let contents = [];
    feed.items.forEach(item => {
      contents.push({
        title: item.title,
        link: item.link,
        description: item.content,
      });
    });
  
    res.render('index', { title: feed.title, contents: contents });
  })();
});

module.exports = router;
