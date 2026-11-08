'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { startLabel } = require('../src/sessions');

test('shows the Sessionize start time as venue time', () => {
  assert.equal(startLabel({ startsAt: '2026-11-10T17:30:00' }), '5:30 PM');
});
