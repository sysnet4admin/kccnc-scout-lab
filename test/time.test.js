'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { formatTime } = require('../src/time');

test('formats an instant in venue time', () => {
  const start = new Date('2026-11-10T17:30:00-07:00');
  assert.equal(formatTime(start), '5:30 PM');
});
