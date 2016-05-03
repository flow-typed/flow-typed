// @flow
jest.mock('../github.js', () => {
  const fixtures = require('./libDef-test__fixtures.js');
  return {
    gitHubClient: () => ({
      repos: {
        getContent: function(args, cb) {
          if (args.path === '/definitions') {
            cb(null, fixtures.definitionsFixture);
          } else {
            let name = args.path.match(/\/definitions\/(.*)/)[1];
            cb(null, fixtures.flowVersionsFixture[name]);
          }
        }
      }
    })
  };
});

import {getGHLibsAndFlowVersions, filterDefs} from '../libDef.js';
import {stringToVersion} from '../semver.js';

describe('libDef helpers', () => {
  describe('getGHLibsAndFlowVersions', () => {
    pit('fetches a flat list of all libdefs for every flow version',
    async () => {
      let versions = await getGHLibsAndFlowVersions();
      expect(versions).toEqual([
        { pkgName: 'kefir',
          pkgVersion: { major: 3, minor: 'x', patch: 'x' },
          pkgVersionStr: 'v3.x.x',
          pkgNameVersionStr: 'kefir_v3.x.x',
          flowVersionStr: '>=v0.20.x',
          flowVersion: { range: '>=', major: 0, minor: 20, patch: 'x' }
        },
        { pkgName: 'mori',
          pkgVersion: { major: 0, minor: 3, patch: 'x' },
          pkgVersionStr: 'v0.3.x',
          pkgNameVersionStr: 'mori_v0.3.x',
          flowVersionStr: '>=v0.22.x',
          flowVersion: { range: '>=', major: 0, minor: 22, patch: 'x' }
        },
        { pkgName: 'mori',
          pkgVersion: { major: 0, minor: 3, patch: 'x' },
          pkgVersionStr: 'v0.3.x',
          pkgNameVersionStr: 'mori_v0.3.x',
          flowVersionStr: '>=v0.18.x',
          flowVersion: { range: '>=', major: 0, minor: 18, patch: 'x' }
        }
      ]);
    });
  });

  describe('filterDefs()', () => {
    function _generateFixturePkg(name, verStr, flowVerStr) {
      return {
        pkgName: name,
        pkgVersion: stringToVersion(verStr),
        pkgVersionStr: verStr,
        pkgNameVersionStr: `${name}_${verStr}`,
        flowVersionStr: flowVerStr,
        flowVersion: stringToVersion(verStr),
      };
    }

    describe('fuzzy filter', () => {
      it('filters on exact name', () => {
        const fixture = [
          _generateFixturePkg('mori', 'v0.3.x', '>=v0.22.x'),
          _generateFixturePkg('mori', 'v0.3.x', '>=v0.18.x'),
        ];
        const filtered = filterDefs(
          {type: 'fuzzy', term: 'mori'},
          fixture,
        );
        expect(filtered).toEqual([fixture[1], fixture[0]]);
      });

      it('filters on differently-cased name', () => {
        const fixture = [
          _generateFixturePkg('mori', 'v0.3.x', '>=v0.22.x'),
          _generateFixturePkg('mori', 'v0.3.x', '>=v0.18.x'),
        ];
        const filtered = filterDefs(
          {type: 'fuzzy', term: 'Mori'},
          fixture,
        );
        expect(filtered).toEqual([fixture[1], fixture[0]]);
      });

      it('filters on partial name', () => {
        const fixture = [
          _generateFixturePkg('**mori', 'v0.3.x', '>=v0.22.x'),
          _generateFixturePkg('mori**', 'v0.3.x', '>=v0.18.x'),
          _generateFixturePkg('mo**ri', 'v0.3.x', '>=v0.18.x'),
        ];
        const filtered = filterDefs(
          {type: 'fuzzy', term: 'mori'},
          fixture,
        );
        expect(filtered).toEqual([fixture[1], fixture[0]]);
      });

      it('filters on flow version', () => {
        const fixture = [
          _generateFixturePkg('mori', 'v0.3.x', '>=v0.22.x'),
          _generateFixturePkg('mori', 'v0.3.x', '>=v0.18.x'),
        ];
        const filtered = filterDefs(
          {type: 'fuzzy', term: 'mori'},
          fixture,
          'v0.19.0',
        );
        expect(filtered).toEqual([fixture[1]]);
      });
    });

    describe('exact filter', () => {
      function _generateLibDef(pkgName, pkgVersionStr) {
        return {
          pkgName,
          pkgVersion: stringToVersion(pkgVersionStr),
          pkgVersionStr,
          pkgNameVersionStr: `${pkgName}_${pkgVersionStr}`,
        };
      }

      it('filters on exact name', () => {
        const fixture = [
          _generateFixturePkg('mori', 'v0.3.x', '>=v0.22.x'),
          _generateFixturePkg('notmori', 'v0.3.x', '>=v0.22.x'),
        ];
        const filtered = filterDefs(
          {type: 'exact', libDef: _generateLibDef('mori', 'v0.3.1')},
          fixture,
        );
        expect(filtered).toEqual([fixture[0]]);
      });

      it('filters on differently-cased name', () => {
        const fixture = [
          _generateFixturePkg('mori', 'v0.3.x', '>=v0.22.x'),
          _generateFixturePkg('notmori', 'v0.3.x', '>=v0.22.x'),
        ];
        const filtered = filterDefs(
          {type: 'exact', libDef: _generateLibDef('Mori', 'v0.3.1')},
          fixture,
        );
        expect(filtered).toEqual([fixture[0]]);
      });

      it('DOES NOT filter on partial name', () => {
        const fixture = [
          _generateFixturePkg('**mori', 'v0.3.x', '>=v0.22.x'),
          _generateFixturePkg('mori**', 'v0.3.x', '>=v0.22.x'),
          _generateFixturePkg('mo**ri', 'v0.3.x', '>=v0.22.x'),
          _generateFixturePkg('mori',   'v0.3.x', '>=v0.22.x'),
        ];
        const filtered = filterDefs(
          {type: 'exact', libDef: _generateLibDef('mori', 'v0.3.1')},
          fixture,
        );
        expect(filtered).toEqual([fixture[3]]);
      });

      it('filters on flow version', () => {
        const fixture = [
          _generateFixturePkg('mori', 'v0.3.x', '>=v0.22.x'),
          _generateFixturePkg('mori', 'v0.3.x', '>=v0.18.x'),
        ];
        const filtered = filterDefs(
          {type: 'exact', libDef: _generateLibDef('mori', 'v0.3.1')},
          fixture,
          'v0.19.0',
        );
        expect(filtered).toEqual([fixture[1]]);
      });
    });
  });
});
