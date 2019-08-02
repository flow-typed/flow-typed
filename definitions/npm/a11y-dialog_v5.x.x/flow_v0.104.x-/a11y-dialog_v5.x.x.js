declare module "a11y-dialog" {
  declare type Targets = NodeList<HTMLElement> | HTMLElement | string;
  declare type DialogEvent = "create" | "show" | "hide" | "destroy";

  declare class A11yDialog {
    dialog: HTMLDialogElement | HTMLElement;
    constructor(node: HTMLElement, targets?: Targets): void;
    create(targets?: Targets): this;
    show(event?: Event): this;
    hide(event?: Event): this;
    destroy(): this;
    on(
      type: DialogEvent,
      handler: (dialogEl: HTMLElement, event: ?Event) => void
    ): this;
    off(
      type: DialogEvent,
      handler: (dialogEl: HTMLElement, event: ?Event) => void
    ): this;
  }

  declare module.exports: typeof A11yDialog;
}
