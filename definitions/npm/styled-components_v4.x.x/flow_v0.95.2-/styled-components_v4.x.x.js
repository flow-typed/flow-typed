// @flow

declare module 'styled-components' {
  declare type BuiltinElementInstances = {
    a: React$ElementRef<'a'>,
    abbr: React$ElementRef<'abbr'>,
    address: React$ElementRef<'address'>,
    area: React$ElementRef<'area'>,
    article: React$ElementRef<'article'>,
    aside: React$ElementRef<'aside'>,
    audio: React$ElementRef<'audio'>,
    b: React$ElementRef<'b'>,
    base: React$ElementRef<'base'>,
    bdi: React$ElementRef<'bdi'>,
    bdo: React$ElementRef<'bdo'>,
    big: React$ElementRef<'big'>,
    blockquote: React$ElementRef<'blockquote'>,
    body: React$ElementRef<'body'>,
    br: React$ElementRef<'br'>,
    button: React$ElementRef<'button'>,
    canvas: React$ElementRef<'canvas'>,
    caption: React$ElementRef<'caption'>,
    cite: React$ElementRef<'cite'>,
    code: React$ElementRef<'code'>,
    col: React$ElementRef<'col'>,
    colgroup: React$ElementRef<'colgroup'>,
    data: React$ElementRef<'data'>,
    datalist: React$ElementRef<'datalist'>,
    dd: React$ElementRef<'dd'>,
    del: React$ElementRef<'del'>,
    details: React$ElementRef<'details'>,
    dfn: React$ElementRef<'dfn'>,
    dialog: React$ElementRef<'dialog'>,
    div: React$ElementRef<'div'>,
    dl: React$ElementRef<'dl'>,
    dt: React$ElementRef<'dt'>,
    em: React$ElementRef<'em'>,
    embed: React$ElementRef<'embed'>,
    fieldset: React$ElementRef<'fieldset'>,
    figcaption: React$ElementRef<'figcaption'>,
    figure: React$ElementRef<'figure'>,
    footer: React$ElementRef<'footer'>,
    form: React$ElementRef<'form'>,
    h1: React$ElementRef<'h1'>,
    h2: React$ElementRef<'h2'>,
    h3: React$ElementRef<'h3'>,
    h4: React$ElementRef<'h4'>,
    h5: React$ElementRef<'h5'>,
    h6: React$ElementRef<'h6'>,
    head: React$ElementRef<'head'>,
    header: React$ElementRef<'header'>,
    hgroup: React$ElementRef<'hgroup'>,
    hr: React$ElementRef<'hr'>,
    html: React$ElementRef<'html'>,
    i: React$ElementRef<'i'>,
    iframe: React$ElementRef<'iframe'>,
    img: React$ElementRef<'img'>,
    input: React$ElementRef<'input'>,
    ins: React$ElementRef<'ins'>,
    kbd: React$ElementRef<'kbd'>,
    label: React$ElementRef<'label'>,
    legend: React$ElementRef<'legend'>,
    li: React$ElementRef<'li'>,
    link: React$ElementRef<'link'>,
    main: React$ElementRef<'main'>,
    map: React$ElementRef<'map'>,
    mark: React$ElementRef<'mark'>,
    menu: React$ElementRef<'menu'>,
    meta: React$ElementRef<'meta'>,
    meter: React$ElementRef<'meter'>,
    nav: React$ElementRef<'nav'>,
    noscript: React$ElementRef<'noscript'>,
    object: React$ElementRef<'object'>,
    ol: React$ElementRef<'ol'>,
    optgroup: React$ElementRef<'optgroup'>,
    option: React$ElementRef<'option'>,
    output: React$ElementRef<'output'>,
    p: React$ElementRef<'p'>,
    param: React$ElementRef<'param'>,
    picture: React$ElementRef<'picture'>,
    pre: React$ElementRef<'pre'>,
    progress: React$ElementRef<'progress'>,
    q: React$ElementRef<'q'>,
    rp: React$ElementRef<'rp'>,
    rt: React$ElementRef<'rt'>,
    ruby: React$ElementRef<'ruby'>,
    s: React$ElementRef<'s'>,
    samp: React$ElementRef<'samp'>,
    script: React$ElementRef<'script'>,
    section: React$ElementRef<'section'>,
    select: React$ElementRef<'select'>,
    small: React$ElementRef<'small'>,
    source: React$ElementRef<'source'>,
    span: React$ElementRef<'span'>,
    strong: React$ElementRef<'strong'>,
    style: React$ElementRef<'style'>,
    sub: React$ElementRef<'sub'>,
    summary: React$ElementRef<'summary'>,
    sup: React$ElementRef<'sup'>,
    table: React$ElementRef<'table'>,
    tbody: React$ElementRef<'tbody'>,
    td: React$ElementRef<'td'>,
    textarea: React$ElementRef<'textarea'>,
    tfoot: React$ElementRef<'tfoot'>,
    th: React$ElementRef<'th'>,
    thead: React$ElementRef<'thead'>,
    time: React$ElementRef<'time'>,
    title: React$ElementRef<'title'>,
    tr: React$ElementRef<'tr'>,
    track: React$ElementRef<'track'>,
    u: React$ElementRef<'u'>,
    ul: React$ElementRef<'ul'>,
    var: React$ElementRef<'var'>,
    video: React$ElementRef<'video'>,
    wbr: React$ElementRef<'wbr'>,

    // SVG
    circle: React$ElementRef<'circle'>,
    clipPath: React$ElementRef<'clipPath'>,
    defs: React$ElementRef<'defs'>,
    ellipse: React$ElementRef<'ellipse'>,
    g: React$ElementRef<'g'>,
    image: React$ElementRef<'image'>,
    line: React$ElementRef<'line'>,
    linearGradient: React$ElementRef<'linearGradient'>,
    mask: React$ElementRef<'mask'>,
    path: React$ElementRef<'path'>,
    pattern: React$ElementRef<'pattern'>,
    polygon: React$ElementRef<'polygon'>,
    polyline: React$ElementRef<'polyline'>,
    radialGradient: React$ElementRef<'radialGradient'>,
    rect: React$ElementRef<'rect'>,
    stop: React$ElementRef<'stop'>,
    svg: React$ElementRef<'svg'>,
    text: React$ElementRef<'text'>,
    tspan: React$ElementRef<'tspan'>,

    // Deprecated, should be HTMLUnknownElement, but Flow doesn't support it
    keygen: React$ElementRef<'keygen'>,
    menuitem: React$ElementRef<'menuitem'>,
  }

