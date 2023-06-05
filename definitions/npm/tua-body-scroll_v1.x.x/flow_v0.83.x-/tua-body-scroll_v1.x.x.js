declare module 'tua-body-scroll' {
  declare type AcceptedElement = HTMLElement | Array<HTMLElement> | null | void;

  declare module.exports: {|
    lock(targetElement?: AcceptedElement): void,
    unlock(targetElement?: AcceptedElement): void,
    clearBodyLocks(): void,
  |};
}
