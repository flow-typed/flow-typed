declare function $npm$antd$messageFn<TReturn>(content: React$Node, duration?: number, onClose?: () => mixed): TReturn

declare type $npm$antd$modalReference = {
  destroy: () => void
}

declare function $npm$antd$modalFn({
  title?: string,
  content?: React$Node,
  onOk?: () => mixed
}): $npm$antd$modalReference

declare module 'antd' {

  declare export class Alert extends React$Component<{}> {}

  declare export class Avatar extends React$Component<{}> {}
  declare export class Button extends React$Component<{}> {}

  declare export class Checkbox extends React$Component<{}> {}

  declare export class Col extends React$Component<{}> {}

  declare export class DatePicker extends React$Component<{}> {}

  declare export class Dropdown extends React$Component<{}> {}

  declare export type FormProps = {}
  declare export class Form extends React$Component<FormProps> {
    static Item: typeof Form$Item;
  }

  declare export type FormItemProps = {
    help?: React$Node,
    validateStatus?: 'success' | 'warning' | 'error' | 'validating' | ''
  }
  declare export class Form$Item extends React$Component<FormItemProps> {}

  declare export class Icon extends React$Component<{}> {}

  declare export class Input extends React$Component<{}> {
    static Search: typeof Input$Search;
    static TextArea: typeof Input$TextArea;
  }

  declare export class Input$Search extends React$Component<{}> {
    input: { input: HTMLInputElement }
  }

  declare export class Input$TextArea extends React$Component<{}> {}

  declare export class Layout extends React$Component<{}> {
    static Content: typeof Layout$Content;
    static Header: typeof Layout$Header;
  }

  declare export class Layout$Content extends React$Component<{}> {}

  declare export class Layout$Header extends React$Component<{}> {}

  declare export class LocaleProvider extends React$Component<{}> {}

  declare export class Menu extends React$Component<{}> {
    static Item: typeof Menu$Item;
    static SubMenu: typeof Menu$SubMenu;
  }

  declare export class Menu$Item extends React$Component<{}> {}

  declare export class Menu$SubMenu extends React$Component<{}> {}

  declare export class message {
    static config({
      duration?: number,
      getContainer?: () => HTMLElement,
      top?: number
    }): void;
    static success: $npm$antd$messageFn<mixed>;
    static error:   $npm$antd$messageFn<mixed>;
    static info:    $npm$antd$messageFn<mixed>;
    static warning: $npm$antd$messageFn<mixed>;
    static warn:    $npm$antd$messageFn<mixed>;
    static loading: $npm$antd$messageFn<() => void>;
  }

  declare export class Modal extends React$Component<{}> {
    static info:    typeof $npm$antd$modalFn;
    static success: typeof $npm$antd$modalFn;
    static error:   typeof $npm$antd$modalFn;
    static warning: typeof $npm$antd$modalFn;
    static confirm: typeof $npm$antd$modalFn;
  }

  declare export class Popconfirm extends React$Component<{}> {}

  declare export class Radio extends React$Component<{}> {
    static Group: typeof Radio$Group;
  }

  declare export class Radio$Group extends React$Component<{}> {}

  declare export class Row extends React$Component<{}> {}

  declare export class Select extends React$Component<{}> {
    static Option: typeof Select$Option;
  }

  declare class Select$Option extends React$Component<{}> {}

  declare export class Slider extends React$Component<{}> {}

  declare export class Spin extends React$Component<{}> {}

  declare export class Table extends React$Component<{}> {}

  declare export class Tabs extends React$Component<{}> {
    static TabPane: typeof Tabs$TabPane;
  }

  declare export class Tabs$TabPane extends React$Component<{}> {}

  declare export class Tag extends React$Component<{}> {}

  declare export class Tooltip extends React$Component<{}> {}

  declare export class TreeSelect extends React$Component<{}> {
    static TreeNode: typeof TreeSelect$TreeNode
  }

  declare export class TreeSelect$TreeNode extends React$Component<{}> {}
}
