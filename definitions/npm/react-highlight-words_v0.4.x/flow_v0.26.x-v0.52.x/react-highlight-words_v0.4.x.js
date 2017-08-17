declare module 'react-highlight-words' {
  declare type Props = {
    autoEscape?: bool,
    highlightClassName?: string,
    highlightStyle?: Object,
    sanitize?: Function,
    searchWords: string[],
    textToHighlight: string,
  }
  declare class ReactHighlightedWords extends React$Component {
    props: Props;
  }
  declare var exports: typeof ReactHighlightedWords;
}
