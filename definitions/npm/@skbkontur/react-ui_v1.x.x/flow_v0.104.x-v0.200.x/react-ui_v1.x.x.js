/* @flow */
/* eslint-disable max-len */

type InputEventHandler<E: Element> = (event: SyntheticInputEvent<E>) => void;

type FocusEventHandler<E: Element> = (event: SyntheticFocusEvent<E>) => void;

type MouseEventHandler<E: Element> = (event: SyntheticMouseEvent<E>) => void;

type KeyboardEventHandler<E: Element> = (
  event: SyntheticKeyboardEvent<E>,
) => void;

type InputSize = 'small' | 'medium' | 'large';
type InputAlign = 'left' | 'center' | 'right';
type InputType = 'password' | 'text';
type IconType = React$Node | (() => React$Node);

type AnyObject<T> = {
  +[key: string]: T,
  ...,
};

type _Theme = AnyObject<string>;

type _InputProps = {
  leftIcon?: IconType,
  rightIcon?: IconType,
  error?: boolean,
  warning?: boolean,
  borderless?: boolean,
  align?: InputAlign,
  mask?: ?string,
  maskChar?: ?string,
  formatChars?: AnyObject<string>,
  alwaysShowMask?: boolean,
  size?: InputSize,
  onChange?: (
    event: SyntheticKeyboardEvent<HTMLInputElement>,
    value: string,
  ) => void,
  onMouseEnter?: MouseEventHandler<HTMLLabelElement>,
  onMouseLeave?: MouseEventHandler<HTMLLabelElement>,
  onMouseOver?: MouseEventHandler<HTMLLabelElement>,
  type?: InputType,
  value?: string,
  capture?: boolean,
  prefix?: React$Node,
  suffix?: React$Node,
  mainInGroup?: boolean,
  selectAllOnFocus?: boolean,
  onUnexpectedInput?: () => void,
  ...
};

type _MenuItemState = null | 'hover' | 'selected' | void;

declare class _MenuItem extends React$Component<_MenuItemProps> {
  static __MENU_ITEM__: boolean;
  static __MENU_HEADER__: boolean;
}

type _InputVisibilityState = {|
  blinking: boolean,
  focused: boolean,
|};

type _InputState = {|
  ...$Exact<_InputVisibilityState>,
  polyfillPlaceholder: boolean,
|};

type Style = AnyObject<string | number>;

declare class _Input extends React$Component<_InputProps, _InputState> {
  focus(): void;
  blur(): void;
  blink(): void;
  setSelectionRange(start: number, end: number): void;
  selectAll: () => void;
}

type _MenuProps = {|
  children: React$Node,
  hasShadow?: boolean,
  maxHeight?: number | string,
  onItemClick?: () => void,
  width?: number | string,
  preventWindowScroll?: boolean,
|};

type _MenuState = {|
  highlightedIndex: number,
|};

declare class _Menu extends React$Component<_MenuProps, _MenuState> {
  up(): void;
  down(): void;
  enter(event: SyntheticEvent<HTMLElement>): boolean;
  reset(): void;
  highlightItem(index: number): void;
}

type InputLikeTextProps = {|
  ...$Exact<_InputProps>,
  children?: React$Node,
  innerRef?: (el: HTMLElement | null) => void,
  onFocus?: FocusEventHandler<HTMLElement>,
  onBlur?: FocusEventHandler<HTMLElement>,
|};

type InputLikeTextState = {|
  ...$Exact<_InputVisibilityState>,
|};

declare class _InputLikeText extends React$Component<
  InputLikeTextProps,
  InputLikeTextState,
> {
  focus(): void;
  blur(): void;
  blink(): void;
}

type _CalendarDateShape = {|
  year: number,
  month: number,
  date: number,
|};

declare class _MenuHeader extends React$Component<_MenuHeaderProps> {
  static __MENU_HEADER__: boolean;
}

type MenuSeparatorProps = {||};

declare class _MenuSeparator extends React$Component<MenuSeparatorProps> {}

type _ButtonSize = 'small' | 'medium' | 'large';
type _ButtonType = 'button' | 'submit' | 'reset';
type _ButtonArrow = boolean | 'left';
type _ButtonUse = 'default' | 'primary' | 'success' | 'danger' | 'pay' | 'link';

type _PopupMenuCaptionProps = {|
  opened: boolean,
  openMenu: (firstItemShouldBeSelected?: boolean) => void,
  closeMenu: (restoreFocus?: boolean) => void,
  toggleMenu: () => void,
|};

type _PopupMenuProps = {|
  children?: React$Node,
  menuMaxHeight?: number | string,
  menuWidth?: number | string,
  caption: React$Node | ((props: _PopupMenuCaptionProps) => React$Node),
  positions?: $ReadOnlyArray<string>,
  onChangeMenuState?: (isOpened: boolean, restoreFocus: boolean) => void,
  popupHasPin?: boolean,
  popupMargin?: number,
  popupPinOffset?: number,
  type?: 'dropdown' | 'tooltip',
  disableAnimations: boolean,
|};

type _PopupPosition =
  | 'top left'
  | 'top center'
  | 'top right'
  | 'right top'
  | 'right middle'
  | 'right bottom'
  | 'bottom left'
  | 'bottom center'
  | 'bottom right'
  | 'left top'
  | 'left middle'
  | 'left bottom';

type _SyntheticRadioEvent<T> = {|
  target: {|
    id: ?string,
    name: ?string,
    checked: ?boolean,
    disabled: ?boolean,
    value: T,
  |},
|};

type _TokenColorName = string;

type _TokenColors = {|
  idle: _TokenColorName,
  active?: _TokenColorName,
|};

type _TokenProps = {|
  colors?: _TokenColors,
  isActive?: boolean,
  error?: boolean,
  warning?: boolean,
|};

type _MenuHeaderProps = {|
  children: React$Node,
  _enableIconPadding?: ?boolean,
|};

type _MenuItemProps = {|
  _enableIconPadding?: boolean,
  alkoLink?: boolean,
  comment?: React$Node,
  disabled?: boolean,
  // eslint-disable-next-line flowtype/no-weak-types
  icon?: React$Element<any>,
  loose?: boolean,
  state?: _MenuItemState,
  onClick?: MouseEventHandler<HTMLElement>,
  children?: React$Node | ((state: _MenuItemState) => React$Node),
  target?: string,
  title?: string,
  href?: string,
  onMouseEnter?: MouseEventHandler<HTMLElement>,
  onMouseLeave?: MouseEventHandler<HTMLElement>,
  // eslint-disable-next-line flowtype/no-weak-types
  component?: React$ComponentType<any>,
|};

type _CurrencyInputState = {|
  formatted: string,
  selection: Selection,
  focused: boolean,
|};

declare class _CurrencyInput extends React$Component<
  _CurrencyInputProps,
  _CurrencyInputState,
> {
  focus: () => void;
  blur: () => void;
}

type _CurrencyInputProps = {
  value: ?number,
  fractionDigits?: ?number,
  signed?: boolean,
  onChange: (
    e: {
      target: {|
        value: ?number,
      |},
      ...
    },
    value: ?number,
  ) => void,
  onSubmit?: () => void,
  ...
};

type _SpinnerType = 'mini' | 'normal' | 'big';

type _SpinnerProps = {|
  caption?: React$Node,
  dimmed?: boolean,
  type?: _SpinnerType,
|};

type _MAP = {|
  circle: string,
  baseline: string,
  warning: string,
  ok: string,
  gear: string,
  user: string,
  wait: string,
  clear: string,
  grid: string,
  money: string,
  'help-circle': string,
  kebab: string,
|};

type _IconProps = {|
  name: $Keys<_MAP>,
  color: string,
|};

type _ComboBoxItem = {|
  value: string | number,
  label: string,
|};

type _FiasLocale = {|
  modalTitle: string,
  modalButtonOk: string,
  modalButtonCancel: string,

  addressFill: string,
  addressEdit: string,
  addressNotVerified: string,
  addressNotFound: string,
  addressFillParentOrSearch: string,
  addressSelectItemFromList: string,

  searchNotFound: string,
  searchPlaceholder: string,

  regionLabel: string,
  regionNotFound: string,
  regionPlaceholder: string,

  districtLabel: string,
  districtNotFound: string,
  districtPlaceholder: string,

  cityLabel: string,
  cityNotFound: string,
  cityPlaceholder: string,

  intracityareaLabel: string,
  intracityareaNotFound: string,
  intracityareaPlaceholder: string,

  settlementLabel: string,
  settlementNotFound: string,
  settlementPlaceholder: string,

  planningstructureLabel: string,
  planningstructureNotFound: string,
  planningstructurePlaceholder: string,

  streetLabel: string,
  streetNotFound: string,
  streetFillBefore: string,
  streetPlaceholder: string,

  steadLabel: string,
  steadNotFound: string,
  steadFillBefore: string,
  steadPlaceholder: string,

  houseLabel: string,
  houseNotFound: string,
  houseFillBefore: string,
  housePlaceholder: string,

  roomLabel: string,
  roomNotFound: string,
  roomFillBefore: string,
  roomPlaceholder: string,

  postalcodeLabel: string,
  postalcodePlaceholder: string,
  postalcodeNotFound: string,
  postalcodeNotValid: string,
  postalcodeReplace: string,

  foreignAddressLabel: string,
  foreignAddressPlaceholder: string,

  countryLabel: string,
  countryPlaceholder: string,
|};

type _LogotypeLocale = {|
  suffix: string,
  prefix: string,
|};

type _ComboBoxLocale = {|
  notFound: string,
  errorNetworkButton: string,
  errorNetworkMessage: string,
|};

type InternalDateOrder = 'DMY' | 'YMD' | 'MDY';

