/* @flow */
import * as React from 'react';
import { it, describe } from 'flow-typed-test';
import Button from '@skbkontur/react-ui/Button';

describe('react-ui', () => {
  it('controls prop types', () => {
    <Button>Button</Button>;

    // $FlowExpectedError
    <Button onClick={1}>Button</Button>;
  });
});
