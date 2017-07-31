// @flow

type $npm$styledComponents$Interpolation = ((executionContext: Object) => string) | string | number;
type $npm$styledComponents$NameGenerator = (hash: number) => string;

type $npm$styledComponents$TaggedTemplateLiteral<R: $npm$styledComponents$Component<*>> =
  (Array<string>, $npm$styledComponents$Interpolation) => R;

type $npm$styledComponents$Theme = {[key: string]: mixed};
type $npm$styledComponents$ThemeProviderProps = {
  theme: $npm$styledComponents$Theme | ((outerTheme: $npm$styledComponents$Theme) => void)
};
type $npm$styledComponents$Component<Props: {}> =
  | ReactClass<Props>
  | (props: Props) => React$Element<*>;

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
  declare type Interpolation = $npm$styledComponents$Interpolation;
  declare type NameGenerator = $npm$styledComponents$NameGenerator;

  declare type Component<P> = $npm$styledComponents$Component<P>;
  declare type StyledComponent<C: Component<*>> = TaggedTemplateLiteral<C>;

  declare type Theme = $npm$styledComponents$Theme;
  declare type ThemeProviderProps = $npm$styledComponents$ThemeProviderProps;

  declare type TaggedTemplateLiteral<R> = $npm$styledComponents$TaggedTemplateLiteral<R>;
  declare type TaggedTemplateLiteralToComponent<C = Component<{}>> = TaggedTemplateLiteral<C>;

  declare module.exports: {
    injectGlobal: TaggedTemplateLiteral<*> => void,
    css: TaggedTemplateLiteral<*> => Array<Interpolation>,
    keyframes: TaggedTemplateLiteral<*> => string,
    withTheme: <T: {}, C: Component<*>>(component: C) => (C & Component<{ theme: T }>),
    ServerStyleSheet: typeof Npm$StyledComponents$ServerStyleSheet,
    StyleSheetManager: typeof Npm$StyledComponents$StyleSheetManager,
    ThemeProvider: typeof Npm$StyledComponents$ThemeProvider,

    <T, U: T>(baseComponent: U):  TaggedTemplateLiteralToComponent<T>,
    a:                            TaggedTemplateLiteralToComponent<>,
    abbr:                         TaggedTemplateLiteralToComponent<>,
    address:                      TaggedTemplateLiteralToComponent<>,
    area:                         TaggedTemplateLiteralToComponent<>,
    article:                      TaggedTemplateLiteralToComponent<>,
    aside:                        TaggedTemplateLiteralToComponent<>,
    audio:                        TaggedTemplateLiteralToComponent<>,
    b:                            TaggedTemplateLiteralToComponent<>,
    base:                         TaggedTemplateLiteralToComponent<>,
    bdi:                          TaggedTemplateLiteralToComponent<>,
    bdo:                          TaggedTemplateLiteralToComponent<>,
    big:                          TaggedTemplateLiteralToComponent<>,
    blockquote:                   TaggedTemplateLiteralToComponent<>,
    body:                         TaggedTemplateLiteralToComponent<>,
    br:                           TaggedTemplateLiteralToComponent<>,
    button:                       TaggedTemplateLiteralToComponent<>,
    canvas:                       TaggedTemplateLiteralToComponent<>,
    caption:                      TaggedTemplateLiteralToComponent<>,
    cite:                         TaggedTemplateLiteralToComponent<>,
    code:                         TaggedTemplateLiteralToComponent<>,
    col:                          TaggedTemplateLiteralToComponent<>,
    colgroup:                     TaggedTemplateLiteralToComponent<>,
    data:                         TaggedTemplateLiteralToComponent<>,
    datalist:                     TaggedTemplateLiteralToComponent<>,
    dd:                           TaggedTemplateLiteralToComponent<>,
    del:                          TaggedTemplateLiteralToComponent<>,
    details:                      TaggedTemplateLiteralToComponent<>,
    dfn:                          TaggedTemplateLiteralToComponent<>,
    dialog:                       TaggedTemplateLiteralToComponent<>,
    div:                          TaggedTemplateLiteralToComponent<>,
    dl:                           TaggedTemplateLiteralToComponent<>,
    dt:                           TaggedTemplateLiteralToComponent<>,
    em:                           TaggedTemplateLiteralToComponent<>,
    embed:                        TaggedTemplateLiteralToComponent<>,
    fieldset:                     TaggedTemplateLiteralToComponent<>,
    figcaption:                   TaggedTemplateLiteralToComponent<>,
    figure:                       TaggedTemplateLiteralToComponent<>,
    footer:                       TaggedTemplateLiteralToComponent<>,
    form:                         TaggedTemplateLiteralToComponent<>,
    h1:                           TaggedTemplateLiteralToComponent<>,
    h2:                           TaggedTemplateLiteralToComponent<>,
    h3:                           TaggedTemplateLiteralToComponent<>,
    h4:                           TaggedTemplateLiteralToComponent<>,
    h5:                           TaggedTemplateLiteralToComponent<>,
    h6:                           TaggedTemplateLiteralToComponent<>,
    head:                         TaggedTemplateLiteralToComponent<>,
    header:                       TaggedTemplateLiteralToComponent<>,
    hgroup:                       TaggedTemplateLiteralToComponent<>,
    hr:                           TaggedTemplateLiteralToComponent<>,
    html:                         TaggedTemplateLiteralToComponent<>,
    i:                            TaggedTemplateLiteralToComponent<>,
    iframe:                       TaggedTemplateLiteralToComponent<>,
    img:                          TaggedTemplateLiteralToComponent<>,
    input:                        TaggedTemplateLiteralToComponent<>,
    ins:                          TaggedTemplateLiteralToComponent<>,
    kbd:                          TaggedTemplateLiteralToComponent<>,
    keygen:                       TaggedTemplateLiteralToComponent<>,
    label:                        TaggedTemplateLiteralToComponent<>,
    legend:                       TaggedTemplateLiteralToComponent<>,
    li:                           TaggedTemplateLiteralToComponent<>,
    link:                         TaggedTemplateLiteralToComponent<>,
    main:                         TaggedTemplateLiteralToComponent<>,
    map:                          TaggedTemplateLiteralToComponent<>,
    mark:                         TaggedTemplateLiteralToComponent<>,
    menu:                         TaggedTemplateLiteralToComponent<>,
    menuitem:                     TaggedTemplateLiteralToComponent<>,
    meta:                         TaggedTemplateLiteralToComponent<>,
    meter:                        TaggedTemplateLiteralToComponent<>,
    nav:                          TaggedTemplateLiteralToComponent<>,
    noscript:                     TaggedTemplateLiteralToComponent<>,
    object:                       TaggedTemplateLiteralToComponent<>,
    ol:                           TaggedTemplateLiteralToComponent<>,
    optgroup:                     TaggedTemplateLiteralToComponent<>,
    option:                       TaggedTemplateLiteralToComponent<>,
    output:                       TaggedTemplateLiteralToComponent<>,
    p:                            TaggedTemplateLiteralToComponent<>,
    param:                        TaggedTemplateLiteralToComponent<>,
    picture:                      TaggedTemplateLiteralToComponent<>,
    pre:                          TaggedTemplateLiteralToComponent<>,
    progress:                     TaggedTemplateLiteralToComponent<>,
    q:                            TaggedTemplateLiteralToComponent<>,
    rp:                           TaggedTemplateLiteralToComponent<>,
    rt:                           TaggedTemplateLiteralToComponent<>,
    ruby:                         TaggedTemplateLiteralToComponent<>,
    s:                            TaggedTemplateLiteralToComponent<>,
    samp:                         TaggedTemplateLiteralToComponent<>,
    script:                       TaggedTemplateLiteralToComponent<>,
    section:                      TaggedTemplateLiteralToComponent<>,
    select:                       TaggedTemplateLiteralToComponent<>,
    small:                        TaggedTemplateLiteralToComponent<>,
    source:                       TaggedTemplateLiteralToComponent<>,
    span:                         TaggedTemplateLiteralToComponent<>,
    strong:                       TaggedTemplateLiteralToComponent<>,
    style:                        TaggedTemplateLiteralToComponent<>,
    sub:                          TaggedTemplateLiteralToComponent<>,
    summary:                      TaggedTemplateLiteralToComponent<>,
    sup:                          TaggedTemplateLiteralToComponent<>,
    table:                        TaggedTemplateLiteralToComponent<>,
    tbody:                        TaggedTemplateLiteralToComponent<>,
    td:                           TaggedTemplateLiteralToComponent<>,
    textarea:                     TaggedTemplateLiteralToComponent<>,
    tfoot:                        TaggedTemplateLiteralToComponent<>,
    th:                           TaggedTemplateLiteralToComponent<>,
    thead:                        TaggedTemplateLiteralToComponent<>,
    time:                         TaggedTemplateLiteralToComponent<>,
    title:                        TaggedTemplateLiteralToComponent<>,
    tr:                           TaggedTemplateLiteralToComponent<>,
    track:                        TaggedTemplateLiteralToComponent<>,
    u:                            TaggedTemplateLiteralToComponent<>,
    ul:                           TaggedTemplateLiteralToComponent<>,
    var:                          TaggedTemplateLiteralToComponent<>,
    video:                        TaggedTemplateLiteralToComponent<>,
    wbr:                          TaggedTemplateLiteralToComponent<>,

    // SVG
    circle:                       TaggedTemplateLiteralToComponent<>,
    clipPath:                     TaggedTemplateLiteralToComponent<>,
    defs:                         TaggedTemplateLiteralToComponent<>,
    ellipse:                      TaggedTemplateLiteralToComponent<>,
    g:                            TaggedTemplateLiteralToComponent<>,
    image:                        TaggedTemplateLiteralToComponent<>,
    line:                         TaggedTemplateLiteralToComponent<>,
    linearGradient:               TaggedTemplateLiteralToComponent<>,
    mask:                         TaggedTemplateLiteralToComponent<>,
    path:                         TaggedTemplateLiteralToComponent<>,
    pattern:                      TaggedTemplateLiteralToComponent<>,
    polygon:                      TaggedTemplateLiteralToComponent<>,
    polyline:                     TaggedTemplateLiteralToComponent<>,
    radialGradient:               TaggedTemplateLiteralToComponent<>,
    rect:                         TaggedTemplateLiteralToComponent<>,
    stop:                         TaggedTemplateLiteralToComponent<>,
    svg:                          TaggedTemplateLiteralToComponent<>,
    text:                         TaggedTemplateLiteralToComponent<>,
    tspan:                        TaggedTemplateLiteralToComponent<>,
  };
}

