declare module "@material-ui/core/AppBar/AppBar" {
  import type {ComponentType, Node} from "react";

  declare type Color = "inherit" | "primary" | "secondary" | "default";
  declare type Position = "fixed" | "absolute" | "sticky" | "static";

  declare module.exports: ComponentType<{
    children?: Node,
    className?: string,
    classes?: Object,
    color?: Color,
    position?: Position
  }>;
}

declare module "@material-ui/core/AppBar" {
  declare module.exports: $Exports<"@material-ui/core/AppBar/AppBar">;
}

declare module "@material-ui/core/Avatar/Avatar" {
  import type {ComponentType, Element, ElementType} from "react";

  declare module.exports: ComponentType<{
    alt?: string,
    children?: string | Element<any>,
    childrenClassName?: string,
    className?: string,
    classes?: Object,
    component?: ElementType,
    imgProps?: Object,
    sizes?: string,
    src?: string,
    srcSet?: string
  }>;
}

declare module "@material-ui/core/Avatar" {
  declare module.exports: $Exports<"@material-ui/core/Avatar/Avatar">;
}

declare module "@material-ui/core/Badge/Badge" {
  import type {ComponentType, Node} from "react";

  declare type Color = "default" | "primary" | "secondary" | "error";

  declare module.exports: ComponentType<{
    badgeContent: Node,
    children: Node,
    className?: string,
    classes?: Object,
    color?: Color
  }>;
}

declare module "@material-ui/core/Badge" {
  declare module.exports: $Exports<"@material-ui/core/Badge/Badge">;
}

declare module "@material-ui/core/BottomNavigation/BottomNavigation" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    children: Node,
    className?: string,
    classes?: Object,
    onChange?: Function,
    showLabels?: boolean,
    value: any
  }>;
}

declare module "@material-ui/core/BottomNavigationAction/BottomNavigationAction" {
  import type {ComponentType, Element, Node} from "react";

  declare module.exports: ComponentType<{
    className?: string,
    classes?: Object,
    icon?: string | Element<any>,
    label?: Node,
    onChange?: Function,
    onClick?: Function,
    selected?: boolean,
    showLabel?: boolean,
    value?: any
  }>;
}

declare module "@material-ui/core/BottomNavigation" {
  declare export default $Exports<
    "@material-ui/core/BottomNavigation/BottomNavigation"
  >;
}

declare module "@material-ui/core/BottomNavigationAction" {
  declare export default $Exports<
    "@material-ui/core/BottomNavigationAction/BottomNavigationAction"
  >;
}

declare module "@material-ui/core/Button/Button" {
  import type {ComponentType, ElementType, Node} from "react";

  declare type Color = "default" | "inherit" | "primary" | "secondary";
  declare type Variant = "text" | "flat" | "outlined" | "contained" | "raised" | "fab" | "extendedFab"
  declare type Size = "small" | "medium" | "large"

  declare module.exports: ComponentType<{
    children: Node,
    className?: string,
    classes?: Object,
    color?: Color,
    component?: ElementType,
    disabled?: boolean,
    disableFocusRipple?: boolean,
    disableRipple?: boolean,
    fullWidth?: boolean,
    href?: string,
    mini?: boolean,
    size?: Size,
    variant?: Variant
  }>;
}

declare module "@material-ui/core/Button" {
  declare module.exports: $Exports<"@material-ui/core/Button/Button">;
}

declare module "@material-ui/core/ButtonBase/ButtonBase" {
  import type {ComponentType, ElementType, Node} from "react";

  declare module.exports: ComponentType<{
    centerRipple?: boolean,
    children?: Node,
    className?: string,
    classes?: Object,
    component?: ElementType,
    disableRipple?: boolean,
    disabled?: boolean,
    focusRipple?: boolean,
    keyboardFocusedClassName?: string,
    onBlur?: Function,
    onClick?: Function,
    onFocus?: Function,
    onKeyDown?: Function,
    onKeyUp?: Function,
    onMouseDown?: Function,
    onMouseLeave?: Function,
    onMouseUp?: Function,
    onTouchEnd?: Function,
    onTouchMove?: Function,
    onTouchStart?: Function,
    role?: string,
    rootRef?: Function,
    tabIndex?: number | string,
    type?: string
  }>;
}

declare module "@material-ui/core/ButtonBase/createRippleHandler" {
  declare function handleEvent(event: SyntheticUIEvent<*>): void;
  declare module.exports: (
    instance: Object,
    eventName: string,
    action: string,
    cb: ?Function
  ) => handleEvent;
}

declare module "@material-ui/core/ButtonBase" {
  declare module.exports: $Exports<"@material-ui/core/ButtonBase/ButtonBase">;
}

declare module "@material-ui/core/ButtonBase/Ripple" {
  import type {ComponentType} from "react";

  declare module.exports: ComponentType<{
    className?: string,
    classes?: Object,
    pulsate?: boolean,
    rippleSize: number,
    rippleX: number,
    rippleY: number
  }>;
}

declare module "@material-ui/core/ButtonBase/TouchRipple" {
  import type {ComponentType} from "react";

  declare module.exports: ComponentType<{
    center?: boolean,
    className?: string,
    classes?: Object
  }>;
}

declare module "@material-ui/core/Card/Card" {
  import type {ComponentType} from "react";

  declare module.exports: ComponentType<{
    className?: string,
    raised?: boolean
  }>;
}

declare module "@material-ui/core/CardActions/CardActions" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    className?: string,
    classes?: Object,
    disableActionSpacing?: boolean
  }>;
}

declare module "@material-ui/core/CardContent/CardContent" {
  import type {ComponentType} from "react";

  declare module.exports: ComponentType<{
    className?: string,
    classes?: Object
  }>;
}

declare module "@material-ui/core/CardHeader/CardHeader" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    action?: Node,
    avatar?: Node,
    className?: string,
    classes?: Object,
    subheader?: Node,
    title?: Node
  }>;
}

declare module "@material-ui/core/CardMedia/CardMedia" {
  import type {ComponentType, ElementType} from "react";

  declare module.exports: ComponentType<{
    className?: string,
    classes?: Object,
    component?: ElementType,
    image?: string,
    src?: string,
    style?: Object
  }>;
}

declare module "@material-ui/core/Card" {
  declare export default $Exports<"@material-ui/core/Card/Card">;
}
declare module "@material-ui/core/CardActions" {
  declare export default $Exports<"@material-ui/core/CardActions/CardActions">;
}
declare module "@material-ui/core/CardContent" {
  declare export default $Exports<"@material-ui/core/CardContent/CardContent">;
}
declare module "@material-ui/core/CardHeader" {
  declare export default $Exports<"@material-ui/core/CardHeader/CardHeader">;
}
declare module "@material-ui/core/CardMedia" {
  declare export default $Exports<"@material-ui/core/CardMedia/CardMedia">;
}

declare module "@material-ui/core/Checkbox/Checkbox" {
  import type {ComponentType, Node} from "react";


  declare module.exports: ComponentType<{
    checked?: boolean | string,
    checkedIcon?: Node,
    className?: string,
    classes?: Object,
    defaultChecked?: boolean,
    disableRipple?: boolean,
    disabled?: boolean,
    icon?: Node,
    indeterminate?: boolean,
    indeterminateIcon?: Node,
    inputProps?: Object,
    inputRef?: Function,
    name?: string,
    onChange?: Function,
    tabIndex?: number | string,
    value?: string
  }>;
}

declare module "@material-ui/core/Checkbox" {
  declare module.exports: $Exports<"@material-ui/core/Checkbox/Checkbox">;
}

declare module "@material-ui/core/Chip/Chip" {
  import type {ComponentType, Element, Node} from "react";

  import typeof Avatar from "@material-ui/core/Avatar/Avatar";

  declare module.exports: ComponentType<{
    avatar?: Element<Avatar>,
    className?: string,
    classes?: Object,
    deleteIcon?: Element<any>,
    label?: Node,
    onClick?: Function,
    onDelete?: (event: SyntheticEvent<*>) => void,
    onKeyDown?: Function,
    tabIndex?: number | string
  }>;
}

declare module "@material-ui/core/Chip" {
  declare module.exports: $Exports<"@material-ui/core/Chip/Chip">;
}

declare module "@material-ui/core/CssBaseline/CssBaseline" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{ children?: Node }>;
}

declare module "@material-ui/core/CssBaseline" {
  declare module.exports: $Exports<"@material-ui/core/CssBaseline/CssBaseline">;
}

declare module "@material-ui/core/colors/amber" {
  declare module.exports: any;
}

declare module "@material-ui/core/colors/blue" {
  declare module.exports: any;
}

declare module "@material-ui/core/colors/blueGrey" {
  declare module.exports: any;
}

declare module "@material-ui/core/colors/brown" {
  declare module.exports: any;
}

declare module "@material-ui/core/colors/common" {
  declare export type CommonColors = {
    black: string,
    white: string
  };

  declare module.exports: any;
}

declare module "@material-ui/core/colors/cyan" {
  declare module.exports: any;
}

declare module "@material-ui/core/colors/deepOrange" {
  declare module.exports: any;
}

declare module "@material-ui/core/colors/deepPurple" {
  declare module.exports: any;
}

declare module "@material-ui/core/colors/green" {
  declare module.exports: any;
}

declare module "@material-ui/core/colors/grey" {
  declare module.exports: any;
}

declare module "@material-ui/core/colors" {
  declare module.exports: any;
}

declare module "@material-ui/core/colors/indigo" {
  declare module.exports: any;
}

declare module "@material-ui/core/colors/lightBlue" {
  declare module.exports: any;
}

declare module "@material-ui/core/colors/lightGreen" {
  declare module.exports: any;
}

declare module "@material-ui/core/colors/lime" {
  declare module.exports: any;
}

declare module "@material-ui/core/colors/orange" {
  declare module.exports: any;
}

declare module "@material-ui/core/colors/pink" {
  declare module.exports: any;
}

declare module "@material-ui/core/colors/purple" {
  declare module.exports: any;
}

declare module "@material-ui/core/colors/red" {
  declare module.exports: any;
}

declare module "@material-ui/core/colors/teal" {
  declare module.exports: any;
}

declare module "@material-ui/core/colors/yellow" {
  declare module.exports: any;
}

declare module "@material-ui/core/Dialog/Dialog" {
  import type {ComponentType, Node} from "react";

  import type {
    TransitionCallback,
    TransitionDuration
  } from "@material-ui/core/internal/transition";
  declare type MaxWidth = "xs" | "sm" | "md" | false;

  declare module.exports: ComponentType<{
    children?: Node,
    className?: string,
    classes?: Object,
    fullScreen?: boolean,
    fullWidth?: boolean,
    ignoreBackdropClick?: boolean,
    ignoreEscapeKeyUp?: boolean,
    maxWidth?: MaxWidth,
    onBackdropClick?: Function,
    onClose?: Function,
    onEnter?: TransitionCallback,
    onEntered?: TransitionCallback,
    onEntering?: TransitionCallback,
    onEscapeKeyUp?: Function,
    onExit?: TransitionCallback,
    onExited?: TransitionCallback,
    onExiting?: TransitionCallback,
    open?: boolean,
    transition?: ComponentType<*>,
    transitionDuration?: TransitionDuration
  }>;
}

declare module "@material-ui/core/DialogActions/DialogActions" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    className?: string,
    classes?: Object
  }>;
}

declare module "@material-ui/core/DialogContent/DialogContent" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    className?: string,
    classes?: Object
  }>;
}

declare module "@material-ui/core/DialogContentText/DialogContentText" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    className?: string,
    classes?: Object
  }>;
}

declare module "@material-ui/core/DialogTitle/DialogTitle" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    className?: string,
    classes?: Object,
    disableTypography?: boolean
  }>;
}

declare module "@material-ui/core/withMobileDialog/withMobileDialog" {
  declare module.exports: any;
}

declare module "@material-ui/core/Dialog" {
  declare export default $Exports<"@material-ui/core/Dialog/Dialog">;
}

declare module "@material-ui/core/DialogActions" {
  declare export default $Exports<
    "@material-ui/core/DialogActions/DialogActions"
  >;
}

declare module "@material-ui/core/DialogContent" {
  declare export default $Exports<
    "@material-ui/core/DialogContent/DialogContent"
  >;
}

declare module "@material-ui/core/DialogContentText" {
  declare export default $Exports<
    "@material-ui/core/DialogContentText/DialogContentText"
  >;
}

declare module "@material-ui/core/DialogTitle" {
  declare export default $Exports<"@material-ui/core/DialogTitle/DialogTitle">;
}

declare module "@material-ui/core/withMobileDialog" {
  declare export default $Exports<
    "@material-ui/core/withMobileDialog/withMobileDialog"
  >;
}

declare module "@material-ui/core/withWidth" {
  import type {Breakpoint} from "@material-ui/core/styles/createBreakpoints";
  declare export var isWidthUp: (
    matchWidth: Breakpoint,
    currentWidth: Breakpoint
  ) => boolean;
  declare export var isWidthDown: (
    matchWidth: Breakpoint,
    currentWidth: Breakpoint
  ) => boolean;
  declare export default $Exports<"@material-ui/core/withWidth/withWidth">;
}

declare module "@material-ui/core/Divider/Divider" {
  import type {ComponentType} from "react";

  declare module.exports: ComponentType<{
    absolute?: boolean,
    className?: string,
    classes?: Object,
    inset?: boolean,
    light?: boolean
  }>;
}

declare module "@material-ui/core/Divider" {
  declare module.exports: $Exports<"@material-ui/core/Divider/Divider">;
}

declare module "@material-ui/core/Drawer/Drawer" {
  import type {ComponentType, Node} from "react";

  import type {TransitionDuration} from "@material-ui/core/internal/transition";

  declare type Anchor = "left" | "top" | "right" | "bottom";
  declare type Variant = "permanent" | "persistent" | "temporary";

  declare module.exports: ComponentType<{
    ModalProps?: Object,
    SlideProps?: Object,
    PaperProps?: Object,
    anchor?: Anchor,
    children: Node,
    className?: string,
    classes?: Object,
    elevation?: number,
    onClose?: Function,
    open?: boolean,
    transitionDuration?: TransitionDuration,
    variant?: Variant,
  }>;
}
declare module "@material-ui/core/Drawer" {
  declare module.exports: $Exports<"@material-ui/core/Drawer/Drawer">;
}

declare module "@material-ui/core/SwipeableDrawer/SwipeableDrawer" {
  import type {ComponentType} from "react";

  import typeof Drawer from "@material-ui/core/Drawer/Drawer"
  import type {TransitionDuration} from "@material-ui/core/internal/transition";

  declare module.exports: ComponentType<{
    disableBackdropTransition: boolean,
    disableDiscovery: boolean,
    disableSwipeToOpen: boolean,
    onClose?: Function,
    onOpen?: Function,
    open?: boolean,
    swipeAreaWidth: number,
    transitionDuration?: TransitionDuration,
  } & Drawer>;
}

declare module "@material-ui/core/SwipeableDrawer" {
  declare module.exports: $Exports<
    "@material-ui/core/SwipeableDrawer/SwipeableDrawer"
  >;
}

declare module "@material-ui/core/ExpansionPanel/ExpansionPanel" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    CollapseProps?: Object,
    children?: Node,
    className?: string,
    classes?: Object,
    defaultExpanded?: boolean,
    disabled?: boolean,
    expanded?: boolean,
    onChange?: Function
  }>;
}

declare module "@material-ui/core/ExpansionPanelActions/ExpansionPanelActions" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    className?: string,
    classes?: Object
  }>;
}

declare module "@material-ui/core/ExpansionPanelDetails/ExpansionPanelDetails" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    className?: string,
    classes?: Object
  }>;
}

declare module "@material-ui/core/ExpansionPanelSummary/ExpansionPanelSummary" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    className?: string,
    classes?: Object,
    disabled?: boolean,
    expanded?: boolean,
    expandIcon?: Node,
    onChange?: Function,
    onClick?: Function
  }>;
}

declare module "@material-ui/core/ExpansionPanel" {
  declare export default $Exports<
    "@material-ui/core/ExpansionPanel/ExpansionPanel"
  >;
}

