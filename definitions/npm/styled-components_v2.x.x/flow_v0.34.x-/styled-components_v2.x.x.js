// @flow

type $npm$styledComponents$Interpolation = ((executionContext: Object) => string) | string | number;
type $npm$styledComponents$NameGenerator = (hash: number) => string;

type $npm$styledComponents$TaggedTemplateLiteral<R> = {| (Array<string>, $npm$styledComponents$Interpolation): R |};

type $npm$styledComponents$ReactComponentFunctional<Props: {}> = Props => React$Element<*>
type $npm$styledComponents$ReactComponentClass<Props, DefaultProps = *> = Class<React$Component<DefaultProps, Props, *>>

type $npm$styledComponents$ReactComponentUnion<Props> =
  | $npm$styledComponents$ReactComponentFunctional<Props>
  | $npm$styledComponents$ReactComponentClass<Props>;

type $npm$styledComponents$ReactComponentIntersection<Props, DefaultProps = *> =
  & $npm$styledComponents$ReactComponentFunctional<Props>
  & $npm$styledComponents$ReactComponentClass<Props, DefaultProps>;

type $npm$styledComponents$ReactComponentStyledStaticPropsWithComponent = <
  Props, DefaultProps,
  Input:
    | string
    | $npm$styledComponents$ReactComponentStyled<Props, DefaultProps>
    | $npm$styledComponents$ReactComponentClass<Props, DefaultProps>
    | $npm$styledComponents$ReactComponentFunctional<Props>,
>(Input) => $npm$styledComponents$ReactComponentStyled<Props, DefaultProps>

type $npm$styledComponents$ReactComponentStyledStaticProps<Props> = {|
  attrs: <O: {}>(O) => $npm$styledComponents$ReactComponentStyledTaggedTemplateLiteral<Props>,
  extend: $npm$styledComponents$ReactComponentStyledTaggedTemplateLiteral<Props>,
  withComponent: $npm$styledComponents$ReactComponentStyledStaticPropsWithComponent,
|}

type $npm$styledComponents$ReactComponentStyled<Props, DefaultProps = *> =
  & $npm$styledComponents$ReactComponentStyledStaticProps<Props>
  & $npm$styledComponents$ReactComponentIntersection<Props, DefaultProps>

type $npm$styledComponents$ReactComponentStyledTaggedTemplateLiteral<Props> =
  & $npm$styledComponents$ReactComponentStyledStaticProps<Props>
  & $npm$styledComponents$TaggedTemplateLiteral<$npm$styledComponents$ReactComponentStyled<Props>>

type $npm$styledComponents$WithThemeReactComponentClass = <
  InputProps: { theme: $npm$styledComponents$Theme },
  InputDefaultProps: {},
  OutputProps: $Diff<InputProps, { theme: $npm$styledComponents$Theme }>,
  OutputDefaultProps: InputDefaultProps & { theme: $npm$styledComponents$Theme },
>($npm$styledComponents$ReactComponentClass<InputProps, InputDefaultProps>) => $npm$styledComponents$ReactComponentClass<OutputProps, OutputDefaultProps>

type $npm$styledComponents$WithThemeReactComponentClassUndefinedDefaultProps = <
  InputProps: { theme: $npm$styledComponents$Theme },
  OutputProps: $Diff<InputProps, { theme: $npm$styledComponents$Theme }>,
>($npm$styledComponents$ReactComponentClass<InputProps, void>) => $npm$styledComponents$ReactComponentClass<OutputProps, { theme: $npm$styledComponents$Theme }>

type $npm$styledComponents$WithThemeReactComponentFunctional = <
  InputProps: { theme: $npm$styledComponents$Theme },
  OutputProps: $Diff<InputProps, { theme: $npm$styledComponents$Theme }>
>($npm$styledComponents$ReactComponentFunctional<InputProps>) => $npm$styledComponents$ReactComponentFunctional<OutputProps>

type $npm$styledComponents$WithTheme =
  & $npm$styledComponents$WithThemeReactComponentClass
  & $npm$styledComponents$WithThemeReactComponentClassUndefinedDefaultProps
  & $npm$styledComponents$WithThemeReactComponentFunctional

