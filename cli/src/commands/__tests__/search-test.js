// @flow

import type {LibDef} from '../../lib/libDefs.js';

import {_formatDefTable} from '../search.js';
import {parseDirString as parseFlowDirString} from '../../lib/flowVersion.js';

describe('search command', () => {
  describe('_formatDefTable()', () => {
    function _generateFixturePkg(
      name: string,
      verStr: string,
      flowVerStr: string,
    ) {
      return {
        pkgName: name,
        pkgVersionStr: verStr,
        configPath: null,
        flowVersion: parseFlowDirString(flowVerStr),
        flowVersionStr: flowVerStr,
        path: '',
        testFilePaths: ([]: Array<string>),
      };
    }
    it('beautifully formats a table of libDefs', () => {
      const fixture = [
        _generateFixturePkg('mori', 'v0.3.x', 'flow_v0.22.x-'),
        _generateFixturePkg('mori', 'v0.3.x', 'flow_v0.18.x-'),
      ];

      const formatted = _formatDefTable(fixture);
      expect(formatted).toEqual(
        '\nFound definitions:' +
          '\n' +
          '╔══════╤═════════════════╤══════════════╗' +
          '\n' +
          '║ Name │ Package Version │ Flow Version ║' +
          '\n' +
          '╟──────┼─────────────────┼──────────────╢' +
          '\n' +
          '║ mori │ v0.3.x          │ >=v0.22.x    ║' +
          '\n' +
          '╟──────┼─────────────────┼──────────────╢' +
          '\n' +
          '║ mori │ v0.3.x          │ >=v0.18.x    ║' +
          '\n' +
          '╚══════╧═════════════════╧══════════════╝' +
          '\n',
      );
    });

    it('gracefully handles not finding any definitions', () => {
      const fixture: Array<LibDef> = [];
      const formatted = _formatDefTable(fixture);
      expect(formatted).toEqual('No definitions found, sorry!');
    });
  });
});
