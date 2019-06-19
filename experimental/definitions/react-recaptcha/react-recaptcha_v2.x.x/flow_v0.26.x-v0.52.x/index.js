declare module 'react-recaptcha' {
  declare type DefaultProps = {
    elementID: string,
    onloadCallbackName: string,
    verifyCallbackName: string,
    expiredCallbackName: string,
    render: string,
    theme: 'dark' | 'light',
    type: string,
    size: string,
    tabindex: string,
  };

  declare type Props = {
    className?: string,
    onloadCallbackName?: string,
    elementID?: string,
    onloadCallback?: () => void,
    verifyCallback?: (value: string) => void,
    expiredCallback?: () => void,
    render?: string,
    sitekey: string,
    theme?: 'dark' | 'light',
    type?: string,
    verifyCallbackName?: string,
    expiredCallbackName?: string,
    size?: string,
    tabindex?: string,
  };

  declare class Recaptcha extends React$Component<DefaultProps, Props, any> {
    static defaultProps: DefaultProps;
    props: Props;
    componentDidMount(): void;
    render(): React$Element<any>;
  }

  declare module.exports: Class<Recaptcha>;
}
