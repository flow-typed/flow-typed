import type React from 'react';

type ReactModal$DefaultProps = {
  isOpen: bool,
  ariaHideApp: bool,
  closeTimeoutMS: number,
  shouldCloseOnOverlayClick: bool,
}

type ReactModal$Props = {
  isOpen: bool,
  style?: {
    content?: Object,
    overlay?: Object,
  },
  appElement?: HTMLElement,
  onRequestClose?: Function,
  closeTimeoutMS: number,
  ariaHideApp: bool,
  shouldCloseOnOverlayClick: bool,
}

type ReactModal$State = void

declare module 'react-modal' {
  declare class Modal extends React$Component {
    static defaultProps: ReactModal$DefaultProps;
    props: ReactModal$Props;
  }
  declare var exports: typeof Modal;
}
