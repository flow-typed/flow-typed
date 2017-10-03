// @flow
declare module "framesync" {
  // Framesync
  declare function onFrameStart(callback: Function): void;
  declare function onFrameUpdate(callback: Function): void;
  declare function onFrameRender(callback: Function): void;
  declare function onFrameEnd(callback: Function): void;
  declare function cancelOnFrameStart(callback: Function): void;
  declare function cancelOnFrameUpdate(callback: Function): void;
  declare function cancelOnFrameRender(callback: Function): void;
  declare function cancelOnFrameEnd(callback: Function): void;
  declare function timeSinceLastFrame(): number;
  declare function currentFrameTime(): number;
  declare function currentTime(): number;
}
