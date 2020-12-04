// @flow

import { getEmptyImage, NativeTypes } from "react-dnd-html5-backend";

(getEmptyImage(): Image);
// $FlowExpectedError
(getEmptyImage(): number);

var a: $npm$reactDnd$NativeTypes = NativeTypes.FILE;
var a: $npm$reactDnd$NativeTypes = NativeTypes.URL;
var a: $npm$reactDnd$NativeTypes = NativeTypes.TEXT;
// $FlowExpectedError
var a: $npm$reactDnd$NativeTypes = NativeTypes.NOPE;
// $FlowExpectedError
var a: $npm$reactDnd$NativeTypes = "FILE";
