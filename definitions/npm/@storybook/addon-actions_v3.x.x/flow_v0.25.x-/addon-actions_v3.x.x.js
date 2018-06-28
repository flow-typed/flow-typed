declare module '@storybook/addon-actions' {
  declare type Action = (name: string) => (...args: Array<any>) => void;
  declare type DecorateFn = (args: Array<any>) => Array<any>;

  declare module.exports: {
    action: Action,
    decorateAction(args: Array<DecorateFn>): Action;
  };
}
