declare module '@testing-library/react' {
  import type { ARIARole } from 'aria-query';

  // This type comes from react-dom_v17.x.x.js
  declare interface ReactDOMTestUtilsThenable {
    then(resolve: () => mixed, reject?: () => mixed): mixed;
  }

  // This type comes from react-dom_v17.x.x.js
  declare type ReactDOMTestUtilsAct = (
    callback: () => void | ReactDOMTestUtilsThenable
  ) => ReactDOMTestUtilsThenable;

  declare type WaitForOptions = {|
    container?: HTMLElement,
    timeout?: number,
    interval?: number,
    onTimeout?: (error: Error) => Error,
    mutationObserverOptions?: MutationObserverInit,
  |};

  declare type MatcherFunction = (
    content: string,
    element: ?Element
  ) => boolean;

  declare type Matcher = MatcherFunction | RegExp | string | number;

  declare type ByRoleMatcher = ARIARole | MatcherFunction;

  declare type NormalizerFn = (text: string) => string;

  declare type MatcherOptions = {|
    exact?: boolean,
    /** Use normalizer with getDefaultNormalizer instead */
    trim?: boolean,
    /** Use normalizer with getDefaultNormalizer instead */
    collapseWhitespace?: boolean,
    normalizer?: NormalizerFn,
    /** suppress suggestions for a specific query */
    suggest?: boolean,
  |};

  declare type ByRoleOptions = {|
    ...MatcherOptions,
    /**
     * If true includes elements in the query set that are usually excluded from
     * the accessibility tree. `role="none"` or `role="presentation"` are included
     * in either case.
     */
    hidden?: boolean,
    /**
     * If true only includes elements in the query set that are marked as
     * selected in the accessibility tree, i.e., `aria-selected="true"`
     */
    selected?: boolean,
    /**
     * If true only includes elements in the query set that are marked as
     * checked in the accessibility tree, i.e., `aria-checked="true"`
     */
    checked?: boolean,
    /**
     * If true only includes elements in the query set that are marked as
     * pressed in the accessibility tree, i.e., `aria-pressed="true"`
     */
    pressed?: boolean,
    /**
     * If true only includes elements in the query set that are marked as
     * expanded in the accessibility tree, i.e., `aria-expanded="true"`
     */
    expanded?: boolean,
    /**
     * Includes elements with the `"heading"` role matching the indicated level,
     * either by the semantic HTML heading elements `<h1>-<h6>` or matching
     * the `aria-level` attribute.
     */
    level?: number,
    /**
     * Includes every role used in the `role` attribute
     * For example *ByRole('progressbar', {queryFallbacks: true})` will find <div role="meter progressbar">`.
     */
    queryFallbacks?: boolean,
    /**
     * Only considers  elements with the specified accessible name.
     */
    name?:
      | string
      | RegExp
      | ((accessibleName: string, element: Element) => boolean),
  |};

  declare type SelectorMatcherOptions = {|
    ...MatcherOptions,
    selector?: string,
    ignore?: string | boolean
  |};

  // These two types must be updated kept in sync
  declare export type UnionHTMLElement =
    | HTMLElement
    | HTMLInputElement
    | HTMLAnchorElement
    | HTMLButtonElement
    | HTMLLabelElement
    | HTMLSelectElement;

  declare export type IntersectionHTMLElement =
    & HTMLElement
    & HTMLInputElement
    & HTMLAnchorElement
    & HTMLButtonElement
    & HTMLLabelElement
    & HTMLSelectElement;
  // End mixed html types

  declare type QueryByBoundAttribute = (
    text: Matcher,
    options?: MatcherOptions
  ) => ?IntersectionHTMLElement;

  declare type AllByBoundAttribute = (
    text: Matcher,
    options?: MatcherOptions
  ) => Array<IntersectionHTMLElement>;

  declare type FindAllByBoundAttribute = (
    text: Matcher,
    options?: MatcherOptions,
    waitForElementOptions?: WaitForOptions
  ) => Promise<IntersectionHTMLElement[]>;

  declare type GetByBoundAttribute = (
    text: Matcher,
    options?: MatcherOptions
  ) => IntersectionHTMLElement;

  declare type FindByBoundAttribute = (
    text: Matcher,
    options?: MatcherOptions,
    waitForElementOptions?: WaitForOptions
  ) => Promise<IntersectionHTMLElement>;

