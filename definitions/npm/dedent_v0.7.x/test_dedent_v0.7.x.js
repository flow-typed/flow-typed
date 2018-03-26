// @flow

import dedent from 'dedent';

const trimmed: string = dedent`
  Hi
    I
      Am
      Trimmed
`;

const interpolated: string = dedent`
    cool ${'values'} right? 
`;

const asAFunction: string = dedent(`
  Hi there
`);

// $ExpectError
(dedent(5): number);

// $ExpectError
(dedent(5): string);
