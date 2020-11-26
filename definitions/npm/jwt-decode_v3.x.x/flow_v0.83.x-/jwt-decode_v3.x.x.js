declare module 'jwt-decode' {
  declare type Options = {|
    header?: boolean;
  |};

  declare type JwtDecode = (string, options?: Options) => {
    [key: string]: any,
    ...
  };

  declare module.exports: JwtDecode;
}
