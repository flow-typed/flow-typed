declare module 'elegant-spinner' {
  declare module.exports: {|
    (): () => string,
    +frames: Array<string>,
  |};
}
