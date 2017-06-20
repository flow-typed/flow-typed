// Based on https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/enzyme/index.d.ts

declare module 'enzyme' {
  declare export type ReactElement = React$Element<any>;
  declare export type ReactComponent<Props, State> = React$Component<any, Props, State>
  declare export type ReactComponentClass<Props, State> = Class<ReactComponent<Props, State>>;
  declare export type ReactStatelessComponent<Props> = (props: Props) => ReactElement;

  /**
   * Many methods in Enzyme's API accept a selector as an argument. Selectors in Enzyme can fall into one of the
   * following three categories:
   *
   *  1. A Valid CSS Selector
   *  2. A React Component Constructor
   *  3. A React Component's displayName
   *  4. A React Stateless component
   *  5. A React component property map
   */
  declare type Selector<Props, State> =
    | string
    | { [key: string]: any }
    | ReactStatelessComponent<Props>
    | ReactComponentClass<Props, State>;

  declare type Intercepter<T> = (intercepter: T) => void;

  declare export class CommonWrapper<P, S> {
    /**
     * Returns a new wrapper with only the nodes of the current wrapper that, when passed into the provided predicate function, return true.
     * @param predicate
     */
    filterWhere(predicate: (wrapper: this) => boolean): this;

    /**
     * Returns whether or not the current wrapper has a node anywhere in it's render tree that looks like the one passed in.
     * @param node
     */
    contains(node: ReactElement): boolean;

    /**
     * Returns whether or not a given react element exists in the shallow render tree.
     * @param node
     */
    containsMatchingElement(node: ReactElement): boolean;

    /**
     * Returns whether or not all the given react elements exists in the shallow render tree
     * @param nodes
     */
    containsAllMatchingElements(nodes: Array<ReactElement>): boolean;

    /**
     * Returns whether or not one of the given react elements exists in the shallow render tree.
     * @param nodes
     */
    containsAnyMatchingElements(nodes: Array<ReactElement>): boolean;

    /**
     * Returns whether or not the current render tree is equal to the given node, based on the expected value.
     */
    equals(node: ReactElement): boolean;

    /**
     * Returns whether or not a given react element matches the shallow render tree.
     */
    matchesElement(node: ReactElement): boolean;

    /**
     * Returns whether or not the current node has a className prop including the passed in class name.
     * @param className
     */
    hasClass(className: string): boolean;

    /**
     * Returns whether or not the current node matches a provided selector.
     * @param selector
     */
    is<Props, State>(selector: Selector<Props, State>): boolean;

    /**
     * Returns whether or not the current node is empty.
     * @deprecated Use .exists() instead.
     */
    isEmpty(): boolean;

    /**
     * Returns whether or not the current node exists.
     */
    exists(): boolean;

    /**
     * Returns a new wrapper with only the nodes of the current wrapper that don't match the provided selector.
     * This method is effectively the negation or inverse of filter.
     * @param selector
     */
    not<Props, State>(selector: Selector<Props, State>): this;

    /**
     * Returns a string of the rendered text of the current render tree. This function should be looked at with
     * skepticism if being used to test what the actual HTML output of the component will be. If that is what you
     * would like to test, use enzyme's render function instead.
     *
     * Note: can only be called on a wrapper of a single node.
     */
    text(): string;

    /**
     * Returns a string of the rendered HTML markup of the current render tree.
     *
     * Note: can only be called on a wrapper of a single node.
     */
    html(): string;

    /**
     * Returns the node at a given index of the current wrapper.
     * @param index
     */
    get(index: number): ReactElement;


    /**
     * Returns the wrapper's underlying node.
     */
    getNode(): ReactElement;

    /**
     * Returns the wrapper's underlying nodes.
     */
    getNodes(): Array<ReactElement>;

    /**
     * Returns the outer most DOMComponent of the current wrapper.
     */
    getDOMNode(): HTMLElement;

    /**
     * Returns a wrapper around the node at a given index of the current wrapper.
     * @param index
     */
    at(index: number): this;

    /**
     * Reduce the set of matched nodes to the first in the set.
     */
    first(): this;

    /**
     * Reduce the set of matched nodes to the last in the set.
     */
    last(): this;

