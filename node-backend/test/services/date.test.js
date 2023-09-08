const assert = require('assert');
const app = require('../../src/app');

describe('\'date\' service', () => {
  it('registered the service', () => {
    const service = app.service('date');

    assert.ok(service, 'Registered the service (date)');
  });
});