declare module 'styled-components/native' {
  declare type Interpolation = $npm$styledComponents$Interpolation;
  declare type NameGenerator = $npm$styledComponents$NameGenerator;

  declare type Component<P> = $npm$styledComponents$Component<P>;
  declare type StyledComponent<C: Component<*>> = TaggedTemplateLiteral<C>;

  declare type Theme = $npm$styledComponents$Theme;
  declare type ThemeProviderProps = $npm$styledComponents$ThemeProviderProps;

  declare type TaggedTemplateLiteral<R> = $npm$styledComponents$TaggedTemplateLiteral<R>;
  declare type TaggedTemplateLiteralToComponent<C = Component<{}>> = TaggedTemplateLiteral<C>;

  declare module.exports: {
    css: TaggedTemplateLiteral<*> => Array<Interpolation>,
    withTheme: <T: {}, C: Component<*>>(component: C) => (C & Component<{ theme: T }>),
    keyframes: TaggedTemplateLiteral<*> => string,
    ThemeProvider: typeof Npm$StyledComponents$ThemeProvider,

    <T, U: T>(baseComponent: U):  TaggedTemplateLiteralToComponent<T>,
    ActivityIndicator:            TaggedTemplateLiteralToComponent<>,
    ActivityIndicatorIOS:         TaggedTemplateLiteralToComponent<>,
    ART:                          TaggedTemplateLiteralToComponent<>,
    Button:                       TaggedTemplateLiteralToComponent<>,
    DatePickerIOS:                TaggedTemplateLiteralToComponent<>,
    DrawerLayoutAndroid:          TaggedTemplateLiteralToComponent<>,
    FlatList:                     TaggedTemplateLiteralToComponent<>,
    Image:                        TaggedTemplateLiteralToComponent<>,
    ImageEditor:                  TaggedTemplateLiteralToComponent<>,
    ImageStore:                   TaggedTemplateLiteralToComponent<>,
    KeyboardAvoidingView:         TaggedTemplateLiteralToComponent<>,
    ListView:                     TaggedTemplateLiteralToComponent<>,
    MapView:                      TaggedTemplateLiteralToComponent<>,
    Modal:                        TaggedTemplateLiteralToComponent<>,
    Navigator:                    TaggedTemplateLiteralToComponent<>,
    NavigatorIOS:                 TaggedTemplateLiteralToComponent<>,
    Picker:                       TaggedTemplateLiteralToComponent<>,
    PickerIOS:                    TaggedTemplateLiteralToComponent<>,
    ProgressBarAndroid:           TaggedTemplateLiteralToComponent<>,
    ProgressViewIOS:              TaggedTemplateLiteralToComponent<>,
    RecyclerViewBackedScrollView: TaggedTemplateLiteralToComponent<>,
    RefreshControl:               TaggedTemplateLiteralToComponent<>,
    ScrollView:                   TaggedTemplateLiteralToComponent<>,
    SectionList:                  TaggedTemplateLiteralToComponent<>,
    SegmentedControlIOS:          TaggedTemplateLiteralToComponent<>,
    Slider:                       TaggedTemplateLiteralToComponent<>,
    SliderIOS:                    TaggedTemplateLiteralToComponent<>,
    SnapshotViewIOS:              TaggedTemplateLiteralToComponent<>,
    StatusBar:                    TaggedTemplateLiteralToComponent<>,
    SwipeableListView:            TaggedTemplateLiteralToComponent<>,
    Switch:                       TaggedTemplateLiteralToComponent<>,
    SwitchAndroid:                TaggedTemplateLiteralToComponent<>,
    SwitchIOS:                    TaggedTemplateLiteralToComponent<>,
    TabBarIOS:                    TaggedTemplateLiteralToComponent<>,
    Text:                         TaggedTemplateLiteralToComponent<>,
    TextInput:                    TaggedTemplateLiteralToComponent<>,
    ToastAndroid:                 TaggedTemplateLiteralToComponent<>,
    ToolbarAndroid:               TaggedTemplateLiteralToComponent<>,
    Touchable:                    TaggedTemplateLiteralToComponent<>,
    TouchableHighlight:           TaggedTemplateLiteralToComponent<>,
    TouchableNativeFeedback:      TaggedTemplateLiteralToComponent<>,
    TouchableOpacity:             TaggedTemplateLiteralToComponent<>,
    TouchableWithoutFeedback:     TaggedTemplateLiteralToComponent<>,
    View:                         TaggedTemplateLiteralToComponent<>,
    ViewPagerAndroid:             TaggedTemplateLiteralToComponent<>,
    VirtualizedList:              TaggedTemplateLiteralToComponent<>,
    WebView:                      TaggedTemplateLiteralToComponent<>,
  };
}
