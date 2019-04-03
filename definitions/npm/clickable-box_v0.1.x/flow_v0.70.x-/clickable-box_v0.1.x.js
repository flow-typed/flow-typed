declare module 'clickable-box' {
  declare export type Props = {
    is?: React$ElementType,
    tabIndex?: number,
    disabled?: boolean,
    innerRef?: React$Ref<*>,
    children?: React$Node,
    onClick?: (evt: SyntheticMouseEvent<>) => void,
    onKeyPress?: (evt: SyntheticKeyboardEvent<>) => void,
  };

  declare export default class ClickableBox extends React$Component<Props> {}
}
