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
      const expectedError = `// $ExpectError
        ^^^^^^^^^^^^^^^ Error suppressing comment. Unused suppression`;
      const calls = ((console.log: any): JestMockFn<*, *>).mock.calls;
      // takes the last error message to make sure this does not break in future versions of Flow
      const lastErrorMsg = calls[calls.length - 1][1];
      expect(lastErrorMsg).toContain(expectedError);
    });
  });
});
