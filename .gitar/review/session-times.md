# Session times

Session data comes from Sessionize. Its `startsAt` and `endsAt` values are venue-local
times without an offset, for example `2026-11-10T17:30:00`. The venue is in
America/Denver (MST, UTC-7, for Nov 9-13 2026). CI and containers run in UTC.

For new or changed code under `src/` that parses, stores or renders a session time:

- Never pass an offset-less Sessionize time straight to `new Date()`. It is parsed in the
  runtime's local zone, which is UTC in CI and in the container.
- Attach the venue offset (`-07:00`) or convert with an explicit time zone before
  creating a `Date`.
- Render times with `formatTime()` from `src/time.js`, which uses America/Denver.

Report a blocking finding when any of these is broken.
