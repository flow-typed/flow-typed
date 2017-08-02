// @flow

import {path} from '../lib/node.js';

import type {Argv} from 'yargs';
import typeof Yargs from 'yargs';

export const name = 'version';
export const description = 'Print the CLI version';
export function setup(yargs: Yargs) {
  return yargs
    .options({
      showDelegatorVersion: {
        alias: 'g',
        demand: false,
        describe:
          'Include info about the globally-installed CLI package ' +
          'if it has delegated to a locally-installed one',
        type: 'boolean',
      },
    })
    .strict();
}
export async function run(argv: Argv) {
  const runningCliVersion = require('../../package.json').version;

  let suffix = '';
  if (argv.showDelegatorVersion) {
    const executedCLIPkgJsonPath = path.resolve(
      require.main.filename,
      '..',
      '..',
      'package.json',
    );
    const executedCLIVersion = require.call(null, executedCLIPkgJsonPath)
      .version;
    suffix = `\n(delegated from global flow-typed@${executedCLIVersion})`;
  }

  console.log(`flow-typed@${runningCliVersion}${suffix}`);
  return 0;
}
