declare module 'radium' {
  declare type PluginResult = {
    // Merged into the component directly. Useful for storing things for which you
    // don't need to re-render, event subscriptions, for instance.
    componentFields?: ?Object,

    // Merged into a Radium controlled global state object. Use this instead of
    // module level state for ease of clearing state between tests.
    globalState?: ?Object,

    // Merged into the rendered element's props.
    props?: ?Object,

    // Replaces (not merged into) the rendered element's style property.
    style?: ?Object,
  };

  declare type PluginConfig = {
    // Adds a chunk of css to the root style sheet
    addCSS: (css: string) => {remove: () => void},

    // Helper function when adding CSS
    appendImportantToEachValue: (style: Object) => Object;

    // May not be readable if code has been minified
    componentName: string,

    // The Radium configuration
    config: RadiumConfig,

    // Converts an object of CSS rules to a string, for use with addCSS
    cssRuleSetToString: (
      selector: string,
      rules: Object,
      userAgent: ?string,
    ) => string,

    // Retrieve the value of a field on the component
    getComponentField: (key: string) => mixed,

    // Retrieve the value of a field global to the Radium module
    // Used so that tests can easily clear global state.
    getGlobalState: (key: string) => mixed,

    // Retrieve the value of some state specific to the rendered element.
    // Requires the element to have a unique key or ref or for an element key
    // to be passed in.
    getState: (stateKey: string, elementKey?: string) => mixed,

    // Helper function when adding CSS
    hash: (data: string) => string,

    // Returns true if the value is a nested style object
    isNestedStyle: (value: mixed) => bool,

    // Access to the mergeStyles utility
    mergeStyles: (styles: Array<Object>) => Object,

    // The props of the rendered element. This can be changed by each plugin,
    // and successive plugins will see the result of previous plugins.
    props: Object,

    // Calls setState on the component with the given key and value.
    // By default this is specific to the rendered element, but you can override
    // by passing in the `elementKey` parameter.
    setState: (stateKey: string, value: mixed, elementKey?: string) => mixed,

    // The style prop of the rendered element. This can be changed by each plugin,
    // and successive plugins will see the result of previous plugins. Kept
    // separate from `props` for ease of use.
    style: Object,

    // uses the exenv npm module
    ExecutionEnvironment: {
      canUseEventListeners: bool,
      canUseDOM: bool,
    }
  };

  declare type MediaQueryListListener = (mql: MediaQueryList) => mixed;

  declare type MediaQueryList = {
    matches: bool;
    addListener(listener: MediaQueryListListener): void;
    removeListener(listener: MediaQueryListListener): void;
  };

  declare type Plugin = (pluginConfig: PluginConfig) => ?PluginResult;
  declare type MatchMediaType = (mediaQueryString: string) => MediaQueryList;

  declare type RadiumConfig = {
    matchMedia?: MatchMediaType,
    plugins?: Array<Plugin>,
    userAgent?: string,
  };
  declare class Radium {
    <T: ReactClass<any>>(reactClass: T): T;
    <T: ReactClass<any>>(config: RadiumConfig): (reactClass: T) => T;
    keyframes(animationObject: Object, name?: string): string;
    Style: React$Component<{scopeSelector: string}, {config?: ?RadiumConfig, rules: Object, scopeSelector?: ?string}>;
    StyleRoot: React$Component<any, any, any>;
    getState(state: Object, componentRef: string, property: ':active' | ':hover' | ':focus'): boolean;
  }
  declare var exports: Radium;
}
