declare module "react-bootstrap" {
  import type { Node, Element, Component, ComponentType, Ref } from 'react';
  declare type BsSize = 'lg' | 'large' | 'sm' | 'small';
  declare type BsStyle = 'lg' | 'large' | 'sm' | 'small' | 'xs' | 'xsmall';
  declare type ElementType = string | ComponentType<*>;
  declare type TriggerType = 'click' | 'hover' | 'focus';
  declare export class Alert extends React$Component<{
    onDismiss?: Function,
    closeLabel?: string,
    bsStyle?: 'success' | 'warning' | 'danger' | 'info',
    bsClass?: string
  }> {}

  declare export class Badge extends React$Component<{
    pullRight?: boolean,
    bsClass?: string
  }> {}

  declare class BreadcrumbItem extends React$Component<{
    active?: boolean,
    href: string,
    title: Node,
    target: string
  }> {}

  declare export class Breadcrumb extends React$Component<{}> {
    static Item: Class<BreadcrumbItem>;
  }

  declare export class Button extends React$Component<{
    active?: boolean,
    disabled?: boolean,
    block?: boolean,
    onClick?: Function,
    componentClass?: ElementType,
    href?: string,
    type?: 'button' | 'reset' | 'submit',
    bsStyle?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'link',
    bsSize?: BsStyle,
    bsClass?: string,
  }> {}

  declare export class ButtonGroup extends React$Component<{
    vertical?: boolean,
    justified?: boolean,
    block?: boolean,
    bsClass?: string
  }> {}

  declare export class ButtonToolbar extends React$Component<{
    bsClass?: string
  }> {}

  declare export class ButtonToolbar extends React$Component<{
    name?: string,
    value?: any,
    onChange?: Function,
    type: 'checkbox' | 'radio'
  }> {}

  declare export class ToggleButton extends React$Component<{
    type?: string,
    name?: string,
    checker?: boolean,
    disabled?: boolean,
    onChange?: Function,
    value: any
  }> {}

  declare class CarouselItem extends React$Component<{
    componentClass?: ElementType,
    bsClass?: string
  }> {}

  declare class CarouselCaption extends React$Component<{
    direction?: 'prev' | 'next',
    onAnimateOutEnd?: Function,
    active?: boolean,
    animateIn?: boolean,
    animateOut?: boolean,
    index: number
  }> {}

  declare export class Carousel extends React$Component<{
    slide?: boolean,
    indicators?: boolean,
    interval?: number,
    controls?: boolean,
    pauseOnHover?: boolean,
    wrap?: boolean,
    onSelect?: Function,
    onSelect?: Function,
    onSlideEnd?: Function,
    activeIndex?: number,
    defaultActiveIndex?: number,
    direction?: 'prev' | 'next',
    prevIcon?: Node,
    prevLabel?: string,
    nextIcon?: Node,
    nextLabel?: string,
    bsClass?: string
  }> {
    static Item: Class<CarouselItem>;
    static Caption: Class<CarouselCaption>;
  }

  declare export class DropdownButton extends React$Component<{
    bsStyle?: string,
    bsSize?: string,
    title: Node,
    noCaret?: boolean
  }> {}

  declare export class SplitButton extends React$Component<{
    bsStyle?: string,
    bsSize?: string,
    href?: string,
    onClick?: Function,
    title: Node,
    toggleLabel?: string
  }> {}

  declare class DropdownMenu extends React$Component<{}> {}
  declare class DropdownToggle extends React$Component<{}> {}

  declare export class Dropdown extends React$Component<{
    dropup?: boolean,
    id: string | number,
    componentClass?: ElementType,
    disabled?: boolean,
    pullRight?: boolean,
    pullRight?: boolean,
    open?: boolean,
    defaultOpen?: boolean,
    onToggle?: Function,
    onSelect?: Function,
    role?: string,
    rootCloseEvent?: 'click' | 'mousedown',
    onMouseEnter?: Function,
    onMouseLeave?: Function
  }> {
    static Menu: Class<DropdownMenu>;
    static Toggle: Class<DropdownToggle>;
  }

