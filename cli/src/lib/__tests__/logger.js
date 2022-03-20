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
    it('logs single value', () => {
      listItem('test');

      expect(consoleLog).toHaveBeenCalledWith(colors.bold(`  • test`));
    });

    it('logs two values', () => {
      listItem('test', 'a');

      expect(consoleLog).toHaveBeenCalledWith(
        colors.bold(`  • test
    └> a`),
      );
    });

    it('logs multiple values', () => {
      listItem('test', 'a', 'b');

      expect(consoleLog).toHaveBeenCalledWith(
        colors.bold(`  • test
    └> a
       b`),
      );
    });

    it('ignores undefined values', () => {
      listItem(undefined, 'a', 'b');

      expect(consoleLog).toHaveBeenCalledWith(
        colors.bold(`  • a
    └> b`),
      );
    });

    it('ignores empty strings', () => {
      listItem('test', '', 'b');

      expect(consoleLog).toHaveBeenCalledWith(
        colors.bold(`  • test
    └> b`),
      );
    });
  });
});
