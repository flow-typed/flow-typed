// @flow
import ical from 'ical-generator';

const calendar = ical({
  domain: 'foo',
});
// $ExpectError
ical({
  domain: 1,
  name: '',
});

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
