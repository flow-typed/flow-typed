// @flow

(require('../../lib/git'): any).rebaseRepoMaster = jest.fn();

import {
  _clearCustomCacheDir as clearCustomCacheDir,
  _setCustomCacheDir as setCustomCacheDir,
} from '../../lib/cacheRepoUtils';

import {copyDir, mkdirp} from '../../lib/fileUtils';

import {parseDirString as parseFlowDirString} from '../../lib/flowVersion';

import {
  add as gitAdd,
  commit as gitCommit,
  init as gitInit,
  setLocalConfig as gitConfig,
} from '../../lib/git';

import {fs, path, child_process} from '../../lib/node';

import {getNpmLibDefs} from '../../lib/npm/npmLibDefs';

import {testProject} from '../../lib/TEST_UTILS';

import {
  _determineFlowVersion as determineFlowVersion,
  _installNpmLibDefs as installNpmLibDefs,
  _installNpmLibDef as installNpmLibDef,
  run,
} from '../install';

const BASE_FIXTURE_ROOT = path.join(__dirname, '__install-fixtures__');

function _mock(mockFn) {
  return ((mockFn: any): JestMockFn<*, *>);
}

async function touchFile(filePath) {
  await fs.close(await fs.open(filePath, 'w'));
}

async function writePkgJson(filePath, pkgJson) {
  await fs.writeJson(filePath, pkgJson);
}

