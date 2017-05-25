// @flow

export const name = 'create-stub';
export const description = 'Create a libdef stub for an untyped npm package';

import {CliError} from '../lib/errors';
import {createStub} from '../lib/stubUtils.js';
import {findFlowRoot} from '../lib/flowProjectUtils.js';

export function setup(yargs: Object) {
  return yargs
    .usage(`$0 ${name} ...PACKAGE`)
    .options({
      overwrite: {
        default: false,
        alias: 'o',
        describe: 'Overwrite an existing stub if it is already present in the ' +
                  '`flow-typed` directory and has been modified',
        type: 'bool',
        demand: false,
      },
    })
    .example('$0 create-stub foo@^1.2.0')
    .example('$0 create-stub foo bar baz')
    .help('h');
};

type Args = {
  overwrite: boolean,
  _: Array<string>,
}

export async function run(args: Args): Promise<number> {
  if (!Array.isArray(args._) || args._.length < 2) {
    throw new CliError('Please provide the names of one or more npm packages');
  }
  const packages = args._.slice(1);

  // Find the project root
  const projectRoot = await findFlowRoot(process.cwd());
  if (projectRoot == null) {
    throw new CliError(
      'Unable to find a flow project',
      'The current working directory is not within a Flow project. ' +
      'Please run this command from within a Flow project.'
    );
  }

  const plural = packages.length > 1 ? 'stubs' : 'stub';
  console.log(`• Creating ${packages.length} ${plural}...`);
  const results = await Promise.all(
    packages.map(pkg => {
      let version = null;

      /* Four cases to consider
       * packageName
       * packageName@version
       * @scoped/packageName
       * @scoped/packageName@version
       */
      let parts = pkg.split(/@/);
      let packageName = parts[0];
      if (parts[0] === "") {
        // Scoped package
        packageName = "@" + parts[1];
        parts = parts.slice(1);
      }
      if (parts.length > 1) {
        version = parts[1];
      }

      return createStub(projectRoot, packageName, version, args.overwrite);
    }),
  );

  return results.every(Boolean) ? 0 : 1;
}
