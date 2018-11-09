declare module 'react-testing-library' {
  declare type TextMatch =
    | string
    | RegExp
    | ((content: string, element: HTMLElement) => boolean);

  declare type TextMatchOptions = {
    exact?: boolean,
    trim?: boolean,
    collapseWhitespace?: boolean,
  };

  declare type SelectorMatchOptions = {selector?: string} & TextMatchOptions;

  declare type AllByText = (
    text: TextMatch,
    options?: TextMatchOptions
  ) => Array<HTMLElement>;

  declare type QueryByText = (
      text: TextMatch,
      options?: TextMatchOptions,
    ) => ?HTMLElement;

  declare type GetsAndQueries = {|
    getByTestId: (id: TextMatch, options?: TextMatchOptions) => HTMLElement,
    getByText: (
      text: TextMatch,
      options?: SelectorMatchOptions,
    ) => HTMLElement,
    getByPlaceholderText: (
      text: TextMatch,
      options?: TextMatchOptions,
    ) => HTMLElement,
    getByLabelText: (
      text: TextMatch,
      options?: SelectorMatchOptions,
    ) => HTMLElement,
    getAllByLabelText: AllByText,
    getByAltText: (text: TextMatch, options?: TextMatchOptions) => HTMLElement,
    getAll: (text: TextMatch, options?: TextMatchOptions) => Array<HTMLElement>,
    getAllByText: AllByText,
    queryByTestId: (id: TextMatch, options?: TextMatchOptions) => ?HTMLElement,
    queryByText: (text: TextMatch, options?: TextMatchOptions) => ?HTMLElement,
    queryByPlaceholderText: QueryByText,
    queryByLabelText: QueryByText,
    queryByAltText: QueryByText,
    queryAll: (
      text: TextMatch,
      options?: TextMatchOptions,
    ) => Array<HTMLElement>,
  |};

  declare type RenderResult = {|
    container: HTMLDivElement,
    unmount: () => void,
    baseElement: HTMLElement,
    debug: (baseElement?: HTMLElement) => void,
    rerender: (ui: React$Element<*>) => void,
  |} & GetsAndQueries;

  declare type FireEvent<TInit> = (
    element: HTMLElement,
    eventProperties?: TInit,
  ) => boolean;

  declare module.exports: {
    render: (
      ui: React$Element<*>,
      options?: {container: HTMLElement, baseElement?: HTMLElement},
    ) => RenderResult,

    cleanup: () => void,

    wait: (
      callback?: () => void,
      options?: {
        timeout?: number,
        interval?: number,
      },
    ) => Promise<void>,

    waitForElement: <T>(
      callback?: () => T,
      options?: {
        container?: HTMLElement,
        timeout?: number,
        mutationObserverOptions?: MutationObserverInit,
      },
    ) => Promise<T>,

    within: (
      element: HTMLElement,
      queriesToBind?: GetsAndQueries | Array<GetsAndQueries>,
    ) => GetsAndQueries,

    fireEvent: {|
      (element: HTMLElement, event: Event): void,

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
    |},

    // dom-testing-library re-exports
    queryByTestId: (
      container: HTMLElement,
      id: TextMatch,
      options?: TextMatchOptions,
    ) => ?HTMLElement,
    getByTestId: (
      container: HTMLElement,
      id: TextMatch,
      options?: TextMatchOptions,
    ) => HTMLElement,
    queryByText: (
      container: HTMLElement,
      text: TextMatch,
      options?: TextMatchOptions,
    ) => ?HTMLElement,
    getByText: (
      container: HTMLElement,
      text: TextMatch,
      options?: {selector?: string} & TextMatchOptions,
    ) => HTMLElement,
    queryByPlaceholderText: (
      container: HTMLElement,
      text: TextMatch,
      options?: TextMatchOptions,
    ) => ?HTMLElement,
    getByPlaceholderText: (
      container: HTMLElement,
      text: TextMatch,
      options?: TextMatchOptions,
    ) => HTMLElement,
    queryByLabelText: (
      container: HTMLElement,
      text: TextMatch,
      options?: TextMatchOptions,
    ) => ?HTMLElement,
    getByLabelText: (
      container: HTMLElement,
      text: TextMatch,
      options?: {selector?: string} & TextMatchOptions,
    ) => HTMLElement,
    queryByAltText: (
      container: HTMLElement,
      text: TextMatch,
      options?: TextMatchOptions,
    ) => ?HTMLElement,
    getByAltText: (
      container: HTMLElement,
      text: TextMatch,
      options?: TextMatchOptions,
    ) => HTMLElement,
  };
}
