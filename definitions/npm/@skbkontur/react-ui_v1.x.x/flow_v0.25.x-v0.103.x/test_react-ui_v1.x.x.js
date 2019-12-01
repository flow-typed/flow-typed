/* @flow */
import { it, describe } from 'flow-typed-test';
import Button from '@skbkontur/react-ui/Button';

describe('react-ui', () => {
  it('controls prop types', () => {
    <Button>Button</Button>;

    // $ExpectError
    <Button unknown>Button</Button>;
  });
});