type $npm$styledComponents$Theme = {[key: string]: mixed};
type $npm$styledComponents$ThemeProviderProps = {
  theme: $npm$styledComponents$Theme | ((outerTheme: $npm$styledComponents$Theme) => void)
};

class Npm$StyledComponents$ThemeProvider extends React$Component {
  props: $npm$styledComponents$ThemeProviderProps;
}

type $npm$styledComponents$StyleSheetManagerProps = {
  sheet: mixed
}

class Npm$StyledComponents$StyleSheetManager extends React$Component {
  props: $npm$styledComponents$StyleSheetManagerProps;
}

class Npm$StyledComponents$ServerStyleSheet {
  instance: StyleSheet
  collectStyles: (children: any) => React$Element<*>
  getStyleTags: () => string
  getStyleElement: () => React$Element<*>
}

declare module 'styled-components' {
  declare type Interpolation                                    = $npm$styledComponents$Interpolation;
  declare type NameGenerator                                    = $npm$styledComponents$NameGenerator;
  declare type Theme                                            = $npm$styledComponents$Theme;
  declare type ThemeProviderProps                               = $npm$styledComponents$ThemeProviderProps;
  declare type TaggedTemplateLiteral<R>                         = $npm$styledComponents$TaggedTemplateLiteral<R>;

  declare type ReactComponentFunctional<Props: {}>              = $npm$styledComponents$ReactComponentFunctional<Props>;
  declare type ReactComponentClass<Props, DefaultProps = *>     = $npm$styledComponents$ReactComponentClass<Props, DefaultProps>;
  declare type ReactComponentUnion<Props>                       = $npm$styledComponents$ReactComponentUnion<Props>;
  declare type ReactComponentIntersection<Props>                = $npm$styledComponents$ReactComponentIntersection<Props>;
  declare type ReactComponentStyledStaticProps<Props>           = $npm$styledComponents$ReactComponentStyledStaticProps<Props>;
  declare type ReactComponentStyled<Props>                      = $npm$styledComponents$ReactComponentStyled<Props>;
  declare type ReactComponentStyledTaggedTemplateLiteral<Props> = $npm$styledComponents$ReactComponentStyledTaggedTemplateLiteral<Props>;