declare module "@material-ui/core/ExpansionPanelActions" {
  declare export default $Exports<
    "@material-ui/core/ExpansionPanelActions/ExpansionPanelActions"
  >;
}

declare module "@material-ui/core/ExpansionPanelDetails" {
  declare export default $Exports<
    "@material-ui/core/ExpansionPanelDetails/ExpansionPanelDetails"
  >;
}

declare module "@material-ui/core/ExpansionPanelSummary" {
  declare export default $Exports<
    "@material-ui/core/ExpansionPanelSummary/ExpansionPanelSummary"
  >;
}

declare module "@material-ui/core/FormControl/FormControl" {
  import type {ComponentType, ElementType, Node} from "react";

  declare type Margin = "none" | "dense" | "normal";

  declare module.exports: ComponentType<{
    children?: Node,
    classes?: Object,
    className?: string,
    component?: ElementType,
    disabled?: boolean,
    error?: boolean,
    fullWidth?: boolean,
    margin?: Margin,
    onBlur?: Function,
    onFocus?: Function,
    required?: boolean
  }>;
}

declare module "@material-ui/core/FormControlLabel/FormControlLabel" {
  import type {ComponentType, Element, Node} from "react";

  declare module.exports: ComponentType<{
    checked?: boolean | string,
    classes?: Object,
    className?: string,
    control: Element<any>,
    disabled?: boolean,
    inputRef?: Function,
    label: Node,
    name?: string,
    onChange?: Function,
    value?: string
  }>;
}

declare module "@material-ui/core/FormGroup/FormGroup" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    classes?: Object,
    className?: string,
    row?: boolean
  }>;
}

declare module "@material-ui/core/FormHelperText/FormHelperText" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    classes?: Object,
    className?: string,
    disabled?: boolean,
    error?: boolean,
    margin?: "dense"
  }>;
}

declare module "@material-ui/core/FormLabel/FormLabel" {
  import type {ComponentType, ElementType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    classes?: Object,
    className?: string,
    component?: ElementType,
    disabled?: boolean,
    error?: boolean,
    focused?: boolean,
    required?: boolean
  }>;
}

declare module "@material-ui/core/FormControl" {
  declare module.exports: $Exports<"@material-ui/core/FormControl/FormControl">;
}

declare module "@material-ui/core/FormControlLabel" {
  declare module.exports: $Exports<
    "@material-ui/core/FormControlLabel/FormControlLabel"
  >;
}

declare module "@material-ui/core/FormGroup" {
  declare module.exports: $Exports<"@material-ui/core/FormGroup/FormGroup">;
}

declare module "@material-ui/core/FormHelperText" {
  declare module.exports: $Exports<
    "@material-ui/core/FormHelperText/FormHelperText"
  >;
}

declare module "@material-ui/core/FormLabel" {
  declare module.exports: $Exports<"@material-ui/core/FormLabel/FormLabel">;
}

declare module "@material-ui/core/Grid/Grid" {
  import type {ComponentType, ElementType, Node} from "react";

  declare type GridSizes =
    | boolean
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12;
  declare type AlignContent =
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
  declare type AlignItems =
    | "flex-start"
    | "center"
    | "flex-end"
    | "stretch"
    | "baseline";
  declare type Direction = "row" | "row-reverse" | "column" | "column-reverse";
  declare type Justify =
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
  declare type Spacing = 0 | 8 | 16 | 24 | 32 | 40;
  declare type Wrap = "nowrap" | "wrap" | "wrap-reverse";
  declare type GridProps = {
    children?: Node,
    classes?: Object,
    className?: string,
    component?: ElementType,
    container?: boolean,
    item?: boolean,
    alignContent?: AlignContent,
    alignItems?: AlignItems,
    direction?: Direction,
    spacing?: Spacing,
    hidden?: any,
    justify?: Justify,
    wrap?: Wrap,
    xs?: GridSizes,
    sm?: GridSizes,
    md?: GridSizes,
    lg?: GridSizes,
    xl?: GridSizes
  }
  declare module.exports: ComponentType<GridProps>;
}

declare module "@material-ui/core/Grid" {
  declare module.exports: $Exports<"@material-ui/core/Grid/Grid">;
}

declare module "@material-ui/core/GridList/GridList" {
  import type {ComponentType, ElementType, Node} from "react";

  declare type CellHeight = number | "auto";

  declare module.exports: ComponentType<{
    cellHeight?: CellHeight,
    children: Node,
    classes?: Object,
    className?: string,
    cols?: number,
    component?: ElementType,
    spacing?: number,
    style?: Object
  }>;
}

declare module "@material-ui/core/GridListTile/GridListTile" {
  import type {ComponentType, ElementType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    classes?: Object,
    className?: string,
    cols?: number,
    component?: ElementType,
    rows?: number
  }>;
}

declare module "@material-ui/core/GridListTileBar/GridListTileBar" {
  import type {ComponentType, Node} from "react";


  declare type TitlePosition = "top" | "bottom";
  declare type ActionPosition = "left" | "right";

  declare module.exports: ComponentType<{
    actionIcon?: Node,
    actionPosition?: ActionPosition,
    classes?: Object,
    className?: string,
    subtitle?: Node,
    title: Node,
    titlePosition?: TitlePosition
  }>;
}

declare module "@material-ui/core/GridList" {
  declare export default $Exports<"@material-ui/core/GridList/GridList">;
}

declare module "@material-ui/core/GridListTile" {
  declare export default $Exports<
    "@material-ui/core/GridListTile/GridListTile"
  >;
}

declare module "@material-ui/core/GridListTileBar" {
  declare export default $Exports<
    "@material-ui/core/GridListTileBar/GridListTileBar"
  >;
}
declare module "@material-ui/core/Hidden/Hidden" {
  import type {ComponentType, Node} from "react";

  import type {Breakpoint} from "@material-ui/core/styles/createBreakpoints";

  declare module.exports: ComponentType<{
    children: Node,
    className?: string,
    only?: Breakpoint | Array<Breakpoint>,
    xsUp?: boolean,
    smUp?: boolean,
    mdUp?: boolean,
    lgUp?: boolean,
    xlUp?: boolean,
    xsDown?: boolean,
    smDown?: boolean,
    mdDown?: boolean,
    lgDown?: boolean,
    xlDown?: boolean,
    implementation?: "js" | "css",
    initialWidth?: number
  }>;
}

declare module "@material-ui/core/Hidden/HiddenCss" {
  import type {ComponentType, ElementProps} from "react";

  import typeof Hidden from "@material-ui/core/Hidden/Hidden";

  declare module.exports: ComponentType<ElementProps<Hidden>>;
}

declare module "@material-ui/core/Hidden/HiddenJs" {
  import type {ComponentType, ElementProps} from "react";

  import typeof Hidden from "@material-ui/core/Hidden/Hidden";

  declare module.exports: ComponentType<ElementProps<Hidden>>;
}

declare module "@material-ui/core/Hidden" {
  declare export default $Exports<"@material-ui/core/Hidden/Hidden">;
}

declare module "@material-ui/core/Hidden/types" {
  declare module.exports: any;
}

declare module "@material-ui/core/Icon/Icon" {
  import type {ComponentType, Node} from "react";

  declare type Color =
    | "inherit"
    | "accent"
    | "action"
    | "contrast"
    | "disabled"
    | "error"
    | "primary";

  declare module.exports: ComponentType<{
    children?: Node,
    className?: string,
    classes?: Object,
    color?: Color
  }>;
}

declare module "@material-ui/core/Icon" {
  declare module.exports: $Exports<"@material-ui/core/Icon/Icon">;
}

declare module "@material-ui/core/IconButton/IconButton" {
  import type {ComponentType, Node} from "react";

  declare type Color =
    | "default"
    | "inherit"
    | "primary"
    | "secondary";

  declare module.exports: ComponentType<{
    buttonRef?: Function,
    children?: Node,
    classes?: Object,
    className?: string,
    color?: Color,
    disabled?: boolean,
    disableRipple?: boolean,
    rootRef?: Function
  }>;
}

declare module "@material-ui/core/IconButton" {
  declare module.exports: $Exports<"@material-ui/core/IconButton/IconButton">;
}

declare module "@material-ui/core/Input" {
  declare export default $Exports<"@material-ui/core/Input/Input">;
}

declare module "@material-ui/core/InputAdornment" {
  declare export default $Exports<
    "@material-ui/core/InputAdornment/InputAdornment"
  >;
}

declare module "@material-ui/core/InputLabel" {
  declare export default $Exports<"@material-ui/core/InputLabel/InputLabel">;
}

declare module "@material-ui/core/Input/Input" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    autoComplete?: string,
    autoFocus?: boolean,
    classes?: Object,
    className?: string,
    defaultValue?: string | number,
    disabled?: boolean,
    disableUnderline?: boolean,
    endAdornment?: Node,
    error?: boolean,
    fullWidth?: boolean,
    id?: string,
    inputComponent?: string | ComponentType<*>,
    inputProps?: Object,
    inputRef?: Function,
    margin?: "dense" | "none",
    multiline?: boolean,
    name?: string,
    readOnly?: boolean,
    onBlur?: (event: SyntheticFocusEvent<*>) => void,
    onChange?: (event: SyntheticInputEvent<*>) => void,
    onClean?: () => void,
    onDirty?: () => void,
    onFocus?: (event: SyntheticFocusEvent<*>) => void,
    onKeyDown?: (event: SyntheticKeyboardEvent<*>) => void,
    onKeyUp?: (event: SyntheticKeyboardEvent<*>) => void,
    placeholder?: string,
    rows?: string | number,
    rowsMax?: string | number,
    startAdornment?: Node,
    type?: string,
    value?: string | number | Array<string | number>
  }>;
}

declare module "@material-ui/core/InputAdornment/InputAdornment" {
  import type {ComponentType, ElementType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    classes?: Object,
    className?: string,
    component?: ElementType,
    disableTypography?: boolean,
    position: "start" | "end"
  }>;
}

declare module "@material-ui/core/InputLabel/InputLabel" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    classes?: Object,
    className?: string,
    disableAnimation?: boolean,
    disabled?: boolean,
    error?: boolean,
    FormControlClasses?: Object,
    focused?: boolean,
    margin?: "dense",
    required?: boolean,
    shrink?: boolean
  }>;
}

declare module "@material-ui/core/Input/Textarea" {
  import type {ComponentType} from "react";

  declare type Rows = string | number;

  declare module.exports: ComponentType<{
    classes?: Object,
    className?: string,
    defaultValue?: string | number,
    disabled?: boolean,
    onChange?: Function,
    rows: Rows,
    rowsMax?: string | number,
    textareaRef?: Function,
    value?: string | number
  }>;
}

declare module "@material-ui/core/internal/dom" {
  declare module.exports: any;
}

declare module "@material-ui/core/Portal/Portal" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    open?: boolean
  }>;
}

declare module "@material-ui/core/Portal" {
  declare module.exports: $Exports<"@material-ui/core/Portal/Portal">;
}

declare module "@material-ui/core/internal/SwitchBase" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    checked?: boolean | string,
    checkedIcon?: Node,
    children?: Node,
    classes?: Object,
    className?: string,
    defaultChecked?: boolean,
    disabled?: boolean,
    disableRipple?: boolean,
    icon?: Node,
    indeterminate?: boolean,
    indeterminateIcon?: Node,
    inputProps?: Object,
    inputRef?: Function,
    inputType?: string,
    name?: string,
    onChange?: Function,
    tabIndex?: number | string,
    value?: string
  }>;
}

declare module "@material-ui/core/internal/transition" {
  declare type TransitionDuration = number | { enter: number, exit: number };
  declare type TransitionCallback = (element: HTMLElement) => void;
  declare type TransitionClasses = {
    appear?: string,
    appearActive?: string,
    enter?: string,
    enterActive?: string,
    exit?: string,
    exitActive?: string
  };
}
declare module "@material-ui/core/List" {
  declare export default $Exports<"@material-ui/core/List/List">;
}

declare module "@material-ui/core/ListItem" {
  declare export default $Exports<"@material-ui/core/ListItem/ListItem">;
}

declare module "@material-ui/core/ListItemAvatar" {
  declare export default $Exports<
    "@material-ui/core/ListItemAvatar/ListItemAvatar"
  >;
}

declare module "@material-ui/core/ListItemIcon" {
  declare export default $Exports<
    "@material-ui/core/ListItemIcon/ListItemIcon"
  >;
}

declare module "@material-ui/core/ListItemSecondaryAction" {
  declare export default $Exports<
    "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction"
  >;
}

declare module "@material-ui/core/ListItemText" {
  declare export default $Exports<
    "@material-ui/core/ListItemText/ListItemText"
  >;
}

declare module "@material-ui/core/ListSubheader" {
  declare export default $Exports<
    "@material-ui/core/ListSubheader/ListSubheader"
  >;
}

declare module "@material-ui/core/List/List" {
  import type {ComponentType, ElementType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    classes?: Object,
    className?: string,
    component?: ElementType,
    dense?: boolean,
    disablePadding?: boolean,
    rootRef?: Function,
    subheader?: Node
  }>;
}

declare module "@material-ui/core/ListItem/ListItem" {
  import type {ComponentType, ElementType, Node} from "react";

  declare module.exports: ComponentType<{
    button?: boolean,
    children?: Node,
    classes?: Object,
    className?: string,
    component?: ElementType,
    dense?: boolean,
    disabled?: boolean,
    disableGutters?: boolean,
    divider?: boolean
  }>;
}

declare module "@material-ui/core/ListItemAvatar/ListItemAvatar" {
  import type {ComponentType, Element} from "react";

  declare module.exports: ComponentType<{
    children: Element<any>,
    classes?: Object,
    className?: string
  }>;
}

declare module "@material-ui/core/ListItemIcon/ListItemIcon" {
  import type {ComponentType, Element} from "react";

  declare module.exports: ComponentType<{
    children: Element<any>,
    classes?: Object,
    className?: string
  }>;
}

declare module "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    classes?: Object,
    className?: string
  }>;
}

declare module "@material-ui/core/ListItemText/ListItemText" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    classes?: Object,
    className?: string,
    disableTypography?: boolean,
    inset?: boolean,
    primary?: Node,
    secondary?: Node
  }>;
}

declare module "@material-ui/core/ListSubheader/ListSubheader" {
  import type {ComponentType, ElementType, Node} from "react";

  declare type Color = "default" | "primary" | "inherit";

  declare module.exports: ComponentType<{
    children?: Node,
    classes?: Object,
    className?: string,
    component?: ElementType,
    color?: Color,
    disableSticky?: boolean,
    inset?: boolean
  }>;
}

declare module "@material-ui/core/Menu" {
  declare export default $Exports<"@material-ui/core/Menu/Menu">;
}

declare module "@material-ui/core/MenuItem" {
  declare export default $Exports<"@material-ui/core/MenuItem/MenuItem">;
}

declare module "@material-ui/core/MenuList" {
  declare export default $Exports<"@material-ui/core/MenuList/MenuList">;
}

declare module "@material-ui/core/Menu/Menu" {
  import type {ComponentType, Node} from "react";

  import type {TransitionCallback} from "@material-ui/core/internal/transition";

  declare type TransitionDuration =
    | number
    | { enter?: number, exit?: number }
    | "auto";

  declare module.exports: ComponentType<{
    anchorEl?: ?HTMLElement,
    children?: Node,
    classes?: Object,
    MenuListProps?: Object,
    onEnter?: TransitionCallback,
    onEntering?: TransitionCallback,
    onEntered?: TransitionCallback,
    onExit?: TransitionCallback,
    onExiting?: TransitionCallback,
    onExited?: TransitionCallback,
    onClose?: Function,
    open?: boolean,
    PaperProps?: Object,
    PopoverClasses?: Object,
    transitionDuration?: TransitionDuration
  }>;
}

declare module "@material-ui/core/MenuItem/MenuItem" {
  import type {ComponentType, ElementType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    classes?: Object,
    className?: string,
    component?: ElementType,
    role?: string,
    selected?: boolean
  }>;
}

declare module "@material-ui/core/MenuList/MenuList" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    className?: string,
    onBlur?: Function,
    onKeyDown?: (event: SyntheticUIEvent<*>, key: string) => void
  }>;
}

