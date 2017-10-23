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
    | "abbr"
    | "acronym"
    | "address"
    | "applet"
    | "area"
    | "article"
    | "aside"
    | "audio"
    | "b"
    | "base"
    | "basefont"
    | "bdi"
    | "bdo"
    | "bgsound"
    | "big"
    | "blink"
    | "blockquote"
    | "body"
    | "br"
    | "button"
    | "canvas"
    | "caption"
    | "center"
    | "cite"
    | "code"
    | "col"
    | "colgroup"
    | "command"
    | "content"
    | "data"
    | "datalist"
    | "dd"
    | "del"
    | "details"
    | "dfn"
    | "dialog"
    | "dir"
    | "div"
    | "dl"
    | "dt"
    | "element"
    | "em"
    | "embed"
    | "fieldset"
    | "figcaption"
    | "figure"
    | "font"
    | "footer"
    | "form"
    | "frame"
    | "frameset"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "head"
    | "header"
    | "hgroup"
    | "hr"
    | "html"
    | "i"
    | "iframe"
    | "image"
    | "img"
    | "input"
    | "ins"
    | "isindex"
    | "kbd"
    | "keygen"
    | "label"
    | "legend"
    | "li"
    | "link"
    | "listing"
    | "main"
    | "map"
    | "mark"
    | "marquee"
    | "math"
    | "menu"
    | "menuitem"
    | "meta"
    | "meter"
    | "multicol"
    | "nav"
    | "nextid"
    | "nobr"
    | "noembed"
    | "noframes"
    | "noscript"
    | "object"
    | "ol"
    | "optgroup"
    | "option"
    | "output"
    | "p"
    | "param"
    | "picture"
    | "plaintext"
    | "pre"
    | "progress"
    | "q"
    | "rb"
    | "rbc"
    | "rp"
    | "rt"
    | "rtc"
    | "ruby"
    | "s"
    | "samp"
    | "script"
    | "section"
    | "select"
    | "shadow"
    | "slot"
    | "small"
    | "source"
    | "spacer"
    | "span"
    | "strike"
    | "strong"
    | "style"
    | "sub"
    | "summary"
    | "sup"
    | "svg"
    | "table"
    | "tbody"
    | "td"
    | "template"
    | "textarea"
    | "tfoot"
    | "th"
    | "thead"
    | "time"
    | "title"
    | "tr"
    | "track"
    | "tt"
    | "u"
    | "ul"
    | "var"
    | "video"
    | "wbr"
    | "xmp";

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
    static withProps: <WithProps: $Shape<OriginalProps & Props>>(
      props: WithProps
    ) => GlamorousComponent<OriginalProps, Props, DefaultProps & WithProps>
  }

  declare export type GlamorousComponent<
    OriginalProps,
    Props,
    DefaultProps: {} = {}
  > = Class<GlamorousComponentInstance<OriginalProps, Props, DefaultProps>>;

  declare type StyleFunction<Properties, Props> = (
    props: Props
  ) =>
    | null
    | false
    | void
    | Properties
    | string
    | Array<Properties | string | StyleFunction<Properties, Props>>;

  declare type StyleArray<Properties, Props> = Array<
    Properties | string | StyleFunction<Properties, Props>
  >;

  declare type StaticStyleArray<Properties> = Array<Properties | string>;

  declare type StyleArgument<Properties, Props> =
    | null
    | void
    | false
    | Properties
    | string
    | StyleFunction<Properties, Props>
    | StyleArray<Properties, Props>;

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
    CSSPropertiesComplete & React$ElementProps<Tag>,
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
    abbr: GlamorousHTMLComponentFactory<"abbr">,
    acronym: GlamorousHTMLComponentFactory<"acronym">,
    address: GlamorousHTMLComponentFactory<"address">,
    applet: GlamorousHTMLComponentFactory<"applet">,
    area: GlamorousHTMLComponentFactory<"area">,
    article: GlamorousHTMLComponentFactory<"article">,
    aside: GlamorousHTMLComponentFactory<"aside">,
    audio: GlamorousHTMLComponentFactory<"audio">,
    b: GlamorousHTMLComponentFactory<"b">,
    base: GlamorousHTMLComponentFactory<"base">,
    basefont: GlamorousHTMLComponentFactory<"basefont">,
    bdi: GlamorousHTMLComponentFactory<"bdi">,
    bdo: GlamorousHTMLComponentFactory<"bdo">,
    bgsound: GlamorousHTMLComponentFactory<"bgsound">,
    big: GlamorousHTMLComponentFactory<"big">,
    blink: GlamorousHTMLComponentFactory<"blink">,
    blockquote: GlamorousHTMLComponentFactory<"blockquote">,
    body: GlamorousHTMLComponentFactory<"body">,
    br: GlamorousHTMLComponentFactory<"br">,
    button: GlamorousHTMLComponentFactory<"button">,
    canvas: GlamorousHTMLComponentFactory<"canvas">,
    caption: GlamorousHTMLComponentFactory<"caption">,
    center: GlamorousHTMLComponentFactory<"center">,
    cite: GlamorousHTMLComponentFactory<"cite">,
    code: GlamorousHTMLComponentFactory<"code">,
    col: GlamorousHTMLComponentFactory<"col">,
    colgroup: GlamorousHTMLComponentFactory<"colgroup">,
    command: GlamorousHTMLComponentFactory<"command">,
    content: GlamorousHTMLComponentFactory<"content">,
    data: GlamorousHTMLComponentFactory<"data">,
    datalist: GlamorousHTMLComponentFactory<"datalist">,
    dd: GlamorousHTMLComponentFactory<"dd">,
    del: GlamorousHTMLComponentFactory<"del">,
    details: GlamorousHTMLComponentFactory<"details">,
    dfn: GlamorousHTMLComponentFactory<"dfn">,
    dialog: GlamorousHTMLComponentFactory<"dialog">,
    dir: GlamorousHTMLComponentFactory<"dir">,
    div: GlamorousHTMLComponentFactory<"div">,
    dl: GlamorousHTMLComponentFactory<"dl">,
    dt: GlamorousHTMLComponentFactory<"dt">,
    element: GlamorousHTMLComponentFactory<"element">,
    em: GlamorousHTMLComponentFactory<"em">,
    embed: GlamorousHTMLComponentFactory<"embed">,
    fieldset: GlamorousHTMLComponentFactory<"fieldset">,
    figcaption: GlamorousHTMLComponentFactory<"figcaption">,
    figure: GlamorousHTMLComponentFactory<"figure">,
    font: GlamorousHTMLComponentFactory<"font">,
    footer: GlamorousHTMLComponentFactory<"footer">,
    form: GlamorousHTMLComponentFactory<"form">,
    frame: GlamorousHTMLComponentFactory<"frame">,
    frameset: GlamorousHTMLComponentFactory<"frameset">,
    h1: GlamorousHTMLComponentFactory<"h1">,
    h2: GlamorousHTMLComponentFactory<"h2">,
    h3: GlamorousHTMLComponentFactory<"h3">,
    h4: GlamorousHTMLComponentFactory<"h4">,
    h5: GlamorousHTMLComponentFactory<"h5">,
    h6: GlamorousHTMLComponentFactory<"h6">,
    head: GlamorousHTMLComponentFactory<"head">,
    header: GlamorousHTMLComponentFactory<"header">,
    hgroup: GlamorousHTMLComponentFactory<"hgroup">,
    hr: GlamorousHTMLComponentFactory<"hr">,
    html: GlamorousHTMLComponentFactory<"html">,
    i: GlamorousHTMLComponentFactory<"i">,
    iframe: GlamorousHTMLComponentFactory<"iframe">,
    image: GlamorousHTMLComponentFactory<"image">,
    img: GlamorousHTMLComponentFactory<"img">,
    input: GlamorousHTMLComponentFactory<"input">,
    ins: GlamorousHTMLComponentFactory<"ins">,
    isindex: GlamorousHTMLComponentFactory<"isindex">,
    kbd: GlamorousHTMLComponentFactory<"kbd">,
    keygen: GlamorousHTMLComponentFactory<"keygen">,
    label: GlamorousHTMLComponentFactory<"label">,
    legend: GlamorousHTMLComponentFactory<"legend">,
    li: GlamorousHTMLComponentFactory<"li">,
    link: GlamorousHTMLComponentFactory<"link">,
    listing: GlamorousHTMLComponentFactory<"listing">,
    main: GlamorousHTMLComponentFactory<"main">,
    map: GlamorousHTMLComponentFactory<"map">,
    mark: GlamorousHTMLComponentFactory<"mark">,
    marquee: GlamorousHTMLComponentFactory<"marquee">,
    math: GlamorousHTMLComponentFactory<"math">,
    menu: GlamorousHTMLComponentFactory<"menu">,
    menuitem: GlamorousHTMLComponentFactory<"menuitem">,
    meta: GlamorousHTMLComponentFactory<"meta">,
    meter: GlamorousHTMLComponentFactory<"meter">,
    multicol: GlamorousHTMLComponentFactory<"multicol">,
    nav: GlamorousHTMLComponentFactory<"nav">,
    nextid: GlamorousHTMLComponentFactory<"nextid">,
    nobr: GlamorousHTMLComponentFactory<"nobr">,
    noembed: GlamorousHTMLComponentFactory<"noembed">,
    noframes: GlamorousHTMLComponentFactory<"noframes">,
    noscript: GlamorousHTMLComponentFactory<"noscript">,
    object: GlamorousHTMLComponentFactory<"object">,
    ol: GlamorousHTMLComponentFactory<"ol">,
    optgroup: GlamorousHTMLComponentFactory<"optgroup">,
    option: GlamorousHTMLComponentFactory<"option">,
    output: GlamorousHTMLComponentFactory<"output">,
    p: GlamorousHTMLComponentFactory<"p">,
    param: GlamorousHTMLComponentFactory<"param">,
    picture: GlamorousHTMLComponentFactory<"picture">,
    plaintext: GlamorousHTMLComponentFactory<"plaintext">,
    pre: GlamorousHTMLComponentFactory<"pre">,
    progress: GlamorousHTMLComponentFactory<"progress">,
    q: GlamorousHTMLComponentFactory<"q">,
    rb: GlamorousHTMLComponentFactory<"rb">,
    rbc: GlamorousHTMLComponentFactory<"rbc">,
    rp: GlamorousHTMLComponentFactory<"rp">,
    rt: GlamorousHTMLComponentFactory<"rt">,
    rtc: GlamorousHTMLComponentFactory<"rtc">,
    ruby: GlamorousHTMLComponentFactory<"ruby">,
    s: GlamorousHTMLComponentFactory<"s">,
    samp: GlamorousHTMLComponentFactory<"samp">,
    script: GlamorousHTMLComponentFactory<"script">,
    section: GlamorousHTMLComponentFactory<"section">,
    select: GlamorousHTMLComponentFactory<"select">,
    shadow: GlamorousHTMLComponentFactory<"shadow">,
    slot: GlamorousHTMLComponentFactory<"slot">,
    small: GlamorousHTMLComponentFactory<"small">,
    source: GlamorousHTMLComponentFactory<"source">,
    spacer: GlamorousHTMLComponentFactory<"spacer">,
    span: GlamorousHTMLComponentFactory<"span">,
    strike: GlamorousHTMLComponentFactory<"strike">,
    strong: GlamorousHTMLComponentFactory<"strong">,
    style: GlamorousHTMLComponentFactory<"style">,
    sub: GlamorousHTMLComponentFactory<"sub">,
    summary: GlamorousHTMLComponentFactory<"summary">,
    sup: GlamorousHTMLComponentFactory<"sup">,
    svg: GlamorousHTMLComponentFactory<"svg">,
    table: GlamorousHTMLComponentFactory<"table">,
    tbody: GlamorousHTMLComponentFactory<"tbody">,
    td: GlamorousHTMLComponentFactory<"td">,
    template: GlamorousHTMLComponentFactory<"template">,
    textarea: GlamorousHTMLComponentFactory<"textarea">,
    tfoot: GlamorousHTMLComponentFactory<"tfoot">,
    th: GlamorousHTMLComponentFactory<"th">,
    thead: GlamorousHTMLComponentFactory<"thead">,
    time: GlamorousHTMLComponentFactory<"time">,
    title: GlamorousHTMLComponentFactory<"title">,
    tr: GlamorousHTMLComponentFactory<"tr">,
    track: GlamorousHTMLComponentFactory<"track">,
    tt: GlamorousHTMLComponentFactory<"tt">,
    u: GlamorousHTMLComponentFactory<"u">,
    ul: GlamorousHTMLComponentFactory<"ul">,
    var: GlamorousHTMLComponentFactory<"var">,
    video: GlamorousHTMLComponentFactory<"video">,
    wbr: GlamorousHTMLComponentFactory<"wbr">,
    xmp: GlamorousHTMLComponentFactory<"xmp">,

    A: GlamorousBuiltinComponent<"a">,
    Abbr: GlamorousBuiltinComponent<"abbr">,
    Acronym: GlamorousBuiltinComponent<"acronym">,
    Address: GlamorousBuiltinComponent<"address">,
    Applet: GlamorousBuiltinComponent<"applet">,
    Area: GlamorousBuiltinComponent<"area">,
    Article: GlamorousBuiltinComponent<"article">,
    Aside: GlamorousBuiltinComponent<"aside">,
    Audio: GlamorousBuiltinComponent<"audio">,
    B: GlamorousBuiltinComponent<"b">,
    Base: GlamorousBuiltinComponent<"base">,
    Basefont: GlamorousBuiltinComponent<"basefont">,
    Bdi: GlamorousBuiltinComponent<"bdi">,
    Bdo: GlamorousBuiltinComponent<"bdo">,
    Bgsound: GlamorousBuiltinComponent<"bgsound">,
    Big: GlamorousBuiltinComponent<"big">,
    Blink: GlamorousBuiltinComponent<"blink">,
    Blockquote: GlamorousBuiltinComponent<"blockquote">,
    Body: GlamorousBuiltinComponent<"body">,
    Br: GlamorousBuiltinComponent<"br">,
    Button: GlamorousBuiltinComponent<"button">,
    Canvas: GlamorousBuiltinComponent<"canvas">,
    Caption: GlamorousBuiltinComponent<"caption">,
    Center: GlamorousBuiltinComponent<"center">,
    Cite: GlamorousBuiltinComponent<"cite">,
    Code: GlamorousBuiltinComponent<"code">,
    Col: GlamorousBuiltinComponent<"col">,
    Colgroup: GlamorousBuiltinComponent<"colgroup">,
    Command: GlamorousBuiltinComponent<"command">,
    Content: GlamorousBuiltinComponent<"content">,
    Data: GlamorousBuiltinComponent<"data">,
    Datalist: GlamorousBuiltinComponent<"datalist">,
    Dd: GlamorousBuiltinComponent<"dd">,
    Del: GlamorousBuiltinComponent<"del">,
    Details: GlamorousBuiltinComponent<"details">,
    Dfn: GlamorousBuiltinComponent<"dfn">,
    Dialog: GlamorousBuiltinComponent<"dialog">,
    Dir: GlamorousBuiltinComponent<"dir">,
    Div: GlamorousBuiltinComponent<"div">,
    Dl: GlamorousBuiltinComponent<"dl">,
    Dt: GlamorousBuiltinComponent<"dt">,
    Element: GlamorousBuiltinComponent<"element">,
    Em: GlamorousBuiltinComponent<"em">,
    Embed: GlamorousBuiltinComponent<"embed">,
    Fieldset: GlamorousBuiltinComponent<"fieldset">,
    Figcaption: GlamorousBuiltinComponent<"figcaption">,
    Figure: GlamorousBuiltinComponent<"figure">,
    Font: GlamorousBuiltinComponent<"font">,
    Footer: GlamorousBuiltinComponent<"footer">,
    Form: GlamorousBuiltinComponent<"form">,
    Frame: GlamorousBuiltinComponent<"frame">,
    Frameset: GlamorousBuiltinComponent<"frameset">,
    H1: GlamorousBuiltinComponent<"h1">,
    H2: GlamorousBuiltinComponent<"h2">,
    H3: GlamorousBuiltinComponent<"h3">,
    H4: GlamorousBuiltinComponent<"h4">,
    H5: GlamorousBuiltinComponent<"h5">,
    H6: GlamorousBuiltinComponent<"h6">,
    Head: GlamorousBuiltinComponent<"head">,
    Header: GlamorousBuiltinComponent<"header">,
    Hgroup: GlamorousBuiltinComponent<"hgroup">,
    Hr: GlamorousBuiltinComponent<"hr">,
    Html: GlamorousBuiltinComponent<"html">,
    I: GlamorousBuiltinComponent<"i">,
    Iframe: GlamorousBuiltinComponent<"iframe">,
    Image: GlamorousBuiltinComponent<"image">,
    Img: GlamorousBuiltinComponent<"img">,
    Input: GlamorousBuiltinComponent<"input">,
    Ins: GlamorousBuiltinComponent<"ins">,
    Isindex: GlamorousBuiltinComponent<"isindex">,
    Kbd: GlamorousBuiltinComponent<"kbd">,
    Keygen: GlamorousBuiltinComponent<"keygen">,
    Label: GlamorousBuiltinComponent<"label">,
    Legend: GlamorousBuiltinComponent<"legend">,
    Li: GlamorousBuiltinComponent<"li">,
    Link: GlamorousBuiltinComponent<"link">,
    Listing: GlamorousBuiltinComponent<"listing">,
    Main: GlamorousBuiltinComponent<"main">,
    Map: GlamorousBuiltinComponent<"map">,
    Mark: GlamorousBuiltinComponent<"mark">,
    Marquee: GlamorousBuiltinComponent<"marquee">,
    Math: GlamorousBuiltinComponent<"math">,
    Menu: GlamorousBuiltinComponent<"menu">,
    Menuitem: GlamorousBuiltinComponent<"menuitem">,
    Meta: GlamorousBuiltinComponent<"meta">,
    Meter: GlamorousBuiltinComponent<"meter">,
    Multicol: GlamorousBuiltinComponent<"multicol">,
    Nav: GlamorousBuiltinComponent<"nav">,
    Nextid: GlamorousBuiltinComponent<"nextid">,
    Nobr: GlamorousBuiltinComponent<"nobr">,
    Noembed: GlamorousBuiltinComponent<"noembed">,
    Noframes: GlamorousBuiltinComponent<"noframes">,
    Noscript: GlamorousBuiltinComponent<"noscript">,
    Object: GlamorousBuiltinComponent<"object">,
    Ol: GlamorousBuiltinComponent<"ol">,
    Optgroup: GlamorousBuiltinComponent<"optgroup">,
    Option: GlamorousBuiltinComponent<"option">,
    Output: GlamorousBuiltinComponent<"output">,
    P: GlamorousBuiltinComponent<"p">,
    Param: GlamorousBuiltinComponent<"param">,
    Picture: GlamorousBuiltinComponent<"picture">,
    Plaintext: GlamorousBuiltinComponent<"plaintext">,
    Pre: GlamorousBuiltinComponent<"pre">,
    Progress: GlamorousBuiltinComponent<"progress">,
    Q: GlamorousBuiltinComponent<"q">,
    Rb: GlamorousBuiltinComponent<"rb">,
    Rbc: GlamorousBuiltinComponent<"rbc">,
    Rp: GlamorousBuiltinComponent<"rp">,
    Rt: GlamorousBuiltinComponent<"rt">,
    Rtc: GlamorousBuiltinComponent<"rtc">,
    Ruby: GlamorousBuiltinComponent<"ruby">,
    S: GlamorousBuiltinComponent<"s">,
    Samp: GlamorousBuiltinComponent<"samp">,
    Script: GlamorousBuiltinComponent<"script">,
    Section: GlamorousBuiltinComponent<"section">,
    Select: GlamorousBuiltinComponent<"select">,
    Shadow: GlamorousBuiltinComponent<"shadow">,
    Slot: GlamorousBuiltinComponent<"slot">,
    Small: GlamorousBuiltinComponent<"small">,
    Source: GlamorousBuiltinComponent<"source">,
    Spacer: GlamorousBuiltinComponent<"spacer">,
    Span: GlamorousBuiltinComponent<"span">,
    Strike: GlamorousBuiltinComponent<"strike">,
    Strong: GlamorousBuiltinComponent<"strong">,
    Style: GlamorousBuiltinComponent<"style">,
    Sub: GlamorousBuiltinComponent<"sub">,
    Summary: GlamorousBuiltinComponent<"summary">,
    Sup: GlamorousBuiltinComponent<"sup">,
    Svg: GlamorousBuiltinComponent<"svg">,
    Table: GlamorousBuiltinComponent<"table">,
    Tbody: GlamorousBuiltinComponent<"tbody">,
    Td: GlamorousBuiltinComponent<"td">,
    Template: GlamorousBuiltinComponent<"template">,
    Textarea: GlamorousBuiltinComponent<"textarea">,
    Tfoot: GlamorousBuiltinComponent<"tfoot">,
    Th: GlamorousBuiltinComponent<"th">,
    Thead: GlamorousBuiltinComponent<"thead">,
    Time: GlamorousBuiltinComponent<"time">,
    Title: GlamorousBuiltinComponent<"title">,
    Tr: GlamorousBuiltinComponent<"tr">,
    Track: GlamorousBuiltinComponent<"track">,
    Tt: GlamorousBuiltinComponent<"tt">,
    U: GlamorousBuiltinComponent<"u">,
    Ul: GlamorousBuiltinComponent<"ul">,
    Var: GlamorousBuiltinComponent<"var">,
    Video: GlamorousBuiltinComponent<"video">,
    Wbr: GlamorousBuiltinComponent<"wbr">,
    Xmp: GlamorousBuiltinComponent<"xmp">
  };

  declare export var A: GlamorousBuiltinComponent<"a">;
  declare export var Abbr: GlamorousBuiltinComponent<"abbr">;
  declare export var Acronym: GlamorousBuiltinComponent<"acronym">;
  declare export var Address: GlamorousBuiltinComponent<"address">;
  declare export var Applet: GlamorousBuiltinComponent<"applet">;
  declare export var Area: GlamorousBuiltinComponent<"area">;
  declare export var Article: GlamorousBuiltinComponent<"article">;
  declare export var Aside: GlamorousBuiltinComponent<"aside">;
  declare export var Audio: GlamorousBuiltinComponent<"audio">;
  declare export var B: GlamorousBuiltinComponent<"b">;
  declare export var Base: GlamorousBuiltinComponent<"base">;
  declare export var Basefont: GlamorousBuiltinComponent<"basefont">;
  declare export var Bdi: GlamorousBuiltinComponent<"bdi">;
  declare export var Bdo: GlamorousBuiltinComponent<"bdo">;
  declare export var Bgsound: GlamorousBuiltinComponent<"bgsound">;
  declare export var Big: GlamorousBuiltinComponent<"big">;
  declare export var Blink: GlamorousBuiltinComponent<"blink">;
  declare export var Blockquote: GlamorousBuiltinComponent<"blockquote">;
  declare export var Body: GlamorousBuiltinComponent<"body">;
  declare export var Br: GlamorousBuiltinComponent<"br">;
  declare export var Button: GlamorousBuiltinComponent<"button">;
  declare export var Canvas: GlamorousBuiltinComponent<"canvas">;
  declare export var Caption: GlamorousBuiltinComponent<"caption">;
  declare export var Center: GlamorousBuiltinComponent<"center">;
  declare export var Cite: GlamorousBuiltinComponent<"cite">;
  declare export var Code: GlamorousBuiltinComponent<"code">;
  declare export var Col: GlamorousBuiltinComponent<"col">;
  declare export var Colgroup: GlamorousBuiltinComponent<"colgroup">;
  declare export var Command: GlamorousBuiltinComponent<"command">;
  declare export var Content: GlamorousBuiltinComponent<"content">;
  declare export var Data: GlamorousBuiltinComponent<"data">;
  declare export var Datalist: GlamorousBuiltinComponent<"datalist">;
  declare export var Dd: GlamorousBuiltinComponent<"dd">;
  declare export var Del: GlamorousBuiltinComponent<"del">;
  declare export var Details: GlamorousBuiltinComponent<"details">;
  declare export var Dfn: GlamorousBuiltinComponent<"dfn">;
  declare export var Dialog: GlamorousBuiltinComponent<"dialog">;
  declare export var Dir: GlamorousBuiltinComponent<"dir">;
  declare export var Div: GlamorousBuiltinComponent<"div">;
  declare export var Dl: GlamorousBuiltinComponent<"dl">;
  declare export var Dt: GlamorousBuiltinComponent<"dt">;
  declare export var Element: GlamorousBuiltinComponent<"element">;
  declare export var Em: GlamorousBuiltinComponent<"em">;
  declare export var Embed: GlamorousBuiltinComponent<"embed">;
  declare export var Fieldset: GlamorousBuiltinComponent<"fieldset">;
  declare export var Figcaption: GlamorousBuiltinComponent<"figcaption">;
  declare export var Figure: GlamorousBuiltinComponent<"figure">;
  declare export var Font: GlamorousBuiltinComponent<"font">;
  declare export var Footer: GlamorousBuiltinComponent<"footer">;
  declare export var Form: GlamorousBuiltinComponent<"form">;
  declare export var Frame: GlamorousBuiltinComponent<"frame">;
  declare export var Frameset: GlamorousBuiltinComponent<"frameset">;
  declare export var H1: GlamorousBuiltinComponent<"h1">;
  declare export var H2: GlamorousBuiltinComponent<"h2">;
  declare export var H3: GlamorousBuiltinComponent<"h3">;
  declare export var H4: GlamorousBuiltinComponent<"h4">;
  declare export var H5: GlamorousBuiltinComponent<"h5">;
  declare export var H6: GlamorousBuiltinComponent<"h6">;
  declare export var Head: GlamorousBuiltinComponent<"head">;
  declare export var Header: GlamorousBuiltinComponent<"header">;
  declare export var Hgroup: GlamorousBuiltinComponent<"hgroup">;
  declare export var Hr: GlamorousBuiltinComponent<"hr">;
  declare export var Html: GlamorousBuiltinComponent<"html">;
  declare export var I: GlamorousBuiltinComponent<"i">;
  declare export var Iframe: GlamorousBuiltinComponent<"iframe">;
  declare export var Image: GlamorousBuiltinComponent<"image">;
  declare export var Img: GlamorousBuiltinComponent<"img">;
  declare export var Input: GlamorousBuiltinComponent<"input">;
  declare export var Ins: GlamorousBuiltinComponent<"ins">;
  declare export var Isindex: GlamorousBuiltinComponent<"isindex">;
  declare export var Kbd: GlamorousBuiltinComponent<"kbd">;
  declare export var Keygen: GlamorousBuiltinComponent<"keygen">;
  declare export var Label: GlamorousBuiltinComponent<"label">;
  declare export var Legend: GlamorousBuiltinComponent<"legend">;
  declare export var Li: GlamorousBuiltinComponent<"li">;
  declare export var Link: GlamorousBuiltinComponent<"link">;
  declare export var Listing: GlamorousBuiltinComponent<"listing">;
  declare export var Main: GlamorousBuiltinComponent<"main">;
  declare export var Map: GlamorousBuiltinComponent<"map">;
  declare export var Mark: GlamorousBuiltinComponent<"mark">;
  declare export var Marquee: GlamorousBuiltinComponent<"marquee">;
  declare export var Math: GlamorousBuiltinComponent<"math">;
  declare export var Menu: GlamorousBuiltinComponent<"menu">;
  declare export var Menuitem: GlamorousBuiltinComponent<"menuitem">;
  declare export var Meta: GlamorousBuiltinComponent<"meta">;
  declare export var Meter: GlamorousBuiltinComponent<"meter">;
  declare export var Multicol: GlamorousBuiltinComponent<"multicol">;
  declare export var Nav: GlamorousBuiltinComponent<"nav">;
  declare export var Nextid: GlamorousBuiltinComponent<"nextid">;
  declare export var Nobr: GlamorousBuiltinComponent<"nobr">;
  declare export var Noembed: GlamorousBuiltinComponent<"noembed">;
  declare export var Noframes: GlamorousBuiltinComponent<"noframes">;
  declare export var Noscript: GlamorousBuiltinComponent<"noscript">;
  declare export var Object: GlamorousBuiltinComponent<"object">;
  declare export var Ol: GlamorousBuiltinComponent<"ol">;
  declare export var Optgroup: GlamorousBuiltinComponent<"optgroup">;
  declare export var Option: GlamorousBuiltinComponent<"option">;
  declare export var Output: GlamorousBuiltinComponent<"output">;
  declare export var P: GlamorousBuiltinComponent<"p">;
  declare export var Param: GlamorousBuiltinComponent<"param">;
  declare export var Picture: GlamorousBuiltinComponent<"picture">;
  declare export var Plaintext: GlamorousBuiltinComponent<"plaintext">;
  declare export var Pre: GlamorousBuiltinComponent<"pre">;
  declare export var Progress: GlamorousBuiltinComponent<"progress">;
  declare export var Q: GlamorousBuiltinComponent<"q">;
  declare export var Rb: GlamorousBuiltinComponent<"rb">;
  declare export var Rbc: GlamorousBuiltinComponent<"rbc">;
  declare export var Rp: GlamorousBuiltinComponent<"rp">;
  declare export var Rt: GlamorousBuiltinComponent<"rt">;
  declare export var Rtc: GlamorousBuiltinComponent<"rtc">;
  declare export var Ruby: GlamorousBuiltinComponent<"ruby">;
  declare export var S: GlamorousBuiltinComponent<"s">;
  declare export var Samp: GlamorousBuiltinComponent<"samp">;
  declare export var Script: GlamorousBuiltinComponent<"script">;
  declare export var Section: GlamorousBuiltinComponent<"section">;
  declare export var Select: GlamorousBuiltinComponent<"select">;
  declare export var Shadow: GlamorousBuiltinComponent<"shadow">;
  declare export var Slot: GlamorousBuiltinComponent<"slot">;
  declare export var Small: GlamorousBuiltinComponent<"small">;
  declare export var Source: GlamorousBuiltinComponent<"source">;
  declare export var Spacer: GlamorousBuiltinComponent<"spacer">;
  declare export var Span: GlamorousBuiltinComponent<"span">;
  declare export var Strike: GlamorousBuiltinComponent<"strike">;
  declare export var Strong: GlamorousBuiltinComponent<"strong">;
  declare export var Style: GlamorousBuiltinComponent<"style">;
  declare export var Sub: GlamorousBuiltinComponent<"sub">;
  declare export var Summary: GlamorousBuiltinComponent<"summary">;
  declare export var Sup: GlamorousBuiltinComponent<"sup">;
  declare export var Svg: GlamorousBuiltinComponent<"svg">;
  declare export var Table: GlamorousBuiltinComponent<"table">;
  declare export var Tbody: GlamorousBuiltinComponent<"tbody">;
  declare export var Td: GlamorousBuiltinComponent<"td">;
  declare export var Template: GlamorousBuiltinComponent<"template">;
  declare export var Textarea: GlamorousBuiltinComponent<"textarea">;
  declare export var Tfoot: GlamorousBuiltinComponent<"tfoot">;
  declare export var Th: GlamorousBuiltinComponent<"th">;
  declare export var Thead: GlamorousBuiltinComponent<"thead">;
  declare export var Time: GlamorousBuiltinComponent<"time">;
  declare export var Title: GlamorousBuiltinComponent<"title">;
  declare export var Tr: GlamorousBuiltinComponent<"tr">;
  declare export var Track: GlamorousBuiltinComponent<"track">;
  declare export var Tt: GlamorousBuiltinComponent<"tt">;
  declare export var U: GlamorousBuiltinComponent<"u">;
  declare export var Ul: GlamorousBuiltinComponent<"ul">;
  declare export var Var: GlamorousBuiltinComponent<"var">;
  declare export var Video: GlamorousBuiltinComponent<"video">;
  declare export var Wbr: GlamorousBuiltinComponent<"wbr">;
  declare export var Xmp: GlamorousBuiltinComponent<"xmp">;

  declare export default Glamorous
}
