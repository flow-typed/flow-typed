// @flow
import React from "react";
import Collapsible from "react-collapsible";

const success = (
  <Collapsible trigger="Click me">
    <p>Children</p>
  </Collapsible>
);

const missingTriggerProp = (
  // $ExpectError
  <Collapsible>
    <p>I don't have a trigger prop</p>
  </Collapsible>
);

const wrongOverflowWhenOpen = (
  // $ExpectError
  <Collapsible trigger="Click me" overflowWhenOpen="cool">
    <p>I don't have a trigger prop</p>
  </Collapsible>
);
