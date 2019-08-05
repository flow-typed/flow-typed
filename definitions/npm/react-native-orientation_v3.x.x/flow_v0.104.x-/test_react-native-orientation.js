// @flow
import { describe, it } from "flow-typed-test";

import {
  getInitialOrientation,
  getOrientation,
  getSpecificOrientation,
  lockToPortrait,
  lockToLandscape,
  lockToLandscapeRight,
  lockToLandscapeLeft,
  unlockAllOrientations,
  addOrientationListener,
  removeOrientationListener,
  addSpecificOrientationListener,
  removeSpecificOrientationListener,
  type Orientations,
  type SpecificOrientations
} from "react-native-orientation";

it("must return Orientations type or void", () => {
  var initialOrientation = getInitialOrientation();
  (initialOrientation: ?Orientations);
});

describe("async function", () => {
  it("must call methods without error when send callback function", () => {
    getOrientation((error: ?Error, orientation: ?Orientations) => {});
    getSpecificOrientation(
      (error: ?Error, orientation: ?SpecificOrientations) => {}
    );
    addOrientationListener((orientation: ?Orientations) => {});
    removeOrientationListener((orientation: ?Orientations) => {});
    addSpecificOrientationListener((orientation: ?SpecificOrientations) => {});
    removeSpecificOrientationListener(
      (orientation: ?SpecificOrientations) => {}
    );
  });

  it("must throw error when call async function without callback fn", () => {
    // $ExpectError
    getOrientation();
    // $ExpectError
    getSpecificOrientation();
    // $ExpectError
    addOrientationListener();
    // $ExpectError
    removeOrientationListener();
    // $ExpectError
    addSpecificOrientationListener();
    // $ExpectError
    removeSpecificOrientationListener();
  });
});

describe("lock methods", () => {
  it("must haven't some an error", () => {
    lockToPortrait();
    lockToLandscape();
    lockToLandscapeRight();
    lockToLandscapeLeft();
    unlockAllOrientations();
  });
});