    /**
     * Returns a new wrapper with a subset of the nodes of the original wrapper, according to the rules of `Array#slice`.
     */
    slice(begin?: number, end?: number): this;

    /**
     * Taps into the wrapper method chain. Helpful for debugging.
     */
    tap(intercepter: Intercepter<this>): this;

    /**
     * Returns the state hash for the root node of the wrapper. Optionally pass in a prop name and it will return just that value.
     * @param [key]
     */
    state(key: string): any;
    state(): S;

    /**
     * Returns the context hash for the root node of the wrapper. Optionally pass in a prop name and it will return just that value.
     */
    context(): any;
    context<T>(key: string): T;

    /**
     * Returns the props hash for the current node of the wrapper.
     *
     * NOTE: can only be called on a wrapper of a single node.
     */
    props(): P;

    /**
     * Returns the prop value for the node of the current wrapper with the provided key.
     *
     * NOTE: can only be called on a wrapper of a single node.
     * @param key
     */
    prop(key: string): any;

    /**
     * Returns the key value for the node of the current wrapper.
     * NOTE: can only be called on a wrapper of a single node.
     */
    key(): string;


    /**
     * Simulate events.
     * Returns itself.
     * @param event
     * @param args?
     */
    simulate(event: string, ...args: mixed[]): this;

    /**
     * A method to invoke setState() on the root component instance similar to how you might in the definition of
     * the component, and re-renders. This method is useful for testing your component in hard to achieve states,
     * however should be used sparingly. If possible, you should utilize your component's external API in order to
     * get it into whatever state you want to test, in order to be as accurate of a test as possible. This is not
     * always practical, however.
     * Returns itself.
     *
     * NOTE: can only be called on a wrapper instance that is also the root instance.
     * @param state
     * @param [callback]
     */
    setState(state: $Diff<S, S>, callback?: () => void): this;

    /**
     * A method that sets the props of the root component, and re-renders. Useful for when you are wanting to test
     * how the component behaves over time with changing props. Calling this, for instance, will call the
     * componentWillReceiveProps lifecycle method.
     *
     * Similar to setState, this method accepts a props object and will merge it in with the already existing props.
     * Returns itself.
     *
     * NOTE: can only be called on a wrapper instance that is also the root instance.
     * @param props
     * @param [callback]
     */
    setProps(props: $Diff<P, P>): this;

    /**
     * A method that sets the context of the root component, and re-renders. Useful for when you are wanting to
     * test how the component behaves over time with changing contexts.
     * Returns itself.
     *
     * NOTE: can only be called on a wrapper instance that is also the root instance.
     * @param state
     */
    setContext(context: any): this;

    /**
     * Gets the instance of the component being rendered as the root node passed into shallow().
     *
     * NOTE: can only be called on a wrapper instance that is also the root instance.
     */
    instance(): ReactComponent<P, S>;

    /**
     * Forces a re-render. Useful to run before checking the render output if something external may be updating
     * the state of the component somewhere.
     * Returns itself.
     *
     * NOTE: can only be called on a wrapper instance that is also the root instance.
     */
    update(): this;

    /**
     * Returns an html-like string of the wrapper for debugging purposes. Useful to print out to the console when
     * tests are not passing when you expect them to.
     */
    debug(): string;

    /**
     * Returns the name of the current node of the wrapper.
     */
    name(): string;

    /**
     * Iterates through each node of the current wrapper and executes the provided function with a wrapper around
     * the corresponding node passed in as the first argument.
     *
     * Returns itself.
     * @param fn A callback to be run for every node in the collection. Should expect a ShallowWrapper as the first
     *              argument, and will be run with a context of the original instance.
     */
    forEach(fn: (wrapper: this, index: number) => mixed): this;

    /**
     * Maps the current array of nodes to another array. Each node is passed in as a ShallowWrapper to the map
     * function.
     * Returns an array of the returned values from the mapping function..
     * @param fn A mapping function to be run for every node in the collection, the results of which will be mapped
     *              to the returned array. Should expect a ShallowWrapper as the first argument, and will be run
     *              with a context of the original instance.
     */
    map<V>(fn: (wrapper: this, index: number) => V): V[];

