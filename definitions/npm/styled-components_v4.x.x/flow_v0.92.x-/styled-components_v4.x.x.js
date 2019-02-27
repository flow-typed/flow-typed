// flow-typed signature: 8ae4cfa383fc58443d8d65b5301bf1c1
// flow-typed version: 1a7d5ca288/styled-components_v4.x.x/flow_>=v0.75.x

// @flow

declare module 'styled-components' {

  declare export type Interpolation<P: {}> =
                                    | ((executionContext: P) => string)
                                    | CSSRules<P>
                                    | KeyFrames
                                    | string
                                    | number


  declare export type CSSRules<P: {} = {}> = Array<Interpolation<P>>

  // This is not exported on purpose, since it's an implementation detail
  declare type TaggedTemplateLiteral<R, P: {}> = (strings : string[], ...interpolations : Array<Interpolation<P>>) => R

  declare export type CSSConstructor = TaggedTemplateLiteral<CSSRules<>, {}>
  declare export type KeyFramesConstructor = TaggedTemplateLiteral<KeyFrames, {}>
  declare export type CreateGlobalStyleConstructor = TaggedTemplateLiteral<React$ComponentType<*>, {}>

  declare interface Tag<T> {
    styleTag: HTMLStyleElement | null;
    getIds(): string[];
    hasNameForId(id: string, name: string): boolean;
    insertMarker(id: string): T;
    insertRules(id: string, cssRules: string[], name: ?string): void;
    removeRules(id: string): void;
    css(): string;
    toHTML(additionalAttrs: ?string): string;
    toElement(): React$Element<*>;
    clone(): Tag<T>;
    sealed: boolean;
  }

  // The `any`/weak types in here all come from `styled-components` directly, since those definitions were just copied over
  declare export class StyleSheet {
    static get master() : StyleSheet;
    static get instance() : StyleSheet;
    static reset(forceServer? : boolean) : void;

    id : number;
    forceServer : boolean;
    target : ?HTMLElement;
    tagMap : {[string]: Tag<any>}; // eslint-disable-line flowtype/no-weak-types
    deferred: { [string]: string[] | void };
    rehydratedNames: { [string]: boolean };
    ignoreRehydratedNames: { [string]: boolean };
    tags: Tag<any>[]; // eslint-disable-line flowtype/no-weak-types
    importRuleTag: Tag<any>; // eslint-disable-line flowtype/no-weak-types
    capacity: number;
    clones: StyleSheet[];

    constructor(?HTMLElement) : this;
    rehydrate() : this;
    clone() : StyleSheet;
    sealAllTags() : void;
    makeTag(tag : ?Tag<any>) : Tag<any>; // eslint-disable-line flowtype/no-weak-types
    getImportRuleTag() : Tag<any>; // eslint-disable-line flowtype/no-weak-types
    getTagForId(id : string): Tag<any>; // eslint-disable-line flowtype/no-weak-types
    hasId(id: string) : boolean;
    hasNameForId(id: string, name: string) : boolean;
    deferredInject(id : string, cssRules : string[]) : void;
    inject(id: string, cssRules : string[], name? : string) : void;
    remove(id : string) : void;
    toHtml() : string;
    toReactElements() : React$ElementType[];
  }

  declare export class KeyFrames {
    id : string;
    name : string;
    rules : string[];

    constructor(name : string, rules : string[]) : this;
    inject(StyleSheet) : void;
    toString() : string;
    getName() : string;
  }

  // I think any is appropriate here?
  // eslint-disable-next-line flowtype/no-weak-types
  declare export type Theme = {+[string] : any}

  declare export var css : CSSConstructor;
  declare export var keyframes : KeyFramesConstructor;
  declare export var createGlobalStyle : CreateGlobalStyleConstructor
  declare export var ThemeProvider : React$ComponentType<{children?: ?React$Node, theme : Theme | (Theme) => Theme}>

  // This is a bit hard to read. Not sure how to make it more readable. I think adding line-breaks makes it worse.
  declare type InjectedProps = { theme : Theme | void }
  declare  export function withTheme<Props : {}, Component: React$ComponentType<Props>>(WrappedComponent: Component) : React$ComponentType<$Diff<React$ElementConfig<$Supertype<Component>>, InjectedProps>>;

  declare export type StyledComponentType<Config, T: Theme, Instance = *> = {
    [[call]]: TaggedTemplateLiteral<React$AbstractComponent<Config, Instance>, {...$Exact<Config>, theme: T }>,
    +attrs: <A: $Shape<Config>>(attributes: A | (props: Config) => A) => TaggedTemplateLiteral<React$AbstractComponent<$Diff<Config, A>, Instance>, { ...$Exact<Config>, ...$Exact<A>, theme: T }>
  };