  declare type QueryByText = (
    text: Matcher,
    options?: SelectorMatcherOptions
  ) => ?IntersectionHTMLElement;

  declare type AllByText = (
    text: Matcher,
    options?: SelectorMatcherOptions
  ) => Array<IntersectionHTMLElement>;

  declare type FindAllByText = (
    text: Matcher,
    options?: SelectorMatcherOptions,
    waitForElementOptions?: WaitForOptions
  ) => Promise<IntersectionHTMLElement[]>;

  declare type GetByText = (
    text: Matcher,
    options?: SelectorMatcherOptions
  ) => IntersectionHTMLElement;

  declare type FindByText = (
    text: Matcher,
    options?: SelectorMatcherOptions,
    waitForElementOptions?: WaitForOptions
  ) => Promise<IntersectionHTMLElement>;

  declare type AllByRole = (
    role: ByRoleMatcher,
    options?: ByRoleOptions
  ) => IntersectionHTMLElement[];

  declare type GetByRole = (
    role: ByRoleMatcher,
    options?: ByRoleOptions
  ) => IntersectionHTMLElement;

  declare type QueryByRole = (
    role: ByRoleMatcher,
    options?: ByRoleOptions
  ) => IntersectionHTMLElement | null;

  declare type FindByRole = (
    role: ByRoleMatcher,
    options?: ByRoleOptions,
    waitForElementOptions?: WaitForOptions
  ) => Promise<IntersectionHTMLElement>;

  declare type FindAllByRole = (
    role: ByRoleMatcher,
    options?: ByRoleOptions,
    waitForElementOptions?: WaitForOptions
  ) => Promise<IntersectionHTMLElement[]>;

  declare type GetsAndQueries = {|
    getByLabelText: GetByText,
    getAllByLabelText: AllByText,
    queryByLabelText: QueryByText,
    queryAllByLabelText: AllByText,
    findByLabelText: FindByText,
    findAllByLabelText: FindAllByText,

    getByPlaceholderText: GetByBoundAttribute,
    getAllByPlaceholderText: AllByBoundAttribute,
    queryByPlaceholderText: QueryByBoundAttribute,
    queryAllByPlaceholderText: AllByBoundAttribute,
    findByPlaceholderText: FindByBoundAttribute,
    findAllByPlaceholderText: FindAllByBoundAttribute,

    getByText: GetByText,
    getAllByText: AllByText,
    queryByText: QueryByText,
    queryAllByText: AllByText,
    findByText: FindByText,
    findAllByText: FindAllByText,

    getByAltText: GetByBoundAttribute,
    getAllByAltText: AllByBoundAttribute,
    queryByAltText: QueryByBoundAttribute,
    queryAllByAltText: AllByBoundAttribute,
    findByAltText: FindByBoundAttribute,
    findAllByAltText: FindAllByBoundAttribute,

    getByTitle: GetByBoundAttribute,
    getAllByTitle: AllByBoundAttribute,
    queryByTitle: QueryByBoundAttribute,
    queryAllByTitle: AllByBoundAttribute,
    findByTitle: FindByBoundAttribute,
    findAllByTitle: FindAllByBoundAttribute,

    getByDisplayValue: GetByBoundAttribute,
    getAllByDisplayValue: AllByBoundAttribute,
    queryByDisplayValue: QueryByBoundAttribute,
    queryAllByDisplayValue: AllByBoundAttribute,
    findByDisplayValue: FindByBoundAttribute,
    findAllByDisplayValue: FindAllByBoundAttribute,

    getByRole: GetByRole,
    getAllByRole: AllByRole,
    queryByRole: QueryByRole,
    queryAllByRole: AllByRole,
    findByRole: FindByRole,
    findAllByRole: FindAllByRole,

    getByTestId: GetByBoundAttribute,
    getAllByTestId: AllByBoundAttribute,
    queryByTestId: QueryByBoundAttribute,
    queryAllByTestId: AllByBoundAttribute,
    findByTestId: FindByBoundAttribute,
    findAllByTestId: FindAllByBoundAttribute,
  |};

  declare type FireEvent<TInit> = (
    element: UnionHTMLElement,
    eventProperties?: TInit
  ) => boolean;

