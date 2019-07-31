declare module '@storybook/addon-options' {
  declare type Options = {
    name?: string,
    url?: string,
    goFullScreen?: boolean,
    // deprecated, use showStoriesPanel
    showLeftPanel?: boolean,
    showStoriesPanel?: boolean,
    // deprecated; use showAddonPanel
    showDownPanel?: boolean,
    showAddonPanel?: boolean,
    showSearchBox?: boolean,
    // deprecated; use addonPanelInRight
    downPanelInRight?: boolean,
    addonPanelInRight?: boolean,
    sortStoriesByKind?: boolean,
    hierarchySeparator?: RegExp | string,
    hierarchyRootSeparator?: RegExp | string,
    selectedAddonPanel?: string,
    ...
  };

  declare function setOptions(options: Options): void;
}