  declare export class MenuItem extends React$Component<{
    active?: boolean,
    disabled?: boolean,
    divider?: any, //TODO: figure out proper type
    eventKey?: any,
    header?: boolean,
    href?: string,
    onClick?: Function,
    onSelect?: Function,
    bsClass?: string
  }> {}

  declare export class FormGroup extends React$Component<{
    controlId?: string,
    validationState?: 'success' | 'warning' | 'error' | null,
    bsSize?: BsSize,
    bsClass?: string
  }> {}

  declare class FormControlStatic extends React$Component<{
    componentClass?: ElementType,
    bsClass?: string
  }> {}

  declare class FormControlFeedback extends React$Component<{
    bsClass?: string
  }> {}

  declare export class FormControl extends React$Component<{
    componentClass?: ElementType,
    type?: string,
    id?: string,
    inputRef?: Ref<'input'>,
    bsSize?: BsSize,
    bsClass?: string,
  }> {
    static Static: Class<FormControlStatic>;
    static Feedback: Class<FormControlFeedback>;
  }

  declare export class ControlLabel extends React$Component<{
    htmlFor?: string,
    srOnly?: boolean,
    bsClass?: string
  }> {}

  declare export class Checkbox extends React$Component<{
    inline?: boolean,
    disabled?: boolean,
    title?: string,
    validateState?: 'success' | 'warning' | 'error' | null,
    inputRef?: Ref<'input'>,
    bsClass?: string
  }> {}

  declare export class Radio extends React$Component<{
    inline?: boolean,
    disabled?: boolean,
    title?: string,
    validateState?: 'success' | 'warning' | 'error' | null,
    inputRef?: Ref<'input'>,
    bsClass?: string
  }> {}

  declare export class HelpBlock extends React$Component<{
    bsClass?: string
  }> {}

  declare export class Form extends React$Component<{
    horizontal?: boolean,
    inline?: boolean,
    componentClass?: ElementType,
    bsClass?: string
  }> {}

  declare class InputGroupAddon extends React$Component<{
    bsClass?: string
  }> {}

  declare class InputGroupButton extends React$Component<{
    bsClass?: string
  }> {}

  declare export class InputGroup extends React$Component<{
    bsSize?: BsSize,
    bsClass?: string
  }> {
    static Addon: Class<InputGroupAddon>;
    static Button: Class<InputGroupButton>;
  }

  declare export class Image extends React$Component<{
    responsive?: boolean,
    rounded?: boolean,
    circle?: boolean,
    thumbnail?: boolean,
    bsClass?: string
  }> {}

  declare export class Thumbnail extends React$Component<{
    src?: string,
    alt?: string,
    href?: string,
    onError?: Function,
    onLoad?: Function,
    bsClass?: string
  }> {}

  declare export class Jumbotron extends React$Component<{
    componentClass?: ElementType,
    bsClass?: string
  }> {}

  declare export class Label extends React$Component<{
    bsStyle?: 'success' | 'warning' | 'danger' | 'info' | 'default' | 'primary',
    bsClass?: string
  }> {}

  declare export class ListGroup extends React$Component<{
    componentClass?: ElementType,
    bsClass?: string
  }> {}

  declare export class ListGroupItem extends React$Component<{
    active?: any,
    disabled?: any,
    header?: Node,
    listItem?: boolean,
    onClick?: Function,
    href?: string,
    type?: string,
    bsStyle?: 'success' | 'warning' | 'danger' | 'info',
    bsClass?: string
  }> {}


  declare class MediaBody extends React$Component<{
    align?: 'top' | 'middle' | 'bottom',
    componentClass?: ElementType,
    bsClass?: string
  }> {}
  declare class MediaLeft extends React$Component<{
    align?: 'top' | 'middle' | 'bottom',
    bsClass?: string
  }> {}
  declare export class Media extends React$Component<{
    componentClass?: ElementType,
    bsClass?: string
  }> {
    static Body: Class<MediaBody>;
    static Left: Class<MediaLeft>;
  }

