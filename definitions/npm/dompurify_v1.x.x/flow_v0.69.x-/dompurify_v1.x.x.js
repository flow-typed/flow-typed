type dompurify$htmlTags =
  | 'a'
  | 'abbr'
  | 'acronym'
  | 'address'
  | 'area'
  | 'article'
  | 'aside'
  | 'audio'
  | 'b'
  | 'bdi'
  | 'bdo'
  | 'big'
  | 'blink'
  | 'blockquote'
  | 'body'
  | 'br'
  | 'button'
  | 'canvas'
  | 'caption'
  | 'center'
  | 'cite'
  | 'code'
  | 'col'
  | 'colgroup'
  | 'content'
  | 'data'
  | 'datalist'
  | 'dd'
  | 'decorator'
  | 'del'
  | 'details'
  | 'dfn'
  | 'dir'
  | 'div'
  | 'dl'
  | 'dt'
  | 'element'
  | 'em'
  | 'fieldset'
  | 'figcaption'
  | 'figure'
  | 'font'
  | 'footer'
  | 'form'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'head'
  | 'header'
  | 'hgroup'
  | 'hr'
  | 'html'
  | 'i'
  | 'img'
  | 'input'
  | 'ins'
  | 'kbd'
  | 'label'
  | 'legend'
  | 'li'
  | 'main'
  | 'map'
  | 'mark'
  | 'marquee'
  | 'menu'
  | 'menuitem'
  | 'meter'
  | 'nav'
  | 'nobr'
  | 'ol'
  | 'optgroup'
  | 'option'
  | 'output'
  | 'p'
  | 'pre'
  | 'progress'
  | 'q'
  | 'rp'
  | 'rt'
  | 'ruby'
  | 's'
  | 'samp'
  | 'section'
  | 'select'
  | 'shadow'
  | 'small'
  | 'source'
  | 'spacer'
  | 'span'
  | 'strike'
  | 'strong'
  | 'style'
  | 'sub'
  | 'summary'
  | 'sup'
  | 'table'
  | 'tbody'
  | 'td'
  | 'template'
  | 'textarea'
  | 'tfoot'
  | 'th'
  | 'thead'
  | 'time'
  | 'tr'
  | 'track'
  | 'tt'
  | 'u'
  | 'ul'
  | 'var'
  | 'video'
  | 'wbr'
  | '#text';

type dompurify$htmlAttrs =
  | 'accept'
  | 'action'
  | 'align'
  | 'alt'
  | 'autocomplete'
  | 'background'
  | 'bgcolor'
  | 'border'
  | 'cellpadding'
  | 'cellspacing'
  | 'checked'
  | 'cite'
  | 'class'
  | 'clear'
  | 'color'
  | 'cols'
  | 'colspan'
  | 'coords'
  | 'crossorigin'
  | 'datetime'
  | 'default'
  | 'dir'
  | 'disabled'
  | 'download'
  | 'enctype'
  | 'face'
  | 'for'
  | 'headers'
  | 'height'
  | 'hidden'
  | 'high'
  | 'href'
  | 'hreflang'
  | 'id'
  | 'integrity'
  | 'ismap'
  | 'label'
  | 'lang'
  | 'list'
  | 'loop'
  | 'low'
  | 'max'
  | 'maxlength'
  | 'media'
  | 'method'
  | 'min'
  | 'multiple'
  | 'name'
  | 'noshade'
  | 'novalidate'
  | 'nowrap'
  | 'open'
  | 'optimum'
  | 'pattern'
  | 'placeholder'
  | 'poster'
  | 'preload'
  | 'pubdate'
  | 'radiogroup'
  | 'readonly'
  | 'rel'
  | 'required'
  | 'rev'
  | 'reversed'
  | 'role'
  | 'rows'
  | 'rowspan'
  | 'spellcheck'
  | 'scope'
  | 'selected'
  | 'shape'
  | 'size'
  | 'sizes'
  | 'span'
  | 'srclang'
  | 'start'
  | 'src'
  | 'srcset'
  | 'step'
  | 'style'
  | 'summary'
  | 'tabindex'
  | 'title'
  | 'type'
  | 'usemap'
  | 'valign'
  | 'value'
  | 'width'
  | 'xmlns';

