// @flow
import {run} from '../runTests';
import {path} from '../../lib/node';

const runTest = async (mockConsole: boolean) => {
  if (mockConsole) {
    jest.spyOn(console, 'log').mockImplementation(jest.fn());
  }
  const args = {
    testPatterns: ['regression-1385_v1.x.x'],
    numberOfFlowVersions: 2, // this can be reduced to 1 when latest flow release is not ignored
    path: path.join(__dirname, '__runTests-fixtures__'),
  };
  return await run(args);
}

describe('run-tests (command)', () => {
  describe('regression 1385', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });

    it("returns error code if $FlowExpectedError test doesn't fail", async () => {
      const status = await runTest(false);
      expect(status).toEqual(1);
    });

    it('console logs about unused suppression', async () => {
      await runTest(true);

      const expectedError = `Unused suppression`;
      const calls = ((console.log: any): JestMockFn<any, any>).mock.calls;
      const lastErrorMsg = calls[calls.length - 1][1];
      expect(lastErrorMsg).toContain(expectedError);
    });
  });
});
