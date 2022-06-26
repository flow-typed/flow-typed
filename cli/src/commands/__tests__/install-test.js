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
import colors from 'colors/safe';

import {
  _installNpmLibDefs as installNpmLibDefs,
  _installNpmLibDef as installNpmLibDef,
  run,
} from '../install';

const BASE_FIXTURE_ROOT = path.join(__dirname, '__install-fixtures__');

function _mock(mockFn) {
  return ((mockFn: any): JestMockFn<any, any>);
}

async function touchFile(filePath) {
  await fs.close(await fs.open(filePath, 'w'));
}

async function writePkgJson(filePath, pkgJson) {
  await fs.writeJson(filePath, pkgJson);
}

const defaultRunProps = {
  overwrite: false,
  verbose: false,
  skip: false,
  skipFlowRestart: true,
  explicitLibDefs: [],
};

describe('install (command)', () => {
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
          skipCache: false,
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
            skipCache: false,
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
          skipCache: false,
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

        // $FlowExpectedError[method-unbinding]
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
          ...defaultRunProps,
          ignoreDeps: [],
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

    it('installs version matched libdef for alpha versions', () => {
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
              foo: '1.2.3-alpha.5',
            },
          }),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'foo')),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
        ]);

        // Run the install command
        await run({
          ...defaultRunProps,
          ignoreDeps: [],
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
          ...defaultRunProps,
          ignoreDeps: [],
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
          ...defaultRunProps,
          ignoreDeps: ['dev', 'optional', 'bundled'],
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
        await run(defaultRunProps);

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
        await run(defaultRunProps);

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
          ...defaultRunProps,
          overwrite: true,
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
        await run(defaultRunProps);

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
        await run(defaultRunProps);

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
        await run(defaultRunProps);

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
          ...defaultRunProps,
          overwrite: true,
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
          ...defaultRunProps,
          packageDir: path.join(FLOWPROJ_DIR, '..'),
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
          ...defaultRunProps,
          rootDir: path.join(FLOWPROJ_DIR, 'src'),
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

    it("doesn't install definitions that are ignored", () => {
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
        await mkdirp(path.join(FLOWPROJ_DIR, 'src', 'flow-typed'));
        await touchFile(
          path.join(FLOWPROJ_DIR, 'src', 'flow-typed', '.ignore'),
        );
        await fs.writeJson(
          path.join(FLOWPROJ_DIR, 'src', 'flow-typed', '.ignore'),
          'foo',
        );

        // Run the install command
        await run({
          ...defaultRunProps,
          rootDir: path.join(FLOWPROJ_DIR, 'src'),
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
        ).toEqual(false);
      });
    });

    it("doesn't install definitions under a scope but explicitly ignored", () => {
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
              '@scoped/package': '1.2.3',
              '@scoped/ignore': '1.2.3',
              foo: '1.2.3',
            },
          }),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'foo')),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
        ]);

        await touchFile(path.join(FLOWPROJ_DIR, 'src', '.flowconfig'));
        await mkdirp(path.join(FLOWPROJ_DIR, 'src', 'flow-typed'));
        await touchFile(
          path.join(FLOWPROJ_DIR, 'src', 'flow-typed', '.ignore'),
        );
        await fs.writeJson(
          path.join(FLOWPROJ_DIR, 'src', 'flow-typed', '.ignore'),
          '@scoped/ignore',
        );

        // Run the install command
        await run({
          ...defaultRunProps,
          rootDir: path.join(FLOWPROJ_DIR, 'src'),
        });

        // Installs libdef
        expect(
          await fs.exists(
            path.join(
              FLOWPROJ_DIR,
              'src',
              'flow-typed',
              'npm',
              '@scoped',
              'package_vx.x.x.js',
            ),
          ),
        ).toEqual(true);
        expect(
          await fs.exists(
            path.join(
              FLOWPROJ_DIR,
              'src',
              'flow-typed',
              'npm',
              '@scoped',
              'ignore_vx.x.x.js',
            ),
          ),
        ).toEqual(false);
      });
    });

    it("doesn't install definitions under an ignored scope", () => {
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
              '@scoped/package': '1.2.3',
              foo: '1.2.3',
            },
          }),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'foo')),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
        ]);

        await touchFile(path.join(FLOWPROJ_DIR, 'src', '.flowconfig'));
        await mkdirp(path.join(FLOWPROJ_DIR, 'src', 'flow-typed'));
        await touchFile(
          path.join(FLOWPROJ_DIR, 'src', 'flow-typed', '.ignore'),
        );
        await fs.writeJson(
          path.join(FLOWPROJ_DIR, 'src', 'flow-typed', '.ignore'),
          '@scoped',
        );

        // Run the install command
        await run({
          ...defaultRunProps,
          rootDir: path.join(FLOWPROJ_DIR, 'src'),
        });

        // Installs libdef
        expect(
          await fs.exists(
            path.join(
              FLOWPROJ_DIR,
              'src',
              'flow-typed',
              'npm',
              '@scoped',
              'package_vx.x.x.js',
            ),
          ),
        ).toEqual(false);
      });
    });

    it("doesn't install definitions under an ignored scope with trailing slash", () => {
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
              '@scoped/package': '1.2.3',
              foo: '1.2.3',
            },
          }),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'foo')),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
        ]);

        await touchFile(path.join(FLOWPROJ_DIR, 'src', '.flowconfig'));
        await mkdirp(path.join(FLOWPROJ_DIR, 'src', 'flow-typed'));
        await touchFile(
          path.join(FLOWPROJ_DIR, 'src', 'flow-typed', '.ignore'),
        );
        await fs.writeJson(
          path.join(FLOWPROJ_DIR, 'src', 'flow-typed', '.ignore'),
          '@scoped/',
        );

        // Run the install command
        await run({
          ...defaultRunProps,
          rootDir: path.join(FLOWPROJ_DIR, 'src'),
        });

        // Installs libdef
        expect(
          await fs.exists(
            path.join(
              FLOWPROJ_DIR,
              'src',
              'flow-typed',
              'npm',
              '@scoped',
              'package_vx.x.x.js',
            ),
          ),
        ).toEqual(false);
      });
    });

    it("doesn't install definitions if ignored with flow-typed.config.js", () => {
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
              '@scoped/package': '1.2.3',
              foo: '1.2.3',
            },
          }),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'foo')),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
        ]);

        await touchFile(path.join(FLOWPROJ_DIR, 'src', '.flowconfig'));
        await mkdirp(path.join(FLOWPROJ_DIR, 'src', 'flow-typed'));
        await touchFile(
          path.join(FLOWPROJ_DIR, 'src', 'flow-typed.config.json'),
        );
        await fs.writeJson(
          path.join(FLOWPROJ_DIR, 'src', 'flow-typed.config.json'),
          {ignore: ['foo', '@scoped']},
        );

        // Run the install command
        await run({
          ...defaultRunProps,
          rootDir: path.join(FLOWPROJ_DIR, 'src'),
        });

        // Installs libdef
        expect(
          await fs.exists(
            path.join(
              FLOWPROJ_DIR,
              'src',
              'flow-typed',
              'npm',
              '@scoped',
              'package_vx.x.x.js',
            ),
          ),
        ).toEqual(false);
        expect(
          await fs.exists(
            path.join(
              FLOWPROJ_DIR,
              'src',
              'flow-typed',
              'npm',
              'foo_vx.x.x.js',
            ),
          ),
        ).toEqual(false);
      });
    });

    it('treats dependency prefixed with `>=` the same as `^`', () => {
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
              foo: '>=1.2.3',
            },
          }),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'foo')),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
        ]);

        // Run the install command
        await run({
          ...defaultRunProps,
          rootDir: path.join(FLOWPROJ_DIR, 'src'),
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
        ).toEqual(false);
      });
    });

    it('installs dependencies lib defs if the dependency ships with with flow files', () => {
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
              untyped: '1.2.3',
            },
          }),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'untyped')),
        ]);

        await touchFile(
          path.join(FLOWPROJ_DIR, 'node_modules', 'untyped', 'package.json'),
        );
        await writePkgJson(
          path.join(FLOWPROJ_DIR, 'node_modules', 'untyped', 'package.json'),
          {
            name: 'untyped',
            dependencies: {
              foo: '^1.2.3',
            },
          },
        );
        await touchFile(
          path.join(FLOWPROJ_DIR, 'node_modules', 'untyped', 'index.js.flow'),
        );

        await touchFile(path.join(FLOWPROJ_DIR, 'src', '.flowconfig'));
        await mkdirp(path.join(FLOWPROJ_DIR, 'src', 'flow-typed'));

        // Run the install command
        await run({
          ...defaultRunProps,
          rootDir: path.join(FLOWPROJ_DIR, 'src'),
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

    it('does not have dependencies lib def overwrite root lib def requirements', () => {
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
              untyped: '1.2.3',
              foo: '1.2.3',
            },
          }),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'untyped')),
        ]);

        await touchFile(
          path.join(FLOWPROJ_DIR, 'node_modules', 'untyped', 'package.json'),
        );
        await writePkgJson(
          path.join(FLOWPROJ_DIR, 'node_modules', 'untyped', 'package.json'),
          {
            name: 'untyped',
            dependencies: {
              foo: '^0.5.0',
            },
          },
        );
        await touchFile(
          path.join(FLOWPROJ_DIR, 'node_modules', 'untyped', 'index.js.flow'),
        );

        await touchFile(path.join(FLOWPROJ_DIR, 'src', '.flowconfig'));
        await mkdirp(path.join(FLOWPROJ_DIR, 'src', 'flow-typed'));

        // Run the install command
        await run({
          ...defaultRunProps,
          rootDir: path.join(FLOWPROJ_DIR, 'src'),
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

    it('does not install dependencies lib defs if the dependency has no flow files', () => {
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
              untyped: '1.2.3',
            },
          }),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'untyped')),
        ]);

        await touchFile(
          path.join(FLOWPROJ_DIR, 'node_modules', 'untyped', 'package.json'),
        );
        await writePkgJson(
          path.join(FLOWPROJ_DIR, 'node_modules', 'untyped', 'package.json'),
          {
            name: 'untyped',
            dependencies: {
              foo: '^1.2.3',
            },
          },
        );

        await touchFile(path.join(FLOWPROJ_DIR, 'src', '.flowconfig'));
        await mkdirp(path.join(FLOWPROJ_DIR, 'src', 'flow-typed'));

        // Run the install command
        await run({
          ...defaultRunProps,
          rootDir: path.join(FLOWPROJ_DIR, 'src'),
        });

        // Installs libdef
        expect(
          await fs.exists(
            path.join(
              FLOWPROJ_DIR,
              'src',
              'flow-typed',
              'npm',
              'untyped_vx.x.x.js',
            ),
          ),
        ).toEqual(true);
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
        ).toEqual(false);
      });
    });

    it('does not crash with dependency listed as // for comments', () => {
      return fakeProjectEnv(async FLOWPROJ_DIR => {
        // Create some dependencies
        await Promise.all([
          mkdirp(path.join(FLOWPROJ_DIR, 'src')),
          writePkgJson(path.join(FLOWPROJ_DIR, 'package.json'), {
            name: 'test',
            devDependencies: {
              '//': 'some comment that should not install nor crash',
              'flow-bin': '^0.43.0',
            },
            dependencies: {
              foo: '1.2.3',
            },
          }),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
          mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'foo')),
        ]);

        await touchFile(path.join(FLOWPROJ_DIR, 'src', '.flowconfig'));

        // Run the install command
        await run({
          ...defaultRunProps,
          rootDir: path.join(FLOWPROJ_DIR, 'src'),
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

    describe('env defs', () => {
      it('installs env definitions if it exists in flow-typed.config.json', () => {
        return fakeProjectEnv(async FLOWPROJ_DIR => {
          // Create some dependencies
          await Promise.all([
            mkdirp(path.join(FLOWPROJ_DIR, 'src')),
            writePkgJson(path.join(FLOWPROJ_DIR, 'package.json'), {
              name: 'test',
              devDependencies: {
                'flow-bin': '^0.140.0',
              },
            }),
            mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
          ]);

          await touchFile(path.join(FLOWPROJ_DIR, 'src', '.flowconfig'));
          await mkdirp(path.join(FLOWPROJ_DIR, 'src', 'flow-typed'));
          await touchFile(
            path.join(FLOWPROJ_DIR, 'src', 'flow-typed.config.json'),
          );
          await fs.writeJson(
            path.join(FLOWPROJ_DIR, 'src', 'flow-typed.config.json'),
            {env: ['jsx']},
          );

          // Run the install command
          await run({
            ...defaultRunProps,
            rootDir: path.join(FLOWPROJ_DIR, 'src'),
          });

          // Installs env definitions
          expect(
            await fs.exists(
              path.join(
                FLOWPROJ_DIR,
                'src',
                'flow-typed',
                'environments',
                'jsx.js',
              ),
            ),
          ).toEqual(true);
        });
      });

      it('does not install new version of definition if it has been overridden', () => {
        const installedDef = `// flow-typed signature: fa26c13e83581eea415de59d5f03e123
// flow-typed version: /jsx/flow_>=v0.83.x

declare type jsx$HTMLElementProps = {||}`;

        return fakeProjectEnv(async FLOWPROJ_DIR => {
          // Create some dependencies
          await Promise.all([
            mkdirp(path.join(FLOWPROJ_DIR, 'src')),
            writePkgJson(path.join(FLOWPROJ_DIR, 'package.json'), {
              name: 'test',
              devDependencies: {
                'flow-bin': '^0.140.0',
              },
            }),
            mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
          ]);

          await touchFile(path.join(FLOWPROJ_DIR, 'src', '.flowconfig'));
          await mkdirp(path.join(FLOWPROJ_DIR, 'src', 'flow-typed'));
          await mkdirp(
            path.join(FLOWPROJ_DIR, 'src', 'flow-typed', 'environments'),
          );
          await touchFile(
            path.join(
              FLOWPROJ_DIR,
              'src',
              'flow-typed',
              'environments',
              'jsx.js',
            ),
          );
          await fs.writeFile(
            path.join(
              FLOWPROJ_DIR,
              'src',
              'flow-typed',
              'environments',
              'jsx.js',
            ),
            installedDef,
          );
          await touchFile(
            path.join(FLOWPROJ_DIR, 'src', 'flow-typed.config.json'),
          );
          await fs.writeJson(
            path.join(FLOWPROJ_DIR, 'src', 'flow-typed.config.json'),
            {env: ['jsx']},
          );

          // Run the install command
          await run({
            ...defaultRunProps,
            rootDir: path.join(FLOWPROJ_DIR, 'src'),
          });

          // Installs env definitions
          expect(
            await fs.readFile(
              path.join(
                FLOWPROJ_DIR,
                'src',
                'flow-typed',
                'environments',
                'jsx.js',
              ),
              'utf-8',
            ),
          ).toEqual(installedDef);
        });
      });

      it('overrides the env definition if overwrite arg is passed in', () => {
        const installedDef = `// flow-typed signature: fa26c13e83581eea415de59d5f03e123
// flow-typed version: /jsx/flow_>=v0.83.x

declare type jsx$HTMLElementProps = {||}`;

        return fakeProjectEnv(async FLOWPROJ_DIR => {
          // Create some dependencies
          await Promise.all([
            mkdirp(path.join(FLOWPROJ_DIR, 'src')),
            writePkgJson(path.join(FLOWPROJ_DIR, 'package.json'), {
              name: 'test',
              devDependencies: {
                'flow-bin': '^0.140.0',
              },
            }),
            mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
          ]);

          await touchFile(path.join(FLOWPROJ_DIR, 'src', '.flowconfig'));
          await mkdirp(path.join(FLOWPROJ_DIR, 'src', 'flow-typed'));
          await mkdirp(
            path.join(FLOWPROJ_DIR, 'src', 'flow-typed', 'environments'),
          );
          await touchFile(
            path.join(
              FLOWPROJ_DIR,
              'src',
              'flow-typed',
              'environments',
              'jsx.js',
            ),
          );
          await fs.writeFile(
            path.join(
              FLOWPROJ_DIR,
              'src',
              'flow-typed',
              'environments',
              'jsx.js',
            ),
            installedDef,
          );
          await touchFile(
            path.join(FLOWPROJ_DIR, 'src', 'flow-typed.config.json'),
          );
          await fs.writeJson(
            path.join(FLOWPROJ_DIR, 'src', 'flow-typed.config.json'),
            {env: ['jsx']},
          );

          // Run the install command
          await run({
            ...defaultRunProps,
            rootDir: path.join(FLOWPROJ_DIR, 'src'),
            overwrite: true,
          });

          // Installs env definitions
          expect(
            await fs.readFile(
              path.join(
                FLOWPROJ_DIR,
                'src',
                'flow-typed',
                'environments',
                'jsx.js',
              ),
              'utf-8',
            ),
          ).not.toEqual(installedDef);
        });
      });
    });

    describe('definitions with dependencies', () => {
      it('installs a dependency of appropriate version if not installed by project', () => {
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
                'has-dep': '1.2.3',
              },
            }),
            mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
            mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'has-dep')),
          ]);

          await touchFile(path.join(FLOWPROJ_DIR, 'src', '.flowconfig'));
          await mkdirp(path.join(FLOWPROJ_DIR, 'src', 'flow-typed'));

          // Run the install command
          await run({
            ...defaultRunProps,
            rootDir: path.join(FLOWPROJ_DIR, 'src'),
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

      it('will not need to install a dependency if it is already installed by project', () => {
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
                foo: '0.5.1',
                'has-dep': '1.2.3',
              },
            }),
            mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
            mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'foo')),
            mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'has-dep')),
          ]);

          await touchFile(path.join(FLOWPROJ_DIR, 'src', '.flowconfig'));
          await mkdirp(path.join(FLOWPROJ_DIR, 'src', 'flow-typed'));

          // Run the install command
          await run({
            ...defaultRunProps,
            rootDir: path.join(FLOWPROJ_DIR, 'src'),
          });

          // Installs libdef
          expect(
            await Promise.all([
              fs.exists(
                path.join(
                  FLOWPROJ_DIR,
                  'src',
                  'flow-typed',
                  'npm',
                  'foo_v1.x.x.js',
                ),
              ),
              fs.exists(
                path.join(
                  FLOWPROJ_DIR,
                  'src',
                  'flow-typed',
                  'npm',
                  'foo_v0.5.x.js',
                ),
              ),
            ]),
          ).toEqual([false, true]);
        });
      });

      it('will install appropriate version of dependency if definition installed by project is not appropriate', () => {
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
                foo: '2.0.0',
                'has-dep': '1.2.3',
              },
            }),
            mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
            mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'foo')),
            mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'has-dep')),
          ]);

          await touchFile(path.join(FLOWPROJ_DIR, 'src', '.flowconfig'));
          await mkdirp(path.join(FLOWPROJ_DIR, 'src', 'flow-typed'));

          // Run the install command
          await run({
            ...defaultRunProps,
            rootDir: path.join(FLOWPROJ_DIR, 'src'),
          });

          // Installs libdef
          expect(
            await Promise.all([
              fs.exists(
                path.join(
                  FLOWPROJ_DIR,
                  'src',
                  'flow-typed',
                  'npm',
                  'foo_v2.x.x.js',
                ),
              ),
              fs.exists(
                path.join(
                  FLOWPROJ_DIR,
                  'src',
                  'flow-typed',
                  'npm',
                  'foo_v1.x.x.js',
                ),
              ),
            ]),
          ).toEqual([false, true]);
        });
      });

      it('installs deps_ prefix definition as priority if it exists', () => {
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
                'a-override': '^1.0.0',
                override: '^1.0.0',
              },
            }),
            mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
            mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'a-override')),
            mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'override')),
          ]);

          await touchFile(path.join(FLOWPROJ_DIR, 'src', '.flowconfig'));
          await mkdirp(path.join(FLOWPROJ_DIR, 'src', 'flow-typed'));

          // Run the install command
          await run({
            ...defaultRunProps,
            rootDir: path.join(FLOWPROJ_DIR, 'src'),
          });

          // Installs libdef
          expect(
            await Promise.all([
              fs.exists(
                path.join(
                  FLOWPROJ_DIR,
                  'src',
                  'flow-typed',
                  'npm',
                  'deps_override_v1.x.x.js',
                ),
              ),
              fs.exists(
                path.join(
                  FLOWPROJ_DIR,
                  'src',
                  'flow-typed',
                  'npm',
                  'override_v1.x.x.js',
                ),
              ),
              fs.exists(
                path.join(
                  FLOWPROJ_DIR,
                  'src',
                  'flow-typed',
                  'npm',
                  'deps_a-override_v1.x.x.js',
                ),
              ),
              fs.exists(
                path.join(
                  FLOWPROJ_DIR,
                  'src',
                  'flow-typed',
                  'npm',
                  'a-override_v1.x.x.js',
                ),
              ),
            ]),
          ).toEqual([true, false, true, false]);
        });
      });

      it('can recursively install dependency definitions of dependencies', () => {
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
                'has-dep': '^1.0.0',
              },
            }),
            mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')),
            mkdirp(path.join(FLOWPROJ_DIR, 'node_modules', 'has-dep')),
          ]);

          await touchFile(path.join(FLOWPROJ_DIR, 'src', '.flowconfig'));
          await mkdirp(path.join(FLOWPROJ_DIR, 'src', 'flow-typed'));

          // Run the install command
          await run({
            ...defaultRunProps,
            rootDir: path.join(FLOWPROJ_DIR, 'src'),
          });

          // Installs libdef
          expect(
            await Promise.all([
              fs.exists(
                path.join(
                  FLOWPROJ_DIR,
                  'src',
                  'flow-typed',
                  'npm',
                  'has-dep_v1.x.x.js',
                ),
              ),
              fs.exists(
                path.join(
                  FLOWPROJ_DIR,
                  'src',
                  'flow-typed',
                  'npm',
                  'deps_override_v1.x.x.js',
                ),
              ),
              fs.exists(
                path.join(
                  FLOWPROJ_DIR,
                  'src',
                  'flow-typed',
                  'npm',
                  'deps_a-override_v1.x.x.js',
                ),
              ),
            ]),
          ).toEqual([true, true, true]);
        });
      });
    });
  });

  describe('workspace tests', () => {
    const FIXTURE_ROOT = path.join(BASE_FIXTURE_ROOT, 'workspace');

    const FIXTURE_FAKE_CACHE_REPO_DIR = path.join(
      FIXTURE_ROOT,
      'fakeCacheRepo',
    );

    const origConsoleLog = console.log;
    const origConsoleError = console.error;
    const origConsoleWarn = console.warn;
    beforeEach(() => {
      (console: any).log = jest.fn();
      (console: any).error = jest.fn();
      (console: any).warn = jest.fn();
    });
    afterEach(() => {
      (console: any).log = origConsoleLog;
      (console: any).error = origConsoleError;
      (console: any).warn = origConsoleWarn;
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

        // $FlowExpectedError[method-unbinding]
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

    it('supports yarn workspace', () => {
      return fakeProjectEnv(async FLOWPROJ_DIR => {
        await copyDir(path.join(FIXTURE_ROOT, 'yarn-workspace'), FLOWPROJ_DIR);

        // Run the install command
        await run({
          ...defaultRunProps,
          ignoreDeps: [],
        });

        // Installs libdefs
        expect(
          await fs.readdir(path.join(FLOWPROJ_DIR, 'flow-typed', 'npm')),
        ).toEqual([
          'a_vx.x.x.js',
          'bar_v1.x.x.js',
          'c_vx.x.x.js',
          'flow-bin_v0.x.x.js',
          'foo_v1.x.x.js',
        ]);

        // Signs installed libdefs
        const fooLibDefContents = await fs.readFile(
          path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'foo_v1.x.x.js'),
          'utf8',
        );
        expect(fooLibDefContents).toContain('// flow-typed signature: ');
        expect(fooLibDefContents).toContain('// flow-typed version: ');
      });
    });

    it('supports legacy workspace', () => {
      return fakeProjectEnv(async FLOWPROJ_DIR => {
        await copyDir(
          path.join(FIXTURE_ROOT, 'legacy-workspace'),
          FLOWPROJ_DIR,
        );

        // Run the install command
        await run({
          ...defaultRunProps,
          ignoreDeps: [],
        });

        // Installs libdefs
        expect(
          await fs.readdir(path.join(FLOWPROJ_DIR, 'flow-typed', 'npm')),
        ).toEqual([
          'a_vx.x.x.js',
          'bar_v1.x.x.js',
          'c_vx.x.x.js',
          'flow-bin_v0.x.x.js',
          'foo_v1.x.x.js',
        ]);

        // Signs installed libdefs
        const fooLibDefContents = await fs.readFile(
          path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'foo_v1.x.x.js'),
          'utf8',
        );
        expect(fooLibDefContents).toContain('// flow-typed signature: ');
        expect(fooLibDefContents).toContain('// flow-typed version: ');
      });
    });

    it('warns conflicting versions', () => {
      return fakeProjectEnv(async FLOWPROJ_DIR => {
        await copyDir(path.join(FIXTURE_ROOT, 'with-conflict'), FLOWPROJ_DIR);

        // Run the install command
        await run({
          ...defaultRunProps,
          ignoreDeps: [],
        });

        // Installs libdefs
        expect(
          await fs.readdir(path.join(FLOWPROJ_DIR, 'flow-typed', 'npm')),
        ).toEqual([
          'a_vx.x.x.js',
          'c_vx.x.x.js',
          'flow-bin_v0.x.x.js',
          'foo_v1.x.x.js',
        ]);

        // Signs installed libdefs
        const fooLibDefContents = await fs.readFile(
          path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'foo_v1.x.x.js'),
          'utf8',
        );
        expect(fooLibDefContents).toContain('// flow-typed signature: ');
        expect(fooLibDefContents).toContain('// flow-typed version: ');
        expect(console.log).toHaveBeenCalledWith(
          colors.yellow(
            "\t  Conflicting versions for '%s' between '%s' and '%s'",
          ),
          'foo',
          '^1.1.0',
          '^2.0.0',
        );
      });
    });
  });
});
