// @flow
import React from "react";
import Collapsible from "react-collapsible";

var success = (
  <Collapsible trigger="Click me">
    <p>Children</p>
  </Collapsible>
);

// $ExpectError
var error = (
  <Collapsible>
    <p>I don't have a trigger prop</p>
  </Collapsible>
);
