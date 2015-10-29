var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.sendFile(path.resolve('./html/friends/friends.html'));
});

router.get('/cast', function(req, res, next) {
  res.sendFile(path.resolve('./html/friends/cast.html'))
});

router.get('/cast/joey', function(req, res, next) {
  res.sendFile(path.resolve('./html/friends/joey.html'))
});

router.get('/cast/chandler', function(req, res, next) {
  res.sendFile(path.resolve('./html/friends/chandler.html'))
});

module.exports = router
