'use strict';

const { execFileSync } = require('node:child_process');
const test = require('node:test');
const assert = require('node:assert/strict');
const { startLabel } = require('../src/sessions');

const session = { startsAt: '2026-11-10T17:30:00' };

test('shows the Sessionize start time as venue time', () => {
  assert.equal(startLabel(session), '5:30 PM');
});

test('shows the same start time regardless of the runtime timezone', () => {
  const script = "const { startLabel } = require('./src/sessions'); process.stdout.write(startLabel({ startsAt: '2026-11-10T17:30:00' }));";
  const labels = ['UTC', 'America/Los_Angeles'].map((TZ) =>
    execFileSync(process.execPath, ['-e', script], {
      encoding: 'utf8',
      env: { ...process.env, TZ },
    }),
  );

  assert.deepEqual(labels, ['5:30 PM', '5:30 PM']);
});
