const { Boolean } = require('./boolean.class');
const createModel = require('../../models/boolean.model');
const hooks = require('./boolean.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/boolean', new Boolean(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('boolean');

  service.hooks(hooks);
};