    /**
     * Applies the provided reducing function to every node in the wrapper to reduce to a single value. Each node
     * is passed in as a ShallowWrapper, and is processed from left to right.
     * @param fn
     * @param initialValue
     */
    reduce<R>(fn: (prevVal: R, wrapper: this, index: number) => R, initialValue?: R): R;

    /**
     * Applies the provided reducing function to every node in the wrapper to reduce to a single value.
     * Each node is passed in as a ShallowWrapper, and is processed from right to left.
     * @param fn
     * @param initialValue
     */
    reduceRight<R>(fn: (prevVal: R, wrapper: this, index: number) => R, initialValue?: R): R;

    /**
     * Returns whether or not any of the nodes in the wrapper match the provided selector.
     * @param selector
     */
    some<Props, State>(selector: Selector<Props, State>): boolean;

    /**
     * Returns whether or not any of the nodes in the wrapper pass the provided predicate function.
     * @param fn
     */
    someWhere(fn: (wrapper: this) => boolean): boolean;

    /**
     * Returns whether or not all of the nodes in the wrapper match the provided selector.
     * @param selector
     */
    every<Props, State>(selector: Selector<Props, State>): boolean;

    /**
     * Returns whether or not any of the nodes in the wrapper pass the provided predicate function.
     * @param fn
     */
    everyWhere(fn: (wrapper: this) => boolean): boolean;

    /**
     * Returns true if renderer returned null
     */
    isEmptyRender(): boolean;

    /**
     * Renders the component to static markup and returns a Cheerio wrapper around the result.
     */
    render(): any;

    /**
     * Returns the type of the current node of this wrapper. If it's a composite component, this will be the
     * component constructor. If it's native DOM node, it will be a string of the tag name.
     *
     * Note: can only be called on a wrapper of a single node.
     */
    type(): string | ReactStatelessComponent<P> | ReactComponentClass<P, S>;

    length: number;
  }

  declare export class ShallowWrapper<P, S> extends CommonWrapper<P, S> {
    shallow(options?: ShallowRendererProps): ShallowWrapper<P, S>;
    unmount(): ShallowWrapper<any, any>;

    /**
     * Find every node in the render tree that matches the provided selector.
     * @param selector The selector to match.
     */
    find<Props, State>(selector: Selector<Props, State>): ShallowWrapper<Props, State>;

    /**
     * Removes nodes in the current wrapper that do not match the provided selector.
     * @param selector The selector to match.
     */
    filter<Props, State>(selector: Selector<Props, State>): this;
    filter(props: $Diff<P, P>): this;

    /**
     * Finds every node in the render tree that returns true for the provided predicate function.
     * @param predicate
     */
    findWhere(predicate: (wrapper: ShallowWrapper<any, any>) => boolean): ShallowWrapper<any, any>;

    /**
     * Returns a new wrapper with all of the children of the node(s) in the current wrapper. Optionally, a selector
     * can be provided and it will filter the children by this selector.
     * @param [selector]
     */
    children<Props, State>(selector?: Selector<Props, State>): ShallowWrapper<Props, State>;

    /**
     * Returns a new wrapper with child at the specified index.
     * @param index
     */
    childAt<Props, State>(index: number): ShallowWrapper<Props, State>;

    /**
     * Shallow render the one non-DOM child of the current wrapper, and return a wrapper around the result.
     * NOTE: can only be called on wrapper of a single non-DOM component element node.
     * @param [options]
     */
    dive<Props, State>(options?: ShallowRendererProps): ShallowWrapper<Props, State>;

    /**
     * Returns a wrapper around all of the parents/ancestors of the wrapper. Does not include the node in the
     * current wrapper. Optionally, a selector can be provided and it will filter the parents by this selector.
     *
     * Note: can only be called on a wrapper of a single node.
     * @param [selector]
     */
    parents<Props, State>(selector?: Selector<Props, State>): ShallowWrapper<Props, State>;

    /**
     * Returns a wrapper of the first element that matches the selector by traversing up through the current node's
     * ancestors in the tree, starting with itself.
     *
     * Note: can only be called on a wrapper of a single node.
     * @param selector
     */
    closest<Props, State>(selector: Selector<Props, State>): ShallowWrapper<Props, State>;

    /**
     * Returns a wrapper with the direct parent of the node in the current wrapper.
     */
    parent<Props, State>(): ShallowWrapper<Props, State>;
  }

