// @flow
import {getPackageJsonDependencies} from '../npmProjectUtils';

describe('npmProjectUtils', () => {
  describe('getPackageJsonDependencies', () => {
    it('throws when a dep of differing versions is found in multiple dep fields', () => {
      const pkgJson = {
        pathStr: '',
        content: {
          name: '',
          version: '',
          devDependencies: {
            'flow-bin': '^0.38.0'
          },
          peerDependencies: {
            'flow-bin': '^0.37.4'
          }
        }
      };

      expect(() => {
        getPackageJsonDependencies(pkgJson);
      }).toThrow('Found multiple versions of flow-bin listed in package.json!');
    });

    it('does not throw when a dep of the same version is found in multiple dep fields', () => {
      const pkgJson = {
        pathStr: '',
        content: {
          name: '',
          version: '',
          devDependencies: {
            'flow-bin': '^0.37.4'
          },
          peerDependencies: {
            'flow-bin': '^0.37.4'
          }
        }
      };

      const actual = getPackageJsonDependencies(pkgJson);

      expect(actual).toEqual({
        'flow-bin': '^0.37.4'
      });
    });
  });
});
