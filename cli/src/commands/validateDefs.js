// @flow

import {getLocalLibDefs as getLocalDefs} from "../lib/libDefs.js";
import isInFlowTypedRepo from "../lib/isInFlowTypedRepo";

function validationError(errKey, errMsg, validationErrs) {
  const errors = validationErrs.get(errKey) || [];
  errors.push(errMsg);
  validationErrs.set(errKey, errors);
}

export const name = "validate-defs";
export const description = "Validates the structure of the definitions in the flow-typed project.";

export async function run(): Promise<number> {
  if (!isInFlowTypedRepo()) {
    console.log(
      "This command only works in a clone of flowtype/flow-typed. " +
      "It is a tool used to validate the library definitions flow-typed project."
    );
    return 1;
  }
  const validationErrors = new Map();

  const localDefs = await getLocalDefs(validationErrors);
  localDefs.forEach(def => {
    if (def.testFilePaths.length === 0) {
      validationError(
        `${def.pkgName}_${def.pkgVersionStr}`,
        'Every definition file must have at least one test file!',
        validationErrors
      );
    }
  });

  console.log(" ");

  validationErrors.forEach((errors, pkgNameVersion) => {
    console.log("Found some problems with %s:", pkgNameVersion);
    errors.forEach((err) => console.log("  • " + err));
    console.log("");
  });

  if (validationErrors.size === 0) {
    console.log(
      `All library definitions are named and structured correctedly. ` +
      `(Found ${localDefs.length})`
    );
    return 0;
  }

  return 1;
};