  declare class Dialog extends React$Component<{
    dialogClassName?: string,
    bsSize?: BsSize,
    bsClass?: string
  }> {}
  declare class Header extends React$Component<{
    closeLabel?: string,
    closeButton?: boolean,
    onHide?: Function,
    bsClass?: string
  }> {}
  declare class Title extends React$Component<{
    componentClass?: ElementType,
    bsClass?: string
  }> {}
  declare class Body extends React$Component<{
    componentClass?: ElementType,
    bsClass?: string
  }> {}
  declare class Footer extends React$Component<{
    componentClass?: ElementType,
    bsClass?: string
  }> {}
  declare export class Modal extends React$Component<{
    backdrop?: 'static' | boolean,
    backdropClassName?: string,
    keyboard?: boolean,
    animation?: boolean,
    dialogComponentClass?: ElementType,
    autoFocus?: boolean,
    enforceFocus?: boolean,
    restoreFocus?: boolean,
    show?: boolean,
    onHide?: Function,
    onEnter?: Function,
    onEntering?: Function,
    onEntered?: Function,
    onExit?: Function,
    onExiting?: Function,
    onExited?: Function,
    container?: Node | Component<*> | (...args: Array<any>) => Node,
    bsSize?: BsSize,
    bsClass?: string
  }> {
    static Dialog: Class<Dialog>;
    static Header: Class<Header>;
    static Title: Class<Title>;
    static Body: Class<Body>;
    static Footer: Class<Footer>;
  }

  declare export class Nav extends React$Component<{
    activeKey?: any,
    activeHref?: string,
    justified?: any, // TODO: figure out proper type
    onSelect?: Function,
    role?: string,
    navbar?: boolean,
    pullRight?: boolean,
    pullLeft?: boolean,
    bsStyle?: 'tabs' | 'pills',
    bsClass?: string
  }> {}

  declare export class NavDropdown extends React$Component<{}> {}

  declare export class NavItem extends React$Component<{
    active?: boolean,
    disabled?: boolean,
    role?: string,
    href?: string,
    onClick?: Function,
    onSelect?: Function,
    eventKey?: any
  }> {}

  declare class NavbarHeader extends React$Component<{}> {}
  declare class NavbarBrand extends React$Component<{}> {}
  declare class NavbarToggle extends React$Component<{
    onClick?: Function
  }> {}
  declare class NavbarCollapse extends React$Component<{}> {}
  declare class NavbarForm extends React$Component<{}> {}
  declare class NavbarLink extends React$Component<{}> {}
  declare class NavbarText extends React$Component<{}> {}

  declare export class Navbar extends React$Component<{
    fixedTop?: boolean,
    fixedBottom?: boolean,
    staticTop?: boolean,
    inverse?: boolean,
    fluid?: boolean,
    componentClass?: ElementType,
    onToggle?: Function,
    onSelect?: Function,
    collapseOnSelect?: boolean,
    expanded?: boolean,
    role?: string,
    bsStyle?: 'default' | 'inverse'
  }> {
    static Header: Class<NavbarHeader>;
    static Brand: Class<NavbarBrand>;
    static Toggle: Class<NavbarToggle>;
    static Collapse: Class<NavbarCollapse>;
    static Form: Class<NavbarForm>;
    static Link: Class<NavbarLink>;
    static Text: Class<NavbarText>;
  }

  declare export class Overlay extends React$Component<{
    show?: boolean,
    rootClose?: boolean,
    onHide?: Function,
    animation?: boolean | ElementType,
    onEnter?: Function,
    onEntering?: Function,
    onEntered?: Function,
    onExit?: Function,
    onExiting?: Function,
    placement?: 'top' | 'right' | 'bottom' | 'left'
  }> {}

  declare export class PageHeader extends React$Component<{
    bsClass?: string
  }> {}