declare module "@material-ui/core/MobileStepper" {
  declare module.exports: $Exports<
    "@material-ui/core/MobileStepper/MobileStepper"
  >;
}

declare module "@material-ui/core/MobileStepper/MobileStepper" {
  import type {ComponentType, Element} from "react";

  declare type Position = "bottom" | "top" | "static";
  declare type Variant = "text" | "dots" | "progress";

  declare module.exports: ComponentType<{
    activeStep?: number,
    backButton: Element<any>,
    classes?: Object,
    className?: string,
    nextButton: Element<any>,
    position?: Position,
    steps: number,
    variant?: Variant
  }>;
}

declare module "@material-ui/core/Backdrop/Backdrop" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    classes?: Object,
    className?: string,
    invisible?: boolean
  }>;
}

declare module "@material-ui/core/Modal/ModalManager" {
  declare class ModalManager {
    constructor(Object): ModalManager;
    add(any, any): void;
    remove(any): number;
    isTopModal(modal: any): boolean;
  }
  declare export default typeof ModalManager;
}

declare module "@material-ui/core/Modal" {
  declare export default $Exports<"@material-ui/core/Modal/Modal">;
  declare export var ModalManager: $Exports<
    "@material-ui/core/Modal/ModalManager"
  >;
}

declare module "@material-ui/core/Backdrop" {
  declare export default $Exports<"@material-ui/core/Backdrop/Backdrop">;
}

declare module "@material-ui/core/Modal/Modal" {
  import type {ComponentType, Element, ElementType,} from "react";

  import type {
    TransitionDuration,
    TransitionCallback
  } from "@material-ui/core/internal/transition";

  declare module.exports: ComponentType<{
    BackdropClassName?: string,
    BackdropComponent?: ElementType,
    BackdropInvisible?: boolean,
    BackdropTransitionDuration?: TransitionDuration,
    children?: Element<any>,
    classes?: Object,
    className?: string,
    keepMounted?: boolean,
    disableBackdrop?: boolean,
    ignoreBackdropClick?: boolean,
    ignoreEscapeKeyUp?: boolean,
    modalManager?: Object,
    onBackdropClick?: Function,
    onEnter?: TransitionCallback,
    onEntering?: TransitionCallback,
    onEntered?: TransitionCallback,
    onEscapeKeyUp?: Function,
    onExit?: TransitionCallback,
    onExiting?: TransitionCallback,
    onExited?: TransitionCallback,
    onClose?: Function,
    open: boolean
  }>;
}

declare module "@material-ui/core/Modal/ModalManager" {
  declare module.exports: any;
}

declare module "@material-ui/core/NativeSelect" {
  declare module.exports: $Exports<
    "@material-ui/core/NativeSelect/NativeSelect"
  >;
}

declare module "@material-ui/core/NativeSelect/NativeSelect" {
  import type {ComponentType, Element, ElementType, Node} from "react";

  declare module.exports: ComponentType<{
    classes: Object,
    children?: Node,
    IconComponent?: ElementType | Function,
    input?: Element<any>,
    inputProps?: Object,
    onChange?: Function,
    value?: string | number
  }>;
}

declare module "@material-ui/core/Paper" {
  declare module.exports: $Exports<"@material-ui/core/Paper/Paper">;
}

declare module "@material-ui/core/Paper/Paper" {
  import type {ComponentType, ElementType, Node} from "react";

  declare module.exports: ComponentType<{
    classes?: Object,
    className?: string,
    children?: Node,
    component?: ElementType,
    elevation?: number,
    square?: boolean
  }>;
}

declare module "@material-ui/core/Popover" {
  declare module.exports: $Exports<"@material-ui/core/Popover/Popover">;
}

declare module "@material-ui/core/Popover/Popover" {
  import type {ComponentType, Node} from "react";

  import type {
    TransitionCallback,
    TransitionClasses
  } from "@material-ui/core/internal/transition";

  declare type Position = {
    top: number,
    left: number
  };

  declare type Origin = {
    horizontal: "left" | "center" | "right" | number,
    vertical: "top" | "center" | "bottom" | number
  };

  declare module.exports: ComponentType<{
    anchorEl?: ?HTMLElement,
    anchorPosition?: Position,
    anchorReference?: "anchorEl" | "anchorPosition",
    anchorOrigin?: Origin,
    children: Node,
    classes?: Object,
    elevation?: number,
    getContentAnchorEl?: Function,
    marginThreshold?: number,
    onEnter?: TransitionCallback,
    onEntering?: TransitionCallback,
    onEntered?: TransitionCallback,
    onExit?: TransitionCallback,
    onExiting?: TransitionCallback,
    onExited?: TransitionCallback,
    onClose?: Function,
    open: boolean,
    PaperProps?: Object,
    role?: string,
    transformOrigin?: Origin,
    transitionClasses?: TransitionClasses,
    transitionDuration?: number | { enter?: number, exit?: number } | "auto"
  }>;
}

declare module "@material-ui/core/CircularProgress/CircularProgress" {
  import type {ComponentType} from "react";

  declare type Color = "primary" | "secondary" | "inherit";
  declare type Mode = "determinate" | "indeterminate";
  declare type Variant = "determinate" | "indeterminate" | "static";

  declare module.exports: ComponentType<{
    classes?: Object,
    className?: string,
    color?: Color,
    max?: number,
    min?: number,
    mode?: Mode,
    size?: number | string,
    style?: Object,
    thickness?: number,
    value?: number,
    variant?: Variant
  }>;
}

declare module "@material-ui/core/CircularProgress" {
  declare export default $Exports<
    "@material-ui/core/CircularProgress/CircularProgress"
  >;
}

declare module "@material-ui/core/LinearProgress" {
  declare export default $Exports<
    "@material-ui/core/LinearProgress/LinearProgress"
  >;
}

declare module "@material-ui/core/LinearProgress/LinearProgress" {
  import type {ComponentType} from "react";

  declare type Color = "primary" | "accent";
  declare type Mode = "determinate" | "indeterminate" | "buffer" | "query";

  declare module.exports: ComponentType<{
    classes?: Object,
    className?: string,
    color?: Color,
    mode?: Mode,
    value?: number,
    valueBuffer?: number
  }>;
}

declare module "@material-ui/core/Radio" {
  declare export default $Exports<"@material-ui/core/Radio/Radio">;
}

declare module "@material-ui/core/RadioGroup" {
  declare export default $Exports<"@material-ui/core/RadioGroup/RadioGroup">;
}

declare module "@material-ui/core/Radio/Radio" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    checked?: boolean | string,
    checkedIcon?: Node,
    children?: Node,
    classes?: Object,
    className?: string,
    defaultChecked?: boolean,
    disabled?: boolean,
    disableRipple?: boolean,
    icon?: Node,
    inputProps?: Object,
    inputRef?: Function,
    name?: string,
    onChange?: Function,
    tabIndex?: number | string,
    value?: string
  }>;
}

declare module "@material-ui/core/RadioGroup/RadioGroup" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    name?: string,
    onBlur?: Function,
    onChange?: Function,
    onKeyDown?: Function,
    value?: string
  }>;
}

declare module "@material-ui/core/Select" {
  declare module.exports: $Exports<"@material-ui/core/Select/Select">;
}

declare module "@material-ui/core/Select/Select" {
  import type {ComponentType, Element, Node} from "react";

  declare module.exports: ComponentType<{
    autoWidth?: boolean,
    children: Node,
    classes?: Object,
    displayEmpty?: boolean,
    input?: Element<any>,
    inputProps?: Object,
    native?: boolean,
    multiple?: boolean,
    onChange?: (event: SyntheticInputEvent<*>, child: Object) => void,
    onClose?: (event: SyntheticUIEvent<*>) => void,
    onOpen?: (event: SyntheticUIEvent<*>) => void,
    open?: boolean,
    MenuProps?: Object,
    renderValue?: Function,
    value?: ?($ReadOnlyArray<string | number> | string | number)
  }>;
}

declare module "@material-ui/core/Select/SelectInput" {
  import type {ComponentType, Element, Node} from "react";

  declare module.exports: ComponentType<{
    autoWidth: boolean,
    children: Node,
    classes?: Object,
    className?: string,
    disabled?: boolean,
    displayEmpty: boolean,
    native: boolean,
    multiple: boolean,
    MenuProps?: Object,
    name?: string,
    onBlur?: Function,
    onChange?: (event: SyntheticUIEvent<*>, child: Element<any>) => void,
    onFocus?: Function,
    readOnly?: boolean,
    renderValue?: Function,
    selectRef?: Function,
    value?: string | number | $ReadOnlyArray<string | number>
  }>;
}

declare module "@material-ui/core/Snackbar" {
  declare export default $Exports<"@material-ui/core/Snackbar/Snackbar">;
  declare export var SnackbarContent: $Exports<
    "@material-ui/core/SnackbarContent/SnackbarContent"
  >;
}

declare module "@material-ui/core/SnackbarContent" {
  declare export default $Exports<
    "@material-ui/core/SnackbarContent/SnackbarContent"
  >;
}

declare module "@material-ui/core/Snackbar/Snackbar" {
  import type {ComponentType, Element, Node} from "react";

  import type {
    TransitionDuration,
    TransitionCallback
  } from "@material-ui/core/internal/transition";

  declare type Origin = {
    horizontal?: "left" | "center" | "right" | number,
    vertical?: "top" | "center" | "bottom" | number
  };

  declare module.exports: ComponentType<{
    action?: Node,
    anchorOrigin?: Origin,
    autoHideDuration?: ?number,
    resumeHideDuration?: number,
    children?: Element<any>,
    classes?: Object,
    className?: string,
    key?: any,
    message?: Node,
    onEnter?: TransitionCallback,
    onEntering?: TransitionCallback,
    onEntered?: TransitionCallback,
    onExit?: TransitionCallback,
    onExiting?: TransitionCallback,
    onExited?: TransitionCallback,
    onMouseEnter?: Function,
    onMouseLeave?: Function,
    onClose?: (event: ?Event, reason: string) => void,
    open: boolean,
    SnackbarContentProps?: Object,
    transition?: ComponentType<*>,
    transitionDuration?: TransitionDuration
  }>;
}

declare module "@material-ui/core/SnackbarContent/SnackbarContent" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    action?: Node,
    classes?: Object,
    className?: string,
    message: Node
  }>;
}

declare module "@material-ui/core/Step" {
  declare export default $Exports<"@material-ui/core/Step/Step">;
}

declare module "@material-ui/core/StepButton" {
  declare export default $Exports<"@material-ui/core/StepButton/StepButton">;
}

declare module "@material-ui/core/StepContent" {
  declare export default $Exports<"@material-ui/core/StepContent/StepContent">;
}

declare module "@material-ui/core/StepIcon" {
  declare export default $Exports<"@material-ui/core/StepIcon/StepIcon">;
}

declare module "@material-ui/core/StepLabel" {
  declare export default $Exports<"@material-ui/core/StepLabel/StepLabel">;
}

declare module "@material-ui/core/Stepper" {
  declare export default $Exports<"@material-ui/core/Stepper/Stepper">;
}

declare module "@material-ui/core/Step/Step" {
  import type {ComponentType, Element, Node} from "react";

  import type {Orientation} from "@material-ui/core/Stepper/Stepper";

  declare module.exports: ComponentType<{
    active?: boolean,
    alternativeLabel?: boolean,
    children?: Node,
    classes?: Object,
    className?: string,
    completed?: boolean,
    connector?: Element<any>,
    disabled?: boolean,
    index?: number,
    last?: boolean,
    optional?: boolean,
    orientation?: Orientation
  }>;
}

declare module "@material-ui/core/StepButton/StepButton" {
  import type {ComponentType, Element} from "react";

  import type {Orientation} from "@material-ui/core/Stepper/Stepper";

  declare type Icon = Element<any> | string | number;

  declare module.exports: ComponentType<{
    active?: boolean,
    alternativeLabel?: boolean,
    children: Element<any>,
    classes?: Object,
    className?: string,
    completed?: boolean,
    disabled?: boolean,
    icon?: Icon,
    last?: boolean,
    optional?: boolean,
    orientation?: Orientation
  }>;
}

declare module "@material-ui/core/StepConnector/StepConnector" {
  import type {ComponentType} from "react";

  import type {Orientation} from "@material-ui/core/Stepper/Stepper";

  declare module.exports: ComponentType<{
    alternativeLabel?: boolean,
    classes?: Object,
    className?: string,
    orientation?: Orientation
  }>;
}

declare module "@material-ui/core/StepContent/StepContent" {
  import type {ComponentType, Node} from "react";

  import type {TransitionDuration} from "@material-ui/core/Collapse/Collapse";
  import type {Orientation} from "@material-ui/core/Stepper/Stepper";

  declare module.exports: ComponentType<{
    active?: boolean,
    alternativeLabel?: boolean,
    children: Node,
    classes?: Object,
    className?: string,
    completed?: boolean,
    last?: boolean,
    optional?: boolean,
    orientation?: Orientation,
    transition?: Function,
    transitionDuration?: TransitionDuration
  }>;
}

declare module "@material-ui/core/StepIcon/StepIcon" {
  import type {ComponentType} from "react";

  import type {Icon} from "@material-ui/core/StepButton/StepButton";

  declare module.exports: ComponentType<{
    active?: boolean,
    classes?: Object,
    completed?: boolean,
    icon?: Icon
  }>;
}

declare module "@material-ui/core/StepLabel/StepLabel" {
  import type {ComponentType, Node} from "react";

  import type {Orientation} from "@material-ui/core/Stepper/Stepper";
  import type {Icon} from "@material-ui/core/StepButton/StepButton";

  declare module.exports: ComponentType<{
    active?: boolean,
    alternativeLabel?: boolean,
    children: Node,
    classes?: Object,
    className?: string,
    completed?: boolean,
    disabled?: boolean,
    icon?: Icon,
    last?: boolean,
    optional?: boolean,
    orientation?: Orientation
  }>;
}

declare module "@material-ui/core/Stepper/Stepper" {
  import type {ComponentType, Element, Node} from "react";

  import typeof StepConnector from "@material-ui/core/StepConnector/StepConnector";

  declare type Orientation = "horizontal" | "vertical";

  declare module.exports: ComponentType<{
    activeStep?: number,
    alternativeLabel?: boolean,
    children: Node,
    classes?: Object,
    className?: string,
    connector?: Element<StepConnector> | Node,
    nonLinear?: boolean,
    orientation?: Orientation
  }>;
}

declare module "@material-ui/core/StepIcion/StepPositionIcon" {
  import type {ComponentType} from "react";

  import type {Icon} from "@material-ui/core/StepButton/StepButton";

  declare module.exports: ComponentType<{
    active?: boolean,
    classes?: Object,
    className?: string,
    position?: Icon
  }>;
}

declare module "@material-ui/core/styles/colorManipulator" {
  declare module.exports: {
    convertColorToString: (color: Object) => any,
    convertHexToRGB: (color: string) => any,
    decomposeColor: (color: string) => any,
    getContrastRatio: (foreground: string, background: string) => any,
    getLuminance: (color: string) => any,
    emphasize: (color: string, coefficient: number) => any,
    fade: (color: string, value: number) => any,
    darken: (color: string, coefficient: number) => any,
    lighten: (color: string, coefficient: number) => any
  };
}

declare module "@material-ui/core/styles/createBreakpoints" {
  declare type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

  declare export type BreakpointValues = { [key: Breakpoint]: number };
  declare export type Breakpoints = {
    keys: Breakpoint[],
    values: BreakpointValues,
    up: (key: Breakpoint | number) => string,
    down: (key: Breakpoint | number) => string,
    between: (start: Breakpoint, end: Breakpoint) => string,
    only: (key: Breakpoint) => string,
    width: (key: Breakpoint) => number
  };
  declare export type BreakpointsOptions = $Shape<
    {
      unit: string;
      step: number;
    } & Breakpoints
  >;

  declare module.exports: {
    keys: Array<Breakpoint>,
    default: (breakpoints: Object) => any
  };
}

declare module "@material-ui/core/styles/createGenerateClassName" {
  declare export type JssGenerateClassName = (Object, ?Object) => string;

  declare export type GenerateClassNameOptions = {|
    dangerouslyUseGlobalCSS?: boolean,
    productionPrefix?: string
  |};

