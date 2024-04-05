import { describe, it } from 'node:test';
import assert from 'node:assert';
import { deployment } from '../server/server.js';

// Test shortcuts

describe('Deployment', () => {
  it('registers the main plugin.', async () => {
    const server = await deployment();

    assert.ok(server.registrations['fed-practical']);
  });
});
