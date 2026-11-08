'use strict';

const { formatTime } = require('./time');

// Turns a Sessionize session into the start time shown to attendees.
function startLabel(session) {
  const start = new Date(session.startsAt);
  return formatTime(start);
}

module.exports = { startLabel };
