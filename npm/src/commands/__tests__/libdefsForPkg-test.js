// @flow
jest.disableAutomock();

import {stringToVersion} from "../../lib/semver.js";
import {_chooseLibDefVersion} from "../libdefsForPkg.js";

describe('libdefsForPkg', () => {
  describe('_chooseLibDefVersion', () => {
    function expectChooseNoFlip(verAStr, verBStr, chooseA) {
      const verA = stringToVersion(verAStr);
      const verB = stringToVersion(verBStr);
      expect(_chooseLibDefVersion(verA, verB)).toBe(chooseA);
    }

    function expectChoose(verAStr, verBStr, chooseA) {
      expectChooseNoFlip(verAStr, verBStr, chooseA);
      expectChooseNoFlip(verBStr, verAStr, !chooseA);
    }

    describe('concrete versions', () => {
      it('compares concrete identical versions', () => {
        expectChooseNoFlip('v0.0.0', 'v0.0.0', false);
      });

      it('compares concrete patch versions', () => {
        expectChoose('v0.0.1', 'v0.0.0', false);
        expectChoose('v0.0.0', 'v0.0.1', true);
      });

      it('compares concrete minor versions', () => {
        expectChoose('v0.1.0', 'v0.0.0', false);
        expectChoose('v0.1.0', 'v0.0.1', false);
        expectChoose('v0.0.0', 'v0.1.0', true);
      });

      it('compares concrete major versions', () => {
        expectChoose('v1.0.0', 'v0.0.0', false);
        expectChoose('v1.0.1', 'v0.0.1', false);
        expectChoose('v1.1.0', 'v0.1.0', false);
        expectChoose('v1.1.1', 'v0.1.1', false);
        expectChoose('v0.0.0', 'v1.0.0', true);
      });
    });

    describe('wildcard versions', () => {
      it('compares wildcard patch versions', () => {
        expectChoose('v0.0.x', 'v0.0.1', true);
        expectChooseNoFlip('v0.0.x', 'v0.0.0', false);
        expectChooseNoFlip('v0.0.0', 'v0.0.x', false);
      });

      it('compares wildcard minor versions', () => {
        expectChooseNoFlip('v0.x.0', 'v0.0.0', false);
        expectChooseNoFlip('v0.0.0', 'v0.x.0', false);

        expectChoose('v0.x.0', 'v0.0.1', true);
        expectChoose('v0.x.0', 'v0.1.0', true);
        expectChoose('v0.x.0', 'v0.1.1', true);
        expectChoose('v0.x.0', 'v0.1.x', true);

        expectChoose('v0.0.1', 'v0.x.0', false);
        expectChoose('v0.1.0', 'v0.x.0', false);
        expectChoose('v0.1.1', 'v0.x.0', false);
        expectChoose('v0.1.x', 'v0.x.0', false);
      });
    });

    describe('range versions', () => {
      it('compares <= concrete versions', () => {
        expectChoose('v0.0.0', '<=v0.0.1', true);
        expectChoose('v0.0.0', '<=v0.1.0', true);
        expectChoose('v0.0.0', '<=v1.0.0', true);

        expectChoose('v0.0.1', '<=v0.0.1', false);
        expectChoose('v0.1.0', '<=v0.1.0', false);
        expectChoose('v1.0.0', '<=v1.0.0', false);
      });

      it('compares >= concrete versions', () => {
        expectChoose('v0.0.0', '>=v0.0.1', true);
        expectChoose('v0.0.0', '>=v0.1.0', true);
        expectChoose('v0.0.0', '>=v1.0.0', true);

        expectChoose('v0.0.1', '>=v0.0.1', true);
        expectChoose('v0.1.0', '>=v0.1.0', true);
        expectChoose('v1.0.0', '>=v1.0.0', true);
      });
    });
  });
});
