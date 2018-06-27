// @flow
import mitt from 'mitt';
import type {
  EventEmitter,
} from 'mitt';

(mitt(): EventEmitter);
mitt().on("event", () => {});
mitt().off("event", () => {});
mitt().emit("event");

// $ExpectError
mitt().on();

// $ExpectError
mitt().on("event");

// $ExpectError
mitt().off();

// $ExpectError
mitt().off("event");

// $ExpectError
mitt().emit();
