declare module 'remarkable' {
  declare type Env = any;

  declare type Token = any;

  declare type State = any;

  declare type RemarkablePlugin<Option> = (md: Remarkable, option: Option) => void;

  declare type RemarkableOptions = {
    html: boolean; // Enable HTML tags in source
    xhtmlOut: boolean; // Use '/' to close single tags (<br />)
    breaks: boolean; // Convert '\n' in paragraphs into <br>
    langPrefix: string;// CSS language prefix for fenced blocks
    linkify: boolean; // Autoconvert URL-like text to links
    typographer: boolean; // Enable some language-neutral replacement + quotes beautification

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: string;

    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed
    highlight: (str: string, lang: string) => string;
  };
  declare type RemarkableSettings = 'default' | 'commonmark' | 'full' | $Shape<RemarkableOptions>;

  declare type Parser = {
    ruler: Ruler;
    parse(str: string, options: RemarkableOptions, env: Env, outTokens: Array<Token>): void;
  }

  declare type RuleFunction = (state: State, silent: boolean) => boolean;

  declare class Ruler {
    at(name: string, fn: RuleFunction, options: RemarkableOptions): void;
    before(beforeName: string, ruleName: string, fn: RuleFunction, options: RemarkableOptions): void;
    after(afterName: string, ruleName: string, fn: RuleFunction, options: RemarkableOptions): void;
    push(ruleName: string, fn: RuleFunction, options: RemarkableOptions): void;
    enable(list: string | Array<string>, strict: boolean): void;
    disable(list: string | Array<string>): void;
    getRules(chaineName: string): Array<RuleFunction>;
  }

  declare class Renderer {
    render(tokens: Array<Token>, options: RemarkableOptions, env: Env): string;
    renderInline(tokens: Array<Token>, options: RemarkableOptions, env: Env): string;
  }

  declare class Remarkable {
    constructor(settings?: RemarkableSettings): void;
    use<Option>(plugin: RemarkablePlugin<Option>, options?: Option): this;
    parse(source: string, env?: Env): Array<Token>;
    parseInline(source: string, env?: any): Array<Token>;
    set(settings: RemarkableSettings): void;
    render(source: string, env?: Env): string;
    renderInline(source: string, env?: Env): string;
    //parsers
    inline: Parser;
    block: Parser;
    core: Parser;
    renderer: Renderer;
  }

  declare export default typeof Remarkable;
}
