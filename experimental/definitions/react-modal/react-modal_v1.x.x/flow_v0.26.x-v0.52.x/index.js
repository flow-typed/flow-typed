declare module "react-modal" {
  declare type DefaultProps = {
    isOpen: boolean,
    ariaHideApp: boolean,
    closeTimeoutMS: number,
    shouldCloseOnOverlayClick: boolean
  };
  declare type Props = {
    isOpen: boolean,
    style?: {
      content?: Object,
      overlay?: Object
    },
    appElement?: HTMLElement,
    ariaHideApp: boolean,
    closeTimeoutMS: number,
    onAfterOpen?: () => mixed,
    onRequestClose?: (event: Event) => mixed,
    shouldCloseOnOverlayClick: boolean
  };
  declare class Modal extends React$Component {
    static setAppElement(element: HTMLElement | string): void;
    static defaultProps: DefaultProps;
    props: Props;
  }
  declare module.exports: typeof Modal;
}