  declare module.exports: {
    <Props>(ReactComponentUnion<Props>): ReactComponentStyledTaggedTemplateLiteral<Props>,

    injectGlobal: TaggedTemplateLiteral<void>,
    css: TaggedTemplateLiteral<Array<Interpolation>>,
    keyframes: TaggedTemplateLiteral<string>,
    withTheme: $npm$styledComponents$WithTheme,
    ServerStyleSheet: typeof Npm$StyledComponents$ServerStyleSheet,
    StyleSheetManager: typeof Npm$StyledComponents$StyleSheetManager,
    ThemeProvider: typeof Npm$StyledComponents$ThemeProvider,

    a:                        ReactComponentStyledTaggedTemplateLiteral<{}>,
    abbr:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    address:                  ReactComponentStyledTaggedTemplateLiteral<{}>,
    area:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    article:                  ReactComponentStyledTaggedTemplateLiteral<{}>,
    aside:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
    audio:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
    b:                        ReactComponentStyledTaggedTemplateLiteral<{}>,
    base:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    bdi:                      ReactComponentStyledTaggedTemplateLiteral<{}>,
    bdo:                      ReactComponentStyledTaggedTemplateLiteral<{}>,
    big:                      ReactComponentStyledTaggedTemplateLiteral<{}>,
    blockquote:               ReactComponentStyledTaggedTemplateLiteral<{}>,
    body:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    br:                       ReactComponentStyledTaggedTemplateLiteral<{}>,
    button:                   ReactComponentStyledTaggedTemplateLiteral<{}>,
    canvas:                   ReactComponentStyledTaggedTemplateLiteral<{}>,
    caption:                  ReactComponentStyledTaggedTemplateLiteral<{}>,
    cite:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    code:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    col:                      ReactComponentStyledTaggedTemplateLiteral<{}>,
    colgroup:                 ReactComponentStyledTaggedTemplateLiteral<{}>,
    data:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    datalist:                 ReactComponentStyledTaggedTemplateLiteral<{}>,
    dd:                       ReactComponentStyledTaggedTemplateLiteral<{}>,
    del:                      ReactComponentStyledTaggedTemplateLiteral<{}>,
    details:                  ReactComponentStyledTaggedTemplateLiteral<{}>,
    dfn:                      ReactComponentStyledTaggedTemplateLiteral<{}>,
    dialog:                   ReactComponentStyledTaggedTemplateLiteral<{}>,
    div:                      ReactComponentStyledTaggedTemplateLiteral<{}>,
    dl:                       ReactComponentStyledTaggedTemplateLiteral<{}>,
    dt:                       ReactComponentStyledTaggedTemplateLiteral<{}>,
    em:                       ReactComponentStyledTaggedTemplateLiteral<{}>,
    embed:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
    fieldset:                 ReactComponentStyledTaggedTemplateLiteral<{}>,
    figcaption:               ReactComponentStyledTaggedTemplateLiteral<{}>,
    figure:                   ReactComponentStyledTaggedTemplateLiteral<{}>,
    footer:                   ReactComponentStyledTaggedTemplateLiteral<{}>,
    form:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    h1:                       ReactComponentStyledTaggedTemplateLiteral<{}>,
    h2:                       ReactComponentStyledTaggedTemplateLiteral<{}>,
    h3:                       ReactComponentStyledTaggedTemplateLiteral<{}>,
    h4:                       ReactComponentStyledTaggedTemplateLiteral<{}>,
    h5:                       ReactComponentStyledTaggedTemplateLiteral<{}>,
    h6:                       ReactComponentStyledTaggedTemplateLiteral<{}>,
    head:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    header:                   ReactComponentStyledTaggedTemplateLiteral<{}>,
    hgroup:                   ReactComponentStyledTaggedTemplateLiteral<{}>,
    hr:                       ReactComponentStyledTaggedTemplateLiteral<{}>,
    html:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    i:                        ReactComponentStyledTaggedTemplateLiteral<{}>,
    iframe:                   ReactComponentStyledTaggedTemplateLiteral<{}>,
    img:                      ReactComponentStyledTaggedTemplateLiteral<{}>,
    input:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
    ins:                      ReactComponentStyledTaggedTemplateLiteral<{}>,
    kbd:                      ReactComponentStyledTaggedTemplateLiteral<{}>,
    keygen:                   ReactComponentStyledTaggedTemplateLiteral<{}>,
    label:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
    legend:                   ReactComponentStyledTaggedTemplateLiteral<{}>,
    li:                       ReactComponentStyledTaggedTemplateLiteral<{}>,
    link:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    main:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    map:                      ReactComponentStyledTaggedTemplateLiteral<{}>,
    mark:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    menu:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    menuitem:                 ReactComponentStyledTaggedTemplateLiteral<{}>,
    meta:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    meter:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
    nav:                      ReactComponentStyledTaggedTemplateLiteral<{}>,
    noscript:                 ReactComponentStyledTaggedTemplateLiteral<{}>,
    object:                   ReactComponentStyledTaggedTemplateLiteral<{}>,
    ol:                       ReactComponentStyledTaggedTemplateLiteral<{}>,
    optgroup:                 ReactComponentStyledTaggedTemplateLiteral<{}>,
    option:                   ReactComponentStyledTaggedTemplateLiteral<{}>,
    output:                   ReactComponentStyledTaggedTemplateLiteral<{}>,
    p:                        ReactComponentStyledTaggedTemplateLiteral<{}>,
    param:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
    picture:                  ReactComponentStyledTaggedTemplateLiteral<{}>,
    pre:                      ReactComponentStyledTaggedTemplateLiteral<{}>,
    progress:                 ReactComponentStyledTaggedTemplateLiteral<{}>,
    q:                        ReactComponentStyledTaggedTemplateLiteral<{}>,
    rp:                       ReactComponentStyledTaggedTemplateLiteral<{}>,
    rt:                       ReactComponentStyledTaggedTemplateLiteral<{}>,
    ruby:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    s:                        ReactComponentStyledTaggedTemplateLiteral<{}>,
    samp:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    script:                   ReactComponentStyledTaggedTemplateLiteral<{}>,
    section:                  ReactComponentStyledTaggedTemplateLiteral<{}>,
    select:                   ReactComponentStyledTaggedTemplateLiteral<{}>,
    small:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
    source:                   ReactComponentStyledTaggedTemplateLiteral<{}>,
    span:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    strong:                   ReactComponentStyledTaggedTemplateLiteral<{}>,
    style:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
    sub:                      ReactComponentStyledTaggedTemplateLiteral<{}>,
    summary:                  ReactComponentStyledTaggedTemplateLiteral<{}>,
    sup:                      ReactComponentStyledTaggedTemplateLiteral<{}>,
    table:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
    tbody:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
    td:                       ReactComponentStyledTaggedTemplateLiteral<{}>,
    textarea:                 ReactComponentStyledTaggedTemplateLiteral<{}>,
    tfoot:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
    th:                       ReactComponentStyledTaggedTemplateLiteral<{}>,
    thead:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
    time:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    title:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
    tr:                       ReactComponentStyledTaggedTemplateLiteral<{}>,
    track:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
    u:                        ReactComponentStyledTaggedTemplateLiteral<{}>,
    ul:                       ReactComponentStyledTaggedTemplateLiteral<{}>,
    var:                      ReactComponentStyledTaggedTemplateLiteral<{}>,
    video:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
    wbr:                      ReactComponentStyledTaggedTemplateLiteral<{}>,

    // SVG
    circle:                   ReactComponentStyledTaggedTemplateLiteral<{}>,
    clipPath:                 ReactComponentStyledTaggedTemplateLiteral<{}>,
    defs:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    ellipse:                  ReactComponentStyledTaggedTemplateLiteral<{}>,
    g:                        ReactComponentStyledTaggedTemplateLiteral<{}>,
    image:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
    line:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    linearGradient:           ReactComponentStyledTaggedTemplateLiteral<{}>,
    mask:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    path:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    pattern:                  ReactComponentStyledTaggedTemplateLiteral<{}>,
    polygon:                  ReactComponentStyledTaggedTemplateLiteral<{}>,
    polyline:                 ReactComponentStyledTaggedTemplateLiteral<{}>,
    radialGradient:           ReactComponentStyledTaggedTemplateLiteral<{}>,
    rect:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    stop:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    svg:                      ReactComponentStyledTaggedTemplateLiteral<{}>,
    text:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    tspan:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
  };
}

