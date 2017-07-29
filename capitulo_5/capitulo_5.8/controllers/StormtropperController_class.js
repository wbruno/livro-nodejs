class StormtrooperController {
  getAll(request, response, next) {
    response.send('get all stormtroopers');
  };
  getById(request, response, next) {
    response.send('get a specific stormtrooper by id');
  };
  create(request, response, next) {
    response.send('create a new stormtroopers');
  };
  update(request, response, next) {
    response.send('update a stormtrooper');
  };
  remove(request, response, next) {
    response.send('remove a stormtrooper');
  };
}

module.exports = new StormtrooperController();
