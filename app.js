var express = require('express');
var app = express();

var friends = require('./routes/friends');
var bigbang = require('./routes/bigbang');

var logger = function(req, res, next) {
  console.log('Request for this "' + req.path + '" came in @ ' + Date.now());
  next();
}

app.use(logger);
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/html/index.html');
});

app.use('/friends', friends);

app.use('/bigbang', bigbang);

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Oops! something went wrong.');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
