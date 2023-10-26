declare module 'body-scroll-lock-upgrade' {
  declare type BodyScrollOptions = {|
    reserveScrollBarGap?: boolean,
    allowTouchMove?: (el: any) => boolean,
  |}

  declare type BodyScrollLock = {|
    disableBodyScroll: (target: HTMLElement, options?: BodyScrollOptions) => void,
    enableBodyScroll: (target: HTMLElement) => void,
    clearAllBodyScrollLocks: () => void,
  |};

  declare module.exports: BodyScrollLock;
}