  declare type StyledIntrinsicComponentType<IntrinsicElement, T: Theme> = StyledComponentType<React$ElementConfig<IntrinsicElement>, T, IntrinsicElement>

  declare type StyledComponentList = {
    a:                        StyledIntrinsicComponentType<'a', Theme>,
    abbr:                     StyledIntrinsicComponentType<'abbr', Theme>,
    address:                  StyledIntrinsicComponentType<'address', Theme>,
    area:                     StyledIntrinsicComponentType<'area', Theme>,
    article:                  StyledIntrinsicComponentType<'article', Theme>,
    aside:                    StyledIntrinsicComponentType<'aside', Theme>,
    audio:                    StyledIntrinsicComponentType<'audio', Theme>,
    b:                        StyledIntrinsicComponentType<'b', Theme>,
    base:                     StyledIntrinsicComponentType<'base', Theme>,
    bdi:                      StyledIntrinsicComponentType<'bdi', Theme>,
    bdo:                      StyledIntrinsicComponentType<'bdo', Theme>,
    big:                      StyledIntrinsicComponentType<'big', Theme>,
    blockquote:               StyledIntrinsicComponentType<'blockquote', Theme>,
    body:                     StyledIntrinsicComponentType<'body', Theme>,
    br:                       StyledIntrinsicComponentType<'br', Theme>,
    button:                   StyledIntrinsicComponentType<'button', Theme>,
    canvas:                   StyledIntrinsicComponentType<'canvas', Theme>,
    caption:                  StyledIntrinsicComponentType<'caption', Theme>,
    cite:                     StyledIntrinsicComponentType<'cite', Theme>,
    code:                     StyledIntrinsicComponentType<'code', Theme>,
    col:                      StyledIntrinsicComponentType<'col', Theme>,
    colgroup:                 StyledIntrinsicComponentType<'colgroup', Theme>,
    data:                     StyledIntrinsicComponentType<'data', Theme>,
    datalist:                 StyledIntrinsicComponentType<'datalist', Theme>,
    dd:                       StyledIntrinsicComponentType<'dd', Theme>,
    del:                      StyledIntrinsicComponentType<'del', Theme>,
    details:                  StyledIntrinsicComponentType<'details', Theme>,
    dfn:                      StyledIntrinsicComponentType<'dfn', Theme>,
    dialog:                   StyledIntrinsicComponentType<'dialog', Theme>,
    div:                      StyledIntrinsicComponentType<'div', Theme>,
    dl:                       StyledIntrinsicComponentType<'dl', Theme>,
    dt:                       StyledIntrinsicComponentType<'dt', Theme>,
    em:                       StyledIntrinsicComponentType<'em', Theme>,
    embed:                    StyledIntrinsicComponentType<'embed', Theme>,
    fieldset:                 StyledIntrinsicComponentType<'fieldset', Theme>,
    figcaption:               StyledIntrinsicComponentType<'figcaption', Theme>,
    figure:                   StyledIntrinsicComponentType<'figure', Theme>,
    footer:                   StyledIntrinsicComponentType<'footer', Theme>,
    form:                     StyledIntrinsicComponentType<'form', Theme>,
    h1:                       StyledIntrinsicComponentType<'h1', Theme>,
    h2:                       StyledIntrinsicComponentType<'h2', Theme>,
    h3:                       StyledIntrinsicComponentType<'h3', Theme>,
    h4:                       StyledIntrinsicComponentType<'h4', Theme>,
    h5:                       StyledIntrinsicComponentType<'h5', Theme>,
    h6:                       StyledIntrinsicComponentType<'h6', Theme>,
    head:                     StyledIntrinsicComponentType<'head', Theme>,
    header:                   StyledIntrinsicComponentType<'header', Theme>,
    hgroup:                   StyledIntrinsicComponentType<'hgroup', Theme>,
    hr:                       StyledIntrinsicComponentType<'hr', Theme>,
    html:                     StyledIntrinsicComponentType<'html', Theme>,
    i:                        StyledIntrinsicComponentType<'i', Theme>,
    iframe:                   StyledIntrinsicComponentType<'iframe', Theme>,
    img:                      StyledIntrinsicComponentType<'img', Theme>,
    input:                    StyledIntrinsicComponentType<'input', Theme>,
    ins:                      StyledIntrinsicComponentType<'ins', Theme>,
    kbd:                      StyledIntrinsicComponentType<'kbd', Theme>,
    keygen:                   StyledIntrinsicComponentType<'keygen', Theme>,
    label:                    StyledIntrinsicComponentType<'label', Theme>,
    legend:                   StyledIntrinsicComponentType<'legend', Theme>,
    li:                       StyledIntrinsicComponentType<'li', Theme>,
    link:                     StyledIntrinsicComponentType<'link', Theme>,
    main:                     StyledIntrinsicComponentType<'main', Theme>,
    map:                      StyledIntrinsicComponentType<'map', Theme>,
    mark:                     StyledIntrinsicComponentType<'mark', Theme>,
    menu:                     StyledIntrinsicComponentType<'menu', Theme>,
    menuitem:                 StyledIntrinsicComponentType<'menuitem', Theme>,
    meta:                     StyledIntrinsicComponentType<'meta', Theme>,
    meter:                    StyledIntrinsicComponentType<'meter', Theme>,
    nav:                      StyledIntrinsicComponentType<'nav', Theme>,
    noscript:                 StyledIntrinsicComponentType<'noscript', Theme>,
    object:                   StyledIntrinsicComponentType<'object', Theme>,
    ol:                       StyledIntrinsicComponentType<'ol', Theme>,
    optgroup:                 StyledIntrinsicComponentType<'optgroup', Theme>,
    option:                   StyledIntrinsicComponentType<'option', Theme>,
    output:                   StyledIntrinsicComponentType<'output', Theme>,
    p:                        StyledIntrinsicComponentType<'p', Theme>,
    param:                    StyledIntrinsicComponentType<'param', Theme>,
    picture:                  StyledIntrinsicComponentType<'picture', Theme>,
    pre:                      StyledIntrinsicComponentType<'pre', Theme>,
    progress:                 StyledIntrinsicComponentType<'progress', Theme>,
    q:                        StyledIntrinsicComponentType<'q', Theme>,
    rp:                       StyledIntrinsicComponentType<'rp', Theme>,
    rt:                       StyledIntrinsicComponentType<'rt', Theme>,
    ruby:                     StyledIntrinsicComponentType<'ruby', Theme>,
    s:                        StyledIntrinsicComponentType<'s', Theme>,
    samp:                     StyledIntrinsicComponentType<'samp', Theme>,
    script:                   StyledIntrinsicComponentType<'script', Theme>,
    section:                  StyledIntrinsicComponentType<'section', Theme>,
    select:                   StyledIntrinsicComponentType<'select', Theme>,
    small:                    StyledIntrinsicComponentType<'small', Theme>,
    source:                   StyledIntrinsicComponentType<'source', Theme>,
    span:                     StyledIntrinsicComponentType<'span', Theme>,
    strong:                   StyledIntrinsicComponentType<'strong', Theme>,
    style:                    StyledIntrinsicComponentType<'style', Theme>,
    sub:                      StyledIntrinsicComponentType<'sub', Theme>,
    summary:                  StyledIntrinsicComponentType<'summary', Theme>,
    sup:                      StyledIntrinsicComponentType<'sup', Theme>,
    table:                    StyledIntrinsicComponentType<'table', Theme>,
    tbody:                    StyledIntrinsicComponentType<'tbody', Theme>,
    td:                       StyledIntrinsicComponentType<'td', Theme>,
    textarea:                 StyledIntrinsicComponentType<'textarea', Theme>,
    tfoot:                    StyledIntrinsicComponentType<'tfoot', Theme>,
    th:                       StyledIntrinsicComponentType<'th', Theme>,
    thead:                    StyledIntrinsicComponentType<'thead', Theme>,
    time:                     StyledIntrinsicComponentType<'time', Theme>,
    title:                    StyledIntrinsicComponentType<'title', Theme>,
    tr:                       StyledIntrinsicComponentType<'tr', Theme>,
    track:                    StyledIntrinsicComponentType<'track', Theme>,
    u:                        StyledIntrinsicComponentType<'u', Theme>,
    ul:                       StyledIntrinsicComponentType<'ul', Theme>,
    var:                      StyledIntrinsicComponentType<'var', Theme>,
    video:                    StyledIntrinsicComponentType<'video', Theme>,
    wbr:                      StyledIntrinsicComponentType<'wbr', Theme>,

    // SVG
    circle:                   StyledIntrinsicComponentType<'circle', Theme>,
    clipPath:                 StyledIntrinsicComponentType<'clipPath', Theme>,
    defs:                     StyledIntrinsicComponentType<'defs', Theme>,
    ellipse:                  StyledIntrinsicComponentType<'ellipse', Theme>,
    g:                        StyledIntrinsicComponentType<'g', Theme>,
    image:                    StyledIntrinsicComponentType<'image', Theme>,
    line:                     StyledIntrinsicComponentType<'line', Theme>,
    linearGradient:           StyledIntrinsicComponentType<'linearGradient', Theme>,
    mask:                     StyledIntrinsicComponentType<'mask', Theme>,
    path:                     StyledIntrinsicComponentType<'path', Theme>,
    pattern:                  StyledIntrinsicComponentType<'pattern', Theme>,
    polygon:                  StyledIntrinsicComponentType<'polygon', Theme>,
    polyline:                 StyledIntrinsicComponentType<'polyline', Theme>,
    radialGradient:           StyledIntrinsicComponentType<'radialGradient', Theme>,
    rect:                     StyledIntrinsicComponentType<'rect', Theme>,
    stop:                     StyledIntrinsicComponentType<'stop', Theme>,
    svg:                      StyledIntrinsicComponentType<'svg', Theme>,
    text:                     StyledIntrinsicComponentType<'text', Theme>,
    tspan:                    StyledIntrinsicComponentType<'tspan', Theme>
  }

