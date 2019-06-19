declare module "sweetalert2" {
  declare export type AlertOptions = {};

  declare export type AlertInputAttributes = {
    [attribute: string]: string
  };

  declare export type AlertInputType =
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "range"
    | "textarea"
    | "select"
    | "radio"
    | "checkbox"
    | "file"
    | "url";

  declare export type AlertType =
    | "success"
    | "error"
    | "warning"
    | "info"
    | "question";

  declare export type AlertPosition =
    | "top"
    | "top-start"
    | "top-end"
    | "top-left"
    | "top-right"
    | "center"
    | "center-start"
    | "center-end"
    | "center-left"
    | "center-right"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "bottom-left"
    | "bottom-right";

  declare export type AlertInputOptions =
    | Map<string, string>
    | { [inputValue: string]: string };

  declare export type Options = {|
    title?: string,
    titleText?: string,
    text?: string,
    html?: any, // TODO: string | JQuery (can't import other libdefs right now)
    footer?: string,
    type?: AlertType,
    backdrop?: boolean | string,
    toast?: boolean,
    target?: string,
    input?: AlertInputType,
    width?: number | string,
    padding?: number,
    background?: string,
    position?: AlertPosition,
    grow?: "row" | "column" | "fullscreen" | false,
    customClass?: string,
    timer?: number,
    animation?: boolean,
    allowOutsideClick?: boolean | (() => boolean),
    allowEscapeKey?: boolean | (() => boolean),
    allowEnterKey?: boolean | (() => boolean),
    showConfirmButton?: boolean,
    showCancelButton?: boolean,
    confirmButtonText?: string,
    cancelButtonText?: string,
    confirmButtonColor?: string,
    cancelButtonColor?: string,
    confirmButtonClass?: string,
    cancelButtonClass?: string,
    confirmButtonAriaLabel?: string,
    cancelButtonAriaLabel?: string,
    buttonsStyling?: boolean,
    reverseButtons?: boolean,
    focusConfirm?: boolean,
    focusCancel?: boolean,
    showCloseButton?: boolean,
    closeButtonAriaLabel?: string,
    showLoaderOnConfirm?: boolean,
    preConfirm?: (inputValue: any) => Promise<any | void> | any | void,
    imageUrl?: string,
    imageWidth?: number,
    imageHeight?: number,
    imageAlt?: string,
    imageClass?: string,
    inputPlaceholder?: string,
    inputValue?: any,
    inputOptions?: AlertInputOptions | Promise<AlertInputOptions>,
    inputAutoTrim?: boolean,
    inputAttributes?: AlertInputAttributes,
    inputValidator?: (
      inputValue: any
    ) => Promise<string | null> | string | null,
    inputClass?: string,
    progressSteps?: string[],
    currentProgressStep?: string,
    progressStepsDistance?: string,
    onBeforeOpen?: (modalElement: HTMLElement) => void,
    onOpen?: (modalElement: HTMLElement) => void,
    onClose?: (modalElement: HTMLElement) => void,
    useRejections?: boolean,
    expectRejections?: boolean
  |};

  declare export type Result = {};

  declare export default {
    (title: string, message?: string, type?: AlertType): Promise<any>,
    (options: Options): Promise<any>,
    isVisible: () => boolean,
    setDefaults: (defaultOptions: AlertOptions) => void,
    resetDefaults: () => void,
    close: (onComplete?: (modalElement: HTMLElement) => void) => void,
    getTitle: () => HTMLElement,
    getContent: () => HTMLElement,
    getImage: () => HTMLElement,
    getConfirmButton: () => HTMLElement,
    getCancelButton: () => HTMLElement,
    getButtonsWrapper: () => HTMLElement,
    getActions: () => HTMLElement,
    getFooter: () => HTMLElement,
    enableButtons: () => void,
    disableButtons: () => void,
    enableConfirmButton: () => void,
    disableConfirmButton: () => void,
    showLoading: () => void,
    hideLoading: () => void,
    isLoading: () => boolean,
    clickConfirm: () => void,
    clickCancel: () => void,
    showValidationError: (error: string) => void,
    resetValidationError: () => void,
    getInput: () => HTMLElement,
    disableInput: () => void,
    enableInput: () => void,
    queue: (steps: Array<AlertOptions | string>) => Promise<any>,
    getQueueStep: () => string | null,
    insertQueueStep: (step: AlertOptions, index?: number) => number,
    deleteQueueStep: (index: number) => void,
    getProgressSteps: () => string[],
    setProgressSteps: (steps: string[]) => void,
    showProgressSteps: () => void,
    hideProgressSteps: () => void,
    isValidParameter: (paramName: string) => boolean,
    noop: () => void,
    DismissReason: {
      cancel: "cancel",
      backdrop: "overlay",
      close: "close",
      esc: "esc",
      timer: "timer"
    }
  }
}
