// @flow
import path from 'path';
import fs from 'fs';
import typeof Yargs from 'yargs';

const flowVersion = '0.83.x';

export const name = 'create-def <libName> <ver>';
export const description = 'Create template library definitions in flow-typed';

export function setup(yargs: Yargs): Yargs {
  return yargs
    .usage(`$0 ${name}`)
    .positional('libName', {
      describe: 'Please provide the names of library',
      type: 'string',
    })
    .positional('ver', {
      describe: 'Please provide the version range you want to add',
      type: 'string',
    })
    .example('$0 create-def foo 1.x.x', '')
    .help('h')
    .alias('h', 'help');
}

type Args = {
  libName: mixed, // string
  ver: mixed, // string
  ...
};

export async function run({libName, ver}: Args): Promise<number> {
  if (typeof libName !== 'string' || typeof ver !== 'string') {
    return 1;
  }

  const scope = libName.startsWith('@') ? libName.split('/')[0] : '';
  const packageName = scope ? libName.split('/')[1] : libName;
  const definitionsPath = path.join(
    process.cwd(),
    '/definitions/npm',
    scope ?? '',
  );
  const rootDefDir = `${definitionsPath}/${packageName}_v${ver}`;
  const defDir = `${rootDefDir}/flow_v${flowVersion}-`;

  if (scope) {
    try {
      fs.mkdirSync(definitionsPath);
    } catch (err) {
      if (err.code !== 'EEXIST') {
        throw err;
      }
    }
  }
  fs.mkdirSync(rootDefDir);
  fs.mkdirSync(defDir);

  fs.writeFileSync(
    `${defDir}/${packageName}_v${ver}.js`,
    `declare module '${libName}' {
  declare module.exports: any;
}`,
  );

  fs.writeFileSync(
    `${defDir}/test_${packageName}_v${ver}.js`,
    `// @flow
import { describe, it } from 'flow-typed-test';
// import library from '${libName}';

describe('${libName}', () => {
  it('', () => {

  });
});`,
  );

  return 0;
}
