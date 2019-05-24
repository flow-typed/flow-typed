declare module '@material-ui/core/@@utils' {
  // Utilities used in this definition:

  // Currently the flow.js do not support `Pick` operator
  declare export type $$Pick<NamesMap, Obj> = $Diff<Obj, $Diff<Obj, NamesMap>>;
}
declare module '@material-ui/core/@@JSS' {
  declare export type GenerateId = (rule: {}, sheet?: mixed) => string;

  declare export type StyleSheetFactoryOptions = {
    media?: string,
    meta?: string,
    generateId?: GenerateId,
    classNamePrefix?: string,
  };
}
declare module '@material-ui/core/@@csstype' {
  // I don't use `CSSStyleDeclaration` https://github.com/facebook/flow/blob/fa89aadb55ae9bb37c71e14d7274935903d501ce/lib/cssom.js#L71
  // Because all properties are described as `string`
  // But `JSS`(material-ui based on this) also support number: `{width: 10}`

  // Copied from https://unpkg.com/csstype@2.6.4/index.js.flow
  // I copied not all the properties but only took those that are needed by the <Box/> component

  declare type Globals = 'inherit' | 'initial' | 'revert' | 'unset';
  declare type ContentPosition =
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'start';
  declare type SelfPosition =
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'self-end'
    | 'self-start'
    | 'start';

  declare type ContentDistribution =
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'stretch';

  declare type AlignContentProperty =
    | Globals
    | ContentDistribution
    | ContentPosition
    | 'baseline'
    | 'normal'
    | string;
  declare type AlignItemsProperty =
    | Globals
    | SelfPosition
    | 'baseline'
    | 'normal'
    | 'stretch'
    | string;
  declare type AlignSelfProperty =
    | Globals
    | SelfPosition
    | 'auto'
    | 'baseline'
    | 'normal'
    | 'stretch'
    | string;

  declare type Color = 'currentcolor' | string;
  declare type LineStyle =
    | 'dashed'
    | 'dotted'
    | 'double'
    | 'groove'
    | 'hidden'
    | 'inset'
    | 'none'
    | 'outset'
    | 'ridge'
    | 'solid';
  declare type LineWidth<TLength> = TLength | 'medium' | 'thick' | 'thin';
  declare type BorderProperty<TLength> =
    | Globals
    | LineWidth<TLength>
    | LineStyle
    | Color
    | string;

  declare type BorderBottomProperty<TLength> =
    | Globals
    | LineWidth<TLength>
    | LineStyle
    | Color
    | string;
  declare type BorderColorProperty = Globals | Color | string;
  declare type BorderLeftProperty<TLength> =
    | Globals
    | LineWidth<TLength>
    | LineStyle
    | Color
    | string;

  declare type BorderRadiusProperty<TLength> = Globals | TLength | string;
  declare type BorderRightProperty<TLength> =
    | Globals
    | LineWidth<TLength>
    | LineStyle
    | Color
    | string;

  declare type BorderTopProperty<TLength> =
    | Globals
    | LineWidth<TLength>
    | LineStyle
    | Color
    | string;
  declare type BottomProperty<TLength> = Globals | TLength | 'auto' | string;
  declare type BoxShadowProperty = Globals | 'none' | string;
  declare type ColorProperty = Globals | Color;
  declare type CursorProperty = Globals | string;

  declare type DisplayInside =
    | '-ms-flexbox'
    | '-ms-grid'
    | '-webkit-flex'
    | 'flex'
    | 'flow'
    | 'flow-root'
    | 'grid'
    | 'ruby'
    | 'table';
  declare type DisplayOutside = 'block' | 'inline' | 'run-in';
  declare type DisplayInternal =
    | 'ruby-base'
    | 'ruby-base-container'
    | 'ruby-text'
    | 'ruby-text-container'
    | 'table-caption'
    | 'table-cell'
    | 'table-column'
    | 'table-column-group'
    | 'table-footer-group'
    | 'table-header-group'
    | 'table-row'
    | 'table-row-group';
  declare type DisplayProperty =
    | Globals
    | DisplayOutside
    | DisplayInside
    | DisplayInternal
    | 'contents'
    | 'list-item'
    | 'none'
    | string;
  declare type FlexProperty<TLength> =
    | Globals
    | TLength
    | 'auto'
    | 'available'
    | 'content'
    | 'fit-content'
    | 'max-content'
    | 'min-content'
    | 'none'
    | string
    | number;
  declare type FlexDirectionProperty =
    | Globals
    | 'column'
    | 'column-reverse'
    | 'row'
    | 'row-reverse';

  declare type GlobalsNumber = Globals | number;
  declare type FlexWrapProperty = Globals | 'nowrap' | 'wrap' | 'wrap-reverse';
  declare type FontFamilyProperty = Globals | string;

  declare type FontSizeProperty<TLength> =
    | Globals
    | TLength
    | 'larger'
    | 'smaller'
    | string;
  declare type FontWeightAbsolute = 'bold' | 'normal' | number;

  declare type FontWeightProperty =
    | Globals
    | FontWeightAbsolute
    | 'bolder'
    | 'lighter';
  declare type HeightProperty<TLength> = Globals | TLength | string;
  declare type JustifyContentProperty =
    | Globals
    | ContentDistribution
    | ContentPosition
    | 'left'
    | 'normal'
    | 'right'
    | string;
  declare type LeftProperty<TLength> = Globals | TLength | 'auto' | string;

  declare type MaxHeightProperty<TLength> = Globals | TLength | 'none' | string;
  declare type WidthProperty<TLength> = Globals | TLength | string;
  declare type TextAlignProperty =
    | Globals
    | 'center'
    | 'end'
    | 'justify'
    | 'left'
    | 'match-parent'
    | 'right'
    | 'start';

  declare type ZIndexProperty = Globals | 'auto' | number;
  declare type TopProperty<TLength> = Globals | TLength | 'auto' | string;

  declare type RightProperty<TLength> = Globals | TLength | 'auto' | string;
  declare type PositionProperty =
    | Globals
    | '-webkit-sticky'
    | 'absolute'
    | 'fixed'
    | 'relative'
    | 'static'
    | 'sticky';
  declare type MaxWidthProperty<TLength> = Globals | TLength | string;
  declare type OverflowProperty =
    | Globals
    | 'auto'
    | 'clip'
    | 'hidden'
    | 'scroll'
    | 'visible';

  declare type MinHeightProperty<TLength> = Globals | TLength | string;
  declare type MinWidthProperty<TLength> = Globals | TLength | string;

  declare export type Properties<TLength> = {
    alignContent?: AlignContentProperty,
    alignItems?: AlignItemsProperty,
    alignSelf?: AlignSelfProperty,
    border?: BorderProperty<TLength>,
    borderBottom?: BorderBottomProperty<TLength>,
    borderColor?: BorderColorProperty,
    borderLeft?: BorderLeftProperty<TLength>,
    borderRadius?: BorderRadiusProperty<TLength>,
    borderRight?: BorderRightProperty<TLength>,
    borderTop?: BorderTopProperty<TLength>,
    bottom?: BottomProperty<TLength>,
    boxShadow?: BoxShadowProperty | BoxShadowProperty[],
    color?: ColorProperty | ColorProperty[],
    cursor?: CursorProperty | CursorProperty[],
    display?: DisplayProperty | DisplayProperty[],
    flex?: FlexProperty<TLength> | FlexProperty<TLength>[],
    flexDirection?: FlexDirectionProperty,
    flexGrow?: GlobalsNumber,
    flexShrink?: GlobalsNumber,
    flexWrap?: FlexWrapProperty,
    fontFamily?: FontFamilyProperty,
    fontSize?: FontSizeProperty<TLength>,
    fontWeight?: FontWeightProperty,
    height?: HeightProperty<TLength> | HeightProperty<TLength>[],
    justifyContent?: JustifyContentProperty | JustifyContentProperty[],
    left?: LeftProperty<TLength> | LeftProperty<TLength>[],
    maxHeight?: MaxHeightProperty<TLength>,
    maxWidth?: MaxWidthProperty<TLength>,
    minHeight?: MinHeightProperty<TLength>,
    minWidth?: MinWidthProperty<TLength>,
    overflowX?: OverflowProperty,
    overflowY?: OverflowProperty,
    position?: PositionProperty,
    right?: RightProperty<TLength>,
    textAlign?: TextAlignProperty | TextAlignProperty[],
    top?: TopProperty<TLength> | TopProperty<TLength>[],
    width?: WidthProperty<TLength> | WidthProperty<TLength>[],
    zIndex?: ZIndexProperty | ZIndexProperty[],
  };
}
declare module '@material-ui/core/@@dom' {
  import type { Properties } from '@material-ui/core/@@csstype';

  // Material-UI use `JSS` witch support number and string for values, example: `{width: 10, height: '100%'}`
  declare export type CSS$Properties = Properties<string | number>;

  // At the moment there is no possibility to withdraw the React types for Html Element.
  // ... in the future will be replaced with exact types for a specific element (div, li, inout, ...)
  declare export type HTMLImageAttributes = {};
  declare export type HTMLDivAttributes = {};
  declare export type HTMLInputAttributes = {};
  declare export type HTMLSpanAttributes = {};
  declare export type HTMLLabelAttributes = {};
  declare export type HTMLUListAttributes = {};
  declare export type HTMLLIAttributes = {};
  declare export type HTMLElementAttributes = {};
  declare export type HTMLParagraphAttributes = {};
}
declare module '@material-ui/core/transitions/transition/@@react-transition-group/Transition' {
  // The version `2.9.1` based on this: //
  // https://github.com/mui-org/material-ui/blob/d0c7b070156b30908cee2b9c657469a3d6f406b3/packages/material-ui/package.json#L44

  // Types copied from: https://unpkg.com/@types/react-transition-group@2.9.1/Transition.d.ts

  declare export type EndHandler = (
    node: HTMLElement,
    done: () => void
  ) => mixed;
  declare export type EnterHandler = (
    node: HTMLElement,
    isAppearing: boolean
  ) => mixed;
  declare export type ExitHandler = (node: HTMLElement) => mixed;

  declare export var UNMOUNTED: 'unmounted';
  declare export var EXITED: 'exited';
  declare export var ENTERING: 'entering';
  declare export var ENTERED: 'entered';
  declare export var EXITING: 'exiting';

  declare export type TransitionActions = {
    appear?: boolean,
    enter?: boolean,
    exit?: boolean,
  };

  declare export type TransitionStatus =
    | typeof ENTERING
    | typeof ENTERED
    | typeof EXITING
    | typeof EXITED
    | typeof UNMOUNTED;

  declare export type TransitionChildren =
    | React$Node
    | ((status: TransitionStatus) => React$Node);

  declare export type TransitionProps = TransitionActions & {
    timeout: number | {| enter?: number, exit?: number |},
    children?: TransitionChildren,
    in?: boolean,
    mountOnEnter?: boolean,
    unmountOnExit?: boolean,
    addEndListener?: EndHandler,
    onEnter?: EnterHandler,
    onEntering?: EnterHandler,
    onEntered?: EnterHandler,
    onExit?: ExitHandler,
    onExiting?: ExitHandler,
    onExited?: ExitHandler,
  };
}

