import { HTMLDivAttributes } from '@material-ui/core/@@dom';

declare module '@material-ui/core/@@dom' {
  declare export type HTMLDivAttributes = {};
}

declare module '@material-ui/core/colors' {
  declare export { default as amber } from '@material-ui/core/colors/amber';
  declare export { default as blue } from '@material-ui/core/colors/blue';
  declare export {
    default as blueGrey,
  } from '@material-ui/core/colors/blueGrey';
  declare export { default as brown } from '@material-ui/core/colors/brown';
  declare export { default as common } from '@material-ui/core/colors/common';
  declare export { default as cyan } from '@material-ui/core/colors/cyan';
  declare export {
    default as deepOrange,
  } from '@material-ui/core/colors/deepOrange';
  declare export {
    default as deepPurple,
  } from '@material-ui/core/colors/deepPurple';
  declare export { default as green } from '@material-ui/core/colors/green';
  declare export { default as grey } from '@material-ui/core/colors/grey';
  declare export { default as indigo } from '@material-ui/core/colors/indigo';
  declare export {
    default as lightBlue,
  } from '@material-ui/core/colors/lightBlue';
  declare export {
    default as lightGreen,
  } from '@material-ui/core/colors/lightGreen';
  declare export { default as lime } from '@material-ui/core/colors/lime';
  declare export { default as orange } from '@material-ui/core/colors/orange';
  declare export { default as pink } from '@material-ui/core/colors/pink';
  declare export { default as purple } from '@material-ui/core/colors/purple';
  declare export { default as red } from '@material-ui/core/colors/red';
  declare export { default as teal } from '@material-ui/core/colors/teal';
  declare export { default as yellow } from '@material-ui/core/colors/yellow';
}
declare module '@material-ui/core/colors/amber' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/blue' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/blueGrey' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/brown' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/common' {
  declare export type CommonColors = {|
    black: string,
    white: string,
  |};

  declare export default CommonColors;
}
declare module '@material-ui/core/colors/cyan' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/deepOrange' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/deepPurple' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/green' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/grey' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/indigo' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/lightBlue' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/lightGreen' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/lime' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/orange' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/pink' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/purple' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/red' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/teal' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/yellow' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}

declare module '@material-ui/core/utils' {
  declare export * from '@material-ui/core/utils/helpers'
  declare export * from '@material-ui/core/utils/reactHelpers'
  declare export {
    default as requirePropFactory,
  } from '@material-ui/core/utils/requirePropFactory';
  declare export {
    default as ownerWindow,
  } from '@material-ui/core/utils/ownerWindow';
}

declare module '@material-ui/core/utils/helpers' {
  declare export type ChainedFunction =
    | ((...args: Array<any>) => mixed)
    | void
    | null;

  declare export function capitalize(str: string): string;

  declare export function contains(obj: {}, pred: {}): boolean;

  declare export function createChainedFunction(
    ...args: Array<ChainedFunction>
  ): (...args: any[]) => mixed;
}

declare module '@material-ui/core/utils/ownerWindow' {
  // https://github.com/facebook/flow/blob/e812492d9f642c0345e70407e77d16768a55be81/lib/bom.js#L36
  declare type $Window = any;

  declare export default (node: Node, fallback?: $Window) => $Window;
}
declare module '@material-ui/core/utils/reactHelpers' {
  declare export type NamedMuiComponent = React$ComponentType<any> & {
    muiName: string,
  };

  declare export type NamedMuiElement = {
    type: NamedMuiComponent,
    // TODO: need StandardProps
    props: any,
    key: string | number | null,
  };

  declare export function isMuiElement(
    element: any,
    muiNames: Array<string>
  ): boolean;

  declare export function setRef<T>(ref: React$Ref<T>, value: T | null): void;
}
declare module '@material-ui/core/utils/requirePropFactory' {
  declare export default (componentNameInError: string) => any;
}

declare module '@material-ui/core/styles/colorManipulator' {
  declare export type ColorFormat = 'rgb' | 'rgba' | 'hsl' | 'hsla';
  declare export type ColorObject = {
    type: ColorFormat,
    values: [number, number, number] | [number, number, number, number],
  };

  declare export function recomposeColor(color: ColorObject): string;
  declare export function convertHexToRGB(hex: string): string;
  declare export function rgbToHex(color: string): string;
  declare export function decomposeColor(color: string): ColorObject;
  declare export function getContrastRatio(
    foreground: string,
    background: string
  ): number;
  declare export function getLuminance(color: string): number;
  declare export function emphasize(
    color: string,
    coefficient?: number
  ): string;
  declare export function fade(color: string, value: number): string;
  declare export function darken(color: string, coefficient?: number): string;
  declare export function lighten(color: string, coefficient?: number): string;
}
declare module '@material-ui/core/styles/createBreakpoints' {
  declare export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  declare export type BreakpointValues = { [key: Breakpoint]: number };