  declare type Screen<Queries = GetsAndQueries> = {
    ...Queries,
    /**
     * Convenience function for `pretty-dom` which also allows an array
     * of elements
     */
    debug: (
      baseElement?:
        | HTMLElement
        | DocumentFragment
        | Array<HTMLElement | DocumentFragment>,
      maxLength?: number,
      options?: { ... } // @TODO pretty format OptionsReceived
    ) => void,
    /**
     * Convenience function for `Testing Playground` which logs URL that
     * can be opened in a browser
     */
    logTestingPlaygroundURL: (element?: Element | Document) => void,
    ...
  };

  declare type RenderResult<Queries = GetsAndQueries> = {
    ...Queries,
    container: HTMLElement,
    unmount: () => boolean,
    baseElement: HTMLElement,
    asFragment: () => DocumentFragment,
    debug: (
      baseElement?:
        | HTMLElement
        | DocumentFragment
        | Array<HTMLElement | DocumentFragment>,
      maxLength?: number
    ) => void,
    rerender: (ui: React$Element<*>) => void,
    ...
  };

  declare export type RenderOptionsWithoutCustomQueries = {|
    container?: HTMLElement,
    baseElement?: HTMLElement,
    hydrate?: boolean,
    wrapper?: React$ComponentType<any>,
  |};

  declare export type RenderOptionsWithCustomQueries<
    CustomQueries: { ... }
  > = {|
    queries: CustomQueries,
    container?: HTMLElement,
    baseElement?: HTMLElement,
    hydrate?: boolean,
    wrapper?: React$ComponentType<any>,
  |};

  declare export function render(
    ui: React$Element<any>,
    options?: RenderOptionsWithoutCustomQueries
  ): RenderResult<>;
  declare export function render<
    CustomQueries: { [string]: (...args: Array<any>) => any, ... }
  >(
    ui: React$Element<any>,
    options: RenderOptionsWithCustomQueries<CustomQueries>
  ): RenderResult<CustomQueries>;

  declare export var act: ReactDOMTestUtilsAct;
  declare export function cleanup(): void;

  declare export function waitFor<T>(
    callback: () => T | Promise<T>,
    options?: {|
      container?: UnionHTMLElement,
      timeout?: number,
      interval?: number,
      mutationObserverOptions?: MutationObserverInit,
    |}
  ): Promise<T>;

  declare export function waitForElementToBeRemoved<T>(
    callback: (() => T) | T,
    options?: {|
      container?: UnionHTMLElement,
      timeout?: number,
      interval?: number,
      mutationObserverOptions?: MutationObserverInit,
    |}
  ): Promise<T>;

  declare export function within(
    element: UnionHTMLElement,
    queriesToBind?: GetsAndQueries | Array<GetsAndQueries>
  ): GetsAndQueries;

