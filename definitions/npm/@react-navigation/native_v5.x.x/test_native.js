// @flow

import * as React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  useLinking,
  useBackButton,
} from '@react-navigation/native';

/**
 * NavigationContainer
 */

const linking = {
  enabled: true,
  prefixes: [],
};

class Root extends React.Component<{||}> {

  container: ?React.ElementRef<typeof NavigationContainer>;

  render() {
    return (
      <NavigationContainer
        theme={DarkTheme}
        linking={linking}
        ref={this.containerRef}
      >
        Blah
      </NavigationContainer>
    );
  }

  containerRef = (container: ?React.ElementRef<typeof NavigationContainer>) => {
    this.container = container;
  }

}

/**
 * useLinking/useBackButton
 */

function AnotherRoot() {
  const containerRef = React.useRef<
    ?React.ElementRef<typeof NavigationContainer>,
  >();
  
  const { getInitialState } = useLinking(containerRef, linking);

  useBackButton(containerRef);

  return (
    <NavigationContainer
      theme={DarkTheme}
      linking={linking}
      ref={containerRef}
    >
      Blah
    </NavigationContainer>
  );
}
