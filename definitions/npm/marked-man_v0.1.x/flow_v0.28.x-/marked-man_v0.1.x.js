import marked from 'marked'

type NodeCallback<T> = (e: ?Error, d: ?T) => void

// FIXME This should really be an intersect with marked.options, but since intersects aren't yet supported,
// it does more harm than good.
type MarkedManOptions = {
  format?: string,
  name?: string,
  date?: Date,
  section?: string,
  version?: string,
  manual?: string,
  gfm?: boolean,
  breaks?: boolean,
  sanitize?: boolean,
  ronn?: boolean
}

class Lexer extends marked.Lexer {
  static lexer: (t: string, o?: MarkedManOptions) => typeof marked.Lexer.Tokens;
  constructor: (o?: MarkedManOptions) => Lexer;
  options: MarkedManOptions;
}

class Renderer extends marked.Renderer {
  constructor: (o?: MarkedManOptions) => Renderer
  options: MarkedManOptions;
}

class InlineLexer extends marked.InlineLexer {
  html_output: marked.Lexer.prototype.output;
  html_outputLink: marked.Lexer.prototype.outputLink;
  roff_output: typeof marked.Lexer.prototype.output;
  roff_outputLink: typeof marked.Lexer.prototype.outputLink;
  options: MarkedManOptions;
}

class Parser extends marked.Parser {
  static parse: (t: marked.Lexer.Tokens, o?: MarkedManOptions) => string;
  constructor: (o?: MarkedManOptions) => Parser;
  html_tok: marked.Parser.prototype.tok;
  roff_tok: typeof marked.Parser.prototype.tok;
  options: MarkedManOptions;
}

// FIXME This should be an intersection with marked. Since intersections with objects aren't yet supported,
// it would break type checking.

declare module 'marked-man' {
  declare type MarkedMan = {
    (md: string, o: MarkedManOptions, cb: NodeCallback<string>): void;
    (md: string, cb: NodeCallback<string>): void;
    (md: string, o?: MarkedManOptions): string;
    setOptions: (o: MarkedManOptions) => void;
    defaults: MarkedManOptions;
    Parser: typeof Parser;
    Renderer: typeof Renderer;
    InlineLexer: typeof Parser;
  }

  declare export default MarkedMan;
}