type InternalDateSeparator = '/' | '.' | '-' | ' ';

type InternalDateFirstDayWeek = 0 | 1 | 2;

type InternalDateDayWeek = 1 | 2 | 3 | 4 | 5 | 6 | 7;

type InternalDateLocaleSet = {|
  order: InternalDateOrder,
  separator: InternalDateSeparator,
  firstDayWeek: InternalDateFirstDayWeek,
  notWorkingDays: $ReadOnlyArray<InternalDateDayWeek>,
|};

type _DatePickerLocale = {|
  ...$Exact<InternalDateLocaleSet>,
  today: string,
  months: $ReadOnlyArray<string>,
|};

type _PagingLocale = {|
  forward: string,
|};

type _SelectLocale = {|
  placeholder: React$Node,
|};

type _SpinnerLocale = {|
  loading: React$Node,
|};

type _TokenInputLocale = {|
  addButtonComment: string,
  addButtonTitle: string,
|};

type _TopBarLocale = {|
  logout: string,
  cabinetTitle: string,
  cabinetSettings: string,
  cabinetCertificates: string,
  cabinetServices: string,
|};

declare module '@skbkontur/react-ui/Autocomplete' {
  declare export type AutocompleteProps = {
    ...$Exact<_InputProps>,
    renderItem?: (item: string) => React$Node,
    source?:
      | $ReadOnlyArray<string>
      | ((patter: string) => Promise<$ReadOnlyArray<string>>),
    disablePortal?: boolean,
    hasShadow?: boolean,
    menuAlign?: 'left' | 'right',
    menuMaxHeight?: number | string,
    menuWidth?: number | string,
    preventWindowScroll?: boolean,
    onChange: (
      event: {
        target: {
          value: string,
          ...
        },
        ...
      },
      value: string,
    ) => void,
    onBlur?: () => void,
    size?: $PropertyType<_InputProps, 'size'>,
    value: string,
    ...
  };

  declare export type AutocompleteState = {|
    items: void | null | $ReadOnlyArray<string>,
    selected: number,
  |};

  declare export default class Autocomplete extends React$Component<
    AutocompleteProps,
    AutocompleteState,
  > {
    focus(): void;
    blur(): void;
  }
}

declare module '@skbkontur/react-ui/Button' {
  declare export type ButtonSize = _ButtonSize;
  declare export type ButtonType = _ButtonType;
  declare export type ButtonArrow = _ButtonArrow;
  declare export type ButtonUse = _ButtonUse;

  declare export type ButtonProps = {|
    _noPadding?: boolean,
    _noRightPadding?: boolean,
    active?: boolean,
    align?: string,
    arrow?: ButtonArrow,
    autoFocus?: boolean,
    borderless?: boolean,
    checked?: boolean,
    children?: React$Node,
    corners?: number,
    disabled?: boolean,
    disableFocus?: boolean,
    error?: boolean,
    focused?: boolean,
    // eslint-disable-next-line flowtype/no-weak-types
    icon?: React$Element<any>,
    loading?: boolean,
    narrow?: boolean,
    onBlur?: FocusEventHandler<HTMLButtonElement>,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    onFocus?: FocusEventHandler<HTMLButtonElement>,
    onKeyDown?: KeyboardEventHandler<HTMLButtonElement>,
    onMouseEnter?: MouseEventHandler<HTMLButtonElement>,
    onMouseLeave?: MouseEventHandler<HTMLButtonElement>,
    onMouseOver?: MouseEventHandler<HTMLButtonElement>,
    size?: ButtonSize,
    type?: ButtonType,
    use?: ButtonUse,
    visuallyFocused?: boolean,
    warning?: boolean,
    width?: number | string,
  |};

  declare export type ButtonState = {|
    focusedByTab: boolean,
  |};

  declare export default class Button extends React$Component<
    ButtonProps,
    ButtonState,
  > {
    static TOP_LEFT: number;
    static TOP_RIGHT: number;
    static BOTTOM_RIGHT: number;
    static BOTTOM_LEFT: number;

    focus(): void;
    blur(): void;
  }
}

declare module '@skbkontur/react-ui/Calendar' {
  declare class DayCellViewModel {
    static create(
      date: number,
      month: number,
      year: number,
      isWeekend: boolean,
    ): DayCellViewModel;

    date: number;
    month: number;
    year: number;
    isWeekend: boolean;
  }

  declare class MonthViewModel {
    static create: (month: number, year: number) => MonthViewModel;

    +daysCount: number;
    +offset: number;
    +month: number;
    +year: number;
    +height: number;
    +days: $ReadOnlyArray<DayCellViewModel>;

    isLastInYear: boolean;
    isFirstInYear: boolean;
  }

  declare export type CalendarDateShape = _CalendarDateShape;

  declare export type CalendarProps = {|
    initialMonth?: number,
    initialYear?: number,
    onSelect?: (date: CalendarDateShape) => void,
    value?: ?CalendarDateShape,
    maxDate?: CalendarDateShape,
    minDate?: CalendarDateShape,
    isHoliday?: (
      day: CalendarDateShape & {
        isWeekend: boolean,
        ...
      },
    ) => boolean,
  |};

  declare export type CalendarState = {|
    scrollPosition: number,
    months: $ReadOnlyArray<MonthViewModel>,
    today: CalendarDateShape,
    scrollDirection: number,
    scrollTarget: number,
  |};

  declare export default class Calendar extends React$Component<
    CalendarProps,
    CalendarState,
  > {
    scrollToMonth(month: number, year: number): void;
  }
}

declare module '@skbkontur/react-ui/Center' {
  declare export type HorizontalAlign = 'left' | 'center' | 'right';

  declare export type CenterProps = {
    align?: HorizontalAlign,
    style?: Style,
    ...
  };

  declare export type CenterState = {||};

  declare export default class Center extends React$Component<
    CenterProps,
    CenterState,
  > {}
}

declare module '@skbkontur/react-ui/Checkbox' {
  declare export type CheckboxProps = {
    children?: React$Node,
    error?: boolean,
    warning?: boolean,
    onMouseEnter?: MouseEventHandler<HTMLLabelElement>,
    onMouseLeave?: MouseEventHandler<HTMLLabelElement>,
    onMouseOver?: MouseEventHandler<HTMLLabelElement>,
    onChange?: (
      event: SyntheticKeyboardEvent<HTMLInputElement>,
      value: boolean,
    ) => void,
    initialIndeterminate?: boolean,
    ...
  };

  declare export type CheckboxState = {|
    focusedByTab: boolean,
    indeterminate: boolean,
  |};

  declare export default class Checkbox extends React$Component<
    CheckboxProps,
    CheckboxState,
  > {
    focus(): void;
    blur(): void;
    setIndeterminate: () => void;
    resetIndeterminate: () => void;
  }
}

declare module '@skbkontur/react-ui/ComboBox' {
  declare export type ComboBoxItem = _ComboBoxItem;

  declare export type ComboBoxProps<T = ComboBoxItem> = {|
    align?: 'left' | 'center' | 'right',
    autocomplete?: boolean,
    autoFocus?: boolean,
    borderless?: boolean,
    disablePortal?: boolean,
    disabled?: boolean,
    error?: boolean,
    getItems?: (query: string) => Promise<$ReadOnlyArray<T>>,
    itemToValue?: (item: T) => string | number,
    maxLength?: number,
    drawArrow?: boolean,
    menuAlign?: 'left' | 'right',
    onBlur?: () => void,
    onChange?: (
      event: {
        target: {
          value: T,
          ...
        },
        ...
      },
      item: T,
    ) => void,
    onFocus?: () => void,
    // eslint-disable-next-line flowtype/no-weak-types
    onInputChange?: (query: string) => any,
    onUnexpectedInput?: (query: string) => void | null | T,
    placeholder?: string,
    renderItem?: (item: T, state?: _MenuItemState) => React$Node,
    renderNotFound?: () => React$Node,
    renderTotalCount?: (found: number, total: number) => React$Node,
    renderValue?: (item: T) => React$Node,
    totalCount?: number,
    value?: ?T,
    valueToString?: (item: T) => string,
    size?: 'small' | 'medium' | 'large',
    warning?: boolean,
    width?: string | number,
    maxMenuHeight?: number | string,
  |};

  declare export default class ComboBox<
    T = ComboBoxItem,
  > extends React$Component<ComboBoxProps<T>> {
    focus(): void;
    search(query?: string): void;
    open(): void;
    close(): void;
    selectInputText(): void;
    reset(): void;
  }
}

declare module '@skbkontur/react-ui/ComboBoxOld' {
  declare export type ComboBoxOldProps<T> = {|
    autoFocus?: boolean,
    borderless?: boolean,
    debounceInterval?: number,
    disablePortal?: boolean,
    disabled?: boolean,
    error?: boolean,
    info?: mixed | ((value: mixed) => mixed),
    menuAlign?: 'left' | 'right',
    openButton?: boolean,
    placeholder?: string,
    recover?: boolean | (() => mixed),
    renderItem?: (value: mixed, info: mixed, state: mixed) => mixed,
    renderNotFound?: string | (() => mixed),
    renderTotalCount?: (foundCount: number, totalCount: number) => mixed,
    renderValue?: (value: mixed, info: mixed) => mixed,
    valueToString?: (value: mixed, info: mixed) => mixed,
    source: (query: string) => mixed,
    value?: mixed,
    warning?: boolean,
    width?: number | string,
    onBlur?: () => mixed,
    onChange?: (event: mixed, value: mixed) => mixed,
    onClose?: () => mixed,
    onFocus?: () => mixed,
    onInputChange?: (value: string) => mixed,
    onInputKeyDown?: () => mixed,
    onMouseEnter?: () => mixed,
    onMouseLeave?: () => mixed,
    onMouseOver?: () => mixed,
    onOpen?: () => mixed,
  |};

