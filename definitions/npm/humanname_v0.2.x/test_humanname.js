// @flow strict

import humanname from 'humanname';
import { describe, it } from 'flow-typed-test';

describe('humanname', () => {
  it('errors', () => {
    // $FlowExpectedError
    humanname();
  });

  it('works', () => {
    (humanname.parse('Mr. Foo').firstName: string);
    (humanname.parse('Mr. Foo').lastName: string);
    (humanname.parse('Mr. Foo').salutation: string);
    (humanname.parse('Mr. Foo').initials: string);
    (humanname.parse('Mr. Foo').suffix: string);
  });
});
