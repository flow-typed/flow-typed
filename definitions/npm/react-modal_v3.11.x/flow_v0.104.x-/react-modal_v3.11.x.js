declare module 'react-modal' {
  declare type ModalProps = {
    isOpen?: boolean,
    portalClassName?: string,
    bodyOpenClassName?: string,
    ariaHideApp?: boolean,
    closeTimeoutMS?: number,
    shouldFocusAfterRender?: boolean,
    shouldCloseOnEsc?: boolean,
    shouldCloseOnOverlayClick?: boolean,
    shouldReturnFocusAfterClose?: boolean,
    parentSelector?: () => HTMLElement | null,
    style?: {
      content?: { [key: string]: string | number, ... },
      overlay?: { [key: string]: string | number, ... },
      ...
    },
    id?: string,
    className?: string | {
      base: string,
      afterOpen: string,
      beforeClose: string,
      ...
    },
    overlayClassName?: string | {
      base: string,
      afterOpen: string,
      beforeClose: string,
      ...
    },
    onAfterOpen?: ({ overlayEl: HTMLElement, contentEl: HTMLElement, ... }) => void | Promise<void>,
    onAfterClose?: () => void | Promise<void>,
    onRequestClose?: (SyntheticEvent<>) => void,
    aria?: { [key: string]: string, ... },
    role?: string,
    contentLabel?: string,
    overlayRef?: (node: ?HTMLElement) => mixed,
    containerRef?: (node: ?HTMLElement) => mixed,
    ...
  };

  declare class Modal extends React$Component<ModalProps> {
    static setAppElement(element: HTMLElement | string | null): void;
  }

  declare module.exports: typeof Modal;
}