  declare type BuiltinElementType<ElementName: string> = $ElementType<BuiltinElementInstances, ElementName>

  declare export type Interpolation<P> =
                                       | ((executionContext: P) => Interpolation<any>)
                                       | CSSRules
                                       | KeyFrames
                                       | string
                                       | number


  // Should this be `mixed` perhaps?
  declare export type CSSRules = Interpolation<any>[]

  // This is not exported on purpose, since it's an implementation detail
  declare type TaggedTemplateLiteral<I, R> = (strings: string[], ...interpolations: Interpolation<I>[]) => R

  declare export type CSSConstructor = TaggedTemplateLiteral<any, CSSRules>
  declare export type KeyFramesConstructor = TaggedTemplateLiteral<any, KeyFrames>
  declare export type CreateGlobalStyleConstructor = TaggedTemplateLiteral<any, React$ComponentType<*>>

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
  declare export var css : CSSConstructor;
  declare export var keyframes : KeyFramesConstructor;
  declare export var createGlobalStyle : CreateGlobalStyleConstructor
  declare export var ThemeProvider: React$ComponentType<{children?: ?React$Node, theme: mixed | (mixed) => mixed}>

  // This is a bit hard to read. Not sure how to make it more readable. I think adding line-breaks makes it worse.
  declare type ThemeProps<T> = {
    theme: T
  }

  declare export function withTheme<Theme, Config: {}, Instance>(Component: React$AbstractComponent<Config, Instance>): React$AbstractComponent<$Diff<Config, ThemeProps<Theme | void>>, Instance>

  declare export type StyledComponent<Props, Theme, Instance> = React$AbstractComponent<Props, Instance>
  declare interface StyledFactory<StyleProps, OwnProps, Theme, Instance> {
    [[call]]: TaggedTemplateLiteral<StyleProps & OwnProps & ThemeProps<Theme>, StyledComponent<StyleProps & OwnProps, Theme, Instance>>;
    +attrs: <A: {}>(A | (OwnProps & StyleProps) => A) => React$AbstractComponent<$Diff<OwnProps & StyleProps, A>, Instance>;
  }


  declare type ConvenientShorthands = $ObjMap<
    BuiltinElementInstances,
    <V>(V) =>
      // TODO: Figre out how to add support for `attrs` API here
      // TODO: Would be nice if we could find a way to use `StyledFactory` here, but I am too dumb to figure it out.
      <P, Th>(string[], ...Interpolation<P & ThemeProps<Th>>[]) => StyledComponent<P, Th, V>
   >

