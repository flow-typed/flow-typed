declare module 'remarkable' {
  declare type Env = any;

  declare type Token = any;

  declare type State = any;

  declare export type RemarkablePlugin<Option> = (
    md: Remarkable,
    option: Option
  ) => void;

  declare export type RemarkableOptions = {
    // Enable HTML tags in source
    html: boolean,
    // Use '/' to close single tags (<br />)
    xhtmlOut: boolean,
    // Convert '\n' in paragraphs into <br>
    breaks: boolean,
    // CSS language prefix for fenced blocks
    langPrefix: string,
    // Enable some language-neutral replacement + quotes beautification
    typographer: boolean,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: string,
    // Set target to open link in
    linkTarget: string,
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed
    highlight: (str: string, lang: string) => string,
    ...
  };

  declare type RemarkableSettings =
    | 'default'
    | 'commonmark'
    | 'full'
    | $Shape<RemarkableOptions>;

  declare type Parser = {
    ruler: Ruler,
    parse(
      str: string,
      options: RemarkableOptions,
      env: Env,
      outTokens: Array<Token>
    ): void,
    ...
  };

  declare type RuleFunction = (state: State, silent: boolean) => boolean;

  declare class Ruler {
    at(name: string, fn: RuleFunction, options: RemarkableOptions): void;
    before(
      beforeName: string,
      ruleName: string,
      fn: RuleFunction,
      options: RemarkableOptions
    ): void;
    after(
      afterName: string,
      ruleName: string,
      fn: RuleFunction,
      options: RemarkableOptions
    ): void;
    push(ruleName: string, fn: RuleFunction, options: RemarkableOptions): void;
    enable(list: string | Array<string>, strict: boolean): void;
    disable(list: string | Array<string>): void;
    getRules(chaineName: string): Array<RuleFunction>;
  }

  declare class Renderer {
    render(tokens: Array<Token>, options: RemarkableOptions, env: Env): string;
    renderInline(
      tokens: Array<Token>,
      options: RemarkableOptions,
      env: Env
    ): string;
  }

  declare export class Remarkable {
    constructor(settings?: RemarkableSettings): void;
    use<Option>(plugin: RemarkablePlugin<Option>, options?: Option): this;
    parse(source: string, env?: Env): Array<Token>;
    parseInline(source: string, env?: any): Array<Token>;
    set(settings: RemarkableSettings): void;
    render(source: string, env?: Env): string;
    renderInline(source: string, env?: Env): string;
    // parsers
    inline: Parser;
    block: Parser;
    core: Parser;
    renderer: Renderer;
  }

  declare type Utils = {|
    isString(obj?: any): boolean,
    has(object: any, key: string): boolean,
    assign(target: any, ...sources: any[]): any,
    unescapeMd(str: string): string,
    isValidEntityCode(c: number): boolean,
    fromCodePoint(c: number): string,
    replaceEntities(str: string): string,
    escapeHtml(str: string): string,
  |};

  declare export var utils: Utils;
}

declare module 'remarkable/linkify' {
  import type { RemarkablePlugin } from 'remarkable';

  declare export var linkify: RemarkablePlugin<void>;
}