  declare export var fireEvent: {|
    (element: UnionHTMLElement, event: Event): void,

    copy: FireEvent<Event$Init>,
    cut: FireEvent<Event$Init>,
    paste: FireEvent<Event$Init>,
    compositionEnd: FireEvent<Event$Init>,
    compositionStart: FireEvent<Event$Init>,
    compositionUpdate: FireEvent<Event$Init>,
    keyDown: FireEvent<Event$Init>,
    keyPress: FireEvent<Event$Init>,
    keyUp: FireEvent<Event$Init>,
    focus: FireEvent<Event$Init>,
    blur: FireEvent<Event$Init>,
    change: FireEvent<Event$Init>,
    input: FireEvent<Event$Init>,
    invalid: FireEvent<Event$Init>,
    submit: FireEvent<Event$Init>,
    click: FireEvent<MouseEvent$MouseEventInit>,
    contextMenu: FireEvent<MouseEvent$MouseEventInit>,
    dblClick: FireEvent<MouseEvent$MouseEventInit>,
    doubleClick: FireEvent<MouseEvent$MouseEventInit>,
    drag: FireEvent<MouseEvent$MouseEventInit>,
    dragEnd: FireEvent<MouseEvent$MouseEventInit>,
    dragEnter: FireEvent<MouseEvent$MouseEventInit>,
    dragExit: FireEvent<MouseEvent$MouseEventInit>,
    dragLeave: FireEvent<MouseEvent$MouseEventInit>,
    dragOver: FireEvent<MouseEvent$MouseEventInit>,
    dragStart: FireEvent<MouseEvent$MouseEventInit>,
    drop: FireEvent<MouseEvent$MouseEventInit>,
    mouseDown: FireEvent<MouseEvent$MouseEventInit>,
    mouseEnter: FireEvent<MouseEvent$MouseEventInit>,
    mouseLeave: FireEvent<MouseEvent$MouseEventInit>,
    mouseMove: FireEvent<MouseEvent$MouseEventInit>,
    mouseOut: FireEvent<MouseEvent$MouseEventInit>,
    mouseOver: FireEvent<MouseEvent$MouseEventInit>,
    mouseUp: FireEvent<MouseEvent$MouseEventInit>,
    select: FireEvent<Event$Init>,
    touchCancel: FireEvent<Event$Init>,
    touchEnd: FireEvent<Event$Init>,
    touchMove: FireEvent<Event$Init>,
    touchStart: FireEvent<Event$Init>,
    scroll: FireEvent<Event$Init>,
    wheel: FireEvent<MouseEvent$MouseEventInit>,
    abort: FireEvent<Event$Init>,
    canPlay: FireEvent<Event$Init>,
    canPlayThrough: FireEvent<Event$Init>,
    durationChange: FireEvent<Event$Init>,
    emptied: FireEvent<Event$Init>,
    encrypted: FireEvent<Event$Init>,
    ended: FireEvent<Event$Init>,
    loadedData: FireEvent<Event$Init>,
    loadedMetadata: FireEvent<Event$Init>,
    loadStart: FireEvent<Event$Init>,
    pause: FireEvent<Event$Init>,
    play: FireEvent<Event$Init>,
    playing: FireEvent<Event$Init>,
    progress: FireEvent<Event$Init>,
    rateChange: FireEvent<Event$Init>,
    seeked: FireEvent<Event$Init>,
    seeking: FireEvent<Event$Init>,
    stalled: FireEvent<Event$Init>,
    suspend: FireEvent<Event$Init>,
    timeUpdate: FireEvent<Event$Init>,
    volumeChange: FireEvent<Event$Init>,
    waiting: FireEvent<Event$Init>,
    load: FireEvent<Event$Init>,
    error: FireEvent<Event$Init>,
    animationStart: FireEvent<Event$Init>,
    animationEnd: FireEvent<Event$Init>,
    animationIteration: FireEvent<Event$Init>,
    transitionEnd: FireEvent<Event$Init>,
  |};
  // dom-testing-library re-declares
  declare export function queryByTestId(
    container: UnionHTMLElement,
    id: Matcher,
    options?: MatcherOptions
  ): ?IntersectionHTMLElement;
  declare export function getByTestId(
    container: UnionHTMLElement,
    id: Matcher,
    options?: MatcherOptions
  ): IntersectionHTMLElement;
  declare export function queryByText(
    container: UnionHTMLElement,
    text: Matcher,
    options?: MatcherOptions
  ): ?IntersectionHTMLElement;
  declare export function getByText(
    container: UnionHTMLElement,
    text: Matcher,
    options?: { selector?: string, ... } & MatcherOptions
  ): IntersectionHTMLElement;
  declare export function queryByPlaceholderText(
    container: UnionHTMLElement,
    text: Matcher,
    options?: MatcherOptions
  ): ?IntersectionHTMLElement;
  declare export function getByPlaceholderText(
    container: UnionHTMLElement,
    text: Matcher,
    options?: MatcherOptions
  ): IntersectionHTMLElement;
  declare export function queryByLabelText(
    container: UnionHTMLElement,
    text: Matcher,
    options?: MatcherOptions
  ): ?IntersectionHTMLElement;
  declare export function getByLabelText(
    container: UnionHTMLElement,
    text: Matcher,
    options?: { selector?: string, ... } & MatcherOptions
  ): IntersectionHTMLElement;
  declare export function queryByAltText(
    container: UnionHTMLElement,
    text: Matcher,
    options?: MatcherOptions
  ): ?IntersectionHTMLElement;
  declare export function getByAltText(
    container: UnionHTMLElement,
    text: Matcher,
    options?: MatcherOptions
  ): IntersectionHTMLElement;
  declare export function getNodeText(node: UnionHTMLElement): string;
  declare export var screen: Screen<>;
}