  declare export type ComboBoxOldState = {||};

  declare export default class ComboBoxOld extends React$Component<
    ComboBoxOldProps<any>,
    ComboBoxOldState,
  > {}
}

declare module '@skbkontur/react-ui/CurrencyInput' {
  declare export type Selection = {|
    start: number,
    end: number,
    direction: SelectionDirection,
  |};

  declare export type SelectionDirection = 'forward' | 'backward' | 'none';

  declare export type CurrencyInputProps = _CurrencyInputProps;

  declare export type CurrencyInputState = _CurrencyInputState;

  declare export default typeof _CurrencyInput;
}

declare module '@skbkontur/react-ui/CurrencyLabel' {
  declare export type CurrencyLabelProps = {|
    fractionDigits?: number,
    value: number,
    currencySymbol?: React$Node | null,
  |};

  declare var CurrencyLabel: React$ComponentType<CurrencyLabelProps>;

  declare export default typeof CurrencyLabel;
}

declare module '@skbkontur/react-ui/CustomComboBox' {
  declare export type Action<T> =
    | {
        type: 'ValueChange',
        value: T,
        keepFocus: boolean,
        ...
      }
    | {
        type: 'TextChange',
        value: string,
        ...
      }
    | {
        type: 'KeyPress',
        event: SyntheticKeyboardEvent<HTMLElement>,
        ...
      }
    | {
        type: 'DidUpdate',
        prevProps: CustomComboBoxProps<T>,
        prevState: CustomComboBoxState<T>,
        ...
      }
    | {
        type: 'Mount',
        ...
      }
    | {
        type: 'Focus',
        ...
      }
    | {
        type: 'InputClick',
        ...
      }
    | {
        type: 'Blur',
        ...
      }
    | {
        type: 'Reset',
        ...
      }
    | {
        type: 'Open',
        ...
      }
    | {
        type: 'Close',
        ...
      }
    | {
        type: 'Search',
        query: string,
        ...
      };

  declare export type CustomComboBoxProps<T> = {|
    align?: 'left' | 'center' | 'right',
    autoFocus?: boolean,
    borderless?: boolean,
    disablePortal?: boolean,
    disabled?: boolean,
    error?: boolean,
    maxLength?: number,
    menuAlign?: 'left' | 'right',
    openButton?: boolean,
    onMouseEnter?: (e: SyntheticMouseEvent<HTMLElement>) => void,
    onMouseOver?: (e: SyntheticMouseEvent<HTMLElement>) => void,
    onMouseLeave?: (e: SyntheticMouseEvent<HTMLElement>) => void,
    placeholder?: string,
    size?: 'small' | 'medium' | 'large',
    totalCount?: number,
    value?: ?T,
    warning?: boolean,
    width?: string | number,
    maxMenuHeight?: number | string,
    renderNotFound?: () => React$Node,
    renderTotalCount?: (found: number, total: number) => React$Node,
    renderItem: (item: T, state?: _MenuItemState) => React$Node,
    renderValue: (value: T) => React$Node,
    valueToString: (value: T) => string,
    itemToValue: (item: T) => string | number,
  |};

  declare export type CustomComboBoxState<T> = {|
    editing: boolean,
    loading: boolean,
    opened: boolean,
    textValue: string,
    items: ?$ReadOnlyArray<T>,
  |};

  declare export type Effect<T> = (
    dispatch: (x0: Action<T>) => void,
    getState: () => CustomComboBoxState<T>,
    getProps: () => CustomComboBoxProps<T>,
    getInstance: () => CustomComboBox,
  ) => void;

  declare export type Reducer<T> = (
    state: CustomComboBoxState<T>,
    props: CustomComboBoxProps<T>,
    action: Action<T>,
  ) =>
    | CustomComboBoxState<T>
    | [CustomComboBoxState<T>, $ReadOnlyArray<Effect<T>>];

  declare export type Props<T> = {
    reducer: Reducer<T>,
    ...
  } & CustomComboBoxProps<T>;

  declare var DefaultState: {|
    editing: boolean,
    items: null,
    loading: boolean,
    opened: boolean,
    textValue: string,
  |};

  // eslint-disable-next-line flowtype/no-weak-types
  declare export default class CustomComboBox extends React$Component<
    Props<any>,
    CustomComboBoxState<any>,
  > {
    // eslint-disable-next-line flowtype/no-weak-types
    state: CustomComboBoxState<any>;
    input: ?_Input;
    menu: ?_Menu;
    inputLikeText: ?_InputLikeText;

    focus: () => void;
    selectInputText: () => void;
    blur: () => void;
    search(query?: string): void;
    open(): void;
    close(): void;
    reset(): void;
  }
}

declare module '@skbkontur/react-ui/DateInput' {
  declare var DateInputConfig: {|
    polyfillInput: boolean,
  |};

  declare var DateParts: {|
    Date: number,
    Month: number,
    Year: number,
    All: number,
  |};

  declare export type DateInputState = {|
    selected: number | null,
    editingCharIndex: number,
    date: string | null,
    month: string | null,
    year: string | null,
    minDate: ?_CalendarDateShape,
    maxDate: ?_CalendarDateShape,
    notify: boolean,
  |};

  declare export type DateInputProps = {|
    value?: string,
    error?: boolean,
    warning?: boolean,
    disabled?: boolean,
    minDate?: ?string,
    maxDate?: ?string,
    width?: string | number,
    withIcon?: boolean,
    size?: 'small' | 'large' | 'medium',
    onBlur?: (x0: SyntheticFocusEvent<HTMLElement>) => void,
    onFocus?: (x0: SyntheticFocusEvent<HTMLElement>) => void,
    onChange?: (
      x0: {|
        target: {|
          value: string,
        |},
      |},
      x1: string,
    ) => void,
    onKeyDown?: (x0: SyntheticKeyboardEvent<HTMLElement>) => void,
  |};

  declare export type DateInputSetStateCallBack = (
    prevState: $ReadOnly<DateInputState>,
    props?: DateInputProps,
  ) => DateInputState | null;

  declare export default class DateInput extends React$Component<
    DateInputProps,
    DateInputState,
  > {
    blur(): void;
    focus(): void;
    blink(): void;
  }
}

declare module '@skbkontur/react-ui/DatePicker' {
  declare export type DatePickerProps<T> = {|
    autoFocus?: boolean,
    disabled?: boolean,
    enableTodayLink?: boolean,
    error?: boolean,
    minDate?: T,
    maxDate?: T,
    menuAlign?: 'left' | 'right',
    size?: 'small' | 'medium' | 'large',
    value: T | null,
    warning?: boolean,
    width?: number | string,
    onBlur?: () => void,
    onChange: (
      e: {|
        target: {|
          value: T,
        |},
      |},
      v: T,
    ) => void,
    onFocus?: () => void,
    /* eslint-disable flowtype/no-weak-types */
    onKeyDown?: (e: SyntheticKeyboardEvent<any>) => void,
    onMouseEnter?: (e: SyntheticMouseEvent<any>) => void,
    onMouseLeave?: (e: SyntheticMouseEvent<any>) => void,
    onMouseOver?: (e: SyntheticMouseEvent<any>) => void,
    /* eslint-enable flowtype/no-weak-types */
    isHoliday?: (day: T, isWeekend: boolean) => boolean,
  |};

  declare export type DatePickerState = {|
    opened: boolean,
  |};

  declare export type DatePickerValue = string;

  declare export default class DatePicker extends React$Component<
    DatePickerProps<DatePickerValue>,
    DatePickerState,
  > {
    static validate: (value: string | null | void) => boolean;

    blur(): void;
    focus(): void;
    close(): void;
  }
}

declare module '@skbkontur/react-ui/DatePickerOld' {
  declare export type DatePickerOldProps = {|
    autoFocus?: boolean,
    className?: string,
    disabled?: boolean,
    error?: boolean,
    maxYear?: number,
    minYear?: number,
    menuAlign?: 'left' | 'right',
    onBlur?: () => void,
    onChange?: (
      e: {|
        target: {|
          value: Date,
        |},
      |},
      value: Date,
    ) => void,
    onFocus?: () => void,
    onInput?: InputEventHandler<HTMLElement>,
    onKeyDown?: KeyboardEventHandler<HTMLElement>,
    onKeyPress?: KeyboardEventHandler<HTMLElement>,
    onKeyUp?: KeyboardEventHandler<HTMLElement>,
    onMouseEnter?: MouseEventHandler<HTMLElement>,
    onMouseLeave?: MouseEventHandler<HTMLElement>,
    onMouseOver?: MouseEventHandler<HTMLElement>,
    onUnexpectedInput?: (value: string) => void,
    placeholder?: string,
    size?: 'small' | 'medium' | 'large',
    value?: Date | string,
    warning?: boolean,
    width?: number | string,
    withMask?: boolean,
  |};

  declare export type DatePickerOldState = {||};

  declare export default class DatePicker extends React$Component<
    DatePickerOldProps,
    DatePickerOldState,
  > {}
}

declare module '@skbkontur/react-ui/DateSelect' {
  declare var MONTHS: $ReadOnlyArray<string>;

  declare export type DateSelectProps = {|
    disabled?: boolean | null,
    onChange: (value: number) => void,
    type?: 'month' | 'year',
    value: number,
    width?: number | string,
    minValue?: number,
    maxValue?: number,
  |};

  declare export type DateSelectState = {|
    botCapped: boolean,
    current: ?number,
    height: number,
    opened: boolean,
    pos: number,
    top: number,
    topCapped: boolean,
    nodeTop: number,
  |};

