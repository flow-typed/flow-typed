declare module "enzyme" {
  declare type PredicateFunction = (wrapper: Wrapper<any>) => boolean;
  declare type NodeOrNodes = React$Element<any> | Array<React$Element<any>>;
  declare class Wrapper<ReturnClass: Wrapper<any>> {
    find(selector: string): ReturnClass,
    findWhere(predicate: PredicateFunction): ReturnClass,
    filter(selector: string): ReturnClass,
    filterWhere(predicate: PredicateFunction): ReturnClass,
    contains(nodeOrNodes: NodeOrNodes): boolean,
    equals(node: React$Element<any>): boolean,
    hasClass(className: string): boolean,
    is(selector: string): boolean,
    not(selector: string): boolean,
    children(): ReturnClass,
    childAt(index: number): ReturnClass,
    type(): string | Function,
    text(): string,
    html(): string,
    update(): this
  }
  declare class ReactWrapper<ReactWrapper> extends Wrapper<any> {}
  declare class ShallowWrapper<ShallowWrapper> extends Wrapper<any> {
    shallow(options?: { context?: Object }): ShallowWrapper
  }
  declare class CheerioWrapper<CheerioWrapper> extends Wrapper<any> {}
  declare function shallow(
    node: React$Element<any>,
    options?: { context?: Object }
  ): ShallowWrapper<any>;
  declare function mount(
    node: React$Element<any>,
    options?: {
      context?: Object,
      attachTo?: HTMLElement,
      childContextTypes?: Object
    }
  ): ReactWrapper<any>;
  declare function render(
    node: React$Element<any>,
    options?: { context?: Object }
  ): CheerioWrapper<any>;
}
