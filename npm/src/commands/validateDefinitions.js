// @flow

import {fs, path} from "../lib/node.js";

import {
  DEFINITIONS_DIR,
  getPkgNames,
  getFlowVersionsForPkgVersion,
  getPkgVersions,
  isTestFileName,
} from "../lib/definitions.js";

const P = Promise;

const VERSION_PART_IDX_TO_NAME = ['major', 'minor', 'patch'];
function validatePkgVersion(
  givenVer: string,
  errors = [],
  prefix = ""
): Array<string> {
  let ver = givenVer;

  // Package version strings start with a 'v'
  if (ver.substr(0, 1) !== 'v') {
    errors.push("'" + prefix + givenVer + "': Version must start with a 'v'!");
    ver = 'v' + ver;
  }

  // Package versions must always have 3 parts, separated by a '.'
  const parts = ver.substr(1).split(/\./g);
  if (parts.length !== 3) {
    errors.push(
      "'" + prefix + givenVer + "': Versions must be formatted as " +
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
        "'" + prefix + givenVer + "': '" + part + "' is not a valid " +
        partName + " version!"
      );
    }
  });

  // The 'major' portion of a version cannot be a wildcard
  if (parts[0] === 'x') {
    errors.push(
      "'" + givenVer + "': The 'major' part of a version cannot be 'x'!"
    );
  }

  return errors;
}

async function validateDefinitions(): Promise<Map<string, Array<string>>> {
  const pkgNames = await getPkgNames();
  const pkgNameVersions = await P.all(pkgNames.map(getPkgVersions));

  const results = new Map();
  await P.all(pkgNameVersions.map(async (pkgVersions, idx) => {
    const pkgName = pkgNames[idx];
    await P.all(pkgVersions.map(async (pkgVer, idx) => {
      const pkgNameVer = pkgName + "@" + pkgVer;
      let errs = results.get(pkgNameVer) || [];

      // Validate version string
      validatePkgVersion(pkgVer).forEach(err => errs.push(err));

      const pkgVerDir = path.join(DEFINITIONS_DIR, pkgName, pkgVer);
      const pkgVerDirItems = await fs.readdir(pkgVerDir);
      const pkgVerDirItemStats = await P.all(pkgVerDirItems.map(
        itemName => fs.stat(path.join(pkgVerDir, itemName))
      ));
      pkgVerDirItems.forEach((itemName, idx) => {
        const itemStats = pkgVerDirItemStats[idx];
        if (isTestFileName(itemName, itemStats)) {
          return;
        }

        const itemPath = path.join(pkgName, pkgVer, itemName);
        if (itemStats.isFile()) {
          errs.push(
            "'" + itemPath + "': Only 'test-*' files are permitted in this " +
            "directory!"
          );
        }
      });

      // Validate flow-version strings
      const flowVersions = await getFlowVersionsForPkgVersion(pkgName, pkgVer);
      await P.all(flowVersions.map(async (flowVer) => {
        if (flowVer !== "all") {
          const firstTwo = flowVer.substr(0, 2);
          if (flowVer[0] === "=") {
            errs.push(
              "flow-" + flowVer + ": It is not necessary to include a '=' to " +
              "specify an exact Flow version."
            );
          } else if (firstTwo === "<=" || firstTwo === ">=") {
            validatePkgVersion(flowVer.substr(2), errs, "flow-");
          } else if (flowVer[0] === "<" || flowVer[0] === ">") {
            validatePkgVersion(flowVer.substr(1), errs, "flow-");
          } else {
            validatePkgVersion(flowVer, errs);
          }
        }

        const pkgVerFlowDir = path.join(pkgVerDir, 'flow-' + flowVer);
        const pkgVerFlowDirItems = await fs.readdir(pkgVerFlowDir);
        const pkgVerFlowDirItemStats = await P.all(pkgVerFlowDirItems.map(
          itemName => fs.stat(path.join(pkgVerFlowDir, itemName))
        ));
        pkgVerFlowDirItems.forEach((itemName, idx) => {
          const itemStats = pkgVerFlowDirItemStats[idx];
          if (isTestFileName(itemName, itemStats)) {
            return;
          }

          const libDefFileName = pkgName + '-' + pkgVer + '.js';
          if (itemStats.isFile()) {
            if (itemName === '.flowconfig') {
              return;
            }

            if (itemName === libDefFileName) {
              return;
            }
          }

          const itemPath = path.join(pkgName, pkgVer, flowVer, itemName);
          errs.push(
            "'" + itemPath + "': Only .flowconfig, " + libDefFileName + ", " +
            "or 'test-*' files are permitted in this directory!"
          );
        });
      }));

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
export async function run(args: {}): Promise<number> {
  const validationErrors = await validateDefinitions();
  console.log(" ");

  validationErrors.forEach((errors, pkgNameVersion) => {
    console.log("Found some problems with %s:", pkgNameVersion);
    errors.forEach((err) => console.log("  * " + err));
    console.log("");
  });

  if (validationErrors.size === 0) {
    console.log("/definitions directory looks valid!");
    return 0;
  }
  return 1;
};
