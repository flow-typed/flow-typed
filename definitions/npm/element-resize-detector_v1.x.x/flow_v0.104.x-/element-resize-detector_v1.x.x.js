declare module "element-resize-detector" {
  declare type  ErdOptions = { strategy?: 'scroll' | 'object', ... }

  declare type Erd = {
    listenTo(element: HTMLElement, callback: (elem: HTMLElement) => void): void,
    removeListener(element: HTMLElement, callback: (elem: HTMLElement) => void): void,
    removeAllListeners(element: HTMLElement): void,
    uninstall(element: HTMLElement): void,
    ...
  }

  declare module.exports: (options?: ErdOptions) => Erd
}
