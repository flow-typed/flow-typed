// @flow

import { describe, it } from 'flow-typed-test';
import { setOptions, withOptions } from '@storybook/addon-options';

let theme = {
  mainBackground: '',
  mainBorder: '',
  mainBorderColor: '',
  mainBorderRadius: '',
  mainFill: '',
  barFill: '',
  inputFill: '',
  mainTextFace: '',
  mainTextColor: '',
  mainTextSize: '',
  dimmedTextColor: '',
  highlightColor: '',
  successColor: '',
  failColor: '',
  warnColor: '',
  monoTextFace: '',
  layoutMargin: '',
  overlayBackground: '',
};

const options = {
  theme: theme,
  name: 'My Storybook',
  url: 'https://example.com',
  goFullScreen: true,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: true,
  addonPanelInRight: true,
  sortStoriesByKind: true,
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  sidebarAnimations: true,
  selectedAddonPanel: 'storybook/actions/action-panel',
  enableShortcuts: true,
};

describe('The `withOptions` function', () => {
  it('should validate on default usage', () => {
    withOptions({});

    withOptions(options);
  });

  it('should error on invalid usage', () => {
    // $ExpectError
    withOptions(true);

    // $ExpectError
    withOptions({
      url: true,
      goFullScreen: '',
      hierarchySeparator: true,
    });
  });

  it('should error on removed v3 properties', () => {
    // $ExpectError
    withOptions({
      showLeftPanel: true,
      showDownPanel: true,
      downPanelInRight: true,
    });
  });
});

describe('The `setOptions` function', () => {
  it('should validate on default usage', () => {
    setOptions({});

    setOptions(options);
  });

  it('should error on invalid usage', () => {
    // $ExpectError
    setOptions(true);

    // $ExpectError
    setOptions({
      url: true,
      goFullScreen: '',
      hierarchySeparator: true,
    });
  });

  it('should error on removed v3 properties', () => {
    // $ExpectError
    setOptions({
      showLeftPanel: true,
      showDownPanel: true,
      downPanelInRight: true,
    });
  });
});
