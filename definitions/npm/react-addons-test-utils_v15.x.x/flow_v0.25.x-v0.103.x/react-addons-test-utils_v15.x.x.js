import React from "react";

declare module "react-addons-test-utils" {
  declare var Simulate: {
    [eventName: string]: (element: Element, eventData?: Object) => void
  };
  declare function renderIntoDocument(
    instance: React$Element<any>
  ): React$Component<any>;
  declare function mockComponent(
    componentClass: React$ElementType,
    mockTagName?: string
  ): Object;
  declare function isElement(element: React$Element<any>): boolean;
  declare function isElementOfType(
    element: React$Element<any>,
    componentClass: React$ElementType
  ): boolean;
  declare function isDOMComponent(instance: React$Component<any>): boolean;
  declare function isCompositeComponent(instance: React$Component<any>): boolean;
  declare function isCompositeComponentWithType(
    instance: React$Component<any>,
    componentClass: React$ElementType
  ): boolean;
  declare function findAllInRenderedTree(
    tree: React$Component<any>,
    test: (child: React$Component<any>) => boolean
  ): Array<React$Component<any>>;
  declare function scryRenderedDOMComponentsWithClass(
    tree: React$Component<any>,
    className: string
  ): Array<Element>;
  declare function findRenderedDOMComponentWithClass(
    tree: React$Component<any>,
    className: string
  ): ?Element;
  declare function scryRenderedDOMComponentsWithTag(
    tree: React$Component<any>,
    tagName: string
  ): Array<Element>;
  declare function findRenderedDOMComponentWithTag(
    tree: React$Component<any>,
    tagName: string
  ): ?Element;
  declare function scryRenderedComponentsWithType(
    tree: React$Component<any>,
    componentClass: React$ElementType
  ): Array<React$Component<any>>;
  declare function findRenderedComponentWithType(
    tree: React$Component<any>,
    componentClass: React$ElementType
  ): ?React$Component<any>;
  declare class ReactShallowRender {
    render(element: React$Element<any>): void;
    getRenderOutput(): React$Element<any>;
  }
  declare function createRenderer(): ReactShallowRender;
}