  declare module.exports: (options?: GenerateClassNameOptions) => JssGenerateClassName;
}

declare module "@material-ui/core/styles/createMixins" {
  declare type CSSProperties = any; // import type {StandardProperties as CSSProperties} from "csstype";

  import type {Breakpoints} from "@material-ui/core/styles/createBreakpoints";
  import type {Spacing} from "@material-ui/core/styles/spacing";

  declare export type Mixins = {
    gutters: (styles?: CSSProperties) => CSSProperties,
    toolbar: CSSProperties
  };

  declare export type MixinsOptions = $Shape<Mixins>;

  declare module.exports: (
    breakpoints: Breakpoints,
    spacing: Spacing,
    mixins: MixinsOptions
  ) => Mixins;
}

declare module "@material-ui/core/styles/createMuiTheme" {
  import type {Palette, PaletteOptions} from "@material-ui/core/styles/createPalette";
  import type {Typography, TypographyOptions} from "@material-ui/core/styles/createTypography";
  import type {Mixins, MixinsOptions} from "@material-ui/core/styles/createMixins";
  import type {Breakpoints, BreakpointsOptions} from "@material-ui/core/styles/createBreakpoints";
  import type {Shadows} from "@material-ui/core/styles/shadows";
  import type {Shape, ShapeOptions} from "@material-ui/core/styles/shape";
  import type {Transitions, TransitionsOptions} from "@material-ui/core/styles/transitions";
  import type {Spacing, SpacingOptions} from "@material-ui/core/styles/spacing";
  import type {ZIndex, ZIndexOptions} from "@material-ui/core/styles/zIndex";

  declare export type Direction = "ltr" | "rtl";

  declare export type ThemeOptions = {
    breakpoints?: BreakpointsOptions,
    direction?: Direction,
    mixins?: MixinsOptions,
    overrides?: Object,
    shadows?: Shadows,
    shape?: ShapeOptions,
    spacing?: SpacingOptions,
    palette?: PaletteOptions,
    typography?: TypographyOptions | ((palette: Palette) => TypographyOptions),
    transitions?: TransitionsOptions,
    zIndex?: ZIndexOptions
  };

  declare export type Theme = {
    breakpoints: Breakpoints;
    direction: Direction,
    mixins: Mixins,
    overrides?: Object,
    palette: Palette,
    shadows: Shadows,
    shape: Shape,
    spacing: Spacing,
    transitions: Transitions,
    typography: Typography,
    zIndex: ZIndex
  };

  declare module.exports: (options: ThemeOptions) => Theme;
}

declare module "@material-ui/core/styles/createPalette" {
  import type {CommonColors} from "@material-ui/core/colors/common";

  declare export type TypeText = {
    primary: string,
    secondary: string,
    disabled: string,
    hint: string
  };

  declare export type TypeAction = {
    active: string,
    hover: string,
    selected: string,
    disabled: string,
    disabledBackground: string
  };

  declare export type TypeBackground = {
    default: string,
    paper: string
  };

  declare export type PaletteType = "light" | "dark";

  declare export type Color = {
    "50": string,
    "100": string,
    "200": string,
    "300": string,
    "400": string,
    "500": string,
    "600": string,
    "700": string,
    "800": string,
    "900": string,
    "A100": string,
    "A200": string,
    "A400": string,
    "A700": string
  };

  declare export type PaletteColor = {
    light: string,
    main: string,
    dark: string,
    contrastText: string
  };

  declare export type TypeObject = {
    text: TypeText;
    action: TypeAction;
    background: TypeBackground;
  };

  declare export type SimplePaletteColorOptions = {|
    light?: string,
    main: string,
    dark?: string,
    contrastText?: string
  |};

  declare type PaletteColorOptions = SimplePaletteColorOptions | $Shape<Color>;

  declare export type PaletteOptions = {
    primary?: PaletteColorOptions,
    secondary?: PaletteColorOptions,
    error?: PaletteColorOptions,
    type?: PaletteType,
    tonalOffset?: number,
    constrastThreshold?: number,
    common?: $Shape<CommonColors>,
    grey?: $Shape<Color>,
    text?: $Shape<TypeText>,
    divider?: string,
    action?: $Shape<TypeAction>,
    background?: $Shape<TypeBackground>,
    getContrastText?: (background: string) => string,
    [string]: any,
  };

  declare export type Palette = {
    common: CommonColors,
    type: PaletteType,
    contrastThreshold: number,
    tonalOffset: number,
    primary: PaletteColor,
    secondary: PaletteColor,
    error: PaletteColor,
    grey: Color,
    text: TypeText,
    divider: string,
    action: TypeAction,
    background: TypeBackground,
    getContrastText: (background: string) => string,
    augmentColor: (
      color: SimplePaletteColorOptions,
      mainShade?: number | string,
      lightShade?: number | string,
      darkShade?: number | string,
    ) => void,
    [string]: any,
  };

  declare export var light: TypeObject;
  declare export var dark: TypeObject;
  declare export default (palette: PaletteOptions) => Palette;
}

declare module "@material-ui/core/styles/createTypography" {
  declare type CSSProperties = any; // import type {StandardProperties as CSSProperties} from "csstype";

  import type {Palette} from "@material-ui/core/styles/createPalette";

  declare export type TextStyle =
    | "display1"
    | "display2"
    | "display3"
    | "display4"
    | "headline"
    | "title"
    | "subheading"
    | "body1"
    | "body2"
    | "caption";

  declare export type Style = TextStyle | "button";

  declare type FontStyle = {
    fontFamily: $PropertyType<CSSProperties, "fontFamily">,
    fontSize: $PropertyType<CSSProperties, "fontSize">,
    fontWeightLight: $PropertyType<CSSProperties, "fontWeight">,
    fontWeightRegular: $PropertyType<CSSProperties, "fontWeight">,
    fontWeightMedium: $PropertyType<CSSProperties, "fontWeight">,
    htmlFontSize?: $PropertyType<CSSProperties, "fontSize">
  };

  declare type TypographyStyle = {
    color?: string,
    fontFamily: $PropertyType<CSSProperties, "fontFamily">,
    fontSize: $PropertyType<CSSProperties, "fontSize">,
    fontWeight: $PropertyType<CSSProperties, "fontWeight">,
    letterSpacing?: $PropertyType<CSSProperties, "letterSpacing">,
    lineHeight?: $PropertyType<CSSProperties, "lineHeight">,
    textTransform?: $PropertyType<CSSProperties, "textTransform">
  };

  declare type TypographyUtils = {
    pxToRem: (px: number) => string
  };

  declare export type Typography = { [style: Style]:  $Shape<TypographyStyle> } & FontStyle & TypographyUtils;

  declare export type TypographyOptions = $Shape<{ [style: Style]:  $Shape<TypographyStyle> } & FontStyle>;

  declare module.exports: (
    palette: Palette,
    typography: TypographyOptions | ((palette: Palette) => TypographyOptions),
  ) => Typography;
}

declare module "@material-ui/core/styles/getStylesCreator" {
  declare module.exports: (stylesOrCreator: Object | (Object => Object)) => any;
}

declare module "@material-ui/core/styles/jssPreset" {
  declare module.exports: () => any;
}

declare module "@material-ui/core/styles/MuiThemeProvider" {
  import type {ComponentType} from "react";

  declare module.exports: ComponentType<Object>;
}

declare module "@material-ui/core/styles/shadows" {
  declare export type Shadows = string[];

  declare module.exports: Shadows;
}

declare module "@material-ui/core/styles/shape" {
  declare export type Shape = {
    borderRadius: number
  };

  declare export type ShapeOptions = $Shape<Shape>

  declare module.exports: {
    default: Shape
  };
}

declare module "@material-ui/core/styles/spacing" {
  declare export type Spacing = {
    unit: number
  };

  declare export type SpacingOptions = $Shape<Spacing>;

  declare module.exports: Spacing;
}

declare module "@material-ui/core/styles/themeListener" {
  declare export var CHANNEL: string;
  declare export default Object;
}

declare module "@material-ui/core/styles/transitions" {
  declare export type Easing = {
    easeInOut: string,
    easeOut: string,
    easeIn: string,
    sharp: string
  };

  declare export type Duration = {
    shortest: number,
    shorter: number,
    short: number,
    standard: number,
    complex: number,
    enteringScreen: number,
    leavingScreen: number
  };

  declare export type Transitions = {
    easing: Easing,
    duration: Duration,
    create(
      props: string | string[],
      options?: $Shape<{ duration: number | string; easing: string; delay: number | string }>,
    ): string,
    getAutoHeightDuration(height: number): number
  };

  declare export type TransitionsOptions = {|
    easing?: $Shape<Easing>;
    duration?: $Shape<Duration>;
    create?: (
      props: string | string[],
      options?: $Shape<{ duration: number | string; easing: string; delay: number | string }>,
    ) => string;
    getAutoHeightDuration?: (height: number) => number;
  |};

  declare export var easing: Easing;
  declare export var duration: Duration;
  declare export var formatMs: (milliseconds: number) => string;
  declare export var isString: (value: any) => boolean;
  declare export var isNumber: (value: any) => boolean;
  declare export default Transitions;
}

declare module "@material-ui/core/styles/withStyles" {
  import type {ComponentType, ElementConfig, ElementRef, ElementType, Ref} from "react";

  import type {Theme} from "@material-ui/core/styles/createMuiTheme"

  declare type CSSProperties = any; // import type {StandardProperties as CSSProperties} from "csstype";

  declare type CSSCreateStyleSheetOptions = {|
    media?: string,
    meta?: string,
    index?: number,
    link?: boolean,
    element?: HTMLStyleElement,
    generateClassName?: Function,
    classNamePrefix?: string,
  |};

  declare type StyleRules = { [string]: CSSProperties };

  declare type StyleRulesCallback = (theme: Theme) => StyleRules;

  declare export type WithStylesOptions = {|
    ...$Exact<CSSCreateStyleSheetOptions>,
    flip?: boolean,
    withTheme?: boolean,
    name?: string
  |};

  declare export type WithStyles = {
    classes: { +[string]: string },
    innerRef: Ref<any> | {current: ElementRef<any> | null}
  };

  declare type WithStylesHOC = {
    classes: void | { +[string]: string },
    innerRef: void | (Ref<any> | {current: ElementRef<any>} | null)
  };

  declare module.exports: (
    stylesOrCreator: StyleRules | StyleRulesCallback,
    options?: WithStylesOptions,
  ) => <WrappedComponent: ComponentType<*>>(
    Component: WrappedComponent
  ) => ComponentType<$Diff<ElementConfig<$Supertype<WrappedComponent>>, WithStylesHOC>>;
}

declare module "@material-ui/core/styles/withTheme" {
  import type {ComponentType, ElementConfig, ElementRef, ElementType, Ref} from "react";

  import type {Theme} from "@material-ui/core/styles/createMuiTheme";

  declare export type WithTheme = {
    theme: Theme,
    innerRef: Ref<any> | {current: ElementRef<any> | null}
  };

  declare type WithThemeHOC = {
    theme: void | Theme,
    innerRef: void | (Ref<any> | {current: ElementRef<any> | null})
  };

  declare module.exports: () => <Props: {}, WrappedComponent: ComponentType<Props>>(
    Component: WrappedComponent
  ) => ComponentType<$Diff<ElementConfig<$Supertype<WrappedComponent>>, WithThemeHOC>>;
}

declare module "@material-ui/core/styles/zIndex" {
  declare export type ZIndex = {
    mobileStepper: number,
    appBar: number,
    drawer: number,
    modal: number,
    snackbar: number,
    tooltip: number
  };

  declare export type ZIndexOptions = $Shape<ZIndex>;

  declare module.exports: ZIndex;
}

declare module "@material-ui/core/styles" {
  import type {Theme as MuiTheme} from "@material-ui/core/styles/createMuiTheme";
  import type {WithStyles as MuiWithStyles} from "@material-ui/core/styles/withStyles";
  import type {WithTheme as MuiWithTheme} from "@material-ui/core/styles/withTheme";

  declare export type Theme = MuiTheme;
  declare export type WithStyles = MuiWithStyles;
  declare export type WithTheme = MuiWithTheme;

  declare module.exports: {
    MuiThemeProvider: $Exports<"@material-ui/core/styles/MuiThemeProvider">,
    withStyles: $Exports<"@material-ui/core/styles/withStyles">,
    withTheme: $Exports<"@material-ui/core/styles/withTheme">,
    createGenerateClassName: $Exports<"@material-ui/core/styles/createGenerateClassName">,
    createMuiTheme: $Exports<"@material-ui/core/styles/createMuiTheme">,
    jssPreset: $Exports<"@material-ui/core/styles/jssPreset">
  };
}

declare module "@material-ui/core/svg-icons/ArrowDownward" {
  import type {ComponentType} from "react";

  declare module.exports: ComponentType<Object>;
}

declare module "@material-ui/core/svg-icons/ArrowDropDown" {
  import type {ComponentType} from "react";

  declare module.exports: ComponentType<Object>;
}

declare module "@material-ui/core/svg-icons/Cancel" {
  import type {ComponentType} from "react";

  declare module.exports: ComponentType<Object>;
}

declare module "@material-ui/core/svg-icons/CheckBox" {
  import type {ComponentType} from "react";

  declare module.exports: ComponentType<Object>;
}

declare module "@material-ui/core/svg-icons/CheckBoxOutlineBlank" {
  import type {ComponentType} from "react";

  declare module.exports: ComponentType<Object>;
}

declare module "@material-ui/core/svg-icons/CheckCircle" {
  import type {ComponentType} from "react";

  declare module.exports: ComponentType<Object>;
}

declare module "@material-ui/core/svg-icons/IndeterminateCheckBox" {
  import type {ComponentType} from "react";

  declare module.exports: ComponentType<Object>;
}

declare module "@material-ui/core/svg-icons/KeyboardArrowLeft" {
  import type {ComponentType} from "react";

  declare module.exports: ComponentType<Object>;
}

declare module "@material-ui/core/svg-icons/KeyboardArrowRight" {
  import type {ComponentType} from "react";

  declare module.exports: ComponentType<Object>;
}

declare module "@material-ui/core/svg-icons/RadioButtonChecked" {
  import type {ComponentType} from "react";

  declare module.exports: ComponentType<Object>;
}

declare module "@material-ui/core/svg-icons/RadioButtonUnchecked" {
  import type {ComponentType} from "react";

  declare module.exports: ComponentType<Object>;
}

declare module "@material-ui/core/SvgIcon" {
  declare module.exports: $Exports<"@material-ui/core/SvgIcon/SvgIcon">;
}

declare module "@material-ui/core/SvgIcon/SvgIcon" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    children: Node,
    classes?: Object,
    className?: string,
    titleAccess?: string,
    viewBox?: string
  }>;
}

declare module "@material-ui/core/Switch" {
  declare module.exports: $Exports<"@material-ui/core/Switch/Switch">;
}

declare module "@material-ui/core/Switch/Switch" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    checked?: boolean | string,
    checkedIcon?: Node,
    classes?: Object,
    className?: string,
    defaultChecked?: boolean,
    disabled?: boolean,
    disableRipple?: boolean,
    icon?: Node,
    inputProps?: Object,
    inputRef?: Function,
    name?: string,
    onChange?: Function,
    tabIndex?: number | string,
    value?: string
  }>;
}

declare module "@material-ui/core/Table" {
  declare export default $Exports<"@material-ui/core/Table/Table">;
}

declare module "@material-ui/core/TableBody" {
  declare export default $Exports<"@material-ui/core/TableBody/TableBody">;
}

declare module "@material-ui/core/TableCell" {
  declare export default $Exports<"@material-ui/core/TableCell/TableCell">;
}

declare module "@material-ui/core/TableFooter" {
  declare export default $Exports<"@material-ui/core/TableFooter/TableFooter">;
}

declare module "@material-ui/core/TableHead" {
  declare export default $Exports<"@material-ui/core/TableHead/TableHead">;
}

declare module "@material-ui/core/TablePagination" {
  declare export default $Exports<
    "@material-ui/core/TablePagination/TablePagination"
  >;
}

declare module "@material-ui/core/TableRow" {
  declare export default $Exports<"@material-ui/core/TableRow/TableRow">;
}

