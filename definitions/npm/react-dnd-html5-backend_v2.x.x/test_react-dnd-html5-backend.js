// @flow

import {getEmptyImage, NativeTypes} from 'react-dnd-html5-backend';

(getEmptyImage(): Image);
// $ExpectError
(getEmptyImage(): number);

var a: $npm$reactDnd$NativeTypes = NativeTypes.FILE
var a: $npm$reactDnd$NativeTypes = NativeTypes.URL
var a: $npm$reactDnd$NativeTypes = NativeTypes.TEXT
// $ExpectError
var a: $npm$reactDnd$NativeTypes = NativeTypes.NOPE
// $ExpectError
var a: $npm$reactDnd$NativeTypes = 'FILE'
