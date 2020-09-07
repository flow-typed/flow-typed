// @flow

import mousetrap, { bind, unbind, trigger, reset } from "mousetrap";

mousetrap.stopCallback = (
  e: KeyboardEvent,
  element: Element,
  combo: string
) => {
  return false;
};

bind("c", (e: Event) => true);
bind(["ctrl", "c"], (e: Event) => true);
unbind("c");
unbind(["ctrl", "c"]);
reset();
trigger("c");

mousetrap.stopCallback = (e, element, combo) => false;

// $FlowExpectedError - Bind to what?
bind("c");
// $FlowExpectedError - Bind what?
bind(e => true);
// $FlowExpectedError - key has to be string or Array<string>
bind(1, e => true);
// $FlowExpectedError
unbind(1);
// $FlowExpectedError
trigger(1);
// $FlowExpectedError
mousetrap.stopCallback = (e, element, combo) => 123;
