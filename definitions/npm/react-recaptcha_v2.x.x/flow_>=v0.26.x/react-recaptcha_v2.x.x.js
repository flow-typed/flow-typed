declare module 'react-recaptcha' {
  declare type DefaultProps = {
    elementID: 'g-recaptcha',
    onloadCallback: void,
    onloadCallbackName: 'onloadCallback',
    verifyCallback: void,
    verifyCallbackName: 'verifyCallback',
    expiredCallback: void,
    expiredCallbackName: 'expiredCallback',
    render: 'onload',
    theme: 'light',
    type: 'image',
    size: 'normal',
    tabindex: '0',
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

  declare class Recaptcha extends React$Component {
    defaultProps: DefaultProps;
    props: Props;
    componentDidMount(): void;
    render(): React$Element;
  }
  declare module.exports: Class<Recaptcha>;
}