declare module "@material-ui/core/TableSortLabel" {
  declare export default $Exports<
    "@material-ui/core/TableSortLabel/TableSortLabel"
  >;
}

declare module "@material-ui/core/Table/Table" {
  import type {ComponentType, ElementType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    classes?: Object,
    className?: string,
    component?: ElementType
  }>;
}

declare module "@material-ui/core/TableBody/TableBody" {
  import type {ComponentType, ElementType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    classes?: Object,
    className?: string,
    component?: ElementType
  }>;
}

declare module "@material-ui/core/TableCell/TableCell" {
  import type {ComponentType, ElementType, Node} from "react";

  declare type Padding = "default" | "checkbox" | "dense" | "none";

  declare module.exports: ComponentType<{
    children?: Node,
    classes?: Object,
    className?: string,
    component?: ElementType,
    numeric?: boolean,
    padding?: Padding
  }>;
}

declare module "@material-ui/core/TableFooter/TableFooter" {
  import type {ComponentType, ElementType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    classes?: Object,
    className?: string,
    component?: ElementType
  }>;
}

declare module "@material-ui/core/TableHead/TableHead" {
  import type {ComponentType, ElementType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    classes?: Object,
    className?: string,
    component?: ElementType
  }>;
}

declare module "@material-ui/core/TablePagination/TablePagination" {
  import type {ComponentType, ElementType, Node} from "react";

  declare type LabelDisplayedRowsArgs = {
    from: number,
    to: number,
    count: number,
    page: number
  };
  declare type LabelDisplayedRows = (
    paginationInfo: LabelDisplayedRowsArgs
  ) => Node;

  declare module.exports: ComponentType<{
    classes?: Object,
    component?: ElementType,
    colSpan?: number,
    count: number,
    labelDisplayedRows?: LabelDisplayedRows,
    labelRowsPerPage?: Node,
    onChangePage: (event: SyntheticInputEvent<*> | null, page: number) => void,
    onChangeRowsPerPage: (event: SyntheticInputEvent<*>) => void,
    page: number,
    rowsPerPage: number,
    rowsPerPageOptions?: Array<number>
  }>;
}

declare module "@material-ui/core/TableRow/TableRow" {
  import type {ComponentType, ElementType, Node} from "react";

  declare module.exports: ComponentType<{
    children?: Node,
    classes?: Object,
    className?: string,
    component?: ElementType,
    hover?: boolean,
    selected?: boolean
  }>;
}

declare module "@material-ui/core/TableSortLabel/TableSortLabel" {
  import type {ComponentType, Node} from "react";

  declare type Direction = "asc" | "desc";

  declare module.exports: ComponentType<{
    active?: boolean,
    children?: Node,
    classes?: Object,
    className?: string,
    direction?: Direction
  }>;
}

declare module "@material-ui/core/Tabs" {
  declare export default $Exports<"@material-ui/core/Tabs/Tabs">;
}

declare module "@material-ui/core/Tab" {
  declare export default $Exports<"@material-ui/core/Tab/Tab">;
}

declare module "@material-ui/core/Tab/Tab" {
  import type {ComponentType, Element} from "react";

  declare module.exports: ComponentType<{
    classes?: Object,
    className?: string,
    disabled?: boolean,
    fullWidth?: boolean,
    icon?: string | Element<any>,
    indicator?: string | Element<any>,
    label?: string | Element<any>,
    onChange?: (event: SyntheticEvent<*>, value: any) => void,
    onClick?: (event: SyntheticEvent<*>) => void,
    selected?: boolean,
    style?: Object,
    textColor?: "accent" | "primary" | "inherit" | string,
    value?: any
  }>;
}

declare module "@material-ui/core/Tabs/TabIndicator" {
  import type {ComponentType} from "react";

  declare type IndicatorStyle = {
    left: number,
    width: number
  };

  declare module.exports: ComponentType<{
    classes?: Object,
    className?: string,
    color: "accent" | "primary" | string,
    style: IndicatorStyle
  }>;
}

declare module "@material-ui/core/Tabs/Tabs" {
  import type {ComponentType, Node} from "react";

  import type {IndicatorStyle} from "@material-ui/core/Tabs/TabIndicator";

  declare type IndicatorColor = "accent" | "primary" | string;
  declare type ScrollButtons = "auto" | "on" | "off";
  declare type TextColor = "accent" | "primary" | "inherit";

  declare module.exports: ComponentType<{
    buttonClassName?: string,
    centered?: boolean,
    children?: Node,
    classes?: Object,
    className?: string,
    fullWidth?: boolean,
    indicatorClassName?: string,
    indicatorColor?: IndicatorColor,
    onChange?: (event: SyntheticEvent<*>, value: any) => void,
    scrollable?: boolean,
    scrollButtons?: ScrollButtons,
    TabScrollButton?: ComponentType<*>,
    textColor?: TextColor,
    value: any
  }>;
}

declare module "@material-ui/core/Tabs/TabScrollButton" {
  import type {ComponentType} from "react";

  declare module.exports: ComponentType<{
    classes?: Object,
    className?: string,
    direction: "left" | "right",
    onClick?: Function,
    visible?: boolean
  }>;
}

declare module "@material-ui/core/TextField" {
  declare module.exports: $Exports<"@material-ui/core/TextField/TextField">;
}

declare module "@material-ui/core/TextField/TextField" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    autoComplete?: string,
    autoFocus?: boolean,
    children?: Node,
    className?: string,
    defaultValue?: string,
    disabled?: boolean,
    error?: boolean,
    FormHelperTextProps?: Object,
    fullWidth?: boolean,
    helperText?: Node,
    helperTextClassName?: string,
    id?: string,
    InputLabelProps?: Object,
    InputProps?: Object,
    inputRef?: Function,
    label?: Node,
    labelClassName?: string,
    multiline?: boolean,
    name?: string,
    onChange?: (event: SyntheticInputEvent<*>) => void,
    placeholder?: string,
    required?: boolean,
    rootRef?: Function,
    rows?: string | number,
    rowsMax?: string | number,
    select?: boolean,
    SelectProps?: Object,
    type?: string,
    value?: string | number,
    margin?: "none" | "dense" | "normal"
  }>;
}

declare module "@material-ui/core/Toolbar" {
  declare module.exports: $Exports<"@material-ui/core/Toolbar/Toolbar">;
}

declare module "@material-ui/core/Toolbar/Toolbar" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    classes?: Object,
    children?: Node,
    className?: string,
    disableGutters?: boolean
  }>;
}

declare module "@material-ui/core/Tooltip" {
  declare module.exports: $Exports<"@material-ui/core/Tooltip/Tooltip">;
}

declare module "@material-ui/core/Tooltip/Tooltip" {
  import type {ComponentType, Element, Node} from "react";

  declare type Placement =
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";

  declare module.exports: ComponentType<{
    children: Element<any>,
    classes?: Object,
    className?: string,
    disableTriggerFocus?: boolean,
    disableTriggerHover?: boolean,
    disableTriggerTouch?: boolean,
    id?: string,
    onClose?: Function,
    onRequestOpen?: Function,
    open?: boolean,
    title: Node,
    enterDelay?: number,
    leaveDelay?: number,
    placement?: Placement,
    PopperProps?: Object
  }>;
}

declare module "@material-ui/core/Collapse/Collapse" {
  import type {ComponentType, ElementType, Node} from "react";

  import type {TransitionCallback} from "@material-ui/core/internal/transition";

  declare type TransitionDuration =
    | number
    | { enter?: number, exit?: number }
    | "auto";

  declare module.exports: ComponentType<{
    appear?: boolean,
    children: Node,
    classes?: Object,
    className?: String,
    component?: ElementType,
    collapsedHeight?: string,
    containerProps?: Object,
    in: boolean,
    onEnter?: TransitionCallback,
    onEntering?: TransitionCallback,
    onEntered?: TransitionCallback,
    onExit?: TransitionCallback,
    onExiting?: TransitionCallback,
    style?: Object,
    timeout?: TransitionDuration,
    unmountOnExit?: boolean
  }>;
}

declare module "@material-ui/core/Fade/Fade" {
  import type {ComponentType, Element} from "react";

  import type {
    TransitionDuration,
    TransitionCallback
  } from "@material-ui/core/internal/transition";

  declare module.exports: ComponentType<{
    appear?: boolean,
    children: Element<any>,
    in: boolean,
    onEnter?: TransitionCallback,
    onEntering?: TransitionCallback,
    onExit?: TransitionCallback,
    style?: Object,
    timeout?: TransitionDuration
  }>;
}

declare module "@material-ui/core/Zoom/Zoom" {
  import type {ComponentType, Element} from "react";

  import type {
    TransitionDuration,
    TransitionCallback
  } from "@material-ui/core/internal/transition";

  declare module.exports: ComponentType<{
    children: Element<any>,
    in: boolean,
    onEnter?: TransitionCallback,
    onExit?: TransitionCallback,
    style?: Object,
    timeout?: TransitionDuration
  }>;
}

declare module "@material-ui/core/Grow/Grow" {
  import type {ComponentType, Element} from "react";

  import type {
    TransitionCallback,
    TransitionClasses
  } from "@material-ui/core/internal/transition";

  declare type TransitionDuration =
    | number
    | { enter?: number, exit?: number }
    | "auto";

  declare module.exports: ComponentType<{
    appear?: boolean,
    children: Element<any>,
    in: boolean,
    onEnter?: TransitionCallback,
    onEntering?: TransitionCallback,
    onEntered?: TransitionCallback,
    onExit?: TransitionCallback,
    onExiting?: TransitionCallback,
    onExited?: TransitionCallback,
    rootRef?: Function,
    style?: Object,
    transitionClasses?: TransitionClasses,
    timeout?: TransitionDuration
  }>;
}

declare module "@material-ui/core/Collapse" {
  declare export default $Exports<"@material-ui/core/Collapse/Collapse">;
}

declare module "@material-ui/core/Fade" {
  declare export default $Exports<"@material-ui/core/Fade/Fade">;
}

declare module "@material-ui/core/Grow" {
  declare export default $Exports<"@material-ui/core/Grow/Grow">;
}

declare module "@material-ui/core/Slide" {
  declare export default $Exports<"@material-ui/core/Slide/Slide">;
}

declare module "@material-ui/core/Zoom" {
  declare export default $Exports<"@material-ui/core/Zoom/Zoom">;
}

declare module "@material-ui/core/Slide/Slide" {
  import type {ComponentType, Element} from "react";

  import type {
    TransitionDuration,
    TransitionCallback
  } from "@material-ui/core/internal/transition";

  declare type Direction = "left" | "right" | "up" | "down";

  declare function setTranslateValue(
    props: Object,
    node: HTMLElement | Object
  ): void;

  declare module.exports: ComponentType<{
    children: Element<any>,
    direction: Direction,
    in: boolean,
    onEnter?: TransitionCallback,
    onEntering?: TransitionCallback,
    onEntered?: TransitionCallback,
    onExit?: TransitionCallback,
    onExiting?: TransitionCallback,
    onExited?: TransitionCallback,
    style?: Object,
    timeout?: TransitionDuration
  }>;
}

declare module "@material-ui/core/Typography" {
  declare module.exports: $Exports<"@material-ui/core/Typography/Typography">;
}

declare module "@material-ui/core/Typography/Typography" {
  import type {ComponentType, ElementType, Node} from "react";

  declare type Align = "inherit" | "left" | "center" | "right" | "justify";
  declare type Color =
    | "inherit"
    | "primary"
    | "secondary"
    | "textSecondary"
    | "error"
    | "default";
  declare type Variant =
    | "display4"
    | "display3"
    | "display2"
    | "display1"
    | "headline"
    | "title"
    | "subheading"
    | "body2"
    | "body1"
    | "caption"
    | "button";

  declare module.exports: ComponentType<{
    align?: Align,
    children?: Node,
    classes?: Object,
    className?: string,
    component?: ElementType,
    color?: Color,
    gutterBottom?: boolean,
    headlineMapping?: { [key: Variant]: string },
    noWrap?: boolean,
    paragraph?: boolean,
    variant?: Variant
  }>;
}

declare module "@material-ui/core/utils/addEventListener" {
  import type {Node} from "react";

  declare module.exports: (
    node: Node,
    event: string,
    handler: EventHandler,
    capture?: boolean
  ) => any;
}

declare module "@material-ui/core/ClickAwayListener/ClickAwayListener" {
  import type {ComponentType, Node} from "react";

  declare module.exports: ComponentType<{
    children: Node,
    onClickAway: (event: Event) => void
  }>;
}

declare module "@material-ui/core/ClickAwayListener" {
  declare module.exports: $Exports<
    "@material-ui/core/ClickAwayListener/ClickAwayListener"
  >;
}

declare module "@material-ui/core/utils/exactProp" {
  declare module.exports: (
    propTypes: Object,
    componentNameInError: string
  ) => any;
}

declare module "@material-ui/core/utils/helpers" {
  declare module.exports: {
    capitalizeFirstLetter: Function,
    contains: (obj: Object, pred: Object) => any,
    findIndex: (arr: Array<any>, pred: any) => any,
    find: (arr: Array<any>, pred: any) => any,
    createChainedFunction: (...funcs: Array<any>) => any
  };
}

declare module "@material-ui/core/utils/keyboardFocus" {
  declare module.exports: {
    focusKeyPressed: Function,
    detectKeyboardFocus: Function,
    listenForFocusKeys: Function
  };
}

declare module "@material-ui/core/utils/manageAriaHidden" {
  declare module.exports: {
    ariaHidden: Function,
    hideSiblings: Function,
    showSiblings: Function
  };
}

declare module "@material-ui/core/utils/reactHelpers" {
  import type {Node} from "react";

  declare module.exports: {
    cloneChildrenWithClassName: (
      children?: Node,
      className: string
    ) => any,
    isMuiElement: (element: any, muiNames: Array<string>) => any,
    isMuiComponent: (element: any, muiNames: Array<string>) => any
  };
}

declare module "@material-ui/core/utils/requirePropFactory" {
  declare module.exports: (componentNameInError: string) => any;
}

declare module "@material-ui/core/withWidth/withWidth" {
  import type {ComponentType} from "react";

  import type {Breakpoint} from "@material-ui/core/styles/createBreakpoints";
  declare module.exports: (options?: {|
    withTheme?: boolean,
    noSSR?: boolean,
    initialWidth?: Breakpoint,
    resizeInterval?: number
  |}) => <Props: { width: Breakpoint }>(
    Component: ComponentType<Props>
  ) => ComponentType<$Diff<Props, { width: Breakpoint }>>;
}

declare module "@material-ui/core/colors" {
  declare export var common: $Exports<"@material-ui/core/colors/common">;
  declare export var red: $Exports<"@material-ui/core/colors/red">;
  declare export var pink: $Exports<"@material-ui/core/colors/pink">;
  declare export var purple: $Exports<"@material-ui/core/colors/purple">;
  declare export var deepPurple: $Exports<
    "@material-ui/core/colors/deepPurple"
  >;
  declare export var indigo: $Exports<"@material-ui/core/colors/indigo">;
  declare export var blue: $Exports<"@material-ui/core/colors/blue">;
  declare export var lightBlue: $Exports<"@material-ui/core/colors/lightBlue">;
  declare export var cyan: $Exports<"@material-ui/core/colors/cyan">;
  declare export var teal: $Exports<"@material-ui/core/colors/teal">;
  declare export var green: $Exports<"@material-ui/core/colors/green">;
  declare export var lightGreen: $Exports<
    "@material-ui/core/colors/lightGreen"
  >;
  declare export var lime: $Exports<"@material-ui/core/colors/lime">;
  declare export var yellow: $Exports<"@material-ui/core/colors/yellow">;
  declare export var amber: $Exports<"@material-ui/core/colors/amber">;
  declare export var orange: $Exports<"@material-ui/core/colors/orange">;
  declare export var deepOrange: $Exports<
    "@material-ui/core/colors/deepOrange"
  >;
  declare export var brown: $Exports<"@material-ui/core/colors/brown">;
  declare export var grey: $Exports<"@material-ui/core/colors/grey">;
  declare export var blueGrey: $Exports<"@material-ui/core/colors/blueGrey">;
}

