// @flow
import { describe, it } from "flow-typed-test";

import Orientation, {
  type Orientations
} from "react-native-orientation-locker";

it("must return initial Orientations type", () => {
  var initialOrientation = Orientation.getInitialOrientation();

  (initialOrientation: Orientations);
});

describe("async method", () => {
  it("passes when used properly", () => {
    function handlerOnOrientationChange(orientation: Orientations) {}

    Orientation.addOrientationListener(handlerOnOrientationChange);

    Orientation.removeOrientationListener(handlerOnOrientationChange);

    Orientation.getOrientation((orientation: Orientations) => {});
  });

  it("must raises an error when call function without callback", () => {
    // $ExpectError
    Orientation.addOrientationListener();
    // $ExpectError
    Orientation.getOrientation();
    // $ExpectError
    Orientation.removeOrientationListener();
  });
});

describe("lock methods", () => {
  it("passes when used properly", () => {
    Orientation.lockToLandscape();
    Orientation.lockToLandscapeLeft();
    Orientation.lockToLandscapeRight();
    Orientation.lockToPortrait();
    Orientation.lockToPortraitUpsideDown();
    Orientation.unlockAllOrientations();
  });
});
