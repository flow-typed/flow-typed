type Options = {
  debug?: boolean,
  message?: string
};

declare module 'copy-to-clipboard' {
  declare module.exports: (text: string, options?: Options) => boolean;
}
