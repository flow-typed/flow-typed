import { describe, it } from 'flow-typed-test';

import dirTree from 'directory-tree';

describe('# directory-tree', () => {
  it('work', () => {
    const tree: {
      path: string,
      name: string,
      size: number,
      type: 'directory' | 'file',
      extension?: string,
    } = dirTree(__dirname);
  });

  it('type error', () => {
    // $ExpectError
    const expectNumber: number = dirTree(__dirname);
  });
});
