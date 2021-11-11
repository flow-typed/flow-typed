# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

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
