var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JADE' });
});
/* GET home page. */
router.get('/gems', function(req, res, next) {
  res.render('gems', { title: 'GEMS' });
});

module.exports = router;
