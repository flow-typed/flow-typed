// @flow

import {_formatDefTable} from "../search.js";
import {stringToVersion} from "../../lib/semver.js";

describe('search command', () => {
  describe('_formatDefTable()', () => {
    function _generateFixturePkg(name, verStr, flowVerStr) {
      return {
        pkgName: name,
        pkgVersion: stringToVersion(verStr),
        pkgVersionStr: verStr,
        pkgNameVersionStr: `${name}_${verStr}`,
        flowVersion: stringToVersion(verStr),
        flowVersionStr: flowVerStr,
        path: '',
        testFilePaths: [],
      };
    }
    it('beautifully formats a table of libDefs', () => {
      const fixture = [
        _generateFixturePkg('mori', 'v0.3.x', '>=v0.22.x'),
        _generateFixturePkg('mori', 'v0.3.x', '>=v0.18.x'),
      ];

      const formatted = _formatDefTable(fixture);
      expect(formatted).toEqual(
        "\nFound definitions:" + "\n" +
        "╔══════╤═════════════════╤══════════════╗" + "\n" +
        "║ Name │ Package Version │ Flow Version ║" + "\n" +
        "╟──────┼─────────────────┼──────────────╢" + "\n" +
        "║ mori │ v0.3.x          │ >=v0.22.x    ║" + "\n" +
        "╟──────┼─────────────────┼──────────────╢" + "\n" +
        "║ mori │ v0.3.x          │ >=v0.18.x    ║" + "\n" +
        "╚══════╧═════════════════╧══════════════╝" + "\n"
      );
    });

    it('gracefully handles not finding any definitions', () => {
      const fixture = [];
      const formatted = _formatDefTable(fixture);
      expect(formatted).toEqual('No definitions found, sorry!');
    });
  });
});