  declare export default StyledComponentList & {
    [[call]]: <S : string>(S) => $ElementType<StyledComponentList, S>,
    [[call]]: <T: Theme, Config: { className: string }>(React$AbstractComponent<Config, *>) => StyledComponentType<$Diff<Config, { className: string }>, T>
  };
}



declare module 'styled-components/native' {

  declare export type Interpolation<P: {}> =
                                    | ((executionContext: P) => string)
                                    | CSSRules<P>
                                    | KeyFrames
                                    | string
                                    | number


  declare export type CSSRules<P: {} = {}> = Array<Interpolation<P>>

  // This is not exported on purpose, since it's an implementation detail
  declare type TaggedTemplateLiteral<R, P: {}> = (strings : string[], ...interpolations : Array<Interpolation<P>>) => R

  declare export type CSSConstructor = TaggedTemplateLiteral<CSSRules<>, {}>
  declare export type KeyFramesConstructor = TaggedTemplateLiteral<KeyFrames, {}>
  declare export type CreateGlobalStyleConstructor = TaggedTemplateLiteral<React$ComponentType<*>, {}>

  declare interface Tag<T> {
    styleTag: HTMLStyleElement | null;
    getIds(): string[];
    hasNameForId(id: string, name: string): boolean;
    insertMarker(id: string): T;
    insertRules(id: string, cssRules: string[], name: ?string): void;
    removeRules(id: string): void;
    css(): string;
    toHTML(additionalAttrs: ?string): string;
    toElement(): React$Element<*>;
    clone(): Tag<T>;
    sealed: boolean;
  }

