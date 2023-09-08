const { String } = require('./string.class');
const createModel = require('../../models/string.model');
const hooks = require('./string.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/string', new String(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('string');

  service.hooks(hooks);
};