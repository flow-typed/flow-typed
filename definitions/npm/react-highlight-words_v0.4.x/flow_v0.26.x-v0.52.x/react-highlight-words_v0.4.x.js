declare module "react-highlight-words" {
  declare type Props = {
    autoEscape?: boolean,
    highlightClassName?: string,
    highlightStyle?: Object,
    sanitize?: Function,
    searchWords: string[],
    textToHighlight: string
  };
  declare class ReactHighlightedWords extends React$Component {
    props: Props;
  }
  declare module.exports: typeof ReactHighlightedWords;
}
