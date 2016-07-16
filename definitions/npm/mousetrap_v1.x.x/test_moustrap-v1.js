// @flow

import mousetrap, { bind, unbind, trigger, reset} from 'mousetrap';

mousetrap.stopCallback = (e: KeyboardEvent, element: Element, combo: string) => {
  return false;
}

bind('c', (e: Event) => true);
bind(['ctrl', 'c'], (e: Event) => true);
unbind('c');
reset();
trigger('c');

mousetrap.stopCallback = (e, element, combo) => false;

// $ExpectError - Bind to what?
bind('c');
// $ExpectError - Bind what?
bind(e => true);
// $ExpectError - key has to be string or Array<string>
bind(1, e => true);
// $ExpectError
unbind(1);
// $ExpectError
trigger(1);
// $ExpectError
mousetrap.stopCallback = (e, element, combo) => 123;
