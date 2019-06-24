declare module '@testing-library/react' {
  declare type TextMatch =
    | string
    | RegExp
    | ((content: string, element: HTMLElement) => boolean);

  declare type TextMatchOptions = {
    exact?: boolean,
    trim?: boolean,
    collapseWhitespace?: boolean,
  };

  declare type SelectorMatchOptions = { selector?: string } & TextMatchOptions;

  declare type GetByText<T> = T;
  declare type QueryByText<T> = ?T;
  declare type AllByText<T> = Array<T>;
  declare type GetByBoundAttribute<T> = T;
  declare type QueryByBoundAttribute<T> = ?T;
  declare type AllByBoundAttribute<T> = Array<T>;

  declare type GetsAndQueries = {|
    getByAltText: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => GetByBoundAttribute<T>,
    getAllByAltText: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => AllByBoundAttribute<T>,
    queryByAltText: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => QueryByBoundAttribute<T>,
    queryAllByAltText: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => AllByBoundAttribute<T>,

    getByDisplayValue: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => GetByBoundAttribute<T>,
    getAllByDisplayValue: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => AllByBoundAttribute<T>,
    queryByDisplayValue: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => QueryByBoundAttribute<T>,
    queryAllByDisplayValue: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => AllByBoundAttribute<T>,
    getByLabelText: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => GetByText<T>,
    getAllByLabelText: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => AllByText<T>,
    queryByLabelText: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => QueryByText<T>,
    queryAllByLabelText: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => AllByText<T>,

    getByPlaceholderText: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => GetByBoundAttribute<T>,
    getAllByPlaceholderText: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => AllByBoundAttribute<T>,
    queryByPlaceholderText: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => QueryByBoundAttribute<T>,
    queryAllByPlaceholderText: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => AllByBoundAttribute<T>,

    getByRole: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => GetByBoundAttribute<T>,
    getAllByRole: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => AllByBoundAttribute<T>,
    queryByRole: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => QueryByBoundAttribute<T>,
    queryAllByRole: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => AllByBoundAttribute<T>,

    getBySelectText: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => GetByBoundAttribute<T>,
    getAllBySelectText: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => AllByBoundAttribute<T>,
    queryBySelectText: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => QueryByBoundAttribute<T>,
    queryAllBySelectText: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => AllByBoundAttribute<T>,

    getByTestId: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => GetByBoundAttribute<T>,
    getAllByTestId: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => AllByBoundAttribute<T>,
    queryByTestId: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => QueryByBoundAttribute<T>,
    queryAllByTestId: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => AllByBoundAttribute<T>,
    getByText: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => GetByText<T>,
    getAllByText: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => AllByText<T>,
    queryByText: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => QueryByText<T>,
    queryAllByText: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => AllByText<T>,

    getByTitle: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => GetByBoundAttribute<T>,
    getAllByTitle: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => AllByBoundAttribute<T>,
    queryByTitle: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => QueryByBoundAttribute<T>,
    queryAllByTitle: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => AllByBoundAttribute<T>,

    getByValue: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => GetByBoundAttribute<T>,
    getAllByValue: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => AllByBoundAttribute<T>,
    queryByValue: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => QueryByBoundAttribute<T>,
    queryAllByValue: <T>(
      text: TextMatch,
      options?: SelectorMatchOptions
    ) => AllByBoundAttribute<T>,
  |};

  declare type RenderResult = {|
    container: HTMLDivElement,
    unmount: () => void,
    baseElement: HTMLElement,
    asFragment: () => DocumentFragment,
    debug: (baseElement?: HTMLElement) => void,
    rerender: (ui: React$Element<*>) => void,
  |} & GetsAndQueries;

  declare type FireEvent<TInit> = (
    element: HTMLElement,
    eventProperties?: TInit
  ) => boolean;

  declare module.exports: {
    render: (
      ui: React$Element<*>,
      options?: { container: HTMLElement, baseElement?: HTMLElement }
    ) => RenderResult,

    cleanup: () => void,

    wait: (
      callback?: () => void,
      options?: {
        timeout?: number,
        interval?: number,
      }
    ) => Promise<void>,

    waitForDomChange: <T>(options?: {
      container?: HTMLElement,
      timeout?: number,
      mutationObserverOptions?: MutationObserverInit,
    }) => Promise<T>,

    waitForElement: <T>(
      callback?: () => T,
      options?: {
        container?: HTMLElement,
        timeout?: number,
        mutationObserverOptions?: MutationObserverInit,
      }
    ) => Promise<T>,

    within: (
      element: HTMLElement,
      queriesToBind?: GetsAndQueries | Array<GetsAndQueries>
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
      options?: TextMatchOptions
    ) => ?HTMLElement,
    getByTestId: (
      container: HTMLElement,
      id: TextMatch,
      options?: TextMatchOptions
    ) => HTMLElement,
    queryByText: (
      container: HTMLElement,
      text: TextMatch,
      options?: TextMatchOptions
    ) => ?HTMLElement,
    getByText: (
      container: HTMLElement,
      text: TextMatch,
      options?: { selector?: string } & TextMatchOptions
    ) => HTMLElement,
    queryByPlaceholderText: (
      container: HTMLElement,
      text: TextMatch,
      options?: TextMatchOptions
    ) => ?HTMLElement,
    getByPlaceholderText: (
      container: HTMLElement,
      text: TextMatch,
      options?: TextMatchOptions
    ) => HTMLElement,
    queryByLabelText: (
      container: HTMLElement,
      text: TextMatch,
      options?: TextMatchOptions
    ) => ?HTMLElement,
    getByLabelText: (
      container: HTMLElement,
      text: TextMatch,
      options?: { selector?: string } & TextMatchOptions
    ) => HTMLElement,
    queryByAltText: (
      container: HTMLElement,
      text: TextMatch,
      options?: TextMatchOptions
    ) => ?HTMLElement,
    getByAltText: (
      container: HTMLElement,
      text: TextMatch,
      options?: TextMatchOptions
    ) => HTMLElement,
  };
}
