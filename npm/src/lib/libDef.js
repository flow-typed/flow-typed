// @flow

import type {Version} from "./semver.js";

export type LibDef = {
  pkgName: string,
  pkgVersion: Version,
  pkgVersionStr: string,
  pkgNameVersionStr: string,
};
