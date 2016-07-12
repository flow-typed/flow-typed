declare class HighlightJs$Continuation {}

type HighlightJs$HighlightResult = {
  language: string,
  relevance: number,
  value: string,
  top?: HighlightJs$Continuation,
  second_best?: HighlightJs$HighlightResult
};

type HighlightJs$LanguageContains = {
  begin?: string|RegExp,
  beginKeywords?: string|RegExp,
  className?: string,
  contains?: Array<HighlightJs$LanguageContains>,
  end?: string|RegExp,
  keywords?: string,
  relevance?: number
};

type HighlightJs$Language = {
  aliases?: Array<string>,
  keywords: {
    keyword: string,
    literal: string,
    built_in: string,
  },
  contains: Array<HighlightJs$LanguageContains>
};

declare module 'highlight.js' {
  declare class HighlightJs {
    highlight(
      name: string,
      value: string,
      ignore_illegals?: boolean,
      continuation?: HighlightJs$Continuation
    ): HighlightJs$HighlightResult;
    highlightAuto(value: string, languageSubset?: Array<string>): HighlightJs$HighlightResult;
    fixMarkup(value: string): string;
    highlightBlock(block: Node): void;
    configure(options: { tabReplace?: string, useBR?: boolean, classPrefix?: string, languages?: Array<string> }): void;
    initHighlighting(): void;
    initHighlightingOnLoad(): void;
    registerLanguage(name: string, language: (hljs: HighlightJs) => HighlightJs$Language): void;
    listLanguages(): Array<string>;
    getLanguage(name: string): ? HighlightJs$Language;
  }

  declare var exports: HighlightJs
}
