declare type ReactAddonTest$FunctionOrComponentClass = React$Component<any, any, any> | Function;
declare module 'react-addons-test-utils' {
  declare var Simulate: {
    [eventName: string]: (element: Element, eventData?: Object) => void;
  };
  declare function renderIntoDocument(instance: React$Element<any>): React$Component<any, any, any>;
  declare function mockComponent(componentClass: ReactAddonTest$FunctionOrComponentClass, mockTagName?: string): Object;
  declare function isElement(element: React$Element<any>): boolean;
  declare function isElementOfType(element: React$Element<any>, componentClass: ReactAddonTest$FunctionOrComponentClass): boolean;
  declare function isDOMComponent(instance: React$Component<any, any, any>): boolean;
  declare function isCompositeComponent(instance: React$Component<any, any, any>): boolean;
  declare function isCompositeComponentWithType(instance: React$Component<any, any, any>, componentClass: ReactAddonTest$FunctionOrComponentClass): boolean;
  declare function findAllInRenderedTree(tree: React$Component<any, any, any>, test: (child: React$Component<any, any, any>) => boolean): Array<React$Component<any, any, any>>;
  declare function scryRenderedDOMComponentsWithClass(tree: React$Component<any, any, any>, className: string): Array<React$Component<any, any, any>>;
  declare function findRenderedDOMComponentWithClass(tree: React$Component<any, any, any>, className: string): React$Component<any, any, any>;
  declare function scryRenderedDOMComponentsWithTag(tree: React$Component<any, any, any>, tagName: string): Array<React$Component<any, any, any>>;
  declare function findRenderedDOMComponentWithTag(tree: React$Component<any, any, any>, tagName: string): React$Component<any, any, any>;
  declare function scryRenderedComponentsWithType(tree: React$Component<any, any, any>, componentClass: ReactAddonTest$FunctionOrComponentClass): Array<React$Component<any, any, any>>;
  declare function findRenderedComponentWithType(tree: React$Component<any, any, any>, componentClass: ReactAddonTest$FunctionOrComponentClass): React$Component<any, any, any>;
  declare class ReactShallowRender {
    render(element: React$Element<any>): void;
    getRenderOutput(): React$Element<any>;
  }
  declare function createRenderer(): ReactShallowRender;
}
