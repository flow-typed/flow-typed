// @flow

import * as node_path from 'path';

export default function isInFlowTypedRepo(): boolean {
  const PATTERN = new RegExp('\\' + node_path.sep + 'flow-typed');
  return PATTERN.test(process.cwd());
}
