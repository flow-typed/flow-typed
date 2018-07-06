# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
