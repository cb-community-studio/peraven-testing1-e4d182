const { Array } = require('./array.class');
const createModel = require('../../models/array.model');
const hooks = require('./array.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/array', new Array(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('array');

  service.hooks(hooks);
};