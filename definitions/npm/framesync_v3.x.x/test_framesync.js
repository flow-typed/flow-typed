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
// $FlowExpectedError
onFrameStart(1);
// $FlowExpectedError
cancelOnFrameStart(1);

let t: number = 0;
let s: string = "";

t = timeSinceLastFrame();
t = currentFrameTime();
t = currentTime();
// $FlowExpectedError
s = timeSinceLastFrame();
// $FlowExpectedError
s = currentFrameTime();
// $FlowExpectedError
s = currentTime();