///////////////////////////////////////////////////////////////////////////////
declare module '@material-ui/core/flow-types' {
  import type {
    CSSProperties,
    StyledComponentProps,
  } from '@material-ui/core/styles/withStyles';

  // TODO
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

  declare export type CommonComponentProps = {
    className?: string,
    style?: CSSProperties,
  };

  declare export type Color = {|
    [50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900]: string,
    A100: string,
    A200: string,
    A400: string,
    A700: string,
  |};

  declare export type InheritStandardProps<
    BaseProps: {},
    Removals: ?{}
  > = $Diff<
    BaseProps,
    {
      ...$Exact<Removals>,
      innerRef: any,
      classes: any,
      className: any,
      style: any,
    }
  >;

  declare export type StandardProps<
    ClassesKeys: string,
    AdditionalProps: {},
    InheritedProps: {},
    Removals: ?{}
  > = $ReadOnly<
    InheritStandardProps<InheritedProps, Removals> &
      StyledComponentProps<ClassesKeys> &
      CommonComponentProps &
      AdditionalProps
  >;
}

declare module '@material-ui/core/OverridableComponent' {
  import type { StyledComponentProps } from '@material-ui/core/styles/withStyles';
  import type { CommonComponentProps } from '@material-ui/core/flow-types';
  /**
   * A component whose root component can be controlled via a `component` prop.
   *
   * Adjusts valid props based on the type of `component`
   */
  declare export interface OverridableTypeMap {
    props: *;
    defaultComponent: *;
    classKey: *;
  }

  declare export type OverridableComponent<M: OverridableTypeMap> = {
    (props: DefaultComponentProps<M>): React$Node,
    // TODO: readme issue 1
    // <Component: React$ElementType>(
    //   props: { component?: Component } & OverrideProps<M, Component>
    // ): React$Node,
  };

  /**
   * props of the component if `component={Component}` is used
   */
  declare export type OverrideProps<
    M: OverridableTypeMap,
    C: React$ElementType
  > = BaseProps<M> &
    $Diff<
      React$ElementConfig<C>,
      // next props collected from CommonProps<M>
      {
        className: any,
        style: any,
        classes: any,
        innerRef: any,
      }
    >;

  /**
   * props if `component={Component}` is NOT used
   */
  declare export type DefaultComponentProps<
    M: OverridableTypeMap
  > = BaseProps<M> &
    $Diff<
      React$ElementConfig<$ElementType<M, 'defaultComponent'>>,
      BaseProps<M>
    >;

  /**
   * props defined on the component (+ common material-ui props)
   */
  declare export type BaseProps<M: OverridableTypeMap> = $ElementType<
    M,
    'props'
  > &
    CommonProps<M>;

  /**
   * props that are valid for material-ui components
   */
  declare export type CommonProps<M: OverridableTypeMap> = StyledComponentProps<
    $ElementType<M, 'classKey'>
  > &
    CommonComponentProps;

  declare export type SimplifiedPropsOf<OC> = React$ElementConfig<OC>;
}
declare module '@material-ui/core/transitions' {
  import type {
    TransitionStatus as BaseTransitionStatus,
    TransitionProps as BaseTransitionProps,
    TransitionActions,
  } from '@material-ui/core/transitions/transition/@@react-transition-group/Transition';
  import type { CSSProperties } from '@material-ui/core/styles/withStyles';
  import type { $$Pick } from '@material-ui/core/@@utils';

  declare type _TransitionHandler = {
    onEnter: any,
    onEntering: any,
    onEntered: any,
    onExit: any,
    onExiting: any,
    onExited: any,
  };

  declare export type TransitionHandlerKeys = $Keys<_TransitionHandler>;

  declare export type TransitionHandlerProps = $$Pick<
    _TransitionHandler,
    BaseTransitionProps
  >;

  declare type _Transition = {
    in: any,
    mountOnEnter: any,
    unmountOnExit: any,
    timeout: any,
    addEndListener: any,
    ...$Exact<_TransitionHandler>,
  };

  declare export type TransitionKeys = $Keys<_Transition>;
  declare type $TransitionProps = $$Pick<_Transition, BaseTransitionProps>;

  declare export type TransitionStatus = BaseTransitionStatus;
  declare export type TransitionProps = TransitionActions & {
    ...$TransitionProps,
  } & {
    style?: CSSProperties,
  };
}
declare module '@material-ui/core/transitions/transition' {
  declare export * from '@material-ui/core/transitions'
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
  import type { Color } from '@material-ui/core/flow-types';
  declare export default Color;
}
declare module '@material-ui/core/colors/blue' {
  import type { Color } from '@material-ui/core/flow-types';
  declare export default Color;
}
declare module '@material-ui/core/colors/blueGrey' {
  import type { Color } from '@material-ui/core/flow-types';
  declare export default Color;
}
declare module '@material-ui/core/colors/brown' {
  import type { Color } from '@material-ui/core/flow-types';
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
  import type { Color } from '@material-ui/core/flow-types';
  declare export default Color;
}
declare module '@material-ui/core/colors/deepOrange' {
  import type { Color } from '@material-ui/core/flow-types';
  declare export default Color;
}
declare module '@material-ui/core/colors/deepPurple' {
  import type { Color } from '@material-ui/core/flow-types';
  declare export default Color;
}
declare module '@material-ui/core/colors/green' {
  import type { Color } from '@material-ui/core/flow-types';
  declare export default Color;
}
declare module '@material-ui/core/colors/grey' {
  import type { Color } from '@material-ui/core/flow-types';
  declare export default Color;
}
declare module '@material-ui/core/colors/indigo' {
  import type { Color } from '@material-ui/core/flow-types';
  declare export default Color;
}
declare module '@material-ui/core/colors/lightBlue' {
  import type { Color } from '@material-ui/core/flow-types';
  declare export default Color;
}
declare module '@material-ui/core/colors/lightGreen' {
  import type { Color } from '@material-ui/core/flow-types';
  declare export default Color;
}
declare module '@material-ui/core/colors/lime' {
  import type { Color } from '@material-ui/core/flow-types';
  declare export default Color;
}
declare module '@material-ui/core/colors/orange' {
  import type { Color } from '@material-ui/core/flow-types';
  declare export default Color;
}
declare module '@material-ui/core/colors/pink' {
  import type { Color } from '@material-ui/core/flow-types';
  declare export default Color;
}
declare module '@material-ui/core/colors/purple' {
  import type { Color } from '@material-ui/core/flow-types';
  declare export default Color;
}
declare module '@material-ui/core/colors/red' {
  import type { Color } from '@material-ui/core/flow-types';
  declare export default Color;
}
declare module '@material-ui/core/colors/teal' {
  import type { Color } from '@material-ui/core/flow-types';
  declare export default Color;
}
declare module '@material-ui/core/colors/yellow' {
  import type { Color } from '@material-ui/core/flow-types';
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
  ): (...args: Array<any>) => mixed;
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
  declare export type ZIndex = {
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
  import type {
    Breakpoints,
    BreakpointsOptions,
  } from '@material-ui/core/styles/createBreakpoints';
  import type {
    Mixins,
    MixinsOptions,
  } from '@material-ui/core/styles/createMixins';
  import type {
    Palette,
    PaletteOptions,
  } from '@material-ui/core/styles/createPalette';
  import type {
    Typography,
    TypographyOptions,
  } from '@material-ui/core/styles/createTypography';
  import type { Shadows } from '@material-ui/core/styles/shadows';
  import type { Shape, ShapeOptions } from '@material-ui/core/styles/shape';
  import type {
    Spacing,
    SpacingOptions,
  } from '@material-ui/core/styles/createSpacing';
  import type {
    Transitions,
    TransitionsOptions,
  } from '@material-ui/core/styles/transitions';
  import type { ZIndex, ZIndexOptions } from '@material-ui/core/styles/zIndex';
  import type { Overrides } from '@material-ui/core/styles/overrides';
  import type { ComponentsProps } from '@material-ui/core/styles/props';

  declare export type Direction = 'ltr' | 'rtl';

  declare export type ThemeOptions = {|
    shape?: ShapeOptions,
    breakpoints?: BreakpointsOptions,
    direction?: Direction,
    mixins?: MixinsOptions,
    overrides?: Overrides,
    palette?: PaletteOptions,
    props?: ComponentsProps,
    shadows?: Shadows,
    spacing?: SpacingOptions,
    transitions?: TransitionsOptions,
    typography?: TypographyOptions | ((palette: Palette) => TypographyOptions),
    zIndex?: ZIndexOptions,
  |};

  declare export type Theme = {|
    shape: Shape,
    breakpoints: Breakpoints,
    direction: Direction,
    mixins: Mixins,
    overrides?: Overrides,
    palette: Palette,
    props?: ComponentsProps,
    shadows: Shadows,
    spacing: Spacing,
    transitions: Transitions,
    typography: Typography,
    zIndex: ZIndex,
  |};

  declare export default (options?: ThemeOptions) => Theme;
}
declare module '@material-ui/core/styles/createPalette' {
  import type { Color, PaletteType } from '@material-ui/core/flow-types';
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
  import type { StyleRules } from '@material-ui/core/styles/withStyles';

  declare export default {
    <C: string>(styles: StyleRules<C>): StyleRules<C>,
  };
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
    color: $ElementType<CSSProperties, 'color'>,
    fontFamily: $ElementType<CSSProperties, 'fontFamily'>,
    fontSize: $ElementType<CSSProperties, 'fontSize'>,
    fontStyle: $ElementType<CSSProperties, 'fontStyle'>,
    fontWeight: $ElementType<CSSProperties, 'fontWeight'>,
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
  import type {
    ClassKeyOfStyles,
    ClassNameMap,
    PropsOfStyles,
    Styles,
    WithStylesOptions,
  } from '@material-ui/core/styles/withStyles';

  declare export type StylesHook<S: Styles<*, *>> = (
    props: PropsOfStyles<S>
  ) => ClassNameMap<ClassKeyOfStyles<S>>;

  declare export default {
    <Theme: mixed, Props: {}, ClassKey: string>(
      styles: Styles<Theme, Props, ClassKey>,
      options?: WithStylesOptions<Theme>
    ): StylesHook<Styles<Theme, Props, ClassKey>>,
  };
}
declare module '@material-ui/core/styles/overrides' {
  // TODO
  declare export type Overrides = {};
  declare export type ComponentNameToClassKey = {};
}
declare module '@material-ui/core/styles/props' {
  // TODO
  declare export type ComponentsProps = {};
  declare export type ComponentsPropsList = {};
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
  import type { Theme } from '@material-ui/core/styles/createMuiTheme';

  declare export default {
    <T: Theme>(): T,
  };
}
declare module '@material-ui/core/styles/withStyles' {
  import type { StyleSheetFactoryOptions } from '@material-ui/core/@@JSS';
  import type { CSS$Properties } from '@material-ui/core/@@dom';
  import type { Theme } from '@material-ui/core/styles/createMuiTheme';

