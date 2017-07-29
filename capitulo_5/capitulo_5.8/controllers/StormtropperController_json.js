'use strict';

let StormtrooperController = {
  getAll: function(request, response, next) {
    response.send('get all stormtroopers');
  },
  getById: function(request, response, next) {
    response.send('get a specific stormtrooper by id');
  },
  create: function(request, response, next) {
    response.send('create a new stormtroopers');
  },
  update: function(request, response, next) {
    response.send('update a stormtrooper');
  },
  remove: function(request, response, next) {
    response.send('remove a stormtrooper');
  }
};

module.exports = StormtrooperController;
