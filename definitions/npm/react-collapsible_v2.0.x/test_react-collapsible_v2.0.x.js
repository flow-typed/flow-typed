// @flow
import React from "react";
import Collapsible from "react-collapsible";

const success = <Collapsible trigger="Click me"><p>Children</p></Collapsible>;

// $FlowExpectedError
const error = <Collapsible><p>I don't have a trigger prop</p></Collapsible>;