  declare export type CSSProperties = CSS$Properties;

  declare export type StyleRules<ClassKey: string> = {
    [ClassKey]: CSSProperties,
  };

  declare export type StyleRulesCallback<ClassKey: string> = (
    theme: Theme
  ) => StyleRules<ClassKey>;

  declare export type Styles<ClassKey: string> =
    | StyleRules<ClassKey>
    | StyleRulesCallback<ClassKey>;

  declare type _PropsOfStyles<Props: {}, S: Styles<any, Props, any>> = Props;
  declare type _ClassKeyOfStyles<
    ClassKey: string,
    S: Styles<any, any, ClassKey>
  > = ClassKey;

  declare export type PropsOfStyles<S: Styles<*, *, *>> = _PropsOfStyles<*, S>;
  declare export type ClassKeyOfStyles<S: Styles<*, *, *>> = _ClassKeyOfStyles<
    *
  >;

  declare export type WithStylesOptions = StyleSheetFactoryOptions & {
    flip?: boolean,
    name?: string,
  };

  declare export type ClassNameMap<Keys: string> = { [Keys]: string };

  declare export type StyledComponentProps<ClassesKeys: string> = {
    classes?: ClassNameMap<ClassesKeys>,
    innerRef?: React$Ref<any>,
  };

  declare export default {
    <ClassKey: string, Options: WithStylesOptions & { withTheme: true }>(
      style: Styles<ClassKey>,
      options?: Options
    ): <Comp: React$ComponentType<*>>(
      Component: Comp
    ) => React$ComponentType<
      $Diff<React$ElementConfig<Comp>, { classes: any, theme: any }> &
        StyledComponentProps<ClassKey>
    >,
    <ClassKey: string, Options: WithStylesOptions & { withTheme?: false }>(
      style: Styles<ClassKey>,
      options?: Options
    ): <Comp: React$ComponentType<*>>(
      Component: Comp
    ) => React$ComponentType<
      $Diff<React$ElementConfig<Comp>, { classes: any }> &
        StyledComponentProps<ClassKey>
    >,
  };
}
declare module '@material-ui/core/styles/withTheme' {
  import type { Theme } from '@material-ui/core/styles/createMuiTheme';

  declare export type WithTheme = {
    theme: Theme,
  };

  declare export type ThemedComponentProps = { ...WithTheme } & {
    innerRef?: React$Ref<any>,
  };

  declare export default {
    <Comp: React$ComponentType<*>>(
      Component: Comp
    ): React$ComponentType<
      $Diff<React$ElementConfig<Comp>, WithTheme> & ThemedComponentProps
    >,
  };
}
declare module '@material-ui/core/styles/responsiveFontSizes' {
  import type { Theme } from '@material-ui/core/styles/createMuiTheme';
  import type { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
  import type { ThemeStyle } from '@material-ui/core/styles/createTypography';

  declare export type ResponsiveFontSizesOptions = {|
    breakpoints?: Breakpoint[],
    disableAlign?: boolean,
    factor?: number,
    variants?: ThemeStyle,
  |};

  declare export default (
    theme: Theme,
    options?: ResponsiveFontSizesOptions
  ) => Theme;
}
declare module '@material-ui/core/styles/MuiThemeProvider' {
  // TODO: export type { ThemeProvider } from '@material-ui/styles';
  declare type ThemeProvider = React$ComponentType<any>;

  declare export default ThemeProvider;
}
declare module '@material-ui/core/styles' {
  declare export * from '@material-ui/core/styles/colorManipulator'
  declare export {
    default as createMuiTheme,
    Theme,
    Direction,
  } from '@material-ui/core/styles/createMuiTheme';
  declare export {
    default as createPalette,
    PaletteColorOptions,
    SimplePaletteColorOptions,
  } from '@material-ui/core/styles/createPalette';
  declare export {
    default as createStyles,
  } from '@material-ui/core/styles/createStyles';
  declare export {
    TypographyStyle,
  } from '@material-ui/core/styles/createTypography';
  declare export {
    default as makeStyles,
  } from '@material-ui/core/styles/makeStyles';
  declare export { ComponentsPropsList } from '@material-ui/core/styles/props';
  declare export * from '@material-ui/core/styles/transitions'
  declare export {
    default as useTheme,
  } from '@material-ui/core/styles/useTheme';
  declare export {
    default as withStyles,
    StyleRules,
    StyleRulesCallback,
    StyledComponentProps,
  } from '@material-ui/core/styles/withStyles';
  declare export {
    default as withTheme,
    WithTheme,
  } from '@material-ui/core/styles/withTheme';
  declare export {
    default as MuiThemeProvider,
  } from '@material-ui/core/styles/MuiThemeProvider';
  declare export {
    default as responsiveFontSizes,
  } from '@material-ui/core/styles/responsiveFontSizes';
}

declare module '@material-ui/core/Paper' {
  import type { StandardProps } from '@material-ui/core/flow-types';
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
    PaperClassKey,
    {
      component?: React$ElementType,
      elevation?: number,
      square?: boolean,
    },
    HTMLDivAttributes,
    void
  >;

  declare export default React$ComponentType<PaperProps>;
}
declare module '@material-ui/core/Paper/Paper' {
  declare export * from '@material-ui/core/Paper'
}

declare module '@material-ui/core/AppBar' {
  import type {
    StandardProps,
    PropTypes$Color,
  } from '@material-ui/core/flow-types';
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
    AppBarClassKey,
    {
      color?: PropTypes$Color,
      position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative',
    },
    PaperProps,
    void
  >;

  declare export default React$ComponentType<AppBarProps>;
}
declare module '@material-ui/core/AppBar/AppBar' {
  declare export * from '@material-ui/core/AppBar'
}

declare module '@material-ui/core/Avatar' {
  import type { HTMLImageAttributes } from '@material-ui/core/@@dom';
  import type {
    OverridableComponent,
    SimplifiedPropsOf,
  } from '@material-ui/core/OverridableComponent';

  declare export type AvatarClassKey = 'root' | 'colorDefault' | 'img';

  declare type Avatar = OverridableComponent<{
    props: {
      alt?: string,
      childrenClassName?: string,
      imgProps?: HTMLImageAttributes,
      sizes?: string,
      src?: string,
      srcSet?: string,
    },
    defaultComponent: 'div',
    classKey: AvatarClassKey,
  }>;

  declare export type AvatarProps = SimplifiedPropsOf<Avatar>;

  declare export default Avatar;
}
declare module '@material-ui/core/Avatar/Avatar' {
  declare export * from '@material-ui/core/Avatar'
}

declare module '@material-ui/core/Backdrop' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';
  import type { FadeProps } from '@material-ui/core/Fade';
  import type { TransitionProps } from '@material-ui/core/transitions';

  declare export type BackdropClassKey = 'root' | 'invisible';

  declare export type BackdropProps = StandardProps<
    BackdropClassKey,
    {
      open: boolean,
      invisible?: boolean,
      onClick?: ({}) => mixed,
      transitionDuration?: $ElementType<TransitionProps, 'timeout'>,
    },
    HTMLDivAttributes & { ...FadeProps },
    void
  >;

  declare export default React$ComponentType<BackdropProps>;
}
declare module '@material-ui/core/Backdrop/Backdrop' {
  declare export * from '@material-ui/core/Backdrop'
}

declare module '@material-ui/core/Badge' {
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';
  import type {
    StandardProps,
    PropTypes$Color,
  } from '@material-ui/core/flow-types';

  declare export type BadgeClassKey =
    | 'root'
    | 'badge'
    | 'colorPrimary'
    | 'colorSecondary'
    | 'colorError'
    | 'invisible'
    | 'dot';

  declare export type BadgeProps = StandardProps<
    BadgeClassKey,
    {
      children: React$Node,
      badgeContent?: React$Node,
      color?: PropTypes$Color | 'error',
      component?: React$ElementType,
      invisible?: boolean,
      max?: number,
      showZero?: boolean,
      variant?: 'standard' | 'dot',
    },
    HTMLDivAttributes,
    void
  >;

  declare export default React$ComponentType<BadgeProps>;
}
declare module '@material-ui/core/Badge/Badge' {
  declare export * from '@material-ui/core/Badge'
}

declare module '@material-ui/core/BottomNavigation' {
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';
  import type { StandardProps } from '@material-ui/core/flow-types';

  declare export type BottomNavigationClassKey = 'root';

  declare export type BottomNavigationProps = StandardProps<
    BottomNavigationClassKey,
    {
      component?: React$ElementType,
      children: React$Node,
      onChange?: (event: {}, value: any) => mixed,
      showLabels?: boolean,
      value?: any,
    },
    HTMLDivAttributes,
    { onChange: any }
  >;

  declare export default React$ComponentType<BottomNavigationProps>;
}
declare module '@material-ui/core/BottomNavigation/BottomNavigation' {
  declare export * from '@material-ui/core/BottomNavigation'
}

declare module '@material-ui/core/Box' {
  import type { $$Pick } from '@material-ui/core/@@utils';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';
  import type { CSSProperties } from '@material-ui/core/styles/withStyles';

  declare type PropsByCSSProperties = {
    ...$$Pick<
      {
        alignContent: any,
        alignItems: any,
        alignSelf: any,
        border: any,
        borderBottom: any,
        borderColor: any,
        borderLeft: any,
        borderRadius: any,
        borderRight: any,
        borderTop: any,
        bottom: any,
        boxShadow: any,
        color: any,
        cursor: any,
        display: any,
        flex: any,
        flexDirection: any,
        flexGrow: any,
        flexShrink: any,
        flexWrap: any,
        fontFamily: any,
        fontSize: any,
        fontWeight: any,
        height: any,
        justifyContent: any,
        left: any,
        maxHeight: any,
        maxWidth: any,
        minHeight: any,
        minWidth: any,
        overflowX: any,
        overflowY: any,
        position: any,
        right: any,
        textAlign: any,
        top: any,
        width: any,
        zIndex: any,
      },
      CSSProperties
    >,
  };

  declare export type BoxProps = PropsByCSSProperties &
    HTMLDivAttributes & {
      component?: React$ElementType,
      // styled API
      clone?: boolean,
      // Box specific props
      bgcolor?: string,
      displayPrint?: string,
      m?: string | number,
      mb?: string | number,
      ml?: string | number,
      mr?: string | number,
      mt?: string | number,
      mx?: string | number,
      my?: string | number,
      order?: string | number,
      p?: string | number,
      pb?: string | number,
      pl?: string | number,
      pr?: string | number,
      pt?: string | number,
      px?: string | number,
      py?: string | number,
    };

  declare export default React$ComponentType<BoxProps>;
}
declare module '@material-ui/core/Box/Box' {
  declare export * from '@material-ui/core/Box'
}

declare module '@material-ui/core/Breadcrumbs' {
  import type {
    OverridableComponent,
    SimplifiedPropsOf,
  } from '@material-ui/core/OverridableComponent';

