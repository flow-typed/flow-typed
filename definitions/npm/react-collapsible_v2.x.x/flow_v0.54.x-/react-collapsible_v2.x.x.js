declare module "react-collapsible" {
  declare type Props = {
    transitionTime?: number,
    transitionCloseTime?: number,
    triggerTagName?: string,
    easing?: string,
    open?: boolean,
    classParentString?: string,
    openedClassName?: string,
    triggerStyle?: object,
    triggerClassName?: string,
    triggerOpenedClassName?: string,
    contentOuterClassName?: string,
    contentInnerClassName?: string,
    accordionPosition?: string | number,
    handleTriggerClick?: (accordionPosition?: string | number) => void,
    onOpen?: () => void,
    onClose?: () => void,
    onOpening?: () => void,
    onClosing?: () => void,
    trigger?: string | React$Node,
    triggerWhenOpen?: string | React$Node,
    triggerDisabled?: boolean,
    lazyRender?: boolean,
    overflowWhenOpen?:
      | "hidden"
      | "visible"
      | "auto"
      | "scroll"
      | "inherit"
      | "initial"
      | "unset",
    triggerSibling?: React$Node | string | (() => void),
    tabIndex?: number
  };

  declare class Collapsible extends React$Component<Props> {}
  declare module.exports: typeof Collapsible;
}
