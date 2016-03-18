// @flow

import {fs, path} from "../lib/node.js";

import {
  VERSIONED_NAME_RE,
  getFlowVersionsForPackage,
  getPackages,
  isTestFileName,
  versionToString,
} from "../lib/definitions.js";

const P = Promise;

async function validateDefinitions(): Promise<Map<string, Array<string>>> {
  const results = new Map();

  const pkgVersions = await getPackages();
  await P.all(pkgVersions.map(async (pkg) => {
    const pkgVerStr = versionToString(pkg.version);
    const pkgErrKey = pkg.name + '-' + pkgVerStr;
    const errs = results.get(pkgErrKey) || [];

    const dirItems = await fs.readdir(pkg.path);
    await P.all(dirItems.map(async (itemName) => {
      const itemPath = path.join(pkg.path, itemName);
      const itemStats = await fs.stat(itemPath);
      if (itemStats.isDirectory()) {
        if (itemName.substr(0, 'flow-'.length) !== 'flow-'
            || !VERSIONED_NAME_RE.test(itemName)) {
          errs.push(
            `${itemPath}: All directories under a package-version dir must ` +
            `be named 'flow-VERSION'.`
          );
        }
      } else if (itemStats.isFile()) {
        if (!isTestFileName(itemName)) {
          errs.push(
            `${itemPath}: All files under a package-version dir must be test ` +
            `files named test-SOMETESTNAME.js`
          );
        }
      } else {
        errs.push(
          `${itemPath}: Unexpected directory item! Expected either a ` +
          `directory or a file.`
        );
      }
    }));

    const flowVersions = await getFlowVersionsForPackage(pkg);
    await P.all(flowVersions.map(async (flowVer) => {
      const flowVerStr = versionToString(flowVer.version);
      const errs = results.get(`${pkgErrKey}/${flowVerStr}`) || [];

      const dirItems = await fs.readdir(flowVer.path);
      await P.all(dirItems.map(async (itemName) => {
        const itemPath = path.join(flowVer.path, itemName);
        const itemStats = await fs.stat(itemPath);
        if (itemStats.isDirectory()) {
          errs.push(
            `${itemPath}: Unexpected directory! Flow-version directories ` +
            `must only contain a libdef file and possibly test-*.js files.`
          );
        } else if (itemStats.isFile()) {
          if (!isTestFileName(itemName)
              && itemName !== pkg.name + '-' + pkgVerStr + '.js') {
            errs.push(
              `${itemPath}: All files in a flow-version directory must ` +
              `either be a test-*.js test file or a PKG-VERSION.js libdef file.`
            );
          }
        } else {
          errs.push(
            `${itemPath}: Unexpected directory item! Expected either a ` +
            `directory or a file.`
          );
        }
      }));
    }))
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
    console.log("All definitions are named and structured correctedly.");
    return 0;
  }
  return 1;
};