  declare export type BreadcrumbsClassKey = 'root' | 'ol' | 'separator';

  declare type Breadcrumbs = OverridableComponent<{
    props: {
      itemsAfterCollapse?: boolean,
      itemsBeforeCollapse?: boolean,
      maxItems?: number,
      separator?: React$Node,
    },
    defaultComponent: 'nav',
    classKey: BreadcrumbsClassKey,
  }>;

  declare export type BreadcrumbsProps = SimplifiedPropsOf<Breadcrumbs>;

  declare export default Breadcrumbs;
}
declare module '@material-ui/core/Breadcrumbs/Breadcrumbs' {
  declare export * from '@material-ui/core/Breadcrumbs'
}

declare module '@material-ui/core/Card' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { PaperProps } from '@material-ui/core/Paper';

  declare export type CardClassKey = 'root';

  declare export type CardProps = StandardProps<
    CardClassKey,
    {
      raised?: boolean,
    },
    PaperProps,
    void
  >;

  declare export default React$ComponentType<CardProps>;
}
declare module '@material-ui/core/Card/Card' {
  declare export * from '@material-ui/core/Card'
}

declare module '@material-ui/core/CardActions' {
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';
  import type { StandardProps } from '@material-ui/core/flow-types';

  declare export type CardActionsClassKey = 'root' | 'spacing';

  declare export type CardActionsProps = StandardProps<
    CardActionsClassKey,
    {
      disableSpacing?: boolean,
    },
    HTMLDivAttributes,
    void
  >;

  declare export default React$ComponentType<CardActionsProps>;
}
declare module '@material-ui/core/CardActions/CardActions' {
  declare export * from '@material-ui/core/CardActions'
}

declare module '@material-ui/core/CardContent' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { PaperProps } from '@material-ui/core/Paper';

  declare export type CardContentClassKey = 'root';

  declare export type CardContentProps = StandardProps<
    CardContentClassKey,
    {
      component?: React$ElementType,
    },
    PaperProps,
    void
  >;

  declare export default React$ComponentType<CardContentProps>;
}
declare module '@material-ui/core/CardContent/CardContent' {
  declare export * from '@material-ui/core/CardContent'
}

declare module '@material-ui/core/CircularProgress' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';
  declare export type CircularProgressClassKey =
    | 'root'
    | 'static'
    | 'indeterminate'
    | 'colorPrimary'
    | 'colorSecondary'
    | 'svg'
    | 'circle'
    | 'circleStatic'
    | 'circleIndeterminate'
    | 'circleDisableShrink';

  declare export type CircularProgressProps = StandardProps<
    CircularProgressClassKey,
    {
      color?: 'primary' | 'secondary' | 'inherit',
      disableShrink?: boolean,
      size?: number | string,
      thickness?: number,
      value?: number,
      variant?: 'determinate' | 'indeterminate' | 'static',
    },
    HTMLDivAttributes,
    void
  >;

  declare export default React$ComponentType<CircularProgressProps>;
}
declare module '@material-ui/core/CircularProgress/CircularProgress' {
  declare export * from '@material-ui/core/CircularProgress'
}

declare module '@material-ui/core/ClickAwayListener' {
  declare export type ClickAwayListenerProps = {|
    children: React$Node,
    onClickAway: (event: {} /*SyntheticMouseEvent<Document>*/) => mixed,
    mouseEvent?: 'onClick' | 'onMouseDown' | 'onMouseUp' | false,
    touchEvent?: 'onTouchStart' | 'onTouchEnd' | false,
  |};

  declare export default React$ComponentType<ClickAwayListenerProps>;
}
declare module '@material-ui/core/ClickAwayListener/ClickAwayListener' {
  declare export * from '@material-ui/core/ClickAwayListener'
}

declare module '@material-ui/core/Container' {
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';
  import type { StandardProps } from '@material-ui/core/flow-types';

  declare export type ContainerClassKey =
    | 'root'
    | 'fixed'
    | 'maxWidthXs'
    | 'maxWidthSm'
    | 'maxWidthMd'
    | 'maxWidthLg'
    | 'maxWidthXl';

  declare export type ContainerProps = StandardProps<
    ContainerClassKey,
    {
      component?: React$ElementType,
      fixed?: boolean,
      maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false,
    },
    HTMLDivAttributes,
    void
  >;

  declare export default React$ComponentType<ContainerProps>;
}
declare module '@material-ui/core/Container/Container' {
  declare export * from '@material-ui/core/Container'
}

declare module '@material-ui/core/CssBaseline' {
  declare export type CssBaselineClassKey = '@global';

  declare export type CssBaselineProps = {|
    children?: React$Node,
  |};

  declare export default React$ComponentType<CssBaselineProps>;
}
declare module '@material-ui/core/CssBaseline/CssBaseline' {
  declare export * from '@material-ui/core/CssBaseline'
}

declare module '@material-ui/core/DialogActions' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';
  declare export type DialogActionsClassKey = 'root' | 'spacing';

  declare export type DialogActionsProps = StandardProps<
    DialogActionsClassKey,
    {
      disableSpacing?: boolean,
    },
    HTMLDivAttributes,
    void
  >;

  declare export default React$ComponentType<DialogActionsProps>;
}
declare module '@material-ui/core/DialogActions/DialogActions' {
  declare export * from '@material-ui/core/DialogActions'
}

declare module '@material-ui/core/DialogContent' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';
  declare export type DialogContentClassKey = 'root';

  declare export type DialogContentProps = StandardProps<
    DialogContentClassKey,
    {
      dividers?: boolean,
    },
    HTMLDivAttributes,
    void
  >;

  declare export default React$ComponentType<DialogContentProps>;
}
declare module '@material-ui/core/DialogContent/DialogContent' {
  declare export * from '@material-ui/core/DialogContent'
}

declare module '@material-ui/core/DialogTitle' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';
  declare export type DialogTitleClassKey = 'root';

  declare export type DialogTitleProps = StandardProps<
    DialogTitleClassKey,
    {
      disableTypography?: boolean,
    },
    HTMLDivAttributes,
    void
  >;

  declare export default React$ComponentType<DialogTitleProps>;
}
declare module '@material-ui/core/DialogTitle/DialogTitle' {
  declare export * from '@material-ui/core/DialogTitle'
}

declare module '@material-ui/core/ExpansionPanelActions' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';

  declare export type ExpansionPanelActionsClassKey = 'root' | 'spacing';

  declare export type ExpansionPanelActionsProps = StandardProps<
    ExpansionPanelActionsClassKey,
    {},
    HTMLDivAttributes,
    void
  >;

  declare export default React$ComponentType<ExpansionPanelActionsProps>;
}
declare module '@material-ui/core/ExpansionPanelActions/ExpansionPanelActions' {
  declare export * from '@material-ui/core/ExpansionPanelActions'
}

declare module '@material-ui/core/ExpansionPanelDetails' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';

  declare export type ExpansionPanelDetailsClassKey = 'root' | 'spacing';

  declare export type ExpansionPanelDetailsProps = StandardProps<
    ExpansionPanelDetailsClassKey,
    {},
    HTMLDivAttributes,
    void
  >;

  declare export default React$ComponentType<ExpansionPanelDetailsProps>;
}
declare module '@material-ui/core/ExpansionPanelDetails/ExpansionPanelDetails' {
  declare export * from '@material-ui/core/ExpansionPanelDetails'
}

declare module '@material-ui/core/Fade' {
  import type { Theme } from '@material-ui/core/styles/createMuiTheme';
  import type { TransitionProps } from '@material-ui/core/transitions/transition';

  declare export type FadeProps = TransitionProps & {
    ref?: React$Ref<mixed>,
    theme?: Theme,
  };

  declare export default React$ComponentType<FadeProps>;
}
declare module '@material-ui/core/Fade/Fade' {
  declare export * from '@material-ui/core/Fade'
}

declare module '@material-ui/core/ButtonBase/TouchRipple' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';

  declare export type TouchRippleClassKey =
    | 'root'
    | 'ripple'
    | 'rippleVisible'
    | 'ripplePulsate'
    | 'child'
    | 'childLeaving'
    | 'childPulsate';

  declare export type TouchRippleProps = StandardProps<
    TouchRippleClassKey,
    { center?: boolean },
    HTMLDivAttributes,
    void
  >;

  declare export default React$ComponentType<TouchRippleProps>;
}
declare module '@material-ui/core/ButtonBase' {
  import type { TouchRippleProps } from '@material-ui/core/ButtonBase/TouchRipple';
  import type {
    OverridableComponent,
    OverridableTypeMap,
  } from '@material-ui/core/OverridableComponent';

  declare export type ButtonBaseActions = {
    focusVisible(): void,
  };

  declare export type ButtonBaseClassKey = 'root' | 'disabled' | 'focusVisible';

  declare export type ButtonBaseOwnProps = {
    action?: (actions: ButtonBaseActions) => mixed,
    buttonRef?: React$Ref<any>,
    centerRipple?: boolean,
    disabled?: boolean,
    disableRipple?: boolean,
    disableTouchRipple?: boolean,
    focusRipple?: boolean,
    focusVisibleClassName?: string,
    onFocusVisible?: ({}) => mixed,
    TouchRippleProps?: $Shape<TouchRippleProps>,
    // TODO: remove when fix `ExtendButtonBase`
    href?: string,
  };

  /*
   TODO: readme issue 1
  ((props: { href: string } & OverrideProps<ExtendButtonBaseTypeMap<M>, 'a'>) => React$Node);
  */
  declare export type ExtendButtonBase<
    M: OverridableTypeMap
  > = OverridableComponent<{
    props: ButtonBaseOwnProps & $ElementType<M, 'props'>,
    defaultComponent: $ElementType<M, 'defaultComponent'>,
    classKey: $ElementType<M, 'classKey'>,
  }>;

  declare type ButtonBase = OverridableComponent<{
    props: ButtonBaseOwnProps,
    defaultComponent: 'button',
    classKey: ButtonBaseClassKey,
  }>;

  declare export type ButtonBaseProps = ButtonBaseOwnProps;

  declare export default ButtonBase;
}
declare module '@material-ui/core/ButtonBase/ButtonBase' {
  declare export * from '@material-ui/core/ButtonBase'
}

declare module '@material-ui/core/Button' {
  import type { OverrideProps } from '@material-ui/core/OverridableComponent';
  import type {
    ButtonBaseOwnProps,
    ExtendButtonBase,
  } from '@material-ui/core/ButtonBase';
  import type { PropTypes$Color } from '@material-ui/core/flow-types';

  declare export type ButtonClassKey =
    | 'root'
    | 'label'
    | 'text'
    | 'textPrimary'
    | 'textSecondary'
    | 'outlined'
    | 'outlinedPrimary'
    | 'outlinedSecondary'
    | 'contained'
    | 'containedPrimary'
    | 'containedSecondary'
    | 'focusVisible'
    | 'disabled'
    | 'colorInherit'
    | 'sizeSmall'
    | 'sizeLarge'
    | 'fullWidth';

