declare module 'tabbable' {
  declare type TabbableOptions = {|
    includeContainer?: ?boolean,
  |};

  declare interface UntouchabilityChecker {
    hasDisplayNone(node: Node, nodeComputedStyle: any): boolean;
    isUntouchable(node: Node): boolean;
  }

  declare module.exports: {
    (el: Node, options?: ?TabbableOptions): Array<Node>,
    isTabbable(node: Node, untouchabilityChecker?: ?UntouchabilityChecker): boolean,
    isFocusable(node: Node, untouchabilityChecker?: ?UntouchabilityChecker): boolean,
  };
}