  declare class PagerItem extends React$Component<{
    disabled?: boolean,
    previous?: boolean,
    next?: boolean,
    onClick?: Function,
    onSelect?: Function,
    eventKey?: any
  }> {}

  declare export class Pager extends React$Component<{
    onSelect?: Function,
    bsClass?: string
  }> {
    static Item: Class<PagerItem>;
  }

  declare class PaginationItem extends React$Component<{
    bsClass?: string
  }> {}

  declare class PaginationFirst extends React$Component<{
    bsClass?: string
  }> {}

  
  declare class PaginationLast extends React$Component<{
    bsClass?: string
  }> {}
  
  declare class PaginationPrev extends React$Component<{
    bsClass?: string
  }> {}
  
  declare class PaginationNext extends React$Component<{
    bsClass?: string
  }> {}
  
  declare class PaginationEllipsis extends React$Component<{
    bsClass?: string
  }> {}

  declare export class Pagination extends React$Component<{
    bsClass?: string
  }> {
    static Item: Class<PaginationItem>;
    static First: Class<PaginationFirst>;
    static Last: Class<PaginationLast>;
    static Prev: Class<PaginationPrev>;
    static Next: Class<PaginationNext>;
    static Ellipsis: Class<PaginationEllipsis>;
  }

  declare class PanelHeading extends React$Component<{
    componentClass?: ElementType,
    bsClass?: string,

  }> {}
  declare class PanelBody extends React$Component<{
    collapsible: boolean,
    bsClass?: string
  }> {}
  declare class PanelTitle extends React$Component<{
    componentClass?: ElementType,
    toggle?: boolean,
    bsClass?: string
  }> {}
  declare class PanelCollapse extends React$Component<{
    onEnter?: Function,
    onEntering?: Function,
    onEntered?: Function,
    onExit?: Function,
    onExiting?: Function,
    onExited?: Function,
    bsClass?: string
  }> {}
  declare class PanelToggle extends React$Component<{
    onClick?: Function,
    componentClass?: ElementType
  }> {}
  declare class PanelFooter extends React$Component<{
    bsClass?: string
  }> {}
  declare export class Panel extends React$Component<{
    expanded?: boolean,
    onToggle?: Function,
    eventKey?: any,
    id?: string
  }> {
    static Heading: Class<PanelHeading>;
    static Body: Class<PanelBody>;
    static Title: Class<PanelTitle>;
    static Collapse: Class<PanelCollapse>;
    static Toggle: Class<PanelToggle>;
    static Footer: Class<PanelFooter>;
  }

  declare export class PanelGroup extends React$Component<{
    accordion?: boolean,
    activeKey?: any,
    onSelect?: Function,
    role?: string,
    generateChildId?: (eventKey: string, type: string) => string,
    id?: string
  }> {}

  declare export class Popover extends React$Component<{
    id: string,
    placement?: 'top' | 'right' | 'bottom' | 'left',
    positionTop?: string | number,
    positionLeft?: string | number,
    arrowOffsetTop?: string | number,
    arrowOffsetLeft?: string | number,
    title?: Node,
    bsClass?: string
  }> {}

  declare export class ProgressBar extends React$Component<{
    min?: number,
    now?: number,
    max?: number,
    label?: Node,
    srOnly?: boolean,
    striped?: boolean,
    active?: boolean,
    children?: Element<typeof ProgressBar>,
    isChild?: boolean,
    bsStyle?: 'success' | 'warning' | 'danger' | 'info',
    bsClass?: string
  }> {}

  declare export class Table extends React$Component<{
    striped?: boolean,
    bordered?: boolean,
    condensed?: boolean,
    hover?: boolean,
    responsive?: boolean,
    bsClass?: string
  }> {}

  declare export class Tabs extends React$Component<{
    activeKey?: any,
    bsStyle?: 'tabs' | 'pills',
    animation?: boolean,
    id?: string,
    onSelect?: Function,
    mountOnEnter?: boolean,
    unmountOnExit?: boolean,

  }> {}