  declare type OwnProps = {
    color?: PropTypes$Color,
    fullWidth?: boolean,
    // TODO: `ButtonBaseOwnProps` already include `href` attribute, but as hack
    // href?: string,
    size?: 'small' | 'medium' | 'large',
    variant?: 'text' | 'outlined' | 'contained',
  };

  declare export type ButtonProps<
    DefaultComponent: React$ElementType,
    Props: {}
  > = OverrideProps<
    {
      props: Props & OwnProps & ButtonBaseOwnProps,
      defaultComponent: DefaultComponent,
      classKey: ButtonClassKey,
    },
    DefaultComponent
  >;

  declare export default ExtendButtonBase<{
    props: OwnProps,
    defaultComponent: 'button',
    classKey: ButtonClassKey,
  }>;
}
declare module '@material-ui/core/Button/Button' {
  declare export * from '@material-ui/core/Button'
}

declare module '@material-ui/core/BottomNavigationAction' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { ButtonBaseProps } from '@material-ui/core/ButtonBase';

  declare export type BottomNavigationActionClassKey =
    | 'root'
    | 'selected'
    | 'iconOnly'
    | 'wrapper'
    | 'label';

  declare export type BottomNavigationActionProps = StandardProps<
    BottomNavigationActionClassKey,
    {
      icon?: string | React$Element<any>,
      label?: React$Node,
      onChange?: (event: {}, value: mixed) => mixed,
      onClick?: ({}) => mixed,
      selected?: boolean,
      showLabel?: boolean,
      value?: mixed,
    },
    ButtonBaseProps,
    { onChange: any }
  >;

  declare export default React$ComponentType<BottomNavigationActionProps>;
}
declare module '@material-ui/core/BottomNavigationAction/BottomNavigationAction' {
  declare export * from '@material-ui/core/BottomNavigationAction'
}

declare module '@material-ui/core/CardActionArea' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { ButtonBaseProps } from '@material-ui/core/ButtonBase';

  declare export type CardActionAreaClassKey =
    | 'root'
    | 'focusVisible'
    | 'focusHighlight';

  declare export type CardActionAreaProps = StandardProps<
    CardActionAreaClassKey,
    {
      focusVisibleClassName?: string,
    },
    ButtonBaseProps,
    void
  >;

  declare export default React$ComponentType<CardActionAreaProps>;
}
declare module '@material-ui/core/CardActionArea/CardActionArea' {
  declare export * from '@material-ui/core/CardActionArea'
}

declare module '@material-ui/core/Typography' {
  import type {
    StandardProps,
    PropTypes$Alignment,
  } from '@material-ui/core/flow-types';
  import type { HTMLElementAttributes } from '@material-ui/core/@@dom';
  import type { ThemeStyle } from '@material-ui/core/styles/createTypography';

  declare export type TypographyClassKey =
    | 'root'
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
    | 'overline'
    | 'srOnly'
    | 'alignLeft'
    | 'alignCenter'
    | 'alignRight'
    | 'alignJustify'
    | 'noWrap'
    | 'gutterBottom'
    | 'paragraph'
    | 'colorInherit'
    | 'colorSecondary'
    | 'colorTextSecondary'
    | 'colorError'
    | 'displayInline'
    | 'displayBlock';

  declare export type TypographyStyle = ThemeStyle | 'srOnly';

  declare export type TypographyProps = StandardProps<
    TypographyClassKey,
    {
      align?: PropTypes$Alignment,
      color?:
        | 'initial'
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'textPrimary'
        | 'textSecondary'
        | 'error',
      component?: React$ElementType,
      display?: 'initial' | 'block' | 'inline',
      gutterBottom?: boolean,
      noWrap?: boolean,
      paragraph?: boolean,
      variant?: TypographyStyle | 'inherit',
      variantMapping?: { [TypographyStyle]: string },
    },
    HTMLElementAttributes,
    void
  >;

  declare export default React$ComponentType<TypographyProps>;
}
declare module '@material-ui/core/Typography/Typography' {
  declare export * from '@material-ui/core/Typography'
}

declare module '@material-ui/core/CardHeader' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';
  import type { TypographyProps } from '@material-ui/core/Typography';

  declare export type CardHeaderClassKey =
    | 'root'
    | 'avatar'
    | 'action'
    | 'content'
    | 'title'
    | 'subheader';

  declare export type CardHeaderProps = StandardProps<
    CardHeaderClassKey,
    {
      action?: React$Node,
      avatar?: React$Node,
      component?: React$ElementType,
      disableTypography?: boolean,
      subheader?: React$Node,
      subheaderTypographyProps?: $Shape<TypographyProps>,
      title?: React$Node,
      titleTypographyProps?: $Shape<TypographyProps>,
    },
    HTMLDivAttributes,
    { title: any }
  >;

  declare export default React$ComponentType<CardHeaderProps>;
}
declare module '@material-ui/core/CardHeader/CardHeader' {
  declare export * from '@material-ui/core/CardHeader'
}

declare module '@material-ui/core/CardMedia' {
  import type {
    OverridableComponent,
    SimplifiedPropsOf,
  } from '@material-ui/core/OverridableComponent';

  declare export type CardMediaClassKey = 'root' | 'media';

  declare type CardMedia = OverridableComponent<{
    props: {
      image?: string,
      src?: string,
    },
    defaultComponent: 'div',
    classKey: CardMediaClassKey,
  }>;

  declare export type CardMediaProps = SimplifiedPropsOf<CardMedia>;

  declare export default CardMedia;
}
declare module '@material-ui/core/CardMedia/CardMedia' {
  declare export * from '@material-ui/core/CardMedia'
}

declare module '@material-ui/core/Chip' {
  import type { PropTypes$Color } from '@material-ui/core/flow-types';
  import type {
    OverridableComponent,
    SimplifiedPropsOf,
  } from '@material-ui/core/OverridableComponent';

  declare export type ChipClassKey =
    | 'root'
    | 'colorPrimary'
    | 'colorSecondary'
    | 'clickable'
    | 'clickableColorPrimary'
    | 'clickableColorSecondary'
    | 'deletable'
    | 'deletableColorPrimary'
    | 'deletableColorSecondary'
    | 'outlined'
    | 'outlinedPrimary'
    | 'outlinedSecondary'
    | 'avatar'
    | 'avatarColorPrimary'
    | 'avatarColorSecondary'
    | 'avatarChildren'
    | 'icon'
    | 'iconColorPrimary'
    | 'iconColorSecondary'
    | 'label'
    | 'deleteIcon'
    | 'deleteIconColorPrimary'
    | 'deleteIconColorSecondary'
    | 'deleteIconOutlinedColorPrimary'
    | 'deleteIconOutlinedColorSecondary';

  declare type Chip = OverridableComponent<{
    props: {
      avatar?: React$Element<any>,
      clickable?: boolean,
      color?: PropTypes$Color,
      deleteIcon?: React$Element<any>,
      icon?: React$Element<any>,
      label?: React$Node,
      onDelete?: mixed => mixed,
      variant?: 'default' | 'outlined',
    },
    defaultComponent: 'div',
    classKey: ChipClassKey,
  }>;

  declare export type ChipProps = SimplifiedPropsOf<Chip>;

  declare export default Chip;
}
declare module '@material-ui/core/Chip/Chip' {
  declare export * from '@material-ui/core/Chip'
}

declare module '@material-ui/core/Collapse' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { Theme } from '@material-ui/core/styles/createMuiTheme';
  import type { TransitionProps } from '@material-ui/core/transitions/transition';

  declare export type CollapseClassKey =
    | 'container'
    | 'entered'
    | 'wrapper'
    | 'wrapperInner';

  declare export type CollapseProps = StandardProps<
    CollapseClassKey,
    {
      children?: React$Node,
      component?: React$ElementType,
      collapsedHeight?: string,
      theme?: Theme,
      timeout?: $ElementType<TransitionProps, 'timeout'> | 'auto',
    },
    TransitionProps,
    { timeout: any }
  >;

  declare export default React$ComponentType<CollapseProps>;
}
declare module '@material-ui/core/Collapse/Collapse' {
  declare export * from '@material-ui/core/Collapse'
}

declare module '@material-ui/core/Portal' {
  declare export type PortalProps<Container: React$ElementType> = {|
    children: React$Element<any>,
    container?: React$ElementRef<Container> | null,
    disablePortal?: boolean,
    onRendered?: () => mixed,
  |};

  declare export default class Portal<
    Container: React$ElementType
  > extends React$Component<PortalProps<Container>> {}
}
declare module '@material-ui/core/Portal/Portal' {
  declare export * from '@material-ui/core/Portal'
}

declare module '@material-ui/core/Modal' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';
  import type { BackdropProps } from '@material-ui/core/Backdrop';
  import type { PortalProps } from '@material-ui/core/Portal';

  declare export type ModalClassKey = 'root' | 'hidden';

  declare export type ModalProps<Container: React$ElementType> = StandardProps<
    ModalClassKey,
    {
      children: React$Element<any>,
      open: boolean,

      BackdropComponent?: React$ElementType,
      BackdropProps?: $Shape<BackdropProps>,
      closeAfterTransition?: boolean,

      // Copied from: container?: $ElementType<PortalProps<Container>, 'container'>,
      container?: React$ElementRef<Container> | null,
      disableAutoFocus?: boolean,
      disableBackdropClick?: boolean,
      disableEnforceFocus?: boolean,
      disableEscapeKeyDown?: boolean,
      disablePortal?: $ElementType<PortalProps<Container>, 'disablePortal'>,
      disableRestoreFocus?: boolean,
      hideBackdrop?: boolean,
      keepMounted?: boolean,
      onBackdropClick?: () => mixed,
      onClose?: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => mixed,
      onEscapeKeyDown?: () => mixed,
      onRendered?: $ElementType<PortalProps<Container>, 'onRendered'>,
    },
    HTMLDivAttributes,
    { children: any }
  >;

  declare export default class Modal<
    Container: React$ElementType
  > extends React$Component<ModalProps<Container>> {}
}
declare module '@material-ui/core/Modal/Modal' {
  declare export * from '@material-ui/core/Modal'
}

declare module '@material-ui/core/Dialog' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { ModalProps } from '@material-ui/core/Modal';
  import type { PaperProps } from '@material-ui/core/Paper';
  import type {
    TransitionHandlerProps,
    TransitionProps,
  } from '@material-ui/core/transitions/transition';

  declare export type DialogClassKey =
    | 'root'
    | 'scrollPaper'
    | 'scrollBody'
    | 'container'
    | 'paper'
    | 'paperScrollPaper'
    | 'paperScrollBody'
    | 'paperWidthFalse'
    | 'paperWidthXs'
    | 'paperWidthSm'
    | 'paperWidthMd'
    | 'paperWidthLg'
    | 'paperWidthXl'
    | 'paperFullWidth'
    | 'paperFullScreen';

  declare export type DialogProps<Container: React$ElementType> = StandardProps<
    DialogClassKey,
    {
      children: React$Node,
      fullScreen?: boolean,
      fullWidth?: boolean,
      maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false,
      PaperComponent?: React$ElementType,
      PaperProps?: $Shape<PaperProps>,
      scroll?: 'body' | 'paper',
      TransitionComponent?: React$ElementType,
      transitionDuration?: $ElementType<TransitionProps, 'timeout'>,
      TransitionProps?: TransitionProps,
    },
    ModalProps<Container> & $Shape<TransitionHandlerProps>,
    { children: any }
  >;

  declare export default class Dialog<
    Container: React$ElementType
  > extends React$Component<DialogProps<Container>> {}
}
declare module '@material-ui/core/Dialog/Dialog' {
  declare export * from '@material-ui/core/Dialog'
}

