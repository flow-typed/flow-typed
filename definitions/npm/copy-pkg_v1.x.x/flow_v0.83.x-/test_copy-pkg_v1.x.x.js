// @flow
import { describe, it } from 'flow-typed-test';

const copyPkg = require('copy-pkg');

describe('copy-pkg', () => {
  it('basic', () => {
    copyPkg('package.json', 'dist/package.json');
    copyPkg('package.json', 'dist/package.json', {
      ignore: ['devDependencies'],
    }).then((res) => {
      // $FlowExpectedError[incompatible-use] res is void
      res.toString();
    });

    // $FlowExpectedError[incompatible-call]
    copyPkg();
    // $FlowExpectedError[incompatible-call]
    copyPkg('package.json');
    // $FlowExpectedError[incompatible-call]
    copyPkg('package.json', 123);
    // $FlowExpectedError[incompatible-call]
    copyPkg(123);
  });

  it('sync', () => {
    copyPkg.sync('package.json', 'dist/package.json');
    copyPkg.sync('package.json', 'dist/package.json', {
      normalize: true,
    });

    copyPkg.sync('package.json', 'dist/package.json', {
      normalize: true,
    // $FlowExpectedError[incompatible-use] sync does not return a promise
    }).then(() => {

    });

    // $FlowExpectedError[incompatible-call]
    copyPkg.sync();
    // $FlowExpectedError[incompatible-call]
    copyPkg.sync('package.json');
    // $FlowExpectedError[incompatible-call]
    copyPkg.sync('package.json', 123);
    // $FlowExpectedError[incompatible-call]
    copyPkg.sync(123);
  });
});
