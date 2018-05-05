// @flow
declare module "prosemirror-model" {
  declare export class Node {
    type: NodeType,
    attrs: { [key: string]: any },
    content: Fragment,
    marks: Array<Mark>,
    text?: string,
    nodeSize: number,
    childCount: number,
    textContent: string,
    firstChild: ?Node,
    lastChild: ?Node,
    isBlock: boolean,
    isTextBlock: boolean,
    inlineContext: boolean,
    isInline: boolean,
    isText: boolean,
    isLeaf: boolean,
    isAtom: boolean,

    child(index: number): Node,

    maybeChild(index: number): ?Node,

    forEach((node: Node, offset: number, index: number) => any): void,

    nodesBetween(
      from: number,
      to: number,
      f: (node: Node, pos: number, parent: Node, index: number) => ?boolean
    ): void,

    descendents(f: (node: Node, pos: number, parent: Node) => ?boolean): void,

    textBetween(
      from: number,
      to: number,
      blockSeparator?: string,
      leafText?: string
    ): string,

    eq(other: Node): boolean,

    sameMarkup(other: Node): boolean,

    copy(content?: Fragment): Node,

    mark(marks: Array<Mark>): Node,

    cut(from: number, to?: number): Node,

    slice(from: number, to?: number): Slice,

    replace(from: number, to: number, slice: Slice): Node,

    nodeAt(pos: number): ?Node,

    childAfter(pos: number): { node: ?Node, index: number, offset: number },

    childBefore(pos: number): { node: ?Node, index: number, offset: number },

    resolve(pos: number): ResolvedPos,

    rangeHasMark(from: number, to: number, type: MarkType): boolean,

    toString(): string,

    contentMatchAt(index: number): ContentMatch,

    canReplace(
      from: number,
      to: number,
      replacement?: Fragment,
      start?: number,
      end?: number
    ): boolean,

    canReplaceWith(
      from: number,
      to: number,
      type: NodeType,
      marks?: Array<Mark>
    ): boolean,

    canAppend(other: Node): boolean,

    check(): void,

    toJSON(): Object,

    static fromJSON(schema: Schema, json: Object): Node
  }

  declare export class Fragment {
    size: number,
    firstChild: ?Node,
    lastChild: ?Node,
    childCount: number,

    nodesBetween(
      from: number,
      to: number,
      f: (node: Node, start: number, parent: Node, index: number) => ?boolean
    ): void,

    descendents(f: (node: Node, pos: number, parent: Node) => ?boolean): void,

    append(other: Fragment): Fragment,

    cut(from: number, to?: number): Fragment,

    replaceChild(index: number, node: Node): Fragment,

    eq(other: Fragment): boolean,

    child(index: number): Node,

    maybeChild(index: number): ?Node,

    forEach(f: (node: Node, offset: number, index: number) => void): void,

    findDiffStart(other: Node): ?number,

    findDiffEnd(other: Node): ?{ a: number, b: number },

    toString(): string,

    toJSON(): Object,

    static fromJSON(schema: Schema, value: ?Object): Fragment,

    static fromArray(array: Array<Node>): Fragment,

    static from(nodes: ?Fragment | Node | Array<Node>): Fragment,

    static empty: Fragment
  }

  declare export class Mark {
    type: MarkType,
    attrs: Object,

    addToSet(set: Array<Mark>): Array<Mark>,

    removeFromSet(set: Array<Mark>): Array<Mark>,

    isInSet(set: Array<Mark>): boolean,

    eq(other: Mark): boolean,

    toJSON(): Object,

    static none: Array<Mark>,

    static fromJSON(schema: Schema, json: Object): Mark,

    static sameSet(a: Array<Mark>, b: Array<Mark>): boolean,

    static setFrom(marks: ?Mark | Array<Mark>): Array<Mark>
  }

  declare export class Slice {
    content: Fragment,
    openStart: number,
    openEnd: number,
    size: number,

    constructor(content: Fragment, openStart: number, openEnd: number): Slice,

    eq(other: Slice): boolean,

    toJSON(): ?Object,

    static empty: Slice,

    static fromJSON(schema: Schema, json: ?Object): Slice,

    static maxOpen(fragment: Fragment): Slice
  }

  declare export class ReplaceError extends Error {}

  declare export class ResolvedPos {
    pos: number,
    depth: number,
    parentOffset: number,
    parent: Node,
    doc: Node,
    textOffset: number,
    nodeAfter: ?Node,
    nodeBefore: ?Node,

    node(depth?: number): Node,

    index(depth?: number): number,

    indexAfter(depth?: number): number,

    start(depth?: number): number,

    end(depth?: number): number,

    before(depth?: number): number,

    after(depth?: number): number,

    marks(): Array<Mark>,

    marksAcross(): ?Array<Mark>,

    sharedDepth(pos: number): number,

    blockRange(other?: ResolvedPos, pred?: (Node) => boolean): ?NodeRange,

    sameParent(other: ResolvedPos): boolean,

    max(other: ResolvedPos): ResolvedPos,

    min(other: ResolvedPos): ResolvedPos
  }

  declare export class NodeRange {
    $from: ResolvedPos,
    $to: ResolvedPos,
    depth: number,
    start: number,
    end: number,
    parent: Node,
    startIndex: number,
    endIndex: number,

    constructor($from: ResolvedPos, $to: ResolvedPos, depth: number): NodeRange
  }

  declare export class Schema {
    spec: SchemaSpec,
    nodes: { [name: string]: NodeType },
    marks: ?{ [name: string]: MarkType },
    topNodeType: NodeType,
    cached: Object,

    constructor(spec: SchemaSpec): Schema,