declare module '@material-ui/core/DialogContentText' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { TypographyProps } from '@material-ui/core/Typography';

  declare export type DialogContentTextClassKey = 'root';
  declare export type DialogContentTextProps = StandardProps<
    DialogContentTextClassKey,
    {},
    TypographyProps,
    void
  >;
  declare export default React$ComponentType<DialogContentTextProps>;
}
declare module '@material-ui/core/DialogContentText/DialogContentText' {
  declare export * from '@material-ui/core/DialogContentText'
}

declare module '@material-ui/core/Divider' {
  import type {
    OverridableComponent,
    SimplifiedPropsOf,
  } from '@material-ui/core/OverridableComponent';

  declare export type DividerClassKey =
    | 'root'
    | 'absolute'
    | 'inset'
    | 'light'
    | 'middle';

  declare type Divider = OverridableComponent<{
    props: {
      absolute?: boolean,
      light?: boolean,
      variant?: 'fullWidth' | 'inset' | 'middle',
    },
    defaultComponent: 'hr',
    classKey: DividerClassKey,
  }>;

  declare export type DividerProps = SimplifiedPropsOf<Divider>;

  declare export default Divider;
}
declare module '@material-ui/core/Divider/Divider' {
  declare export * from '@material-ui/core/Divider'
}

declare module '@material-ui/core/Slide' {
  import type { Theme } from '@material-ui/core/styles/createMuiTheme';
  import type { TransitionProps } from '@material-ui/core/transitions/transition';

  declare export type SlideProps = TransitionProps & {
    direction: 'left' | 'right' | 'up' | 'down',
    ref?: React$Ref<mixed>,
    theme?: Theme,
  };

  declare export default React$ComponentType<SlideProps>;
}
declare module '@material-ui/core/Slide/Slide' {
  declare export * from '@material-ui/core/Slide'
}

declare module '@material-ui/core/Drawer' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { ModalProps } from '@material-ui/core/Modal';
  import type { SlideProps } from '@material-ui/core/Slide';
  import type { PaperProps } from '@material-ui/core/Paper';
  import type { Theme } from '@material-ui/core/styles/createMuiTheme';
  import type {
    TransitionHandlerProps,
    TransitionProps,
  } from '@material-ui/core/transitions/transition';

  declare export type DrawerClassKey =
    | 'root'
    | 'docked'
    | 'paper'
    | 'paperAnchorLeft'
    | 'paperAnchorRight'
    | 'paperAnchorTop'
    | 'paperAnchorBottom'
    | 'paperAnchorDockedLeft'
    | 'paperAnchorDockedTop'
    | 'paperAnchorDockedRight'
    | 'paperAnchorDockedBottom'
    | 'modal';
  declare export type DrawerProps<Container: React$ElementType> = StandardProps<
    DrawerClassKey,
    {
      anchor?: 'left' | 'top' | 'right' | 'bottom',
      children?: React$Node,
      elevation?: number,
      ModalProps?: $Shape<ModalProps<Container>>,
      open?: boolean,
      PaperProps?: $Shape<PaperProps>,
      SlideProps?: $Shape<SlideProps>,
      theme?: Theme,
      transitionDuration?: $ElementType<TransitionProps, 'timeout'>,
      variant?: 'permanent' | 'persistent' | 'temporary',
    },
    ModalProps<Container> & $Shape<TransitionHandlerProps>,
    {
      open: any,
      children: any,
    }
  >;
  declare export default class Modal<
    Container: React$ElementType
  > extends React$Component<DrawerProps<Container>> {}
}
declare module '@material-ui/core/Drawer/Drawer' {
  declare export * from '@material-ui/core/Drawer'
}

declare module '@material-ui/core/ExpansionPanel' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { PaperProps } from '@material-ui/core/Paper';
  import type { TransitionProps } from '@material-ui/core/transitions/transition';

  declare export type ExpansionPanelClassKey =
    | 'root'
    | 'rounded'
    | 'expanded'
    | 'disabled';

  declare export type ExpansionPanelProps = StandardProps<
    ExpansionPanelClassKey,
    {
      defaultExpanded?: boolean,
      disabled?: boolean,
      expanded?: boolean,
      onChange?: (event: {}, expanded: boolean) => mixed,
      TransitionComponent?: React$ElementType,
      TransitionProps?: TransitionProps,
    },
    PaperProps,
    { onChange: any }
  >;

  declare export default React$ComponentType<ExpansionPanelProps>;
}
declare module '@material-ui/core/ExpansionPanel/ExpansionPanel' {
  declare export * from '@material-ui/core/ExpansionPanel'
}

declare module '@material-ui/core/Grid' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';

  declare export type GridItemsAlignment =
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'stretch'
    | 'baseline';

  declare export type GridContentAlignment =
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';

  declare export type GridDirection =
    | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse';

  declare export type GridSpacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

  declare export type GridJustification =
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';

  declare export type GridWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

  declare export type GridSize =
    | 'auto'
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

  declare export type GridClassKey =
    | 'container'
    | 'item'
    | 'direction-xs-column'
    | 'direction-xs-column-reverse'
    | 'direction-xs-row-reverse'
    | 'wrap-xs-nowrap'
    | 'wrap-xs-wrap-reverse'
    | 'align-items-xs-center'
    | 'align-items-xs-flex-start'
    | 'align-items-xs-flex-end'
    | 'align-items-xs-baseline'
    | 'align-content-xs-center'
    | 'align-content-xs-flex-start'
    | 'align-content-xs-flex-end'
    | 'align-content-xs-space-between'
    | 'align-content-xs-space-around'
    | 'justify-xs-center'
    | 'justify-xs-flex-end'
    | 'justify-xs-space-between'
    | 'justify-xs-space-around'
    | 'spacing-xs-1'
    | 'spacing-xs-2'
    | 'spacing-xs-3'
    | 'spacing-xs-4'
    | 'spacing-xs-5'
    | 'spacing-xs-6'
    | 'spacing-xs-7'
    | 'spacing-xs-8'
    | 'spacing-xs-9'
    | 'spacing-xs-10'
    | 'grid-xs-auto'
    | 'grid-xs-true'
    | 'grid-xs-1'
    | 'grid-xs-2'
    | 'grid-xs-3'
    | 'grid-xs-4'
    | 'grid-xs-5'
    | 'grid-xs-6'
    | 'grid-xs-7'
    | 'grid-xs-8'
    | 'grid-xs-9'
    | 'grid-xs-10'
    | 'grid-xs-11'
    | 'grid-xs-12';

  declare type BreakpointProps = {
    xs?: boolean | GridSize,
    sm?: boolean | GridSize,
    md?: boolean | GridSize,
    lg?: boolean | GridSize,
    xl?: boolean | GridSize,
  };

  declare export type GridProps = StandardProps<
    GridClassKey,
    {
      alignContent?: GridContentAlignment,
      alignItems?: GridItemsAlignment,
      component?: React$ElementType,
      container?: boolean,
      direction?: GridDirection,
      item?: boolean,
      justify?: GridJustification,
      spacing?: GridSpacing,
      wrap?: GridWrap,
      zeroMinWidth?: boolean,
    },
    BreakpointProps & HTMLDivAttributes,
    void
  >;

  declare export default React$ComponentType<GridProps>;
}
declare module '@material-ui/core/Grid/Grid' {
  declare export * from '@material-ui/core/Grid'
}

declare module '@material-ui/core/GridList' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { HTMLUListAttributes } from '@material-ui/core/@@dom';

  declare export type GridListClassKey = 'root';

  declare export type GridListProps = StandardProps<
    GridListClassKey,
    {
      component?: React$ElementType,
      cellHeight?: number | 'auto',
      cols?: number,
      spacing?: number,
    },
    HTMLUListAttributes,
    void
  >;

  declare export default React$ComponentType<GridListProps>;
}
declare module '@material-ui/core/GridList/GridList' {
  declare export * from '@material-ui/core/GridList'
}

declare module '@material-ui/core/GridListTile' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { HTMLLIAttributes } from '@material-ui/core/@@dom';

  declare export type GridListTileClassKey =
    | 'root'
    | 'tile'
    | 'imgFullHeight'
    | 'imgFullWidth';

  declare export type GridListTileProps = StandardProps<
    GridListTileClassKey,
    {
      component?: React$ElementType,
      cols?: number,
      rows?: number,
    },
    HTMLLIAttributes,
    void
  >;

  declare export default React$ComponentType<GridListTileProps>;
}
declare module '@material-ui/core/GridListTile/GridListTile' {
  declare export * from '@material-ui/core/GridListTile'
}

declare module '@material-ui/core/GridListTileBar' {
  import type { StandardProps } from '@material-ui/core/flow-types';

  declare export type GridListTileBarClassKey =
    | 'root'
    | 'titlePositionBottom'
    | 'titlePositionTop'
    | 'rootSubtitle'
    | 'titleWrap'
    | 'titleWrapActionPosLeft'
    | 'titleWrapActionPosRight'
    | 'title'
    | 'subtitle'
    | 'actionIcon'
    | 'actionIconActionPosLeft';

  declare export type GridListTileBarProps = StandardProps<
    GridListTileBarClassKey,
    {
      actionIcon?: React$Node,
      subtitle?: React$Node,
      title?: React$Node,
      actionPosition?: 'left' | 'right',
      titlePosition?: 'top' | 'bottom',
    },
    {},
    void
  >;

  declare export default React$ComponentType<GridListTileBarProps>;
}
declare module '@material-ui/core/GridListTileBar/GridListTileBar' {
  declare export * from '@material-ui/core/GridListTileBar'
}

declare module '@material-ui/core/Grow' {
  import type { Theme } from '@material-ui/core/styles/createMuiTheme';
  import type { TransitionProps } from '@material-ui/core/transitions/transition';

  declare export type GrowProps = {
    ref?: React$Ref<any>,
    theme?: Theme,
    timeout?: $ElementType<TransitionProps, 'timeout'> | 'auto',
  } & $Diff<TransitionProps, { timeout: any }>;

  declare export default React$ComponentType<GrowProps>;
}
declare module '@material-ui/core/Grow/Grow' {
  declare export * from '@material-ui/core/Grow'
}

