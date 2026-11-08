'use strict';

const { formatTime } = require('./time');

// Sessionize times are venue-local (America/Denver, MST during the event) with no offset.
const VENUE_OFFSET = '-07:00';

// Turns a Sessionize session into the start time shown to attendees.
function startLabel(session) {
  const start = new Date(`${session.startsAt}${VENUE_OFFSET}`);
  return formatTime(start);
}

module.exports = { startLabel };
