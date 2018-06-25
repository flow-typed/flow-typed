declare module "react-collapsible" {
  declare type Props = {
    trigger: string | React$Node,
    triggerWhenOpen?: string | React$Node,
    triggerDisabled?: false,
    transitionTime?: number,
    easing?: string,
    open?: boolean,
    accordionPosition?: string,
    handleTriggerClick?: (accordionPosition?: string | number) => void,
    onOpen?: () => void,
    onClose?: () => void,
    onOpening?: () => void,
    onClosing?: () => void,
    lazyRender?: boolean,
    overflowWhenOpen?:
      | "hidden"
      | "visible"
      | "auto"
      | "scroll"
      | "inherit"
      | "initial"
      | "unset",
    triggerSibling?: React$Node,
    classParentString?: string,
    className?: string,
    openedClassName?: string,
    triggerClassName?: string,
    triggerOpenedClassName?: string,
    contentOuterClassName?: string,
    contentInnerClassName?: string
  };

  declare class Collapsible extends React$Component<Props> {}
  declare module.exports: typeof Collapsible;
}
