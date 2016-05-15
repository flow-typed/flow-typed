declare module 'enzyme' {
  declare type PredicateFunction = (wrapper: Wrapper) => boolean;
  declare type NodeOrNodes = React$Element | Array<React$Element>;
  declare class Wrapper<ReturnClass: Wrapper> {
    find(selector: string): ReturnClass;
    findWhere(predicate: PredicateFunction): ReturnClass;
    filter(selector: string): ReturnClass;
    filterWhere(predicate: PredicateFunction): ReturnClass;
    contains(nodeOrNodes: NodeOrNodes): boolean;
    equals(node: React$Element): boolean;
    hasClass(className: string): boolean;
    is(selector: string): boolean;
    not(selector: string): boolean;
    children(): ReturnClass;
    childAt(index: number): ReturnClass;
    type(): string | Function;
    text(): string;
    html(): string;
    update(): this;
  }
  declare class ReactWrapper<ReactWrapper> extends Wrapper {}
  declare class ShallowWrapper<ShallowWrapper> extends Wrapper {
    shallow(options?: { context?: Object }): ShallowWrapper;
  }
  declare class CheerioWrapper<CheerioWrapper> extends Wrapper {}
  declare function shallow(node: React$Element, options?: { context?: Object }): ShallowWrapper;
  declare function mount(node: React$Element, options?: { context?: Object, attachTo?: HTMLElement, childContextTypes?: Object }): ReactWrapper;
  declare function render(node: React$Element, options?: { context?: Object }): CheerioWrapper;
}
