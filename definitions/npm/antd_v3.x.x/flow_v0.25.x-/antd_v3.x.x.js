declare module "antd" {
  import type { Node, Component } from "react";

  declare type ModalReference = {
    destroy: () => void
  };

  declare type messageFn<TReturn> = (
    content: React$Node,
    duration?: number,
    onClose?: () => mixed
  ) => TReturn;

  declare type modalFnArguments = {
    title?: string,
    content?: React$Node,
    onOk?: () => mixed
  };

  declare function modalFn(args: modalFnArguments): ModalReference;

  declare export class Alert extends React$Component<{}> {}

  declare export class Avatar extends React$Component<{}> {}

  declare export class AutoComplete extends React$Component<{}> {}

  declare export class Badge extends React$Component<{}> {}

  declare export class Button extends React$Component<{}> {}

  declare export class Card extends React$Component<{}> {}

  declare export class Checkbox extends React$Component<{}> {}

  declare export class Divider extends React$Component<{}> {}

  declare export class Col extends React$Component<{}> {}

  declare export type DatePickerProps = {};

  declare export class DatePicker extends React$Component<DatePickerProps> {
    static RangePicker: typeof DatePicker$RangePicker;
  }

  declare export class Dropdown extends React$Component<{}> {}

  declare export class Grid extends React$Component<{
    className?: string,
    style?: $Shape<CSSStyleDeclaration>
  }> {}

  declare export class Meta extends React$Component<{
    avatar?: React$Node,
    className?: string,
    description?: React$Node,
    style?: $Shape<CSSStyleDeclaration>,
    title?: React$Node
  }> {}

  declare export class Card extends React$Component<{
    actions?: Array<Node>,
    activeTabKey?: string,
    headStyle?: $Shape<CSSStyleDeclaration>,
    bodyStyle?: $Shape<CSSStyleDeclaration>,
    bordered?: boolean,
    cover?: React$Node,
    defaultActiveTabKey?: string,
    extra?: string | React$Node,
    hoverable?: boolean,
    loading?: boolean,
    tabList?: Array<{ key: string, tab: React$Node }>,
    title?: string | React$Node,
    type?: "inner",
    onTabChange?: (key: string) => void
  }> {
    static Grid: typeof Grid;
    static Meta: typeof Meta;
  }

  declare type CascaderOption = {
    value: string,
    label: string,
    children?: CascaderOption[]
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
    value?: string[]
  };

  declare export class Cascader extends React$Component<CascaderProps> {}

  declare export class Col extends React$Component<{}> {}

  declare export type CollapsePanelProps = {};

  declare class CollapsePanel extends React$Component<CollapsePanelProps> {}

  declare export type CollapseProps = {};

  declare export class Collapse extends React$Component<CollapseProps> {
    static Panel: typeof CollapsePanel;
  }

  declare export class DatePicker extends React$Component<{}> {}

  declare export class Dropdown extends React$Component<{}> {}

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
    whitespace?: boolean
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
    valuePropName?: string
  };

  declare type WrappedFormUtils = {
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
    validateFieldsAndScroll(options?: Object, callback?: ValidateCallback): void
  };

  declare export type FormProps = {
    className?: string,
    form?: WrappedFormUtils,
    hideRequiredMark?: boolean,
    horizontal?: boolean,
    inline?: boolean,
    layout?: "horizontal" | "inline" | "vertical",
    onSubmit?: (e: SyntheticEvent<HTMLFormElement>) => void,
    prefixCls?: string,
    style?: Object,
    vertical?: boolean
  };

  declare export type FormCreateOption<T> = {
    onFieldsChange?: (props: T, fields: Array<mixed>) => void,
    onValuesChange?: (props: T, values: mixed) => void,
    mapPropsToFields?: (props: T) => void,
    withRef?: boolean
  };

  declare export class Form extends React$Component<FormProps> {
    static Item: typeof FormItem;
    static create: <TOwnProps>(options?: FormCreateOption<TOwnProps>) => mixed;
  }

  declare export type FormItemProps = {
    help?: React$Node,
    extra?: React$Node,
    validateStatus?: "success" | "warning" | "error" | "validating" | ""
  };

  declare class FormItem extends React$Component<FormItemProps> {}

  declare export type RangePickerProps = {};

  declare export class DatePicker$RangePicker extends React$Component<
    RangePickerProps
  > {}

  declare export class Icon extends React$Component<{}> {}

  declare export class InputNumber extends React$Component<{}> {}

  declare type InputProps = {
    onBlur?: (event: SyntheticFocusEvent<HTMLInputElement>) => mixed,
    onChange?: (event: SyntheticKeyboardEvent<HTMLInputElement>) => mixed
  };

  declare export class Input extends React$Component<InputProps> {
    static Search: typeof InputSearch;
    static TextArea: typeof InputTextArea;
  }

  declare class InputSearch extends React$Component<{}> {
    input: { input: HTMLInputElement };
  }

  declare class InputTextArea extends React$Component<{}> {}

  declare export class Layout extends React$Component<{}> {
    static Content: typeof LayoutContent;
    static Header: typeof LayoutHeader;
    static Sider: typeof LayoutSider;
  }

  declare class LayoutContent extends React$Component<{}> {}

  declare class LayoutHeader extends React$Component<{}> {}

  declare class LayoutSider extends React$Component<{}> {}

  declare export type ListItemProps = {};

  declare export class ListItem extends React$Component<ListItemProps> {
    static Meta: typeof Meta;
  }

  declare export class List extends React$Component<{}> {
    static Item: typeof ListItem;
  }

  declare export class LocaleProvider extends React$Component<{}> {}

  declare export type MenuProps = {
    onClick?: ({
      domEvent: SyntheticMouseEvent<HTMLElement>,
      item: React$Component<MenuItem>,
      key: string,
      keyPath: string[]
    }) => mixed
  };

  declare export class Menu extends React$Component<MenuProps> {
    static Item: typeof MenuItem;
    static SubMenu: typeof MenuSubMenu;
  }

  declare class MenuItem extends React$Component<{}> {}

  declare class MenuSubMenu extends React$Component<{}> {}

  declare export class message {
    static config({
      duration?: number,
      getContainer?: () => HTMLElement,
      top?: number
    }): void;
    static success: messageFn<mixed>;
    static error: messageFn<mixed>;
    static info: messageFn<mixed>;
    static warning: messageFn<mixed>;
    static warn: messageFn<mixed>;
    static loading: messageFn<() => void>;
  }

  declare export class Modal extends React$Component<{}> {
    static info: typeof modalFn;
    static success: typeof modalFn;
    static error: typeof modalFn;
    static warning: typeof modalFn;
    static confirm: typeof modalFn;
  }

  declare export class Popconfirm extends React$Component<{}> {}

  declare export class Radio extends React$Component<{}> {
    static Group: typeof RadioGroup;
    static Button: typeof RadioButton;
  }

  declare class RadioGroup extends React$Component<{}> {}

  declare class RadioButton extends React$Component<{}> {}

  declare export class Row extends React$Component<{}> {}

  declare export type SelectProps = {
    expandTrigger?: "click" | "hover",
    filterOption?: (input: string, option: React$Element<mixed>) => boolean,
    onFocus?: () => mixed,
    popupVisible?: boolean,
    showSearch?: boolean
  };

  declare export class Select extends React$Component<SelectProps> {
    static Option: typeof SelectOption;
  }

  declare class SelectOption extends React$Component<{}> {}

  declare export class Slider extends React$Component<{}> {}

  declare export type SpinProps = {
    delay?: number,
    size?: "small" | "default" | "large",
    spinning?: boolean,
    tip?: string
  };

  declare export class Spin extends React$Component<SpinProps> {}

  declare export class Step extends React$Component<{
    description?: string | React$Node,
    icon?: string | React$Node,
    status?: "wait" | "process" | "finish" | "error",
    title?: string | React$Node
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
            title: string | React$Node,
            description: string | React$Node
          }
        ) => React$Node),
    size?: "default" | "small",
    status?: "wait" | "process" | "finish" | "error"
  }> {
    static Step: typeof Step;
  }

  declare export class Switch extends React$Component<{}> {}

  declare export class Table extends React$Component<{}> {}

  declare export class Tabs extends React$Component<{}> {
    static TabPane: typeof TabsTabPane;
  }

  declare export class TabsTabPane extends React$Component<{}> {}

  declare export class Tag extends React$Component<{}> {}

  declare export type TooltipProps = {
    title: string
  };

  declare export class Tooltip extends React$Component<TooltipProps> {}

  declare export class TreeSelect extends React$Component<{}> {
    static TreeNode: typeof TreeSelectTreeNode;
  }

  declare export class TreeSelectTreeNode extends React$Component<{}> {}
}
