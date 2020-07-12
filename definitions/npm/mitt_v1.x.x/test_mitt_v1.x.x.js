// @flow
import mitt from 'mitt';
import type {
  EventEmitter,
} from 'mitt';

(mitt(): EventEmitter);
mitt().on("event", () => {});
mitt().off("event", () => {});
mitt().emit("event");

// $FlowExpectedError
mitt().on();

// $FlowExpectedError
mitt().on("event");

// $FlowExpectedError
mitt().off();

// $FlowExpectedError
mitt().off("event");

// $FlowExpectedError
mitt().emit();