  declare export default class DateSelect extends React$Component<
    DateSelectProps,
    DateSelectState,
  > {
    open: () => void;
    close: () => void;
  }
}

declare module '@skbkontur/react-ui/Dropdown' {
  declare export type DropdownProps = {|
    caption: React$Node,
    // eslint-disable-next-line flowtype/no-weak-types
    icon?: React$Element<any>,
    width?: number | string,
    // eslint-disable-next-line flowtype/no-weak-types
    _renderButton?: (params: any) => React$Node,
    disablePortal?: boolean,
    disabled?: boolean,
    error?: boolean,
    warning?: boolean,
    maxMenuHeight?: number,
    menuAlign?: 'left' | 'right',
    menuWidth?: number | string,
    size?: _ButtonSize,
    use?: _ButtonUse,
    onClose?: () => void,
    onOpen?: () => void,
    children?: React$Node,
    onMouseEnter?: MouseEventHandler<HTMLElement>,
    onMouseLeave?: MouseEventHandler<HTMLElement>,
    onMouseOver?: MouseEventHandler<HTMLElement>,
  |};

  declare export default class Dropdown extends React$Component<DropdownProps> {
    static Header: typeof _MenuHeader;
    static MenuItem: typeof _MenuItem;
    static Separator: typeof _MenuSeparator;

    open(): void;
    close(): void;
  }
}

declare module '@skbkontur/react-ui/DropdownContainer/DropdownContainer' {
  declare export type DropdownMenuProps = {|
    menuMaxHeight?: string | number,
    menuWidth?: string | number,
    caption: $PropertyType<_PopupMenuProps, 'caption'>,
    onOpen?: () => void,
    onClose?: () => void,
    disableAnimations?: boolean,
    children?: React$Node,
    header?: React$Node,
    footer?: React$Node,
    positions?: $ReadOnlyArray<_PopupPosition>,
  |};

  declare export default class DropdownMenu extends React$Component<DropdownMenuProps> {}
}

declare module '@skbkontur/react-ui/DropdownMenu' {
  declare export type DropdownMenuProps = {|
    menuMaxHeight?: string | number,
    menuWidth?: string | number,
    caption: $PropertyType<_PopupMenuProps, 'caption'>,
    onOpen?: () => void,
    onClose?: () => void,
    disableAnimations?: boolean,
    children?: React$Node,
    header?: React$Node,
    footer?: React$Node,
    positions?: $ReadOnlyArray<_PopupPosition>,
  |};

  declare export default class DropdownMenu extends React$Component<DropdownMenuProps> {}
}

declare module '@skbkontur/react-ui/Fias' {
  declare class FiasData {
    static isAddressObject: (data: FiasObject) => boolean;
    static isStead: (data: FiasObject) => boolean;
    static isHouse: (data: FiasObject) => boolean;

    data: FiasObject;
  }

  declare class AddressElement {
    type: Fields;
    name: string;
    data?: ?FiasData;

    +isFederalCity: boolean;
    +verifiableData: $Shape<FiasData>;

    getText(withoutType?: boolean): string;
    isTypeMatchField: (field: Fields) => boolean;
  }

  declare export type FiasId = string;

  declare export type FiasEntity = {|
    id: string,
    fiasId: FiasId,
    parentFiasId?: FiasId,
  |};

  declare export type AddressObject = {|
    ...$Exact<FiasEntity>,
    name: string,
    abbreviation: string,
    code: string,
  |};

  declare export type Stead = {|
    ...$Exact<FiasEntity>,
    number: string,
    liveStatus: LiveStatuses,
  |};

  declare export type House = {|
    ...$Exact<FiasEntity>,
    estateStatus: EstateStatuses,
    structureStatus: StructureStatuses,
    number?: string,
    structureNumber?: string,
    buildingNumber?: string,
  |};

  declare export type Room = {|
    ...$Exact<FiasEntity>,
    flatNumber: string,
    flatType: number,
    liveStatus: LiveStatuses,
  |};

  declare export type EstateStatuses = 'Hold' | 'House' | 'HouseHold' | 'None';

  declare export type StructureStatuses =
    | 'Structure'
    | 'Construction'
    | 'Liter'
    | 'None';

  declare export type LiveStatuses = 'active' | 'inactive';

  declare export type FiasObject = AddressObject | Stead | House | Room;

  declare export type Fields =
    | 'region'
    | 'district'
    | 'city'
    | 'intracityarea'
    | 'settlement'
    | 'planningstructure'
    | 'street'
    | 'stead'
    | 'house'
    | 'room';

  declare export type ExtraFields = 'postalcode';

  declare export type AddressFields = {
    [key: Fields]: ?AddressElement,
    ...,
  };

  declare export type FiasValue = {|
    address?: AddressValue,
    addressString?: string,
    addressErrors?: AddressErrors,
    fiasId?: FiasId,
  |};

  declare export type AddressValue = {|
    [key: Fields]: void | {|
      name: string,
      data?: FiasObject,
    |},
  |};

  declare export type AddressResponse = {|
    [key: Fields]: void | FiasObject,
  |};

  declare export type SearchResponse = $ReadOnlyArray<AddressResponse>;

  declare export type VerifyResponse = $ReadOnlyArray<{|
    address: AddressResponse,
    isValid: boolean,
    invalidLevel?: string,
  |}>;

  declare export type AddressErrors = {
    [key: Fields]: void | string,
    ...,
  };

  declare export type FormValidation = 'Error' | 'Warning' | 'None';

  declare export type SearchOptions = {|
    fiasId?: FiasId,
    searchText?: string,
    field?: Fields,
    parentFiasId?: FiasId,
    limit?: number,
    fullAddress?: boolean,
    directParent?: boolean,
  |};

  declare export type APIProvider = {|
    search: (options: SearchOptions) => Promise<APIResult<SearchResponse>>,
    verify: (address: AddressValue) => Promise<APIResult<VerifyResponse>>,
  |};

  declare export type APIResult<Data> = {|
    success: boolean,
    data?: Data,
    error?: Error,
  |};

  declare export type FetchFn = (
    uri: string,
    options: {|
      method?: 'GET' | 'POST',
      body?: string,
    |},
  ) => Promise<FetchResponse>;

  declare export type FetchResponse = {|
    ok: boolean,
    status: number,
    statusText: string,
    // eslint-disable-next-line flowtype/no-weak-types
    json: () => Promise<any>,
  |};

  declare export type FieldsSettings = {|
    [field: Fields | ExtraFields]: {|
      visible?: boolean,
    |} | void,
  |};

  declare export type FiasCountry = {|
    shortName: string,
    fullName: string,
    code: string,
  |};

  declare class Address {
    static ALL_FIELDS: $ReadOnlyArray<Fields>;
    static VERIFIABLE_FIELDS: $ReadOnlyArray<Fields>;
    static FULL_ADDRESS_SEARCH_FIELDS: $ReadOnlyArray<Fields>;
    static ALL_PARENTS_SEARCH_FIELDS: $ReadOnlyArray<Fields>;
    static createFromResponse: (response: AddressResponse) => Address;
    static createFromAddressValue: (addressValue: AddressValue) => Address;
    static verify: (
      address: Address,
      response: $ReadOnlyArray<{|
        address: AddressResponse,
        isValid: boolean,
        invalidLevel?: string | void,
      |}>,
      notVerifiedMessage: string,
    ) => Address;
    static getParentFields: (field: Fields) => $ReadOnlyArray<Fields>;
    static filterVisibleFields: (
      fields: {| [key: Fields]: any |},
      fieldsSettings: FieldsSettings,
    ) => {| [key: Fields]: any |};
    static getChildFields: (field: Fields) => $ReadOnlyArray<Fields>;
    static removeFiasData: (
      address: Address,
      fields: $ReadOnlyArray<Fields>,
    ) => Address;
    static getAddress: (
      api: APIProvider,
      value?: FiasValue,
      fieldsSettings?: FieldsSettings,
    ) => Promise<Address>;

    +isEmpty: boolean;
    +hasErrors: boolean;

    fields: AddressFields;
    errors: AddressErrors;

    hasError(field: Fields): boolean;
    getError(field: Fields): string | void;
    getAddressErrors: () => {|
      region?: string | void,
      district?: string | void,
      city?: string | void,
      intracityarea?: string | void,
      settlement?: string | void,
      planningstructure?: string | void,
      street?: string | void,
      stead?: string | void,
      house?: string | void,
      room?: string | void,
    |};
    getText: (
      minField?: Fields | void,
      skipTypes?: boolean,
      connector?: string,
    ) => string;
    isAllowedToFill: (field: ?Fields) => boolean;
    isAllowedToSearchFullAddress: (field?: Fields | void) => boolean;
    isAllowedToSearchThroughChildrenOfDirectParent: (
      field?: Fields | void,
    ) => boolean;
    hasOnlyIndirectParent: (field: ?Fields) => boolean;
    getClosestParentFiasId: (field?: Fields | void) => string | void;
    getFiasId: () => string;
    getAddressValue: () => AddressValue;
    getValue: (withPostalCode?: boolean) => FiasValue;
    convertForVerification: () => { ... };
  }

  declare export type FiasLocale = _FiasLocale;

  declare export type FiasProps = {|
    value?: FiasValue,
    error?: boolean,
    warning?: boolean,
    feedback?: string,
    showAddressText?: boolean,
    label?: string,
    // eslint-disable-next-line flowtype/no-weak-types
    icon?: React$Element<any>,
    readonly?: boolean,
    baseUrl?: string,
    api?: APIProvider,
    onInit?: (value: FiasValue) => void,
    onChange?: (value: FiasValue) => void,
    onClose?: () => void,
    search?: boolean,
    limit?: number,
    locale?: FiasLocale,
    formValidation?: FormValidation,
    allowNotVerified?: boolean,
    version?: string,
  |};

