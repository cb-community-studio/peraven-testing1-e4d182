const { Objectid } = require('./objectid.class');
const createModel = require('../../models/objectid.model');
const hooks = require('./objectid.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/objectid', new Objectid(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('objectid');

  service.hooks(hooks);
};