  declare interface Styled {
    <P, Th, ElementName: $Keys<BuiltinElementInstances>>(ElementName): StyledFactory<P, {}, Th, BuiltinElementType<ElementName>>;
    <SP, Th, OP: {}, C: React$ComponentType<OP>>(C): StyledFactory<SP, OP, Th, React$ComponentType<C>>;
  }

  declare export default Styled & ConvenientShorthands
}



// declare module 'styled-components/native' {

//   declare export type Interpolation =
//                                     | (<P: {}>(executionContext: P) => string)
//                                     | CSSRules
//                                     | KeyFrames
//                                     | string
//                                     | number


//   declare export type CSSRules = Interpolation[]

//   // This is not exported on purpose, since it's an implementation detail
//   declare type TaggedTemplateLiteral<R> = (strings : string[], ...interpolations : Interpolation[]) => R

//   declare export type CSSConstructor = TaggedTemplateLiteral<CSSRules>
//   declare export type KeyFramesConstructor = TaggedTemplateLiteral<KeyFrames>
//   declare export type CreateGlobalStyleConstructor = TaggedTemplateLiteral<React$ComponentType<*>>

//   declare interface Tag<T> {
//     styleTag: HTMLStyleElement | null;
//     getIds(): string[];
//     hasNameForId(id: string, name: string): boolean;
//     insertMarker(id: string): T;
//     insertRules(id: string, cssRules: string[], name: ?string): void;
//     removeRules(id: string): void;
//     css(): string;
//     toHTML(additionalAttrs: ?string): string;
//     toElement(): React$Element<*>;
//     clone(): Tag<T>;
//     sealed: boolean;
//   }

//   // The `any`/weak types in here all come from `styled-components` directly, since those definitions were just copied over
//   declare export class StyleSheet {
//     static get master() : StyleSheet;
//     static get instance() : StyleSheet;
//     static reset(forceServer? : boolean) : void;

//     id : number;
//     forceServer : boolean;
//     target : ?HTMLElement;
//     tagMap : {[string]: Tag<any>}; // eslint-disable-line flowtype/no-weak-types
//     deferred: { [string]: string[] | void };
//     rehydratedNames: { [string]: boolean };
//     ignoreRehydratedNames: { [string]: boolean };
//     tags: Tag<any>[]; // eslint-disable-line flowtype/no-weak-types
//     importRuleTag: Tag<any>; // eslint-disable-line flowtype/no-weak-types
//     capacity: number;
//     clones: StyleSheet[];

//     constructor(?HTMLElement) : this;
//     rehydrate() : this;
//     clone() : StyleSheet;
//     sealAllTags() : void;
//     makeTag(tag : ?Tag<any>) : Tag<any>; // eslint-disable-line flowtype/no-weak-types
//     getImportRuleTag() : Tag<any>; // eslint-disable-line flowtype/no-weak-types
//     getTagForId(id : string): Tag<any>; // eslint-disable-line flowtype/no-weak-types
//     hasId(id: string) : boolean;
//     hasNameForId(id: string, name: string) : boolean;
//     deferredInject(id : string, cssRules : string[]) : void;
//     inject(id: string, cssRules : string[], name? : string) : void;
//     remove(id : string) : void;
//     toHtml() : string;
//     toReactElements() : React$ElementType[];
//   }

//   declare export class KeyFrames {
//     id : string;
//     name : string;
//     rules : string[];

//     constructor(name : string, rules : string[]) : this;
//     inject(StyleSheet) : void;
//     toString() : string;
//     getName() : string;
//   }

//   // I think any is appropriate here?
//   // eslint-disable-next-line flowtype/no-weak-types
//   declare export type Theme = {+[string] : any}

//   declare export var css : CSSConstructor;
//   declare export var keyframes : KeyFramesConstructor;
//   declare export var createGlobalStyle : CreateGlobalStyleConstructor
//   declare export var ThemeProvider : React$ComponentType<{children?: ?React$Node, theme : Theme | (Theme) => Theme}>

//   // This is a bit hard to read. Not sure how to make it more readable. I think adding line-breaks makes it worse.
//   declare type InjectedProps = { theme : Theme | void }
//   declare  export function withTheme<Props : {}, Component: React$ComponentType<Props>>(WrappedComponent: Component) : React$ComponentType<$Diff<React$ElementConfig<$Supertype<Component>>, InjectedProps>>;


