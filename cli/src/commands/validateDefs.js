// @flow

import {getLocalLibDefs as getLocalDefs} from "../lib/libDefs.js";

function validationError(errKey, errMsg, validationErrs) {
  const errors = validationErrs.get(errKey) || [];
  errors.push(errMsg);
  validationErrs.set(errKey, errors);
}

export const name = "validate-defs";
export const description =
  "Validates the structure of the definitions in the local repo.";
export async function run(): Promise<number> {
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

  validationErrors.forEach((errors, pkgNameVersion) => {
    console.log(`Found some problems with ${pkgNameVersion}:`);
    errors.forEach((err) => console.log("  * " + err));
    console.log("");
  });

  if (validationErrors.size === 0) {
    console.log(
      `All ${localDefs.length} library definitions are named and structured ` +
      `correctly.`
    );
    return 0;
  }

  return 1;
};
