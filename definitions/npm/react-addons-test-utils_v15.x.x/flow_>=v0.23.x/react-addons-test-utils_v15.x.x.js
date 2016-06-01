declare type ReactAddonTest$FunctionOrComponentClass = React$Component | Function;
declare module 'react-addons-test-utils' {
  declare var Simulate: {
    [eventName: string]: (element: Element, eventData?: Object) => void;
  };
  declare function renderIntoDocument(instance: React$Element): React$Component;
  declare function mockComponent(componentClass: ReactAddonTest$FunctionOrComponentClass, mockTagName?: string): Object;
  declare function isElement(element: React$Element): boolean;
  declare function isElementOfType(element: React$Element, componentClass: ReactAddonTest$FunctionOrComponentClass): boolean;
  declare function isDOMComponent(instance: React$Component): boolean;
  declare function isCompositeComponent(instance: React$Component): boolean;
  declare function isCompositeComponentWithType(instance: React$Component, componentClass: ReactAddonTest$FunctionOrComponentClass): boolean;
  declare function findAllInRenderedTree(tree: React$Component, test: (child: React$Component) => boolean): Array<React$Component>;
  declare function scryRenderedDOMComponentsWithClass(tree: React$Component, className: string): Array<React$Component>;
  declare function findRenderedDOMComponentWithClass(tree: React$Component, className: string): React$Component;
  declare function scryRenderedDOMComponentsWithTag(tree: React$Component, tagName: string): Array<React$Component>;
  declare function findRenderedDOMComponentWithTag(tree: React$Component, tagName: string): React$Component;
  declare function scryRenderedComponentsWithType(tree: React$Component, componentClass: ReactAddonTest$FunctionOrComponentClass): Array<React$Component>;
  declare function findRenderedComponentWithType(tree: React$Component, componentClass: ReactAddonTest$FunctionOrComponentClass): React$Component;
  declare class ReactShallowRender {
    render(element: React$Element): void;
    getRenderOutput(): React$Element;
  }
  declare function createRenderer(): ReactShallowRender;
}
