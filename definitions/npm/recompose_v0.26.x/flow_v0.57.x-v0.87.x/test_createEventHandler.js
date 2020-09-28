// @flow
import React from "react";
import { createEventHandler } from "recompose";

// $FlowExpectedError
createEventHandler(1);

// $FlowExpectedError
const result1: number = createEventHandler();

// $FlowExpectedError
const { stream1, handler1 } = createEventHandler();

const { stream, handler } = createEventHandler();

handler();
