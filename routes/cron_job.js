var express = require('express');
var router = express.Router();
const { CronJob } = require('cron');

/* RUN Cron Job listing. */
router.get('/', function(req, res, next) {
  const job = new CronJob({
    cronTime: '*/1 * * * *',
    onTick: function() {
      console.log('Hello Hung');
    },
    start: true, 
    timeZone: 'Asia/Ho_Chi_Minh'
  });
  
  job.start();
  res.send('respond with a resource');
});

module.exports = router;
