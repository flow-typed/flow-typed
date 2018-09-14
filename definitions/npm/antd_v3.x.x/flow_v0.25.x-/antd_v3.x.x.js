import {Component, Node} from 'react';

declare module 'antd' {

  declare type ModalReference = {
    destroy: () => void
  }

  declare function messageFn<TReturn>(
    content: Node,
    duration?: number,
    onClose?: () => mixed
  ): TReturn

  declare type modalFnArguments = { title?: string, content?: Node, onOk?: () => mixed };

  declare function modalFn(args: modalFnArguments): ModalReference;

  declare export class Alert extends Component<{}> {}
  declare export class Avatar extends Component<{}> {}
  declare export class AutoComplete extends Component<{}> {}
  declare export class Badge extends Component<{}> {}
  declare export class Button extends Component<{}> {}
  declare export class Card extends Component<{}> {}
  declare export class Checkbox extends Component<{}> {}
  declare export class Divider extends Component<{}> {}
  declare export class Col extends Component<{}> {}

  declare export type DatePickerProps = {};
  declare export class DatePicker extends Component<DatePickerProps> {
    static RangePicker: typeof DatePicker$RangePicker;
  }

  declare export class Dropdown extends Component<{}> {}

  declare export class Grid extends Component<{
    className?: string,
    style?: $Shape<CSSStyleDeclaration>,
  }> {}

  declare export class Meta extends Component<{
    avatar?: Node,
    className?: string,
    description?: Node,
    style?: $Shape<CSSStyleDeclaration>,
    title?: Node,
  }> {}

  declare export class Card extends Component<{
    actions?: Array<Node>,
    activeTabKey?: string,
    headStyle?: $Shape<CSSStyleDeclaration>,
    bodyStyle?: $Shape<CSSStyleDeclaration>,
    bordered?: boolean,
    cover?: Node,
    defaultActiveTabKey?: string,
    extra?: string | Node,
    hoverable?: boolean,
    loading?: boolean,
    tabList?: Array<{ key: string, tab: Node }>,
    title?: string | Node,
    type?: 'inner',
    onTabChange?: (key: string) => void,
  }> {
    static Grid: typeof Grid;
    static Meta: typeof Meta;
  }

  declare type CascaderOption = {
    value: string,
    label: string,
    children?: CascaderOption[]
  }

  declare export type CascaderProps = {
    allowClear?: boolean,
    autoFocus?: boolean,
    changeOnSelect?: boolean,
    className?: string,
    disabled?: boolean,
    expandTrigger?: 'click' | 'hover',
    notFoundContent?: string,
    onChange?: (values: string[]) => mixed,
    options: CascaderOption[],
    placeholder?: string,
    popupClassName?: string,
    popupPlacement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight',
    popupVisible?: boolean,
    showSearch?: boolean,
    size?: 'large' | 'default' | 'small',
    value?: string[]
  }

  declare export class Cascader extends Component<CascaderProps> {}

  declare export class Checkbox extends Component<{}> {}

  declare export class Col extends Component<{}> {}

  declare export type CollapsePanelProps = {}

  declare class CollapsePanel extends Component<CollapsePanelProps> {}

  declare export type CollapseProps = {}

  declare export class Collapse extends Component<CollapseProps> {
    static Panel: typeof CollapsePanel
  }

  declare export class DatePicker extends Component<{}> {}

