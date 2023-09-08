const assert = require('assert');
const app = require('../../src/app');

describe('\'string\' service', () => {
  it('registered the service', () => {
    const service = app.service('string');

    assert.ok(service, 'Registered the service (string)');
  });
});