  declare export class Tab extends React$Component<{
    disabled?: boolean,
    title?: Node,
    tabClassName?: string,
    bsClass?: string
  }> {}

  declare export class TabContainer extends React$Component<{
    id: string,
    generateChildId?: (eventKey: string, type: string) => string,
    onSelect?: Function,
    activeKey?: any
  }> {}

  declare export class TabContent extends React$Component<{
    componentClass?: ElementType,
    animation?: boolean | ElementType,
    mountOnEnter?: boolean,
    unmountOnExit?: boolean,
    bsClass?: string
  }> {}

  declare export class TabPane extends React$Component<{
    eventKey?: any,
    animation?: boolean | string,
    id?: string,
    'aria-labelledby'?: string,
    bsClass?: string,
    onEnter?: Function,
    onEntering?: Function,
    onEntered?: Function,
    onExit?: Function,
    onExiting?: Function,
    onExited?: Function,
    mountOnEnter?: boolean,
    unmountOnExit?: boolean
  }> {}

  declare export class OverlayTrigger extends React$Component<{
    trigger?: TriggerType | Array<TriggerType>,
    delay?: number,
    delayShow?: number,
    delayHide?: number,
    defaultOverlayShown?: boolean,
    overlay: Node,
    onBlur?: Function,
    onClick?: Function,
    onFocus?: Function,
    onMouseOut?: Function,
    onMouseOver?: Function,
    target?: null,
    onHide?: null,
    show?: null
  }> {}

  declare export class Tooltip extends React$Component<{
    id: string | number,
    placement?: 'top' | 'right' | 'bottom' | 'left',
    positionTop?: string | number,
    positionLeft?: string | number,
    arrowOffsetTop?: string | number,
    arrowOffsetLeft?: string | number,
    bsClass?: string
  }> {}

  declare export class Well extends React$Component<{
    bsSize?: BsSize,
    bsClass?: string
  }> {}

  declare export class Collapse extends React$Component<{
    in?: boolean,
    mountOnEnter?: boolean,
    unmountOnExit?: boolean,
    appear?: boolean,
    timeout?: number,
    onEnter?: Function,
    onEntering?: Function,
    onEntered?: Function,
    onExit?: Function,
    onExiting?: Function,
    onExited?: Function,
    dimension?: 'height' | 'width' | Function,
    getDimensionValue?: Function,
    role?: string
  }> {}

  declare export class Fade extends React$Component<{
    in?: boolean,
    mountOnEnter?: boolean,
    unmountOnExit?: boolean,
    appear?: boolean,
    timeout?: number,
    onEnter?: Function,
    onEntering?: Function,
    onEntered?: Function,
    onExit?: Function,
    onExiting?: Function,
    onExited?: Function,
    dimension?: 'height' | 'width' | Function,
    getDimensionValue?: Function,
    role?: string
  }> {}

  declare export class Grid extends React$Component<{
    fluid?: boolean,
    componentClass?: ElementType,
    bsClass?: string
  }> {}

  declare export class Row extends React$Component<{
    componentClass?: ElementType,
    bsClass?: string
  }> {}

  declare export class Col extends React$Component<{
    componentClass?: ElementType,
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xsHidden?: boolean,
    smHidden?: boolean,
    mdHidden?: boolean,
    lgHidden?: boolean,
    xsOffset?: number,
    smOffset?: number,
    mdOffset?: number,
    lgOffset?: number,
    xsPush?: number,
    smPush?: number,
    mdPush?: number,
    lgPush?: number,
    xsPull?: number,
    smPull?: number,
    mdPull?: number,
    lgPull?: number,
    bsClass?: string
  }> {}

  declare export class Row extends React$Component<{
    componentClass?: ElementType,
    visibleXsBlock?: boolean,
    visibleSmBlock?: boolean,
    visibleMdBlock?: boolean,
    visibleLgBlock?: boolean,
    bsClass?: string
  }> {}

  declare export class Glyphicon extends React$Component<{
      glyph: string
  }> {}
}
