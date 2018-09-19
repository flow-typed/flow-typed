// @flow

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

var initialOrientation = getInitialOrientation();
(initialOrientation: ?Orientations);

getOrientation((error: ?Error, orientation: ?Orientations) => {});
getSpecificOrientation((error: ?Error, orientation: ?SpecificOrientations) => {});
addOrientationListener((orientation: ?Orientations) => {});
removeOrientationListener((orientation: ?Orientations) => {});
addSpecificOrientationListener((orientation: ?SpecificOrientations) => {});
removeSpecificOrientationListener((orientation: ?SpecificOrientations) => {});

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

lockToPortrait();
lockToLandscape();
lockToLandscapeRight();
lockToLandscapeLeft();
unlockAllOrientations();
