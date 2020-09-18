declare module '@testing-library/user-event' {
  declare type TypeOpts = {|
    skipClick?: boolean,
    skipAutoClose?: boolean,
    delay?: number,
    initialSelectionStart?: number,
    initialSelectionEnd?: number,
  |};

  declare type TabUserOptions = {|
    shift?: boolean,
    focusTrap?: Document | Element,
  |};

  // As of Flow 0.134.x WindowProxy is any, which would annihilate all typechecking.
  declare type TargetElement = Element; /* | WindowProxy */

  declare type FilesArgument = File | File[];

  declare type UploadInitArgument = {|
    clickInit?: MouseEvent$MouseEventInit,
    changeInit?: Event,
  |};

  declare type ClickOptions = {|
    skipHover?: boolean,
    clickCount?: number,
  |};

  declare type UserEvent = {|
    clear: (element: TargetElement) => void,

    click: (
      element: TargetElement,
      eventInit?: MouseEvent$MouseEventInit,
      options?: ClickOptions
    ) => void,

    dblClick: (
      element: TargetElement,
      eventInit?: MouseEvent$MouseEventInit,
      options?: ClickOptions
    ) => void,

    selectOptions: (
      element: TargetElement,
      values: string | string[] | HTMLElement | HTMLElement[],
      eventInit?: MouseEvent$MouseEventInit
    ) => void,

    deselectOptions: (
      element: TargetElement,
      values: string | string[] | HTMLElement | HTMLElement[],
      eventInit?: MouseEvent$MouseEventInit
    ) => void,

    upload: (
      element: TargetElement,
      files: FilesArgument,
      init?: UploadInitArgument
    ) => void,

    type: (
      element: TargetElement,
      text: string,
      userOpts?: TypeOpts
    ) => Promise<void>,

    tab: (userOpts?: TabUserOptions) => void,

    paste: (
      element: TargetElement,
      text: string,
      eventInit?: MouseEvent$MouseEventInit,
      pasteOptions?: {|
        initialSelectionStart?: number,
        initialSelectionEnd?: number,
      |}
    ) => void,

    hover: (element: TargetElement, init?: MouseEvent$MouseEventInit) => void,

    unhover: (element: TargetElement, init?: MouseEvent$MouseEventInit) => void,
  |};

  declare export default UserEvent;
}
