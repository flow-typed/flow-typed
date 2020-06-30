// @flow

import * as React from 'react';
import {
  type NavigationContainerType,
  useReduxDevToolsExtension,
} from '@react-navigation/devtools';

declare var NavigationContainer: NavigationContainerType;

function Test() {
  const navigationRef = React.useRef();
  useReduxDevToolsExtension(navigationRef);
  return (
    <NavigationContainer ref={navigationRef}>
      Hello!
    </NavigationContainer>
  );
}
