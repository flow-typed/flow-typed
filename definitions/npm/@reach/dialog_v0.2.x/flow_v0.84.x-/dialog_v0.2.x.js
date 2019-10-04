// @flow

declare module '@reach/dialog' {
  declare export var Dialog: React$ComponentType<{
    isOpen?: boolean,
    onDismiss?: () => void,
    initialFocusRef?: {| current: ?HTMLElement |},
    children: React$Node,
    ...
  }>;

  declare export var DialogContent: React$ComponentType<{
    children: React$Node,
    ...
  }>;

  declare export var DialogOverlay: typeof Dialog;
}

declare module '@reach/dialog/styles.css' {
  declare export default void;
}
