// @flow

import { describe, it } from 'flow-typed-test';
import { setOptions } from '@storybook/addon-options';

describe('The `setOptions` function', () => {
  it('should validate on default usage', () => {
    setOptions({});

    setOptions({
      name: 'My Storybook',
      url: 'https://example.com',
      goFullScreen: true,
      showLeftPanel: true,
      showStoriesPanel: true,
      showDownPanel: true,
      showAddonPanel: true,
      showSearchBox: true,
      downPanelInRight: true,
      addonPanelInRight: true,
      sortStoriesByKind: true,
      hierarchySeparator: /\//,
      hierarchyRootSeparator: /\|/,
      selectedAddonPanel: 'storybook/actions/action-panel',
    });
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
});
