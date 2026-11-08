'use strict';

// KubeCon + CloudNativeCon NA 2026 runs in Salt Lake City.
// Every session time shown to attendees uses the venue time zone.
const VENUE_TZ = 'America/Denver';

// Formats a Date as venue-local clock time, e.g. "5:30 PM".
function formatTime(date) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: VENUE_TZ,
    hour: 'numeric',
    minute: '2-digit',
  })
    .format(date)
    .replace(/[  ]/g, ' ');
}

module.exports = { VENUE_TZ, formatTime };