type dompurify$svgTags =
  | 'svg'
  | 'a'
  | 'altglyph'
  | 'altglyphdef'
  | 'altglyphitem'
  | 'animatecolor'
  | 'animatemotion'
  | 'animatetransform'
  | 'audio'
  | 'canvas'
  | 'circle'
  | 'clippath'
  | 'defs'
  | 'desc'
  | 'ellipse'
  | 'filter'
  | 'font'
  | 'g'
  | 'glyph'
  | 'glyphref'
  | 'hkern'
  | 'image'
  | 'line'
  | 'lineargradient'
  | 'marker'
  | 'mask'
  | 'metadata'
  | 'mpath'
  | 'path'
  | 'pattern'
  | 'polygon'
  | 'polyline'
  | 'radialgradient'
  | 'rect'
  | 'stop'
  | 'style'
  | 'switch'
  | 'symbol'
  | 'text'
  | 'textpath'
  | 'title'
  | 'tref'
  | 'tspan'
  | 'video'
  | 'view'
  | 'vkern';

type dompurify$svgAttrs =
  | 'accent-height'
  | 'accumulate'
  | 'additivive'
  | 'alignment-baseline'
  | 'ascent'
  | 'attributename'
  | 'attributetype'
  | 'azimuth'
  | 'basefrequency'
  | 'baseline-shift'
  | 'begin'
  | 'bias'
  | 'by'
  | 'class'
  | 'clip'
  | 'clip-path'
  | 'clip-rule'
  | 'color'
  | 'color-interpolation'
  | 'color-interpolation-filters'
  | 'color-profile'
  | 'color-rendering'
  | 'cx'
  | 'cy'
  | 'd'
  | 'dx'
  | 'dy'
  | 'diffuseconstant'
  | 'direction'
  | 'display'
  | 'divisor'
  | 'dur'
  | 'edgemode'
  | 'elevation'
  | 'end'
  | 'fill'
  | 'fill-opacity'
  | 'fill-rule'
  | 'filter'
  | 'flood-color'
  | 'flood-opacity'
  | 'font-family'
  | 'font-size'
  | 'font-size-adjust'
  | 'font-stretch'
  | 'font-style'
  | 'font-variant'
  | 'font-weight'
  | 'fx'
  | 'fy'
  | 'g1'
  | 'g2'
  | 'glyph-name'
  | 'glyphref'
  | 'gradientunits'
  | 'gradienttransform'
  | 'height'
  | 'href'
  | 'id'
  | 'image-rendering'
  | 'in'
  | 'in2'
  | 'k'
  | 'k1'
  | 'k2'
  | 'k3'
  | 'k4'
  | 'kerning'
  | 'keypoints'
  | 'keysplines'
  | 'keytimes'
  | 'lang'
  | 'lengthadjust'
  | 'letter-spacing'
  | 'kernelmatrix'
  | 'kernelunitlength'
  | 'lighting-color'
  | 'local'
  | 'marker-end'
  | 'marker-mid'
  | 'marker-start'
  | 'markerheight'
  | 'markerunits'
  | 'markerwidth'
  | 'maskcontentunits'
  | 'maskunits'
  | 'max'
  | 'mask'
  | 'media'
  | 'method'
  | 'mode'
  | 'min'
  | 'name'
  | 'numoctaves'
  | 'offset'
  | 'operator'
  | 'opacity'
  | 'order'
  | 'orient'
  | 'orientation'
  | 'origin'
  | 'overflow'
  | 'paint-order'
  | 'path'
  | 'pathlength'
  | 'patterncontentunits'
  | 'patterntransform'
  | 'patternunits'
  | 'points'
  | 'preservealpha'
  | 'preserveaspectratio'
  | 'r'
  | 'rx'
  | 'ry'
  | 'radius'
  | 'refx'
  | 'refy'
  | 'repeatcount'
  | 'repeatdur'
  | 'restart'
  | 'result'
  | 'rotate'
  | 'scale'
  | 'seed'
  | 'shape-rendering'
  | 'specularconstant'
  | 'specularexponent'
  | 'spreadmethod'
  | 'stddeviation'
  | 'stitchtiles'
  | 'stop-color'
  | 'stop-opacity'
  | 'stroke-dasharray'
  | 'stroke-dashoffset'
  | 'stroke-linecap'
  | 'stroke-linejoin'
  | 'stroke-miterlimit'
  | 'stroke-opacity'
  | 'stroke'
  | 'stroke-width'
  | 'style'
  | 'surfacescale'
  | 'tabindex'
  | 'targetx'
  | 'targety'
  | 'transform'
  | 'text-anchor'
  | 'text-decoration'
  | 'text-rendering'
  | 'textlength'
  | 'type'
  | 'u1'
  | 'u2'
  | 'unicode'
  | 'values'
  | 'viewbox'
  | 'visibility'
  | 'vert-adv-y'
  | 'vert-origin-x'
  | 'vert-origin-y'
  | 'width'
  | 'word-spacing'
  | 'wrap'
  | 'writing-mode'
  | 'xchannelselector'
  | 'ychannelselector'
  | 'x'
  | 'x1'
  | 'x2'
  | 'xmlns'
  | 'y'
  | 'y1'
  | 'y2'
  | 'z'
  | 'zoomandpan';

