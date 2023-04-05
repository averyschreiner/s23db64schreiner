var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Dessert', { title: 'Search Results Dessert' });
});

module.exports = router;
