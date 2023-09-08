const assert = require('assert');
const app = require('../../src/app');

describe('\'boolean\' service', () => {
  it('registered the service', () => {
    const service = app.service('boolean');

    assert.ok(service, 'Registered the service (boolean)');
  });
});
