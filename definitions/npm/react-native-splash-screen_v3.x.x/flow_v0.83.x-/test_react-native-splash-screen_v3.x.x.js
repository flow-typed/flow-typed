// @flow
import { describe, it } from 'flow-typed-test';
import SplashScreen from 'react-native-splash-screen';

describe('react-native-splash-screen', () => {
  it('has functions', () => {
    SplashScreen.show();
    // $FlowExpectedError[extra-arg]
    SplashScreen.show('test');

    SplashScreen.hide();
    // $FlowExpectedError[extra-arg]
    SplashScreen.hide('test');

    // $FlowExpectedError[prop-missing]
    SplashScreen.blah();
  });
});
