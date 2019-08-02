// @flow
import { it, describe } from 'flow-typed-test';
import NetInfo, {
  fetch,
  addEventListener,
  useNetInfo,
} from '@react-native-community/netinfo';

describe('NetInfoState', () => {
  const netInfo = useNetInfo();

  it('should state with boolean props isConnected isInternetReachable', () => {
    (netInfo.isConnected: boolean);
    (netInfo.isInternetReachable: boolean);
  });

  it('when state.type unknown details must be null', () => {
    if (netInfo.type === 'none' && netInfo.type === 'unknown') {
      (netInfo.details: null);
    }
  });

  it('when state.type cellular details include two props', () => {
    if (netInfo.type === 'cellular') {
      (netInfo.details.isConnectionExpensive: boolean);
      (netInfo.details.cellularGeneration: ?('2g' | '3g' | '4g'));
    }
  });

  it('when state.type wifi or other... details include only isConnectionExpensive prop', () => {
    if (netInfo.type === 'wifi') {
      (netInfo.details.isConnectionExpensive: boolean);

      // $ExpectError `cellularGeneration` is missing in `details`
      netInfo.details.cellularGeneration;
    }
  });
});

describe('addEventListener', () => {
  it('should work properly', () => {
    addEventListener(() => {})();
    addEventListener(async () => {})();
    addEventListener(async state => {
      (state.isConnected: boolean);
    })();
  });

  it('should raises an error when pass not function', () => {
    // $ExpectError: first argument must be a function
    addEventListener('() => {}');
  });
});

describe('fetch', () => {
  it('should work properly', () => {
    fetch().then(state => {
      (state.isConnected: boolean);
    });
  });
});
