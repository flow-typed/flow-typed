type AlignFlag = 'left' | 'right' | 'center'

type NodeCallback<T> = (e: ?Error, d: ?T) => void

class Renderer {
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
}

type HighlightFunction =
  ((c: string, l: string, cb: NodeCallback<string>) => void)
  | ((c: string, cb: NodeCallback<string>) => void)
  | ((c: string, l?: string) => string)

type MarkedOptions = {
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

type Space = { type: 'space'; }
type Code = { type: 'code'; text: string; lang?: string; }
type Heading = { type: 'heading'; depth: number; text: string; }
type Table = { type: 'table'; header: string; align: Array<AlignFlag> ; cells: Array<Array<string>> }
type Hr = { type: 'hr'; }
type BlockquoteStart = { type: 'blockquote_start' }
type BlockquoteEnd = { type: 'blockquote_end' }
type ListStart = { type: 'list_start' }
type ListEnd = { type: 'list_end' }
type Paragraph = { type: 'paragraph'; pre: boolean; text: string; }
type Html = { type: 'paragraph'; pre: boolean; text: string; }
type Text = { type: 'text'; text: string; }

type Token =
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

type Link = {
  title: string;
  href: string;
}

type lex = (t: string) => { links: Array<Link> } & Array<Token>;

type NoopRule = {
  (i: mixed): void;
  exec: (i: mixed) => void;
}
type Rule = RegExp | NoopRule

class Lexer {
  // TODO: check if that object actually is the same as markedoptons
  constructor: (o?: MarkedOptions) => Lexer;
  lex: lex;
  rules: { [key: string]: Rule };
}

declare module marked {
  declare type Marked = {
    (md: string, o: MarkedOptions, cb: NodeCallback<string>): void;
    (md: string, cb: NodeCallback<string>): void;
    (md: string, o?: MarkedOptions): string;
    setOptions: (o: MarkedOptions) => void;
    parser: (t: Array<Token>) => string;
    lexer: lex;
    Lexer: typeof Lexer;
    Renderer: typeof Renderer;
  }

  declare export default Marked;
}