  declare export type FiasState = {|
    opened: boolean,
    address: Address,
    locale: FiasLocale,
  |};

  declare export default class Fias extends React$Component<
    FiasProps,
    FiasState,
  > {}
}

declare module '@skbkontur/react-ui/FxInput' {
  declare export type FxInputProps = {
    auto?: boolean,
    type?: 'currency' | $PropertyType<_InputProps, 'type'>,
    onRestore?: () => void,
    onChange:
      | $PropertyType<_CurrencyInputProps, 'onChange'>
      | $PropertyType<_InputProps, 'onChange'>,
    value?: string | number,
    refInput?: (element: _CurrencyInput | _Input | null) => void,
    ...
  };

  declare export type FxInputDefaultProps = {|
    width: $PropertyType<FxInputProps, 'width'>,
    type: $PropertyType<FxInputProps, 'type'>,
  |};

  declare export default class FxInput extends React$Component<FxInputProps> {
    focus: () => void;
    blur: () => void;
  }
}

declare module '@skbkontur/react-ui/Gapped' {
  declare export type GappedProps = {|
    gap?: number,
    verticalAlign?: string | number,
    vertical?: boolean,
    children: React$Node,
  |};

  declare export default class Gapped extends React$Component<GappedProps> {}
}

declare module '@skbkontur/react-ui/Group' {
  declare export type GroupProps = {|
    width?: string | number,
  |};

  declare export type GroupChildProps = {|
    mainInGroup?: boolean,
    width?: string | number,
    corners?: number,
  |};

  declare export default class Group extends React$Component<GroupProps> {}
}

declare module '@skbkontur/react-ui/HideBodyVerticalScroll' {
  declare export default class HideBodyVerticalScroll extends React$Component<{||}> {
    static hash: string;
  }
}

declare module '@skbkontur/react-ui/Hint' {
  declare export type HintProps = {|
    children?: React$Node,
    manual?: boolean,
    maxWidth?: string | number,
    opened?: boolean,
    pos?:
      | 'top'
      | 'right'
      | 'bottom'
      | 'left'
      | 'top left'
      | 'top center'
      | 'top right'
      | 'bottom left'
      | 'bottom center'
      | 'bottom right'
      | 'left top'
      | 'left middle'
      | 'left bottom'
      | 'right top'
      | 'right middle'
      | 'right bottom',
    text: React$Node,
    disableAnimations?: boolean,
    useWrapper?: boolean,
    onMouseEnter?: (
      event: SyntheticMouseEvent<HTMLElement> | MouseEvent,
    ) => void,
    onMouseLeave?: (
      event: SyntheticMouseEvent<HTMLElement> | MouseEvent,
    ) => void,
  |};

  declare export type HintState = {|
    opened: boolean,
  |};

  declare export default class Hint extends React$Component<
    HintProps,
    HintState,
  > {}
}

declare module '@skbkontur/react-ui/Icon/20px' {
  declare export type MAP = _MAP;

  declare export type IconProps = _IconProps;

  declare export default class Icon extends React$Component<IconProps> {
    static getAllNames(): $ReadOnlyArray<string>;
  }
}

declare module '@skbkontur/react-ui/IgnoreLayerClick' {
  declare export type IgnoreLayerClickProps = {|
    children: React$Node,
    active: boolean,
  |};

  declare export default class IgnoreLayerClick extends React$Component<IgnoreLayerClickProps> {}
}

declare module '@skbkontur/react-ui/Input' {
  declare export type InputSize = 'small' | 'medium' | 'large';
  declare export type InputAlign = 'left' | 'center' | 'right';
  declare export type InputType = 'password' | 'text';
  declare export type IconType = React$Node | (() => React$Node);

  declare export type InputProps = _InputProps;

  declare export type InputVisibilityState = _InputVisibilityState;

  declare export type InputState = _InputState;

  declare export default typeof _Input;
}

declare module '@skbkontur/react-ui/Kebab' {
  declare export type KebabProps = {|
    disabled?: boolean,
    onClose: () => void,
    onOpen: () => void,
    size?: 'small' | 'medium' | 'large',
    positions?: $ReadOnlyArray<_PopupPosition>,
    menuMaxHeight?: number | string,
    disableAnimations?: boolean,
    children?: React$Node,
  |};

  declare export type KebabState = {|
    anchor: ?HTMLElement,
    focusedByTab: boolean,
    opened: boolean,
  |};

  declare export default class Kebab extends React$Component<
    KebabProps,
    KebabState,
  > {}
}

declare module '@skbkontur/react-ui/Kladr' {
  declare export type PlaceDescription = {|
    code: string,
    fiasGuid: string,
    name: string,
    abbreviation: string,
    isError: boolean,
  |};

  declare export type Address = {
    region: PlaceDescription,
    district: PlaceDescription,
    city: PlaceDescription,
    settlement: PlaceDescription,
    street: PlaceDescription,
    index: string,
    okato: string,
    house: string,
    building: string,
    room: string,
    ...
  };

  declare export type KladrValue = {|
    address: Address,
  |};

  declare export type KladrProps = {|
    error?: string,
    title: string,
    value: any,
    warning?: string,
    onChange?: (event: any, value: KladrValue) => void,
  |};

  declare export type KladrState = {|
    opened: boolean,
  |};

  declare export default class Kladr extends React$Component<
    KladrProps,
    KladrState,
  > {}
}

declare module '@skbkontur/react-ui/Link' {
  declare export type LinkProps = {
    disabled?: boolean,
    href?: string,
    // eslint-disable-next-line flowtype/no-weak-types
    icon?: React$Element<any>,
    use?: 'default' | 'success' | 'danger' | 'grayed',
    _button?: boolean,
    _buttonOpened?: boolean,
    tabIndex?: number,
    onClick?: MouseEventHandler<HTMLAnchorElement>,
    ...
  };

  declare export type LinkState = {|
    focusedByTab: boolean,
  |};

  declare export default class Link extends React$Component<
    LinkProps,
    LinkState,
  > {
    // eslint-disable-next-line flowtype/no-weak-types
    static __ADAPTER__: any;
  }
}

declare module '@skbkontur/react-ui/Loader' {
  declare export type LoaderProps = {|
    children?: React$Node,
    active: boolean,
    caption?: $PropertyType<_SpinnerProps, 'caption'>,
    className?: string,
    type?: 'mini' | 'normal' | 'big',
  |};

  declare export type LoaderState = {|
    isStickySpinner: boolean,
    spinnerStyle?: Style,
  |};

  declare export default class Loader extends React$Component<
    LoaderProps,
    LoaderState,
  > {}
}

declare module '@skbkontur/react-ui/LocaleProvider' {
  declare export type LocaleControls = {|
    Fias?: $Shape<_FiasLocale>,
    TopBar?: $Shape<_TopBarLocale>,
    Select?: $Shape<_SelectLocale>,
    Paging?: $Shape<_PagingLocale>,
    Spinner?: $Shape<_SpinnerLocale>,
    ComboBox?: $Shape<_ComboBoxLocale>,
    Logotype?: $Shape<_LogotypeLocale>,
    TokenInput?: $Shape<_TokenInputLocale>,
    DatePicker?: $Shape<_DatePickerLocale>,
  |};

  declare export type LocaleProviderProps = {|
    locale?: LocaleControls,
    langCode?: 'ru_RU' | 'en_GB',
    children?: React$Node,
  |};

  declare var LocaleConsumer: React$ComponentType<LocaleProviderProps>;

  declare export default class LocaleProvider extends React$Component<LocaleProviderProps> {}
}

declare module '@skbkontur/react-ui/Logotype' {
  declare export type LogotypeLocale = _LogotypeLocale;

  declare export type LogotypeProps = {|
    color?: string,
    // eslint-disable-next-line flowtype/no-weak-types
    component?: React$ComponentType<any> | string,
    href?: string,
    suffix?: string,
    textColor?: string,
    withWidget?: boolean,
    locale?: LogotypeLocale,
  |};

  declare export default class Logotype extends React$Component<LogotypeProps> {}
}

declare module '@skbkontur/react-ui/Menu/Menu' {
  declare export type MenuProps = _MenuProps;

  declare export type MenuState = _MenuState;

  declare export default typeof _Menu;
}

declare module '@skbkontur/react-ui/MenuHeader' {
  declare export type MenuHeaderProps = _MenuHeaderProps;

  declare export default typeof _MenuHeader;
}

declare module '@skbkontur/react-ui/MenuItem' {
  declare export type MenuItemState = _MenuItemState;

  declare export type MenuItemElement = HTMLAnchorElement | HTMLSpanElement;

  declare export type MenuItemProps = _MenuItemProps;

  declare export default typeof _MenuItem;
}

declare module '@skbkontur/react-ui/MenuSeparator' {
  declare export type MenuSeparatorProps = {||};

  declare export default typeof _MenuSeparator;
}

declare module '@skbkontur/react-ui/Modal' {
  declare export type HeaderProps = {|
    close?: boolean,
    sticky?: boolean,
    children?: React$Node,
  |};

  declare function isHeader(child: React$Node): boolean;

  declare class Header extends React$Component<HeaderProps> {}

  declare export type BodyProps = {|
    children?: React$Node,
  |};

  declare class Body extends React$Component<BodyProps> {}

  declare export type FooterProps = {|
    panel?: boolean,
    sticky?: boolean,
    children?: React$Node,
  |};

  declare function isFooter(child: React$Node): boolean;

  declare class Footer extends React$Component<FooterProps> {}

