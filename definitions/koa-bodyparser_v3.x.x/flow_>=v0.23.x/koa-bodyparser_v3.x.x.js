declare module 'koa-bodyparser' {
  declare var exports: (options?: {
    encode?: string,
    formLimit?: string,
    jsonLimit?: string,
    strict?: bool,
    detectJSON?: Function,
    extendTypes?: Object,
    onerror?: Function,
  }) => Function;
}
