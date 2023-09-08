const assert = require('assert');
const app = require('../../src/app');

describe('\'objectid\' service', () => {
  it('registered the service', () => {
    const service = app.service('objectid');

    assert.ok(service, 'Registered the service (objectid)');
  });
});