declare module '@material-ui/core/Hidden' {
  import type { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

  declare export type HiddenProps = {|
    implementation?: 'js' | 'css',
    initialWidth?: Breakpoint,
    only?: Breakpoint | Array<Breakpoint>,
    lgDown?: boolean,
    lgUp?: boolean,
    mdDown?: boolean,
    mdUp?: boolean,
    smDown?: boolean,
    smUp?: boolean,
    xlDown?: boolean,
    xlUp?: boolean,
    xsDown?: boolean,
    xsUp?: boolean,
  |};

  declare export default React$ComponentType<HiddenProps>;
}
declare module '@material-ui/core/Hidden/Hidden' {
  declare export * from '@material-ui/core/Hidden'
}

declare module '@material-ui/core/NoSsr' {
  declare export type NoSsrProps = {|
    defer?: boolean,
    fallback?: React$Node,
    children: React$Node,
  |};

  declare export default React$ComponentType<NoSsrProps>;
}
declare module '@material-ui/core/NoSsr/NoSsr' {
  declare export * from '@material-ui/core/NoSsr'
}

declare module '@material-ui/core/InputBase' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { HTMLUListAttributes } from '@material-ui/core/@@dom';

  declare export type InputBaseClassKey =
    | 'root'
    | 'formControl'
    | 'focused'
    | 'disabled'
    | 'adornedEnd'
    | 'adornedStart'
    | 'error'
    | 'marginDense'
    | 'multiline'
    | 'fullWidth'
    | 'input'
    | 'inputMarginDense'
    | 'inputMultiline'
    | 'inputTypeSearch'
    | 'inputAdornedStart'
    | 'inputAdornedEnd';

  declare export type InputBaseComponentProps = {};
  declare export type InputBaseProps = StandardProps<
    InputBaseClassKey,
    {
      autoComplete?: string,
      autoFocus?: boolean,
      defaultValue?: mixed,
      disabled?: boolean,
      endAdornment?: React$Node,
      error?: boolean,
      fullWidth?: boolean,
      id?: string,
      inputComponent?: React$ElementType,
      inputProps?: InputBaseComponentProps,
      inputRef?: React$Ref<any>,
      margin?: 'dense' | 'none',
      multiline?: boolean,
      name?: string,
      placeholder?: string,
      readOnly?: boolean,
      required?: boolean,
      renderPrefix?: (state: {|
        disabled?: boolean,
        error?: boolean,
        filled?: boolean,
        focused?: boolean,
        margin?: 'dense' | 'none' | 'normal',
        required?: boolean,
        startAdornment?: React$Node,
      |}) => React$Node,
      rows?: string | number,
      rowsMax?: string | number,
      startAdornment?: React$Node,
      type?: string,
      value?: mixed,
      onFilled?: () => mixed,
    },
    HTMLUListAttributes,
    void
  >;

  declare export default React$ComponentType<InputBaseProps>;
}
declare module '@material-ui/core/InputBase/InputBase' {
  declare export * from '@material-ui/core/InputBase'
}

declare module '@material-ui/core/Input' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { InputBaseProps } from '@material-ui/core/InputBase';

  declare export type InputClassKey =
    | 'root'
    | 'formControl'
    | 'focused'
    | 'disabled'
    | 'underline'
    | 'error'
    | 'multiline'
    | 'fullWidth'
    | 'input'
    | 'inputMarginDense'
    | 'inputMultiline'
    | 'inputTypeSearch';

  declare export type InputProps = StandardProps<
    InputClassKey,
    {
      disableUnderline?: boolean,
    },
    InputBaseProps,
    void
  >;

  declare export default React$ComponentType<InputProps>;
}
declare module '@material-ui/core/Input/Input' {
  declare export * from '@material-ui/core/Input'
}

declare module '@material-ui/core/NativeSelect' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { InputProps } from '@material-ui/core/Input';

  declare export type NativeSelectClassKey =
    | 'root'
    | 'select'
    | 'selectMenu'
    | 'disabled'
    | 'icon'
    | 'filled'
    | 'outlined';

  declare type _InputProps = $Diff<
    InputProps,
    {
      value: any,
      onChange: any,
    }
  >;

  declare export type NativeSelectProps = StandardProps<
    NativeSelectClassKey,
    {
      variant?: 'standard' | 'outlined' | 'filled',
      IconComponent?: React$ElementType,
      input?: React$Node,
      value?: mixed,
      onChange?: (event: {}, child: React$Node) => mixed,
    },
    _InputProps,
    void
  >;

  declare export default React$ComponentType<NativeSelectProps>;
}
declare module '@material-ui/core/NativeSelect/NativeSelect' {
  declare export * from '@material-ui/core/NativeSelect'
}

declare module '@material-ui/core/Icon' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { PropTypes$Color } from '@material-ui/core/flow-types';
  import type { HTMLSpanAttributes } from '@material-ui/core/@@dom';

  declare export type IconClassKey =
    | 'root'
    | 'colorSecondary'
    | 'colorAction'
    | 'colorDisabled'
    | 'colorError'
    | 'colorPrimary'
    | 'fontSizeInherit'
    | 'fontSizeSmall'
    | 'fontSizeLarge';

  declare export type IconProps = StandardProps<
    IconClassKey,
    {
      component?: React$ElementType,
      fontSize?: 'inherit' | 'default' | 'small' | 'large',
      color?: PropTypes$Color | 'action' | 'disabled' | 'error',
    },
    HTMLSpanAttributes,
    void
  >;

  declare export default React$ComponentType<IconProps>;
}
declare module '@material-ui/core/Icon/Icon' {
  declare export * from '@material-ui/core/Icon'
}

declare module '@material-ui/core/InputAdornment' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';

  declare export type InputAdornmentClassKey =
    | 'root'
    | 'filled'
    | 'positionStart'
    | 'positionEnd'
    | 'disablePointerEvents';

  declare export type InputAdornmentProps = StandardProps<
    InputAdornmentClassKey,
    {
      position: 'start' | 'end',
      variant?: 'standard' | 'outlined' | 'filled',
      disablePointerEvents?: boolean,
      disableTypography?: boolean,
      component?: React$ElementType,
    },
    HTMLDivAttributes,
    void
  >;

  declare export default React$ComponentType<InputAdornmentProps>;
}
declare module '@material-ui/core/InputAdornment/InputAdornment' {
  declare export * from '@material-ui/core/InputAdornment'
}

declare module '@material-ui/core/FormLabel' {
  import type { HTMLLabelAttributes } from '@material-ui/core/@@dom';
  import type {
    OverridableComponent,
    SimplifiedPropsOf,
  } from '@material-ui/core/OverridableComponent';

  declare export type FormLabelClassKey =
    | 'root'
    | 'focused'
    | 'disabled'
    | 'error'
    | 'filled'
    | 'required'
    | 'asterisk';

  declare type FormLabel = OverridableComponent<{
    props: {
      disabled?: boolean,
      error?: boolean,
      filled?: boolean,
      focused?: boolean,
      required?: boolean,
    } & HTMLLabelAttributes,
    defaultComponent: 'label',
    classKey: FormLabelClassKey,
  }>;

  declare export type FormLabelProps = SimplifiedPropsOf<FormLabel>;

  declare export default FormLabel;
}
declare module '@material-ui/core/FormLabel/FormLabel' {
  declare export * from '@material-ui/core/FormLabel'
}

declare module '@material-ui/core/InputLabel' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { FormLabelProps } from '@material-ui/core/FormLabel';

  declare export type InputLabelClassKey =
    | 'root'
    | 'focused'
    | 'disabled'
    | 'error'
    | 'required'
    | 'asterisk'
    | 'formControl'
    | 'marginDense'
    | 'shrink'
    | 'animated'
    | 'filled'
    | 'outlined';

  declare export type InputLabelProps = StandardProps<
    InputLabelClassKey,
    {
      disableAnimation?: boolean,
      shrink?: boolean,
      variant?: 'standard' | 'outlined' | 'filled',
    },
    FormLabelProps,
    void
  >;

  declare export default React$ComponentType<InputLabelProps>;
}
declare module '@material-ui/core/InputLabel/InputLabel' {
  declare export * from '@material-ui/core/InputLabel'
}

declare module '@material-ui/core/IconButton' {
  import type { SimplifiedPropsOf } from '@material-ui/core/OverridableComponent';
  import type { ExtendButtonBase } from '@material-ui/core/ButtonBase';
  import type { PropTypes$Color } from '@material-ui/core/flow-types';

  declare export type IconButtonClassKey =
    | 'root'
    | 'edgeStart'
    | 'edgeEnd'
    | 'colorInherit'
    | 'colorPrimary'
    | 'colorSecondary'
    | 'disabled'
    | 'sizeSmall'
    | 'label';

  declare type IconButton = ExtendButtonBase<{
    props: {
      color?: PropTypes$Color,
      edge?: 'start' | 'end' | false,
      size?: 'small' | 'medium',
    },
    defaultComponent: 'button',
    classKey: IconButtonClassKey,
  }>;

  declare export type IconButtonProps = SimplifiedPropsOf<IconButton>;

  declare export default IconButton;
}
declare module '@material-ui/core/IconButton/IconButton' {
  declare export * from '@material-ui/core/IconButton'
}

declare module '@material-ui/core/internal/SwitchBase' {
  import type { HTMLInputAttributes } from '@material-ui/core/@@dom';
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { IconButtonProps } from '@material-ui/core/IconButton';

  declare export type SwitchBaseClassKey =
    | 'root'
    | 'checked'
    | 'disabled'
    | 'input';

  declare export type SwitchBaseProps = StandardProps<
    SwitchBaseClassKey,
    {
      checkedIcon: React$Node,
      icon: React$Node,
      autoFocus?: boolean,
      checked?: boolean,
      defaultChecked?: boolean,
      disabled?: boolean,
      disableRipple?: boolean,
      inputProps?: HTMLInputAttributes,
      inputRef?: React$Ref<any>,
      name?: string,
      onChange?: (event: {}, checked: boolean) => mixed,
      readOnly?: boolean,
      required?: boolean,
      tabIndex?: number,
      value?: mixed,
    },
    IconButtonProps,
    {
      onChange: any,
      value: any,
    }
  >;

  declare export default React$ComponentType<SwitchBaseProps>;
}

declare module '@material-ui/core/Checkbox' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type {
    SwitchBaseProps,
    SwitchBaseClassKey,
  } from '@material-ui/core/internal/SwitchBase';

  declare export type CheckboxClassKey =
    | SwitchBaseClassKey
    | 'indeterminate'
    | 'colorPrimary'
    | 'colorSecondary';

  declare export type CheckboxProps = StandardProps<
    CheckboxClassKey,
    {
      color?: 'primary' | 'secondary' | 'default',
      icon?: React$Node,
      checkedIcon?: React$Node,
      indeterminate?: boolean,
      indeterminateIcon?: React$Node,
    },
    SwitchBaseProps,
    {
      checkedIcon: any,
      color: any,
      icon: any,
    }
  >;

  declare export default React$ComponentType<CheckboxProps>;
}
declare module '@material-ui/core/Checkbox/Checkbox' {
  declare export * from '@material-ui/core/Checkbox'
}