  // The `any`/weak types in here all come from `styled-components` directly, since those definitions were just copied over
  declare export class StyleSheet {
    static get master() : StyleSheet;
    static get instance() : StyleSheet;
    static reset(forceServer? : boolean) : void;

    id : number;
    forceServer : boolean;
    target : ?HTMLElement;
    tagMap : {[string]: Tag<any>}; // eslint-disable-line flowtype/no-weak-types
    deferred: { [string]: string[] | void };
    rehydratedNames: { [string]: boolean };
    ignoreRehydratedNames: { [string]: boolean };
    tags: Tag<any>[]; // eslint-disable-line flowtype/no-weak-types
    importRuleTag: Tag<any>; // eslint-disable-line flowtype/no-weak-types
    capacity: number;
    clones: StyleSheet[];

    constructor(?HTMLElement) : this;
    rehydrate() : this;
    clone() : StyleSheet;
    sealAllTags() : void;
    makeTag(tag : ?Tag<any>) : Tag<any>; // eslint-disable-line flowtype/no-weak-types
    getImportRuleTag() : Tag<any>; // eslint-disable-line flowtype/no-weak-types
    getTagForId(id : string): Tag<any>; // eslint-disable-line flowtype/no-weak-types
    hasId(id: string) : boolean;
    hasNameForId(id: string, name: string) : boolean;
    deferredInject(id : string, cssRules : string[]) : void;
    inject(id: string, cssRules : string[], name? : string) : void;
    remove(id : string) : void;
    toHtml() : string;
    toReactElements() : React$ElementType[];
  }

  declare export class KeyFrames {
    id : string;
    name : string;
    rules : string[];

    constructor(name : string, rules : string[]) : this;
    inject(StyleSheet) : void;
    toString() : string;
    getName() : string;
  }

  // I think any is appropriate here?
  // eslint-disable-next-line flowtype/no-weak-types
  declare export type Theme = {+[string] : any}

  declare export var css : CSSConstructor;
  declare export var keyframes : KeyFramesConstructor;
  declare export var createGlobalStyle : CreateGlobalStyleConstructor
  declare export var ThemeProvider : React$ComponentType<{children?: ?React$Node, theme : Theme | (Theme) => Theme}>

