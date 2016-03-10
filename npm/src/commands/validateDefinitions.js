// @flow

import typeof * as yargs from "yargs";

import {
  getPkgNames,
  getFlowVersionsForPkgVersion,
  getPkgVersions,
} from "../lib/definitions.js";

const VERSION_PART_IDX_TO_NAME = ['major', 'minor', 'patch'];
function validatePkgVersion(
  givenVer: string,
  errors = [],
  offset = 0
): Array<string> {
  let ver = givenVer;

  // Package version strings start with a 'v'
  if (ver.substr(offset, 1) !== 'v') {
    errors.push("'" + givenVer + "': Version must start with a 'v'!");
    ver = 'v' + ver;
  }

  // Package versions must always have 3 parts, separated by a '.'
  const parts = ver.substr(offset + 1).split(/\./g);
  if (parts.length !== 3) {
    errors.push(
      "'" + givenVer + "': Versions must be formatted as " +
      "'v<MAJOR>.<MINOR>.<PATCH>'. (Use 'x' as a wildcard where necessary)"
    );
    for (let i = 0; i < 3 - parts.length; i++) {
      parts.push('x');
    }
    ver ='v' + parts.join('.');
  }

  // Each part must either be a number, or must be 'x'
  parts.forEach((part, idx) => {
    if (part !== 'x' && (String(parseInt(part, 10)) !== part)) {
      const partName = VERSION_PART_IDX_TO_NAME[idx];
      errors.push(
        "'" + givenVer + "': '" + part + "' is not a valid " + partName +
        " version!"
      );
    }
  });

  return errors;
}

function validateFlowVersion(givenVer: string, errors = []): Array<string> {
  let ver = givenVer;

  // Flow version strings start with a 'flow-'
  if (ver.substr(0, 'flow-'.length) !== 'flow-') {
    errors.push("'" + givenVer + "': Flow version must start with a 'flow-'!");
    ver = 'flow-' + ver;
  }

  const flowVer = ver.substr('flow-'.length);
  if (flowVer === 'all') {
    return errors;
  } else {
    return validatePkgVersion(ver, errors, 'flow-'.length);
  }
}

async function validateDefinitions(): Promise<Map<string, Array<string>>> {
  const pkgNames = await getPkgNames();
  const pkgNameVersions = await Promise.all(pkgNames.map(getPkgVersions));

  const results = new Map();
  await Promise.all(pkgNameVersions.map(async (pkgVersions, idx) => {
    const pkgName = pkgNames[idx];
    await Promise.all(pkgVersions.map(async (pkgVer, idx) => {
      const pkgNameVer = pkgName + "@" + pkgVer;
      let errs = results.get(pkgNameVer) || [];

      // Validate version string
      validatePkgVersion(pkgVer).forEach(err => errs.push(err));

      // Validate flow-version strings
      const flowVersions = await getFlowVersionsForPkgVersion(pkgName, pkgVer);
      flowVersions.forEach((flowVersion) => {
        validateFlowVersion(flowVersion).forEach((err) => errs.push(err));
      });

      if (errs.length > 0) {
        results.set(pkgNameVer, errs);
      }
    }));
  }));
  return results;
};

export const name = "validate-defs";
export const description = "Validates the structure of the definitions in the repo.";
export const options = {};
export async function run(args: {}): Promise<void> {
  const validationErrors = await validateDefinitions();
  validationErrors.forEach((errors, pkgNameVersion) => {
    console.log("Found some problems with %s:", pkgNameVersion);
    errors.forEach((err) => console.log("  * " + err));
    console.log("");
  });

  if (validationErrors.size > 0) {
    process.exit(1);
  } else {
    console.log("Everything looks good!");
  }
};
