declare module 'body-scroll-lock' {
  declare type BodyScrollLock = {|
    disableBodyScroll: (target: HTMLElement) => void,
    enableBodyScroll: (target: HTMLElement) => void,
    clearAllBodyScrollLocks: () => void,
  |};

  declare module.exports: BodyScrollLock;
}
