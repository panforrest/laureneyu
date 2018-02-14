var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index_1', function(req, res, next) {
  res.render('index_1', { title: 'Express' });
});

router.get('/protected', function(req, res, next) {
  res.render('protected', { title: 'Express' });
});

router.get('/index_react', function(req, res, next) {
  res.render('index_react', { title: 'Express' });
});

module.exports = router;