describe('install (command)', () => {
  describe('determineFlowVersion', () => {
    it('infers version from path if arg not passed', () => {
      return testProject(async ROOT_DIR => {
        const ARBITRARY_PATH = path.join(ROOT_DIR, 'some', 'arbitrary', 'path');
        await Promise.all([
          mkdirp(ARBITRARY_PATH),
          touchFile(path.join(ROOT_DIR, '.flowconfig')),
          writePkgJson(path.join(ROOT_DIR, 'package.json'), {
            name: 'test',
            devDependencies: {
              'flow-bin': '^0.40.0',
            },
          }),
        ]);

        const flowVer = await determineFlowVersion(ARBITRARY_PATH);
        expect(flowVer).toEqual({
          kind: 'specific',
          ver: {
            major: 0,
            minor: 40,
            patch: 0,
            prerel: null,
          },
        });
      });
    });

    it('uses explicitly specified version', async () => {
      const explicitVer = await determineFlowVersion('/', '0.7.0');
      expect(explicitVer).toEqual({
        kind: 'specific',
        ver: {
          major: 0,
          minor: 7,
          patch: 0,
          prerel: null,
        },
      });
    });

    it("uses 'v'-prefixed explicitly specified version", async () => {
      const explicitVer = await determineFlowVersion('/', 'v0.7.0');
      expect(explicitVer).toEqual({
        kind: 'specific',
        ver: {
          major: 0,
          minor: 7,
          patch: 0,
          prerel: null,
        },
      });
    });
  });

  describe('installNpmLibDefs', () => {
    const origConsoleError = console.error;

    beforeEach(() => {
      (console: any).error = jest.fn();
    });

    afterEach(() => {
      (console: any).error = origConsoleError;
    });

    it('errors if unable to find a project root (.flowconfig)', () => {
      return testProject(async ROOT_DIR => {
        const result = await installNpmLibDefs({
          cwd: ROOT_DIR,
          flowVersion: parseFlowDirString('flow_v0.40.0'),
          explicitLibDefs: [],
          libdefDir: 'flow-typed',
          verbose: false,
          overwrite: false,
          skip: false,
          ignoreDeps: [],
          useCacheUntil: 1000 * 60,
        });
        expect(result).toBe(1);
        expect(_mock(console.error).mock.calls).toEqual([
          [
            'Error: Unable to find a flow project in the current dir or any of ' +
              "it's parent dirs!\n" +
              'Please run this command from within a Flow project.',
          ],
        ]);
      });
    });

    it(
      "errors if an explicitly specified libdef arg doesn't match npm " +
        'pkgver format',
      () => {
        return testProject(async ROOT_DIR => {
          await touchFile(path.join(ROOT_DIR, '.flowconfig'));
          await writePkgJson(path.join(ROOT_DIR, 'package.json'), {
            name: 'test',
            devDependencies: {
              'flow-bin': '^0.40.0',
            },
          });
          const result = await installNpmLibDefs({
            cwd: ROOT_DIR,
            flowVersion: parseFlowDirString('flow_v0.40.0'),
            explicitLibDefs: ['INVALID'],
            libdefDir: 'flow-typed',
            verbose: false,
            overwrite: false,
            skip: false,
            ignoreDeps: [],
            useCacheUntil: 1000 * 60,
          });
          expect(result).toBe(1);
          expect(_mock(console.error).mock.calls).toEqual([
            [
              'ERROR: Package not found from package.json.\n' +
                'Please specify version for the package in the format of `foo@1.2.3`',
            ],
          ]);
        });
      },
    );

    it('warns if 0 dependencies are found in package.json', () => {
      return testProject(async ROOT_DIR => {
        await Promise.all([
          touchFile(path.join(ROOT_DIR, '.flowconfig')),
          writePkgJson(path.join(ROOT_DIR, 'package.json'), {
            name: 'test',
          }),
        ]);
        const result = await installNpmLibDefs({
          cwd: ROOT_DIR,
          flowVersion: parseFlowDirString('flow_v0.40.0'),
          explicitLibDefs: [],
          libdefDir: 'flow-typed',
          verbose: false,
          overwrite: false,
          skip: false,
          ignoreDeps: [],
          useCacheUntil: 1000 * 60,
        });
        expect(result).toBe(0);
        expect(_mock(console.error).mock.calls).toEqual([
          ["No dependencies were found in this project's package.json!"],
        ]);
      });
    });
  });

  describe('installNpmLibDef', () => {
    const FIXTURE_ROOT = path.join(BASE_FIXTURE_ROOT, 'installNpmLibDef');

    const FIXTURE_FAKE_CACHE_REPO_DIR = path.join(
      FIXTURE_ROOT,
      'fakeCacheRepo',
    );

    const origConsoleLog = console.log;
    beforeEach(() => {
      (console: any).log = jest.fn();
    });

    afterEach(() => {
      (console: any).log = origConsoleLog;
    });

    it('installs scoped libdefs within a scoped directory', () => {
      return testProject(async ROOT_DIR => {
        const FAKE_CACHE_DIR = path.join(ROOT_DIR, 'fakeCache');
        const FAKE_CACHE_REPO_DIR = path.join(FAKE_CACHE_DIR, 'repo');
        const FLOWPROJ_DIR = path.join(ROOT_DIR, 'flowProj');
        const FLOWTYPED_DIR = path.join(FLOWPROJ_DIR, 'flow-typed', 'npm');

        await Promise.all([mkdirp(FAKE_CACHE_REPO_DIR), mkdirp(FLOWTYPED_DIR)]);

        await Promise.all([
          copyDir(FIXTURE_FAKE_CACHE_REPO_DIR, FAKE_CACHE_REPO_DIR),
          touchFile(path.join(FLOWPROJ_DIR, '.flowconfig')),
          writePkgJson(path.join(FLOWPROJ_DIR, 'package.json'), {
            name: 'test',
            devDependencies: {
              'flow-bin': '^0.40.0',
            },
          }),
        ]);
        await gitInit(FAKE_CACHE_REPO_DIR),
          await gitAdd(FAKE_CACHE_REPO_DIR, 'definitions');
        await gitCommit(FAKE_CACHE_REPO_DIR, 'FIRST');

        setCustomCacheDir(FAKE_CACHE_DIR);

        const availableLibDefs = await getNpmLibDefs(
          path.join(FAKE_CACHE_REPO_DIR, 'definitions'),
        );

        await installNpmLibDef(availableLibDefs[0], FLOWTYPED_DIR, false);
      });
    });
  });

  describe('end-to-end tests', () => {
    const FIXTURE_ROOT = path.join(BASE_FIXTURE_ROOT, 'end-to-end');

    const FIXTURE_FAKE_CACHE_REPO_DIR = path.join(
      FIXTURE_ROOT,
      'fakeCacheRepo',
    );

    const origConsoleLog = console.log;
    const origConsoleError = console.error;
    beforeEach(() => {
      (console: any).log = jest.fn();
      (console: any).error = jest.fn();
    });
    afterEach(() => {
      (console: any).log = origConsoleLog;
      (console: any).error = origConsoleError;
    });

    async function fakeProjectEnv(runTest) {
      return await testProject(async ROOT_DIR => {
        const FAKE_CACHE_DIR = path.join(ROOT_DIR, 'fakeCache');
        const FAKE_CACHE_REPO_DIR = path.join(FAKE_CACHE_DIR, 'repo');
        const FLOWPROJ_DIR = path.join(ROOT_DIR, 'flowProj');
        const FLOWTYPED_DIR = path.join(FLOWPROJ_DIR, 'flow-typed', 'npm');

        await Promise.all([mkdirp(FAKE_CACHE_REPO_DIR), mkdirp(FLOWTYPED_DIR)]);

        await copyDir(FIXTURE_FAKE_CACHE_REPO_DIR, FAKE_CACHE_REPO_DIR);

        await gitInit(FAKE_CACHE_REPO_DIR),
          await Promise.all([
            gitConfig(FAKE_CACHE_REPO_DIR, 'user.name', 'Test Author'),
            gitConfig(FAKE_CACHE_REPO_DIR, 'user.email', 'test@flow-typed.org'),
          ]);
        await gitAdd(FAKE_CACHE_REPO_DIR, 'definitions');
        await gitCommit(FAKE_CACHE_REPO_DIR, 'FIRST');

        setCustomCacheDir(FAKE_CACHE_DIR);

        const origCWD = process.cwd;
        (process: any).cwd = () => FLOWPROJ_DIR;
        try {
          await runTest(FLOWPROJ_DIR);
        } finally {
          (process: any).cwd = origCWD;
          clearCustomCacheDir();
        }
      });
    }

    it('installs available libdefs', () => {
      return fakeProjectEnv(async FLOWPROJ_DIR => {
        // Create some dependencies
        await Promise.all([
          touchFile(path.join(FLOWPROJ_DIR, '.flowconfig')),
          writePkgJson(path.join(FLOWPROJ_DIR, 'package.json'), {
            name: 'test',
            devDependencies: {
              'flow-bin': '^0.43.0',
            },
            dependencies: {
              foo: '1.2.3',
            },
          }),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'foo')),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
        ]);

        // Run the install command
        await run({
          overwrite: false,
          verbose: false,
          skip: false,
          ignoreDeps: [],
          explicitLibDefs: [],
        });

        // Installs libdefs
        expect(
          await Promise.all([
            fs.exists(
              path.join(
                FLOWPROJ_DIR,
                'flow-typed',
                'npm',
                'flow-bin_v0.x.x.js',
              ),
            ),
            fs.exists(
              path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'foo_v1.x.x.js'),
            ),
          ]),
        ).toEqual([true, true]);

        // Signs installed libdefs
        const fooLibDefContents = await fs.readFile(
          path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'foo_v1.x.x.js'),
          'utf8',
        );
        expect(fooLibDefContents).toContain('// flow-typed signature: ');
        expect(fooLibDefContents).toContain('// flow-typed version: ');
      });
    });

    it('installs available libdefs using PnP', () => {
      return fakeProjectEnv(async FLOWPROJ_DIR => {
        // Create some dependencies
        await Promise.all([
          touchFile(path.join(FLOWPROJ_DIR, '.flowconfig')),
          writePkgJson(path.join(FLOWPROJ_DIR, 'package.json'), {
            name: 'test',
            installConfig: {
              pnp: true,
            },
            devDependencies: {
              'flow-bin': '^0.43.0',
            },
            dependencies: {
              // Use local foo for initial install
              foo: 'file:./foo',
            },
          }),
          mkdirp(path.join(FLOWPROJ_DIR, 'foo')),
        ]);

        await writePkgJson(path.join(FLOWPROJ_DIR, 'foo/package.json'), {
          name: 'foo',
          version: '1.2.3',
        });

        // Yarn install so PnP file resolves to local foo
        await child_process.execP('yarn install', {cwd: FLOWPROJ_DIR});

        // Overwrite foo dep so it's like we installed from registry instead
        writePkgJson(path.join(FLOWPROJ_DIR, 'package.json'), {
          name: 'test',
          installConfig: {
            pnp: true,
          },
          devDependencies: {
            'flow-bin': '^0.43.0',
          },
          dependencies: {
            foo: '1.2.3',
          },
        });

        // Run the install command
        await run({
          overwrite: false,
          verbose: false,
          skip: false,
          ignoreDeps: [],
          explicitLibDefs: [],
        });

        // Installs libdefs
        expect(
          await Promise.all([
            fs.exists(
              path.join(
                FLOWPROJ_DIR,
                'flow-typed',
                'npm',
                'flow-bin_v0.x.x.js',
              ),
            ),
            fs.exists(
              path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'foo_v1.x.x.js'),
            ),
          ]),
        ).toEqual([true, true]);

        // Signs installed libdefs
        const fooLibDefRawContents = await fs.readFile(
          path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'foo_v1.x.x.js'),
        );
        const fooLibDefContents = fooLibDefRawContents.toString();
        expect(fooLibDefContents).toContain('// flow-typed signature: ');
        expect(fooLibDefContents).toContain('// flow-typed version: ');
      });
    });

    it('ignores libdefs in dev, bundled, optional or peer dependencies when flagged', () => {
      return fakeProjectEnv(async FLOWPROJ_DIR => {
        // Create some dependencies
        await Promise.all([
          touchFile(path.join(FLOWPROJ_DIR, '.flowconfig')),
          writePkgJson(path.join(FLOWPROJ_DIR, 'package.json'), {
            name: 'test',
            devDependencies: {
              foo: '1.2.3',
            },
            peerDependencies: {
              'flow-bin': '^0.43.0',
            },
            optionalDependencies: {
              foo: '2.0.0',
            },
            bundledDependencies: {
              bar: '^1.6.9',
            },
            dependencies: {
              foo: '1.2.3',
            },
          }),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'foo')),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'bar')),
        ]);

        // Run the install command
        await run({
          overwrite: false,
          verbose: false,
          skip: false,
          ignoreDeps: ['dev', 'optional', 'bundled'],
          explicitLibDefs: [],
        });

        // Installs libdefs
        expect(
          await Promise.all([
            fs.exists(
              path.join(
                FLOWPROJ_DIR,
                'flow-typed',
                'npm',
                'flow-bin_v0.x.x.js',
              ),
            ),
            fs.exists(
              path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'foo_v1.x.x.js'),
            ),
            fs.exists(
              path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'bar_v1.x.x.js'),
            ),
          ]),
        ).toEqual([true, true, false]);
      });
    });

    it('stubs unavailable libdefs', () => {
      return fakeProjectEnv(async FLOWPROJ_DIR => {
        // Create some dependencies
        await Promise.all([
          touchFile(path.join(FLOWPROJ_DIR, '.flowconfig')),
          writePkgJson(path.join(FLOWPROJ_DIR, 'package.json'), {
            name: 'test',
            devDependencies: {
              'flow-bin': '^0.43.0',
            },
            dependencies: {
              someUntypedDep: '1.2.3',
            },
          }),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'someUntypedDep')),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
        ]);

        // Run the install command
        await run({
          overwrite: false,
          verbose: false,
          skip: false,
          explicitLibDefs: [],
        });

        // Installs a stub for someUntypedDep
        expect(
          await fs.exists(
            path.join(
              FLOWPROJ_DIR,
              'flow-typed',
              'npm',
              'someUntypedDep_vx.x.x.js',
            ),
          ),
        ).toBe(true);
      });
    });

    it("doesn't stub unavailable libdefs when --skip is passed", () => {
      return fakeProjectEnv(async FLOWPROJ_DIR => {
        // Create some dependencies
        await Promise.all([
          touchFile(path.join(FLOWPROJ_DIR, '.flowconfig')),
          writePkgJson(path.join(FLOWPROJ_DIR, 'package.json'), {
            name: 'test',
            devDependencies: {
              'flow-bin': '^0.43.0',
            },
            dependencies: {
              someUntypedDep: '1.2.3',
            },
          }),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'someUntypedDep')),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
        ]);

        // Run the install command
        await run({
          overwrite: false,
          verbose: false,
          skip: true,
          explicitLibDefs: [],
        });

        // Installs a stub for someUntypedDep
        expect(
          await fs.exists(path.join(FLOWPROJ_DIR, 'flow-typed', 'npm')),
        ).toBe(true);
      });
    });

    it('overwrites stubs when libdef becomes available (with --overwrite)', () => {
      return fakeProjectEnv(async FLOWPROJ_DIR => {
        // Create some dependencies
        await Promise.all([
          touchFile(path.join(FLOWPROJ_DIR, '.flowconfig')),
          writePkgJson(path.join(FLOWPROJ_DIR, 'package.json'), {
            name: 'test',
            devDependencies: {
              'flow-bin': '^0.43.0',
            },
            dependencies: {
              foo: '1.2.3',
            },
          }),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'foo')),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
        ]);

        await fs.writeFile(
          path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'foo_vx.x.x.js'),
          '',
        );

        // Run the install command
        await run({
          overwrite: true,
          verbose: false,
          skip: false,
          explicitLibDefs: [],
        });

        // Replaces the stub with the real typedef
        expect(
          await Promise.all([
            fs.exists(
              path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'foo_vx.x.x.js'),
            ),
            fs.exists(
              path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'foo_v1.x.x.js'),
            ),
          ]),
        ).toEqual([false, true]);
      });
    });

    it("doesn't overwrite tweaked libdefs (without --overwrite)", () => {
      return fakeProjectEnv(async FLOWPROJ_DIR => {
        // Create some dependencies
        await Promise.all([
          touchFile(path.join(FLOWPROJ_DIR, '.flowconfig')),
          writePkgJson(path.join(FLOWPROJ_DIR, 'package.json'), {
            name: 'test',
            devDependencies: {
              'flow-bin': '^0.43.0',
            },
            dependencies: {
              foo: '1.2.3',
            },
          }),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'foo')),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
        ]);

        // Run the install command
        await run({
          overwrite: false,
          verbose: false,
          skip: false,
          explicitLibDefs: [],
        });

        const libdefFilePath = path.join(
          FLOWPROJ_DIR,
          'flow-typed',
          'npm',
          'foo_v1.x.x.js',
        );

        // Tweak the libdef for foo
        const libdefFileContent =
          (await fs.readFile(libdefFilePath, 'utf8')) + '\n// TWEAKED!';
        await fs.writeFile(libdefFilePath, libdefFileContent);

        // Run install command again
        await run({
          overwrite: false,
          verbose: false,
          skip: false,
          explicitLibDefs: [],
        });

        // Verify that the tweaked libdef file wasn't overwritten
        expect(await fs.readFile(libdefFilePath, 'utf8')).toBe(
          libdefFileContent,
        );
      });
    });

    it('overwrites tweaked libdefs when --overwrite is passed', () => {
      return fakeProjectEnv(async FLOWPROJ_DIR => {
        // Create some dependencies
        await Promise.all([
          touchFile(path.join(FLOWPROJ_DIR, '.flowconfig')),
          writePkgJson(path.join(FLOWPROJ_DIR, 'package.json'), {
            name: 'test',
            devDependencies: {
              'flow-bin': '^0.43.0',
            },
            dependencies: {
              foo: '1.2.3',
            },
          }),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'foo')),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
        ]);

        // Run the install command
        await run({
          overwrite: false,
          verbose: false,
          skip: false,
          explicitLibDefs: [],
        });

        const libdefFilePath = path.join(
          FLOWPROJ_DIR,
          'flow-typed',
          'npm',
          'foo_v1.x.x.js',
        );

        // Tweak the libdef for foo
        const libdefFileContent = await fs.readFile(libdefFilePath, 'utf8');
        await fs.writeFile(libdefFilePath, libdefFileContent + '\n// TWEAKED!');

        // Run install command again
        await run({
          overwrite: true,
          skip: false,
          verbose: false,
          explicitLibDefs: [],
        });

        // Verify that the tweaked libdef file wasn't overwritten
        expect(await fs.readFile(libdefFilePath, 'utf8')).toBe(
          libdefFileContent,
        );
      });
    });

    it('uses flow-bin defined in another package.json', () => {
      return fakeProjectEnv(async FLOWPROJ_DIR => {
        // Create some dependencies
        await Promise.all([
          touchFile(path.join(FLOWPROJ_DIR, '.flowconfig')),
          writePkgJson(path.join(FLOWPROJ_DIR, 'package.json'), {
            name: 'test',
            dependencies: {
              foo: '1.2.3',
            },
          }),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'foo')),
          writePkgJson(path.join(FLOWPROJ_DIR, '..', 'package.json'), {
            name: 'parent',
            devDependencies: {
              'flow-bin': '^0.45.0',
            },
          }),
          mkdirp(path.join(FLOWPROJ_DIR, '..', 'node_modules', 'flow-bin')),
        ]);

        // Run the install command
        await run({
          overwrite: false,
          verbose: false,
          skip: false,
          packageDir: path.join(FLOWPROJ_DIR, '..'),
          explicitLibDefs: [],
        });

        // Installs libdef
        expect(
          await fs.exists(
            path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'foo_v1.x.x.js'),
          ),
        ).toEqual(true);
      });
    });

    it('uses .flowconfig from specified root directory', () => {
      return fakeProjectEnv(async FLOWPROJ_DIR => {
        // Create some dependencies
        await Promise.all([
          mkdirp(path.join(FLOWPROJ_DIR, 'src')),
          writePkgJson(path.join(FLOWPROJ_DIR, 'package.json'), {
            name: 'test',
            devDependencies: {
              'flow-bin': '^0.43.0',
            },
            dependencies: {
              foo: '1.2.3',
            },
          }),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'foo')),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
        ]);

        await touchFile(path.join(FLOWPROJ_DIR, 'src', '.flowconfig'));

        // Run the install command
        await run({
          overwrite: false,
          verbose: false,
          skip: false,
          rootDir: path.join(FLOWPROJ_DIR, 'src'),
          explicitLibDefs: [],
        });

        // Installs libdef
        expect(
          await fs.exists(
            path.join(
              FLOWPROJ_DIR,
              'src',
              'flow-typed',
              'npm',
              'foo_v1.x.x.js',
            ),
          ),
        ).toEqual(true);
      });
    });
  });
});
