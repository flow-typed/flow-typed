declare module "react-toggle" {
  declare type Icons = {
    checked?: React$Node,
    unchecked?: React$Node,
    ...
  };

  declare type Props = {
    checked?: boolean,
    defaultChecked?: boolean,
    onChange?: (e: SyntheticInputEvent<any>) => void,
    onFocus?: (e: SyntheticInputEvent<any>) => void,
    onBlur?: (e: SyntheticInputEvent<any>) => void,
    name?: string,
    value?: string,
    id?: string,
    icons?: Icons | boolean,
    "aria-labelledby"?: string,
    "aria-label"?: string,
    disabled?: boolean,
    ...
  };

  declare export default class Toggle extends React$Component<Props> {}
}
