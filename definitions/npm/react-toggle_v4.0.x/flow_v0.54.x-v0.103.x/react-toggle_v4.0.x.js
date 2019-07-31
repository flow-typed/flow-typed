declare module "react-toggle" {
  declare type Icons = {
    checked?: React$Node,
    unchecked?: React$Node
  };

  declare type Props = {
    checked?: boolean,
    defaultChecked?: boolean,
    onChange?: (e: SyntheticInputEvent<*>) => void,
    onFocus?: (e: SyntheticInputEvent<*>) => void,
    onBlur?: (e: SyntheticInputEvent<*>) => void,
    name?: string,
    value?: string,
    id?: string,
    icons?: Icons | boolean,
    "aria-labelledby"?: string,
    "aria-label"?: string,
    disabled?: boolean
  };

  declare export default class Toggle extends React$Component<Props> {}
}
