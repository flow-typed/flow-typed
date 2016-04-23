import type React from 'react';

type ReactModal$DefaultProps = {
  isOpen: false,
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldCloseOnOverlayClick: true,
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
  declare var exports: React.Component<ReactModal$DefaultProps, ReactModal$Props, ReactModal$State>;
}
