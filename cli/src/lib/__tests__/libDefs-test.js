// @flow
jest.enableAutomock();
jest.unmock('../libDefs.js');
jest.unmock('../semver.js');
jest.unmock('semver');
jest.unmock('../flowVersion');

import {filterLibDefs} from '../libDefs.js';
import {parseDirString as parseFlowDirString} from '../flowVersion';

describe('libDefs', () => {
  describe('filterLibDefs', () => {
    function _generateMockLibdef(name, verStr, flowVerStr) {
      return {
        pkgName: name,
        pkgVersionStr: verStr,
        flowVersion: parseFlowDirString(flowVerStr),
        flowVersionStr: flowVerStr,
        path: '',
        testFilePaths: [],
      };
    }

    describe('fuzzy filter', () => {
      it('filters on exact name', () => {
        const fixture = [
          _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.22.x-'),
          _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.18.x-'),
        ];
        const filtered = filterLibDefs(fixture, {type: 'fuzzy', term: 'mori'});
        expect(filtered).toEqual([fixture[1], fixture[0]]);
      });

      it('filters on differently-cased name', () => {
        const fixture = [
          _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.22.x-'),
          _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.18.x-'),
        ];
        const filtered = filterLibDefs(fixture, {type: 'fuzzy', term: 'Mori'});
        expect(filtered).toEqual([fixture[1], fixture[0]]);
      });

      it('filters on partial name', () => {
        const fixture = [
          _generateMockLibdef('**mori', 'v0.3.x', 'flow_v0.22.x-'),
          _generateMockLibdef('mori**', 'v0.3.x', 'flow_v0.18.x-'),
          _generateMockLibdef('mo**ri', 'v0.3.x', 'flow_v0.18.x-'),
        ];
        const filtered = filterLibDefs(fixture, {type: 'fuzzy', term: 'mori'});
        expect(filtered).toEqual([fixture[1], fixture[0]]);
      });

      it('filters on flow version', () => {
        const fixture = [
          _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.22.x-'),
          _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.18.x-'),
        ];
        const filtered = filterLibDefs(fixture, {
          type: 'fuzzy',
          term: 'mori',
          flowVersionStr: 'v0.19.0',
        });
        expect(filtered).toEqual([fixture[1]]);
      });
    });

    describe('exact-name filter', () => {
      it('filters on exact name', () => {
        const fixture = [
          _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.22.x-'),
          _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.18.x-'),
        ];
        const filtered = filterLibDefs(fixture, {
          type: 'exact-name',
          term: 'mori',
        });
        expect(filtered).toEqual([fixture[1], fixture[0]]);
      });

      it('filters on differently-cased name', () => {
        const fixture = [
          _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.22.x-'),
          _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.18.x-'),
        ];
        const filtered = filterLibDefs(fixture, {
          type: 'exact-name',
          term: 'Mori',
        });
        expect(filtered).toEqual([fixture[1], fixture[0]]);
      });

      it('DOES NOT filter on partial name', () => {
        const fixture = [
          _generateMockLibdef('**mori', 'v0.3.x', 'flow_v0.22.x-'),
          _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.18.x-'),
          _generateMockLibdef('mo**ri', 'v0.3.x', 'flow_v0.18.x-'),
        ];
        const filtered = filterLibDefs(fixture, {
          type: 'exact-name',
          term: 'mori',
        });
        expect(filtered).toEqual([fixture[1]]);
      });

      it('filters on flow version', () => {
        const fixture = [
          _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.22.x-'),
          _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.18.x-'),
        ];
        const filtered = filterLibDefs(fixture, {
          type: 'exact-name',
          term: 'mori',
          flowVersionStr: 'v0.19.0',
        });
        expect(filtered).toEqual([fixture[1]]);
      });
    });

    describe('exact filter', () => {
      it('filters on exact name', () => {
        const fixture = [
          _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.22.x-'),
          _generateMockLibdef('notmori', 'v0.3.x', 'flow_v0.22.x-'),
        ];
        const filtered = filterLibDefs(fixture, {
          type: 'exact',
          flowVersionStr: 'v0.30.0',
          pkgName: 'mori',
          pkgVersionStr: 'v0.3.1',
        });
        expect(filtered).toEqual([fixture[0]]);
      });

      it('filters on differently-cased name', () => {
        const fixture = [
          _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.22.x-'),
          _generateMockLibdef('notmori', 'v0.3.x', 'flow_v0.22.x-'),
        ];
        const filtered = filterLibDefs(fixture, {
          type: 'exact',
          flowVersionStr: 'v0.28.0',
          pkgName: 'Mori',
          pkgVersionStr: 'v0.3.x',
        });
        expect(filtered).toEqual([fixture[0]]);
      });

      it('DOES NOT filter on partial name', () => {
        const fixture = [
          _generateMockLibdef('**mori', 'v0.3.x', 'flow_v0.22.x-'),
          _generateMockLibdef('mori**', 'v0.3.x', 'flow_v0.22.x-'),
          _generateMockLibdef('mo**ri', 'v0.3.x', 'flow_v0.22.x-'),
          _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.22.x-'),
        ];
        const filtered = filterLibDefs(fixture, {
          type: 'exact',
          flowVersionStr: 'v0.28.0',
          pkgName: 'mori',
          pkgVersionStr: 'v0.3.1',
        });
        expect(filtered).toEqual([fixture[3]]);
      });

      it('filters on flow version', () => {
        const fixture = [
          _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.22.x-'),
          _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.18.x-'),
        ];
        const filtered = filterLibDefs(fixture, {
          type: 'exact',
          flowVersionStr: 'v0.19.0',
          pkgName: 'mori',
          pkgVersionStr: 'v0.3.x',
        });
        expect(filtered).toEqual([fixture[1]]);
      });

      it('filters and orders from highest to lowest version', () => {
        const fixture = [
          _generateMockLibdef('mori', 'v2.x.x', 'flow_v0.22.x-'),
          _generateMockLibdef('mori', 'v3.x.x', 'flow_v0.22.x-'),
          _generateMockLibdef('mori', 'v2.3.x', 'flow_v0.22.x-'),
          _generateMockLibdef('mori', 'v2.1.x', 'flow_v0.22.x-'),
        ];
        const filtered = filterLibDefs(fixture, {
          type: 'exact',
          flowVersionStr: 'v0.22.0',
          pkgName: 'mori',
          pkgVersionStr: 'v2.3.0',
        });
        expect(filtered).toEqual([fixture[2], fixture[3], fixture[0]]);
      });

      it('filters using default (implied ^) and equals libdef versions', () => {
        const fixture = [
          _generateMockLibdef('mori', 'v2.3.x', 'flow_v0.22.x-'),
          _generateMockLibdef('mori', '=v2.3.x', 'flow_v0.22.x-'),
        ];
        const filtered = filterLibDefs(fixture, {
          type: 'exact',
          flowVersionStr: 'v0.22.0',
          pkgName: 'mori',
          pkgVersionStr: 'v2.4.0',
        });
        expect(filtered).toEqual([fixture[0]]);
      });

      describe('given a package range', () => {
        it('DOES NOT match when libdef range does not intersect package range', () => {
          const fixture = [
            _generateMockLibdef('mori', 'v0.2.x', 'flow_v0.22.x-'),
            _generateMockLibdef('mori', 'v0.4.x', 'flow_v0.22.x-'),
          ];
          const filtered = filterLibDefs(fixture, {
            type: 'exact',
            flowVersionStr: 'v0.x.x',
            pkgName: 'mori',
            pkgVersionStr: '^0.3.0',
          });
          expect(filtered).toEqual([]);
        });

        it(
          'DOES NOT match when ranges intersect but package supports older ' +
            'versions than libdef',
          () => {
            const fixture = [
              _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.22.x-'),
            ];
            const filtered = filterLibDefs(fixture, {
              type: 'exact',
              flowVersionStr: 'v0.22.0',
              pkgName: 'mori',
              pkgVersionStr: '>=0.2.9 <0.3.0',
            });
            expect(filtered).toEqual([]);
          },
        );

        it('matches when ranges intersect and libdef supports older versions', () => {
          const fixture = [
            _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.22.x-'),
            _generateMockLibdef('mori', 'v0.3.8', 'flow_v0.22.x-'),
          ];
          const filtered = filterLibDefs(fixture, {
            type: 'exact',
            flowVersionStr: 'v0.22.0',
            pkgName: 'mori',
            pkgVersionStr: '>=0.3.2 <0.3.8',
          });
          expect(filtered).toEqual([fixture[0]]);
        });
      });
    });
  });
});
