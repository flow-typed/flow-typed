declare module marked {
  declare type AlignFlag = 'left' | 'right' | 'center'

  declare type NodeCallback<T> = (e: ?Error, d: ?T) => void

  declare class Renderer {
    constructor: (o?: MarkedOptions) => Renderer;
    options: MarkedOptions;
    code: (c: string, l: string) => string;
    blockquote: (q: string) => string;
    html: (h: string) => string;
    heading: (t: string, l: number) => string;
    hr: () => string;
    list: (b: string, o: boolean) => string;
    listitem: (t: string) => string;
    paragraph: (t: string) => string;
    table: (h: string, b: string) => string;
    tablerow: (c: string) => string;
    tablecell: (c: string, f: ?AlignFlag) => string;
    heading: (t: string, l: number) => string;
    strong: (t: string) => string;
    em: (t: string) => string;
    codespan: (c: string) => string;
    br: () => string;
    del: (t: string) => string;
    link: (h: string, ti: string, te: string) => string;
    image: (h: string, ti: string, te: string) => string;
    text: (t: string) => string;
  }

  declare type HighlightFunction =
    ((c: string, l: string, cb: NodeCallback<string>) => void)
    | ((c: string, cb: NodeCallback<string>) => void)
    | ((c: string, l?: string) => string)

  declare type MarkedOptions = {
    highlight?: HighlightFunction;
    renderer?: Renderer;
    gfm?: boolean;
    tables?: boolean;
    breaks?: boolean;
    pedantic?: boolean;
    sanitize?: boolean;
    smartLists?: boolean;
    smartypants?: boolean;
  }

  /*
   * Tokens
   */

  declare type Space = { type: 'space'; }
  declare type Code = { type: 'code'; text: string; lang?: string; }
  declare type Heading = { type: 'heading'; depth: number; text: string; }
  declare type Table = { type: 'table'; header: string; align: Array<AlignFlag> ; cells: Array<Array<string>> }
  declare type Hr = { type: 'hr'; }
  declare type BlockquoteStart = { type: 'blockquote_start' }
  declare type BlockquoteEnd = { type: 'blockquote_end' }
  declare type ListStart = { type: 'list_start' }
  declare type ListEnd = { type: 'list_end' }
  declare type Paragraph = { type: 'paragraph'; pre: boolean; text: string; }
  declare type Html = { type: 'paragraph'; pre: boolean; text: string; }
  declare type Text = { type: 'text'; text: string; }

  declare type Token =
    Space
    | Code
    | Heading
    | Table
    | Hr
    | BlockquoteStart
    | BlockquoteEnd
    | ListStart
    | ListEnd
    | Paragraph
    | Html
    | Text

  declare type Link = {
    title: ?string;
    href: string;
  }

  declare type Tokens = { links: Array<Link> } & Array<Token>;

  declare type NoopRule = {
    (i: mixed): void;
    exec: (i: mixed) => void;
  }

  declare type Rule = RegExp | NoopRule

  declare type lex = (t: string) => Tokens;

  declare class Lexer {
    static lexer: (t: string, o?: MarkedOptions) => Tokens;
    static rules: { [key: string]: Rule };
    rules: { [key: string]: Rule };
    constructor: (o?: MarkedOptions) => Lexer;
    lex: lex;
    tokens: Tokens;
    options: MarkedOptions;
  }

  declare class Parser {
    static parse: (t: Tokens, o?: MarkedOptions) => string;
    constructor: (o?: MarkedOptions) => Parser;
    parse: (t: Tokens) => string;
    next: () => Token;
    peek: () => Token;
    parseText: () => string;
    tok: () => string;
    tokens: Tokens;
    token: ?Token;
    options: MarkedOptions;
    renderer: Renderer;
  }

  declare class InlineLexer {
    static rules: Array<Rule>;
    static output: (s: string, l: Array<Link>, o?: MarkedOptions) => string;
    constructor: (l: Array<Link>, o?: MarkedOptions) => InlineLexer;
    output: (s: string) => string;
    outputLink: (c: Array<string>, l: Link) => string;
    smartypants: (t: string) => string;
    mangle: (t: string) => string;
    options: MarkedOptions;
    links: Array<Link>;
    rules: Array<Rule>;
    renderer: Renderer;
  }

  declare type Marked = {
    (md: string, o: MarkedOptions, cb: NodeCallback<string>): void;
    (md: string, cb: NodeCallback<string>): void;
    (md: string, o?: MarkedOptions): string;
    setOptions: (o: MarkedOptions) => void;
    defaults: MarkedOptions;
    Parser: typeof Parser;
    parser: typeof Parser.parse;
    Lexer: typeof Lexer;
    lexer: typeof Lexer.lexer;
    InlineLexer: typeof InlineLexer;
    inlinelexer: InlineLexer.output;
    Renderer: typeof Renderer;
    parse: Marked;
  }

  declare export default Marked;
}

