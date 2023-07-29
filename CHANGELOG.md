# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [3.9.0] 2023-07-28

### Fixed
- [cli] Bump semver to patch vulnerability (#4479) 
- [cli:test] Fix CI tests for environments (#4463)
- [cli] Fix a bug from flow that stopped testing for ambiguous obj exac… 
- [cli] Fix running definition tests locally on MacOS (#4440) 
- [cli]Fix runTests command for flow@^0.200.0 set exact_by_default option (#4423)
- Bump http-cache-semantics from 4.0.4 to 4.1.1 in /cli (#4420) 
- Bump json5 from 2.1.1 to 2.2.3 in /cli (#4416) 
- Bump minimatch from 3.0.4 to 3.1.2 in /cli (#4409) 
- Bump word-wrap from 1.2.3 to 1.2.4 in /cli (#4469) 
- Bump tough-cookie from 4.0.0 to 4.1.3 in /cli (#4464) 

## [3.8.0] 2022-06-26

### Added
- **Core definitions (#4255)**
- Create test harness (#4268)
- Make use of flow-typed.config.js for ignored (#4288)

### Changed
- Consistent list logging (#4287) 
- Coerce cli version with semver to allow for prerelease tags (#4291)
- Fix if dependency is resolved npm package (#4298)
- Bump minimist from 1.2.0 to 1.2.6 in (#4293)
- [docs] contract -> contrast (#4281)
- [docs] update command doesn't take positional arguments (#4328)
- [docs] document create-stub --typescript flag (#4329)

## [3.7.0] 2022-02-21

### Added
- New `outdated` command (#4171) 

### Changed
- CLI tool now ships with flowtypes (#4233) 
- Install can match with alpha versions now (#4247) 

### Fixed
- Fix create def with scopes (#4234)
- Fix buffer deprecation error (#4270)
- Temporarily turn off validate-def checks against npm (#4249) 
- Bump ajv from 6.11.0 to 6.12.6 in /cli (#4260) 
- Bump node-fetch from 2.6.6 to 2.6.7 in /cli (#4254) 
- Bump shelljs from 0.8.3 to 0.8.5 in /cli (#4237) 

## [3.6.1] 2022-01-09

### Changed
- Provide better logs related to dir structure when running tests (#4213)

### Fixed
- Pin colors@1.4.0 to fix security vuln (#4229)
- Fix installing minor libdef version (#4224)
- Allow .DS_Store files in definitions nested directories (#4217)
- [docs] Fix some link issues in contributing docs (#4212)
- [docs] Fix the documented pathing for an ignoring eslint (#4218)

## [3.6.0] 2021-12-25

### Added
- Add a published readme (#4182)

### Fixed
- Dramatically improve install time (#4193)
- Replace unzipper with node-stream-zip (#4180)
- Install will restart flow bin (#4185)
- Upgrade octokit/rest version (#4197)
- [docs] Move wiki to /docs and serve with docsify (#4179)

### Removed
- Fix definitions not running in ci env (#4187)

## [3.5.0] 2021-11-27

### Added
- Added support for Yarn monorepos (#4140)
- New --skipCache option for `install` command (#4170)
- Add @babel/eslint-parser@7.16.3
- Add @babel/plugin-syntax-flow@7.16.0
- Add @babel/plugin-transform-react-jsx@7.16.0

### Changed
- Update flow-bin version to latest version (#4153)
- `install` will also install lib defs of dependencies that ship with library (#4143)
- Only test against changed versions with `only-changed` option (#4168)
- Bump `table` from 5.4.6 to 6.7.3 (#4175)
- Bump `ansi-regex` from 5.0.0 to 5.0.1 (#4177)
- Update multiple devDependencies (#4174)
  - Bump @babel/cli from 7.8.4 to 7.16.0
  - Bump @babel/core from 7.8.4 to 7.16.0
  - Bump @babel/preset-env from 7.8.4 to 7.16.4
  - Bump @babel/preset-flow from 7.8.3 to 7.16.0
  - Bump eslint from 6.8.0 to 8.3.0
  - Bump eslint-config-prettier from 6.10.1 to 8.3.0
  - Bump eslint-plugin-fb-flow from 0.0.1 to 0.0.4
  - Bump eslint-plugin-flowtype from 4.6.0 to 8.0.3
  - Bump eslint-plugin-prettier from 3.1.2 to 4.0.0
  - Bump flow-bin from 0.164.0 to 0.165.1
  - Bump jest from 25.1.027.3.1

### Fixed
- Fix installing lib def package when dependency version uses >= (#4157)
- Support for slash-style comments in dependencies (#4169)
- Remove babel-eslint@10.0.3
- Remove babel-jest@25.1.0


## [3.4.0] 2021-10-20

### Added
- `quick_run_def_tests` now supports arguments (#4064)
- Add `eslint-plugin-fb-flow` ESLint plugin (#4114)
- New `create-def` command and script for easier libdef creation (#4125)
- Add support for .ignore file (#4133)

### Changed
- Add package health badge to the README (#4049)
- Update CI node versions in Github Actions to 12 & 14 (#4082)

### Fixed
- Fix flow-typed sometimes writing an empty file (#4011)
- Bump y18n from 4.0.0 to 4.0.1 (#4054)
- Bump lodash from 4.17.19 to 4.17.21 (#4077)
- Bump hosted-git-info from 2.7.1 to 2.8.9 (#4079)
- Bump browserslist from 4.8.7 to 4.16.6 (#4081)
- Bump ws from 7.2.1 to 7.4.6 (#4084)
- Bump normalize-url from 4.5.0 to 4.5.1 (#4090)
- Bump glob-parent from 5.0.0 to 5.1.2 (#4091)
- Bump path-parse from 1.0.6 to 1.0.7 (#4118)
- Bump tmpl from 1.0.4 to 1.0.5 (#4139)

## [3.3.1] 2021-02-17

### Fixed
- Fix a regression introduced in 3.3.0 (#4023)

## [3.3.0] 2021-02-17

### Added
- Locate modules with Yarn PnP in PnP projects (#3963)

### Changed
- Move from TravisCI to Github Actions
- Clean up fs.readFile usage (#3966)
- Update cli flow version to 0.144.0 (#4014)
- Lock semver to fix install command (#4018)
- Bump node-fetch from 2.6.0 to 2.6.1 in /cli (#3896)
- [Docs] Update new libdefs minimum Flow version (#3954)

### Fixed
- Fix installing patch range lib defs (#4003)
- Fix broken flow breaking function (#4017)
- Fix tests not running in CI (#4010)
- Update git author information for Github Action. (#3952)

## [3.2.1] 2020-07-23

### Changed
- Better fix for semver throwing errors for versions of `v0.x.x` (#3866)

## [3.2.0] 2020-07-12

### Changed
- Support flow versions > 0.125.0 (#3855)
- Improved eslint/prettier integration (#3787)

### Fixed
- Add workaround for semver throwing errors for versions of `v0.x.x` (#3842)
- Avoid uncaught error when network fails (#3846)
- Fix <<STUB>> parsing (#3786)

## [3.1.0] 2020-03-18

### Changed
- Remove react-dom from built-in flow libdefs (#3748)

### Fixed
- Fix --overwrite install command option type (#3754)

## [3.0.0] 2020-02-18

### Added
- Recommend matching commands (#3700)

### Changed
- **[BREAKING-CHANGE]** Drop support for node < 10 (#3743)
- Travis specs now run on node 10 & 12, as opposed to 8 & 10 (#3743)

### Fixed
- Updated octokit/rest to deprecation message (#3602)
- Fix GH_CLIENT usage in runTests test (#3638)

## [2.6.2] - 2019-10-23

### Added
- Added `--overwrite` option to the `install` command (#3535)

### Changed
- Travis specs now run on node 8 & 10, as opposed to 6 & 8 (#3485)

### Fixed
- Updated octokit/rest to avoid vulnerability (#3602)
- Fixes git package support (#3537)
- Explicit inexact object syntax (#3467)
- Fixes eslint errors in /cli (#3485)

## [2.6.1] - 2019-07-30

### Fixed
- Fix runTests on Windows (#3446)

## [2.6.0] - 2019-07-15

### Added
- Generate stub declarations for subdirectory modules such as `core-js/stable` and `core-js/es/symbol` in core-js (#3426)
- Passing `--typescript` to `create-stub` will use [flowgen](https://github.com/joarwilk/flowgen) to create a stub form an existing, published typescript definition (#3387)

### Removed
- The `version` command has been dropped in favor of the native `--version` flag

## [2.5.2] - 2019-05-15

### Added
- Added `useCacheUntil` flag to `install` command (#3305)

## [2.5.1] - 2018-07-06

### Changed
- Temporarily disable stub guessing (#2485)

## [2.5.0] - 2018-07-06

The flow-typed project has moved to a new organization, [@flow-typed](http://github.com/flow-typed)!

### Added
- Added `cacheDir` flag to `install` and `update` commands (#2016)

### Changed
- Improved stub generation with guessed properties (#2027)
- Replace deprecated `github@0.2.4` with Octokit (#2107)

### Fixed
- Correctly handle uninstalling of scoped packages (#2355)
- Ignore Flow version 0.63.0 when running specs, as it was failing builds (#2423)

## [2.4.0] - 2018-03-16

### IMPORTANT

A week after this release, all previous versions of `flow-typed` on npm will be DEPRECATED, in order to encourage upgrading to version `2.4.0`. After which, we will be introducing files to definition folders under `/definitions/npm`, which will break the `search`, `install` and `validate-defs` commands.

**We strongly recommend upgrading to `2.4.0` within that timeframe.**

### Added
- Allow any file type (.md, .json) under `/definitions/npm/<library>_vx.x.x/` (#1962)
- `describe` and `it` can now be importing from `'flow-typed-test'` in `_test` files (#1942)
  - See [CONTRIBUTING.md](https://github.com/flow-typed/flow-typed/blob/master/CONTRIBUTING.md)
- Root directory option (-rootDir) to install command (#1835)

### Changed
- Replace `unzip` with `unzipper` (#1957)

### Fixed
- Fix jest specs breaking by adding `babel-core` as a dependency (#1864)