    node(
      type: string | NodeType,
      attrs?: ?{ [key: string]: any },
      content?: Fragment | Node | Array<Node> | void,
      marks?: ?Array<Mark>
    ): Node,

    text(text: string, marks?: Array<Mark>): Node,

    mark(type: string | MarkType, attrs?: { [key: string]: any }): Mark,

    nodeFromJSON(json: Object): Node,

    markFromJSON(json: Object): Mark
  }

  declare export type SchemaSpec = {
    nodes: { [name: string]: NodeSpec } /* | OrderedMap<NodeSpec> */,

    marks?: { [name: string]: MarkSpec } /* | OrderedMap<MarkSpec> */,

    topNode?: string
  };

  declare export type NodeSpec = {
    content?: string,
    marks?: string,
    group?: string,
    inline?: boolean,
    atom?: boolean,
    attrs?: Object,
    selectable?: boolean,
    draggable?: boolean,
    code?: boolean,
    defining?: boolean,
    isolating?: boolean,
    toDOM?: (node: Node) => DOMOutputSpec,
    parseDOM?: Array<any>
  };

  declare export type MarkSpec = {
    attrs?: { [name: string]: AttributeSpec },
    inclusive?: boolean,
    excludes?: string,
    group?: string,
    toDOM: (mark: Mark, inline: boolean) => DOMOutputSpec,
    parseDOM?: Array<any>
  };

  declare export type AttributeSpec = {
    default?: any
  };

  declare export class NodeType {
    name: string,
    schema: Schema,
    spec: NodeSpec,
    contentMatch: ContentMatch,
    inlineContext: boolean,
    isBlock: boolean,
    isText: boolean,
    isInline: boolean,
    isTextBlock: boolean,
    isLeaf: boolean,
    isAtom: boolean,

    create(
      attrs: ?Object,
      content: ?Fragment | Node | Array<Node>,
      marks: ?Array<Mark>
    ): Node,

    createChecked(
      attrs: ?Object,
      content: ?Fragment | Node | Array<Node>,
      marks: ?Array<Mark>
    ): Node,

    createAndFill(
      attrs: ?Object,
      content: ?Fragment | Node | Array<Node>,
      marks: ?Array<Mark>
    ): Node,

    validContent(content: Fragment): boolean,

    allowsMarkType(markType: MarkType): boolean,

    allowsMarks(marks: Array<Mark>): boolean,

    allowedMarks(marks: Array<Mark>): Array<Mark>
  }

  declare export class MarkType {
    name: string,
    schema: Schema,
    spec: MarkSpec,

    create(attrs: ?Object): Mark,

    removeFromSet(set: Array<Mark>): Array<Mark>,

    isInSet(set: Array<Mark>): ?Mark,

    excludes(other: MarkType): boolean
  }

  declare export class ContentMatch {
    validEnd: boolean,

    matchType(type: NodeType): ?ContentMatch,

    matchFragment(
      fragment: Fragment,
      start?: number,
      end?: number
    ): ?ContentMatch,

    fillBefore(
      after: Fragment,
      toEnd?: boolean,
      startIndex?: number
    ): ?Fragment,

    findWrapping(target: NodeType): ?Array<NodeType>
  }

  declare export class DOMParser {
    schema: Schema,
    rules: Array<ParseRule>,

    constructor(schema: Schema, rules: Array<ParseRule>): DOMParser,

    parse(dom: Node, options?: ParseOptions): Node,

    parseSlice(dom: Node, options?: ParseOptions): Slice,

    static fromSchema(schema: Schema): DOMParser
  }

  declare type ParseOptions = {
    preserveWhitespace?: boolean | "full",
    findPositions?: Array<{ node: Node, offset: number }>,
    from?: number,
    to?: number,
    topNode?: Node,
    topMatch?: ContentMatch,
    context?: ResolvedPos
  };

  declare type ParseRule = {
    tag?: string,
    namespace?: string,
    style?: string,
    priority?: string,
    content?: string,
    node?: string,
    mark?: string,
    ignore?: boolean,
    skip?: boolean,
    attrs?: Object,
    getAttrs?: (Node | string) => Object | false | null,
    contentElement?: string | (Node => Node),
    getContent?: Node => Fragment,
    preserveWhitespace?: boolean | "full"
  };

  declare export class DOMSerializer {
    nodes: { [key: string]: (node: Node) => DOMOutputSpec },
    marks: { [key: string]: (node: Node) => DOMOutputSpec },

    constructor(
      nodes: {
        [key: string]: (node: Node) => DOMOutputSpec
      },
      marks: {
        [key: string]: (node: Node) => DOMOutputSpec
      }
    ): DOMSerializer,

    serializeFragment(fragment: Fragment, options?: Object): DocumentFragment,

    static renderSpec(
      doc: Document,
      structure: DOMOutputSpec
    ): { dom: Node, contentDOM?: Node },

    static fromSchema(schema: Schema): DOMSerializer
  }

  declare type Attributes = { [string]: ?string }

  declare export type DOMOutputSpec =
    | string // node.text
    | Element // document.createElement("div")
    | [string] // ["br"]
    // ["p", 0]
    // ["img", node.attrs]
    // ["div", ["hr"]]
    | [string, 0 | Attributes | DOMOutputSpec | DOMOutputSpec[]]
    // ["ul", { "data-tight": node.attrs.tight ? "true" : null }, 0]
    // ["pre", node.attrs.params ? {"data-params": node.attrs.params} : {}, ["code", 0]]
    // ["li", { "data-task": "true" }, [["input", {"type":"checkbox"}], 0]]
    | [string, Attributes, 0 | DOMOutputSpec | DOMOutputSpec[]]
}