  declare export type Breakpoints = {|
    keys: Breakpoint[],
    values: BreakpointValues,
    up: (key: Breakpoint | number) => string,
    down: (key: Breakpoint | number) => string,
    between: (start: Breakpoint, end: Breakpoint) => string,
    only: (key: Breakpoint) => string,
    width: (key: Breakpoint) => number,
  |};

  declare export type BreakpointsOptions = $Shape<{|
    ...Breakpoints,
    unit: string,
    step: number,
  |}>;

  declare export var keys: Array<Breakpoint>;

  declare export default (options: BreakpointsOptions) => Breakpoints;
}
declare module '@material-ui/core/styles/createSpacing' {
  declare export type SpacingArgument = number | string;

  declare export type Spacing = {
    (value1: SpacingArgument): number,
    (value1: SpacingArgument, value2: SpacingArgument): string,
    (
      value1: SpacingArgument,
      value2: SpacingArgument,
      value3: SpacingArgument
    ): string,
    (
      value1: SpacingArgument,
      value2: SpacingArgument,
      value3: SpacingArgument,
      value4: SpacingArgument
    ): string,
  };

  declare export type SpacingOptions = number | Spacing;

  declare export default (spacing?: SpacingOptions) => Spacing;
}
declare module '@material-ui/core/styles/zIndex' {
  declare type ZIndex = {
    mobileStepper: number,
    appBar: number,
    drawer: number,
    modal: number,
    snackbar: number,
    tooltip: number,
  };

  declare export type ZIndexOptions = $Shape<ZIndex>;
  declare export default ZIndex;
}
declare module '@material-ui/core/styles/transitions' {
  declare export type Easing = {|
    easeInOut: string,
    easeOut: string,
    easeIn: string,
    sharp: string,
  |};

  declare export var easing: Easing;

  declare export type Duration = {|
    shortest: number,
    shorter: number,
    short: number,
    standard: number,
    complex: number,
    enteringScreen: number,
    leavingScreen: number,
  |};

  declare export var duration: Duration;

  declare export function formatMs(milliseconds: number): string;

  declare export type Transitions = {|
    easing: Easing,
    duration: Duration,
    create(
      props: string | string[],
      options?: $Shape<{|
        duration: number | string,
        easing: string,
        delay: number | string,
      |}>
    ): string,
    getAutoHeightDuration(height: number): number,
  |};

  declare export type TransitionsOptions = {|
    easing?: $Shape<Easing>,
    duration?: $Shape<Duration>,
    create?: (
      props: string | string[],
      options?: $Shape<{
        duration: number | string,
        easing: string,
        delay: number | string,
      }>
    ) => string,
    getAutoHeightDuration?: (height: number) => number,
  |};

  declare export default Transitions;
}
declare module '@material-ui/core/styles/createMixins' {
  import type { Breakpoints } from '@material-ui/core/styles/createBreakpoints';
  import type { Spacing } from '@material-ui/core/styles/createSpacing';
  import type { CSSProperties } from '@material-ui/core/styles/withStyles';

  declare export type Mixins = {
    gutters: (styles?: CSSProperties) => CSSProperties,
    toolbar: CSSProperties,
  };

  declare export type MixinsOptions = $Shape<Mixins>;

  declare export default (
    breakpoints: Breakpoints,
    spacing: Spacing,
    mixins: MixinsOptions
  ) => Mixins;
}
declare module '@material-ui/core/styles/createMuiTheme' {
}
declare module '@material-ui/core/styles/createPalette' {
  import type { Color, PaletteType } from '@material-ui/core';
  import type { CommonColors } from '@material-ui/core/colors/common';

  declare export type ColorPartial = $Shape<Color>;

  declare export type TypeText = {|
    primary: string,
    secondary: string,
    disabled: string,
    hint: string,
  |};

  declare export type TypeAction = {|
    active: string,
    hover: string,
    hoverOpacity: number,
    selected: string,
    disabled: string,
    disabledBackground: string,
  |};

  declare export type TypeBackground = {|
    default: string,
    paper: string,
  |};

  declare export type TypeDivider = string;

  declare export type PaletteColorOptions =
    | SimplePaletteColorOptions
    | ColorPartial;

  declare export type SimplePaletteColorOptions = {|
    light?: string,
    main: string,
    dark?: string,
    contrastText?: string,
  |};

  declare export type PaletteColor = {|
    light: string,
    main: string,
    dark: string,
    contrastText: string,
  |};

  declare export type TypeObject = {|
    text: TypeText,
    action: TypeAction,
    divider: TypeDivider,
    background: TypeBackground,
  |};