  // This is a bit hard to read. Not sure how to make it more readable. I think adding line-breaks makes it worse.
  declare type InjectedProps = { theme : Theme | void }
  declare  export function withTheme<Props : {}, Component: React$ComponentType<Props>>(WrappedComponent: Component) : React$ComponentType<$Diff<React$ElementConfig<$Supertype<Component>>, InjectedProps>>;

  declare export type StyledComponentType<Config, T: Theme, Instance = *> = {
    [[call]]: TaggedTemplateLiteral<React$AbstractComponent<Config, Instance>, {...$Exact<Config>, theme: T }>,
    +attrs: <A: $Shape<Config>>(attributes: A) => TaggedTemplateLiteral<React$AbstractComponent<$Diff<Config, A>, Instance>, {...$Exact<Config>, ...$Exact<A>, theme: T }>
  };

  declare type StyledComponentList = {
    ActivityIndicator:             StyledComponentType<{}, Theme>,
    ActivityIndicatorIOS:          StyledComponentType<{}, Theme>,
    ART:                           StyledComponentType<{}, Theme>,
    Button:                        StyledComponentType<{}, Theme>,
    DatePickerIOS:                 StyledComponentType<{}, Theme>,
    DrawerLayoutAndroid:           StyledComponentType<{}, Theme>,
    Image:                         StyledComponentType<{}, Theme>,
    ImageBackground:               StyledComponentType<{}, Theme>,
    ImageEditor:                   StyledComponentType<{}, Theme>,
    ImageStore:                    StyledComponentType<{}, Theme>,
    KeyboardAvoidingView:          StyledComponentType<{}, Theme>,
    ListView:                      StyledComponentType<{}, Theme>,
    MapView:                       StyledComponentType<{}, Theme>,
    Modal:                         StyledComponentType<{}, Theme>,
    NavigatorIOS:                  StyledComponentType<{}, Theme>,
    Picker:                        StyledComponentType<{}, Theme>,
    PickerIOS:                     StyledComponentType<{}, Theme>,
    ProgressBarAndroid:            StyledComponentType<{}, Theme>,
    ProgressViewIOS:               StyledComponentType<{}, Theme>,
    ScrollView:                    StyledComponentType<{}, Theme>,
    SegmentedControlIOS:           StyledComponentType<{}, Theme>,
    Slider:                        StyledComponentType<{}, Theme>,
    SliderIOS:                     StyledComponentType<{}, Theme>,
    SnapshotViewIOS:               StyledComponentType<{}, Theme>,
    Switch:                        StyledComponentType<{}, Theme>,
    RecyclerViewBackedScrollView:  StyledComponentType<{}, Theme>,
    RefreshControl:                StyledComponentType<{}, Theme>,
    SafeAreaView:                  StyledComponentType<{}, Theme>,
    StatusBar:                     StyledComponentType<{}, Theme>,
    SwipeableListView:             StyledComponentType<{}, Theme>,
    SwitchAndroid:                 StyledComponentType<{}, Theme>,
    SwitchIOS:                     StyledComponentType<{}, Theme>,
    TabBarIOS:                     StyledComponentType<{}, Theme>,
    Text:                          StyledComponentType<{}, Theme>,
    TextInput:                     StyledComponentType<{}, Theme>,
    ToastAndroid:                  StyledComponentType<{}, Theme>,
    ToolbarAndroid:                StyledComponentType<{}, Theme>,
    Touchable:                     StyledComponentType<{}, Theme>,
    TouchableHighlight:            StyledComponentType<{}, Theme>,
    TouchableNativeFeedback:       StyledComponentType<{}, Theme>,
    TouchableOpacity:              StyledComponentType<{}, Theme>,
    TouchableWithoutFeedback:      StyledComponentType<{}, Theme>,
    View:                          StyledComponentType<{}, Theme>,
    ViewPagerAndroid:              StyledComponentType<{}, Theme>,
    WebView:                       StyledComponentType<{}, Theme>,
    FlatList:                      StyledComponentType<{}, Theme>,
    SectionList:                   StyledComponentType<{}, Theme>,
    VirtualizedList:               StyledComponentType<{}, Theme>,
  }

  declare export default StyledComponentList & {
    [[call]]: <S : string>(S) => $ElementType<StyledComponentList, S>,
    [[call]]: <T: Theme, Config: {}>(React$AbstractComponent<Config, *>) => StyledComponentType<React$AbstractComponent<$Diff<Config, { className: string }>, *>, T>
  };
}