  declare export class ReactWrapper<P, S> extends CommonWrapper<P, S> {
    unmount(): ReactWrapper<any, any>;
    mount(): ReactWrapper<any, any>;

    /**
     * Returns a wrapper of the node that matches the provided reference name.
     *
     * NOTE: can only be called on a wrapper instance that is also the root instance.
     */
    ref<Props, State>(refName: string): ReactWrapper<Props, State>;

    /**
     * Detaches the react tree from the DOM. Runs ReactDOM.unmountComponentAtNode() under the hood.
     *
     * This method will most commonly be used as a "cleanup" method if you decide to use the attachTo option in mount(node, options).
     *
     * The method is intentionally not "fluent" (in that it doesn't return this) because you should not be doing anything with this wrapper after this method is called.
     *
     * Using the attachTo is not generally recommended unless it is absolutely necessary to test something.
     * It is your responsibility to clean up after yourself at the end of the test if you do decide to use it, though.
     */
    detach(): void;

    /**
     * Find every node in the render tree that matches the provided selector.
     * @param selector The selector to match.
     */
    find<Props, State>(selector: Selector<Props, State>): ReactWrapper<Props, State>;

    /**
     * Finds every node in the render tree that returns true for the provided predicate function.
     * @param predicate
     */
    findWhere(predicate: (wrapper: ReactWrapper<any, any>) => boolean): ReactWrapper<any, any>;

    /**
     * Removes nodes in the current wrapper that do not match the provided selector.
     * @param selector The selector to match.
     */
    filter<Props, State>(selector: Selector<Props, State>): this;
    filter(props: $Diff<P, P>): this;

    /**
     * Returns a new wrapper with all of the children of the node(s) in the current wrapper. Optionally, a selector
     * can be provided and it will filter the children by this selector.
     * @param [selector]
     */
    children<Props, State>(selector?: Selector<Props, State>): ReactWrapper<Props, State>;

    /**
     * Returns a new wrapper with child at the specified index.
     * @param index
     */
    childAt<Props, State>(index: number): ReactWrapper<Props, State>;

    /**
     * Returns a wrapper around all of the parents/ancestors of the wrapper. Does not include the node in the
     * current wrapper. Optionally, a selector can be provided and it will filter the parents by this selector.
     *
     * Note: can only be called on a wrapper of a single node.
     * @param [selector]
     */
    parents<Props, State>(selector?: Selector<Props, State>): ReactWrapper<Props, State>;

    /**
     * Returns a wrapper of the first element that matches the selector by traversing up through the current node's
     * ancestors in the tree, starting with itself.
     *
     * Note: can only be called on a wrapper of a single node.
     * @param selector
     */
    closest<Props, State>(selector: Selector<Props, State>): ReactWrapper<Props, State>;

    /**
     * Returns a wrapper with the direct parent of the node in the current wrapper.
     */
    parent(): ReactWrapper<any, any>;
  }

  declare export interface ShallowRendererProps {
    /**
     * Enable experimental support for full react lifecycle methods
     */
    lifecycleExperimental?: boolean;
    /**
     * Context to be passed into the component
     */
    context?: Object;
  }

  declare export interface MountRendererProps {
    /**
     * Context to be passed into the component
     */
    context?: Object;
    /**
     * DOM Element to attach the component to
     */
    attachTo?: HTMLElement | null;
    /**
     * Merged contextTypes for all children of the wrapper
     */
    childContextTypes?: Object;
  }

  /**
   * Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that
   * your tests aren't indirectly asserting on behavior of child components.
   * @param node
   * @param [options]
   */
  declare export function shallow<Props, State>(node: React$Element<Props>, options?: ShallowRendererProps): ShallowWrapper<Props, State>;

  /**
   * Mounts and renders a react component into the document and provides a testing wrapper around it.
   * @param node
   * @param [options]
   */
  declare export function mount<Props, State>(node: React$Element<Props>, options?: MountRendererProps): ReactWrapper<Props, State>;

  /**
   * Render react components to static HTML and analyze the resulting HTML structure.
   * @param node
   * @param [options]
   */
   declare export function render<Props, State>(node: React$Element<Props>, options?: any): any;
}
