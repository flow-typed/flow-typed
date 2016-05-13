declare module 'notifyjs' {
  declare type NotifyOptions = {
    body?: string,
    closeOnClick?: bool,
    icon?: string,
    lang?: string,
    notifyClick?: Function,
    notifyClose?: Function,
    notifyError?: Function,
    notifyShow?: Function,
    requireInteraction?: bool,
    tag?: string,
    timeout?: number,
  };

  declare class NotifyJS {
    static (title: string, options: NotifyOptions): NotifyJS;
    static requestPermission(onPermissionGrantedCallback?: Function, onPermissionDeniedCallback?: Function): void;
    static isSupported(): bool;
    static needsPermission: bool;
    show(): void;
  }
  declare var exports: Class<NotifyJS>;
}
