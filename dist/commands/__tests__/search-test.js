"use strict";

var _search = require("../search.js");

var _flowVersion = require("../../lib/flowVersion.js");

describe('search command', function () {
  describe('_formatDefTable()', function () {
    function _generateFixturePkg(name, verStr, flowVerStr) {
      return {
        pkgName: name,
        pkgVersionStr: verStr,
        flowVersion: (0, _flowVersion.parseDirString)(flowVerStr),
        flowVersionStr: flowVerStr,
        path: '',
        testFilePaths: []
      };
    }

    it('beautifully formats a table of libDefs', function () {
      var fixture = [_generateFixturePkg('mori', 'v0.3.x', 'flow_v0.22.x-'), _generateFixturePkg('mori', 'v0.3.x', 'flow_v0.18.x-')];
      var formatted = (0, _search._formatDefTable)(fixture);
      expect(formatted).toEqual('\nFound definitions:' + '\n' + '╔══════╤═════════════════╤══════════════╗' + '\n' + '║ Name │ Package Version │ Flow Version ║' + '\n' + '╟──────┼─────────────────┼──────────────╢' + '\n' + '║ mori │ v0.3.x          │ >=v0.22.x    ║' + '\n' + '╟──────┼─────────────────┼──────────────╢' + '\n' + '║ mori │ v0.3.x          │ >=v0.18.x    ║' + '\n' + '╚══════╧═════════════════╧══════════════╝' + '\n');
    });
    it('gracefully handles not finding any definitions', function () {
      var fixture = [];
      var formatted = (0, _search._formatDefTable)(fixture);
      expect(formatted).toEqual('No definitions found, sorry!');
    });
  });
});