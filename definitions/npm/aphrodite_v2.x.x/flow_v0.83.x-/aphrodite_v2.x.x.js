declare module 'aphrodite' {
  declare type StyleObject = {
    ':active'?: StyleObject,
    ':focus'?: StyleObject,
    ':hover'?: StyleObject,
    ':after'?: StyleObject,
    ':before'?: StyleObject,
    alignContent?: string;
    alignItems?: string;
    alignSelf?: string;
    all?: string;
    animation?: string;
    animationDelay?: string;
    animationDirection?: string;
    animationDuration?: string;
    animationFillMode?: string;
    animationIterationCount?: string | number;
    animationName?: { ... } | Array<{ ... }>;
    animationPlayState?: string;
    animationTimingFunction?: string;
    backdropFilter?: string;
    webkitBackdropFilter?: string;
    backfaceVisibility?: string;
    background?: string;
    backgroundAttachment?: string;
    backgroundBlendMode?: string;
    backgroundClip?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    backgroundOrigin?: string;
    backgroundPosition?: string;
    backgroundPositionX?: string;
    backgroundPositionY?: string;
    backgroundRepeat?: string;
    backgroundSize?: string;
    blockSize?: string;
    border?: string;
    borderBlockEnd?: string;
    borderBlockEndColor?: string;
    borderBlockEndStyle?: string;
    borderBlockEndWidth?: string;
    borderBlockStart?: string;
    borderBlockStartColor?: string;
    borderBlockStartStyle?: string;
    borderBlockStartWidth?: string;
    borderBottom?: string;
    borderBottomColor?: string;
    borderBottomLeftRadius?: string | number;
    borderBottomRightRadius?: string | number;
    borderBottomStyle?: string;
    borderBottomWidth?: string | number;
    borderCollapse?: string;
    borderColor?: string;
    borderImage?: string;
    borderImageOutset?: string;
    borderImageRepeat?: string;
    borderImageSlice?: string;
    borderImageSource?: string;
    borderImageWidth?: string;
    borderInlineEnd?: string;
    borderInlineEndColor?: string;
    borderInlineEndStyle?: string;
    borderInlineEndWidth?: string;
    borderInlineStart?: string;
    borderInlineStartColor?: string;
    borderInlineStartStyle?: string;
    borderInlineStartWidth?: string;
    borderLeft?: string;
    borderLeftColor?: string;
    borderLeftStyle?: string;
    borderLeftWidth?: string | number;
    borderRadius?: string | number;
    borderRight?: string;
    borderRightColor?: string;
    borderRightStyle?: string;
    borderRightWidth?: string | number;
    borderSpacing?: string;
    borderStyle?: string;
    borderTop?: string;
    borderTopColor?: string;
    borderTopLeftRadius?: string | number;
    borderTopRightRadius?: string | number;
    borderTopStyle?: string;
    borderTopWidth?: string | number;
    borderWidth?: string;
    bottom?: string | number;
    boxDecorationBreak?: string;
    boxShadow?: string;
    boxSizing?: string;
    breakAfter?: string;
    breakBefore?: string;
    breakInside?: string;
    captionSide?: string;
    clear?: string;
    clip?: string;
    clipPath?: string;
    color?: string;
    columns?: string;
    columnCount?: string;
    columnFill?: string;
    columnGap?: string;
    columnRule?: string;
    columnRuleColor?: string;
    columnRuleStyle?: string;
    columnRuleWidth?: string;
    columnSpan?: string;
    columnWidth?: string;
    contain?: string;
    content?: string;
    counterIncrement?: string;
    counterReset?: string;
    cursor?: string;
    direction?: string;
    display?: 'inline'
      | 'block'
      | 'contents'
      | 'flex'
      | 'grid'
      | 'inline-block'
      | 'inline-flex'
      | 'inline-grid'
      | 'inline-table'
      | 'list-item'
      | 'run-in'
      | 'table'
      | 'table-caption'
      | 'table-column-group'
      | 'table-header-group'
      | 'table-footer-group'
      | 'table-row-group'
      | 'table-cell'
      | 'table-column'
      | 'table-row'
      | 'none'
      | 'initial'
      | 'inherit';
    emptyCells?: string;
    filter?: string;
    flex?: string | number;
    flexBasis?: string;
    flexDirection?: string;
    flexFlow?: string;
    flexGrow?: string | number;
    flexShrink?: string | number;
    flexWrap?: string;
    float?: string;
    font?: string;
    fontFamily?: string;
    fontFeatureSettings?: string;
    fontKerning?: string;
    fontLanguageOverride?: string;
    fontSize?: string | number;
    fontSizeAdjust?: string;
    fontStretch?: string;
    fontStyle?: string;
    fontSynthesis?: string;
    fontVariant?: string;
    fontVariantAlternates?: string;
    fontVariantCaps?: string;
    fontVariantEastAsian?: string;
    fontVariantLigatures?: string;
    fontVariantNumeric?: string;
    fontVariantPosition?: string;
    fontWeight?: string | number;
    grad?: string;
    grid?: string;
    gridArea?: string;
    gridAutoColumns?: string;
    gridAutoFlow?: string;
    gridAutoPosition?: string;
    gridAutoRows?: string;
    gridColumn?: string;
    gridColumnStart?: string;
    gridColumnEnd?: string;
    gridRow?: string;
    gridRowStart?: string;
    gridRowEnd?: string;
    gridTemplate?: string;
    gridTemplateAreas?: string;
    gridTemplateRows?: string;
    gridTemplateColumns?: string;
    height?: string | number;
    hyphens?: string;
    imageRendering?: string;
    imageResolution?: string;
    imageOrientation?: string;
    imeMode?: string;
    inherit?: string;
    initial?: string;
    inlineSize?: string;
    isolation?: string;
    justifyContent?: string;
    left?: string | number;
    letterSpacing?: string;
    lineBreak?: string;
    lineHeight?: string | number;
    listStyle?: string;
    listStyleImage?: string;
    listStylePosition?: string;
    listStyleType?: string;
    margin?: string | number;
    marginBlockEnd?: string;
    marginBlockStart?: string;
    marginBottom?: string | number;
    marginInlineEnd?: string;
    marginInlineStart?: string;
    marginLeft?: string | number;
    marginRight?: string | number;
    marginTop?: string | number;
    marks?: string;
    mask?: string;
    maskType?: string;
    maxBlockSize?: string;
    maxHeight?: string;
    maxInlineSize?: string;
    maxWidth?: string | number;
    minBlockSize?: string;
    minHeight?: string | number;
    minInlineSize?: string;
    minWidth?: string | number;
    mixBlendMode?: string;
    mozTransform?: string;
    mozTransformOrigin?: string;
    mozTransitionDelay?: string;
    mozTransitionDuration?: string;
    mozTransitionProperty?: string;
    mozTransitionTimingFunction?: string;
    objectFit?: string;
    objectPosition?: string;
    offsetBlockEnd?: string;
    offsetBlockStart?: string;
    offsetInlineEnd?: string;
    offsetInlineStart?: string;
    opacity?: string | number;
    order?: string | number;
    orphans?: string;
    outline?: string;
    outlineColor?: string;
    outlineOffset?: string | number;
    outlineStyle?: string;
    outlineWidth?: string;
    overflow?: string;
    overflowWrap?: string;
    overflowX?: string;
    overflowY?: string;
    padding?: string | number;
    paddingBlockEnd?: string;
    paddingBlockStart?: string;
    paddingBottom?: string | number;
    paddingInlineEnd?: string;
    paddingInlineStart?: string;
    paddingLeft?: string | number;
    paddingRight?: string | number;
    paddingTop?: string | number;
    pageBreakAfter?: string;
    pageBreakBefore?: string;
    pageBreakInside?: string;
    perspective?: string;
    perspectiveOrigin?: string;
    pointerEvents?: string;
    position?: string;
    quotes?: string;
    rad?: string;
    resize?: string;
    right?: string | number;
    rubyAlign?: string;
    rubyMerge?: string;
    rubyPosition?: string;
    scrollBehavior?: string;
    scrollSnapCoordinate?: string;
    scrollSnapDestination?: string;
    scrollSnapPointsX?: string;
    scrollSnapPointsY?: string;
    scrollSnapType?: string;
    shapeImageThreshold?: string;
    shapeMargin?: string;
    shapeOutside?: string;
    tableLayout?: string;
    tabSize?: string;
    textAlign?: string;
    textAlignLast?: string;
    textCombineUpright?: string;
    textDecoration?: string;
    textDecorationColor?: string;
    textDecorationLine?: string;
    textDecorationStyle?: string;
    textIndent?: string;
    textOrientation?: string;
    textOverflow?: string;
    textRendering?: string;
    textShadow?: string;
    textTransform?: string;
    textUnderlinePosition?: string;
    top?: string | number;
    touchAction?: string;
    transform?: string;
    transformOrigin?: string;
    transformStyle?: string;
    transition?: string;
    transitionDelay?: string;
    transitionDuration?: string;
    transitionProperty?: string;
    transitionTimingFunction?: string;
    turn?: string;
    unicodeBidi?: string;
    unicodeRange?: string;
    userSelect?: string;
    verticalAlign?: string;
    visibility?: string;
    webkitOverflowScrolling?: string;
    webkitTransform?: string;
    webkitTransformOrigin?: string;
    webkitTransitionDelay?: string;
    webkitTransitionDuration?: string;
    webkitTransitionProperty?: string;
    webkitTransitionTimingFunction?: string;
    whiteSpace?: string;
    widows?: string;
    width?: string | number;
    willChange?: string;
    wordBreak?: string;
    wordSpacing?: string;
    wordWrap?: string;
    writingMode?: string;
    zIndex?: string | number;
    [key: string]: any,
    ...
  };

  declare type SelectorCallback = (selector: string) => Array<string>;

  declare type SelectorHandler = (
      selector: string,
      baseSelector: string,
      callback: SelectorCallback
  ) => Array<string> | string | null;

  declare type SheetDefinition = {|
    _definition: StyleObject,
    _len: number,
    _name: string,
  |};

  declare type MaybeSheetDefinition = SheetDefinition | false | null | void;

  declare type InjectAndGetClassName = (
    useImportant: boolean,
    styleDefinitions: Array<MaybeSheetDefinition>,
    selectorHandlers: Array<SelectorHandler>,
  ) => string;

  declare type StyleSheetServerObject = {|
    renderStatic: (renderFunc: () => string) => {|
      html: string,
      css: {|
        content: string,
        renderedClassNames: Array<string>,
      |},
    |}
  |};

  declare type StyleSheetTestUtilsObject = {|
    suppressStyleInjection: () => void,
    clearBufferAndResumeStyleInjection: () => void,
    getBufferedStyles: () => Array<string>,
  |};

  declare type Aphrodite = {
    StyleSheet: {|
      create: (
        sheetDefinition: {
          [key: string]: StyleObject,
          ...
        },
      ) => {
        [key: string]: SheetDefinition,
        ...
      },
      rehydrate: (renderedClassNames?: Array<string>) => void,
      extend: (Array<{|
        selectorHandler: SelectorHandler,
      |}>) => Aphrodite,
    |},
    StyleSheetServer: StyleSheetServerObject,
    StyleSheetTestUtils: StyleSheetTestUtilsObject,
    minify: (shouldMinify: boolean) => void,
    css: (...styleDefinitions: Array<MaybeSheetDefinition>) => string,
    flushToStyleTag: () => void,
    injectAndGetClassName: InjectAndGetClassName,
    defaultSelectorHandlers: Array<SelectorHandler>,
    reset: () => void,
    resetInjectedStyle: (key: string) => void,
    ...
  };

  declare module.exports: Aphrodite;
}

declare module 'aphrodite/no-important' {
  declare module.exports: $Exports<"aphrodite">;
}
