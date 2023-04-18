declare module "antd" {
  import type { Node, Component } from "react";

  declare type ModalReference = { destroy: () => void, ... };

  declare type messageFn<TReturn> = (
    content: React$Node,
    duration?: number,
    onClose?: () => mixed
  ) => TReturn;

  declare type modalFnArguments = {
    title?: string,
    content?: React$Node,
    onOk?: () => mixed,
    ...
  };

  declare function modalFn(args: modalFnArguments): ModalReference;

  declare export class Alert extends React$Component<{...}> {}

  declare export class Avatar extends React$Component<{...}> {}

  declare export type AutoCompleteDataItem =
    | string
    | {
    value: string,
    text: string,
    ...
  }
    | React$Element<typeof SelectOption>
    | React$Element<typeof SelectOptGroup>;

  declare export type AutoCompleteProps<T = SelectValue> = {
    allowClear?: boolean,
    autoFocus?: boolean,
    backfill?: boolean,
    dataSource?: AutoCompleteDataItem[],
    defaultActiveFirstOption?: boolean,
    defaultValue?: T,
    disabled?: boolean,
    filterOption?: boolean | (input: string, option: React$Node) => boolean,
    open?: boolean,
    optionLabelProp?: string,
    placeholder?: string,
    value?: T,
    onBlur?: () => void,
    onChange?: (value: T) => void,
    onDropdownVisibleChange?: (open: boolean) => void,
    onFocus?: () => void,
    onSearch?: (value: string) => void,
    onSelect?: (value: T, option: React$Node) => void,
    ...
  }

  declare export class AutoComplete<T = SelectValue> extends React$Component<AutoCompleteProps<T>> {
    static Option: typeof SelectOption;
    static OptGroup: typeof SelectOptGroup;
  }

  declare export class Badge extends React$Component<{...}> {}

  declare export type ButtonProps = {
    disabled?: boolean,
    ghost?: boolean,
    href?: string,
    htmlType?: string,
    icon?: string,
    loading?: boolean | { delay: number, ... },
    shape?: 'circle' | 'round',
    size?: 'small' | 'large',
    target?: string,
    type?: 'primary' | 'ghost' | 'dashed' | 'danger' | 'link' | 'default',
    onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void,
    block?: boolean,
    ...
  }

  declare export class Button extends React$Component<ButtonProps> {
    static Group: typeof ButtonGroup
  }

  declare class ButtonGroup extends React$Component<{...}> {}

  declare export class Card extends React$Component<{...}> {}

  declare export class Checkbox extends React$Component<{...}> {
    static Group: typeof CheckboxGroup;
  }

  declare class CheckboxGroup extends React$Component<{...}> {}

  declare export class Divider extends React$Component<{...}> {}

  declare export class Col extends React$Component<{...}> {}

  declare export type DatePickerProps = {...};

  declare export class DatePicker extends React$Component<DatePickerProps> {
    static RangePicker: typeof DatePicker$RangePicker;
  }

  declare export class Dropdown extends React$Component<{...}> {}

  declare export class Grid extends React$Component<{
    className?: string,
    style?: $Shape<CSSStyleDeclaration>,
    ...
  }> {}

  declare export class Meta extends React$Component<{
    avatar?: React$Node,
    className?: string,
    description?: React$Node,
    style?: $Shape<CSSStyleDeclaration>,
    title?: React$Node,
    ...
  }> {}

  declare export class Card extends React$Component<{
    actions?: Array<Node>,
    activeTabKey?: string,
    headStyle?: $Shape<CSSStyleDeclaration>,
    bodyStyle?: $Shape<CSSStyleDeclaration>,
    bordered?: boolean,
    cover?: React$Node,
    defaultActiveTabKey?: string,
    extra?: React$Node,
    hoverable?: boolean,
    loading?: boolean,
    tabList?: Array<{
      key: string,
      tab: React$Node,
      ...
    }>,
    title?: React$Node,
    type?: "inner",
    onTabChange?: (key: string) => void,
    ...
  }> {
    static Grid: typeof Grid;
    static Meta: typeof Meta;
  }

  declare type CascaderOption = {
    value: string,
    label: string,
    children?: CascaderOption[],
    ...
  };

  declare export type CascaderProps = {
    allowClear?: boolean,
    autoFocus?: boolean,
    changeOnSelect?: boolean,
    className?: string,
    disabled?: boolean,
    expandTrigger?: "click" | "hover",
    notFoundContent?: string,
    onChange?: (values: string[]) => mixed,
    options: CascaderOption[],
    placeholder?: string,
    popupClassName?: string,
    popupPlacement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight",
    popupVisible?: boolean,
    showSearch?: boolean,
    size?: "large" | "default" | "small",
    value?: string[],
    ...
  };

  declare export class Cascader extends React$Component<CascaderProps> {}

  declare export class Col extends React$Component<{...}> {}

  declare export type CollapsePanelProps = {...};

  declare class CollapsePanel extends React$Component<CollapsePanelProps> {}

  declare export type CollapseProps = {...};

  declare export class Collapse extends React$Component<CollapseProps> {
    static Panel: typeof CollapsePanel;
  }

  declare export class Dropdown extends React$Component<{...}> {}

  declare export class Drawer extends React$Component<{...}> {}

  declare type ValidationRule = {
    enum?: string | string[],
    len?: number,
    max?: number,
    message?: string,
    min?: number,
    pattern?: RegExp,
    required?: boolean,
    transform?: (value: mixed) => mixed,
    type?: string,
    validator?: (
      rule: mixed,
      value: mixed,
      callback: mixed,
      source?: mixed,
      options?: mixed
    ) => mixed,
    whitespace?: boolean,
    ...
  };
  declare type ValidateCallback = (erros: mixed, values: mixed) => void;
  declare type GetFieldDecoratorOptions = {
    exclusive?: boolean,
    getValueFromEvent?: (...args: mixed[]) => mixed,
    initialValue?: mixed,
    normalize?: (value: mixed, prevValue: mixed, allValues: mixed) => mixed,
    rules?: ValidationRule[],
    trigger?: string,
    validateFirst?: boolean,
    validateTrigger?: string | string[],
    valuePropName?: string,
    ...
  };

  declare export type WrappedFormUtils = {
    getFieldDecorator(
      id: string,
      options?: GetFieldDecoratorOptions
    ): (node: React$Node) => React$Node,
    getFieldError(name: string): mixed[],
    getFieldsError(names?: Array<string>): mixed,
    getFieldsValue(fieldNames?: Array<string>): mixed,
    getFieldValue(fieldName: string): mixed,
    isFieldsTouched(names?: Array<string>): boolean,
    isFieldTouched(name: string): boolean,
    isFieldValidating(name: string): boolean,
    resetFields(names?: Array<string>): void,
    setFields(obj: Object): void,
    setFieldsValue(obj: Object): void,
    validateFields(callback: ValidateCallback): mixed,
    validateFields(
      fieldNames: Array<string>,
      callback: ValidateCallback
    ): mixed,
    validateFields(
      fieldNames: Array<string>,
      options: Object,
      callback: ValidateCallback
    ): mixed,
    validateFields(options: Object, callback: ValidateCallback): mixed,
    validateFieldsAndScroll(
      fieldNames?: Array<string>,
      options?: Object,
      callback?: ValidateCallback
    ): void,
    validateFieldsAndScroll(callback?: ValidateCallback): void,
    validateFieldsAndScroll(
      fieldNames?: Array<string>,
      callback?: ValidateCallback
    ): void,
    validateFieldsAndScroll(options?: Object, callback?: ValidateCallback): void,
    ...
  };

  declare interface RcBaseFormProps {
    wrappedComponentRef?: any;
  }

  declare interface FormComponentProps extends RcBaseFormProps {
    form: WrappedFormUtils;
  }

  declare type FormWrappedProps<T> = <C: React$ComponentType<T>>
  (component: C) => React$ComponentType<$Diff<T, { form: *, ... }>>;

  declare export type FormProps = {
    className?: string,
    form?: WrappedFormUtils,
    hideRequiredMark?: boolean,
    horizontal?: boolean,
    inline?: boolean,
    layout?: "horizontal" | "inline" | "vertical",
    onSubmit?: (e: SyntheticEvent<HTMLFormElement>) => void,
    prefixCls?: string,
    style?: $Shape<CSSStyleDeclaration>,
    vertical?: boolean,
    ...
  };

  declare export type FormCreateOption<T> = {
    onFieldsChange?: (props: T, fields: Array<mixed>) => void,
    onValuesChange?: (props: T, values: mixed) => void,
    mapPropsToFields?: (props: T) => void,
    withRef?: boolean,
    ...
  };

  declare export class Form extends React$Component<FormProps> {
    static Item: typeof FormItem;
    static create: <TOwnProps: FormComponentProps>(
      options?: FormCreateOption<TOwnProps>
    ) => FormWrappedProps<TOwnProps>;
  }

  declare export type FormItemProps = {
    help?: React$Node,
    extra?: React$Node,
    validateStatus?: "success" | "warning" | "error" | "validating" | "",
    ...
  };

  declare class FormItem extends React$Component<FormItemProps> {}

  declare export type RangePickerProps = {...};

  declare export class DatePicker$RangePicker extends React$Component<
    RangePickerProps
  > {}

  declare export class Icon extends React$Component<{...}> {}

  declare export class InputNumber extends React$Component<{...}> {}

  declare type InputProps = {
    onBlur?: (event: SyntheticFocusEvent<HTMLInputElement>) => mixed,
    onChange?: (event: SyntheticKeyboardEvent<HTMLInputElement>) => mixed,
    ...
  };

  declare export class Input extends React$Component<InputProps> {
    static Search: typeof InputSearch;
    static TextArea: typeof InputTextArea;
    static Password: typeof InputPassword;
  }

  declare class InputSearch extends React$Component<{...}> {
    input: { input: HTMLInputElement, ... };
  }

  declare class InputTextArea extends React$Component<{...}> {}

  declare type InputPasswordProps = { visibilityToggle?: boolean, ... };

  // Added in 3.12.0
  declare class InputPassword extends React$Component<InputPasswordProps> {}

  declare export class Layout extends React$Component<{...}> {
    static Content: typeof LayoutContent;
    static Footer: typeof LayoutFooter;
    static Header: typeof LayoutHeader;
    static Sider: typeof LayoutSider;
  }

  declare class LayoutContent extends React$Component<{...}> {}

  declare class LayoutFooter extends React$Component<{...}> {}

  declare class LayoutHeader extends React$Component<{...}> {}

  declare class LayoutSider extends React$Component<{...}> {}

  declare export type ListItemProps = {...};

  declare export class ListItem extends React$Component<ListItemProps> {
    static Meta: typeof Meta;
  }

  declare export class List extends React$Component<{...}> {
    static Item: typeof ListItem;
  }

  declare export class LocaleProvider extends React$Component<{...}> {}

  declare export type MenuProps = { onClick?: ({
    domEvent: SyntheticMouseEvent<HTMLElement>,
    item: React$Component<MenuItem>,
    key: string,
    keyPath: string[],
    ...
  }) => mixed, ... };

  declare export class Menu extends React$Component<MenuProps> {
    static Item: typeof MenuItem;
    static SubMenu: typeof MenuSubMenu;
  }

  declare class MenuItem extends React$Component<{...}> {}

  declare class MenuSubMenu extends React$Component<{...}> {}

  declare export class message {
    static config({
      duration?: number,
      getContainer?: () => HTMLElement,
      top?: number,
      ...
    }): void;
    static destroy: () => void;
    static success: messageFn<mixed>;
    static error: messageFn<mixed>;
    static info: messageFn<mixed>;
    static warning: messageFn<mixed>;
    static warn: messageFn<mixed>;
    static loading: messageFn<() => void>;
  }

  declare export class Modal extends React$Component<{...}> {
    static info: typeof modalFn;
    static success: typeof modalFn;
    static error: typeof modalFn;
    static warning: typeof modalFn;
    static confirm: typeof modalFn;
  }

  declare export type PaginationProps = {
    current?: number,
    defaultCurrent?: number,
    defaultPageSize?: number,
    hideOnSinglePage?: boolean,
    itemRender?: (
      page: number,
      type: "page" | "prev" | "next",
      originalElement: React$Node
    ) => React$Node,
    pageSize?: number,
    pageSizeOptions?: string[],
    showQuickJumper?: boolean,
    showSizeChanger?: boolean,
    showTotal?: (total: number, range: number[]) => React$Node,
    simple?: boolean,
    size?: string,
    total?: number,
    onChange?: (page: number, pageSize: number) => void,
    onShowSizeChange?: (current: number, size: number) => void,
    ...
  };

  declare export class Pagination extends React$Component<PaginationProps> {}

  // These props are shared by Tooltip, Popconfirm, and Poopover
  declare type TooltipSharedProps = {
    arrowPointAtCenter?: boolean,
    autoAdjustOverflow?: boolean,
    defaultVisible?: boolean,
    getPopupContainer?: (element?: HTMLElement) => HTMLElement,
    mouseEnterDelay?: number,
    mouseLeaveDelay?: number,
    overlayClassName?: string,
    overlayStyle?: $Shape<CSSStyleDeclaration>,
    placement?: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom',
    trigger?: 'hover' | 'focus' | 'click' | 'contextMenu',
    visible?: boolean,
    onVisibleChange?: (visible: boolean) => void,
    align?: AlignConfig,
    ...
  }

  // for alignConfig value, antd documentation points to rc-tooltip docs,
  // which poits to https://github.com/yiminghe/dom-align
  declare type AlignConfig = {|
    points?: string,
    offset?: number | string,
    targetOffset?: number | string,
    overflow?: {| adjustX?: boolean, adjustY?: boolean |},
    useCssRight?: boolean,
    useCssBottom?: boolean,
    useCssTransform:? boolean
  |}

  declare export type PopconfirmProps = {
    cancelText?: string,
    okText?: string,
    okType?: 'primary' | 'dashed' | 'ghost' | 'danger' | 'default',
    title?: 'string' | React$Node,
    onCancel?: (event: SyntheticEvent<>) => void,
    onConfirm?: (event: SyntheticEvent<>) => void,
    icon?: React$Node,
    ...
  } & TooltipSharedProps

  declare export class Popconfirm extends React$Component<PopconfirmProps> {}

  declare export type PopoverProps = {
    content?: 'string' | React$Node,
    title?: 'string' | React$Node,
    ...
  } & TooltipSharedProps

  declare export class Popover extends React$Component<PopoverProps> {}

  declare export class Progress extends React$Component<{...}> {}

  declare export class Radio extends React$Component<{...}> {
    static Group: typeof RadioGroup;
    static Button: typeof RadioButton;
  }

  declare class RadioGroup extends React$Component<{...}> {}

  declare class RadioButton extends React$Component<{...}> {}

  declare export class Row extends React$Component<{...}> {}

  declare export type SelectValue = string | string[] | number | number[];

  declare export type SelectProps<T = SelectValue> = {
    allowClear?: boolean,
    autoClearSearchValue?: boolean,
    autoFocus?: boolean,
    defaultActiveFirstOption?: boolean,
    defaultOpen?: boolean,
    defaultValue?: T,
    disabled?: boolean,
    dropdownClassName?: string,
    dropdownMatchSelectWidth?: boolean,
    filterOption?: boolean | (input: string, option: React$Node) => boolean,
    firstActiveValue?: string | string[],
    labelInValue?: boolean,
    loading?: boolean,
    maxTagCount?: number,
    mode?: 'default' | 'multiple' | 'tags',
    notFoundContent?: string,
    open?: boolean,
    optionFilterProp?: string,
    optionLabelProp?: string,
    placeholder?: string | React$Node,
    showArrow?: boolean,
    showSearch?: boolean,
    size?: 'default' | 'small' | 'large' | string,
    suffixIcon?: React$Node,
    removeIcon?: React$Node,
    clearIcon?: React$Node,
    menuItemSelectedIcon?: React$Node,
    tokenSeparators?: string[],
    value?: T,
    onBlur?: () => void,
    onChange?: (value: T, option: React$Node) => void,
    onDeselect?: (value: T, option: React$Node) => void,
    onDropdownVisibleChange?: (open: boolean) => void,
    onFocus?: () => void,
    onSearch?: (value: string) => void,
    onSelect?: (value: T, option: React$Node) => void,
    ...
  };

  declare export class Select<T = SelectValue> extends React$Component<SelectProps<T>> {
    static Option: typeof SelectOption;
    static OptGroup: typeof SelectOptGroup;
    blur: () => void;
    focus: () => void;
  }

  declare export type SelectOptionProps = {
    className?: string,
    disabled?: boolean,
    key?: string,
    title?: string,
    value?: string | number,
    ...
  };

  declare class SelectOption extends React$Component<SelectOptionProps> {}

  declare export type SelectOptGroupProps = {
    key?: string,
    label?: string | React$Node,
    ...
  };

  declare class SelectOptGroup extends React$Component<SelectOptGroupProps> {}

  declare export class Slider extends React$Component<{...}> {}

  declare export type SpinProps = {
    delay?: number,
    size?: "small" | "default" | "large",
    spinning?: boolean,
    tip?: string,
    ...
  };

  declare export class Spin extends React$Component<SpinProps> {}

  declare export class Step extends React$Component<{
    description?: React$Node,
    icon?: React$Node,
    status?: "wait" | "process" | "finish" | "error",
    title?: React$Node,
    ...
  }> {}

  declare export class Steps extends React$Component<{
    current?: number,
    direction?: "horizontal" | "vertical",
    labelPlacement?: "horizontal" | "vertical",
    progressDot?:
      | boolean
      | ((
          iconDot: React$Node,
          {
            index: number,
            status: "wait" | "process" | "finish" | "error",
            title: React$Node,
            description: React$Node,
            ...
          }
        ) => React$Node),
    size?: "default" | "small",
    status?: "wait" | "process" | "finish" | "error",
    ...
  }> {
    static Step: typeof Step;
  }

  declare export class Switch extends React$Component<{...}> {}

  declare export class Table extends React$Component<{...}> {}

  declare export class Tabs extends React$Component<{...}> {
    static TabPane: typeof TabsTabPane;
  }

  declare export class TabsTabPane extends React$Component<{...}> {}

  declare export class Tag extends React$Component<{...}> {}

  declare export type TooltipProps = { title: React$Node | () => React$Node, ... } & TooltipSharedProps

  declare export class Tooltip extends React$Component<TooltipProps> {}

  declare export class TreeSelect extends React$Component<{...}> {
    static TreeNode: typeof TreeSelectTreeNode;
  }

  declare export class TreeSelectTreeNode extends React$Component<{...}> {}

  declare export class Upload extends React$Component<{...}> {
    static Dragger: typeof UploadDragger;
  }

  declare export class UploadDragger extends React$Component<{...}> {}


  declare export type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

  declare export type NotificationConfigProps = {
    top?: number,
    bottom?: number,
    duration?: number,
    placement?: NotificationPlacement,
    getContainer?: () => HTMLElement,
    ...
  }

  declare export type NotificationProps = {
    message: React$Node,
    description?: React$Node,
    btn?: React$Node,
    key?: string,
    onClose?: () => void,
    duration?: number | null,
    icon?: React$Node,
    placement?: NotificationPlacement,
    style?: $Shape<CSSStyleDeclaration>,
    prefixCls?: string,
    className?: string,
    +type?: 'success' | 'info' | 'error' | 'warning',
    onClick?: () => void,
    top?: number,
    bottom?: number,
    getContainer?: () => HTMLElement,
    ...
  }

  declare export class notification {
    static success: NotificationProps => void;
    static error:  NotificationProps => void;
    static info:  NotificationProps => void;
    static warn:  NotificationProps => void;
    static warning: NotificationProps => void;
    static open: NotificationProps => void;
    static close: string => void;
    static config: NotificationConfigProps => void;
    static destroy: () => void;
  }
}
