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
    // $FlowExpectedError
    withOptions(true);

    // $FlowExpectedError
    withOptions({
      url: true,
      goFullScreen: '',
      hierarchySeparator: true,
    });
  });

  it('should error on removed v3 properties', () => {
    // $FlowExpectedError
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
    // $FlowExpectedError
    setOptions(true);

    // $FlowExpectedError
    setOptions({
      url: true,
      goFullScreen: '',
      hierarchySeparator: true,
    });
  });

  it('should error on removed v3 properties', () => {
    // $FlowExpectedError
    setOptions({
      showLeftPanel: true,
      showDownPanel: true,
      downPanelInRight: true,
    });
  });
});
