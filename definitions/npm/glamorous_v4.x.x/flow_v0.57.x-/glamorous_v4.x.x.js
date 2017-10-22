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

  declare type GlamorousOptions<Props, Context, DefaultProps> = $Shape<{|
    displayName: string,
    rootEl: string | HTMLElement,
    filterProps: string[],
    forwardProps: string[],
    shouldClassNameUpdate: (
      props: Props,
      prevProps: Props,
      context: Context,
      prevContext: Context
    ) => boolean,
    propsAreCssOverrides?: false,
    withProps: $Shape<DefaultProps>
  |}>;

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

  declare type GlamorousComponentFunctions<ExternalProps, Props> = {
    /**
     * Copies the styles of an already created glamorous component with a different tag
     */
    withComponent: (
      component: string | React$Component<Props>
    ) => GlamorousComponent<ExternalProps, Props>,

    /**
     * Applies props by default for a component
     */
    withProps: <DefaultProps: {}>(
      props: DefaultProps
    ) => GlamorousComponent<ExternalProps & $Shape<DefaultProps>, Props>
  };

  declare export type GlamorousComponent<
    ExternalProps,
    Props
  > = React$StatelessFunctionalComponent<
    ExternalProps & Props & ExtraGlamorousProps
  > &
    GlamorousComponentFunctions<ExternalProps, Props>;

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
    ExternalProps,
    Properties,
    DefaultProps
  > = {
    <Props: {}>(
      ...styles: StyleArgument<
        Properties,
        Props & ExternalProps & DefaultProps
      >[]
    ): GlamorousComponent<ExternalProps & $Shape<DefaultProps>, Props>
  };

  declare type GlamorousHTMLComponentFactory<Tag: HTMLTagName> = <Props>(
    ...styles: StyleArgument<CSSProperties, Props>[]
  ) => GlamorousComponent<React$ElementProps<Tag>, Props>;

  declare type GlamorousBuiltinComponent<
    Tag: HTMLTagName
  > = React$StatelessFunctionalComponent<
    CSSProperties & ExtraGlamorousProps & React$ElementProps<"span">
  >;

  declare type Glamorous = {
    <ExternalProps, Context, DefaultProps: {}>(
      component: React$ComponentType<ExternalProps & GlamorousProps>,
      options?: GlamorousOptions<ExternalProps, Context, DefaultProps>
    ): GlamorousComponentFactory<ExternalProps, CSSProperties, DefaultProps>,

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