type dompurify$svgFilters =
  | 'feBlend'
  | 'feColorMatrix'
  | 'feComponentTransfer'
  | 'feComposite'
  | 'feConvolveMatrix'
  | 'feDiffuseLighting'
  | 'feDisplacementMap'
  | 'feDistantLight'
  | 'feFlood'
  | 'feFuncA'
  | 'feFuncB'
  | 'feFuncG'
  | 'feFuncR'
  | 'feGaussianBlur'
  | 'feMerge'
  | 'feMergeNode'
  | 'feMorphology'
  | 'feOffset'
  | 'fePointLight'
  | 'feSpecularLighting'
  | 'feSpotLight'
  | 'feTile'
  | 'feTurbulence';

type dompurify$mathMlTags =
  | 'math'
  | 'menclose'
  | 'merror'
  | 'mfenced'
  | 'mfrac'
  | 'mglyph'
  | 'mi'
  | 'mlabeledtr'
  | 'mmuliscripts'
  | 'mn'
  | 'mo'
  | 'mover'
  | 'mpadded'
  | 'mphantom'
  | 'mroot'
  | 'mrow'
  | 'ms'
  | 'mpspace'
  | 'msqrt'
  | 'mystyle'
  | 'msub'
  | 'msup'
  | 'msubsup'
  | 'mtable'
  | 'mtd'
  | 'mtext'
  | 'mtr'
  | 'munder'
  | 'munderover';

type dompurify$mathMlAttrs =
  | 'accent'
  | 'accentunder'
  | 'align'
  | 'bevelled'
  | 'close'
  | 'columnsalign'
  | 'columnlines'
  | 'columnspan'
  | 'denomalign'
  | 'depth'
  | 'dir'
  | 'display'
  | 'displaystyle'
  | 'fence'
  | 'frame'
  | 'height'
  | 'href'
  | 'id'
  | 'largeop'
  | 'length'
  | 'linethickness'
  | 'lspace'
  | 'lquote'
  | 'mathbackground'
  | 'mathcolor'
  | 'mathsize'
  | 'mathvariant'
  | 'maxsize'
  | 'minsize'
  | 'movablelimits'
  | 'notation'
  | 'numalign'
  | 'open'
  | 'rowalign'
  | 'rowlines'
  | 'rowspacing'
  | 'rowspan'
  | 'rspace'
  | 'rquote'
  | 'scriptlevel'
  | 'scriptminsize'
  | 'scriptsizemultiplier'
  | 'selection'
  | 'separator'
  | 'separators'
  | 'stretchy'
  | 'subscriptshift'
  | 'supscriptshift'
  | 'symmetric'
  | 'voffset'
  | 'width'
  | 'xmlns';

type dompurify$tags = dompurify$htmlTags | dompurify$svgTags | dompurify$svgFilters | dompurify$mathMlTags;

type dompurify$attr = dompurify$htmlAttrs | dompurify$svgAttrs | dompurify$mathMlAttrs;

type dompurify$configBase = {|
  /**
   * make output safe for usage in jQuery's $()/html() method (default is false)
   */
  SAFE_FOR_JQUERY: boolean,
  /**
   * strip {{ ... }} and <% ... %> to make output safe for template systems
   */
  SAFE_FOR_TEMPLATES: boolean,
  /**
   * allow only tags
   */
  ALLOWED_TAGS: Array<dompurify$tags>,
  /**
   * allow only attrs
   */
  ALLOWED_ATTR: Array<dompurify$attr>,
  /**
   * allow all safe elements of different types
   */
  USE_PROFILES: $Shape<{
    html: boolean,
    svg: boolean,
    svgFilters: boolean,
    mathMl: boolean,
  }>,
  /**
   * leave all as it is but forbid specified tags
   */
  FORBID_TAGS: Array<dompurify$tags>,
  /**
   * leave all as it is but forbid specified attrs
   */
  FORBID_ATTR: Array<dompurify$attr>,
  /**
   * extend the existing array of allowed tags
   */
  ADD_TAGS: Array<$Subtype<string>>,
  /**
   * extend the existing array of attributes
   */
  ADD_ATTR: Array<$Subtype<string>>,
  /**
   * prohibit HTML5 data attributes (default is true)
   */
  ALLOW_DATA_ATTR: boolean,
  /**
   * allow external protocol handlers in URL attributes (default is false)
   * by default only http, https, ftp, ftps, tel, mailto, callto, cid and xmpp are allowed.
   */
  ALLOW_UNKNOWN_PROTOCOLS: boolean,
  /**
   * allow specific protocols handlers in URL attributes (default is false)
   * by default only http, https, ftp, ftps, tel, mailto, callto, cid and xmpp are allowed.
   * Default RegExp: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i;
   */
  ALLOWED_URI_REGEXP: RegExp,
  /**
   * return a DOM HTMLBodyElement instead of an HTML string (default is false)
   */
  RETURN_DOM: $Subtype<boolean>,
  /**
   * return a DOM DocumentFragment instead of an HTML string (default is false)
   */
  RETURN_DOM_FRAGMENT: $Subtype<boolean>,
  /**
   * Import DocumentFragment into the current document (default is false).
   * RETURN_DOM_IMPORT must be set if you would like to append the returned node to the current document
   */
  RETURN_DOM_IMPORT: boolean,
  /**
   * return entire document as string including <html> tags (default is false)
   */
  WHOLE_DOCUMENT: boolean,
  /**
   * disable DOM Clobbering protection on output (default is true, handle with care!)
   */
  SANITIZE_DOM: boolean,
  /**
   * discard an element's content when the element is removed (default is true)
   */
  KEEP_CONTENT: boolean,
  /**
   * glue elements like style, script or others to document.body and prevent unintuitive browser behavior
   * in several edge-cases (default is false)
   */
  FORCE_BODY: boolean,
  /**
   * use the IN_PLACE mode to sanitize a node "in place", which is much faster depending on how you use DOMpurify
   */
  IN_PLACE: boolean,
|};