// Filename aliases
declare module "@material-ui/core/AppBar/AppBar.js" {
  declare module.exports: $Exports<"@material-ui/core/AppBar/AppBar">;
}
declare module "@material-ui/core/AppBar/index.js" {
  declare module.exports: $Exports<"@material-ui/core/AppBar">;
}
declare module "@material-ui/core/Avatar/Avatar.js" {
  declare module.exports: $Exports<"@material-ui/core/Avatar/Avatar">;
}
declare module "@material-ui/core/Avatar/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Avatar">;
}
declare module "@material-ui/core/Badge/Badge.js" {
  declare module.exports: $Exports<"@material-ui/core/Badge/Badge">;
}
declare module "@material-ui/core/Badge/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Badge">;
}
declare module "@material-ui/core/BottomNavigation/BottomNavigation.js" {
  declare module.exports: $Exports<
    "@material-ui/core/BottomNavigation/BottomNavigation"
  >;
}
declare module "@material-ui/core/BottomNavigation/index.js" {
  declare module.exports: $Exports<"@material-ui/core/BottomNavigation">;
}
declare module "@material-ui/core/BottomNavigationAction/BottomNavigationAction.js" {
  declare module.exports: $Exports<
    "@material-ui/core/BottomNavigationAction/BottomNavigationAction"
  >;
}
declare module "@material-ui/core/BottomNavigationAction/index.js" {
  declare module.exports: $Exports<"@material-ui/core/BottomNavigation">;
}
declare module "@material-ui/core/Button/Button.js" {
  declare module.exports: $Exports<"@material-ui/core/Button/Button">;
}
declare module "@material-ui/core/Button/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Button">;
}
declare module "@material-ui/core/ButtonBase/ButtonBase.js" {
  declare module.exports: $Exports<"@material-ui/core/ButtonBase/ButtonBase">;
}
declare module "@material-ui/core/ButtonBase/createRippleHandler.js" {
  declare module.exports: $Exports<
    "@material-ui/core/ButtonBase/createRippleHandler"
  >;
}
declare module "@material-ui/core/ButtonBase/index.js" {
  declare module.exports: $Exports<"@material-ui/core/ButtonBase">;
}
declare module "@material-ui/core/ButtonBase/Ripple.js" {
  declare module.exports: $Exports<"@material-ui/core/ButtonBase/Ripple">;
}
declare module "@material-ui/core/ButtonBase/TouchRipple.js" {
  declare module.exports: $Exports<"@material-ui/core/ButtonBase/TouchRipple">;
}
declare module "@material-ui/core/Card/Card.js" {
  declare module.exports: $Exports<"@material-ui/core/Card/Card">;
}
declare module "@material-ui/core/Card/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Card">;
}
declare module "@material-ui/core/CardActions/CardActions.js" {
  declare module.exports: $Exports<"@material-ui/core/CardActions/CardActions">;
}
declare module "@material-ui/core/CardActions/index.js" {
  declare module.exports: $Exports<"@material-ui/core/CardActions">;
}
declare module "@material-ui/core/CardContent/CardContent.js" {
  declare module.exports: $Exports<"@material-ui/core/CardContent/CardContent">;
}
declare module "@material-ui/core/CardContent/index.js" {
  declare module.exports: $Exports<"@material-ui/core/CardContent">;
}
declare module "@material-ui/core/CardHeader/CardHeader.js" {
  declare module.exports: $Exports<"@material-ui/core/CardHeader/CardHeader">;
}
declare module "@material-ui/core/CardHeader/index.js" {
  declare module.exports: $Exports<"@material-ui/core/CardHeader">;
}
declare module "@material-ui/core/CardMedia/CardMedia.js" {
  declare module.exports: $Exports<"@material-ui/core/CardMedia/CardMedia">;
}
declare module "@material-ui/core/CardMedia/index.js" {
  declare module.exports: $Exports<"@material-ui/core/CardMedia">;
}
declare module "@material-ui/core/Checkbox/Checkbox.js" {
  declare module.exports: $Exports<"@material-ui/core/Checkbox/Checkbox">;
}
declare module "@material-ui/core/Checkbox/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Checkbox">;
}
declare module "@material-ui/core/Chip/Chip.js" {
  declare module.exports: $Exports<"@material-ui/core/Chip/Chip">;
}
declare module "@material-ui/core/Chip/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Chip">;
}
declare module "@material-ui/core/colors/amber.js" {
  declare module.exports: $Exports<"@material-ui/core/colors/amber">;
}
declare module "@material-ui/core/colors/blue.js" {
  declare module.exports: $Exports<"@material-ui/core/colors/blue">;
}
declare module "@material-ui/core/colors/blueGrey.js" {
  declare module.exports: $Exports<"@material-ui/core/colors/blueGrey">;
}
declare module "@material-ui/core/colors/brown.js" {
  declare module.exports: $Exports<"@material-ui/core/colors/brown">;
}
declare module "@material-ui/core/colors/common.js" {
  declare module.exports: $Exports<"@material-ui/core/colors/common">;
}
declare module "@material-ui/core/colors/cyan.js" {
  declare module.exports: $Exports<"@material-ui/core/colors/cyan">;
}
declare module "@material-ui/core/colors/deepOrange.js" {
  declare module.exports: $Exports<"@material-ui/core/colors/deepOrange">;
}
declare module "@material-ui/core/colors/deepPurple.js" {
  declare module.exports: $Exports<"@material-ui/core/colors/deepPurple">;
}
declare module "@material-ui/core/colors/green.js" {
  declare module.exports: $Exports<"@material-ui/core/colors/green">;
}
declare module "@material-ui/core/colors/grey.js" {
  declare module.exports: $Exports<"@material-ui/core/colors/grey">;
}
declare module "@material-ui/core/colors/index.js" {
  declare module.exports: $Exports<"@material-ui/core/colors">;
}
declare module "@material-ui/core/colors/indigo.js" {
  declare module.exports: $Exports<"@material-ui/core/colors/indigo">;
}
declare module "@material-ui/core/colors/lightBlue.js" {
  declare module.exports: $Exports<"@material-ui/core/colors/lightBlue">;
}
declare module "@material-ui/core/colors/lightGreen.js" {
  declare module.exports: $Exports<"@material-ui/core/colors/lightGreen">;
}
declare module "@material-ui/core/colors/lime.js" {
  declare module.exports: $Exports<"@material-ui/core/colors/lime">;
}
declare module "@material-ui/core/colors/orange.js" {
  declare module.exports: $Exports<"@material-ui/core/colors/orange">;
}
declare module "@material-ui/core/colors/pink.js" {
  declare module.exports: $Exports<"@material-ui/core/colors/pink">;
}
declare module "@material-ui/core/colors/purple.js" {
  declare module.exports: $Exports<"@material-ui/core/colors/purple">;
}
declare module "@material-ui/core/colors/red.js" {
  declare module.exports: $Exports<"@material-ui/core/colors/red">;
}
declare module "@material-ui/core/colors/teal.js" {
  declare module.exports: $Exports<"@material-ui/core/colors/teal">;
}
declare module "@material-ui/core/colors/yellow.js" {
  declare module.exports: $Exports<"@material-ui/core/colors/yellow">;
}
declare module "@material-ui/core/Dialog/Dialog.js" {
  declare module.exports: $Exports<"@material-ui/core/Dialog/Dialog">;
}
declare module "@material-ui/core/Dialog/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Dialog">;
}
declare module "@material-ui/core/DialogActions/DialogActions.js" {
  declare module.exports: $Exports<
    "@material-ui/core/DialogActions/DialogActions"
  >;
}
declare module "@material-ui/core/DialogActions/index.js" {
  declare module.exports: $Exports<"@material-ui/core/DialogActions">;
}
declare module "@material-ui/core/DialogContent/DialogContent.js" {
  declare module.exports: $Exports<
    "@material-ui/core/DialogContent/DialogContent"
  >;
}
declare module "@material-ui/core/DialogContent/index.js" {
  declare module.exports: $Exports<"@material-ui/core/DialogContent">;
}
declare module "@material-ui/core/Dialog/DialogContentText.js" {
  declare module.exports: $Exports<
    "@material-ui/core/DialogContentText/DialogContentText"
  >;
}
declare module "@material-ui/core/DialogContentText/index.js" {
  declare module.exports: $Exports<"@material-ui/core/DialogContentText">;
}
declare module "@material-ui/core/Dialog/DialogTitle.js" {
  declare module.exports: $Exports<"@material-ui/core/DialogTitle/DialogTitle">;
}
declare module "@material-ui/core/DialogTitle/index.js" {
  declare module.exports: $Exports<"@material-ui/core/DialogTitle">;
}
declare module "@material-ui/core/withMobileDialog/withMobileDialog.js" {
  declare module.exports: $Exports<
    "@material-ui/core/withMobileDialog/withMobileDialog"
  >;
}
declare module "@material-ui/core/withMobileDialog/index.js" {
  declare module.exports: $Exports<"@material-ui/core/withMobileDialog">;
}
declare module "@material-ui/core/Divider/Divider.js" {
  declare module.exports: $Exports<"@material-ui/core/Divider/Divider">;
}
declare module "@material-ui/core/Divider/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Divider">;
}
declare module "@material-ui/core/Drawer/Drawer.js" {
  declare module.exports: $Exports<"@material-ui/core/Drawer/Drawer">;
}
declare module "@material-ui/core/Drawer/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Drawer">;
}
declare module "@material-ui/core/ExpansionPanel/ExpansionPanel.js" {
  declare module.exports: $Exports<
    "@material-ui/core/ExpansionPanel/ExpansionPanel"
  >;
}
declare module "@material-ui/core/ExpansionPanel/index.js" {
  declare module.exports: $Exports<"@material-ui/core/ExpansionPanel">;
}
declare module "@material-ui/core/ExpansionPanel/ExpansionPanelActions.js" {
  declare module.exports: $Exports<
    "@material-ui/core/ExpansionPanelActions/ExpansionPanelActions"
  >;
}
declare module "@material-ui/core/ExpansionPanelActions/index.js" {
  declare module.exports: $Exports<"@material-ui/core/ExpansionPanelActions">;
}
declare module "@material-ui/core/ExpansionPanel/ExpansionPanelDetails.js" {
  declare module.exports: $Exports<
    "@material-ui/core/ExpansionPanelDetails/ExpansionPanelDetails"
  >;
}
declare module "@material-ui/core/ExpansionPanelDetails/index.js" {
  declare module.exports: $Exports<"@material-ui/core/ExpansionPanelDetails">;
}
declare module "@material-ui/core/ExpansionPanel/ExpansionPanelSummary.js" {
  declare module.exports: $Exports<
    "@material-ui/core/ExpansionPanelSummary/ExpansionPanelSummary"
  >;
}
declare module "@material-ui/core/ExpansionPanelSummary/index.js" {
  declare module.exports: $Exports<"@material-ui/core/ExpansionPanelSummary">;
}
declare module "@material-ui/core/FormControl/FormControl.js" {
  declare module.exports: $Exports<"@material-ui/core/FormControl/FormControl">;
}
declare module "@material-ui/core/FormControl/index.js" {
  declare module.exports: $Exports<"@material-ui/core/FormControl">;
}
declare module "@material-ui/core/FormControlLabel/FormControlLabel.js" {
  declare module.exports: $Exports<
    "@material-ui/core/FormControlLabel/FormControlLabel"
  >;
}
declare module "@material-ui/core/FormControl/index.js" {
  declare module.exports: $Exports<"@material-ui/core/FormControl">;
}
declare module "@material-ui/core/FormGroup/FormGroup.js" {
  declare module.exports: $Exports<"@material-ui/core/FormGroup/FormGroup">;
}
declare module "@material-ui/core/FormGroup/index.js" {
  declare module.exports: $Exports<"@material-ui/core/FormGroup">;
}
declare module "@material-ui/core/FormHelperText/FormHelperText.js" {
  declare module.exports: $Exports<
    "@material-ui/core/FormHelperText/FormHelperText"
  >;
}
declare module "@material-ui/core/FormHelperText/index.js" {
  declare module.exports: $Exports<"@material-ui/core/FormHelperText">;
}
declare module "@material-ui/core/FormLabel/FormLabel.js" {
  declare module.exports: $Exports<"@material-ui/core/FormLabel/FormLabel">;
}
declare module "@material-ui/core/FormLabel/index.js" {
  declare module.exports: $Exports<"@material-ui/core/FormLabel">;
}
declare module "@material-ui/core/Grid/Grid.js" {
  declare module.exports: $Exports<"@material-ui/core/Grid/Grid">;
}
declare module "@material-ui/core/Grid/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Grid">;
}
declare module "@material-ui/core/GridList/GridList.js" {
  declare module.exports: $Exports<"@material-ui/core/GridList/GridList">;
}
declare module "@material-ui/core/GridList/index.js" {
  declare module.exports: $Exports<"@material-ui/core/GridList">;
}
declare module "@material-ui/core/GridListTile/GridListTile.js" {
  declare module.exports: $Exports<
    "@material-ui/core/GridListTile/GridListTile"
  >;
}
declare module "@material-ui/core/GridListTile/index.js" {
  declare module.exports: $Exports<"@material-ui/core/GridListTile">;
}
declare module "@material-ui/core/GridListTileBar/GridListTileBar.js" {
  declare module.exports: $Exports<
    "@material-ui/core/GridListTileBar/GridListTileBar"
  >;
}
declare module "@material-ui/core/GridListTileBar/index.js" {
  declare module.exports: $Exports<"@material-ui/core/GridListTileBar">;
}
declare module "@material-ui/core/Hidden/Hidden.js" {
  declare module.exports: $Exports<"@material-ui/core/Hidden/Hidden">;
}
declare module "@material-ui/core/Hidden/HiddenCss.js" {
  declare module.exports: $Exports<"@material-ui/core/Hidden/HiddenCss">;
}
declare module "@material-ui/core/Hidden/HiddenJs.js" {
  declare module.exports: $Exports<"@material-ui/core/Hidden/HiddenJs">;
}
declare module "@material-ui/core/Hidden/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Hidden">;
}
declare module "@material-ui/core/Hidden/types.js" {
  declare module.exports: $Exports<"@material-ui/core/Hidden/types">;
}
declare module "@material-ui/core/Icon/Icon.js" {
  declare module.exports: $Exports<"@material-ui/core/Icon/Icon">;
}
declare module "@material-ui/core/Icon/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Icon">;
}
declare module "@material-ui/core/IconButton/IconButton.js" {
  declare module.exports: $Exports<"@material-ui/core/IconButton/IconButton">;
}
declare module "@material-ui/core/IconButton/index.js" {
  declare module.exports: $Exports<"@material-ui/core/IconButton">;
}
declare module "@material-ui/core/Input/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Input">;
}
declare module "@material-ui/core/Input/Input.js" {
  declare module.exports: $Exports<"@material-ui/core/Input/Input">;
}
declare module "@material-ui/core/InputAdornment/InputAdornment.js" {
  declare module.exports: $Exports<
    "@material-ui/core/InputAdornment/InputAdornment"
  >;
}
declare module "@material-ui/core/InputLabel/InputLabel.js" {
  declare module.exports: $Exports<"@material-ui/core/InputLabel/InputLabel">;
}
declare module "@material-ui/core/Input/Textarea.js" {
  declare module.exports: $Exports<"@material-ui/core/Input/Textarea">;
}
declare module "@material-ui/core/internal/dom.js" {
  declare module.exports: $Exports<"@material-ui/core/internal/dom">;
}
declare module "@material-ui/core/Portal/Portal.js" {
  declare module.exports: $Exports<"@material-ui/core/Portal">;
}
declare module "@material-ui/core/internal/SwitchBase.js" {
  declare module.exports: $Exports<"@material-ui/core/internal/SwitchBase">;
}
declare module "@material-ui/core/internal/transition.js" {
  declare module.exports: $Exports<"@material-ui/core/internal/transition">;
}
declare module "@material-ui/core/List/index.js" {
  declare module.exports: $Exports<"@material-ui/core/List">;
}
declare module "@material-ui/core/List/List.js" {
  declare module.exports: $Exports<"@material-ui/core/List/List">;
}
declare module "@material-ui/core/ListItem/ListItem.js" {
  declare module.exports: $Exports<"@material-ui/core/ListItem/ListItem">;
}
declare module "@material-ui/core/ListItem/index.js" {
  declare module.exports: $Exports<"@material-ui/core/ListItem">;
}
declare module "@material-ui/core/ListItemAvatar/ListItemAvatar.js" {
  declare module.exports: $Exports<
    "@material-ui/core/ListItemAvatar/ListItemAvatar"
  >;
}
declare module "@material-ui/core/ListItemAvatar/index.js" {
  declare module.exports: $Exports<"@material-ui/core/ListItemAvatar">;
}
declare module "@material-ui/core/ListItemIcon/ListItemIcon.js" {
  declare module.exports: $Exports<
    "@material-ui/core/ListItemIcon/ListItemIcon"
  >;
}
declare module "@material-ui/core/ListItemIcon/index.js" {
  declare module.exports: $Exports<"@material-ui/core/ListItemIcon">;
}
declare module "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction.js" {
  declare module.exports: $Exports<
    "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction"
  >;
}
declare module "@material-ui/core/ListItemSecondaryAction/index.js" {
  declare module.exports: $Exports<"@material-ui/core/ListItemSecondaryAction">;
}
declare module "@material-ui/core/ListItemText/ListItemText.js" {
  declare module.exports: $Exports<
    "@material-ui/core/ListItemText/ListItemText"
  >;
}
declare module "@material-ui/core/ListItemText/index.js" {
  declare module.exports: $Exports<"@material-ui/core/ListItemText">;
}
declare module "@material-ui/core/ListSubheader/ListSubheader.js" {
  declare module.exports: $Exports<
    "@material-ui/core/ListSubheader/ListSubheader"
  >;
}
declare module "@material-ui/core/ListSubheader/index.js" {
  declare module.exports: $Exports<"@material-ui/core/ListSubheader">;
}
declare module "@material-ui/core/Menu/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Menu">;
}
declare module "@material-ui/core/Menu/Menu.js" {
  declare module.exports: $Exports<"@material-ui/core/Menu/Menu">;
}
declare module "@material-ui/core/MenuItem/index.js" {
  declare module.exports: $Exports<"@material-ui/core/MenuItem">;
}
declare module "@material-ui/core/MenuItem/MenuItem.js" {
  declare module.exports: $Exports<"@material-ui/core/MenuItem/MenuItem">;
}
declare module "@material-ui/core/MenuList/index.js" {
  declare module.exports: $Exports<"@material-ui/core/MenuList">;
}
declare module "@material-ui/core/MenuList/MenuList.js" {
  declare module.exports: $Exports<"@material-ui/core/MenuList/MenuList">;
}
declare module "@material-ui/core/MobileStepper/index.js" {
  declare module.exports: $Exports<"@material-ui/core/MobileStepper">;
}
declare module "@material-ui/core/MobileStepper/MobileStepper.js" {
  declare module.exports: $Exports<
    "@material-ui/core/MobileStepper/MobileStepper"
  >;
}
declare module "@material-ui/core/Backdrop/Backdrop.js" {
  declare module.exports: $Exports<"@material-ui/core/Backdrop/Backdrop">;
}
declare module "@material-ui/core/Backdrop/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Backdrop">;
}
declare module "@material-ui/core/Modal/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Modal">;
}
declare module "@material-ui/core/Modal/Modal.js" {
  declare module.exports: $Exports<"@material-ui/core/Modal/Modal">;
}
declare module "@material-ui/core/Modal/ModalManager.js" {
  declare module.exports: $Exports<"@material-ui/core/Modal/ModalManager">;
}
declare module "@material-ui/core/NativeSelect/index.js" {
  declare module.exports: $Exports<"@material-ui/core/NativeSelect">;
}
declare module "@material-ui/core/NativeSelect/NativeSelect.js" {
  declare module.exports: $Exports<
    "@material-ui/core/NativeSelect/NativeSelect"
  >;
}
declare module "@material-ui/core/Paper/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Paper">;
}
declare module "@material-ui/core/Paper/Paper.js" {
  declare module.exports: $Exports<"@material-ui/core/Paper/Paper">;
}
declare module "@material-ui/core/Popover/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Popover">;
}
declare module "@material-ui/core/Popover/Popover.js" {
  declare module.exports: $Exports<"@material-ui/core/Popover/Popover">;
}
declare module "@material-ui/core/CircularProgress/CircularProgress.js" {
  declare module.exports: $Exports<
    "@material-ui/core/CircularProgress/CircularProgress"
  >;
}
declare module "@material-ui/core/CircularProgress/index.js" {
  declare module.exports: $Exports<"@material-ui/core/CircularProgress">;
}
declare module "@material-ui/core/LinearProgress/LinearProgress.js" {
  declare module.exports: $Exports<
    "@material-ui/core/LinearProgress/LinearProgress"
  >;
}
declare module "@material-ui/core/LinearProgress/index.js" {
  declare module.exports: $Exports<"@material-ui/core/LinearProgress">;
}
declare module "@material-ui/core/Radio/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Radio">;
}
declare module "@material-ui/core/Radio/Radio.js" {
  declare module.exports: $Exports<"@material-ui/core/Radio/Radio">;
}
declare module "@material-ui/core/RadioGroup/RadioGroup.js" {
  declare module.exports: $Exports<"@material-ui/core/RadioGroup/RadioGroup">;
}
declare module "@material-ui/core/RadioGroup/index.js" {
  declare module.exports: $Exports<"@material-ui/core/RadioGroup">;
}
declare module "@material-ui/core/Select/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Select">;
}
declare module "@material-ui/core/Select/Select.js" {
  declare module.exports: $Exports<"@material-ui/core/Select/Select">;
}
declare module "@material-ui/core/Select/SelectInput.js" {
  declare module.exports: $Exports<"@material-ui/core/Select/SelectInput">;
}
declare module "@material-ui/core/Snackbar/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Snackbar">;
}
declare module "@material-ui/core/Snackbar/Snackbar.js" {
  declare module.exports: $Exports<"@material-ui/core/Snackbar/Snackbar">;
}
declare module "@material-ui/core/SnackbarContent/index.js" {
  declare module.exports: $Exports<"@material-ui/core/SnackbarContent">;
}
declare module "@material-ui/core/SnackbarContent/SnackbarContent.js" {
  declare module.exports: $Exports<
    "@material-ui/core/SnackbarContent/SnackbarContent"
  >;
}
declare module "@material-ui/core/Step/Step.js" {
  declare module.exports: $Exports<"@material-ui/core/Step/Step">;
}
declare module "@material-ui/core/Step/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Step">;
}
declare module "@material-ui/core/StepButton/StepButton.js" {
  declare module.exports: $Exports<"@material-ui/core/StepButton/StepButton">;
}
declare module "@material-ui/core/StepButton/index.js" {
  declare module.exports: $Exports<"@material-ui/core/StepButton">;
}
declare module "@material-ui/core/StepConnector/StepConnector.js" {
  declare module.exports: $Exports<
    "@material-ui/core/StepConnector/StepConnector"
  >;
}
declare module "@material-ui/core/StepConnector/index.js" {
  declare module.exports: $Exports<
    "@material-ui/core/StepConnector/StepConnector"
  >;
}
declare module "@material-ui/core/StepContent/StepContent.js" {
  declare module.exports: $Exports<"@material-ui/core/StepContent/StepContent">;
}
declare module "@material-ui/core/StepContent/index.js" {
  declare module.exports: $Exports<"@material-ui/core/StepContent">;
}
declare module "@material-ui/core/StepIcon/StepIcon.js" {
  declare module.exports: $Exports<"@material-ui/core/StepIcon/StepIcon">;
}
declare module "@material-ui/core/StepIcon/index.js" {
  declare module.exports: $Exports<"@material-ui/core/StepIcon">;
}
declare module "@material-ui/core/StepLabel/StepLabel.js" {
  declare module.exports: $Exports<"@material-ui/core/StepLabel/StepLabel">;
}
declare module "@material-ui/core/StepLabel/index.js" {
  declare module.exports: $Exports<"@material-ui/core/StepLabel">;
}
declare module "@material-ui/core/Stepper/Stepper.js" {
  declare module.exports: $Exports<"@material-ui/core/Stepper/Stepper">;
}
declare module "@material-ui/core/Stepper/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Stepper">;
}
declare module "@material-ui/core/StepIcion/StepPositionIcon.js" {
  declare module.exports: $Exports<
    "@material-ui/core/StepIcion/StepPositionIcon"
  >;
}
declare module "@material-ui/core/styles/colorManipulator.js" {
  declare module.exports: $Exports<"@material-ui/core/styles/colorManipulator">;
}
declare module "@material-ui/core/styles/createBreakpoints.js" {
  declare module.exports: $Exports<
    "@material-ui/core/styles/createBreakpoints"
  >;
}
declare module "@material-ui/core/styles/createGenerateClassName.js" {
  declare module.exports: $Exports<
    "@material-ui/core/styles/createGenerateClassName"
  >;
}
declare module "@material-ui/core/styles/createMixins.js" {
  declare module.exports: $Exports<"@material-ui/core/styles/createMixins">;
}
declare module "@material-ui/core/styles/createMuiTheme.js" {
  declare module.exports: $Exports<"@material-ui/core/styles/createMuiTheme">;
}
declare module "@material-ui/core/styles/createPalette.js" {
  declare module.exports: $Exports<"@material-ui/core/styles/createPalette">;
}
declare module "@material-ui/core/styles/createTypography.js" {
  declare module.exports: $Exports<"@material-ui/core/styles/createTypography">;
}
declare module "@material-ui/core/styles/getStylesCreator.js" {
  declare module.exports: $Exports<"@material-ui/core/styles/getStylesCreator">;
}
declare module "@material-ui/core/styles/index.js" {
  declare module.exports: $Exports<"@material-ui/core/styles">;
}
declare module "@material-ui/core/styles/MuiThemeProvider.js" {
  declare module.exports: $Exports<"@material-ui/core/styles/MuiThemeProvider">;
}
declare module "@material-ui/core/styles/shadows.js" {
  declare module.exports: $Exports<"@material-ui/core/styles/shadows">;
}
declare module "@material-ui/core/styles/shape.js" {
  declare module.exports: $Exports<"@material-ui/core/styles/shape">;
}
declare module "@material-ui/core/styles/spacing.js" {
  declare module.exports: $Exports<"@material-ui/core/styles/spacing">;
}
declare module "@material-ui/core/styles/themeListener.js" {
  declare module.exports: $Exports<"@material-ui/core/styles/themeListener">;
}
declare module "@material-ui/core/styles/transitions.js" {
  declare module.exports: $Exports<"@material-ui/core/styles/transitions">;
}
declare module "@material-ui/core/styles/withStyles.js" {
  declare module.exports: $Exports<"@material-ui/core/styles/withStyles">;
}
declare module "@material-ui/core/styles/withTheme.js" {
  declare module.exports: $Exports<"@material-ui/core/styles/withTheme">;
}
declare module "@material-ui/core/styles/zIndex.js" {
  declare module.exports: $Exports<"@material-ui/core/styles/zIndex">;
}
declare module "@material-ui/core/svg-icons/ArrowDownward.js" {
  declare module.exports: $Exports<"@material-ui/core/svg-icons/ArrowDownward">;
}
declare module "@material-ui/core/svg-icons/ArrowDropDown.js" {
  declare module.exports: $Exports<"@material-ui/core/svg-icons/ArrowDropDown">;
}
declare module "@material-ui/core/svg-icons/Cancel.js" {
  declare module.exports: $Exports<"@material-ui/core/svg-icons/Cancel">;
}
declare module "@material-ui/core/svg-icons/CheckBox.js" {
  declare module.exports: $Exports<"@material-ui/core/svg-icons/CheckBox">;
}
declare module "@material-ui/core/svg-icons/CheckBoxOutlineBlank.js" {
  declare module.exports: $Exports<
    "@material-ui/core/svg-icons/CheckBoxOutlineBlank"
  >;
}
declare module "@material-ui/core/svg-icons/CheckCircle.js" {
  declare module.exports: $Exports<"@material-ui/core/svg-icons/CheckCircle">;
}
declare module "@material-ui/core/svg-icons/IndeterminateCheckBox.js" {
  declare module.exports: $Exports<
    "@material-ui/core/svg-icons/IndeterminateCheckBox"
  >;
}
declare module "@material-ui/core/svg-icons/KeyboardArrowLeft.js" {
  declare module.exports: $Exports<
    "@material-ui/core/svg-icons/KeyboardArrowLeft"
  >;
}
declare module "@material-ui/core/svg-icons/KeyboardArrowRight.js" {
  declare module.exports: $Exports<
    "@material-ui/core/svg-icons/KeyboardArrowRight"
  >;
}
declare module "@material-ui/core/svg-icons/RadioButtonChecked.js" {
  declare module.exports: $Exports<
    "@material-ui/core/svg-icons/RadioButtonChecked"
  >;
}
declare module "@material-ui/core/svg-icons/RadioButtonUnchecked.js" {
  declare module.exports: $Exports<
    "@material-ui/core/svg-icons/RadioButtonUnchecked"
  >;
}
declare module "@material-ui/core/SvgIcon/index.js" {
  declare module.exports: $Exports<"@material-ui/core/SvgIcon">;
}
declare module "@material-ui/core/SvgIcon/SvgIcon.js" {
  declare module.exports: $Exports<"@material-ui/core/SvgIcon/SvgIcon">;
}
declare module "@material-ui/core/Switch/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Switch">;
}
declare module "@material-ui/core/Switch/Switch.js" {
  declare module.exports: $Exports<"@material-ui/core/Switch/Switch">;
}
declare module "@material-ui/core/Table/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Table">;
}
declare module "@material-ui/core/Table/Table.js" {
  declare module.exports: $Exports<"@material-ui/core/Table/Table">;
}
declare module "@material-ui/core/TableBody/index.js" {
  declare module.exports: $Exports<"@material-ui/core/TableBody">;
}
declare module "@material-ui/core/TableBody/TableBody.js" {
  declare module.exports: $Exports<"@material-ui/core/TableBody/TableBody">;
}
declare module "@material-ui/core/TableCell/index.js" {
  declare module.exports: $Exports<"@material-ui/core/TableCell">;
}
declare module "@material-ui/core/TableCell/TableCell.js" {
  declare module.exports: $Exports<"@material-ui/core/TableCell/TableCell">;
}
declare module "@material-ui/core/TableFooter/index.js" {
  declare module.exports: $Exports<"@material-ui/core/TableFooter">;
}
declare module "@material-ui/core/TableFooter/TableFooter.js" {
  declare module.exports: $Exports<"@material-ui/core/TableFooter/TableFooter">;
}
declare module "@material-ui/core/TableHead/index.js" {
  declare module.exports: $Exports<"@material-ui/core/TableHead">;
}
declare module "@material-ui/core/TableHead/TableHead.js" {
  declare module.exports: $Exports<"@material-ui/core/TableHead/TableHead">;
}
declare module "@material-ui/core/TablePagination/index.js" {
  declare module.exports: $Exports<"@material-ui/core/TablePagination">;
}
declare module "@material-ui/core/TablePagination/TablePagination.js" {
  declare module.exports: $Exports<
    "@material-ui/core/TablePagination/TablePagination"
  >;
}
declare module "@material-ui/core/TableRow/index.js" {
  declare module.exports: $Exports<"@material-ui/core/TableRow">;
}
declare module "@material-ui/core/TableRow/TableRow.js" {
  declare module.exports: $Exports<"@material-ui/core/TableRow/TableRow">;
}
declare module "@material-ui/core/TableSortLabel/index.js" {
  declare module.exports: $Exports<"@material-ui/core/TableSortLabel">;
}
declare module "@material-ui/core/Table/TableSortLabel.js" {
  declare module.exports: $Exports<
    "@material-ui/core/TableSortLabel/TableSortLabel"
  >;
}
declare module "@material-ui/core/Tab/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Tab">;
}
declare module "@material-ui/core/Tab/Tab.js" {
  declare module.exports: $Exports<"@material-ui/core/Tab/Tab">;
}
declare module "@material-ui/core/Tabs/TabIndicator.js" {
  declare module.exports: $Exports<"@material-ui/core/Tabs/TabIndicator">;
}
declare module "@material-ui/core/Tabs/Tabs.js" {
  declare module.exports: $Exports<"@material-ui/core/Tabs/Tabs">;
}
declare module "@material-ui/core/Tabs/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Tabs">;
}
declare module "@material-ui/core/Tabs/TabScrollButton.js" {
  declare module.exports: $Exports<"@material-ui/core/Tabs/TabScrollButton">;
}
declare module "@material-ui/core/TextField/index.js" {
  declare module.exports: $Exports<"@material-ui/core/TextField">;
}
declare module "@material-ui/core/TextField/TextField.js" {
  declare module.exports: $Exports<"@material-ui/core/TextField/TextField">;
}
declare module "@material-ui/core/Toolbar/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Toolbar">;
}
declare module "@material-ui/core/Toolbar/Toolbar.js" {
  declare module.exports: $Exports<"@material-ui/core/Toolbar/Toolbar">;
}
declare module "@material-ui/core/Tooltip/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Tooltip">;
}
declare module "@material-ui/core/Tooltip/Tooltip.js" {
  declare module.exports: $Exports<"@material-ui/core/Tooltip/Tooltip">;
}
declare module "@material-ui/core/Collapse/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Collapse">;
}
declare module "@material-ui/core/Collapse/Collapse.js" {
  declare module.exports: $Exports<"@material-ui/core/Collapse/Collapse">;
}
declare module "@material-ui/core/Fade/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Fade">;
}
declare module "@material-ui/core/Fade/Fade.js" {
  declare module.exports: $Exports<"@material-ui/core/Fade/Fade">;
}
declare module "@material-ui/core/Grow/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Grow">;
}
declare module "@material-ui/core/Grow/Grow.js" {
  declare module.exports: $Exports<"@material-ui/core/Grow/Grow">;
}
declare module "@material-ui/core/Slide/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Slide">;
}
declare module "@material-ui/core/Slide/Slide.js" {
  declare module.exports: $Exports<"@material-ui/core/Slide/Slide">;
}
declare module "@material-ui/core/Typography/index.js" {
  declare module.exports: $Exports<"@material-ui/core/Typography">;
}
declare module "@material-ui/core/Typography/Typography.js" {
  declare module.exports: $Exports<"@material-ui/core/Typography/Typography">;
}
declare module "@material-ui/core/utils/addEventListener.js" {
  declare module.exports: $Exports<"@material-ui/core/utils/addEventListener">;
}
declare module "@material-ui/core/ClickAwayListener/index.js" {
  declare module.exports: $Exports<"@material-ui/core/ClickAwayListener">;
}
declare module "@material-ui/core/ClickAwayListener/ClickAwayListener.js" {
  declare module.exports: $Exports<
    "@material-ui/core/ClickAwayListener/ClickAwayListener"
  >;
}
declare module "@material-ui/core/utils/exactProp.js" {
  declare module.exports: $Exports<"@material-ui/core/utils/exactProp">;
}
declare module "@material-ui/core/utils/helpers.js" {
  declare module.exports: $Exports<"@material-ui/core/utils/helpers">;
}
declare module "@material-ui/core/utils/keyboardFocus.js" {
  declare module.exports: $Exports<"@material-ui/core/utils/keyboardFocus">;
}
declare module "@material-ui/core/utils/manageAriaHidden.js" {
  declare module.exports: $Exports<"@material-ui/core/utils/manageAriaHidden">;
}
declare module "@material-ui/core/utils/reactHelpers.js" {
  declare module.exports: $Exports<"@material-ui/core/utils/reactHelpers">;
}
declare module "@material-ui/core/utils/requirePropFactory.js" {
  declare module.exports: $Exports<
    "@material-ui/core/utils/requirePropFactory"
  >;
}
declare module "@material-ui/core/withWidth/withWidth.js" {
  declare module.exports: $Exports<"@material-ui/core/withWidth/withWidth">;
}
declare module "@material-ui/core/withWidth/index.js" {
  declare module.exports: $Exports<"@material-ui/core/withWidth/withWidth">;
}