  declare export type ModalProps = {|
    children?: React$Node,
    disableClose?: boolean,
    alignTop?: boolean,
    ignoreBackgroundClick?: boolean,
    noClose?: boolean,
    width?: number | string,
    onClose?: () => void,
  |};

  declare export type ModalState = {|
    stackPosition: number,
    horizontalScroll: boolean,
    clickTrapHeight?: string | number,
  |};

  declare export default class Modal extends React$Component<
    ModalProps,
    ModalState,
  > {
    static Header: typeof Header;
    static Body: typeof Body;
    static Footer: typeof Footer;
  }
}

declare module '@skbkontur/react-ui/ModalStack' {
  declare export default class ModalStack {
    // eslint-disable-next-line flowtype/no-weak-types
    static add(
      component: React$Component<any>,
      onChange: (stack: $ReadOnlyArray<React$Component<any>>) => void,
    ): any;
    // eslint-disable-next-line flowtype/no-weak-types
    static remove(component: React$Component<any>): void;
  }
}

declare module '@skbkontur/react-ui/Paging' {
  declare export type ItemComponentProps = {|
    active: boolean,
    children?: React$Node,
    className: string,
    onClick: () => void,
    pageNumber: number | 'forward',
    tabIndex: number,
  |};

  declare export type PagingProps = {|
    activePage: number,
    component?: React$ComponentType<ItemComponentProps>,
    onPageChange: (pageNumber: number) => void,
    pagesCount: number,
    disabled?: boolean,
    strings?: {|
      forward: string,
    |},
    withoutNavigationHint?: boolean,
    caption?: string,
    useGlobalListener?: boolean,
  |};

  declare export type PagingState = {|
    focusedByTab: boolean,
    focusedItem: ?ItemType,
    keyboardControl: boolean,
  |};

  declare export type ItemType = number | '.' | 'forward';

  declare export default class Paging extends React$Component<
    PagingProps,
    PagingState,
  > {
    static isForward(pageNumber: number | 'forward'): boolean;
  }
}

declare module '@skbkontur/react-ui/PasswordInput' {
  declare export type PasswordInputProps = {|
    ...$Exact<_InputProps>,
    detectCapsLock?: boolean,
  |};

  declare export type PasswordInputState = {|
    visible: boolean,
    capsLockEnabled?: boolean | null,
  |};

  declare export type InputProps = {|
    ...$Exact<PasswordInputProps>,
    onKeyDown: (event: SyntheticKeyboardEvent<HTMLInputElement>) => void,
    onKeyPress: (event: SyntheticKeyboardEvent<HTMLInputElement>) => void,
    rightIcon: () => React$Node,
  |};

  declare export default class PasswordInput extends React$Component<
    PasswordInputProps,
    PasswordInputState,
  > {
    focus: () => void;
  }
}

declare module '@skbkontur/react-ui/PerformanceMetrics/PerformanceMetrics' {
  declare export type PerformanceMetricsProps = {|
    componentsA: React$Element<any>,
    componentsB: React$Element<any>,
  |};

  declare export function PerformanceMetrics(
    props: PerformanceMetricsProps,
  ): React$Node;
}

declare module '@skbkontur/react-ui/Popup' {
  declare export type PopupPosition = _PopupPosition;

  declare var PopupPositions: $ReadOnlyArray<PopupPosition>;

  declare export type PopupHandlerProps = {|
    onMouseEnter?: (
      event: SyntheticMouseEvent<HTMLElement> | MouseEvent,
    ) => void,
    onMouseLeave?: (
      event: SyntheticMouseEvent<HTMLElement> | MouseEvent,
    ) => void,
    onClick?: (event: SyntheticMouseEvent<HTMLElement> | MouseEvent) => void,
    onFocus?: (event: SyntheticFocusEvent<HTMLElement> | FocusEvent) => void,
    onBlur?: (event: SyntheticFocusEvent<HTMLElement> | FocusEvent) => void,
    onOpen?: () => void,
  |};

  declare export type PopupProps = {|
    ...$Exact<PopupHandlerProps>,
    anchorElement: React$Node | HTMLElement,
    backgroundColor?: string,
    borderColor?: string,
    children: React$Node | (() => React$Node),
    hasPin: boolean,
    hasShadow: boolean,
    disableAnimations: boolean,
    margin: number,
    maxWidth: number | string,
    opened: boolean,
    pinOffset: number,
    pinSize: number,
    popupOffset: number,
    positions: $ReadOnlyArray<string>,
    onCloseRequest?: () => void,
  |};

  declare export type PopupLocation = {|
    coordinates: {|
      left: number,
      top: number,
    |},
    position: string,
  |};

  declare export type PopupState = {|
    location: ?PopupLocation,
  |};

  declare export default class Popup extends React$Component<
    PopupProps,
    PopupState,
  > {}
}

declare module '@skbkontur/react-ui/Radio' {
  declare export type SyntheticRadioEvent<T> = _SyntheticRadioEvent<T>;

  declare export type RadioProps<T> = {
    error?: boolean,
    warning?: boolean,
    focused?: boolean,
    pressed?: boolean,
    hovered?: boolean,
    active?: boolean,
    onChange?: (event: SyntheticRadioEvent<T>, value: T) => void,
    onMouseEnter?: (event: SyntheticRadioEvent<T>) => void,
    onMouseLeave?: (event: SyntheticRadioEvent<T>) => void,
    onMouseOver?: (event: SyntheticRadioEvent<T>) => void,
    value: T,
    ...
  };

  declare export default class Radio<T> extends React$Component<RadioProps<T>> {
    focus(): void;
    blur(): void;
  }
}

declare module '@skbkontur/react-ui/RadioGroup' {
  declare export type PreventProps = {|
    children?: React$Node,
  |};

  declare class Prevent extends React$Component<PreventProps> {}

  declare export type ItemType<T> = T | [T, React$Node];

  declare export type RadioGroupProps<T> = {|
    defaultValue?: T,
    value?: T,
    items?: $ReadOnlyArray<ItemType<T>>,
    name?: string,
    disabled?: boolean,
    warning?: boolean,
    error?: boolean,
    inline?: boolean,
    children?: React$Node,
    width?: string | number,
    renderItem?: (itemValue: T, data: React$Node) => React$Node,
    onChange?: (event: _SyntheticRadioEvent<T>, value: T) => any,
    onMouseLeave?: () => any,
    onMouseOver?: () => any,
    onMouseEnter?: () => any,
  |};

  declare export type RadioGroupState<T> = {|
    activeItem?: T,
  |};

  declare function renderItem(_value: any, data: React$Node): React$Node;

  declare export default class RadioGroup<T> extends React$Component<
    RadioGroupProps<T>,
    RadioGroupState<T>,
  > {
    static Prevent: typeof Prevent;

    focus(): void;
  }
}

declare module '@skbkontur/react-ui/RenderContainer' {
  declare export type RenderContainerProps = {|
    anchor?: React$Node,
  |};

  declare export default class RenderContainer extends React$Component<RenderContainerProps> {
    static lastId: number;
  }
}

declare module '@skbkontur/react-ui/RenderLayer' {
  declare export type RenderLayerProps = {|
    children: React$Node,
    onClickOutside?: (e: Event) => void,
    onFocusOutside?: (e: Event) => void,
    active?: boolean,
  |};

  declare export default class RenderLayer extends React$Component<RenderLayerProps> {}
}

declare module '@skbkontur/react-ui/ScrollContainer' {
  declare export type ScrollContainerProps = {|
    invert?: boolean,
    maxHeight?: string | number,
    preventWindowScroll?: boolean,
  |};

  declare export type ScrollContainerState = {|
    scrollActive: boolean,
    hover: boolean,
    scrolling: boolean,
    scrollSize: number,
    scrollPos: number,
  |};

  declare export default class ScrollContainer extends React$Component<
    ScrollContainerProps,
    ScrollContainerState,
  > {
    scrollTo(element: HTMLElement): void;
    scrollToTop(): void;
    scrollToBottom(): void;
  }
}

declare module '@skbkontur/react-ui/Select' {
  declare class Item extends React$Component<{|
    children?: React$Node,
  |}> {}

  declare export type ButtonParams = {|
    disabled?: boolean,
    label: React$Node,
    onClick: () => void,
    onKeyDown: (event: SyntheticKeyboardEvent<HTMLElement>) => void,
    opened: boolean,
    isPlaceholder: boolean,
  |};

  declare export type SelectProps<TValue, TItem> = {|
    // eslint-disable-next-line flowtype/no-weak-types
    _icon?: React$Element<any>,
    _renderButton?: (params: ButtonParams) => React$Node,
    defaultValue?: TValue,
    // eslint-disable-next-line flowtype/no-weak-types
    diadocLinkIcon?: React$Element<any>,
    disablePortal?: boolean,
    disabled?: boolean,
    error?: boolean,
    filterItem?: (value: TValue, item: TItem, pattern: string) => boolean,
    // eslint-disable-next-line flowtype/no-weak-types
    items?: $ReadOnlyArray<
      [TValue, TItem] | TItem | React$Element<any> | (() => React$Element<any>),
    >,
    maxMenuHeight?: number,
    maxWidth?: string | number,
    menuAlign?: 'left' | 'right',
    menuWidth?: string | number,
    onChange?: (
      e: {|
        target: {|
          value: TValue,
        |},
      |},
      value: TValue,
    ) => void,
    onClose?: () => void,
    onMouseEnter?: (e: SyntheticMouseEvent<HTMLElement>) => void,
    onMouseLeave?: (e: SyntheticMouseEvent<HTMLElement>) => void,
    onMouseOver?: (e: SyntheticMouseEvent<HTMLElement>) => void,
    onOpen?: () => void,
    placeholder?: React$Node,
    renderItem?: (value: TValue, item?: TItem) => React$Node,
    renderValue?: (value: TValue, item?: TItem) => React$Node,
    areValuesEqual?: (value1: TValue, value2: TValue) => boolean,
    search?: boolean,
    value?: TValue,
    width?: number | string,
    warning?: boolean,
    use?: _ButtonUse,
    size?: _ButtonSize,
    onFocus?: FocusEventHandler<HTMLElement>,
    onBlur?: FocusEventHandler<HTMLElement>,
  |};

