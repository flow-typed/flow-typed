// @flow
import fs from 'fs';

import {run, writeFlowConfig, TEST_DIR} from '../runTests';
import {path} from '../../lib/node';

describe('run-tests (command)', () => {
  describe('regression 1385', () => {
    const origConsoleLog = console.log;
    let status;
    beforeEach(async () => {
      (console: any).log = jest.fn();
      const args = {
        testPatterns: ['regression-1385_v1.x.x'],
        numberOfFlowVersions: 2, //this can be reduced to 1 when latest flow release is not ignored
        path: path.join(__dirname, '__runTests-fixtures__'),
      };
      status = await run(args);
    }, 30000);

    afterEach(() => {
      (console: any).log = origConsoleLog;
    });

    it("returns error code if $FlowExpectedError test doesn't fail", async () => {
      expect(status).toEqual(1);
    });

    it('console logs about unused suppression', async () => {
      const expectedError = `Unused suppression`;
      const calls = ((console.log: any): JestMockFn<*, *>).mock.calls;
      const lastErrorMsg = calls[calls.length - 1][1];
      expect(lastErrorMsg).toContain(expectedError);
    });
  });

  describe('writeFlowConfig', () => {
    const fixtureBasePath = path.join(
      process.cwd(),
      'src/commands/__tests__/__runTests-fixtures__',
    );
    const testDir = path.join(TEST_DIR, 'unit-test');
    const flowConfigFile = path.join(testDir, '.flowconfig');

    beforeAll(() => {
      fs.mkdirSync(testDir, {recursive: true});
    });

    afterAll(() => {
      fs.rmdirSync(testDir, {recursive: true});
    });

    it('writes the file correctly', async () => {
      await writeFlowConfig(
        fixtureBasePath,
        testDir,
        path.join(fixtureBasePath, 'definitions/npm/def/'),
        '0.181.0',
        [],
      );

      const flowConfigSplit = fs
        .readFileSync(flowConfigFile, 'utf-8')
        .split('\n');

      const matches = [
        '[libs]',
        'def',
        /.*cli\/src\/commands\/__tests__\/__util__\/tdd_framework\.js$/,
        '',
        '[options]',
        'include_warnings=true',
        'server.max_workers=0',
        'sharedmemory.heap_size=3221225472',
        '',
        '',
        '[ignore]',
        /.*\/cli\/node_modules$/,
        '',
        '[lints]',
        'implicit-inexact-object=error',
      ];

      matches.forEach((match, i) => {
        expect(flowConfigSplit[i]).toMatch(match);
      });
    });

    it('writes flow suppression if flow version is less than 0.125.0', async () => {
      await writeFlowConfig(
        fixtureBasePath,
        testDir,
        path.join(fixtureBasePath, 'definitions/npm/def/'),
        '0.124.0',
        [],
      );

      const flowConfigSplit = fs
        .readFileSync(flowConfigFile, 'utf-8')
        .split('\n');

      const matches = [
        '[libs]',
        'def',
        /.*cli\/src\/commands\/__tests__\/__util__\/tdd_framework\.js$/,
        '',
        '[options]',
        'include_warnings=true',
        'server.max_workers=0',
        'sharedmemory.heap_size=3221225472',
        'suppress_comment=\\\\(.\\\\|\\n\\\\)*\\\\$FlowExpectedError',
        '',
        '[ignore]',
        /.*\/cli\/node_modules$/,
        '',
        '[lints]',
        'implicit-inexact-object=error',
      ];

      matches.forEach((match, i) => {
        expect(flowConfigSplit[i]).toMatch(match);
      });
    });

    it('does not have inexplicit lint when less than flow version less than 0.104.0', async () => {
      await writeFlowConfig(
        fixtureBasePath,
        testDir,
        path.join(fixtureBasePath, 'definitions/npm/def/'),
        '0.103.0',
        [],
      );

      const flowConfigSplit = fs
        .readFileSync(flowConfigFile, 'utf-8')
        .split('\n');

      const matches = [
        '[libs]',
        'def',
        /.*cli\/src\/commands\/__tests__\/__util__\/tdd_framework\.js$/,
        '',
        '[options]',
        'include_warnings=true',
        'server.max_workers=0',
        'sharedmemory.heap_size=3221225472',
        'suppress_comment=\\\\(.\\\\|\\n\\\\)*\\\\$FlowExpectedError',
        '',
        '[ignore]',
        /.*\/cli\/node_modules$/,
        '',
        '[lints]',
        '',
      ];

      matches.forEach((match, i) => {
        expect(flowConfigSplit[i]).toMatch(match);
      });
    });

    it('writes the dependency definitions correctly', async () => {
      await writeFlowConfig(
        fixtureBasePath,
        testDir,
        path.join(fixtureBasePath, 'definitions/npm/def/'),
        '0.183.0',
        ['dep-1', 'dep-2'],
      );

      const flowConfigSplit = fs
        .readFileSync(flowConfigFile, 'utf-8')
        .split('\n');

      const matches = [
        '[libs]',
        'dep-1',
        'dep-2',
        'def',
        /.*cli\/src\/commands\/__tests__\/__util__\/tdd_framework\.js$/,
        '',
        '[options]',
        'include_warnings=true',
        'server.max_workers=0',
        'sharedmemory.heap_size=3221225472',
        '',
        '',
        '[ignore]',
        /.*\/cli\/node_modules$/,
        '',
        '[lints]',
        '',
      ];

      matches.forEach((match, i) => {
        expect(flowConfigSplit[i]).toMatch(match);
      });
    });
  });
});
