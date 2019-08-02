// @flow
import { it } from 'flow-typed-test';
import { getStatusBarHeight } from 'react-native-status-bar-height';

it('should return number', () => {
  (getStatusBarHeight(): number);
});

it('should work when call with boolean argument', () => {
  getStatusBarHeight(true);

  // $ExpectError: first argument must be boolean
  getStatusBarHeight('true');
});
