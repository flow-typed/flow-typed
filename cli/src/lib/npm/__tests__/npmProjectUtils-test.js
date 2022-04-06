// @flow
import {mergePackageJsonDependencies} from '../npmProjectUtils';

describe('npmProjectUtils', () => {
  describe('mergePackageJsonDependencies', () => {
    it('does not break with deps that resolve with `npm:...', () => {
      expect(
        mergePackageJsonDependencies(
          {
            'react-intl-next': 'npm:react@16.8.0',
          },
          {
            'react-intl-next': 'npm:react@16.8.0',
          },
        ),
      ).toEqual({
        'react-intl-next': 'npm:react@16.8.0',
      });
    });
  });
});
