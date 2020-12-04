declare module "notifyjs" {
  declare type NotifyOptions = {
    body?: string,
    closeOnClick?: boolean,
    icon?: string,
    lang?: string,
    notifyClick?: Function,
    notifyClose?: Function,
    notifyError?: Function,
    notifyShow?: Function,
    requireInteraction?: boolean,
    tag?: string,
    timeout?: number
  };

  declare class NotifyJS {
    static (title: string, options: NotifyOptions): NotifyJS;
    static requestPermission(
      onPermissionGrantedCallback?: Function,
      onPermissionDeniedCallback?: Function
    ): void;
    static isSupported(): boolean;
    static needsPermission: boolean;
    show(): void;
  }
  declare module.exports: Class<NotifyJS>;
}
