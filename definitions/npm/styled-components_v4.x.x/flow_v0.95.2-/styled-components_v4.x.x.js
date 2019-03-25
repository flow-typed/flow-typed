// @flow

declare module 'styled-components' {
  // Could this use `React$ElementRef<>` instead?
  // It might be more correct and future-proof
  // Since it won't rely on us keeping this up to date
  // TODO: Experiment/Look into this
  declare type BuiltinElementInstances = {
    a: HTMLAnchorElement,
    abbr: HTMLElement,
    address: HTMLElement,
    area: HTMLAreaElement,
    article: HTMLElement,
    aside: HTMLElement,
    audio: HTMLAudioElement,
    b: HTMLElement,
    base: HTMLBaseElement,
    bdi: HTMLElement,
    bdo: HTMLElement,
    big: HTMLElement,
    blockquote: HTMLQuoteElement,
    body: HTMLBodyElement,
    br: HTMLBRElement,
    button: HTMLButtonElement,
    canvas: HTMLCanvasElement,
    caption: HTMLTableCaptionElement,
    cite: HTMLElement,
    code: HTMLElement,
    col: HTMLTableColElement,
    colgroup: HTMLTableColElement,
    data: HTMLDataElement,
    datalist: HTMLDataListElement,
    dd: HTMLElement,
    del: HTMLModElement,
    details: HTMLDetailsElement,
    dfn: HTMLElement,
    dialog: HTMLDialogElement,
    div: HTMLDivElement,
    dl: HTMLDListElement,
    dt: HTMLElement,
    em: HTMLElement,
    embed: HTMLEmbedElement,
    fieldset: HTMLFieldSetElement,
    figcaption: HTMLElement,
    figure: HTMLElement,
    footer: HTMLElement,
    form: HTMLFormElement,
    h1: HTMLHeadingElement,
    h2: HTMLHeadingElement,
    h3: HTMLHeadingElement,
    h4: HTMLHeadingElement,
    h5: HTMLHeadingElement,
    h6: HTMLHeadingElement,
    head: HTMLHeadElement,
    header: HTMLElement,
    hgroup: HTMLElement,
    hr: HTMLHRElement,
    html: HTMLHtmlElement,
    i: HTMLElement,
    iframe: HTMLIFrameElement,
    img: HTMLImageElement,
    input: HTMLInputElement,
    ins: HTMLModElement,
    kbd: HTMLElement,
    label: HTMLLabelElement,
    legend: HTMLLegendElement,
    li: HTMLLIElement,
    link: HTMLLinkElement,
    main: HTMLElement,
    map: HTMLMapElement,
    mark: HTMLElement,
    menu: HTMLMenuElement,
    meta: HTMLMetaElement,
    meter: HTMLMeterElement,
    nav: HTMLElement,
    noscript: HTMLElement,
    object: HTMLObjectElement,
    ol: HTMLOListElement,
    optgroup: HTMLOptGroupElement,
    option: HTMLOptionElement,
    output: HTMLOutputElement,
    p: HTMLParagraphElement,
    param: HTMLParamElement,
    picture: HTMLPictureElement,
    pre: HTMLPreElement,
    progress: HTMLProgressElement,
    q: HTMLQuoteElement,
    rp: HTMLElement,
    rt: HTMLElement,
    ruby: HTMLElement,
    s: HTMLElement,
    samp: HTMLElement,
    script: HTMLScriptElement,
    section: HTMLElement,
    select: HTMLSelectElement,
    small: HTMLElement,
    source: HTMLSourceElement,
    span: HTMLSpanElement,
    strong: HTMLElement,
    style: HTMLStyleElement,
    sub: HTMLElement,
    summary: HTMLElement,
    sup: HTMLElement,
    table: HTMLTableElement,
    tbody: HTMLTableSectionElement,
    td: HTMLTableCellElement,
    textarea: HTMLTextAreaElement,
    tfoot: HTMLTableSectionElement,
    th: HTMLTableCellElement,
    thead: HTMLTableSectionElement,
    time: HTMLTimeElement,
    title: HTMLTitleElement,
    tr: HTMLTableRowElement,
    track: HTMLTrackElement,
    u: HTMLElement,
    ul: HTMLUListElement,
    var: HTMLElement,
    video: HTMLVideoElement,
    wbr: HTMLElement,

    // SVG
    // Flow doesn't support these DOM types yet
    // circle: SVGCircleElement,
    // clipPath: SVGClipPathElement,
    // defs: SVGDefsElement,
    // ellipse: SVGEllipseElement,
    // g: SVGGElement,
    // image: SVGImageElement,
    // line: SVGLineElement,
    // linearGradient: SVGLinearGradientElement,
    // mask: SVGMaskElement,
    // path: SVGPathElement,
    // pattern: SVGPatternElement,
    // polygon: SVGPolygonElement,
    // polyline: SVGPolylineElement,
    // radialGradient: SVGRadialGradientElement,
    // rect: SVGRectElement,
    // stop: SVGStopElement,
    // svg: SVGSVGElement,
    // text: SVGTextElement,
    // tspan: SVGTSpanElement,

    // These aren't correct, but it's the best we can do
    circle: HTMLElement,
    clipPath: HTMLElement,
    defs: HTMLElement,
    ellipse: HTMLElement,
    g: HTMLElement,
    image: HTMLElement,
    line: HTMLElement,
    linearGradient: HTMLElement,
    mask: HTMLElement,
    path: HTMLElement,
    pattern: HTMLElement,
    polygon: HTMLElement,
    polyline: HTMLElement,
    radialGradient: HTMLElement,
    rect: HTMLElement,
    stop: HTMLElement,
    svg: HTMLElement,
    text: HTMLElement,
    tspan: HTMLElement,

    // Deprecated, should be HTMLUnknownElement, but Flow doesn't support it
    keygen: HTMLElement,
    menuitem: HTMLElement,
  }

  declare type BuiltinElementType<ElementName: string> = $ElementType<BuiltinElementInstances, ElementName>

  declare export type Interpolation<P> =
                                       | ((executionContext: P) => string)
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
  // declare export default StyledShorthands & interface {
  //   [[call]]: <S: string>(S) => $ElementType<StyledShorthands, S>,
  //   [[call]]: <StyleProps: {}, Component: React$ComponentType<any>, Theme, Instance>(Component) => StyledFactory<StyleProps, React$ElementConfig<Component>, Theme, Instance>
  // };
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
