// @flow

declare module 'react-copy-to-clipboard' {
  declare export type CopyToClipboardOptions = {
    debug: boolean,
    message: string,
    ...
  };

  declare export type CopyToClipboardProps = {
    text: string,
    onCopy?: (text: string, result: boolean) => void,
    options?: CopyToClipboardOptions,
    children?: React$Node,
    ...
  };

  declare export class CopyToClipboard extends React$Component<CopyToClipboardProps> {}
  declare export default class CopyToClipboard extends React$Component<CopyToClipboardProps> {}
}