  declare export type SelectState<TValue> = {|
    opened: boolean,
    searchPattern?: string,
    value: ?TValue,
  |};

  declare function renderValue(value: any, item: any): any;
  declare function renderItem(value: any, item: any): any;
  declare function areValuesEqual(value1: any, value2: any): boolean;
  declare function filterItem(value: any, item: any, pattern: string): boolean;

  declare export default class Select<
    TValue = { ... },
    TItem = { ... },
  > extends React$Component<SelectProps<TValue, TItem>, SelectState<TValue>> {
    static Item: typeof Item;
    static SEP: () => React$Node;
    static static: (
      element:
        | string
        | number
        | boolean
        | { ... }
        | React$Element<any>
        | React$Node
        | React$Portal
        | (() => React$Node)
        | null
        | void,
    ) => { ... } | null | void;
    open: () => void;
    close: () => void;
    focus(): void;
  }
}

declare module '@skbkontur/react-ui/SidePage' {
  declare export type Props = {|
    children?: React$Node,
  |};

  declare class SidePageContainer extends React$Component<Props> {}

  declare export type SidePageHeaderProps = {|
    children?: React$Node | ((fixed: boolean) => React$Node),
  |};

  declare class SidePageHeader extends React$Component<SidePageHeaderProps> {
    renderClose(): React$Node;
  }

  declare export type SidePageFooterProps = {|
    children?: React$Node | ((fixed: boolean) => React$Node),
    context?: SidePageContextType,
    panel?: boolean,
  |};

  declare class SidePageFooter extends React$Component<SidePageFooterProps> {
    update: () => void;
  }

  declare var SidePageFooterWithContext: (
    props: SidePageFooterProps,
  ) => React$Node;

  declare export type SidePageContextType = {|
    requestClose: () => void,
    width: number | string,
    updateLayout: () => void,
    footerRef: (ref: SidePageFooter | null) => void,
  |};

  declare var SidePageContext: React$Context<SidePageContextType>;

  declare var withContext: <P: { ... }>(
    BaseComponent: React$ComponentType<
      P & {|
        context?: SidePageContextType | void,
      |},
    >,
  ) => (props: P) => React$Node;

  declare export type SidePageBodyProps = {|
    children?: React$Node,
    context?: SidePageContextType,
  |};

  declare class SidePageBody extends React$Component<SidePageBodyProps> {}

  declare var SidePageBodyWithContext: (props: SidePageBodyProps) => React$Node;

  declare export type SidePageProps = {|
    blockBackground?: boolean,
    disableClose?: boolean,
    ignoreBackgroundClick?: boolean,
    width?: number,
    onClose?: () => void,
    fromLeft?: boolean,
    disableAnimations?: boolean,
    children?: React$Node,
  |};

  declare export type SidePageState = {|
    stackPosition?: number,
    hasMargin?: boolean,
    hasShadow?: boolean,
    hasBackground?: boolean,
  |};

  declare export default class SidePage extends React$Component<
    SidePageProps,
    SidePageState,
  > {
    static Header: typeof SidePageHeader;
    static Body: typeof SidePageBody;
    static Footer: typeof SidePageFooter;
    static Container: typeof SidePageContainer;

    updateLayout: () => void;
  }
}

declare module '@skbkontur/react-ui/Spinner' {
  declare var types: AnyObject<SpinnerType>;

  declare var sizeMaps: AnyObject<
    | {|
        height: number,
        width: number,
        viewBox: void,
        strokeWidth: number,
      |}
    | {|
        height: number,
        width: number,
        viewBox: string,
        strokeWidth: number,
      |},
  >;

  declare function svgAnimateSupport(): boolean;

  declare var _default: {|
    types: AnyObject<SpinnerType>,
    sizeMaps: AnyObject<
      | {|
          height: number,
          width: number,
          viewBox: void,
          strokeWidth: number,
        |}
      | {|
          height: number,
          width: number,
          viewBox: string,
          strokeWidth: number,
        |},
    >,
    svgAnimateSupport: typeof svgAnimateSupport,
  |};

  declare var SpinnerConfig: {|
    hasSvgAnimationSupport: boolean,
  |};

  declare export type SpinnerType = _SpinnerType;

  declare export type SpinnerProps = _SpinnerProps;

  declare export default class Spinner extends React$Component<SpinnerProps> {
    static Types: typeof types;
  }
}

declare module '@skbkontur/react-ui/Sticky' {
  declare export type StickyProps = {|
    side: 'top' | 'bottom',
    offset?: number,
    getStop?: () => ?HTMLElement,
    children?: React$Node | ((fixed: boolean) => React$Node),
    allowChildWithMargins?: boolean,
  |};

  declare export type StickyState = {|
    fixed: boolean,
    height: number,
    left: number | string,
    width: number | string,
    stopped: boolean,
    relativeTop: number,
  |};

  declare export default class Sticky extends React$Component<
    StickyProps,
    StickyState,
  > {}
}

declare module '@skbkontur/react-ui/Switcher' {
  declare export type SwitcherProps = {|
    items: $ReadOnlyArray<string | SwitcherItem>,
    value?: string,
    onChange?: (
      event: {|
        target: {|
          value: string,
        |},
      |},
      value: string,
    ) => void,
    label?: string,
    error?: boolean,
  |};

  declare export type SwitcherState = {|
    focusedIndex: ?number,
  |};

  declare export type SwitcherItem = {|
    label: string,
    value: string,
  |};

  declare export default class Switcher extends React$Component<
    SwitcherProps,
    SwitcherState,
  > {}
}

declare module '@skbkontur/react-ui/Tabs' {
  declare export type TabIndicators = {|
    error: boolean,
    warning: boolean,
    success: boolean,
    primary: boolean,
    disabled: boolean,
  |};

  declare export type TabProps = {|
    children?: React$Node,
    // eslint-disable-next-line flowtype/no-weak-types
    component?: React$ComponentType<any> | string,
    href?: string,
    id?: string,
    onClick?: (event: SyntheticMouseEvent<HTMLElement>) => void,
    onKeyDown?: (event: SyntheticKeyboardEvent<HTMLElement>) => void,
    disabled?: boolean,
    error?: boolean,
    warning?: boolean,
    success?: boolean,
    primary?: boolean,
    style?: Style,
  |};

  declare export type TabContext = {|
    activeTab: string,
    // eslint-disable-next-line flowtype/no-weak-types
    addTab: (id: string, getNode: () => any) => void,
    notifyUpdate: () => void,
    removeTab: (id: string) => void,
    shiftFocus: (fromTab: string, delta: number) => void,
    switchTab: (id: string) => void,
    vertical: boolean,
  |};

  declare export type TabState = {|
    focusedByKeyboard: boolean,
  |};

  declare class Tab extends React$Component<TabProps, TabState> {
    // eslint-disable-next-line flowtype/no-weak-types
    getUnderlyingNode: () => ?React$Element<any>;
  }

  declare export type TabsProps = {|
    children?: React$Node,
    indicatorClassName?: string,
    onChange?: (
      ev: {|
        target: {|
          value: string,
        |},
      |},
      value: string,
    ) => void,
    value: string,
    vertical?: boolean,
    width?: number | string,
  |};

  declare export type TabsState = {|
    tabs: $ReadOnlyArray<{|
      getNode: () => Tab | null,
      id: string,
    |}>,
  |};

  declare export default class Tabs extends React$Component<
    TabsProps,
    TabsState,
  > {
    static Tab: typeof Tab;
  }
}

declare module '@skbkontur/react-ui/Textarea' {
  declare var TextareaAdapter: {|
    getValue(inst: Textarea): string | number | $ReadOnlyArray<string> | void,
    setValue(inst: Textarea, value: string): void,
  |};

  declare export type TextareaProps = {
    error?: boolean,
    warning?: boolean,
    disabled?: boolean,
    autoResize?: boolean,
    rows?: number,
    maxRows?: string | number,
    resize?: string,
    width?: string | number,
    onChange?: (
      event: SyntheticInputEvent<HTMLTextAreaElement>,
      value: string,
    ) => void,
    selectAllOnFocus?: boolean,
    ...
  };

  declare export type TextareaState = {|
    polyfillPlaceholder: boolean,
    rows: number | string,
  |};

  declare export default class Textarea extends React$Component<
    TextareaProps,
    TextareaState,
  > {
    static __ADAPTER__: typeof TextareaAdapter;

    focus(): void;
    blur(): void;
    setSelectionRange: (start: number, end: number) => void;
    selectAll: () => void;
  }
}

declare module '@skbkontur/react-ui/ThemeConsumer' {
  declare export type Theme = _Theme;

  declare var ThemeConsumer: React$ComponentType<Theme>;

  declare export default typeof ThemeConsumer;
}

declare module '@skbkontur/react-ui/ThemeProvider' {
  declare export type Theme = _Theme;

  declare export type ITheme = Theme;

  declare export type IThemeIn = Theme;

  declare export type ThemeProviderProps = {|
    children: React$Node,
    value: Theme,
  |};

  declare export default class ThemeProvider extends React$Component<ThemeProviderProps> {}
}

declare module '@skbkontur/react-ui/ThemeShowcase/ThemeShowcase' {
  declare export type ShowcaseProps = {|
    isDebugMode?: boolean,
  |};

