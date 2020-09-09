import { describe, it } from "flow-typed-test";
import { customAlphabet, nanoid } from "nanoid/async";

describe('nanoid/async', () => {
  it('returns a string', async () => {
    const id1: string = await nanoid();

    // $FlowExpectedError
    const id2: number = await nanoid();
  });

  it('size should be a number', async () => {
    await nanoid(10);

    // $FlowExpectedError
    await nanoid("10");
  });

  it('customAlphabet()', async () => {
    const customId = customAlphabet('', 0);

    const id1: string = await customId();

    // $FlowExpectedError
    const id2: number = await customId();
  });
});
