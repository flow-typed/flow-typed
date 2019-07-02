// @flow

import {path} from '../lib/node.js';

import type {Argv} from 'yargs';
import typeof Yargs from 'yargs';

const envinfo = require('envinfo');

export const name = 'info';
export const description = 'Print debugging information concerning the local environment';
export function setup(yargs: Yargs) {
  return yargs
    .strict();
}
export async function run(argv: Argv) {
  console.log('\nEnvironment Info:');
  const data = await envinfo
      .run({
        System: ['OS', 'CPU'],
        Binaries: ['Node', 'Yarn', 'npm'],
        Browsers: ['Chrome', 'Edge', 'Firefox', 'Safari'],
        npmGlobalPackages: ['flow-typed'],
      })
  console.log(data);    
}
