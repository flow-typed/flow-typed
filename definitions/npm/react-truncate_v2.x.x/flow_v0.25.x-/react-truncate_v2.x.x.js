// @flow

declare module 'react-truncate' {
  declare export type TruncateProps = {
    lines?: number | false,
    ellipsis?: React$Node,
    trimWhitespace?: boolean,
    children: React$Node,
    onTruncate?: (isTruncated: boolean) => void
  };

  declare export default class Truncate extends React$Component<TruncateProps> {}
}
