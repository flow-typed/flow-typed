// @flow
import colors from 'colors';

import {listItem} from '../logger';

describe('logger', () => {
  const consoleLog = jest.fn();
  jest.spyOn(console, 'log').mockImplementation(consoleLog);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('listItem', () => {
    it('returns expected result', () => {
      listItem('test', 'a', 'b');

      expect(consoleLog).toHaveBeenCalledWith(
        colors.bold(`  • test
    └> a
       b`),
      );
    });
  });

  describe('list', () => {});
});