declare module '@material-ui/core/ExpansionPanelSummary' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { IconButtonProps } from '@material-ui/core/IconButton';
  import type { ButtonBaseProps } from '@material-ui/core/ButtonBase';

  declare export type ExpansionPanelSummaryClassKey =
    | 'root'
    | 'expanded'
    | 'focused'
    | 'disabled'
    | 'content'
    | 'expandIcon';

  declare export type ExpansionPanelSummaryProps = StandardProps<
    ExpansionPanelSummaryClassKey,
    {
      expanded?: boolean,
      expandIcon?: React$Node,
      IconButtonProps?: { ...IconButtonProps },
      onChange?: ({}) => mixed,
    },
    ButtonBaseProps,
    void
  >;

  declare export default React$ComponentType<ExpansionPanelSummaryProps>;
}
declare module '@material-ui/core/ExpansionPanelSummary/ExpansionPanelSummary' {
  declare export * from '@material-ui/core/ExpansionPanelSummary'
}

declare module '@material-ui/core/Fab' {
  import type { SimplifiedPropsOf } from '@material-ui/core/OverridableComponent';
  import type { ExtendButtonBase } from '@material-ui/core/ButtonBase';
  import type { PropTypes$Color } from '@material-ui/core/flow-types';

  declare export type FabClassKey =
    | 'root'
    | 'edgeStart'
    | 'edgeEnd'
    | 'colorInherit'
    | 'colorPrimary'
    | 'colorSecondary'
    | 'disabled'
    | 'sizeSmall'
    | 'label';

  declare type Fab = ExtendButtonBase<{
    props: {
      color?: PropTypes$Color,
      size?: 'small' | 'medium' | 'large',
      variant?: 'round' | 'extended',
    },
    defaultComponent: 'button',
    classKey: FabClassKey,
  }>;

  declare export type FabProps = SimplifiedPropsOf<Fab>;

  declare export default Fab;
}
declare module '@material-ui/core/Fab/Fab' {
  declare export * from '@material-ui/core/Fab'
}

declare module '@material-ui/core/FilledInput' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { InputBaseProps } from '@material-ui/core/InputBase';

  declare export type FilledInputClassKey =
    | 'root'
    | 'underline'
    | 'focused'
    | 'disabled'
    | 'adornedStart'
    | 'adornedEnd'
    | 'error'
    | 'multiline'
    | 'input'
    | 'inputMarginDense'
    | 'inputMultiline'
    | 'inputAdornedStart'
    | 'inputAdornedEnd';

  declare export type FilledInputProps = StandardProps<
    FilledInputClassKey,
    {
      disableUnderline?: boolean,
    },
    InputBaseProps,
    void
  >;

  declare export default React$ComponentType<FilledInputProps>;
}
declare module '@material-ui/core/FilledInput/FilledInput' {
  declare export * from '@material-ui/core/FilledInput'
}

declare module '@material-ui/core/FormControl' {
  import type { PropTypes$Margin } from '@material-ui/core/flow-types';
  import type {
    OverridableComponent,
    SimplifiedPropsOf,
  } from '@material-ui/core/OverridableComponent';

  declare export type FormControlClassKey =
    | 'root'
    | 'marginNormal'
    | 'marginDense'
    | 'fullWidth';

  declare type FormControl = OverridableComponent<{
    props: {
      disabled?: boolean,
      error?: boolean,
      fullWidth?: boolean,
      margin?: PropTypes$Margin,
      onBlur?: ({}) => mixed,
      onFocus?: ({}) => mixed,
      required?: boolean,
      variant?: 'standard' | 'outlined' | 'filled',
    },
    defaultComponent: 'div',
    classKey: FormControlClassKey,
  }>;

  declare export type FormControlProps = SimplifiedPropsOf<FormControl>;

  declare export default FormControl;
}
declare module '@material-ui/core/FormControl/FormControl' {
  declare export * from '@material-ui/core/FormControl'
}

declare module '@material-ui/core/FormControlLabel' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { HTMLLabelAttributes } from '@material-ui/core/@@dom';

  declare export type FormControlLabelClassKey =
    | 'root'
    | 'start'
    | 'disabled'
    | 'label';

  declare export type FormControlLabelProps = StandardProps<
    FormControlLabelClassKey,
    {
      label: React$Node,
      control: React$Element<any>,
      checked?: boolean,
      disabled?: boolean,
      inputRef?: React$Ref<any>,
      labelPlacement?: 'end' | 'start' | 'top' | 'bottom',
      name?: string,
      onChange?: (event: {}, checked: boolean) => mixed,
      value?: mixed,
    },
    HTMLLabelAttributes,
    { onChange: any }
  >;

  declare export default React$ComponentType<FormControlLabelProps>;
}
declare module '@material-ui/core/FormControlLabel/FormControlLabel' {
  declare export * from '@material-ui/core/FormControlLabel'
}

declare module '@material-ui/core/FormGroup' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';

  declare export type FormGroupClassKey = 'root' | 'row';

  declare export type FormGroupProps = StandardProps<
    FormGroupClassKey,
    {
      row?: boolean,
    },
    HTMLDivAttributes,
    void
  >;

  declare export default React$ComponentType<FormGroupProps>;
}
declare module '@material-ui/core/FormGroup/FormGroup' {
  declare export * from '@material-ui/core/FormGroup'
}

declare module '@material-ui/core/FormHelperText' {
  import type { StandardProps } from '@material-ui/core/flow-types';
  import type { HTMLParagraphAttributes } from '@material-ui/core/@@dom';

  declare export type FormHelperTextClassKey =
    | 'root'
    | 'error'
    | 'disabled'
    | 'marginDense'
    | 'focused'
    | 'filled'
    | 'contained'
    | 'required';

  declare export type FormHelperTextProps = StandardProps<
    FormHelperTextClassKey,
    {
      disabled?: boolean,
      error?: boolean,
      filled?: boolean,
      focused?: boolean,
      required?: boolean,
      component?: React$ElementType,
      margin?: 'dense',
      variant?: 'standard' | 'outlined' | 'filled',
    },
    HTMLParagraphAttributes,
    void
  >;

  declare export default React$ComponentType<FormHelperTextProps>;
}
declare module '@material-ui/core/FormHelperText/FormHelperText' {
  declare export * from '@material-ui/core/FormHelperText'
}

///////////////////////////////////////////////////////////////////////////////

declare module '@material-ui/core' {
  declare export { default as Paper } from '@material-ui/core/Paper';
  declare export { default as AppBar } from '@material-ui/core/AppBar';
  declare export { default as Avatar } from '@material-ui/core/Avatar';
  declare export { default as Backdrop } from '@material-ui/core/Backdrop';
  declare export { default as Badge } from '@material-ui/core/Badge';
  declare export { default as Box } from '@material-ui/core/Box';
  declare export { default as Card } from '@material-ui/core/Card';
  declare export { default as Container } from '@material-ui/core/Container';
  declare export { default as Fade } from '@material-ui/core/Fade';
  declare export { default as ButtonBase } from '@material-ui/core/ButtonBase';
  declare export { default as Typography } from '@material-ui/core/Typography';
  declare export { default as CardHeader } from '@material-ui/core/CardHeader';
  declare export { default as CardMedia } from '@material-ui/core/CardMedia';
  declare export { default as Chip } from '@material-ui/core/Chip';
  declare export { default as Collapse } from '@material-ui/core/Collapse';
  declare export { default as Portal } from '@material-ui/core/Portal';
  declare export { default as Modal } from '@material-ui/core/Modal';
  declare export { default as Dialog } from '@material-ui/core/Dialog';
  declare export { default as Divider } from '@material-ui/core/Divider';
  declare export { default as Slide } from '@material-ui/core/Slide';
  declare export { default as Drawer } from '@material-ui/core/Drawer';
  declare export { default as Grid } from '@material-ui/core/Grid';
  declare export { default as GridList } from '@material-ui/core/GridList';
  declare export { default as Grow } from '@material-ui/core/Grow';
  declare export { default as NoSsr } from '@material-ui/core/NoSsr';
  declare export { default as Hidden } from '@material-ui/core/Hidden';
  declare export { default as InputBase } from '@material-ui/core/InputBase';
  declare export { default as Input } from '@material-ui/core/Input';
  declare export { default as Icon } from '@material-ui/core/Icon';
  declare export { default as FormLabel } from '@material-ui/core/FormLabel';
  declare export { default as InputLabel } from '@material-ui/core/InputLabel';
  declare export { default as Button } from '@material-ui/core/Button';
  declare export { default as IconButton } from '@material-ui/core/IconButton';
  declare export { default as Checkbox } from '@material-ui/core/Checkbox';
  declare export { default as Fab } from '@material-ui/core/Fab';
  declare export { default as FormGroup } from '@material-ui/core/FormGroup';
  declare export {
    default as FormHelperText,
  } from '@material-ui/core/FormHelperText';
  declare export {
    default as FormControlLabel,
  } from '@material-ui/core/FormControlLabel';
  declare export {
    default as FormControl,
  } from '@material-ui/core/FormControl';

  declare export {
    default as FilledInput,
  } from '@material-ui/core/FilledInput';

  declare export {
    default as ExpansionPanelSummary,
  } from '@material-ui/core/ExpansionPanelSummary';

  declare export {
    default as InputAdornment,
  } from '@material-ui/core/InputAdornment';

  declare export {
    default as NativeSelect,
  } from '@material-ui/core/NativeSelect';

  declare export {
    default as GridListTile,
  } from '@material-ui/core/GridListTile';
  declare export {
    default as GridListTileBar,
  } from '@material-ui/core/GridListTileBar';

  declare export {
    default as ExpansionPanel,
  } from '@material-ui/core/ExpansionPanel';

  declare export {
    default as DialogContentText,
  } from '@material-ui/core/DialogContentText';

  declare export {
    default as CardActionArea,
  } from '@material-ui/core/CardActionArea';

  declare export {
    default as BottomNavigationAction,
  } from '@material-ui/core/BottomNavigationAction';

  declare export {
    default as ExpansionPanelDetails,
  } from '@material-ui/core/ExpansionPanelDetails';
  declare export {
    default as ExpansionPanelActions,
  } from '@material-ui/core/ExpansionPanelActions';
  declare export {
    default as DialogTitle,
  } from '@material-ui/core/DialogTitle';
  declare export {
    default as DialogContent,
  } from '@material-ui/core/DialogContent';
  declare export {
    default as DialogActions,
  } from '@material-ui/core/DialogActions';
  declare export {
    default as CssBaseline,
  } from '@material-ui/core/CssBaseline';
  declare export {
    default as ClickAwayListener,
  } from '@material-ui/core/ClickAwayListener';

  declare export {
    default as CircularProgress,
  } from '@material-ui/core/CircularProgress';
  declare export {
    default as CardContent,
  } from '@material-ui/core/CardContent';
  declare export {
    default as CardActions,
  } from '@material-ui/core/CardActions';
  declare export {
    default as Breadcrumbs,
  } from '@material-ui/core/Breadcrumbs';
  declare export {
    default as BottomNavigation,
  } from '@material-ui/core/BottomNavigation';
}
