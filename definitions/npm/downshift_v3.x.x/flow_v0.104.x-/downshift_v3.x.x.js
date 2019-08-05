declare module 'downshift' {
  declare export opaque type SCT$unknown: string;
  declare export opaque type SCT$mouseUp: string;
  declare export opaque type SCT$itemMouseEnter: string;
  declare export opaque type SCT$keyDownArrowUp: string;
  declare export opaque type SCT$keyDownArrowDown: string;
  declare export opaque type SCT$keyDownEscape: string;
  declare export opaque type SCT$keyDownEnter: string;
  declare export opaque type SCT$clickItem: string;
  declare export opaque type SCT$blurInput: string;
  declare export opaque type SCT$changeInput: string;
  declare export opaque type SCT$keyDownSpaceButton: string;
  declare export opaque type SCT$clickButton: string;
  declare export opaque type SCT$blurButton: string;
  declare export opaque type SCT$controlledPropUpdatedSelectedItem: string;
  declare export opaque type SCT$touchEnd: string;

  declare export type StateChangeTypes = $ReadOnly<{|
    unknown: SCT$unknown,
    mouseUp: SCT$mouseUp,
    itemMouseEnter: SCT$itemMouseEnter,
    keyDownArrowUp: SCT$keyDownArrowUp,
    keyDownArrowDown: SCT$keyDownArrowDown,
    keyDownEscape: SCT$keyDownEscape,
    keyDownEnter: SCT$keyDownEnter,
    clickItem: SCT$clickItem,
    blurInput: SCT$blurInput,
    changeInput: SCT$changeInput,
    keyDownSpaceButton: SCT$keyDownSpaceButton,
    clickButton: SCT$clickButton,
    blurButton: SCT$blurButton,
    controlledPropUpdatedSelectedItem: SCT$controlledPropUpdatedSelectedItem,
    touchEnd: SCT$touchEnd,
  |}>;

  declare export type Callback = () => mixed;

  declare export type DownshiftState<Item> = {
    highlightedIndex: ?number,
    inputValue: ?string,
    isOpen: boolean,
    selectedItem: ?Item,
    ...
  };

  declare export type Environment = {
    addEventListener(...a: any): void,
    removeEventListener(...a: any): void,
    document: Document,
    ...
  };

  declare export type A11yStatusMessageOptions<Item> = {
    highlightedIndex: ?number,
    inputValue: string,
    isOpen: boolean,
    itemToString: (item: Item) => string,
    previousResultCount: number,
    resultCount: number,
    highlightedItem: Item,
    selectedItem: Item,
    ...
  };

  declare export type StateChangeOptions<Item> = {
    ...DownshiftState<Item>,
    type: $Values<StateChangeTypes>,
    ...
  };

  declare export type PartialStateChangeOptions<Item> = { ...StateChangeOptions<Item>, ... };

  declare export type StateChangeFunction<Item> = (
    state: DownshiftState<Item>
  ) => PartialStateChangeOptions<Item>;

  declare export type GetRootPropsOptions = { refKey?: string, ... };

  declare export type GetInputPropsOptions = { disabled?: boolean, ... };

  declare export type GetLabelPropsOptions = {...};

  declare export type GetToggleButtonPropsOptions = {
    disabled?: boolean,
    'aria-label'?: string,
    ...
  };

  declare export type GetMenuPropsOptions = {
    refKey?: string,
    'aria-label'?: string,
    ...
  };

  declare export type GetPropsCommonOptions = { suppressRefError?: boolean, ... };

  declare export type GetItemPropsOptions<Item> = {
    index?: number,
    item: Item,
    isSelected?: boolean,
    disabled?: boolean,
    ...
  };

  declare export type PropGetters<Item> = {
    getRootProps: (
      options?: GetRootPropsOptions,
      otherOptions?: GetPropsCommonOptions
    ) => {...},
    getToggleButtonProps: (options?: GetToggleButtonPropsOptions) => {...},
    getLabelProps: (options?: GetLabelPropsOptions) => {...},
    getMenuProps: (
      options?: GetMenuPropsOptions,
      otherOptions?: GetPropsCommonOptions
    ) => {...},
    getInputProps: <T>(options?: T) => T & GetInputPropsOptions,
    getItemProps: (options: GetItemPropsOptions<Item>) => {...},
    ...
  };

  declare export type Actions<Item> = {
    reset: (
      otherStateToSet?: PartialStateChangeOptions<Item>,
      cb?: Callback
    ) => mixed,
    openMenu: (cb?: Callback) => mixed,
    closeMenu: (cb?: Callback) => mixed,
    toggleMenu: (
      otherStateToSet?: PartialStateChangeOptions<Item>,
      cb?: Callback
    ) => mixed,
    selectItem: (
      item: Item,
      otherStateToSet?: PartialStateChangeOptions<Item>,
      cb?: Callback
    ) => mixed,
    selectItemAtIndex: (
      index: number,
      otherStateToSet?: PartialStateChangeOptions<Item>,
      cb?: Callback
    ) => mixed,
    selectHighlightedItem: (
      otherStateToSet?: PartialStateChangeOptions<Item>,
      cb?: Callback
    ) => mixed,
    setHighlightedIndex: (
      index: number,
      otherStateToSet?: PartialStateChangeOptions<Item>,
      cb?: Callback
    ) => mixed,
    clearSelection: (cb?: Callback) => mixed,
    clearItems: () => mixed,
    setItemCount: (count: number) => mixed,
    unsetItemCount: () => mixed,
    setState: (
      stateToSet: PartialStateChangeOptions<Item> | StateChangeFunction<Item>,
      cb?: Callback
    ) => mixed,
    itemToString: (item: Item) => string,
    ...
  };

  declare export type ControllerStateAndHelpers<Item> = DownshiftState<Item> &
    PropGetters<Item> &
    Actions<Item>;

  declare export type ChildrenFunction<Item> = (
    options: ControllerStateAndHelpers<Item>
  ) => React$Node;

  declare export type DownshiftProps<Item> = $ReadOnly<{|
    initialSelectedItem?: Item,
    initialInputValue?: string,
    initialHighlightedIndex?: ?number,
    initialIsOpen?: boolean,
    defaultHighlightedIndex?: ?number,
    defaultIsOpen?: boolean,
    itemToString?: (item: ?Item) => string,
    selectedItemChanged?: (prevItem: Item, item: Item) => boolean,
    getA11yStatusMessage?: (options: A11yStatusMessageOptions<Item>) => string,
    onChange?: (
      selectedItem: ?Item,
      stateAndHelpers: ControllerStateAndHelpers<Item>
    ) => mixed,
    onSelect?: (
      selectedItem: ?Item,
      stateAndHelpers: ControllerStateAndHelpers<Item>
    ) => mixed,
    onStateChange?: (
      options: StateChangeOptions<Item>,
      stateAndHelpers: ControllerStateAndHelpers<Item>
    ) => mixed,
    onInputValueChange?: (
      inputValue: string,
      stateAndHelpers: ControllerStateAndHelpers<Item>
    ) => mixed,
    stateReducer?: (
      state: DownshiftState<Item>,
      changes: StateChangeOptions<Item>
    ) => PartialStateChangeOptions<Item>,
    itemCount?: number,
    highlightedIndex?: ?number,
    inputValue?: ?string,
    isOpen?: boolean,
    selectedItem?: ?Item,
    children?: ChildrenFunction<Item>,
    id?: string,
    inputId?: string,
    labelId?: string,
    menuId?: string,
    getItemId?: (index?: number) => string,
    environment?: Environment,
    onOuterClick?: (stateAndHelpers: ControllerStateAndHelpers<Item>) => mixed,
    onUserAction?: (
      options: StateChangeOptions<Item>,
      stateAndHelpers: ControllerStateAndHelpers<Item>
    ) => mixed,
    suppressRefError?: boolean,
  |}>;

  declare export function resetIdCounter(): void;

  declare export default class Downshift<Item> extends React$Component<
    DownshiftProps<Item>
  > {
    static stateChangeTypes: StateChangeTypes;
  }
}