declare module "@material-ui/core" {
  declare export var AppBar: $Exports<"@material-ui/core/AppBar/AppBar">;
  declare export var Avatar: $Exports<"@material-ui/core/Avatar/Avatar">;
  declare export var Badge: $Exports<"@material-ui/core/Badge/Badge">;
  declare export var BottomNavigationAction: $Exports<
    "@material-ui/core/BottomNavigationAction/BottomNavigationAction"
  >;

  declare export var BottomNavigation: $Exports<
    "@material-ui/core/BottomNavigation/BottomNavigation"
  >;
  declare export var Button: $Exports<"@material-ui/core/Button/Button">;
  declare export var ButtonBase: $Exports<
    "@material-ui/core/ButtonBase/ButtonBase"
  >;
  declare export var Card: $Exports<"@material-ui/core/Card/Card">;
  declare export var CardActions: $Exports<
    "@material-ui/core/CardActions/CardActions"
  >;
  declare export var CardContent: $Exports<
    "@material-ui/core/CardContent/CardContent"
  >;
  declare export var CardHeader: $Exports<
    "@material-ui/core/CardHeader/CardHeader"
  >;
  declare export var CardMedia: $Exports<
    "@material-ui/core/CardMedia/CardMedia"
  >;
  declare export var Checkbox: $Exports<"@material-ui/core/Checkbox/Checkbox">;
  declare export var Chip: $Exports<"@material-ui/core/Chip/Chip">;
  declare export var ClickAwayListener: $Exports<
    "@material-ui/core/ClickAwayListener/ClickAwayListener"
  >;
  declare export var CssBaseline: $Exports<
    "@material-ui/core/CssBaseline/CssBaseline"
  >;

