/**
 * @file capitulo_5/capitulo_5.10/app.js
 */

var express         = require('express'),
    methodOverride  = require('method-override'),
    bodyParser      = require('body-parser'),
    passport        = require('passport'),
    BasicStrategy   = require('passport-http').BasicStrategy,
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

app.use(passport.initialize());
passport.use(
  new BasicStrategy(function(username, password, done) {
    if (username.valueOf() === 'rebels' && password.valueOf() === '1138') {
      return done(null, true);
    } else {
      return done(null, false);
    }
  })
);

// router
app.use('/', require('./routes'));

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
module.exports = app;