type dompurify$hookType =
  | 'beforeSanitizeElements'
  | 'uponSanitizeElement'
  | 'afterSanitizeElements'
  | 'beforeSanitizeAttributes'
  | 'uponSanitizeAttribute'
  | 'afterSanitizeAttributes'
  | 'beforeSanitizeShadowDOM'
  | 'uponSanitizeShadowNode'
  | 'afterSanitizeShadowDOM';

type dompurify$hookEvent = {
  +tagName: ?$Subtype<dompurify$tags>,
  +allowedTags: ?{ [$Subtype<dompurify$tags>]: boolean },
  +allowedAttributes: ?{ [$Subtype<dompurify$attr>]: boolean },
  +attrName: ?$Subtype<dompurify$attr>,
  +attrValue: ?string,
  +keepAttr: ?boolean,
};

declare type dompurify$config = $Shape<dompurify$configBase>;

type dompurify$hook = (node: $Subtype<Node>, data: ?dompurify$hookEvent, config?: dompurify$config) => $Subtype<Node>;

interface dompurify$sanitizer {
  (dirty: string, config: $Shape<$Diff<dompurify$configBase, { RETURN_DOM: boolean, RETURN_DOM_FRAGMENT: boolean }>>): string,
  (dirty: string, config: dompurify$config & { RETURN_DOM: false, RETURN_DOM_FRAGMENT: false }): string,
  (dirty: string, config: dompurify$config & { RETURN_DOM: true, RETURN_DOM_FRAGMENT?: void | false }): HTMLBodyElement,
  (dirty: string, config: dompurify$config & { RETURN_DOM?: void | false, RETURN_DOM_FRAGMENT: true }): DocumentFragment,
  (dirty: string): string,
}

type dompurify$instance = {|
  +version: string,
  +removed: Array<{ element: $Subtype<Node> } | { attribute: ?Attr, from: $Subtype<Node> }>,
  +isSupported: boolean,
  sanitize: dompurify$sanitizer,
  setConfig: (config: dompurify$config) => void,
  clearConfig: () => void,
  isValidAttribute: (tag: string, attr: string, value: string) => boolean,
  addHook: (dompurify$hookType, dompurify$hook) => void,
  removeHook: (dompurify$hookType) => void,
  removeHooks: (dompurify$hookType) => void,
  removeAllHooks: () => void,
|};

type dompurify$creator = (window?: any) => dompurify$instance;

declare module 'dompurify' {
  declare module.exports: dompurify$creator;
}
declare module 'dompurify/dist/purify.cjs' {
  declare module.exports: dompurify$creator;
}
declare module 'dompurify/dist/purify.es' {
  declare module.exports: dompurify$creator;
}
declare module 'dompurify/dist/purify' {
  declare module.exports: dompurify$creator;
}
declare module 'dompurify/dist/purify.min' {
  declare module.exports: dompurify$creator;
}

declare module 'dompurify/dist/purify.cjs.js' {
  declare module.exports: $Exports<'dompurify/dist/purify.cjs'>;
}
declare module 'dompurify/dist/purify.es.js' {
  declare module.exports: $Exports<'dompurify/dist/purify.es'>;
}
declare module 'dompurify/dist/purify.js' {
  declare module.exports: $Exports<'dompurify/dist/purify'>;
}
declare module 'dompurify/dist/purify.min.js' {
  declare module.exports: $Exports<'dompurify/dist/purify.min'>;
}