  declare export class Dropdown extends Component<{}> {}

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
    validator?: (rule: mixed, value: mixed, callback: mixed, source?: mixed, options?: mixed) => mixed,
    whitespace?: boolean,
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
  };

  declare type WrappedFormUtils = {
    getFieldDecorator(
      id: string,
      options?: GetFieldDecoratorOptions,
    ): (node: Node) => Node,
    getFieldError(name: string): Object[],
    getFieldsError(names?: Array<string>): Object,
    getFieldsValue(fieldNames?: Array<string>): Object,
    getFieldValue(fieldName: string): mixed,
    isFieldsTouched(names?: Array<string>): boolean,
    isFieldTouched(name: string): boolean,
    isFieldValidating(name: string): boolean,
    resetFields(names?: Array<string>): void,
    setFields(obj: Object): void,
    setFieldsValue(obj: Object): void,
    validateFields(callback: ValidateCallback): mixed,
    validateFields(fieldNames: Array<string>, callback: ValidateCallback): mixed,
    validateFields(fieldNames: Array<string>, options: Object, callback: ValidateCallback): mixed,
    validateFields(options: Object, callback: ValidateCallback): mixed,
    validateFieldsAndScroll(
      fieldNames?: Array<string>,
      options?: Object,
      callback?: ValidateCallback,
    ): void,
    validateFieldsAndScroll(callback?: ValidateCallback): void,
    validateFieldsAndScroll(fieldNames?: Array<string>, callback?: ValidateCallback): void,
    validateFieldsAndScroll(options?: Object, callback?: ValidateCallback): void,
  };

  declare export type FormProps = {
    className?: string;
    form?: WrappedFormUtils;
    hideRequiredMark?: boolean;
    horizontal?: boolean,
    inline?: boolean;
    layout?: 'horizontal' | 'inline' | 'vertical';
    onSubmit?: (e: SyntheticEvent<HTMLFormElement>) => void;
    prefixCls?: string;
    style?: Object;
    vertical?: boolean;
  }

  declare export type FormCreateOption<T> = {
    onFieldsChange?: (props: T, fields: Array<mixed>) => void;
    onValuesChange?: (props: T, values: mixed) => void;
    mapPropsToFields?: (props: T) => void;
    withRef?: boolean;
  }

  declare export class Form extends Component<FormProps> {
    static Item: typeof FormItem;
    static create: <TOwnProps>(options?: FormCreateOption<TOwnProps>) => mixed;
  }

  declare export type FormItemProps = {
    help?: Node,
    extra?: Node,
    validateStatus?: 'success' | 'warning' | 'error' | 'validating' | ''
  }
  declare class FormItem extends Component<FormItemProps> {}

  declare export type RangePickerProps = {};
  declare export class DatePicker$RangePicker extends Component<RangePickerProps> {}

  declare export class Icon extends Component<{}> {}

  declare export class InputNumber extends Component<{}> {}
  declare type InputProps = {
    onBlur?: (event: SyntheticFocusEvent<HTMLInputElement>) => mixed,
    onChange?: (event: SyntheticKeyboardEvent<HTMLInputElement>) => mixed,
  }
  declare export class Input extends Component<InputProps> {
    static Search: typeof InputSearch;
    static TextArea: typeof InputTextArea;
  }

  declare class InputSearch extends Component<{}> {
    input: { input: HTMLInputElement }
  }

  declare class InputTextArea extends Component<{}> {}

  declare export class Layout extends Component<{}> {
    static Content: typeof LayoutContent;
    static Header: typeof LayoutHeader;
    static Sider: typeof LayoutSider;
  }

  declare class LayoutContent extends Component<{}> {}

  declare class LayoutHeader extends Component<{}> {}

  declare class LayoutSider extends Component<{}> {}

  declare export type ListItemProps = {};
  declare export class ListItem extends Component<ListItemProps> {}
  declare export class List extends Component<{}> {
    static Item: typeof ListItem;
  }



  declare export class LocaleProvider extends Component<{}> {}

  declare export type MenuProps = {
    onClick?: ({
                 domEvent: SyntheticMouseEvent<HTMLElement>,
                 item: Component<MenuItem>,
                 key: string,
                 keyPath: string[],
               }) => mixed
  }

  declare export class Menu extends Component<MenuProps> {
    static Item: typeof MenuItem;
    static SubMenu: typeof MenuSubMenu;
  }

  declare class MenuItem extends Component<{}> {}

  declare class MenuSubMenu extends Component<{}> {}

  declare export class message {
    static config({
                    duration?: number,
                    getContainer?: () => HTMLElement,
                    top?: number
                  }): void;
    static success: messageFn<mixed>;
    static error:   messageFn<mixed>;
    static info:    messageFn<mixed>;
    static warning: messageFn<mixed>;
    static warn:    messageFn<mixed>;
    static loading: messageFn<() => void>;
  }

  declare export class Modal extends Component<{}> {
    static info:    typeof modalFn;
    static success: typeof modalFn;
    static error:   typeof modalFn;
    static warning: typeof modalFn;
    static confirm: typeof modalFn;
  }

  declare export class Popconfirm extends Component<{}> {}

  declare export class Radio extends Component<{}> {
    static Group: typeof RadioGroup;
    static Button: typeof RadioButton;
  }

  declare class RadioGroup extends Component<{}> {}

  declare class RadioButton extends Component<{}> {}

  declare export class Row extends Component<{}> {}

  declare export type SelectProps = {
    expandTrigger?: 'click' | 'hover',
    filterOption?: (input: string, option: React$Element<mixed>) => boolean,
    onFocus?: () => mixed,
    popupVisible?: boolean,
    showSearch?: boolean,
  }

  declare export class Select extends Component<SelectProps> {
    static Option: typeof SelectOption;
  }

  declare class SelectOption extends Component<{}> {}

  declare export class Slider extends Component<{}> {}

  declare export type SpinProps = {
    delay?: number,
    size?: 'small' | 'default' | 'large',
    spinning?: boolean,
    tip?: string,
  }

  declare export class Spin extends Component<SpinProps> {}

  declare export class Step extends Component<{
    description?: string | Node,
    icon?: string | Node,
    status?: 'wait' | 'process' | 'finish' | 'error',
    title?: string | Node,
  }> {}

  declare export class Steps extends Component<{
    current?: number,
    direction?: 'horizontal' | 'vertical',
    labelPlacement?: 'horizontal' | 'vertical',
    progressDot?:
      | boolean
      | ((
      iconDot: Node,
      {
        index: number,
        status: 'wait' | 'process' | 'finish' | 'error',
        title: string | Node,
        description: string | Node,
      }
    ) => Node),
    size?: 'default' | 'small',
    status?: 'wait' | 'process' | 'finish' | 'error',
  }> {
    static Step: typeof Step;
  }

  declare export class Switch extends Component<{}> {}

  declare export class Table extends Component<{}> {}

  declare export class Tabs extends Component<{}> {
    static TabPane: typeof TabsTabPane;
  }

  declare export class TabsTabPane extends Component<{}> {}

  declare export class Tag extends Component<{}> {}

  declare export type TooltipProps = {
    title: string
  }

  declare export class Tooltip extends Component<TooltipProps> {}

  declare export class TreeSelect extends Component<{}> {
    static TreeNode: typeof TreeSelectTreeNode
  }

  declare export class TreeSelectTreeNode extends Component<{}> {}
}
