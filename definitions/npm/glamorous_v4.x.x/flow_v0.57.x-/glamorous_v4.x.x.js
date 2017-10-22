declare module "glamorous" {
  declare type SingleOrArray<Properties, T: $Keys<Properties>> = $ObjMap<
    Properties,
    <P>(P) => P | P[]
  >;

  declare type CSSPropertiesCompleteSingle = {|
    display?: string,
    color?: string,
    marginLeft?: number | string
  |};
  declare type CSSPropertiesComplete = SingleOrArray<
    CSSPropertiesCompleteSingle,
    $Keys<CSSPropertiesCompleteSingle>
  >;
  declare export type CSSProperties = {
    ...CSSPropertiesComplete,
    $call?: empty,
    [string]: CSSProperties
  };
  declare type SVGProperties = {||};

  declare type HTMLTagName =
    | "a"
    | "button"
    | "div"
    | "footer"
    | "h1"
    | "h2"
    | "img"
    | "input"
    | "label"
    | "li"
    | "ol"
    | "section"
    | "select"
    | "span"
    | "table"
    | "td"
    | "textarea"
    | "th"
    | "tr"
    | "ul";

  declare type ClassComponent<Props, State> = Class<
    React$Component<Props, State>
  >;

  declare type ClassComponentWithDefaultProps<
    DefaultProps,
    Props,
    State
  > = ClassComponent<Props, State> & { defaultProps: DefaultProps };

  declare type ComponentWithDefaultProps<
    DefaultProps,
    Props
  > = React$ComponentType<Props> & { defaultProps: DefaultProps };

  declare type GlamorousOptions<Props, Context, WithProps> = {|
    displayName?: string,
    rootEl?: string | HTMLElement,
    filterProps?: string[],
    forwardProps?: string[],
    shouldClassNameUpdate?: (
      props: Props,
      prevProps: Props,
      context: Context,
      prevContext: Context
    ) => boolean,
    propsAreCssOverrides?: false,
    withProps?: WithProps
  |};

  declare type GlamorousProps = { className?: string, theme?: Object };

  declare export type ExtraGlamorousProps = {
    /**
     * Called with the inner element's reference
     */
    innerRef?: (instance: any) => void,

    className?: string,
    /**
     * Same type as any of the styles provided, will be merged with this
     * component's styles and take highest priority over the component's
     * predefined styles
     */
    css?: CSSProperties,
    theme?: Object
  };

  declare class GlamorousComponentInstance<
    OriginalProps,
    Props,
    DefaultProps
  > extends React$Component<OriginalProps & Props> {
    static defaultProps: DefaultProps,

    /**
     * Copies the styles of an already created glamorous component with a different tag
     */
    static withComponent: (
      component: string | React$Component<Props>
    ) => GlamorousComponent<OriginalProps, Props>,

    /**
     * Applies props by default for a component
     */
    static withProps: <DefaultProps: {}>(
      props: DefaultProps
    ) => GlamorousComponent<OriginalProps & $Shape<DefaultProps>, Props>
  }

  declare export type GlamorousComponent<
    OriginalProps,
    Props,
    DefaultProps: {} = {}
  > = Class<GlamorousComponentInstance<OriginalProps, Props, DefaultProps>>;

  declare type StyleFunction<Properties, Props> = (
    props: Props
  ) =>
    | Properties
    | string
    | Array<Properties | string | StyleFunction<Properties, Props>>;

  declare type StyleArray<Properties, Props> = Array<
    Properties | string | StyleFunction<Properties, Props>
  >;

  declare type StaticStyleArray<Properties> = Array<Properties | string>;

  declare type StyleArgument<Properties, Props> =
    | Properties
    | string
    | StyleFunction<Properties, Props>
    | StyleArray<Properties, Props>;

  declare type StaticStyleArgument<Properties> =
    | Properties
    | string
    | StaticStyleArray<Properties>;

  declare type GlamorousComponentFactory<
    OriginalProps,
    Properties,
    DefaultProps
  > = {
    <Props: {}>(
      ...styles: StyleArgument<
        Properties,
        Props & OriginalProps & DefaultProps
      >[]
    ): Class<GlamorousComponentInstance<OriginalProps, Props, DefaultProps>>
  };

  declare type GlamorousHTMLComponentFactory<Tag: HTMLTagName> = <Props>(
    ...styles: StyleArgument<CSSProperties, Props>[]
  ) => GlamorousComponent<React$ElementProps<Tag>, Props, {}>;

  declare type GlamorousBuiltinComponent<Tag: HTMLTagName> = GlamorousComponent<
    {},
    CSSProperties & React$ElementProps<Tag>,
    {}
  >;

  declare type Glamorous = {
    <OriginalProps, Context, DefaultProps, WithProps: {}>(
      component: ComponentWithDefaultProps<
        DefaultProps,
        OriginalProps & GlamorousProps
      >,
      options?: GlamorousOptions<OriginalProps, Context, WithProps>
    ): GlamorousComponentFactory<OriginalProps, CSSProperties, DefaultProps>,
    <OriginalProps, Context, WithProps: {}>(
      component: React$ComponentType<OriginalProps & GlamorousProps>,
      options?: GlamorousOptions<OriginalProps, Context, WithProps>
    ): GlamorousComponentFactory<OriginalProps, CSSProperties, {}>,

    a: GlamorousHTMLComponentFactory<"a">,
    button: GlamorousHTMLComponentFactory<"button">,
    div: GlamorousHTMLComponentFactory<"div">,
    footer: GlamorousHTMLComponentFactory<"footer">,
    h1: GlamorousHTMLComponentFactory<"h1">,
    h2: GlamorousHTMLComponentFactory<"h2">,
    img: GlamorousHTMLComponentFactory<"img">,
    input: GlamorousHTMLComponentFactory<"input">,
    label: GlamorousHTMLComponentFactory<"label">,
    li: GlamorousHTMLComponentFactory<"li">,
    ol: GlamorousHTMLComponentFactory<"ol">,
    section: GlamorousHTMLComponentFactory<"section">,
    select: GlamorousHTMLComponentFactory<"select">,
    span: GlamorousHTMLComponentFactory<"span">,
    table: GlamorousHTMLComponentFactory<"table">,
    td: GlamorousHTMLComponentFactory<"td">,
    textarea: GlamorousHTMLComponentFactory<"textarea">,
    th: GlamorousHTMLComponentFactory<"th">,
    tr: GlamorousHTMLComponentFactory<"tr">,
    ul: GlamorousHTMLComponentFactory<"ul">,

    Span: GlamorousBuiltinComponent<"span">
  };

  declare export var Div: GlamorousBuiltinComponent<"div">;
  declare export var H1: GlamorousBuiltinComponent<"h1">;
  declare export var H2: GlamorousBuiltinComponent<"h2">;
  declare export var H3: GlamorousBuiltinComponent<"h3">;
  declare export var P: GlamorousBuiltinComponent<"p">;
  declare export var Span: GlamorousBuiltinComponent<"span">;
  declare export var Ul: GlamorousBuiltinComponent<"ul">;

  declare export default Glamorous
}
