declare module 'enzyme' {
  declare type PredicateFunction<T: Wrapper> = (wrapper: T) => boolean;
  declare type NodeOrNodes = React$Element<any> | Array<React$Element<any>>;
  declare type EnzymeSelector = string | ReactClass<any> | Object;
  declare class Wrapper {
    find(selector: EnzymeSelector): this;
    findWhere(predicate: PredicateFunction<this>): this;
    filter(selector: EnzymeSelector): this;
    filterWhere(predicate: PredicateFunction<this>): this;
    contains(nodeOrNodes: NodeOrNodes): boolean;
    equals(node: React$Element<any>): boolean;
    hasClass(className: string): boolean;
    instance(): React$Component<any, any, any>;
    is(selector: EnzymeSelector): boolean;
    not(selector: EnzymeSelector): boolean;
    children(): this;
    childAt(index: number): this;
    props(): Object;
    name(): string;
    prop(key: string): any;
    type(): string | Function;
    text(): string;
    html(): string;
    update(): this;
  }
  declare class ReactWrapper extends Wrapper {}
  declare class ShallowWrapper extends Wrapper {
    shallow(options?: { context?: Object }): ShallowWrapper;
  }
  declare class CheerioWrapper extends Wrapper {}
  declare function shallow(node: React$Element<any>, options?: { context?: Object }): ShallowWrapper;
  declare function mount(node: React$Element<any>, options?: { context?: Object, attachTo?: HTMLElement, childContextTypes?: Object }): ReactWrapper;
  declare function render(node: React$Element<any>, options?: { context?: Object }): CheerioWrapper;
}