declare module 'styled-components/native' {
  declare type Interpolation                                    = $npm$styledComponents$Interpolation;
  declare type NameGenerator                                    = $npm$styledComponents$NameGenerator;
  declare type Theme                                            = $npm$styledComponents$Theme;
  declare type ThemeProviderProps                               = $npm$styledComponents$ThemeProviderProps;
  declare type TaggedTemplateLiteral<R>                         = $npm$styledComponents$TaggedTemplateLiteral<R>;

  declare type ReactComponentFunctional<Props: {}>              = $npm$styledComponents$ReactComponentFunctional<Props>;
  declare type ReactComponentClass<Props, DefaultProps = *>     = $npm$styledComponents$ReactComponentClass<Props, DefaultProps>;
  declare type ReactComponentUnion<Props>                       = $npm$styledComponents$ReactComponentUnion<Props>;
  declare type ReactComponentIntersection<Props>                = $npm$styledComponents$ReactComponentIntersection<Props>;
  declare type ReactComponentStyledStaticProps<Props>           = $npm$styledComponents$ReactComponentStyledStaticProps<Props>;
  declare type ReactComponentStyled<Props>                      = $npm$styledComponents$ReactComponentStyled<Props>;
  declare type ReactComponentStyledTaggedTemplateLiteral<Props> = $npm$styledComponents$ReactComponentStyledTaggedTemplateLiteral<Props>;

