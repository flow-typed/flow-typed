// @flow
import ical from 'ical-generator';

const calendar = ical({
  domain: 'foo',
});
ical({
  name: '',
});

// $ExpectError - domain should be string
ical({ domain: 1 });

calendar.clear();
const event = calendar.createEvent();
// $ExpectError
calendar.createEvent('event');
(calendar.domain(): string)

// $ExpectError
event.createAlarm();
const alarm = event.createAlarm({});

(alarm.repeat(): number)

// $ExpectError
event.createAttendee();
const attendee = event.createAttendee('test');

(attendee.email(): string)
attendee.email('email');
