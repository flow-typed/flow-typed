// @flow

import {_formatDefTable} from "../search.js";

describe('search command', () => {
  describe('_formatDefTable()', () => {
    it('beautifully formats a table of libDefs', () => {
      const fixture = [
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
