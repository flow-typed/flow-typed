// @flow

import {
  fs
} from "../lib/node";

import {
  getNpmLibDefs,
} from "../lib/npmLibDefs";

import {
  printValidationErrors,
} from "../lib/validationErrors";

export const name = "validate-defs";
export const description = "Validates the structure of the /definitions dir.";
export type Args = {
  _: Array<string>,
};
export async function run(args: Args) {
  if (args._.length !== 2) {
    console.error(
      "Please specify the path of the /definitions directory to be validated " +
      "as the first arg of this command."
    );
    return 1;
  }
  const defsDirPath = args._[1];

  if (!await fs.exists(defsDirPath)) {
    console.error("Error: Path does not exist: %s", defsDirPath);
    return 1;
  }

  const defsDirPathStat = await fs.stat(defsDirPath);
  if (!defsDirPathStat.isDirectory()) {
    console.error("Error: Path is not a directory: %s", defsDirPath);
    return 1;
  }

  const validationErrors = new Map();
  const npmLibDefs = await getNpmLibDefs(defsDirPath, validationErrors);

  if (validationErrors.size === 0) {
    console.log(
      "All libdefs are named and structured correctly. " +
      `(Found ${npmLibDefs.length})`
    );
    return 0;
  }

  printValidationErrors(validationErrors);
  return 1;
};