  declare export var light: TypeObject;
  declare export var dark: TypeObject;

  declare export type Palette = {|
    common: CommonColors,
    type: PaletteType,
    contrastThreshold: number,
    tonalOffset: number,
    primary: PaletteColor,
    secondary: PaletteColor,
    error: PaletteColor,
    grey: Color,
    text: TypeText,
    divider: TypeDivider,
    action: TypeAction,
    background: TypeBackground,
    getContrastText: (background: string) => string,
    augmentColor: {
      (
        color: ColorPartial,
        mainShade?: number | string,
        lightShade?: number | string,
        darkShade?: number | string
      ): PaletteColor,
      (color: PaletteColorOptions): PaletteColor,
    },
  |};

  declare export type PartialTypeObject = $ObjMap<
    TypeObject,
    <V>(V) => $Shape<V>
  >;

  declare export type PaletteOptions = {|
    primary?: PaletteColorOptions,
    secondary?: PaletteColorOptions,
    error?: PaletteColorOptions,
    type?: PaletteType,
    tonalOffset?: number,
    contrastThreshold?: number,
    common?: $Shape<CommonColors>,
    grey?: ColorPartial,
    text?: $Shape<TypeText>,
    divider?: string,
    action?: $Shape<TypeAction>,
    background?: $Shape<TypeBackground>,
    getContrastText?: (background: string) => string,
  |};

  declare export default (palette: PaletteOptions) => Palette;
}
declare module '@material-ui/core/styles/createStyles' {
}
declare module '@material-ui/core/styles/createTypography' {
  import type { Palette } from '@material-ui/core/styles/createPalette';
  import type { CSSProperties } from '@material-ui/core/styles/withStyles';

  declare export type ThemeStyle =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline';

  declare export type FontStyle = {|
    fontSize: number,
    fontFamily: $ElementType<CSSProperties, 'fontFamily'>,
    fontWeightLight: $ElementType<CSSProperties, 'fontWeight'>,
    fontWeightRegular: $ElementType<CSSProperties, 'fontWeight'>,
    fontWeightMedium: $ElementType<CSSProperties, 'fontWeight'>,
  |};

  declare export type FontStyleOptions = $Shape<{|
    ...FontStyle,
    htmlFontSize: number,
    allVariants: CSSProperties,
  |}>;

  declare export type TypographyStyle = {|
    fontFamily: $ElementType<CSSProperties, 'fontFamily'>,
    fontSize: $ElementType<CSSProperties, 'fontSize'>,
    fontWeight: $ElementType<CSSProperties, 'fontWeight'>,
    color: $ElementType<CSSProperties, 'color'>,

    letterSpacing?: $ElementType<CSSProperties, 'letterSpacing'>,
    lineHeight?: $ElementType<CSSProperties, 'lineHeight'>,
    textTransform?: $ElementType<CSSProperties, 'textTransform'>,
  |};

  declare export type TypographyStyleOptions = $Shape<TypographyStyle>;

  declare export type TypographyUtils = {|
    pxToRem: (px: number) => string,
  |};

  declare export type Typography = {|
    [ThemeStyle]: TypographyStyle,
    ...FontStyle,
    ...TypographyUtils,
  |};

  declare export type TypographyOptions = {|
    [ThemeStyle]: TypographyStyleOptions,
    ...FontStyleOptions,
  |};

  declare export default (
    palette: Palette,
    typography: TypographyOptions | ((palette: Palette) => TypographyOptions)
  ) => Typography;
}
declare module '@material-ui/core/styles/makeStyles' {
}
declare module '@material-ui/core/styles/overrides' {
  // TODO
}
declare module '@material-ui/core/styles/props' {
  // TODO
}
declare module '@material-ui/core/styles/shadows' {
  declare export type Shadows = [
    'none',
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
  ];

  declare export default Shadows;
}
declare module '@material-ui/core/styles/shape' {
  declare export type Shape = {|
    borderRadius: number,
  |};

  declare export type ShapeOptions = $Shape<Shape>;

  declare export default Shape;
}
declare module '@material-ui/core/styles/useTheme' {
}
declare module '@material-ui/core/styles/withStyles' {
  declare export type ClassNameMap<Keys> = { [Keys]: string };
  declare export type StyledComponentProps<ClassesKeys> = {
    classes?: ClassNameMap<ClassesKeys>,
    innerRef?: React$Ref<any>,
  };
  // TODO
  declare type CSSProperties = {};
}
declare module '@material-ui/core/styles/withTheme' {
}
declare module '@material-ui/core/styles' {
}
declare module '@material-ui/core/Paper' {
  import type { StandardProps } from '@material-ui/core';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';

