const { Date } = require('./date.class');
const createModel = require('../../models/date.model');
const hooks = require('./date.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/date', new Date(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('date');

  service.hooks(hooks);
};