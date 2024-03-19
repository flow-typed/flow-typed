declare module '@testing-library/user-event' {
  declare type $Record<T, V> = {
    [T]: V,
  };

  declare type $Omit<T: { ... }, P: { ... }> = $Exact<
    $Rest<T, $ReadOnly<$Exact<P>>>
  >;

  /**
   * Initializes the `location` attribute of the KeyboardEvent object to one of
   * the following location numerical constants:
   *
   *   DOM_KEY_LOCATION_STANDARD (numerical value 0)
   *   DOM_KEY_LOCATION_LEFT (numerical value 1)
   *   DOM_KEY_LOCATION_RIGHT (numerical value 2)
   *   DOM_KEY_LOCATION_NUMPAD (numerical value 3)
   */
  declare type DOM_KEY_LOCATION = 0 | 1 | 2 | 3;

  declare type MouseButton =
    | number
    | {|
        primary: 0,
        secondary: 1,
        auxiliary: 2,
        back: 3,
        X1: 3,
        forward: 4,
        X2: 4,
      |};

  /**
   * Check pointer events on every user interaction that triggers a bunch of events.
   * E.g. once for releasing a mouse button even though this triggers `pointerup`, `mouseup`, `click`, etc...
   * EachTrigger = 4
   * Check each target once per call to pointer (related) API
   * EachApiCall = 2
   * Check each event target once
   * EachTarget = 1
   * No pointer events check
   * Never = 0
   */
  declare type PointerEventsCheckLevel = 0 | 1 | 2 | 4;

  declare type pointerKey = {|
    /** Name of the pointer key */
    name: string,
    /** Type of the pointer device */
    pointerType: 'mouse' | 'pen' | 'touch',
    /** Type of button */
    button?: MouseButton,
  |};

  declare type SelectionTarget = {|
    node?: Node,
    /**
     * If `node` is set, this is the DOM offset.
     * Otherwise this is the `textContent`/`value` offset on the `target`.
     */
    offset?: number,
  |};

  /** Describes a selection inside `HTMLInputElement`/`HTMLTextareaElement` */
  declare type SelectionInputRange = {|
    node: HTMLInputElement | HTMLTextAreaElement,
    start: number,
    end: number,
  |};

  declare type PointerCoords = {|
    x?: number,
    y?: number,
    clientX?: number,
    clientY?: number,
    offsetX?: number,
    offsetY?: number,
    pageX?: number,
    pageY?: number,
    screenX?: number,
    screenY?: number,
  |};

  declare type PointerTarget = {|
    target: Element,
    coords?: PointerCoords,
  |};

  declare type PointerPressAction = {|
    ...PointerTarget,
    ...SelectionTarget,
    keyDef: pointerKey,
    releasePrevious: boolean,
    releaseSelf: boolean,
  |};

  declare type PointerMoveAction = {|
    ...PointerTarget,
    ...SelectionTarget,
    pointerName?: string,
  |};

  declare type PointerActionTarget = $Partial<PointerTarget> &
    $Partial<SelectionTarget>;

  declare type PointerAction = PointerActionTarget &
    (
      | $Omit<PointerPressAction, {| target: any, coords: any |}>
      | $Omit<PointerMoveAction, {| target: any, coords: any |}>
    );

  declare type PointerActionInput =
    | string
    | ({|
        keys: string,
      |} & PointerActionTarget)
    | PointerAction;

  declare type PointerInput = PointerActionInput | Array<PointerActionInput>;

  declare type keyboardKey = {|
    /** Physical location on a keyboard */
    code?: string,
    /** Character or functional key descriptor */
    key?: string,
    /** Location on the keyboard for keys with multiple representation */
    location?: DOM_KEY_LOCATION,
    /** Does the character in `key` require/imply AltRight to be pressed? */
    altGr?: boolean,
    /** Does the character in `key` require/imply a shiftKey to be pressed? */
    shift?: boolean,
  |};

  /**
   * @internal
   */
  declare type keyboardState = {|
    /**
      All keys that have been pressed and not been lifted up yet.
    */
    pressed: {|
      keyDef: keyboardKey,
      unpreventedDefault: boolean,
    |}[],
    /**
      Active modifiers
    */
    modifiers: {|
      Alt: boolean,
      AltGraph: boolean,
      CapsLock: boolean,
      Control: boolean,
      Fn: boolean,
      FnLock: boolean,
      Meta: boolean,
      NumLock: boolean,
      ScrollLock: boolean,
      Shift: boolean,
      Symbol: boolean,
      SymbolLock: boolean,
    |},
    modifierPhase: {|
      CapsLock?: boolean,
      FnLock?: boolean,
      NumLock?: boolean,
      ScrollLock?: boolean,
      SymbolLock?: boolean,
    |},
    /**
      The element the keyboard input is performed on.
      Some behavior might differ if the activeElement changes between corresponding keyboard events.
    */
    activeElement: Element | null,
    /**
      For HTMLInputElements type='number':
      If the last input char is '.', '-' or 'e',
      the IDL value attribute does not reflect the input value.

      @deprecated The document state workaround in `src/document/value.ts` keeps track
      of UI value diverging from value property.
    */
    carryValue?: string,
    /**
      Carry over characters to following key handlers.
      E.g. ^1
    */
    carryChar: string,
  |};

  /**
   * @internal
   */
  declare type pointerState = {|
    /**
        All keys that have been pressed and not been lifted up yet.
      */
    pressed: {|
      keyDef: pointerKey,
      pointerId: number,
      isMultiTouch: boolean,
      isPrimary: boolean,
      clickCount: number,
      unpreventedDefault: boolean,
      /** Target the key was pressed on */
      downTarget: Element,
    |}[],
    activeClickCount?: [string, number],
    /**
     * Position of each pointer.
     * The mouse is always pointer 1 and keeps its position.
     * Pen and touch devices receive a new pointerId for every interaction.
     */
    position: $Record<
      string,
      {|
        pointerId: number,
        pointerType: 'mouse' | 'pen' | 'touch',
      |} & $Partial<PointerTarget> & {|
          selectionRange?: Range | SelectionInputRange,
        |}
    >,
    /**
     * Last applied pointer id
     */
    pointerId: number,
  |};

  declare type Options = {|
    /**
     * When using `userEvent.upload`, automatically discard files
     * that don't match an `accept` property if it exists.
     *
     * @default true
     */
    applyAccept?: boolean,
    /**
     * We intend to automatically apply modifier keys for printable characters in the future.
     * I.e. `A` implying `{Shift>}a{/Shift}` if caps lock is not active.
     *
     * This options allows you to opt out of this change in foresight.
     * The feature therefore will not constitute a breaking change.
     *
     * @default true
     */
    autoModify?: boolean,
    /**
     * Between some subsequent inputs like typing a series of characters
     * the code execution is delayed per `setTimeout` for (at least) `delay` seconds.
     * This moves the next changes at least to next macro task
     * and allows other (asynchronous) code to run between events.
     *
     * `null` prevents `setTimeout` from being called.
     *
     * @default 0
     */
    delay?: number | null,
    /**
     * The document.
     *
     * This defaults to the owner document of an element if an API is called directly with an element and without setup.
     * Otherwise it falls back to the global document.
     *
     * @default element.ownerDocument??global.document
     */
    document?: Document,
    /**
     * An array of keyboard keys the keyboard device consists of.
     *
     * This allows to plug in different layouts / localizations.
     *
     * Defaults to a "standard" US-104-QWERTY keyboard.
     */
    keyboardMap?: keyboardKey[],
    /**
     * An array of available pointer keys.
     *
     * This allows to plug in different pointer devices.
     */
    pointerMap?: pointerKey[],
    /**
     * The pointer API includes a check if an element has or inherits `pointer-events: none`.
     * This check is known to be expensive and very expensive when checking deeply nested nodes.
     * This option determines how often the pointer related APIs perform the check.
     *
     * This is a binary flag option. You can combine multiple Levels.
     *
     * @default PointerEventsCheckLevel.EachCall
     */
    pointerEventsCheck?: PointerEventsCheckLevel | number,
    /**
     * `userEvent.type` automatically releases any keys still pressed at the end of the call.
     * This option allows to opt out of this feature.
     *
     * @default false
     */
    skipAutoClose?: boolean,
    /**
     * `userEvent.type` implys a click at the end of the element content/value.
     * This option allows to opt out of this feature.
     *
     * @default false
     */
    skipClick?: boolean,
    /**
     * `userEvent.click` implys moving the cursor to the target element first.
     * This options allows to opt out of this feature.
     *
     * @default false
     */
    skipHover?: boolean,
    /**
     * Write selected data to Clipboard API when a `cut` or `copy` is triggered.
     *
     * The Clipboard API is usually not available to test code.
     * Our `setup` replaces the `navigator.clipboard` property with a stub.
     *
     * Defaults to `false` when calling the APIs directly.
     * Defaults to `true` when calling the APIs per `setup`.
     */
    writeToClipboard?: boolean,
  |};

  /**
   * @internal
   */
  declare type InputDeviceState = {|
    pointerState: any,
    keyboardState: keyboardState,
  |};

  declare type Config = {|
    ...Options,
    ...InputDeviceState,
  |};

  declare function setup(options?: Options): UserEvent;

  declare function clear(element: Element): Promise<void>;

  declare function click(
    element: Element,
    options?: $Partial<Config>
  ): Promise<void>;

  declare function copy(
    options?: $Partial<Config>
  ): Promise<DataTransfer | void>;

  declare function cut(
    options?: $Partial<Config>
  ): Promise<DataTransfer | void>;

  declare function dblClick(
    element: Element,
    options?: $Partial<Config>
  ): Promise<void>;

  declare function deselectOptions(
    select: Element,
    values: HTMLElement | HTMLElement[] | string[] | string,
    options?: $Partial<Config>
  ): Promise<void>;

  declare function hover(
    element: Element,
    options?: $Partial<Config>
  ): Promise<void>;

  declare function keyboard(
    text: string,
    options?: $Partial<Config>
  ): Promise<keyboardState>;

  declare function pointer(
    input: PointerInput,
    options?: $Partial<Config>
  ): Promise<pointerState>;

  declare function paste(
    clipboardData?: DataTransfer | string,
    options?: $Partial<Config>
  ): Promise<void>;

  declare function selectOptions(
    select: Element,
    values: HTMLElement | HTMLElement[] | string[] | string,
    options?: $Partial<Config>
  ): Promise<void>;

  declare function tripleClick(
    element: Element,
    options?: $Partial<Config>
  ): Promise<void>;

  declare function type(
    element: Element,
    text: string,
    options?: $Partial<Config> & Parameters<UserEventApi['type']>[2]
  ): Promise<void>;

  declare function unhover(
    element: Element,
    options?: $Partial<Config>
  ): Promise<void>;

  declare function upload(
    element: HTMLElement,
    fileOrFiles: File | File[],
    options?: $Partial<Config>
  ): Promise<void>;

  declare function tab(
    options?: $Partial<Config> & Parameters<UserEventApi['tab']>[0]
  ): Promise<void>;

  declare type UserEvent = {|
    setup: typeof setup,
    clear: typeof clear,
    click: typeof click,
    copy: typeof copy,
    cut: typeof cut,
    dblClick: typeof dblClick,
    deselectOptions: typeof deselectOptions,
    hover: typeof hover,
    keyboard: typeof keyboard,
    pointer: typeof pointer,
    paste: typeof paste,
    selectOptions: typeof selectOptions,
    tripleClick: typeof tripleClick,
    type: typeof type,
    unhover: typeof unhover,
    upload: typeof upload,
    tab: typeof tab,
  |};

  declare export default UserEvent;
}
