// @flow
import { describe, test } from 'flow-typed-test';

const lockfile = require('@yarnpkg/lockfile');

describe('@yarnpkg/lockfile', () => {
  test('parse', () => {
    const json = lockfile.parse('test');
    const { object, type } = json;
    (object.dep.version: string);
    (object.dep.resolved: string | void);
    (object.dep.integrity: string | void);
    if (object.dep.dependencies) {
      object.dep.dependencies.nestedDep.toLowerCase();
    }
    (type: 'success' | 'merge' | 'conflict');

    // $FlowExpectedError[incompatible-call]
    lockfile.parse();
    // $FlowExpectedError[incompatible-call]
    lockfile.parse(123);
  });

  test('stringify', () => {
    const json = lockfile.parse('test');

    lockfile.stringify(json.object);
    lockfile.stringify(json.object, false);
    lockfile.stringify(json.object, false, false);

    // $FlowExpectedError[incompatible-indexer]
    // $FlowExpectedError[incompatible-call]
    lockfile.stringify(json);
    // $FlowExpectedError[incompatible-call]
    lockfile.stringify('test');
    // $FlowExpectedError[incompatible-call]
    lockfile.stringify(json.object, '');
    // $FlowExpectedError[incompatible-call]
    lockfile.stringify(json.object, true, '');
  });
});
