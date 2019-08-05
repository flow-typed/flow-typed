declare module '@storybook/addon-options' {
  declare type Options = {
    name?: string,
    url?: string,
    goFullScreen?: boolean,
    showLeftPanel?: boolean, // deprecated, use showStoriesPanel
    showStoriesPanel?: boolean,
    showDownPanel?: boolean, // deprecated; use showAddonPanel
    showAddonPanel?: boolean,
    showSearchBox?: boolean,
    downPanelInRight?: boolean, // deprecated; use addonPanelInRight
    addonPanelInRight?: boolean,
    sortStoriesByKind?: boolean,
    hierarchySeparator?: RegExp | string,
    hierarchyRootSeparator?: RegExp | string,
    selectedAddonPanel?: string,
  };

  declare function setOptions(options: Options): void;
}
