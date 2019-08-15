declare module 'tabbable' {
  declare type TabbableOptions = {|
    includeContainer?: ?boolean,
  |};

  declare interface UntouchabilityChecker {
    hasDisplayNone(node: HTMLElement, nodeComputedStyle: any): boolean;
    isUntouchable(node: HTMLElement): boolean;
  }

  declare module.exports: {
    (el: HTMLElement, options?: ?TabbableOptions): Array<HTMLElement>,
    isTabbable(node: HTMLElement, untouchabilityChecker?: ?UntouchabilityChecker): boolean,
    isFocusable(node: HTMLElement | Document, untouchabilityChecker?: ?UntouchabilityChecker): boolean,
  };
}
