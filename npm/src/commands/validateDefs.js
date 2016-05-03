// @flow

import {getLocalLibDefs, getLocalLibDefFlowVersions} from "../lib/libDef.js";

export const name = "validate-defs";
export const description =
  "Validates the structure of the definitions in the local repo.";
export async function run(): Promise<number> {
  const validationErrors = new Map();
  const localLibDefs = await getLocalLibDefs(validationErrors);
  const localLibDefFlowVersions = await getLocalLibDefFlowVersions(
    localLibDefs,
    validationErrors
  );

  localLibDefFlowVersions.forEach(libDefFlowVer => {
    const libDef = libDefFlowVer.libDef;
    if (libDefFlowVer.testFiles.length === 0) {
      const errors = validationErrors.get(libDef.pkgNameVersionStr) || [];
      errors.push(`Every definition file must have at least one test file!`);
      validationErrors.set(libDef.pkgNameVersionStr, errors);
    }
  });

  console.log(" ");

  validationErrors.forEach((errors, pkgNameVersion) => {
    console.log("Found some problems with %s:", pkgNameVersion);
    errors.forEach((err) => console.log("  * " + err));
    console.log("");
  });

  if (validationErrors.size === 0) {
    console.log(
      `All library definitions are named and structured correctedly. ` +
      `(Found ${localLibDefFlowVersions.length})`
    );
    return 0;
  }

  return 1;
};
