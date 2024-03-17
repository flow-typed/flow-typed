// @flow
import fs from 'fs';

import {
  run,
  writeFlowConfig,
  TEST_DIR,
  selectFlowTestVersions,
} from '../runTests';
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
};

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

  describe('writeFlowConfig', () => {
    const fixtureBasePath = path.join(
      process.cwd(),
      'src/commands/__tests__/__runTests-fixtures__',
    );
    const testDir = path.join(TEST_DIR, 'unit-test');
    const flowConfigFile = path.join(testDir, '.flowconfig');

    const createFlowConfig = async (
      version: string,
      depPaths?: Array<string> = [],
    ) => {
      await writeFlowConfig(
        fixtureBasePath,
        testDir,
        path.join(fixtureBasePath, 'definitions/npm/def/'),
        version,
        depPaths,
      );

      return fs.readFileSync(flowConfigFile, 'utf-8').split('\n');
    };

    beforeAll(() => {
      fs.mkdirSync(testDir, {recursive: true});
    });

    afterAll(() => {
      fs.rmdirSync(testDir, {recursive: true});
    });

    it('writes the file correctly', async () => {
      const flowConfigSplit = await createFlowConfig('0.181.0');

      const matches = [
        '[libs]',
        'def',
        /.*cli\/src\/commands\/__tests__\/__util__\/tdd_framework\.js$/,
        '',
        '[options]',
        'include_warnings=true',
        'server.max_workers=0',
        '',
        'sharedmemory.heap_size=3221225472',
        '',
        '',
        '[ignore]',
        /.*\/cli\/node_modules$/,
        '',
        '[lints]',
        'implicit-inexact-object=error',
        '',
      ];

      matches.forEach((match, i) => {
        expect(flowConfigSplit[i]).toMatch(match);
      });
    });

    it('writes flow suppression if flow version is less than 0.125.0', async () => {
      const flowConfigSplit = await createFlowConfig('0.124.0');

      const matches = [
        '[libs]',
        'def',
        /.*cli\/src\/commands\/__tests__\/__util__\/tdd_framework\.js$/,
        '',
        '[options]',
        'include_warnings=true',
        'server.max_workers=0',
        '',
        'sharedmemory.heap_size=3221225472',
        'suppress_comment=\\\\(.\\\\|\\n\\\\)*\\\\$FlowExpectedError',
        '',
        '[ignore]',
        /.*\/cli\/node_modules$/,
        '',
        '[lints]',
        'implicit-inexact-object=error',
        '',
      ];

      matches.forEach((match, i) => {
        expect(flowConfigSplit[i]).toMatch(match);
      });
    });

    it('does not have inexplicit lint when flow version less than 0.104.0', async () => {
      const flowConfigSplit = await createFlowConfig('0.103.0');

      const matches = [
        '[libs]',
        'def',
        /.*cli\/src\/commands\/__tests__\/__util__\/tdd_framework\.js$/,
        '',
        '[options]',
        'include_warnings=true',
        'server.max_workers=0',
        '',
        'sharedmemory.heap_size=3221225472',
        'suppress_comment=\\\\(.\\\\|\\n\\\\)*\\\\$FlowExpectedError',
        '',
        '[ignore]',
        /.*\/cli\/node_modules$/,
        '',
        '[lints]',
        '',
        '',
      ];

      matches.forEach((match, i) => {
        expect(flowConfigSplit[i]).toMatch(match);
      });
    });

    it('has inexplicit lint when flow version above 0.104.0 and below 0.201.0', async () => {
      const flowConfigSplit = await createFlowConfig('0.200.1');

      const matches = [
        '[libs]',
        'def',
        /.*cli\/src\/commands\/__tests__\/__util__\/tdd_framework\.js$/,
        '',
        '[options]',
        'include_warnings=true',
        'server.max_workers=0',
        '',
        'sharedmemory.heap_size=3221225472',
        '',
        '',
        '[ignore]',
        /.*\/cli\/node_modules$/,
        '',
        '[lints]',
        'implicit-inexact-object=error',
        '',
      ];

      matches.forEach((match, i) => {
        expect(flowConfigSplit[i]).toMatch(match);
      });
    });

    it('has ambiguous obj instead of inexplicit lint beyond expected version', async () => {
      const flowConfigSplit = await createFlowConfig('0.201.0');

      const matches = [
        '[libs]',
        'def',
        /.*cli\/src\/commands\/__tests__\/__util__\/tdd_framework\.js$/,
        '',
        '[options]',
        'include_warnings=true',
        'server.max_workers=0',
        '',
        'sharedmemory.heap_size=3221225472',
        '',
        '',
        '[ignore]',
        /.*\/cli\/node_modules$/,
        '',
        '[lints]',
        '',
        'ambiguous-object-type=error',
      ];

      matches.forEach((match, i) => {
        expect(flowConfigSplit[i]).toMatch(match);
      });
    });

    it('writes the dependency definitions correctly', async () => {
      const flowConfigSplit = await createFlowConfig('0.183.0', [
        'dep-1',
        'dep-2',
      ]);

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
        '',
        'sharedmemory.heap_size=3221225472',
        '',
        '',
        '[ignore]',
        /.*\/cli\/node_modules$/,
        '',
        '[lints]',
        '',
        '',
      ];

      matches.forEach((match, i) => {
        expect(flowConfigSplit[i]).toMatch(match);
      });
    });
  });

  describe('selectFlowTestVersions', () => {
    const orderedFlowVersions = [
      'v0.193.0',
      'v0.192.0',
      'v0.191.0',
      'v0.190.1',
      'v0.190.0',
      'v0.189.0',
      'v0.188.2',
      'v0.188.1',
      'v0.188.0',
      'v0.187.1',
      'v0.187.0',
      'v0.186.0',
      'v0.185.2',
      'v0.185.1',
      'v0.185.0',
      'v0.184.0',
      'v0.183.1',
      'v0.183.0',
      'v0.182.0',
      'v0.181.2',
      'v0.181.1',
      'v0.181.0',
      'v0.180.1',
      'v0.180.0',
      'v0.179.0',
      'v0.178.1',
      'v0.178.0',
      'v0.177.0',
      'v0.176.3',
      'v0.176.2',
      'v0.176.1',
      'v0.176.0',
      'v0.175.1',
      'v0.175.0',
      'v0.174.1',
      'v0.174.0',
      'v0.173.0',
      'v0.172.0',
      'v0.171.0',
      'v0.170.0',
      'v0.169.0',
      'v0.168.0',
      'v0.167.1',
      'v0.167.0',
      'v0.166.1',
      'v0.166.0',
      'v0.165.1',
      'v0.165.0',
      'v0.164.0',
      'v0.163.0',
      'v0.162.1',
      'v0.162.0',
      'v0.161.0',
      'v0.160.2',
      'v0.160.1',
      'v0.160.0',
      'v0.159.0',
      'v0.158.0',
      'v0.157.0',
      'v0.156.0',
      'v0.155.1',
      'v0.155.0',
      'v0.154.0',
      'v0.153.0',
      'v0.152.0',
      'v0.151.0',
      'v0.150.1',
      'v0.150.0',
      'v0.149.0',
      'v0.148.0',
      'v0.147.0',
      'v0.146.0',
      'v0.145.0',
      'v0.144.0',
      'v0.143.1',
      'v0.143.0',
      'v0.142.0',
      'v0.141.0',
      'v0.140.0',
      'v0.139.0',
      'v0.138.0',
      'v0.137.0',
      'v0.136.0',
      'v0.135.0',
      'v0.134.0',
      'v0.133.0',
      'v0.132.0',
      'v0.131.0',
      'v0.130.0',
      'v0.129.0',
      'v0.128.0',
      'v0.127.0',
      'v0.126.1',
      'v0.126.0',
      'v0.125.1',
      'v0.125.0',
      'v0.124.0',
      'v0.123.0',
      'v0.122.0',
      'v0.121.0',
    ];

    it('returns the first 15 normally', () => {
      expect(
        selectFlowTestVersions(
          orderedFlowVersions,
          {
            kind: 'ranged',
            lower: {major: 0, minor: 104, patch: 'x', prerel: null},
            upper: null,
          },
          15,
        ),
      ).toEqual([
        'v0.193.0',
        'v0.192.0',
        'v0.191.0',
        'v0.190.1',
        'v0.190.0',
        'v0.189.0',
        'v0.188.2',
        'v0.188.1',
        'v0.188.0',
        'v0.187.1',
        'v0.187.0',
        'v0.186.0',
        'v0.185.2',
        'v0.185.1',
        'v0.185.0',
      ]);
    });

    it('returns all versions in a range if there are not enough versions in the range', () => {
      expect(
        selectFlowTestVersions(
          orderedFlowVersions,
          {
            kind: 'ranged',
            lower: {major: 0, minor: 188, patch: 'x', prerel: null},
            upper: null,
          },
          15,
        ),
      ).toEqual([
        'v0.193.0',
        'v0.192.0',
        'v0.191.0',
        'v0.190.1',
        'v0.190.0',
        'v0.189.0',
        'v0.188.2',
        'v0.188.1',
        'v0.188.0',
      ]);
    });

    it('returns versions only within set range', () => {
      expect(
        selectFlowTestVersions(
          orderedFlowVersions,
          {
            kind: 'ranged',
            lower: {major: 0, minor: 185, patch: 'x', prerel: null},
            upper: {major: 0, minor: 188, patch: 'x', prerel: null},
          },
          15,
        ),
      ).toEqual([
        'v0.188.2',
        'v0.188.1',
        'v0.188.0',
        'v0.187.1',
        'v0.187.0',
        'v0.186.0',
        'v0.185.2',
        'v0.185.1',
        'v0.185.0',
      ]);
    });

    it('returns versions only within set range up to max release versions', () => {
      expect(
        selectFlowTestVersions(
          orderedFlowVersions,
          {
            kind: 'ranged',
            lower: {major: 0, minor: 105, patch: 'x', prerel: null},
            upper: {major: 0, minor: 188, patch: 'x', prerel: null},
          },
          15,
        ),
      ).toEqual([
        'v0.188.2',
        'v0.188.1',
        'v0.188.0',
        'v0.187.1',
        'v0.187.0',
        'v0.186.0',
        'v0.185.2',
        'v0.185.1',
        'v0.185.0',
        'v0.184.0',
        'v0.183.1',
        'v0.183.0',
        'v0.182.0',
        'v0.181.2',
        'v0.181.1',
      ]);
    });
  });
});
