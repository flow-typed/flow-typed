// @flow
import typeof Yargs from 'yargs';

export const name = 'create-stub <packages...>';
export const description = 'Create a libdef stub for an untyped npm package';

import {createStub} from '../lib/stubUtils.js';
import {findFlowRoot} from '../lib/flowProjectUtils.js';
import {getPackageJsonData, loadPnpResolver} from '../lib/npm/npmProjectUtils';
import {path} from '../lib/node';

export function setup(yargs: Yargs): Yargs {
  return yargs
    .usage(`$0 ${name} ...PACKAGE`)
    .options({
      overwrite: {
        default: false,
        alias: 'o',
        describe:
          'Overwrite an existing stub if it is already present in the ' +
          '`flow-typed` directory and has been modified',
        type: 'boolean',
        demandOption: false,
      },
      typescript: {
        default: false,
        alias: 't',
        describe: 'Generate libdef from TypeScript definitions',
        type: 'boolean',
        demandOption: false,
      },
      maxDepth: {
        alias: 'd',
        describe: 'Allow to generate deeper template',
        type: 'number',
        demandOption: false,
      },
      libdefDir: {
        default: 'flow-typed',
        alias: 'l',
        describe: 'Use a custom directory to install libdefs',
        type: 'string',
        demandOption: false,
      },
      rootDir: {
        alias: 'r',
        describe: 'Directory of .flowconfig relative to node_modules',
        type: 'string',
      },
    })
    .positional('packages', {
      describe: 'Please provide the names of one or more npm packages',
    })
    .array('packages')
    .example('$0 create-stub foo@^1.2.0', '')
    .example('$0 create-stub foo bar baz', '')
    .help('h')
    .alias('h', 'help');
}

type Args = {
  overwrite: mixed, // boolean
  typescript: mixed, // boolean
  maxDepth?: mixed, // number
  libdefDir?: mixed, // string
  rootDir?: mixed, // string
  packages: mixed, // Array<string>
  ...
};

function failWithMessage(message: string) {
  console.error(message);
  return 1;
}

export async function run(args: Args): Promise<number> {
  if (args.packages !== undefined && !Array.isArray(args.packages)) {
    throw new Error('packages is not array');
  }
  const packages = (args.packages || []).map(dep => {
    if (typeof dep !== 'string') {
      throw new Error('packages should be array of strings');
    }
    return dep;
  });
  const cwd =
    typeof args.rootDir === 'string'
      ? path.resolve(args.rootDir)
      : process.cwd();

  // Find the project root
  const projectRoot = await findFlowRoot(cwd);
  if (projectRoot == null) {
    return failWithMessage(
      `\nERROR: Unable to find a flow project in the current dir or any of ` +
        `it's parents!\nPlease run this command from within a Flow project.`,
    );
  }

  const pnpResolver = await loadPnpResolver(
    await getPackageJsonData(projectRoot),
  );

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
      if (parts[0] === '') {
        // Scoped package
        packageName = '@' + parts[1];
        parts = parts.slice(1);
      }
      if (parts.length > 1) {
        version = parts[1];
      }

      return createStub(
        projectRoot,
        packageName,
        version,
        Boolean(args.overwrite),
        pnpResolver,
        Boolean(args.typescript),
        String(args.libdefDir),
        Number(args.maxDepth),
      );
    }),
  );

  return results.every(Boolean) ? 0 : 1;
}
