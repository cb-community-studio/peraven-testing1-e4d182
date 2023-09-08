const assert = require('assert');
const app = require('../../src/app');

describe('\'array\' service', () => {
  it('registered the service', () => {
    const service = app.service('array');

    assert.ok(service, 'Registered the service (array)');
  });
});
