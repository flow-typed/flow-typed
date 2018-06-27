import { describe, it } from 'flow-typed-test';

import dirTree from 'directory-tree';

type dirTreeType = {
  path: string,
  name: string,
  size: number,
  type: 'directory' | 'file',
  extension?: string,
};

describe('# directory-tree', () => {
  it('work', () => {
    const tree: dirTreeType = dirTree(__dirname);
  });

  it('use options', () => {
    const useOptions: dirTreeType = dirTree(__dirname, {
      normalizePath: patthString => patthString,
      exclude: ['excludePath'],
      extensions: ['.js'],
    });
  });

  it('use onEachFile', () => {
    const useOnEachFile: dirTreeType = dirTree(__dirname, null, (item, PATH) => {
      const { path, name } = item;
      const pathname: string = PATH.resolve(path, name);
    });
  });

  it('type error', () => {
    // $ExpectError
    const expectNumber: number = dirTree(__dirname);
  });
});
