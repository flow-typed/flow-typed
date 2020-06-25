import { describe, it } from "flow-typed-test";
import { customAlphabet, customRandom, nanoid, urlAlphabet } from "nanoid";

describe('nanoid', () => {
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
    const customId = customAlphabet(urlAlphabet, 0);

    const id1: string = customId();

    // $FlowExpectedError
    const id2: number = customId();
  });

  it('customRandom()', () => {
    const customRandomId = customRandom(urlAlphabet, 0, (size) => new Uint8Array(size));

    const id1: string = customRandomId();

    // $FlowExpectedError
    const id2: number = customRandomId();
  });
});
