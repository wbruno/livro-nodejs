/**
 * @file capitulo_5/capitulo_5.7/app.js
 */

var express         = require('express'),
    methodOverride  = require('method-override'),
    bodyParser      = require('body-parser'),
    app             = express();

// server config
app.use(methodOverride('X­HTTP­Method'));
app.use(methodOverride('X­HTTP­Method­Override'));
app.use(methodOverride('X­Method­Override'));
app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (request, response, next) {
  if (request.url === '/favicon.ico') {
    response.writeHead(200, {'Content-Type': 'image/x-icon'});
    response.end('');
  } else {
    next();
  }
});

// router
app.get('/', function (request, response) {
  response.status(201);
  response.json({ 'name': 'William Bruno', 'email': 'wbrunom@gmail.com' });
});

// error handling
app.use(function(request, response, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, request, response, next) {
  response.status(err.status || 500).json({ err: err.message });
});

// server listener
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
