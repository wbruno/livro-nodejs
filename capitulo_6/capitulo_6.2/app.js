/**
 * @file capitulo_6/capitulo_6.1/app.js
 */

'use strict';
var express = require('express'),
    path    = require('path'),
    hbs     = require('hbs'),
    debug   = require('debug')('livro_nodejs:app'),
    app     = express();

// config
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('hbs').__express);

// routes
app.use('/', require('./routes'));

// errors handling
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
