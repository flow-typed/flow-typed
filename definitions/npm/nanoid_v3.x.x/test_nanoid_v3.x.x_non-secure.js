import { describe, it } from "flow-typed-test";
import { customAlphabet, nanoid } from "nanoid/non-secure";

describe('nanoid/non-secure', () => {
  it('returns a string', () => {
    const id1: string = nanoid();

    // $FlowExpectedError
    const id2: number = nanoid();
  });

  it('size should be a number', () => {
    nanoid(10);

    // $FlowExpectedError
    nanoid("10");
  });

  it('customAlphabet()', () => {
    const customId = customAlphabet('', 0);

    const id1: string = customId();

    // $FlowExpectedError
    const id2: number = customId();
  });
});
