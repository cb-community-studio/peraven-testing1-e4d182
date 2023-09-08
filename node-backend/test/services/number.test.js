const assert = require('assert');
const app = require('../../src/app');

describe('\'number\' service', () => {
  it('registered the service', () => {
    const service = app.service('number');

    assert.ok(service, 'Registered the service (number)');
  });
});
