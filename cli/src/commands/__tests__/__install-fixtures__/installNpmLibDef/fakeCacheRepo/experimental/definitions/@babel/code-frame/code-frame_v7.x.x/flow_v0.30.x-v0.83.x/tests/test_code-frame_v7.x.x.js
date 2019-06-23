// @flow

import {describe, it} from 'flow-typed-test';
import codeFrame, {codeFrameColumns} from '@babel/code-frame';

const code = `
  const number = 1;
  var string = 'foo';
  function print(name: string) {
    console.log(string + name);
  }
`;

it('codeFrame', () => {
  codeFrame(code, 5, 22);
  codeFrame(code, 5, 22, {forceColor: true});
  codeFrame(code, 2, 2, {highlightCode: true});
});

it('codeFrameColumns', () => {
  codeFrameColumns(code, {start: {line: 5, column: 22}});
  codeFrameColumns(code, {start: {line: 5, column: 22}}, {forceColor: true});
  codeFrameColumns(code, {start: {line: 2, column: 2}}, {highlightCode: true});
});