  declare export type ShowcaseState = {|
    selectedVariable?: _ComboBoxItem,
  |};

  declare export default class ThemeShowcase extends React$Component<
    ShowcaseProps,
    ShowcaseState,
  > {}
}

declare module '@skbkontur/react-ui/Toast' {
  declare export type ToastViewProps = {|
    children?: string,
    action?: ?{|
      label: string,
      handler: () => void,
    |},
    onClose?: () => void,
    onMouseEnter?: () => void,
    onMouseLeave?: () => void,
  |};

  declare class ToastView extends React$Component<ToastViewProps> {}

  declare export type Action = {|
    label: string,
    handler: () => void,
  |};

  declare export type ToastState = {|
    notification: ?string,
    action: ?Action,
    id: number,
  |};

  declare export type ToastProps = {|
    onPush?: (notification: string, action?: Action) => void,
    onClose?: (notification: string, action?: Action) => void,
  |};

  declare export default class Toast extends React$Component<
    ToastProps,
    ToastState,
  > {
    static push(notification: string, action?: Action): void;
    static close(): void;

    _toast: ?ToastView;
    push(notification: string, action?: Action): void;
    close: () => void;
  }
}

declare module '@skbkontur/react-ui/Toggle' {
  declare export type ToggleProps = {|
    checked?: boolean,
    defaultChecked?: boolean,
    disabled?: boolean,
    onChange?: (value: boolean) => void,
    changeEventHandler?: InputEventHandler<HTMLInputElement>,
    warning?: boolean,
    error?: boolean,
    loading?: boolean,
    autoFocus?: boolean,
    onFocus?: FocusEventHandler<HTMLInputElement>,
    onBlur?: FocusEventHandler<HTMLInputElement>,
    color?: string,
  |};

  declare export type ToggleState = {|
    checked?: boolean,
    focusByTab?: boolean,
  |};

  declare export default class Toggle extends React$Component<
    ToggleProps,
    ToggleState,
  > {
    focus: () => void;
  }
}

declare module '@skbkontur/react-ui/Token' {
  declare export type TokenColorName = _TokenColorName;

  declare export type TokenColors = _TokenColors;

  declare export type TokenActions = {|
    onClick?: MouseEventHandler<HTMLDivElement>,
    onRemove?: MouseEventHandler<HTMLElement>,
  |};

  declare export type TokenProps = _TokenProps;

  declare var Token: React$ComponentType<{|
    ...$Exact<TokenProps>,
    ...$Exact<TokenActions>,
  |}>;

  declare export default typeof Token;
}

declare module '@skbkontur/react-ui/TokenInput' {
  declare export type TokenInputType = 0 | 1 | 2;

  declare export type TokenInputProps<T> = {|
    selectedItems: $ReadOnlyArray<T>,
    onChange: (items: $ReadOnlyArray<T>) => void,
    autoFocus?: boolean,
    type?: TokenInputType,
    getItems?: (query: string) => Promise<$ReadOnlyArray<T>>,
    hideMenuIfEmptyInputValue?: boolean,
    renderItem: (item: T, state: _MenuItemState) => React$Node | void,
    renderValue: (item: T) => React$Node,
    renderNotFound: () => React$Node,
    valueToItem: (item: string) => T,
    placeholder?: string,
    delimiters?: $ReadOnlyArray<string>,
    error?: boolean,
    warning?: boolean,
    disabled?: boolean,
    width: string | number,
    renderTokenComponent?: (
      token: (props?: $Shape<_TokenProps>) => React$Node,
      value?: T,
    ) => React$Node,
  |};

  declare export type TokenInputState<T> = {|
    autocompleteItems?: $ReadOnlyArray<T>,
    activeTokens: $ReadOnlyArray<T>,
    inFocus?: boolean,
    inputValue: string,
    inputValueWidth: number,
    preventBlur?: boolean,
    loading?: boolean,
  |};

  declare export default class TokenInput<T = string> extends React$Component<
    TokenInputProps<T>,
    TokenInputState<T>,
  > {}
}

declare module '@skbkontur/react-ui/Tooltip' {
  declare export type TooltipTrigger =
    | 'hover'
    | 'click'
    | 'focus'
    | 'opened'
    | 'closed'
    | 'hoverAnchor';

  declare export type TooltipProps = {|
    anchorElement?: HTMLElement,
    children?: React$Node,
    className?: string,
    closeButton?: boolean,
    render?: ?() => React$Node,
    pos: _PopupPosition,
    trigger: TooltipTrigger,
    onCloseClick?: MouseEventHandler<HTMLElement>,
    onCloseRequest?: () => void,
    allowedPositions?: $ReadOnlyArray<_PopupPosition>,
    disableAnimations?: boolean,
    useWrapper?: boolean,
  |};

  declare export type TooltipState = {|
    opened: boolean,
  |};

  declare export default class Tooltip extends React$Component<
    TooltipProps,
    TooltipState,
  > {
    static closeDelay: number;

    renderContent: () => React$Node;
    renderCloseButton(): React$Node;
  }
}

declare module '@skbkontur/react-ui/TooltipMenu' {
  declare export type TooltipMenuChildType = React$Element<
    React$ComponentType<_MenuItemProps | {||} | _MenuHeaderProps>,
  >;

  declare export type TooltipMenuProps = {|
    children?: TooltipMenuChildType | $ReadOnlyArray<TooltipMenuChildType>,
    menuMaxHeight?: number | string,
    menuWidth?: number | string,
    caption: $PropertyType<_PopupMenuProps, 'caption'>,
    positions?: $ReadOnlyArray<string>,
    disableAnimations: boolean,
  |};

  declare export default class TooltipMenu extends React$Component<TooltipMenuProps> {}
}

declare module '@skbkontur/react-ui/TopBar' {
  declare class Logout extends React$Component<ButtonItemProps> {}

  declare export type UserProps = {|
    userName: string,
    cabinetUrl?: string,
  |};

  declare class User extends React$Component<UserProps> {}

  declare export type ButtonParams = {|
    disabled?: boolean,
    label: React$Node,
    onClick: () => void,
    onKeyDown: (event: SyntheticKeyboardEvent<HTMLElement>) => void,
    opened: boolean,
  |};

  declare export type TopBarDropdownProps = {|
    icon?: $PropertyType<_IconProps, 'name'>,
    minWidth?: string | number | null,
    use?: 'danger' | 'pay' | 'default',
    label: React$Node,
    onOpen?: () => void,
    onClose?: () => void,
  |};

  declare class TopBarDropdown extends React$Component<TopBarDropdownProps> {}

  declare export type OrganizationsProps = {|
    caption: React$Node,
    comment?: ?string,
  |};

  declare export type OrganizationsState = {|
    captionWhiteSpace: string,
    minWidth: ?number,
  |};

  declare class Organizations extends React$Component<
    OrganizationsProps,
    OrganizationsState,
  > {}

  declare class Divider extends React$Component<{||}> {}

  declare class Icon extends React$Component<_IconProps> {
    static getAllNames(): $ReadOnlyArray<string>;
  }

  declare export type ItemProps = {|
    _onClick?: (event: SyntheticMouseEvent<HTMLDivElement>) => void,
    _onKeyDown?: (event: SyntheticKeyboardEvent<HTMLDivElement>) => void,
    active?: boolean,
    children?: React$Node,
    className?: string,
    icon?: $PropertyType<_IconProps, 'name'>,
    iconOnly?: boolean,
    minWidth?: string | number,
    use?: 'danger' | 'pay' | 'default',
    tabIndex?: number,
  |};

  declare class Item extends React$Component<ItemProps> {}

  declare export type IconName = $PropertyType<_IconProps, 'name'>;

  declare export type ButtonItemProps = {|
    ...$Exact<ItemProps>,
    active?: boolean,
    children?: React$Node,
    className?: string,
    icon?: IconName,
    iconOnly?: boolean,
    minWidth?: string | number,
    onClick?: () => void,
    onKeyDown?: (event: SyntheticKeyboardEvent<HTMLElement>) => void,
    use?: 'danger' | 'pay' | 'default',
  |};

  declare class ButtonItem extends React$Component<ButtonItemProps> {}

  declare export type TopBarProps = {|
    children?: React$Node,
    color?: string,
    cabinetUrl?: string,
    leftItems?: $ReadOnlyArray<React$Node>,
    logoComponent?: React$ComponentType<any> | string,
    logoHref?: string,
    maxWidth?: string | number,
    noMargin?: boolean,
    noShadow?: boolean,
    noWidget?: boolean,
    onLogout?: () => void,
    rightItems?: $ReadOnlyArray<React$Node>,
    suffix?: string,
    userName?: string,
  |};

  declare export type TopBarDefaultProps = {|
    maxWidth: string | number,
    rightItems: $ReadOnlyArray<React$Node>,
  |};

  declare export type TopBarStartProps = {|
    children?: React$Node,
  |};

  declare export type TopBarEndProps = {|
    children?: React$Node,
  |};

  declare export default class TopBar extends React$Component<TopBarProps> {
    static Divider: typeof Divider;
    static Item: typeof ButtonItem;
    static Dropdown: typeof TopBarDropdown;
    static OrganizationsDropdown: typeof Organizations;
    static Start: React$ComponentType<TopBarStartProps>;
    static End: React$ComponentType<TopBarEndProps>;
    static ItemStatic: typeof Item;
    static User: typeof User;
    static Logout: typeof Logout;
  }
}

declare module '@skbkontur/react-ui/ZIndex' {
  declare export type ZIndexProps = {
    delta: number,
    render?: boolean,
    className?: string,
    ...
  };

  declare export default class ZIndex extends React$Component<ZIndexProps> {}
}
