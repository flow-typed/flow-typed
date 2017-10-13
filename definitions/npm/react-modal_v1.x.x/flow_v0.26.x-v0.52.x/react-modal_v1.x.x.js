declare module 'react-modal' {
  declare type DefaultProps = {
    isOpen: bool,
    ariaHideApp: bool,
    closeTimeoutMS: number,
    shouldCloseOnOverlayClick: bool,
  }
  declare type Props = {
    isOpen: bool,
    style?: {
      content?: Object,
      overlay?: Object,
    },
    appElement?: HTMLElement,
    ariaHideApp: bool,
    closeTimeoutMS: number,
    onAfterOpen?: () => mixed,
    onRequestClose?: (event: Event) => mixed,
    shouldCloseOnOverlayClick: bool,
  }
  declare class Modal extends React$Component {
    static setAppElement(element: HTMLElement | string): void;
    static defaultProps: DefaultProps;
    props: Props;
  }
  declare var exports: typeof Modal;
}
