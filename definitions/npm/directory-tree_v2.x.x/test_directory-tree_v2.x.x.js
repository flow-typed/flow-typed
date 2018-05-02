// @flow

import dirTree from 'directory-tree';

const tree: {
  path: string,
  name: string,
  size: number,
  type: 'directory' | 'file',
  extension?: string,
} = dirTree(__dirname);

// $ExpectError
const expectArray: Array<{}> = dirTree(__dirname);
