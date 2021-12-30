// @flow
import { describe, it } from 'flow-typed-test';
import appRootDir from 'app-root-dir';

describe('app-root-dir', () => {
  it('gets', () => {
    const dir: string = appRootDir.get();

    // $FlowExpectedError[incompatible-cast]
    (appRootDir.get(): number);
    // $FlowExpectedError[extra-arg]
    appRootDir.get('test');
  });

  it('sets', () => {
    const a: void = appRootDir.set(__dirname);

    // $FlowExpectedError[incompatible-call]
    appRootDir.set();
    // $FlowExpectedError[incompatible-type]
    const b: string = appRootDir.set('test');
  });
});
