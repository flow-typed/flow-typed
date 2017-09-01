// @flow
import {
  onFrameStart,
  onFrameUpdate,
  onFrameRender,
  onFrameEnd,
  cancelOnFrameStart,
  cancelOnFrameUpdate,
  cancelOnFrameRender,
  cancelOnFrameEnd,
  timeSinceLastFrame,
  currentFrameTime,
  currentTime
} from "framesync";

const noop = v => {};

// Framesync
onFrameStart(noop);
onFrameUpdate(noop);
onFrameRender(noop);
onFrameEnd(noop);
cancelOnFrameStart(noop);
cancelOnFrameUpdate(noop);
cancelOnFrameRender(noop);
cancelOnFrameEnd(noop);
// $ExpectError
onFrameStart(1);
// $ExpectError
cancelOnFrameStart(1);

let t: number = 0;
let s: string = "";

t = timeSinceLastFrame();
t = currentFrameTime();
t = currentTime();
// $ExpectError
s = timeSinceLastFrame();
// $ExpectError
s = currentFrameTime();
// $ExpectError
s = currentTime();