  declare export type PaperClassKey =
    | 'root'
    | 'rounded'
    | 'elevation0'
    | 'elevation1'
    | 'elevation2'
    | 'elevation3'
    | 'elevation4'
    | 'elevation5'
    | 'elevation6'
    | 'elevation7'
    | 'elevation8'
    | 'elevation9'
    | 'elevation10'
    | 'elevation11'
    | 'elevation12'
    | 'elevation13'
    | 'elevation14'
    | 'elevation15'
    | 'elevation16'
    | 'elevation17'
    | 'elevation18'
    | 'elevation19'
    | 'elevation20'
    | 'elevation21'
    | 'elevation22'
    | 'elevation23'
    | 'elevation24';

  declare export type PaperProps = StandardProps<
    HTMLDivAttributes,
    PaperClassKey,
    void
  > & {
    component?: React$ComponentType<HTMLDivAttributes>,
    elevation?: number,
    square?: boolean,
  };

  declare export default React$ComponentType<PaperProps>;
}
declare module '@material-ui/core/Paper/Paper' {
  declare export * from '@material-ui/core/Paper'
}

declare module '@material-ui/core/AppBar' {
  import type { StandardProps, PropTypes$Color } from '@material-ui/core';
  import type { PaperProps } from '@material-ui/core/Paper';

  declare export type AppBarClassKey =
    | 'root'
    | 'positionFixed'
    | 'positionAbsolute'
    | 'positionSticky'
    | 'positionStatic'
    | 'positionRelative'
    | 'colorDefault'
    | 'colorPrimary'
    | 'colorSecondary';

  declare export type AppBarProps = StandardProps<
    PaperProps,
    AppBarClassKey,
    void
  > & {
    color?: PropTypes$Color,
    position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative',
  };

  declare export default React$ComponentType<AppBarProps>;
}
declare module '@material-ui/core/AppBar/AppBar' {
  declare export * from '@material-ui/core/AppBar'
}

declare module '@material-ui/core/Badge' {
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';
  import type { StandardProps, PropTypes$Color } from '@material-ui/core';

  declare export type BadgeClassKey =
    | 'root'
    | 'badge'
    | 'colorPrimary'
    | 'colorSecondary'
    | 'invisible'
    | 'dot';

  declare export type BadgeProps = StandardProps<
    HTMLDivAttributes,
    BadgeClassKey,
    void
  > & {
    children: React$Node,
    badgeContent?: React$Node,
    color?: PropTypes$Color | 'error',
    component?: React$ComponentType<HTMLDivAttributes>,
    invisible?: boolean,
    max?: number,
    showZero?: boolean,
    variant?: 'standard' | 'dot',
  };

  declare export default React$ComponentType<BadgeProps>;
}
declare module '@material-ui/core/Badge/Badge' {
  declare export * from '@material-ui/core/Badge'
}

declare module '@material-ui/core/BottomNavigation' {
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';
  import type { StandardProps } from '@material-ui/core';

  declare export type BottomNavigationClassKey = 'root';

  declare export type BottomNavigationProps = StandardProps<
    HTMLDivAttributes,
    BottomNavigationClassKey,
    { onChange: any }
  > & {
    component?: React$ComponentType<HTMLDivAttributes>,
    children: React$Node,
    onChange?: (event: {}, value: any) => mixed,
    showLabels?: boolean,
    value?: any,
  };

  declare export default React$ComponentType<BottomNavigationProps>;
}
declare module '@material-ui/core/BottomNavigation/BottomNavigation' {
  declare export * from '@material-ui/core/BottomNavigation'
}

declare module '@material-ui/core' {
  import type { StyledComponentProps } from '@material-ui/core/styles/withStyles';
  // @TODO
  declare export type PaletteType = any;

  declare export type PropTypes$Alignment =
    | 'inherit'
    | 'left'
    | 'center'
    | 'right'
    | 'justify';
  declare export type PropTypes$Color =
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'default';
  declare export type PropTypes$Margin = 'none' | 'dense' | 'normal';

  declare export type StandardProps<
    BaseProps: {},
    ClassesKeys,
    Removals: ?{}
  > = $Diff<$Diff<BaseProps, { classes: any }>, Removals> &
    StyledComponentProps<ClassesKeys> & {
      className?: string,
      style?: { [string]: string | number },
    };

  declare export type Color = {|
    [50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900]: string,
    A100: string,
    A200: string,
    A400: string,
    A700: string,
  |};

  declare export { default as Paper } from '@material-ui/core/Paper';
  declare export { default as AppBar } from '@material-ui/core/AppBar';
  declare export { default as Badge } from '@material-ui/core/Badge';
  declare export {
    default as BottomNavigation,
  } from '@material-ui/core/BottomNavigation';
}
