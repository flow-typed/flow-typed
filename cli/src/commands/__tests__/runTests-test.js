// @flow
import {run} from '../runTests';
import {path} from '../../lib/node';

describe('run-tests (command)', () => {
  describe('regression 1385', () => {
    const origConsoleLog = console.log;
    let status;
    beforeEach(async () => {
      (console: any).log = jest.fn();
      const args = {
        _: ['run-tests', 'regression-1385_v1.x.x'],
        numberOfFlowVersions: 2, //this can be reduced to 1 when latest flow release is not ignored
        path: path.join(__dirname, '__runTests-fixtures__'),
      };
      status = await run(args);
    }, 30000);

    afterEach(() => {
      (console: any).log = origConsoleLog;
    });

    it("returns error code if $ExpectError test doesn't fail", async () => {
      expect(status).toEqual(1);
    });

    it('console logs about unused suppression', async () => {
      const expectedError = `Unused suppression`;
      const calls = ((console.log: any): JestMockFn<*, *>).mock.calls;
      const lastErrorMsg = calls[calls.length - 1][1];
      expect(lastErrorMsg).toContain(expectedError);
    });
  });
});
