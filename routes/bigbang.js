var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.sendFile(path.resolve('./html/bigbang/bigbang.html'));
});

router.get('/cast', function(req, res, next) {
  res.sendFile(path.resolve('./html/bigbang/cast.html'));
});

router.get('/cast/sheldon', function(req, res, next) {
  res.sendFile(path.resolve('./html/bigbang/sheldon.html'));
});

router.get('/cast/rajesh', function(req, res, next) {
  res.sendFile(path.resolve('./html/bigbang/rajesh.html'));
});

module.exports = router
