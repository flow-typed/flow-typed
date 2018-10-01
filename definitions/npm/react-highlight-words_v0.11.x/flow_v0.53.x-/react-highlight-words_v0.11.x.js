declare module "react-highlight-words" {
  import type { Node } from 'react';
  declare type Sanitize = (value: string) => string
  declare type FindChunks = ({
    autoEscape: boolean,
    caseSensitive: boolean,
    sanitize: Sanitize,
    searchWords: Array<string>,
    textToHighlight: string
  }) => Array<string>;

  declare type Props = {
    activeClassName?: string,
    activeIndex?: string,
    autoEscape?: boolean,
    className?: string,
    caseSensitive?: boolean,
    findChunks?: FindChunks,
    highlightClassName?: string,
    highlightStyle?: {[name: string]: string},
    highlightTag?: Node,
    sanitize?: Sanitize,
    searchWords: Array<string>,
    textToHighlight: string,
    unhighlightClassName?: string,
    unhighlightStyle?: {[name: string]: string}
  };

  declare export default class ReactHighlightedWords extends React$Component<Props> {}
}
