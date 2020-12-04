// @flow
import { describe, it } from 'flow-typed-test';
import { compose } from 'ramda';

const f1 = (a: number): number => 1;

describe("compose()", () => {
  describe('call "compose" with different number of arguments', () => {
    it('rises an error when more then 10 arguments', () => {
      // $FlowExpectedError - compose can't take more than 10 arguments
      compose(f1, f1, f1, f1, f1, f1, f1, f1, f1, f1, f1)(1);
    });

    it('should pass when 10 arguments are provided', () => {
      compose(f1, f1, f1, f1, f1, f1, f1, f1, f1, f1)(1);
    });

    it('should pass when less than 10 arguments are provided', () => {
      compose(f1, f1, f1, f1, f1, f1, f1, f1, f1)(1);
    });

    it('should pass when 1 argument is provided', () => {
      compose(f1)(1);
    });

    it('raises and error when no argument is provided', () => {
      // $FlowExpectedError - compose needs at least one argument
      compose()(1);
    });
  });
});
