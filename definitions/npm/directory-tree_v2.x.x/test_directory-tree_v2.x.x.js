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
      normalizePath: patthString => true,
      exclude: /some_path_to_exclude/,
      extensions: /\.js$/,
    });
  });

  it('use exclude array', () => {
    const exclude: Array<RegExp> = [/some_path_to_exclude/];
    exclude.push(/test/);

    const useExcludeArray: dirTreeType = dirTree(__dirname, {
      exclude,
    });
  });

  it('use exclude array', () => {
    const exclude: $ReadOnlyArray<RegExp> = [/some_path_to_exclude/, /test/];
    const useExcludeReadOnlyArray: dirTreeType = dirTree(__dirname, {
      exclude,
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

  it('should not use children directly', () => {
    const result: dirTreeType = dirTree(__dirname);
    // $ExpectError
    result.children.push('test');
  });
});