//   // @HACK This is a cheat to hide that the underlying type is "just a string"
//   //       once we know of a better way, we should be able to update this accordingly.
//   //       I don't think there _is_ a good way, currently.
//   // @NOTE Also not too sure about the naming of this...
//   declare export type StyledElementType<T> = T;
//   declare export type StyledComponentType<C> = {
//     [[call]]: TaggedTemplateLiteral<C>,
//     +attrs: <A: {}>(attributes: A) => TaggedTemplateLiteral<React$ComponentType<$Diff<React$ElementConfig<C>, A>>>
//   };

//   declare type StyledComponentList = {
//     ActivityIndicator:             StyledComponentType<React$ComponentType<{}>>,
//     ActivityIndicatorIOS:          StyledComponentType<React$ComponentType<{}>>,
//     ART:                           StyledComponentType<React$ComponentType<{}>>,
//     Button:                        StyledComponentType<React$ComponentType<{}>>,
//     DatePickerIOS:                 StyledComponentType<React$ComponentType<{}>>,
//     DrawerLayoutAndroid:           StyledComponentType<React$ComponentType<{}>>,
//     Image:                         StyledComponentType<React$ComponentType<{}>>,
//     ImageBackground:               StyledComponentType<React$ComponentType<{}>>,
//     ImageEditor:                   StyledComponentType<React$ComponentType<{}>>,
//     ImageStore:                    StyledComponentType<React$ComponentType<{}>>,
//     KeyboardAvoidingView:          StyledComponentType<React$ComponentType<{}>>,
//     ListView:                      StyledComponentType<React$ComponentType<{}>>,
//     MapView:                       StyledComponentType<React$ComponentType<{}>>,
//     Modal:                         StyledComponentType<React$ComponentType<{}>>,
//     NavigatorIOS:                  StyledComponentType<React$ComponentType<{}>>,
//     Picker:                        StyledComponentType<React$ComponentType<{}>>,
//     PickerIOS:                     StyledComponentType<React$ComponentType<{}>>,
//     ProgressBarAndroid:            StyledComponentType<React$ComponentType<{}>>,
//     ProgressViewIOS:               StyledComponentType<React$ComponentType<{}>>,
//     ScrollView:                    StyledComponentType<React$ComponentType<{}>>,
//     SegmentedControlIOS:           StyledComponentType<React$ComponentType<{}>>,
//     Slider:                        StyledComponentType<React$ComponentType<{}>>,
//     SliderIOS:                     StyledComponentType<React$ComponentType<{}>>,
//     SnapshotViewIOS:               StyledComponentType<React$ComponentType<{}>>,
//     Switch:                        StyledComponentType<React$ComponentType<{}>>,
//     RecyclerViewBackedScrollView:  StyledComponentType<React$ComponentType<{}>>,
//     RefreshControl:                StyledComponentType<React$ComponentType<{}>>,
//     SafeAreaView:                  StyledComponentType<React$ComponentType<{}>>,
//     StatusBar:                     StyledComponentType<React$ComponentType<{}>>,
//     SwipeableListView:             StyledComponentType<React$ComponentType<{}>>,
//     SwitchAndroid:                 StyledComponentType<React$ComponentType<{}>>,
//     SwitchIOS:                     StyledComponentType<React$ComponentType<{}>>,
//     TabBarIOS:                     StyledComponentType<React$ComponentType<{}>>,
//     Text:                          StyledComponentType<React$ComponentType<{}>>,
//     TextInput:                     StyledComponentType<React$ComponentType<{}>>,
//     ToastAndroid:                  StyledComponentType<React$ComponentType<{}>>,
//     ToolbarAndroid:                StyledComponentType<React$ComponentType<{}>>,
//     Touchable:                     StyledComponentType<React$ComponentType<{}>>,
//     TouchableHighlight:            StyledComponentType<React$ComponentType<{}>>,
//     TouchableNativeFeedback:       StyledComponentType<React$ComponentType<{}>>,
//     TouchableOpacity:              StyledComponentType<React$ComponentType<{}>>,
//     TouchableWithoutFeedback:      StyledComponentType<React$ComponentType<{}>>,
//     View:                          StyledComponentType<React$ComponentType<{}>>,
//     ViewPagerAndroid:              StyledComponentType<React$ComponentType<{}>>,
//     WebView:                       StyledComponentType<React$ComponentType<{}>>,
//     FlatList:                      StyledComponentType<React$ComponentType<{}>>,
//     SectionList:                   StyledComponentType<React$ComponentType<{}>>,
//     VirtualizedList:               StyledComponentType<React$ComponentType<{}>>,
//   }

//   declare export default StyledComponentList & {
//     [[call]]: <S : string>(S) => $ElementType<StyledComponentList, S>,
//     [[call]]: <P : {}, C : React$ComponentType<P>>(C) => StyledComponentType<C>
//   };
// }
