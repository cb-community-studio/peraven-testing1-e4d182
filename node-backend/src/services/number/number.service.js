const { Number } = require('./number.class');
const createModel = require('../../models/number.model');
const hooks = require('./number.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/number', new Number(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('number');

  service.hooks(hooks);
};