  declare export var Dialog: $Exports<"@material-ui/core/Dialog/Dialog">;
  declare export var DialogActions: $Exports<
    "@material-ui/core/DialogActions/DialogActions"
  >;
  declare export var DialogContent: $Exports<
    "@material-ui/core/DialogContent/DialogContent"
  >;
  declare export var DialogContentText: $Exports<
    "@material-ui/core/DialogContentText/DialogContentText"
  >;
  declare export var DialogTitle: $Exports<
    "@material-ui/core/DialogTitle/DialogTitle"
  >;
  declare export var withMobileDialog: $Exports<
    "@material-ui/core/withMobileDialog/withMobileDialog"
  >;
  declare export var Divider: $Exports<"@material-ui/core/Divider/Divider">;
  declare export var Drawer: $Exports<"@material-ui/core/Drawer/Drawer">;
  declare export var ExpansionPanel: $Exports<
    "@material-ui/core/ExpansionPanel/ExpansionPanel"
  >;
  declare export var ExpansionPanelActions: $Exports<
    "@material-ui/core/ExpansionPanelActions/ExpansionPanelActions"
  >;
  declare export var ExpansionPanelDetails: $Exports<
    "@material-ui/core/ExpansionPanelDetails/ExpansionPanelDetails"
  >;
  declare export var ExpansionPanelSummary: $Exports<
    "@material-ui/core/ExpansionPanelSummary/ExpansionPanelSummary"
  >;

  declare export var FormControl: $Exports<
    "@material-ui/core/FormControl/FormControl"
  >;
  declare export var FormGroup: $Exports<
    "@material-ui/core/FormGroup/FormGroup"
  >;
  declare export var FormLabel: $Exports<
    "@material-ui/core/FormLabel/FormLabel"
  >;
  declare export var FormHelperText: $Exports<
    "@material-ui/core/FormHelperText/FormHelperText"
  >;
  declare export var FormControlLabel: $Exports<
    "@material-ui/core/FormControlLabel/FormControlLabel"
  >;
  declare export var Hidden: $Exports<"@material-ui/core/Hidden/Hidden">;
  declare export var Icon: $Exports<"@material-ui/core/Icon/Icon">;
  declare export var IconButton: $Exports<
    "@material-ui/core/IconButton/IconButton"
  >;
  declare export var Input: $Exports<"@material-ui/core/Input/Input">;
  declare export var InputLabel: $Exports<
    "@material-ui/core/InputLabel/InputLabel"
  >;
  declare export var InputAdornment: $Exports<
    "@material-ui/core/InputAdornment/InputAdornment"
  >;
  declare export var Grid: $Exports<"@material-ui/core/Grid/Grid">;
  declare export var GridList: $Exports<"@material-ui/core/GridList/GridList">;
  declare export var GridListTile: $Exports<
    "@material-ui/core/GridListTile/GridListTile"
  >;
  declare export var GridListTileBar: $Exports<
    "@material-ui/core/GridListTileBar/GridListTileBar"
  >;
  declare export var List: $Exports<"@material-ui/core/List/List">;
  declare export var ListItem: $Exports<"@material-ui/core/ListItem/ListItem">;
  declare export var ListItemAvatar: $Exports<
    "@material-ui/core/ListItemAvatar/ListItemAvatar"
  >;
  declare export var ListItemIcon: $Exports<
    "@material-ui/core/ListItemIcon/ListItemIcon"
  >;
  declare export var ListItemSecondaryAction: $Exports<
    "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction"
  >;
  declare export var ListItemText: $Exports<
    "@material-ui/core/ListItemText/ListItemText"
  >;
  declare export var ListSubheader: $Exports<
    "@material-ui/core/ListSubheader/ListSubheader"
  >;
  declare export var Menu: $Exports<"@material-ui/core/Menu/Menu">;
  declare export var MenuItem: $Exports<"@material-ui/core/MenuItem/MenuItem">;
  declare export var MenuList: $Exports<"@material-ui/core/MenuList/MenuList">;
  declare export var MobileStepper: $Exports<
    "@material-ui/core/MobileStepper/MobileStepper"
  >;
  declare export var Modal: $Exports<"@material-ui/core/Modal/Modal">;
  declare export var Backdrop: $Exports<"@material-ui/core/Backdrop/Backdrop">;
  declare export var ModalManager: $Exports<
    "@material-ui/core/Modal/ModalManager"
  >;
  declare export var NativeSelect: $Exports<
    "@material-ui/core/NativeSelect/NativeSelect"
  >;
  declare export var Paper: $Exports<"@material-ui/core/Paper/Paper">;
  declare export var Popover: $Exports<"@material-ui/core/Popover/Popover">;
  declare export var Portal: $Exports<"@material-ui/core/Portal/Portal">;
  declare export var CircularProgress: $Exports<
    "@material-ui/core/CircularProgress/CircularProgress"
  >;
  declare export var LinearProgress: $Exports<
    "@material-ui/core/LinearProgress/LinearProgress"
  >;
  declare export var Radio: $Exports<"@material-ui/core/Radio/Radio">;
  declare export var RadioGroup: $Exports<
    "@material-ui/core/RadioGroup/RadioGroup"
  >;
  declare export var Select: $Exports<"@material-ui/core/Select/Select">;
  declare export var Snackbar: $Exports<"@material-ui/core/Snackbar/Snackbar">;
  declare export var SnackbarContent: $Exports<
    "@material-ui/core/SnackbarContent/SnackbarContent"
  >;
  declare export var Stepper: $Exports<"@material-ui/core/Stepper/Stepper">;
  declare export var Step: $Exports<"@material-ui/core/Step/Step">;
  declare export var StepButton: $Exports<
    "@material-ui/core/StepButton/StepButton"
  >;
  declare export var StepIcon: $Exports<"@material-ui/core/StepIcon/StepIcon">;
  declare export var StepContent: $Exports<
    "@material-ui/core/StepContent/StepContent"
  >;
  declare export var StepLabel: $Exports<
    "@material-ui/core/StepLabel/StepLabel"
  >;
  declare export var MuiThemeProvider: $Exports<
    "@material-ui/core/styles/MuiThemeProvider"
  >;
  declare export var withStyles: $Exports<
    "@material-ui/core/styles/withStyles"
  >;
  declare export var withTheme: $Exports<"@material-ui/core/styles/withTheme">;
  declare export var createMuiTheme: $Exports<
    "@material-ui/core/styles/createMuiTheme"
  >;
  declare export var jssPreset: $Exports<"@material-ui/core/styles/jssPreset">;
  declare export var SvgIcon: $Exports<"@material-ui/core/SvgIcon/SvgIcon">;
  declare export var SwipeableDrawer: $Exports<
    "@material-ui/core/SwipeableDrawer"
  >;
  declare export var Switch: $Exports<"@material-ui/core/Switch/Switch">;
  declare export var Table: $Exports<"@material-ui/core/Table/Table">;
  declare export var TableBody: $Exports<
    "@material-ui/core/TableBody/TableBody"
  >;
  declare export var TableCell: $Exports<
    "@material-ui/core/TableCell/TableCell"
  >;
  declare export var TableFooter: $Exports<
    "@material-ui/core/TableFooter/TableFooter"
  >;
  declare export var TableHead: $Exports<
    "@material-ui/core/TableHead/TableHead"
  >;
  declare export var TablePagination: $Exports<
    "@material-ui/core/TablePagination/TablePagination"
  >;
  declare export var TableRow: $Exports<"@material-ui/core/TableRow/TableRow">;
  declare export var TableSortLabel: $Exports<
    "@material-ui/core/TableSortLabel/TableSortLabel"
  >;
  declare export var Tabs: $Exports<"@material-ui/core/Tabs/Tabs">;
  declare export var Tab: $Exports<"@material-ui/core/Tab/Tab">;
  declare export var Typography: $Exports<
    "@material-ui/core/Typography/Typography"
  >;
  declare export var TextField: $Exports<
    "@material-ui/core/TextField/TextField"
  >;
  declare export var Toolbar: $Exports<"@material-ui/core/Toolbar/Toolbar">;
  declare export var Tooltip: $Exports<"@material-ui/core/Tooltip/Tooltip">;
  declare export var Slide: $Exports<"@material-ui/core/Slide/Slide">;
  declare export var Grow: $Exports<"@material-ui/core/Grow/Grow">;
  declare export var Fade: $Exports<"@material-ui/core/Fade/Fade">;
  declare export var Collapse: $Exports<"@material-ui/core/Collapse/Collapse">;
  declare export var Zoom: $Exports<"@material-ui/core/Zoom/Zoom">;

  declare export var withWidth: $Exports<
    "@material-ui/core/withWidth/withWidth"
  >;
  declare export var common: $Exports<"@material-ui/core/colors/common">;
  declare export var red: $Exports<"@material-ui/core/colors/red">;
  declare export var pink: $Exports<"@material-ui/core/colors/pink">;
  declare export var purple: $Exports<"@material-ui/core/colors/purple">;
  declare export var deepPurple: $Exports<
    "@material-ui/core/colors/deepPurple"
  >;
  declare export var indigo: $Exports<"@material-ui/core/colors/indigo">;
  declare export var blue: $Exports<"@material-ui/core/colors/blue">;
  declare export var lightBlue: $Exports<"@material-ui/core/colors/lightBlue">;
  declare export var cyan: $Exports<"@material-ui/core/colors/cyan">;
  declare export var teal: $Exports<"@material-ui/core/colors/teal">;
  declare export var green: $Exports<"@material-ui/core/colors/green">;
  declare export var lightGreen: $Exports<
    "@material-ui/core/colors/lightGreen"
  >;
  declare export var lime: $Exports<"@material-ui/core/colors/lime">;
  declare export var yellow: $Exports<"@material-ui/core/colors/yellow">;
  declare export var amber: $Exports<"@material-ui/core/colors/amber">;
  declare export var orange: $Exports<"@material-ui/core/colors/orange">;
  declare export var deepOrange: $Exports<
    "@material-ui/core/colors/deepOrange"
  >;
  declare export var brown: $Exports<"@material-ui/core/colors/brown">;
  declare export var grey: $Exports<"@material-ui/core/colors/grey">;
  declare export var blueGrey: $Exports<"@material-ui/core/colors/blueGrey">;

  import type {
    Theme as StylesTheme,
    WithStyles as StylesWithStyles,
    WithTheme as StylesWithTheme
  } from "@material-ui/core/styles";

  declare export type Theme = StylesTheme;
  declare export type WithStyles = StylesWithStyles;
  declare export type WithTheme = StylesWithTheme;
}
