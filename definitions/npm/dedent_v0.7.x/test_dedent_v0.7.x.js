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

// $FlowExpectedError
(dedent(5): number);

// $FlowExpectedError
(dedent(5): string);