  declare module.exports: {
    <Props>(ReactComponentUnion<Props>): ReactComponentStyledTaggedTemplateLiteral<Props>,

    css: TaggedTemplateLiteral<Array<Interpolation>>,
    keyframes: TaggedTemplateLiteral<string>,
    withTheme: $npm$styledComponents$WithTheme,
    ThemeProvider: typeof Npm$StyledComponents$ThemeProvider,

    ActivityIndicator:            ReactComponentStyledTaggedTemplateLiteral<{}>,
    ActivityIndicatorIOS:         ReactComponentStyledTaggedTemplateLiteral<{}>,
    ART:                          ReactComponentStyledTaggedTemplateLiteral<{}>,
    Button:                       ReactComponentStyledTaggedTemplateLiteral<{}>,
    DatePickerIOS:                ReactComponentStyledTaggedTemplateLiteral<{}>,
    DrawerLayoutAndroid:          ReactComponentStyledTaggedTemplateLiteral<{}>,
    FlatList:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    Image:                        ReactComponentStyledTaggedTemplateLiteral<{}>,
    ImageEditor:                  ReactComponentStyledTaggedTemplateLiteral<{}>,
    ImageStore:                   ReactComponentStyledTaggedTemplateLiteral<{}>,
    KeyboardAvoidingView:         ReactComponentStyledTaggedTemplateLiteral<{}>,
    ListView:                     ReactComponentStyledTaggedTemplateLiteral<{}>,
    MapView:                      ReactComponentStyledTaggedTemplateLiteral<{}>,
    Modal:                        ReactComponentStyledTaggedTemplateLiteral<{}>,
    Navigator:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
    NavigatorIOS:                 ReactComponentStyledTaggedTemplateLiteral<{}>,
    Picker:                       ReactComponentStyledTaggedTemplateLiteral<{}>,
    PickerIOS:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
    ProgressBarAndroid:           ReactComponentStyledTaggedTemplateLiteral<{}>,
    ProgressViewIOS:              ReactComponentStyledTaggedTemplateLiteral<{}>,
    RecyclerViewBackedScrollView: ReactComponentStyledTaggedTemplateLiteral<{}>,
    RefreshControl:               ReactComponentStyledTaggedTemplateLiteral<{}>,
    ScrollView:                   ReactComponentStyledTaggedTemplateLiteral<{}>,
    SectionList:                  ReactComponentStyledTaggedTemplateLiteral<{}>,
    SegmentedControlIOS:          ReactComponentStyledTaggedTemplateLiteral<{}>,
    Slider:                       ReactComponentStyledTaggedTemplateLiteral<{}>,
    SliderIOS:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
    SnapshotViewIOS:              ReactComponentStyledTaggedTemplateLiteral<{}>,
    StatusBar:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
    SwipeableListView:            ReactComponentStyledTaggedTemplateLiteral<{}>,
    Switch:                       ReactComponentStyledTaggedTemplateLiteral<{}>,
    SwitchAndroid:                ReactComponentStyledTaggedTemplateLiteral<{}>,
    SwitchIOS:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
    TabBarIOS:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
    Text:                         ReactComponentStyledTaggedTemplateLiteral<{}>,
    TextInput:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
    ToastAndroid:                 ReactComponentStyledTaggedTemplateLiteral<{}>,
    ToolbarAndroid:               ReactComponentStyledTaggedTemplateLiteral<{}>,
    Touchable:                    ReactComponentStyledTaggedTemplateLiteral<{}>,
    TouchableHighlight:           ReactComponentStyledTaggedTemplateLiteral<{}>,
    TouchableNativeFeedback:      ReactComponentStyledTaggedTemplateLiteral<{}>,
    TouchableOpacity:             ReactComponentStyledTaggedTemplateLiteral<{}>,
    TouchableWithoutFeedback:     ReactComponentStyledTaggedTemplateLiteral<{}>,
    View:                         ReactComponentStyledTaggedTemplateLiteral<{}>,
    ViewPagerAndroid:             ReactComponentStyledTaggedTemplateLiteral<{}>,
    VirtualizedList:              ReactComponentStyledTaggedTemplateLiteral<{}>,
    WebView:                      ReactComponentStyledTaggedTemplateLiteral<{}>,
  };
}
