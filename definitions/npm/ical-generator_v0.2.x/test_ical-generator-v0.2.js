// @flow
import ical from 'ical-generator';

const calendar = ical({
  domain: 'foo',
});
ical({
  name: '',
});

// $FlowExpectedError - domain should be string
ical({ domain: 1 });

calendar.clear();
const event = calendar.createEvent();
// $FlowExpectedError
calendar.createEvent('event');
(calendar.domain(): string)

// $FlowExpectedError
event.createAlarm();
const alarm = event.createAlarm({});

(alarm.repeat(): number)

// $FlowExpectedError
event.createAttendee();
const attendee = event.createAttendee('test');

(attendee.email(): string)
attendee.email('email');
